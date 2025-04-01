'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUserStore } from '@/store/userStore';
import { Escenario } from '@/lib/types';

interface EscenarioCardProps {
  escenario: Escenario;
  campanaId: string;
  numero: number;
}

export default function EscenarioCard({ escenario, campanaId, numero }: EscenarioCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { usuario } = useUserStore();
  
  // Verificar si el escenario ya ha sido completado
  const isCompletado = usuario?.progreso?.escenariosCompletados.includes(escenario.id) || false;
  
  return (
    <div className={`bg-white rounded-lg border ${
      isCompletado ? 'border-green-300' : 'border-neutral-200'
    } overflow-hidden transition-all hover:shadow-md`}>
      <div className="p-6">
        <div className="flex items-start">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            isCompletado ? 'bg-green-100 text-green-700' : 'bg-neutral-100 text-neutral-700'
          }`}>
            {isCompletado ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <span className="font-semibold">{numero}</span>
            )}
          </div>
          
          <div className="ml-4 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-neutral-500 border border-neutral-200 px-2 py-1 rounded-full">
                {escenario.area.charAt(0).toUpperCase() + escenario.area.slice(1)}
              </span>
              
              <span className="text-xs text-neutral-500 border border-neutral-200 px-2 py-1 rounded-full">
                {escenario.duracionEstimada} min
              </span>
            </div>
            
            <h3 className="text-lg font-semibold">{escenario.titulo}</h3>
            
            <p className="text-neutral-600 text-sm mt-1 mb-3">
              {expanded 
                ? escenario.descripcion 
                : escenario.descripcion.length > 100 
                ? `${escenario.descripcion.substring(0, 100)}...` 
                : escenario.descripcion}
            </p>
            
            {escenario.descripcion.length > 100 && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-primary-600 hover:text-primary-800 mb-4"
              >
                {expanded ? 'Mostrar menos' : 'Mostrar más'}
              </button>
            )}
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-neutral-500">
                {isCompletado ? 'Completado' : 'Aún no completado'}
              </div>
              
              <Link
                href={`/campanas/${campanaId}/escenarios/${escenario.id}`}
                className={`btn ${isCompletado ? 'btn-outline' : 'btn-primary'} py-1`}
              >
                {isCompletado ? 'Repetir' : 'Comenzar'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="px-6 py-3 bg-neutral-50 border-t border-neutral-200">
          <div className="text-sm">
            <div className="font-medium mb-2">Sesgos abordados:</div>
            <div className="flex flex-wrap gap-2">
              {escenario.sesgosAbordados.map((sesgoId) => (
                <span 
                  key={sesgoId}
                  className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs"
                >
                  {sesgoId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}