'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEscenarioStore } from '@/store/escenarioStore';
import { useUserStore } from '@/store/userStore';
import EscenarioIntro from './EscenarioIntro';
import DisenoExperimento from './DisenoExperimento';
import AnalisisDatos from './AnalisisDatos';
import RetroalimentacionView from './RetroalimentacionView';
import ConclusionView from './ConclusionView';
import ProgressBar from '@/components/ui/ProgressBar';
import Alert from '@/components/ui/Alert';

interface EscenarioViewProps {
  escenarioId: string;
  campanaId: string;
}

export default function EscenarioView({ escenarioId, campanaId }: EscenarioViewProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  
  // Estado global del escenario
  const { 
    escenarioActual, 
    pasoActual, 
    indicePasoActual,
    cargarEscenario, 
    irAPasoAnterior, 
    irASiguientePaso,
    guardarRespuesta,
    cargando,
    error: escenarioError,
    isUltimoPaso,
    isPrimerPaso
  } = useEscenarioStore();
  
  // Estado del usuario para tracking de progreso
  const { iniciarCampana, completarEscenario } = useUserStore();

  // Cargar el escenario al montar el componente
  useEffect(() => {
    const loadEscenario = async () => {
      try {
        await cargarEscenario(escenarioId);
        iniciarCampana(campanaId);
      } catch (err) {
        setError('Error al cargar el escenario. Por favor, intenta de nuevo.');
      }
    };
    
    loadEscenario();
  }, [escenarioId, campanaId, cargarEscenario, iniciarCampana]);

  // Maneja errores de carga
  useEffect(() => {
    if (escenarioError) {
      setError(escenarioError);
    }
  }, [escenarioError]);

  // Si no hay escenario o paso actual, mostrar loader
  if (!escenarioActual || !pasoActual) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-neutral-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-neutral-200 rounded w-40 mx-auto"></div>
        </div>
      </div>
    );
  }

  // Calcular progreso del escenario
  const progreso = ((indicePasoActual + 1) / escenarioActual.pasos.length) * 100;

  // Renderizar el contenido según el tipo de paso actual
  const renderPasoContent = () => {
    if (!pasoActual) return null;

    switch (pasoActual.tipo) {
      case 'introduccion':
        return (
          <EscenarioIntro 
            paso={pasoActual}
            escenario={escenarioActual}
            onContinue={irASiguientePaso}
          />
        );
      case 'diseno':
        return (
          <DisenoExperimento
            paso={pasoActual}
            onSeleccionarOpcion={(opcionId, justificacion) => {
              guardarRespuesta({
                escenarioId: escenarioActual.id,
                pasoId: pasoActual.id,
                opcionSeleccionada: opcionId,
                justificacion
              });
              irASiguientePaso();
            }}
          />
        );
      case 'analisis':
        return (
          <AnalisisDatos
            paso={pasoActual}
            onSeleccionarOpcion={(opcionId, justificacion) => {
              guardarRespuesta({
                escenarioId: escenarioActual.id,
                pasoId: pasoActual.id,
                opcionSeleccionada: opcionId,
                justificacion
              });
              irASiguientePaso();
            }}
          />
        );
      case 'interpretacion':
        return (
          <DisenoExperimento
            paso={pasoActual}
            onSeleccionarOpcion={(opcionId, justificacion) => {
              guardarRespuesta({
                escenarioId: escenarioActual.id,
                pasoId: pasoActual.id,
                opcionSeleccionada: opcionId,
                justificacion
              });
              irASiguientePaso();
            }}
          />
        );
      case 'retroalimentacion':
        return (
          <RetroalimentacionView 
            escenario={escenarioActual}
            onContinue={irASiguientePaso}
          />
        );
      case 'conclusion':
        return (
          <ConclusionView 
            escenario={escenarioActual}
            onComplete={() => {
              // Marcar escenario como completado y agregar puntuación
              completarEscenario(escenarioActual.id, 100); // Puntuación ficticia
              // Redirigir a la página de la campaña
              router.push(`/campanas/${campanaId}`);
            }}
          />
        );
      default:
        return <div>Tipo de paso no reconocido</div>;
    }
  };

  return (
    <div className="animate-fade-in">
      {error && (
        <Alert 
          type="error" 
          title="Error" 
          message={error} 
          onClose={() => setError(null)} 
        />
      )}
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{escenarioActual.titulo}</h1>
        <ProgressBar 
          progress={progreso} 
          label={`Paso ${indicePasoActual + 1} de ${escenarioActual.pasos.length}`} 
        />
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">{pasoActual.titulo}</h2>
        
        {renderPasoContent()}
      </div>
      
      <div className="flex justify-between mt-8">
        <button
          onClick={irAPasoAnterior}
          disabled={isPrimerPaso() || cargando}
          className={`btn ${isPrimerPaso() ? 'bg-neutral-300 cursor-not-allowed' : 'btn-outline'}`}
        >
          Anterior
        </button>
        
        {!isUltimoPaso() && pasoActual.tipo !== 'diseno' && 
         pasoActual.tipo !== 'analisis' && pasoActual.tipo !== 'interpretacion' && (
          <button
            onClick={irASiguientePaso}
            disabled={cargando}
            className="btn btn-primary"
          >
            {cargando ? 'Cargando...' : 'Siguiente'}
          </button>
        )}
      </div>
    </div>
  );
}