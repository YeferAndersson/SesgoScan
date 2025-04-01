import { Sesgo } from '@/lib/types';

export const sesgos: Sesgo[] = [
  {
    id: 'sesgo-confirmacion',
    nombre: 'Sesgo de Confirmación',
    descripcion: 'Tendencia a buscar, interpretar y recordar información que confirma las propias creencias o hipótesis, mientras se ignora o subestima la evidencia contradictoria.',
    ejemplo: 'Un investigador que estudia los efectos de un suplemento dietético presta más atención a los casos donde los participantes reportan mejoras y minimiza aquellos donde no hay cambios o hay efectos negativos.',
    impacto: 'Puede llevar a conclusiones erróneas al ignorar evidencia contradictoria, generando una imagen incompleta o sesgada de los resultados reales de la investigación.',
    estrategias: [
      'Buscar activamente evidencia que contradiga tus hipótesis',
      'Implementar pre-registros de estudios',
      'Incorporar revisión por pares desde etapas tempranas',
      'Usar métodos ciegos cuando sea posible'
    ],
    categoria: 'cognitivo',
    icono: 'confirmation-bias'
  },
  {
    id: 'sesgo-disponibilidad',
    nombre: 'Sesgo de Disponibilidad',
    descripcion: 'Tendencia a sobreestimar la probabilidad de eventos que son más fácilmente recordados, generalmente debido a su recencia, frecuencia o impacto emocional.',
    ejemplo: 'Tras leer varios estudios sobre los efectos negativos de cierta sustancia, un investigador sobreestima la prevalencia de estos efectos negativos al diseñar su propio estudio.',
    impacto: 'Puede distorsionar el diseño experimental y la interpretación de resultados al dar mayor peso a ciertos fenómenos simplemente porque son más memorables o recientes.',
    estrategias: [
      'Realizar revisiones sistemáticas de la literatura',
      'Consultar datos estadísticos objetivos antes de hacer estimaciones',
      'Involucrar a investigadores con diferentes perspectivas y experiencias',
      'Cuantificar las probabilidades en lugar de basarse en impresiones'
    ],
    categoria: 'cognitivo',
    icono: 'availability-bias'
  },
  {
    id: 'sesgo-anclaje',
    nombre: 'Sesgo de Anclaje',
    descripcion: 'Tendencia a confiar demasiado en la primera pieza de información recibida (el "ancla") al tomar decisiones o hacer juicios.',
    ejemplo: 'Si los estudios previos sugieren un efecto del 20%, los investigadores pueden "anclarse" a este número y ajustar insuficientemente sus estimaciones, incluso cuando sus propios datos sugieren efectos muy diferentes.',
    impacto: 'Puede llevar a estimaciones sesgadas, hipótesis incorrectas y diseños experimentales inadecuados que no reflejan adecuadamente la realidad del fenómeno estudiado.',
    estrategias: [
      'Considerar múltiples puntos de referencia',
      'Realizar análisis ciegos de datos sin conocer resultados previos',
      'Establecer criterios de decisión antes de conocer cualquier número',
      'Consultar con expertos que no estén familiarizados con las estimaciones previas'
    ],
    categoria: 'cognitivo',
    icono: 'anchoring-bias'
  },
  {
    id: 'sesgo-publicacion',
    nombre: 'Sesgo de Publicación',
    descripcion: 'Tendencia a publicar solo resultados positivos o estadísticamente significativos, mientras que los resultados negativos o nulos quedan sin publicar.',
    ejemplo: 'Una revista científica rechaza sistemáticamente estudios que no muestran efectos significativos de tratamientos, creando una literatura científica que sobrerepresenta la eficacia de dichos tratamientos.',
    impacto: 'Distorsiona el corpus de conocimiento científico, llevando a una sobreestimación de los efectos reales y dificultando el avance científico al ocultar información valiosa sobre lo que no funciona.',
    estrategias: [
      'Pre-registrar todos los estudios y sus análisis planificados',
      'Comprometerse a publicar resultados independientemente de su significancia estadística',
      'Crear y utilizar registros de estudios',
      'Valorar la calidad metodológica por encima de la naturaleza de los resultados'
    ],
    categoria: 'metodologico',
    icono: 'publication-bias'
  },
  {
    id: 'sesgo-seleccion',
    nombre: 'Sesgo de Selección',
    descripcion: 'Errores sistemáticos en la selección de participantes o datos que afectan la representatividad de la muestra y la generalización de los resultados.',
    ejemplo: 'Un estudio sobre hábitos alimenticios que recluta participantes únicamente en un gimnasio, obteniendo una muestra no representativa de la población general.',
    impacto: 'Compromete la validez externa del estudio y puede llevar a conclusiones erróneas sobre la generalización de los resultados a poblaciones más amplias.',
    estrategias: [
      'Utilizar métodos de muestreo aleatorio',
      'Definir claramente los criterios de inclusión y exclusión',
      'Considerar y documentar las limitaciones de la muestra',
      'Realizar análisis de sensibilidad para evaluar el impacto del sesgo de selección'
    ],
    categoria: 'metodologico',
    icono: 'selection-bias'
  },
  {
    id: 'sesgo-observador',
    nombre: 'Sesgo del Observador',
    descripcion: 'Tendencia de los investigadores a ver lo que esperan ver, influyendo inconscientemente en la recolección e interpretación de datos.',
    ejemplo: 'Un investigador que espera ver mejoría en un grupo de tratamiento puede calificar más favorablemente las respuestas subjetivas de ese grupo.',
    impacto: 'Puede crear hallazgos artificiales que reflejan las expectativas del investigador en lugar de efectos reales, comprometiendo la validez de los resultados.',
    estrategias: [
      'Implementar métodos ciegos o doble ciegos',
      'Estandarizar protocolos de medición',
      'Utilizar múltiples evaluadores independientes',
      'Automatizar la recolección de datos cuando sea posible'
    ],
    categoria: 'metodologico',
    icono: 'observer-bias'
  },
  {
    id: 'efecto-dunning-kruger',
    nombre: 'Efecto Dunning-Kruger',
    descripcion: 'Tendencia de las personas con baja competencia en un área a sobreestimar sus habilidades, mientras que los expertos suelen subestimar sus capacidades relativas.',
    ejemplo: 'Un investigador novato que, debido a su limitado conocimiento, no reconoce la complejidad de un problema y propone soluciones simplistas, creyendo erróneamente que ha resuelto el problema.',
    impacto: 'Puede llevar a investigadores menos experimentados a diseñar estudios inadecuados o hacer interpretaciones erróneas sin reconocer sus limitaciones, mientras que los expertos pueden ser excesivamente cautelosos.',
    estrategias: [
      'Buscar activamente retroalimentación de pares y expertos',
      'Mantenerse actualizado con la literatura relevante',
      'Adoptar una postura de humildad intelectual',
      'Colaborar con investigadores de diferentes niveles de experiencia'
    ],
    categoria: 'cognitivo',
    icono: 'dunning-kruger'
  },
  {
    id: 'sesgo-memoria',
    nombre: 'Sesgo de Memoria',
    descripcion: 'Tendencia a recordar eventos pasados de manera inexacta o distorsionada, frecuentemente de formas que apoyan nuestras creencias actuales.',
    ejemplo: 'Un investigador que recuerda haber tenido ciertas predicciones antes de un experimento, cuando en realidad estas "predicciones" se formularon después de conocer los resultados (hindsight bias).',
    impacto: 'Puede llevar a narrativas post-hoc engañosas, donde los investigadores creen erróneamente que anticiparon resultados que en realidad no predijeron.',
    estrategias: [
      'Documentar meticulosamente hipótesis y predicciones antes de la recolección de datos',
      'Mantener registros detallados de todas las decisiones y cambios en el protocolo',
      'Utilizar pre-registros y planes de análisis detallados',
      'Comparar explícitamente resultados con predicciones documentadas'
    ],
    categoria: 'cognitivo',
    icono: 'memory-bias'
  }
];

export const getSesgoPorId = (id: string): Sesgo | undefined => {
  return sesgos.find(sesgo => sesgo.id === id);
};

export const getSesgosPorCategoria = (categoria: Sesgo['categoria']): Sesgo[] => {
  return sesgos.filter(sesgo => sesgo.categoria === categoria);
};

export default sesgos;