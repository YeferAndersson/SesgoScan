'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Campana } from '@/lib/types';
import CampanaCard from '@/components/campanas/CampanaCard';

interface CampanasViewProps {
  campanas: Campana[];
}

export default function CampanasView({ campanas }: CampanasViewProps) {
  const [filtroNivel, setFiltroNivel] = useState<string | null>(null);
  
  // Filtrar campañas según el nivel seleccionado
  const campanasFiltered = filtroNivel 
    ? campanas.filter(campana => campana.nivel === filtroNivel)
    : campanas;
  
  // Agrupar campañas por nivel (sólo las que pasan el filtro)
  const campanasPrincipiante = campanasFiltered.filter(campana => campana.nivel === 'principiante');
  const campanasIntermedio = campanasFiltered.filter(campana => campana.nivel === 'intermedio');
  const campanasAvanzado = campanasFiltered.filter(campana => campana.nivel === 'avanzado');

  // Función para manejar el clic en un botón de filtro
  const handleFiltroClick = (nivel: string | null) => {
    setFiltroNivel(nivel);
  };

  return (
    <div className="container-app py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Campañas</h1>
        <p className="text-neutral-600 max-w-3xl">
          Explora nuestras campañas educativas diseñadas para ayudarte a identificar y mitigar sesgos cognitivos y metodológicos en la investigación científica.
        </p>
      </div>
      
      {/* Filtros - Ahora funcionales */}
      <div className="mb-10 bg-neutral-50 p-4 rounded-lg border border-neutral-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-neutral-600">
            <span className="font-medium">Filtrar por:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => handleFiltroClick(null)}
              className={`px-3 py-1 text-sm rounded-full ${
                filtroNivel === null 
                  ? 'bg-primary-100 text-primary-800 font-medium' 
                  : 'border border-neutral-300 hover:bg-neutral-100'
              }`}
            >
              Todos los niveles
            </button>
            <button 
              onClick={() => handleFiltroClick('principiante')}
              className={`px-3 py-1 text-sm rounded-full ${
                filtroNivel === 'principiante' 
                  ? 'bg-primary-100 text-primary-800 font-medium' 
                  : 'border border-neutral-300 hover:bg-neutral-100'
              }`}
            >
              Principiante
            </button>
            <button 
              onClick={() => handleFiltroClick('intermedio')}
              className={`px-3 py-1 text-sm rounded-full ${
                filtroNivel === 'intermedio' 
                  ? 'bg-primary-100 text-primary-800 font-medium' 
                  : 'border border-neutral-300 hover:bg-neutral-100'
              }`}
            >
              Intermedio
            </button>
            <button 
              onClick={() => handleFiltroClick('avanzado')}
              className={`px-3 py-1 text-sm rounded-full ${
                filtroNivel === 'avanzado' 
                  ? 'bg-primary-100 text-primary-800 font-medium' 
                  : 'border border-neutral-300 hover:bg-neutral-100'
              }`}
            >
              Avanzado
            </button>
          </div>
        </div>
      </div>
      
      {/* Sin resultados */}
      {campanasFiltered.length === 0 && (
        <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200 mb-12">
          <svg
            className="mx-auto h-12 w-12 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-neutral-900">No se encontraron campañas</h3>
          <p className="mt-1 text-neutral-500">
            No hay campañas disponibles para el filtro seleccionado.
          </p>
        </div>
      )}
      
      {/* Campañas de nivel principiante */}
      {campanasPrincipiante.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-2 h-8 bg-green-500 rounded-full"></span>
            <h2 className="text-2xl font-bold">Nivel Principiante</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campanasPrincipiante.map((campana) => (
              <CampanaCard key={campana.id} campana={campana} />
            ))}
          </div>
        </section>
      )}
      
      {/* Campañas de nivel intermedio */}
      {campanasIntermedio.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-2 h-8 bg-blue-500 rounded-full"></span>
            <h2 className="text-2xl font-bold">Nivel Intermedio</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campanasIntermedio.map((campana) => (
              <CampanaCard key={campana.id} campana={campana} />
            ))}
          </div>
        </section>
      )}
      
      {/* Campañas de nivel avanzado */}
      {campanasAvanzado.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-2 h-8 bg-purple-500 rounded-full"></span>
            <h2 className="text-2xl font-bold">Nivel Avanzado</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campanasAvanzado.map((campana) => (
              <CampanaCard key={campana.id} campana={campana} />
            ))}
          </div>
        </section>
      )}
      
      {/* Próximamente - Campañas en desarrollo */}
      <section className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 text-center">
        <h2 className="text-2xl font-bold mb-4">Más campañas en desarrollo</h2>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Estamos trabajando constantemente para ampliar nuestra biblioteca de campañas y escenarios. ¡Vuelve pronto para descubrir nuevo contenido!
        </p>
        <Link href="/" className="btn btn-outline">
          Volver al inicio
        </Link>
      </section>
    </div>
  );
}