'use client';

import { useState } from 'react';
import { Sesgo } from '@/lib/types';

interface SesgoIdentificado {
  sesgoId: string;
  nivel: 'bajo' | 'medio' | 'alto';
  explicacion: string;
  detalle?: Sesgo | undefined;
}

interface SesgosIdentificadosProps {
  sesgos: SesgoIdentificado[];
}

export default function SesgosIdentificados({ sesgos }: SesgosIdentificadosProps) {
  const [sesgoExpandido, setSesgoExpandido] = useState<string | null>(null);

  if (sesgos.length === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">¡Excelente trabajo!</h3>
        <p className="text-green-700">
          No se identificaron sesgos significativos en tus decisiones. Has demostrado un buen
          entendimiento de los principios de investigación objetiva.
        </p>
      </div>
    );
  }

  const getNivelColor = (nivel: 'bajo' | 'medio' | 'alto') => {
    switch (nivel) {
      case 'bajo':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'medio':
        return 'bg-amber-200 text-amber-800 border-amber-300';
      case 'alto':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-200';
    }
  };

  const toggleSesgoExpandido = (sesgoId: string) => {
    if (sesgoExpandido === sesgoId) {
      setSesgoExpandido(null);
    } else {
      setSesgoExpandido(sesgoId);
    }
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Sesgos identificados</h3>
      
      <div className="space-y-4">
        {sesgos.map((sesgo) => (
          <div 
            key={sesgo.sesgoId}
            className="border rounded-lg overflow-hidden"
          >
            <div 
              className={`p-4 cursor-pointer ${getNivelColor(sesgo.nivel)}`}
              onClick={() => toggleSesgoExpandido(sesgo.sesgoId)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">
                  {sesgo.detalle?.nombre || sesgo.sesgoId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </h4>
                <div className="flex items-center">
                  <span className="text-xs font-semibold uppercase mr-2">
                    {sesgo.nivel === 'bajo' ? 'Nivel bajo' : sesgo.nivel === 'medio' ? 'Nivel medio' : 'Nivel alto'}
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform ${sesgoExpandido === sesgo.sesgoId ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {sesgoExpandido === sesgo.sesgoId && (
              <div className="p-4 border-t border-neutral-200 bg-white">
                <div className="mb-3">
                  <h5 className="font-medium text-sm text-neutral-700 mb-1">En tus decisiones:</h5>
                  <p className="text-neutral-600">{sesgo.explicacion}</p>
                </div>
                
                {sesgo.detalle && (
                  <>
                    <div className="mb-3">
                      <h5 className="font-medium text-sm text-neutral-700 mb-1">Descripción del sesgo:</h5>
                      <p className="text-neutral-600">{sesgo.detalle.descripcion}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h5 className="font-medium text-sm text-neutral-700 mb-1">Ejemplo:</h5>
                      <p className="text-neutral-600">{sesgo.detalle.ejemplo}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-sm text-neutral-700 mb-1">Impacto en la investigación:</h5>
                      <p className="text-neutral-600">{sesgo.detalle.impacto}</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}