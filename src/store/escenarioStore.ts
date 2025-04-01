import { create } from 'zustand';
import { Escenario, PasoEscenario, RespuestaUsuario, Retroalimentacion } from '@/lib/types';
import { getEscenarioPorId } from '@/data/escenarios';

interface EscenarioState {
  escenarioActual: Escenario | null;
  pasoActual: PasoEscenario | null;
  indicePasoActual: number;
  respuestas: RespuestaUsuario[];
  retroalimentacion: Retroalimentacion | null;
  cargando: boolean;
  error: string | null;
  
  // Acciones
  cargarEscenario: (escenarioId: string) => Promise<void>;
  irAPaso: (indice: number) => void;
  irASiguientePaso: () => void;
  irAPasoAnterior: () => void;
  guardarRespuesta: (respuesta: Omit<RespuestaUsuario, 'timestamp'>) => void;
  generarRetroalimentacion: () => Promise<void>;
  reiniciarEscenario: () => void;
  
  // Selectores
  getPasosPorTipo: (tipo: PasoEscenario['tipo']) => PasoEscenario[];
  getRespuestaPorPasoId: (pasoId: string) => RespuestaUsuario | undefined;
  getPasoIndex: (pasoId: string) => number;
  isUltimoPaso: () => boolean;
  isPrimerPaso: () => boolean;
}

export const useEscenarioStore = create<EscenarioState>((set, get) => ({
  escenarioActual: null,
  pasoActual: null,
  indicePasoActual: 0,
  respuestas: [],
  retroalimentacion: null,
  cargando: false,
  error: null,
  
  cargarEscenario: async (escenarioId) => {
    set({ cargando: true, error: null });
    try {
      // En una aplicación real, aquí se podría hacer una llamada a la API
      // Para simplificar, usamos la función de datos estáticos
      const escenario = getEscenarioPorId(escenarioId);
      
      if (!escenario) {
        throw new Error(`Escenario con ID ${escenarioId} no encontrado`);
      }
      
      set({ 
        escenarioActual: escenario,
        pasoActual: escenario.pasos[0],
        indicePasoActual: 0,
        respuestas: [],
        retroalimentacion: null,
        cargando: false
      });
    } catch (error) {
      set({ error: (error as Error).message, cargando: false });
    }
  },
  
  irAPaso: (indice) => {
    const { escenarioActual } = get();
    if (!escenarioActual) return;
    
    if (indice >= 0 && indice < escenarioActual.pasos.length) {
      set({
        pasoActual: escenarioActual.pasos[indice],
        indicePasoActual: indice
      });
    }
  },
  
  irASiguientePaso: () => {
    const { indicePasoActual, escenarioActual } = get();
    if (!escenarioActual) return;
    
    const nuevoIndice = indicePasoActual + 1;
    if (nuevoIndice < escenarioActual.pasos.length) {
      set({
        pasoActual: escenarioActual.pasos[nuevoIndice],
        indicePasoActual: nuevoIndice
      });
    }
  },
  
  irAPasoAnterior: () => {
    const { indicePasoActual, escenarioActual } = get();
    if (!escenarioActual) return;
    
    const nuevoIndice = indicePasoActual - 1;
    if (nuevoIndice >= 0) {
      set({
        pasoActual: escenarioActual.pasos[nuevoIndice],
        indicePasoActual: nuevoIndice
      });
    }
  },
  
  guardarRespuesta: (respuesta) => {
    const { escenarioActual, respuestas } = get();
    if (!escenarioActual) return;
    
    // Crear objeto de respuesta completo
    const respuestaCompleta: RespuestaUsuario = {
      ...respuesta,
      timestamp: Date.now()
    };
    
    // Verificar si ya existe una respuesta para este paso
    const indiceRespuestaExistente = respuestas.findIndex(
      r => r.escenarioId === respuesta.escenarioId && r.pasoId === respuesta.pasoId
    );
    
    // Actualizar o agregar la respuesta
    const nuevasRespuestas = [...respuestas];
    if (indiceRespuestaExistente >= 0) {
      nuevasRespuestas[indiceRespuestaExistente] = respuestaCompleta;
    } else {
      nuevasRespuestas.push(respuestaCompleta);
    }
    
    set({ respuestas: nuevasRespuestas });
  },
  
  generarRetroalimentacion: async () => {
    const { escenarioActual, respuestas } = get();
    if (!escenarioActual) return;
    
    set({ cargando: true });
    
    try {
      // Aquí, en una aplicación real, enviaríamos las respuestas a un backend
      // y recibiríamos la retroalimentación calculada
      // Para desarrollo, simulamos con un timeout y retroalimentación ficticia
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Retroalimentación simulada basada en las respuestas
      const retroalimentacionSimulada: Retroalimentacion = {
        escenarioId: escenarioActual.id,
        respuestas: respuestas,
        sesgosIdentificados: [
          {
            sesgoId: 'sesgo-confirmacion',
            nivel: 'medio',
            explicacion: 'Detectamos una tendencia a favorecer información que confirma hipótesis iniciales en tus decisiones de diseño y análisis de datos.'
          },
          {
            sesgoId: 'sesgo-seleccion',
            nivel: 'bajo',
            explicacion: 'Observamos algunos criterios de selección que podrían limitar la generalización de los resultados.'
          }
        ],
        puntuacionTotal: 75, // Puntuación ficticia
        estrategiasRecomendadas: [
          'Implementar preregistros de estudios',
          'Considerar múltiples perspectivas al interpretar resultados',
          'Utilizar métodos ciegos cuando sea posible'
        ],
        conclusiones: 'Has demostrado una buena conciencia de los posibles sesgos, aunque hay áreas específicas donde podrías mejorar tus decisiones para aumentar la objetividad y rigurosidad de tu investigación.'
      };
      
      set({ 
        retroalimentacion: retroalimentacionSimulada, 
        cargando: false 
      });
      
      // Ir automáticamente al paso de retroalimentación
      const pasoRetroalimentacion = get().getPasosPorTipo('retroalimentacion')[0];
      if (pasoRetroalimentacion) {
        const indice = get().getPasoIndex(pasoRetroalimentacion.id);
        get().irAPaso(indice);
      }
      
    } catch (error) {
      set({ 
        error: (error as Error).message, 
        cargando: false 
      });
    }
  },
  
  reiniciarEscenario: () => {
    const { escenarioActual } = get();
    if (!escenarioActual) return;
    
    set({
      pasoActual: escenarioActual.pasos[0],
      indicePasoActual: 0,
      respuestas: [],
      retroalimentacion: null
    });
  },
  
  getPasosPorTipo: (tipo) => {
    const { escenarioActual } = get();
    if (!escenarioActual) return [];
    
    return escenarioActual.pasos.filter(paso => paso.tipo === tipo);
  },
  
  getRespuestaPorPasoId: (pasoId) => {
    const { respuestas } = get();
    return respuestas.find(respuesta => respuesta.pasoId === pasoId);
  },
  
  getPasoIndex: (pasoId) => {
    const { escenarioActual } = get();
    if (!escenarioActual) return -1;
    
    return escenarioActual.pasos.findIndex(paso => paso.id === pasoId);
  },
  
  isUltimoPaso: () => {
    const { indicePasoActual, escenarioActual } = get();
    if (!escenarioActual) return true;
    
    return indicePasoActual === escenarioActual.pasos.length - 1;
  },
  
  isPrimerPaso: () => {
    return get().indicePasoActual === 0;
  }
}));