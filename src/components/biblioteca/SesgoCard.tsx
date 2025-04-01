'use client';

import { Sesgo } from '@/lib/types';

interface SesgoCardProps {
  sesgo: Sesgo;
  onClick: () => void;
}

export default function SesgoCard({ sesgo, onClick }: SesgoCardProps) {
  // Obtener color según categoría del sesgo
  const getCategoriaColor = () => {
    switch (sesgo.categoria) {
      case 'cognitivo':
        return 'bg-blue-100 text-blue-800';
      case 'metodologico':
        return 'bg-green-100 text-green-800';
      case 'estadistico':
        return 'bg-purple-100 text-purple-800';
      case 'social':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Obtener texto de categoría
  const getCategoriaTexto = () => {
    switch (sesgo.categoria) {
      case 'cognitivo':
        return 'Cognitivo';
      case 'metodologico':
        return 'Metodológico';
      case 'estadistico':
        return 'Estadístico';
      case 'social':
        return 'Social';
      default:
        return 'Otro';
    }
  };

  return (
    <div 
      className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold">{sesgo.nombre}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoriaColor()}`}>
            {getCategoriaTexto()}
          </span>
        </div>
        
        <p className="text-neutral-600 text-sm mb-4">
          {sesgo.descripcion.length > 150 
            ? `${sesgo.descripcion.substring(0, 150)}...` 
            : sesgo.descripcion}
        </p>
        
        <button 
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
        </button>
      </div>
    </div>
  );
}