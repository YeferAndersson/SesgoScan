// Tipo para sesgo cognitivo
export interface Sesgo {
  id: string;
  nombre: string;
  descripcion: string;
  ejemplo: string;
  impacto: string; // Cómo afecta a la investigación
  estrategias: string[]; // Estrategias para mitigarlo
  referencia?: string; // Referencia bibliográfica opcional
  categoria: 'cognitivo' | 'metodologico' | 'estadistico' | 'social';
  icono?: string; // Nombre del icono representativo
}

// Tipo para opción de diseño experimental
export interface OpcionDiseno {
  id: string;
  texto: string;
  descripcion: string;
  sesgosRelacionados: string[]; // IDs de los sesgos que pueden estar relacionados
  esOptima: boolean; // Si es una opción óptima o contiene sesgos
  consecuencias?: string; // Descripción de las consecuencias de elegir esta opción
}

// Tipo para paso del escenario
export interface PasoEscenario {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'introduccion' | 'diseno' | 'analisis' | 'interpretacion' | 'retroalimentacion' | 'conclusion';
  opciones?: OpcionDiseno[]; // Para pasos que requieren selección
  contenidoExtra?: string; // Cualquier contenido adicional en markdown
}

// Tipo para escenario completo
export interface Escenario {
  id: string;
  titulo: string;
  descripcion: string;
  contexto: string; // Descripción detallada del contexto de investigación
  area: 'medicina' | 'psicologia' | 'sociologia' | 'economia' | 'ciencias_naturales' | 'general' | 'bigdata' |'historia' | 'ecologia' | 'estadistica'  | 'ciencia de datos';
  nivel: 'principiante' | 'intermedio' | 'avanzado';
  duracionEstimada: number; // En minutos
  pasos: PasoEscenario[];
  sesgosAbordados: string[]; // IDs de los sesgos que se abordan
  imagenPortada?: string; // URL de la imagen de portada
}

// Tipo para campaña (colección de escenarios)
export interface Campana {
  id: string;
  titulo: string;
  descripcion: string;
  area: string;
  nivel: 'principiante' | 'intermedio' | 'avanzado';
  escenarios: string[]; // IDs de los escenarios que componen la campaña
  estaCompleta: boolean; // Si la campaña está completa o en desarrollo
  fechaCreacion: string; // Fecha de creación en formato ISO
  imagenPortada?: string; // URL de la imagen de portada
}

// Tipo para respuesta del usuario a un paso
export interface RespuestaUsuario {
  escenarioId: string;
  pasoId: string;
  opcionSeleccionada?: string; // ID de la opción seleccionada (si aplica)
  justificacion?: string; // Justificación escrita por el usuario
  timestamp: number; // Momento en que se guardó la respuesta
}

// Tipo para retroalimentación sobre las respuestas
export interface Retroalimentacion {
  escenarioId: string;
  respuestas: RespuestaUsuario[];
  sesgosIdentificados: {
    sesgoId: string;
    nivel: 'bajo' | 'medio' | 'alto'; // Nivel de presencia del sesgo
    explicacion: string; // Explicación de cómo se manifestó
  }[];
  puntuacionTotal: number; // Puntuación total obtenida
  estrategiasRecomendadas: string[]; // Estrategias recomendadas basadas en los sesgos identificados
  conclusiones: string; // Conclusiones generales sobre el desempeño
}

// Tipo para progreso del usuario
export interface ProgresoUsuario {
  userId: string;
  campanasIniciadas: {
    campanaId: string;
    progreso: number; // Porcentaje de progreso
    fechaInicio: string;
    fechaUltimaActividad: string;
  }[];
  escenariosCompletados: string[]; // IDs de escenarios completados
  puntuacionTotal: number; // Puntuación acumulada
  logros: string[]; // IDs de logros desbloqueados
}

// Tipo para datos de simulación
export interface DatosSimulacion {
  escenarioId: string;
  tipoSimulacion: string; // Tipo de datos a simular
  datos: any[]; // Datos simulados para análisis
  metadatos: {
    columnas: string[];
    descripcion: string;
    sesgosIntroducidos?: string[]; // IDs de sesgos introducidos intencionalmente
  };
}

// Tipo para logro
export interface Logro {
  id: string;
  nombre: string;
  descripcion: string;
  condicion: string; // Descripción de la condición para desbloquear
  icono: string; // URL del icono
  rareza: 'comun' | 'poco_comun' | 'raro' | 'epico';
}

// Tipo para estrategia de mitigación
export interface EstrategiaMitigacion {
  id: string;
  nombre: string;
  descripcion: string;
  ejemplo: string;
  aplicabilidad: string[]; // IDs de sesgos a los que aplica
  referencia?: string; // Referencia bibliográfica opcional
}

// Tipo para usuario
export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  areaInteres?: string;
  nivelExperiencia?: 'principiante' | 'intermedio' | 'avanzado';
  fechaRegistro: string;
  progreso: ProgresoUsuario;
}