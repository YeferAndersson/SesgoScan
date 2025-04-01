'use client';

import { useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PasoEscenario, Escenario } from '@/lib/types';

interface EscenarioIntroProps {
  paso: PasoEscenario;
  escenario: Escenario;
  onContinue: () => void;
}

export default function EscenarioIntro({ paso, escenario, onContinue }: EscenarioIntroProps) {
  const [leido, setLeido] = useState(false);

  return (
    <div className="card max-w-4xl mx-auto animate-fade-in">
      {escenario.imagenPortada && (
        <div className="relative w-full h-64 mb-6 rounded-t-lg overflow-hidden">
          <Image
            src={escenario.imagenPortada || '/images/escenarios/default.jpg'}
            alt={escenario.titulo}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="prose max-w-none">
        <ReactMarkdown>{paso.descripcion}</ReactMarkdown>
        
        {paso.contenidoExtra && (
          <div className="mt-6 bg-neutral-50 p-4 rounded-md">
            <ReactMarkdown>{paso.contenidoExtra}</ReactMarkdown>
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={leido}
              onChange={() => setLeido(!leido)}
              className="rounded text-primary-600 focus:ring-primary-500 h-5 w-5"
            />
            <span className="text-sm text-neutral-700">
              He leído y entendido el contexto de este escenario
            </span>
          </label>
          
          <button
            onClick={onContinue}
            disabled={!leido}
            className={`btn ${
              leido ? 'btn-primary' : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
            } sm:ml-auto`}
          >
            Comenzar escenario
          </button>
        </div>
      </div>
      
      <div className="mt-4 border-t border-neutral-200 pt-4 text-sm text-neutral-500">
        <p>
          <strong>Área:</strong> {escenario.area.charAt(0).toUpperCase() + escenario.area.slice(1)}
          {' • '}
          <strong>Nivel:</strong> {
            escenario.nivel === 'principiante' ? 'Principiante' :
            escenario.nivel === 'intermedio' ? 'Intermedio' :
            'Avanzado'
          }
          {' • '}
          <strong>Duración estimada:</strong> {escenario.duracionEstimada} minutos
        </p>
      </div>
    </div>
  );
}