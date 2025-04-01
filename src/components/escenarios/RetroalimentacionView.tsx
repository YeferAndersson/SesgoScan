'use client';

import { useEffect } from 'react';
import { useEscenarioStore } from '@/store/escenarioStore';
import { Escenario } from '@/lib/types';
import { getSesgoPorId } from '@/data/sesgos';
import SesgosIdentificados from '@/components/retroalimentacion/SesgosIdentificados';
import EstrategiasCard from '@/components/retroalimentacion/EstrategiasCard';

interface RetroalimentacionViewProps {
  escenario: Escenario;
  onContinue: () => void;
}

export default function RetroalimentacionView({ escenario, onContinue }: RetroalimentacionViewProps) {
  const { retroalimentacion, respuestas, generarRetroalimentacion, cargando } = useEscenarioStore();

  // Generar retroalimentación si no existe
  useEffect(() => {
    if (!retroalimentacion && respuestas.length > 0) {
      generarRetroalimentacion();
    }
  }, [retroalimentacion, respuestas, generarRetroalimentacion]);

  // Si está cargando o no hay retroalimentación, mostrar loader
  if (cargando || !retroalimentacion) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mb-4"></div>
        <p className="text-neutral-600">Analizando tus respuestas...</p>
      </div>
    );
  }

  // Obtener información detallada de los sesgos identificados
  const sesgosDetallados = retroalimentacion.sesgosIdentificados.map(sesgoId => {
    const detalleSesgo = getSesgoPorId(sesgoId.sesgoId);
    return {
      ...sesgoId,
      detalle: detalleSesgo
    };
  });

  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-lg shadow-card p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4">Análisis de tus decisiones</h3>
        
        <div className="mb-6">
          <p className="text-lg mb-2">Puntuación total:</p>
          <div className="flex items-center">
            <div className="w-full bg-neutral-200 rounded-full h-6">
              <div 
                className="bg-primary-600 h-6 rounded-full flex items-center justify-end pr-2 text-white text-sm font-medium"
                style={{ width: `${retroalimentacion.puntuacionTotal}%` }}
              >
                {retroalimentacion.puntuacionTotal}%
              </div>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-neutral-700">{retroalimentacion.conclusiones}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SesgosIdentificados sesgos={sesgosDetallados} />
        <EstrategiasCard estrategias={retroalimentacion.estrategiasRecomendadas} />
      </div>
      
      <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 mb-8">
        <h3 className="text-xl font-semibold mb-4">Resumen de tus decisiones</h3>
        
        <div className="space-y-4">
          {respuestas.map((respuesta) => {
            // Encontrar el paso correspondiente
            const paso = escenario.pasos.find(p => p.id === respuesta.pasoId);
            if (!paso || !paso.opciones) return null;
            
            // Encontrar la opción seleccionada
            const opcion = paso.opciones.find(o => o.id === respuesta.opcionSeleccionada);
            if (!opcion) return null;
            
            return (
              <div key={respuesta.pasoId} className="border-b border-neutral-200 pb-4">
                <h4 className="font-medium">{paso.titulo}</h4>
                <p className="text-neutral-700 mt-1">Tu elección: {opcion.texto}</p>
                
                {/* Mostrar si la opción era óptima */}
                <div className={`mt-2 text-sm ${opcion.esOptima ? 'text-green-600' : 'text-amber-600'}`}>
                  {opcion.esOptima ? (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Elección óptima
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Podría mejorarse
                    </div>
                  )}
                </div>
                
                {/* Justificación */}
                {respuesta.justificacion && (
                  <div className="mt-2">
                    <details className="text-sm">
                      <summary className="text-primary-600 cursor-pointer">Tu justificación</summary>
                      <p className="mt-2 text-neutral-600 bg-neutral-50 p-2 rounded">
                        "{respuesta.justificacion}"
                      </p>
                    </details>
                  </div>
                )}
                
                {/* Consecuencias */}
                {opcion.consecuencias && (
                  <div className="mt-2 text-sm text-neutral-600 bg-neutral-50 p-2 rounded">
                    <strong>Consecuencias:</strong> {opcion.consecuencias}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="text-center">
        <button
          onClick={onContinue}
          className="btn btn-primary px-8"
        >
          Continuar a la conclusión
        </button>
      </div>
    </div>
  );
}