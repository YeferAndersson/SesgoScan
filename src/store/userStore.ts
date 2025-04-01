import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Usuario, ProgresoUsuario, Logro } from '@/lib/types';

interface UserState {
  usuario: Usuario | null;
  isLoading: boolean;
  error: string | null;
  
  // Acciones
  iniciarSesion: (email: string, password: string) => Promise<void>;
  cerrarSesion: () => void;
  registrarUsuario: (nombre: string, email: string, password: string) => Promise<void>;
  actualizarPerfil: (datos: Partial<Usuario>) => Promise<void>;
  
  // Progreso
  iniciarCampana: (campanaId: string) => void;
  completarEscenario: (escenarioId: string, puntuacion: number) => void;
  obtenerLogro: (logroId: string) => void;
  obtenerProgreso: () => ProgresoUsuario | null;
  getPuntuacionTotal: () => number;
  getLogrosDesbloqueados: () => string[];
}

// Usuario ficticio para desarrollo
const usuarioDemo: Usuario = {
  id: 'user-demo',
  nombre: 'Usuario Demo',
  email: 'demo@example.com',
  areaInteres: 'Medicina',
  nivelExperiencia: 'principiante',
  fechaRegistro: new Date().toISOString(),
  progreso: {
    userId: 'user-demo',
    campanasIniciadas: [],
    escenariosCompletados: [],
    puntuacionTotal: 0,
    logros: []
  }
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      usuario: null,
      isLoading: false,
      error: null,
      
      iniciarSesion: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          // En una aplicación real, aquí se haría una llamada a la API
          // Para desarrollo, simulamos con un timeout
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          if (email === 'demo@example.com' && password === 'password') {
            set({ usuario: usuarioDemo, isLoading: false });
          } else {
            throw new Error('Credenciales inválidas');
          }
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },
      
      cerrarSesion: () => {
        set({ usuario: null });
      },
      
      registrarUsuario: async (nombre, email, password) => {
        set({ isLoading: true, error: null });
        try {
          // Simulación de registro
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const nuevoUsuario: Usuario = {
            id: `user-${Date.now()}`,
            nombre,
            email,
            fechaRegistro: new Date().toISOString(),
            progreso: {
              userId: `user-${Date.now()}`,
              campanasIniciadas: [],
              escenariosCompletados: [],
              puntuacionTotal: 0,
              logros: []
            }
          };
          
          set({ usuario: nuevoUsuario, isLoading: false });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },
      
      actualizarPerfil: async (datos) => {
        set({ isLoading: true, error: null });
        try {
          // Simulación de actualización
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const { usuario } = get();
          if (!usuario) throw new Error('No hay usuario activo');
          
          set({ 
            usuario: { ...usuario, ...datos },
            isLoading: false 
          });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },
      
      iniciarCampana: (campanaId) => {
        const { usuario } = get();
        if (!usuario) return;
        
        const campanasIniciadas = [...usuario.progreso.campanasIniciadas];
        const campanaExistente = campanasIniciadas.find(c => c.campanaId === campanaId);
        
        if (campanaExistente) {
          // Actualizar última actividad
          campanaExistente.fechaUltimaActividad = new Date().toISOString();
        } else {
          // Agregar nueva campaña iniciada
          campanasIniciadas.push({
            campanaId,
            progreso: 0,
            fechaInicio: new Date().toISOString(),
            fechaUltimaActividad: new Date().toISOString()
          });
        }
        
        set({
          usuario: {
            ...usuario,
            progreso: {
              ...usuario.progreso,
              campanasIniciadas
            }
          }
        });
      },
      
      completarEscenario: (escenarioId, puntuacion) => {
        const { usuario } = get();
        if (!usuario) return;
        
        // Verificar si el escenario ya estaba completado
        const yaCompletado = usuario.progreso.escenariosCompletados.includes(escenarioId);
        
        // Actualizar escenarios completados si es nuevo
        const escenariosCompletados = yaCompletado 
          ? usuario.progreso.escenariosCompletados 
          : [...usuario.progreso.escenariosCompletados, escenarioId];
        
        // Actualizar puntuación total (solo si es nuevo)
        const puntuacionTotal = yaCompletado 
          ? usuario.progreso.puntuacionTotal 
          : usuario.progreso.puntuacionTotal + puntuacion;
        
        set({
          usuario: {
            ...usuario,
            progreso: {
              ...usuario.progreso,
              escenariosCompletados,
              puntuacionTotal
            }
          }
        });
      },
      
      obtenerLogro: (logroId) => {
        const { usuario } = get();
        if (!usuario) return;
        
        // Verificar si ya tiene el logro
        if (usuario.progreso.logros.includes(logroId)) return;
        
        set({
          usuario: {
            ...usuario,
            progreso: {
              ...usuario.progreso,
              logros: [...usuario.progreso.logros, logroId]
            }
          }
        });
      },
      
      obtenerProgreso: () => {
        const { usuario } = get();
        return usuario ? usuario.progreso : null;
      },
      
      getPuntuacionTotal: () => {
        const { usuario } = get();
        return usuario ? usuario.progreso.puntuacionTotal : 0;
      },
      
      getLogrosDesbloqueados: () => {
        const { usuario } = get();
        return usuario ? usuario.progreso.logros : [];
      }
    }),
    {
      name: 'user-storage', // nombre para localStorage
      partialize: (state) => ({ usuario: state.usuario }), // solo persiste el usuario
    }
  )
);