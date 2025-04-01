'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Campana } from '@/lib/types';

interface CampanaCardProps {
  campana: Campana;
}

export default function CampanaCard({ campana }: CampanaCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Determinar color de nivel
  const getNivelColor = () => {
    switch (campana.nivel) {
      case 'principiante':
        return 'bg-green-100 text-green-800';
      case 'intermedio':
        return 'bg-blue-100 text-blue-800';
      case 'avanzado':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/campanas/${campana.id}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={imageError ? '/images/campanas/default.jpg' : (campana.imagenPortada || '/images/campanas/default.jpg')}
            alt={campana.titulo}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center mb-2">
          <span className={`text-xs px-2 py-1 rounded-full ${getNivelColor()}`}>
            {campana.nivel.charAt(0).toUpperCase() + campana.nivel.slice(1)}
          </span>
          
          {!campana.estaCompleta && (
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">
              En desarrollo
            </span>
          )}
        </div>
        
        <Link href={`/campanas/${campana.id}`} className="block">
          <h3 className="text-xl font-semibold mb-2 hover:text-primary-600 transition-colors">
            {campana.titulo}
          </h3>
        </Link>
        
        <p className="text-neutral-600 text-sm mb-4">
          {campana.descripcion.length > 120 
            ? `${campana.descripcion.substring(0, 120)}...` 
            : campana.descripcion}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
          <span className="text-sm text-neutral-500">
            {campana.escenarios.length} {campana.escenarios.length === 1 ? 'escenario' : 'escenarios'}
          </span>
          
          <Link 
            href={`/campanas/${campana.id}`}
            className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center"
          >
            Ver detalles
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}