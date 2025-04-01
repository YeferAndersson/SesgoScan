import { Campana } from '@/lib/types';

export const campanas: Campana[] = [
  {
    id: 'medicina-sesgos-fundamentales',
    titulo: 'Sesgos en la Investigación Médica',
    descripcion: 'Explora los sesgos más comunes que afectan los ensayos clínicos y la interpretación de resultados en la investigación médica.',
    area: 'Medicina',
    nivel: 'principiante',
    escenarios: [
      'medicina-eficacia-tratamiento',
      'medicina-efectos-secundarios'
    ],
    estaCompleta: true,
    fechaCreacion: '2025-02-01',
    imagenPortada: '/images/campanas/medicina.jpg'
  },
  {
    id: 'psicologia-experimental',
    titulo: 'Diseño Experimental en Psicología',
    descripcion: 'Aprende a identificar y mitigar sesgos en el diseño e interpretación de experimentos psicológicos.',
    area: 'Psicología',
    nivel: 'intermedio',
    escenarios: [
      'psicologia-efecto-placebo',
      'psicologia-muestra-representativa'
    ],
    estaCompleta: true,
    fechaCreacion: '2025-02-05',
    imagenPortada: '/images/campanas/psicologia.jpg'
  },
  {
    id: 'ciencias-sociales-encuestas',
    titulo: 'Sesgos en Encuestas y Estudios Sociales',
    descripcion: 'Identifica sesgos en el diseño, implementación y análisis de encuestas y estudios observacionales en ciencias sociales.',
    area: 'Ciencias Sociales',
    nivel: 'principiante',
    escenarios: [
      'social-correlacion-causalidad',
      'social-diseno-encuestas'
    ],
    estaCompleta: true,
    fechaCreacion: '2025-02-10',
    imagenPortada: '/images/campanas/ciencias-sociales.jpg'
  },
  {
    id: 'estadistica-analisis-avanzado',
    titulo: 'Análisis Estadístico Avanzado',
    descripcion: 'Profundiza en los sesgos estadísticos más complejos y aprende técnicas avanzadas para evitar errores en el análisis de datos.',
    area: 'Estadística',
    nivel: 'avanzado',
    escenarios: [
      'estadistica-p-hacking',
      'estadistica-seleccion-variables',
      'estadistica-comparacion-subgrupos'
    ],
    estaCompleta: false,
    fechaCreacion: '2025-02-15',
    imagenPortada: '/images/campanas/estadistica.jpg'
  },
  {
    id: 'ecologia-muestreo-campo',
    titulo: 'Sesgos en Estudios Ecológicos',
    descripcion: 'Explora los sesgos específicos de la investigación de campo en ecología y biología de la conservación.',
    area: 'Ecología',
    nivel: 'intermedio',
    escenarios: [
      'ecologia-muestreo-habitat',
      'ecologia-especies-indicadoras'
    ],
    estaCompleta: true,
    fechaCreacion: '2025-02-20',
    imagenPortada: '/images/campanas/ecologia.jpg'
  },
  {
    id: 'datos-masivos-interpretativos',
    titulo: 'Análisis de Big Data: Más Allá de los Números',
    descripcion: 'Identifica y supera los sesgos en la interpretación de grandes volúmenes de datos y en la aplicación de algoritmos de aprendizaje automático.',
    area: 'Ciencia de Datos',
    nivel: 'avanzado',
    escenarios: [
      'bigdata-seleccion-algoritmos',
      'bigdata-causalidad-correlacion'
    ],
    estaCompleta: true,
    fechaCreacion: '2025-02-25',
    imagenPortada: '/images/campanas/big-data.jpg'
  },
  {
    id: 'historia-investigacion-fuentes',
    titulo: 'Sesgos en Investigación Histórica',
    descripcion: 'Aprende a identificar y mitigar sesgos en la selección, interpretación y análisis de fuentes históricas.',
    area: 'Historia',
    nivel: 'principiante',
    escenarios: [
      'historia-fuentes-primarias',
      'historia-narrativas-culturales'
    ],
    estaCompleta: false,
    fechaCreacion: '2025-03-01',
    imagenPortada: '/images/campanas/historia.jpg'
  },
  {
    id: 'economia-comportamental',
    titulo: 'Sesgos en Economía Comportamental',
    descripcion: 'Explora cómo los sesgos cognitivos afectan la toma de decisiones económicas y aprende a diseñar mejores estudios en este campo.',
    area: 'Economía',
    nivel: 'intermedio',
    escenarios: [
      'economia-preferencias-reveladas',
      'economia-incentivos-experimentos'
    ],
    estaCompleta: true,
    fechaCreacion: '2025-03-05',
    imagenPortada: '/images/campanas/economia.jpg'
  }
];

// Función para obtener campañas destacadas
export const getCampanasDestacadas = (): Campana[] => {
  return [
    campanas.find(c => c.id === 'medicina-sesgos-fundamentales')!,
    campanas.find(c => c.id === 'ciencias-sociales-encuestas')!,
    campanas.find(c => c.id === 'datos-masivos-interpretativos')!
  ].filter(Boolean);
};

export const getCampanaPorId = (id: string): Campana | undefined => {
  return campanas.find(campana => campana.id === id);
};

export const getCampanasPorNivel = (nivel: Campana['nivel']): Campana[] => {
  return campanas.filter(campana => campana.nivel === nivel);
};

export const getCampanasPorArea = (area: string): Campana[] => {
  return campanas.filter(campana => campana.area === area);
};

export default campanas;