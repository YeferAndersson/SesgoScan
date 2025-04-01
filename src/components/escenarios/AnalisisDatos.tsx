'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { PasoEscenario, OpcionDiseno } from '@/lib/types';
import DataVisualizer from '@/components/analisis/DataVisualizer';

interface AnalisisDatosProps {
  paso: PasoEscenario;
  onSeleccionarOpcion: (opcionId: string, justificacion: string) => void;
}

export default function AnalisisDatos({ paso, onSeleccionarOpcion }: AnalisisDatosProps) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);
  const [justificacion, setJustificacion] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showData, setShowData] = useState(false);

  // Datos simulados para visualización - Con tipo específico que coincida con la interfaz
  const datosSimulados = {
    tipo: 'grafico-barras' as const, // Usamos 'as const' para fijar el tipo literal
    titulo: 'Cambio en presión arterial sistólica (mmHg)',
    datos: [
      { grupo: 'Medicamento', valor: -12, error: 2 },
      { grupo: 'Placebo', valor: -8, error: 1.5 }
    ],
    ejeX: 'Grupo',
    ejeY: 'Cambio en mmHg'
  };

  // Verificar si el paso tiene opciones
  if (!paso.opciones || paso.opciones.length === 0) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 rounded-md">
        <p className="text-red-600">Este paso no tiene opciones configuradas.</p>
      </div>
    );
  }

  const handleSubmit = () => {
    // Validar selección
    if (!opcionSeleccionada) {
      setError('Por favor, selecciona una opción.');
      return;
    }

    // Validar justificación
    if (justificacion.trim().length < 20) {
      setError('Por favor, proporciona una justificación más detallada (mínimo 20 caracteres).');
      return;
    }

    // Limpiar error si todo está correcto
    setError(null);
    
    // Llamar al callback con la opción seleccionada y la justificación
    onSeleccionarOpcion(opcionSeleccionada, justificacion);
  };

  const toggleExpanded = (opcionId: string) => {
    if (expanded === opcionId) {
      setExpanded(null);
    } else {
      setExpanded(opcionId);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="prose max-w-none mb-6">
        <ReactMarkdown>{paso.descripcion}</ReactMarkdown>
        
        {paso.contenidoExtra && (
          <div className="mt-4 bg-neutral-50 p-4 rounded-md">
            <ReactMarkdown>{paso.contenidoExtra}</ReactMarkdown>
          </div>
        )}
      </div>

      <div className="mb-8">
        <button
          onClick={() => setShowData(!showData)}
          className="flex items-center text-primary-600 hover:text-primary-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-1 transition-transform ${showData ? 'rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {showData ? 'Ocultar visualización de datos' : 'Mostrar visualización de datos'}
        </button>
        
        {showData && (
          <div className="mt-4 border border-neutral-200 rounded-lg p-4 bg-white">
            <DataVisualizer datos={datosSimulados} />
          </div>
        )}
      </div>

      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold">Selecciona una estrategia de análisis:</h3>
        
        {paso.opciones.map((opcion: OpcionDiseno) => (
          <div 
            key={opcion.id}
            className={`border rounded-lg transition-all ${
              opcionSeleccionada === opcion.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-neutral-300 hover:border-primary-300'
            }`}
          >
            <div 
              className="p-4 cursor-pointer flex items-start"
              onClick={() => setOpcionSeleccionada(opcion.id)}
            >
              <input
                type="radio"
                id={opcion.id}
                name="opcion"
                value={opcion.id}
                checked={opcionSeleccionada === opcion.id}
                onChange={() => setOpcionSeleccionada(opcion.id)}
                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor={opcion.id} className="ml-3 cursor-pointer flex-1">
                <span className="block font-medium text-neutral-900">
                  {opcion.texto}
                </span>
                
                <div className="mt-2 flex items-center">
                  <button
                    type="button"
                    className="text-sm text-primary-600 hover:text-primary-800 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(opcion.id);
                    }}
                  >
                    {expanded === opcion.id ? 'Menos detalles' : 'Más detalles'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ml-1 transition-transform ${expanded === opcion.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {expanded === opcion.id && (
                  <div className="mt-2 text-sm text-neutral-600">
                    <p>{opcion.descripcion}</p>
                  </div>
                )}
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label htmlFor="justificacion" className="block text-sm font-medium text-neutral-700 mb-1">
          Justifica tu elección:
        </label>
        <textarea
          id="justificacion"
          name="justificacion"
          rows={4}
          value={justificacion}
          onChange={(e) => setJustificacion(e.target.value)}
          placeholder="Explica por qué has elegido esta estrategia de análisis y qué implicaciones tiene..."
          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
        />
        <p className="mt-1 text-sm text-neutral-500">
          Mínimo 20 caracteres. {justificacion.length}/500
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="btn btn-primary"
      >
        Continuar
      </button>
    </div>
  );
}