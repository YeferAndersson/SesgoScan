'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import confetti from 'canvas-confetti';
import { useEscenarioStore } from '@/store/escenarioStore';
import { Escenario } from '@/lib/types';
import AchievementBadge from '@/components/gamificacion/AchievementBadge';

interface ConclusionViewProps {
  escenario: Escenario;
  onComplete: () => void;
}

export default function ConclusionView({ escenario, onComplete }: ConclusionViewProps) {
  const { retroalimentacion } = useEscenarioStore();
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Encontrar el paso de conclusión
  const pasoConclusion = escenario.pasos.find(paso => paso.tipo === 'conclusion');

  // Lanzar confetti cuando se muestre el componente
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Si no se encuentra el paso de conclusión, mostrar un mensaje alternativo
  if (!pasoConclusion) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold mb-4">¡Escenario completado!</h3>
        <p>Has completado este escenario con éxito.</p>
        <button onClick={onComplete} className="btn btn-primary mt-6">
          Volver a la campaña
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2">¡Felicidades!</h3>
        <p className="text-xl text-neutral-600">Has completado el escenario con éxito</p>
        
        {retroalimentacion && (
          <div className="mt-4">
            <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full">
              Puntuación: {retroalimentacion.puntuacionTotal}/100
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow-card p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-4">{pasoConclusion.titulo}</h3>
        
        <div className="prose max-w-none">
          <ReactMarkdown>
            {pasoConclusion.descripcion}
          </ReactMarkdown>
          
          {pasoConclusion.contenidoExtra && (
            <ReactMarkdown>
              {pasoConclusion.contenidoExtra}
            </ReactMarkdown>
          )}
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Sesgos abordados en este escenario</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {escenario.sesgosAbordados.map((sesgoId) => (
            <div key={sesgoId} className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h4 className="font-medium text-lg">{sesgoId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
              <p className="text-sm text-neutral-600 mt-1">
                Has aprendido a identificar y mitigar este sesgo en un contexto de investigación.
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Logros desbloqueados */}
      {showConfetti && (
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Logros desbloqueados</h3>
          
          <div className="flex flex-wrap gap-4">
            <AchievementBadge 
              titulo="Investigador Novato"
              descripcion="Completaste tu primer escenario"
              icono="🔍"
              nivel="comun"
            />
            
            {retroalimentacion && retroalimentacion.puntuacionTotal >= 80 && (
              <AchievementBadge 
                titulo="Mente Objetiva"
                descripcion="Alcanzaste una puntuación de 80 o más"
                icono="🧠"
                nivel="poco_comun"
              />
            )}
          </div>
        </div>
      )}
      
      <div className="text-center">
        <button
          onClick={onComplete}
          className="btn btn-primary px-8 py-3 text-lg"
        >
          Volver a la campaña
        </button>
      </div>
    </div>
  );
}