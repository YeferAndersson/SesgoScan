import { Escenario } from '@/lib/types';
import { campanas, getCampanaPorId } from '@/data/campanas';

export const escenarios: Escenario[] = [
  {
    id: 'medicina-eficacia-tratamiento',
    titulo: 'Evaluación de un Nuevo Tratamiento',
    descripcion: 'Diseña e interpreta un estudio para evaluar la eficacia de un nuevo medicamento para el tratamiento de la hipertensión.',
    contexto: 'Trabajas como investigador clínico evaluando un nuevo medicamento antihipertensivo. Tu equipo ha desarrollado un compuesto que parece prometedor en estudios preclínicos. Ahora debes diseñar un ensayo clínico para evaluar su eficacia y seguridad en pacientes humanos. Las decisiones que tomes en el diseño del estudio, la selección de participantes, las medidas de resultado y el análisis de datos pueden tener un impacto significativo en la validez de tus conclusiones.',
    area: 'medicina',
    nivel: 'principiante',
    duracionEstimada: 30,
    pasos: [
      {
        id: 'introduccion',
        titulo: 'Contexto de la Investigación',
        descripcion: 'Eres parte de un equipo que está evaluando un nuevo medicamento para la hipertensión llamado Pressuren. Los estudios preclínicos en animales han mostrado resultados prometedores, con una reducción significativa de la presión arterial y pocos efectos secundarios. Tu tarea es diseñar un ensayo clínico de fase II para evaluar su eficacia y seguridad en humanos.',
        tipo: 'introduccion',
        contenidoExtra: '### Información adicional\n\n- La hipertensión es un problema de salud pública que afecta aproximadamente al 30% de la población adulta.\n- Los tratamientos actuales tienen eficacia variable y algunos presentan efectos secundarios significativos.\n- Tu equipo está entusiasmado con este nuevo medicamento y la empresa ha invertido mucho en su desarrollo.\n- Hay cierta presión para obtener resultados positivos, ya que competidores están desarrollando compuestos similares.'
      },
      {
        id: 'diseno-estudio',
        titulo: 'Diseño del Estudio',
        descripcion: 'Debes decidir cómo estructurar el ensayo clínico. Considera aspectos como el tipo de estudio, el tamaño de la muestra, la selección de participantes y los grupos de control.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'diseno-a',
            texto: 'Ensayo abierto con 50 pacientes hipertensos, todos recibiendo el nuevo medicamento durante 4 semanas.',
            descripcion: 'Un diseño simple que permite evaluar rápidamente si el medicamento reduce la presión arterial.',
            sesgosRelacionados: ['sesgo-observador', 'sesgo-seleccion'],
            esOptima: false,
            consecuencias: 'Sin un grupo control, será difícil determinar si los cambios observados se deben al medicamento o a otros factores (efecto placebo, regresión a la media, etc.).'
          },
          {
            id: 'diseno-b',
            texto: 'Ensayo controlado aleatorizado con 200 pacientes, comparando el nuevo medicamento con un placebo.',
            descripcion: 'Un diseño que compara el efecto del medicamento con un placebo, asignando aleatoriamente los pacientes a cada grupo.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este diseño permite una comparación directa con un placebo, controlando diversos sesgos mediante la aleatorización.'
          },
          {
            id: 'diseno-c',
            texto: 'Ensayo controlado aleatorizado con 200 pacientes, comparando solo con los pacientes que muestran respuesta inicial al medicamento.',
            descripcion: 'Un diseño que primero identifica "respondedores" y luego los compara con un grupo placebo.',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Este enfoque crea un sesgo de selección significativo al incluir solo a los pacientes que responden inicialmente.'
          }
        ]
      },
      {
        id: 'criterios-inclusion',
        titulo: 'Criterios de Inclusión',
        descripcion: 'Ahora debes definir qué pacientes serán elegibles para participar en el estudio. Estos criterios determinarán la población a la que se pueden generalizar los resultados.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'inclusion-a',
            texto: 'Incluir solo pacientes entre 40-60 años con hipertensión no complicada y sin otras condiciones médicas.',
            descripcion: 'Un grupo homogéneo que minimiza las variables de confusión.',
            sesgosRelacionados: ['sesgo-seleccion'],
            esOptima: false,
            consecuencias: 'Aunque reduce la variabilidad, limita severamente la generalización de los resultados a la población general de pacientes hipertensos.'
          },
          {
            id: 'inclusion-b',
            texto: 'Incluir un rango amplio de pacientes hipertensos (18-75 años) con diversas características demográficas y clínicas, excluyendo solo casos con contraindicaciones específicas.',
            descripcion: 'Una muestra diversa que refleja mejor la población real de pacientes.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Permite una mayor generalización de los resultados y evalúa el medicamento en condiciones más cercanas a la práctica clínica real.'
          },
          {
            id: 'inclusion-c',
            texto: 'Incluir pacientes con hipertensión severa que no han respondido bien a tratamientos previos.',
            descripcion: 'Focaliza en pacientes con mayor necesidad de nuevas opciones de tratamiento.',
            sesgosRelacionados: ['sesgo-seleccion'],
            esOptima: false,
            consecuencias: 'Podría sobreestimar la eficacia del medicamento si estos pacientes presentan una respuesta más pronunciada debido a su condición más severa.'
          }
        ]
      },
      {
        id: 'analisis-datos',
        titulo: 'Análisis de Datos',
        descripcion: 'Tras realizar el estudio, has recopilado datos sobre la presión arterial antes y después del tratamiento para ambos grupos (medicamento y placebo). Ahora debes decidir cómo analizar estos datos.',
        tipo: 'analisis',
        opciones: [
          {
            id: 'analisis-a',
            texto: 'Comparar múltiples subgrupos (por edad, sexo, severidad inicial, etc.) hasta encontrar alguno donde el medicamento muestre diferencias significativas respecto al placebo.',
            descripcion: 'Buscar efectos específicos en diferentes subpoblaciones.',
            sesgosRelacionados: ['sesgo-confirmacion', 'p-hacking'],
            esOptima: false,
            consecuencias: 'Este enfoque aumenta la probabilidad de encontrar resultados "significativos" por azar (p-hacking) e infla la tasa de falsos positivos.'
          },
          {
            id: 'analisis-b',
            texto: 'Analizar solo los datos de pacientes que completaron todo el estudio según el protocolo establecido.',
            descripcion: 'Análisis "por protocolo" que evalúa la eficacia en condiciones ideales.',
            sesgosRelacionados: ['sesgo-seleccion'],
            esOptima: false,
            consecuencias: 'Ignora información importante de pacientes que abandonaron (posiblemente debido a efectos secundarios o falta de eficacia), sesgando los resultados.'
          },
          {
            id: 'analisis-c',
            texto: 'Realizar un análisis por intención de tratar, incluyendo a todos los pacientes aleatorizados, seguido de análisis preplanificados de subgrupos clínicamente relevantes.',
            descripcion: 'Análisis principal que incluye a todos los participantes, complementado con análisis secundarios predefinidos.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque proporciona la evaluación más imparcial de la eficacia en condiciones reales, mientras permite explorar variaciones en subgrupos importantes sin inflación del error tipo I.'
          }
        ]
      },
      {
        id: 'interpretacion',
        titulo: 'Interpretación de Resultados',
        descripcion: 'Los resultados muestran una reducción media de la presión arterial sistólica de 12 mmHg en el grupo de medicamento frente a 8 mmHg en el grupo placebo (p = 0.04). Se observaron efectos secundarios leves (principalmente dolor de cabeza y mareos) en el 15% de los pacientes del grupo de medicamento frente al 10% del grupo placebo.',
        tipo: 'interpretacion',
        opciones: [
          {
            id: 'interpretacion-a',
            texto: 'Concluir que el medicamento es efectivo y seguro, enfatizando la diferencia estadísticamente significativa frente al placebo.',
            descripcion: 'Interpretación que destaca el resultado positivo principal.',
            sesgosRelacionados: ['sesgo-confirmacion', 'sesgo-publicacion'],
            esOptima: false,
            consecuencias: 'Aunque técnicamente correcta, esta interpretación sobrevalora la significancia clínica y subestima los efectos secundarios, reflejando un sesgo hacia resultados positivos.'
          },
          {
            id: 'interpretacion-b',
            texto: 'Concluir que el medicamento muestra un modesto beneficio frente al placebo (4 mmHg de diferencia) con un ligero aumento de efectos secundarios. Recomendar estudios adicionales para confirmar el balance riesgo-beneficio.',
            descripcion: 'Interpretación equilibrada que considera tanto la eficacia como la seguridad.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Esta interpretación presenta los resultados de manera objetiva, reconociendo tanto el beneficio estadísticamente significativo como su magnitud clínica moderada y los efectos secundarios.'
          },
          {
            id: 'interpretacion-c',
            texto: 'Reanalizar los datos excluyendo a los "no respondedores" para demostrar una mayor eficacia en pacientes que responden al tratamiento.',
            descripcion: 'Intento de mejorar los resultados mediante un análisis post-hoc selectivo.',
            sesgosRelacionados: ['sesgo-confirmacion', 'sesgo-publicacion', 'harking'],
            esOptima: false,
            consecuencias: 'Este enfoque manipula indebidamente los datos para obtener resultados más favorables, constituyendo un sesgo metodológico grave.'
          }
        ]
      },
      {
        id: 'retroalimentacion',
        titulo: 'Retroalimentación',
        descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en el proceso de investigación.',
        tipo: 'retroalimentacion',
        contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
      },
      {
        id: 'conclusion',
        titulo: 'Conclusión y Estrategias',
        descripcion: 'Resumen de aprendizajes y estrategias para mitigar sesgos en futuros estudios.',
        tipo: 'conclusion',
        contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
      }
    ],
    sesgosAbordados: [
      'sesgo-confirmacion',
      'sesgo-seleccion',
      'sesgo-observador',
      'sesgo-publicacion'
    ],
    imagenPortada: '/images/escenarios/tratamiento-hipertension.jpg'
  },
  {
    id: 'medicina-efectos-secundarios',
    titulo: 'Evaluación de Efectos Secundarios',
    descripcion: 'Diseña un estudio para evaluar correctamente los efectos secundarios de un medicamento ya aprobado, evitando sesgos de notificación y detección.',
    contexto: 'Trabajas para una agencia reguladora evaluando los posibles efectos secundarios de un medicamento para la diabetes que ya está en el mercado. Han surgido preocupaciones sobre un posible aumento de problemas cardiovasculares entre los usuarios. Debes diseñar un estudio que evalúe objetivamente estos riesgos, evitando tanto alarmas innecesarias como minimización de problemas reales.',
    area: 'medicina',
    nivel: 'principiante',
    duracionEstimada: 35,
    pasos: [
      {
        id: 'introduccion',
        titulo: 'Contexto del Estudio',
        descripcion: 'Has recibido reportes espontáneos que sugieren un posible aumento de eventos cardiovasculares en pacientes que toman GlucoReg, un medicamento para la diabetes tipo 2 que lleva 3 años en el mercado. El fabricante sostiene que las tasas son normales considerando la población diabética. Debes determinar si existe realmente un mayor riesgo asociado al medicamento.',
        tipo: 'introduccion',
        contenidoExtra: '### Información adicional\n\n- Los pacientes con diabetes ya tienen un riesgo cardiovascular elevado independientemente de la medicación.\n- Los reportes espontáneos están sujetos a múltiples sesgos (notificación selectiva, falta de denominador, etc.).\n- Cualquier decisión regulatoria podría afectar a millones de pacientes que dependen de este medicamento.\n- Existe presión de grupos de pacientes y del fabricante para llegar a una conclusión rápidamente.'
      },
      {
        id: 'fuentes-datos',
        titulo: 'Selección de Fuentes de Datos',
        descripcion: 'Debes decidir qué fuentes de datos utilizarás para evaluar el posible riesgo cardiovascular.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'fuentes-a',
            texto: 'Basarse principalmente en los reportes espontáneos recibidos por el sistema de farmacovigilancia.',
            descripcion: 'Utilizar los datos ya disponibles de reportes voluntarios de efectos adversos.',
            sesgosRelacionados: ['sesgo-notificacion', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Los reportes espontáneos están sujetos a serios sesgos de notificación y no proporcionan un denominador claro, lo que impide calcular tasas reales de incidencia.'
          },
          {
            id: 'fuentes-b',
            texto: 'Diseñar un estudio observacional utilizando bases de datos sanitarias de gran tamaño (claims data) que incluyan millones de pacientes con diabetes.',
            descripcion: 'Análisis de datos reales del mundo real con grupos comparables de usuarios y no usuarios del medicamento.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque proporciona datos tanto del numerador (eventos) como del denominador (población expuesta), permitiendo comparaciones válidas mientras se controlan factores de confusión.'
          },
          {
            id: 'fuentes-c',
            texto: 'Solicitar al fabricante que proporcione sus propios análisis de seguridad post-comercialización.',
            descripcion: 'Confiar en los datos y análisis proporcionados por el fabricante del medicamento.',
            sesgosRelacionados: ['sesgo-intereses', 'sesgo-publicacion'],
            esOptima: false,
            consecuencias: 'Confiar exclusivamente en los análisis del fabricante introduce un claro conflicto de interés que podría sesgar las conclusiones hacia la minimización de riesgos.'
          }
        ]
      },
      {
        id: 'analisis-datos',
        titulo: 'Análisis de Datos',
        descripcion: 'Has obtenido datos de una gran base de datos sanitaria. ¿Cómo analizarás estos datos para evaluar el riesgo cardiovascular?',
        tipo: 'analisis',
        opciones: [
          {
            id: 'analisis-a',
            texto: 'Comparar directamente las tasas de eventos cardiovasculares entre usuarios de GlucoReg y no usuarios, sin ajustar por factores de confusión.',
            descripcion: 'Comparación directa sin ajustes por diferencias entre grupos.',
            sesgosRelacionados: ['variable-confusora', 'sesgo-indicacion'],
            esOptima: false,
            consecuencias: 'Este enfoque ignora el hecho de que los pacientes que reciben diferentes medicamentos pueden diferir sistemáticamente en su perfil de riesgo basal, llevando a conclusiones erróneas (confusión por indicación).'
          },
          {
            id: 'analisis-b',
            texto: 'Realizar un análisis ajustado por factores de confusión conocidos (edad, sexo, comorbilidades, gravedad de la diabetes) mediante técnicas como propensity score matching o ajuste multivariable.',
            descripcion: 'Comparación que intenta equiparar grupos mediante ajustes estadísticos por factores de riesgo conocidos.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque reduce sustancialmente el riesgo de confusión, permitiendo una comparación más válida del riesgo asociado específicamente al medicamento.'
          },
          {
            id: 'analisis-c',
            texto: 'Centrarse en analizar solo subgrupos específicos donde se han reportado más eventos, como pacientes mayores o con enfermedad renal.',
            descripcion: 'Análisis focalizado en subgrupos con señales de riesgo en los reportes iniciales.',
            sesgosRelacionados: ['sesgo-confirmacion', 'p-hacking'],
            esOptima: false,
            consecuencias: 'Este enfoque selectivo puede llevar a conclusiones sesgadas por múltiples pruebas no ajustadas (p-hacking) y confirmación de sospechas previas sin evidencia sólida.'
          }
        ]
      },
      {
        id: 'interpretacion',
        titulo: 'Interpretación de Resultados',
        descripcion: 'El análisis muestra un ligero aumento del riesgo cardiovascular en usuarios de GlucoReg comparado con usuarios de otros medicamentos para la diabetes (Hazard Ratio ajustado = 1.2, IC 95%: 1.05-1.38), principalmente en pacientes con enfermedad renal preexistente.',
        tipo: 'interpretacion',
        opciones: [
          {
            id: 'interpretacion-a',
            texto: 'Concluir que GlucoReg claramente aumenta el riesgo cardiovascular y recomendar su retirada del mercado inmediatamente.',
            descripcion: 'Interpretación que enfatiza el riesgo detectado y recomienda la acción más drástica.',
            sesgosRelacionados: ['sobreinterpretacion', 'sesgo-accion'],
            esOptima: false,
            consecuencias: 'Esta conclusión sobreinterpreta un aumento de riesgo modesto y contexto-específico, potencialmente privando a muchos pacientes de un medicamento beneficioso.'
          },
          {
            id: 'interpretacion-b',
            texto: 'Concluir que existe un aumento modesto pero estadísticamente significativo del riesgo cardiovascular, particularmente en pacientes con enfermedad renal. Recomendar actualizar la información de seguridad y considerar contraindicaciones específicas.',
            descripcion: 'Interpretación matizada que reconoce el hallazgo pero lo contextualiza adecuadamente.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Esta interpretación refleja fielmente los datos, reconociendo el riesgo incrementado sin exagerarlo, y propone acciones proporcionadas al nivel de evidencia disponible.'
          },
          {
            id: 'interpretacion-c',
            texto: 'Concluir que, dado que el aumento de riesgo es pequeño y podría deberse a factores de confusión residuales, no hay necesidad de tomar ninguna acción regulatoria en este momento.',
            descripcion: 'Interpretación que minimiza el hallazgo y evita recomendar acciones.',
            sesgosRelacionados: ['sesgo-status-quo', 'minimizacion-riesgo'],
            esOptima: false,
            consecuencias: 'Esta interpretación subestima indebidamente un hallazgo estadísticamente significativo, potencialmente exponiendo a pacientes vulnerables a riesgos innecesarios.'
          }
        ]
      },
      {
        id: 'retroalimentacion',
        titulo: 'Retroalimentación',
        descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en la evaluación de seguridad post-comercialización.',
        tipo: 'retroalimentacion',
        contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
      },
      {
        id: 'conclusion',
        titulo: 'Conclusión y Estrategias',
        descripcion: 'Resumen de aprendizajes y estrategias para mitigar sesgos en estudios de seguridad de medicamentos.',
        tipo: 'conclusion',
        contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
      }
    ],
    sesgosAbordados: [
      'sesgo-notificacion',
      'sesgo-indicacion',
      'variable-confusora',
      'minimizacion-riesgo'
    ],
    imagenPortada: '/images/escenarios/default.jpg'
  },
  {
    id: 'psicologia-efecto-placebo',
    titulo: 'El Efecto Placebo en Estudios Psicológicos',
    descripcion: 'Explora cómo el efecto placebo y las expectativas pueden influir en los resultados de investigaciones psicológicas.',
    contexto: 'Eres un investigador en psicología estudiando la eficacia de una nueva técnica de meditación para reducir la ansiedad. Debes diseñar e interpretar un estudio que controle adecuadamente el efecto placebo, las expectativas de los participantes y otros factores que podrían sesgar los resultados.',
    area: 'psicologia',
    nivel: 'intermedio',
    duracionEstimada: 35,
    pasos: [
      {
        id: 'introduccion',
        titulo: 'Contexto de la Investigación',
        descripcion: 'Estás evaluando una nueva técnica de meditación llamada "Mindful Focus" que promete reducir significativamente los niveles de ansiedad en adultos. Los resultados preliminares parecen prometedores, pero sabes que las expectativas y el efecto placebo pueden ser particularmente fuertes en intervenciones psicológicas.',
        tipo: 'introduccion',
        contenidoExtra: '### Información adicional\n\n- Los estudios sobre meditación son notoriamente difíciles de controlar debido a factores como las expectativas, el compromiso de los participantes y la imposibilidad de un "ciego" completo.\n- Existe un gran interés público en técnicas de meditación y mindfulness.\n- Tu universidad está interesada en desarrollar un programa basado en esta técnica si resulta efectiva.'
      },
      {
        id: 'diseno-estudio',
        titulo: 'Diseño del Estudio',
        descripcion: 'Debes decidir cómo estructurar el estudio para evaluar adecuadamente la eficacia de la técnica de meditación controlando el efecto placebo.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'diseno-a',
            texto: 'Comparar un grupo que recibe la técnica de meditación con un grupo control que no recibe ninguna intervención.',
            descripcion: 'Un diseño simple que compara la intervención con la ausencia de intervención.',
            sesgosRelacionados: ['sesgo-observador', 'efecto-placebo'],
            esOptima: false,
            consecuencias: 'No controla el efecto placebo ni las expectativas, lo que puede llevar a sobreestimar la eficacia real de la técnica de meditación.'
          },
          {
            id: 'diseno-b',
            texto: 'Comparar la técnica de meditación con una actividad control activa (escuchar música relajante) presentada a los participantes como igualmente efectiva.',
            descripcion: 'Un diseño que utiliza un control activo presentado como una intervención efectiva.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este diseño controla mejor las expectativas y el efecto placebo al ofrecer una experiencia comparable al grupo control.'
          },
          {
            id: 'diseno-c',
            texto: 'Diseñar un estudio donde todos los participantes reciben la técnica de meditación pero se comparan los resultados entre quienes tienen altas y bajas expectativas (medidas previamente).',
            descripcion: 'Un diseño que se centra en el papel de las expectativas sin un grupo control verdadero.',
            sesgosRelacionados: ['sesgo-seleccion', 'efecto-placebo'],
            esOptima: false,
            consecuencias: 'Sin un grupo control, no puedes determinar la eficacia real de la técnica independientemente de las expectativas.'
          }
        ]
      },
      {
        id: 'cegamiento',
        titulo: 'Cegamiento y Control de Expectativas',
        descripcion: 'En estudios psicológicos, el cegamiento (evitar que participantes y/o investigadores conozcan las condiciones del estudio) es crucial pero desafiante. ¿Cómo manejarás este aspecto?',
        tipo: 'diseno',
        opciones: [
          {
            id: 'cegamiento-a',
            texto: 'Informar a los participantes del propósito exacto del estudio y qué grupo está recibiendo la intervención "real".',
            descripcion: 'Total transparencia con los participantes sin cegamiento.',
            sesgosRelacionados: ['sesgo-observador', 'efecto-placebo'],
            esOptima: false,
            consecuencias: 'Maximiza el efecto de las expectativas, haciendo imposible separar los efectos reales de la técnica de los efectos placebo.'
          },
          {
            id: 'cegamiento-b',
            texto: 'Utilizar evaluadores ciegos (que desconocen a qué grupo pertenece cada participante) para medir los resultados y presentar ambas intervenciones como potencialmente efectivas.',
            descripcion: 'Cegamiento de evaluadores y control de expectativas de participantes.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque reduce significativamente el sesgo del observador y equilibra las expectativas entre grupos.'
          },
          {
            id: 'cegamiento-c',
            texto: 'No mencionar el efecto placebo a los participantes y enfatizar solo los beneficios esperados de la técnica de meditación.',
            descripcion: 'Enfoque que amplifica deliberadamente las expectativas positivas.',
            sesgosRelacionados: ['sesgo-confirmacion', 'efecto-placebo'],
            esOptima: false,
            consecuencias: 'Aumenta artificialmente las expectativas positivas, lo que puede inflar los resultados debido al efecto placebo.'
          }
        ]
      },
      {
        id: 'analisis-datos',
        titulo: 'Análisis de Datos',
        descripcion: 'Los datos han sido recogidos y muestran una reducción moderada de la ansiedad tanto en el grupo de meditación como en el grupo control, con una pequeña diferencia a favor de la meditación. ¿Cómo analizarás estos resultados?',
        tipo: 'analisis',
        opciones: [
          {
            id: 'analisis-a',
            texto: 'Analizar múltiples submedidas de ansiedad y momentos temporales diferentes hasta encontrar aquellos donde la meditación muestra ventajas significativas.',
            descripcion: 'Búsqueda de resultados significativos mediante análisis de múltiples variables.',
            sesgosRelacionados: ['p-hacking', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Este enfoque aumenta dramáticamente el riesgo de falsos positivos debido a pruebas múltiples no corregidas (p-hacking).'
          },
          {
            id: 'analisis-b',
            texto: 'Realizar análisis preespecificados de las medidas principales, controlando estadísticamente las diferencias en expectativas entre grupos.',
            descripcion: 'Análisis basado en un plan predefinido con control estadístico de variables importantes.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque proporciona la evaluación más rigurosa y objetiva de los efectos reales de la intervención.'
          },
          {
            id: 'analisis-c',
            texto: 'Enfocarse en los participantes que reportaron alta satisfacción con la técnica de meditación.',
            descripcion: 'Análisis selectivo basado en la satisfacción subjetiva.',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Esta selección post-hoc crea un sesgo importante al analizar solo a quienes tuvieron una experiencia positiva.'
          }
        ]
      },
      {
        id: 'interpretacion',
        titulo: 'Interpretación de Resultados',
        descripcion: 'Los análisis muestran que la técnica de meditación produjo una reducción de la ansiedad ligeramente mayor que el control activo (d=0.3, p=0.04). Las medidas de expectativas fueron similares entre grupos.',
        tipo: 'interpretacion',
        opciones: [
          {
            id: 'interpretacion-a',
            texto: 'Concluir que la técnica de meditación es claramente eficaz para reducir la ansiedad, destacando la significancia estadística obtenida.',
            descripcion: 'Interpretación que enfatiza la significancia estadística.',
            sesgosRelacionados: ['sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Sobreinterpreta un efecto que, aunque estadísticamente significativo, es de magnitud pequeña, ignorando la relevancia clínica limitada.'
          },
          {
            id: 'interpretacion-b',
            texto: 'Concluir que la técnica muestra un efecto pequeño pero significativo más allá del placebo, señalando la necesidad de estudios adicionales para confirmar su relevancia clínica.',
            descripcion: 'Interpretación equilibrada que considera tanto la significancia estadística como el tamaño del efecto.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Esta interpretación representa con precisión la evidencia disponible, reconociendo tanto los hallazgos positivos como sus limitaciones.'
          },
          {
            id: 'interpretacion-c',
            texto: 'Destacar principalmente los testimonios positivos de los participantes que más se beneficiaron de la técnica de meditación.',
            descripcion: 'Interpretación basada en casos selectivos con resultados particularmente favorables.',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Esta interpretación selectiva distorsiona los resultados generales al destacar solo los casos más favorables.'
          }
        ]
      },
      {
        id: 'retroalimentacion',
        titulo: 'Retroalimentación',
        descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en el proceso de investigación psicológica.',
        tipo: 'retroalimentacion',
        contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
      },
      {
        id: 'conclusion',
        titulo: 'Conclusión y Estrategias',
        descripcion: 'Resumen de aprendizajes y estrategias para mitigar sesgos en estudios de intervenciones psicológicas.',
        tipo: 'conclusion',
        contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
      }
    ],
    sesgosAbordados: [
      'sesgo-confirmacion',
      'sesgo-seleccion',
      'sesgo-observador',
      'efecto-placebo'
    ],
    imagenPortada: '/images/escenarios/default.jpg'
  },
  {
    id: 'psicologia-muestra-representativa',
    titulo: 'Representatividad en Estudios Psicológicos',
    descripcion: 'Aprende a identificar y evitar sesgos en la selección de muestras para estudios psicológicos, mejorando la validez externa de tus investigaciones.',
    contexto: 'Estás diseñando un estudio sobre el desarrollo cognitivo infantil que tendrá impacto en recomendaciones educativas. Debes asegurarte de que tu muestra sea suficientemente representativa para que los resultados puedan generalizarse adecuadamente.',
    area: 'psicologia',
    nivel: 'intermedio',
    duracionEstimada: 30,
    pasos: [
      {
        id: 'introduccion',
        titulo: 'Contexto de la Investigación',
        descripcion: 'Estás planificando un estudio sobre el desarrollo de habilidades de razonamiento abstracto en niños de 8-12 años. Los resultados podrían influir en futuras metodologías educativas. Es crucial que tus conclusiones sean generalizables a diversas poblaciones infantiles.',
        tipo: 'introduccion',
        contenidoExtra: '### Información adicional\n\n- Las investigaciones en psicología del desarrollo suelen enfrentar importantes desafíos de representatividad muestral.\n- Históricamente, muchos estudios han utilizado muestras de conveniencia de entornos académicos o de clase media-alta.\n- Existen importantes variaciones en el desarrollo cognitivo según factores socioculturales, educativos y económicos.\n- Tu equipo tiene un tiempo y presupuesto limitados para realizar el estudio.'
      },
      {
        id: 'estrategia-muestreo',
        titulo: 'Estrategia de Muestreo',
        descripcion: 'Debes decidir cómo reclutarás a los participantes para tu estudio.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'muestreo-a',
            texto: 'Reclutar participantes exclusivamente de escuelas asociadas a tu universidad, por conveniencia y facilidad de acceso.',
            descripcion: 'Muestreo de conveniencia limitado a entornos académicos cercanos.',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-muestreo-conveniencia'],
            esOptima: false,
            consecuencias: 'Esta muestra estará sesgada hacia niños de entornos socioeconómicos y culturales específicos, limitando severamente la generalización de los resultados.'
          },
          {
            id: 'muestreo-b',
            texto: 'Implementar un muestreo estratificado que incluya escuelas de diferentes niveles socioeconómicos, ubicaciones geográficas (urbanas/rurales) y tipos de educación.',
            descripcion: 'Muestreo estratificado que garantiza diversidad en variables clave.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque mejora significativamente la representatividad al asegurar la inclusión de grupos diversos, permitiendo una mejor generalización de los resultados.'
          },
          {
            id: 'muestreo-c',
            texto: 'Centrarse en reclutar una muestra muy grande de niños, principalmente de escuelas fácilmente accesibles, confiando en que el gran tamaño compensará cualquier falta de representatividad.',
            descripcion: 'Priorizar el tamaño muestral sobre la diversidad representativa.',
            sesgosRelacionados: ['sesgo-seleccion', 'falacia-tamaño-muestra'],
            esOptima: false,
            consecuencias: 'Un tamaño muestral grande no corrige los sesgos sistemáticos de selección. Esta estrategia proporcionaría estimaciones muy precisas pero potencialmente inexactas de los parámetros poblacionales reales.'
          }
        ]
      },
      {
        id: 'criterios-inclusion',
        titulo: 'Criterios de Inclusión y Exclusión',
        descripcion: 'Debes definir los criterios para determinar qué niños podrán participar en el estudio.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'criterios-a',
            texto: 'Incluir solo niños con desarrollo típico, excluyendo a aquellos con diagnósticos de trastornos del neurodesarrollo o dificultades de aprendizaje.',
            descripcion: 'Enfoque restrictivo centrado en el desarrollo "normativo".',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-normalidad'],
            esOptima: false,
            consecuencias: 'Esta exclusión limita significativamente la generalización a una población infantil diversa y podría llevar a recomendaciones educativas que no consideren las necesidades de todos los niños.'
          },
          {
            id: 'criterios-b',
            texto: 'Incluir un espectro amplio de niños, incluyendo aquellos con diferentes perfiles cognitivos y educativos, con análisis separados para subgrupos según sea necesario.',
            descripcion: 'Enfoque inclusivo que considera la diversidad de perfiles del desarrollo.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque reconoce la diversidad natural en el desarrollo infantil y permite generar conocimiento relevante para una población más amplia y realista.'
          },
          {
            id: 'criterios-c',
            texto: 'Incluir solo a los niños que muestren interés inicial en las tareas de razonamiento abstracto, para facilitar su participación activa.',
            descripcion: 'Selección basada en la motivación o aptitud inicial para las tareas.',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-autoselecion'],
            esOptima: false,
            consecuencias: 'Esta estrategia crearía un importante sesgo al incluir solo niños ya predispuestos o hábiles en el área estudiada, sobreestimando las capacidades típicas e ignorando factores motivacionales.'
          }
        ]
      },
      {
        id: 'analisis-datos',
        titulo: 'Análisis e Interpretación',
        descripcion: 'Los datos han sido recolectados de una muestra diversa que incluye diferentes poblaciones infantiles. ¿Cómo analizarás estos datos?',
        tipo: 'analisis',
        opciones: [
          {
            id: 'analisis-a',
            texto: 'Analizar todos los datos en conjunto, ignorando las características demográficas y contextuales de los participantes.',
            descripcion: 'Análisis global sin considerar las diferencias entre subgrupos.',
            sesgosRelacionados: ['sesgo-agregacion', 'sesgo-simplificacion'],
            esOptima: false,
            consecuencias: 'Este enfoque oscurece importantes variaciones entre grupos y puede llevar a conclusiones sobregeneralizadas que no representan adecuadamente a ningún subgrupo específico.'
          },
          {
            id: 'analisis-b',
            texto: 'Realizar tanto análisis generales como análisis específicos por subgrupos relevantes (nivel socioeconómico, tipo de educación, etc.), evaluando similitudes y diferencias.',
            descripcion: 'Combinación de análisis generales y específicos que respetan la heterogeneidad.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque equilibrado permite identificar tanto patrones generales como variaciones importantes entre subgrupos, ofreciendo una visión más completa y matizada del desarrollo cognitivo infantil.'
          },
          {
            id: 'analisis-c',
            texto: 'Centrarse principalmente en los resultados de los niños de alto rendimiento, argumentando que representan el potencial óptimo del desarrollo cognitivo.',
            descripcion: 'Foco selectivo en un subgrupo de alto desempeño.',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-elitismo'],
            esOptima: false,
            consecuencias: 'Esta interpretación selectiva distorsiona severamente la realidad del desarrollo infantil típico y podría llevar a recomendaciones educativas inalcanzables o inapropiadas para la mayoría de los niños.'
          }
        ]
      },
      {
        id: 'generalizacion',
        titulo: 'Generalización de Resultados',
        descripcion: 'Has encontrado patrones interesantes en el desarrollo del razonamiento abstracto, con variaciones significativas entre diferentes grupos de niños. ¿Cómo presentarás la generalización de estos resultados?',
        tipo: 'interpretacion',
        opciones: [
          {
            id: 'generalizacion-a',
            texto: 'Presentar conclusiones generales aplicables a "todos los niños", minimizando las diferencias entre subgrupos para ofrecer recomendaciones universales más simples.',
            descripcion: 'Generalización amplia que simplifica la complejidad encontrada.',
            sesgosRelacionados: ['sesgo-simplificacion', 'sobregeneralizacion'],
            esOptima: false,
            consecuencias: 'Esta sobregeneralización ignora importantes diferencias contextuales y puede llevar a recomendaciones educativas inapropiadas para muchos niños.'
          },
          {
            id: 'generalizacion-b',
            texto: 'Presentar conclusiones matizadas que reconozcan tanto los patrones generales como las importantes variaciones, especificando claramente a qué poblaciones se pueden generalizar los diferentes hallazgos.',
            descripcion: 'Generalización contextualizada y específica que respeta la complejidad.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque honesto y preciso comunica adecuadamente el alcance y las limitaciones de la generalización, permitiendo aplicaciones más apropiadas del conocimiento generado.'
          },
          {
            id: 'generalizacion-c',
            texto: 'Enfatizar que los resultados provienen de una muestra más diversa que estudios anteriores, por lo que son inherentemente más generalizables que la investigación previa.',
            descripcion: 'Generalización basada principalmente en la comparación con limitaciones de estudios previos.',
            sesgosRelacionados: ['falacia-comparativa', 'sobreconfianza'],
            esOptima: false,
            consecuencias: 'Esta justificación comparativa no aborda adecuadamente las limitaciones propias del estudio actual y puede llevar a una falsa confianza en la generalización de los resultados.'
          }
        ]
      },
      {
        id: 'retroalimentacion',
        titulo: 'Retroalimentación',
        descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos en la selección y representatividad muestral pueden haber influido en tus conclusiones.',
        tipo: 'retroalimentacion',
        contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
      },
      {
        id: 'conclusion',
        titulo: 'Conclusión y Estrategias',
        descripcion: 'Resumen de aprendizajes y estrategias para mejorar la representatividad y validez externa en estudios psicológicos.',
        tipo: 'conclusion',
        contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
      }
    ],
    sesgosAbordados: [
      'sesgo-seleccion',
      'sesgo-muestreo-conveniencia',
      'sobregeneralizacion',
      'sesgo-agregacion'
    ],
    imagenPortada: '/images/escenarios/default.jpg'
  },
  {
    id: 'social-correlacion-causalidad',
    titulo: 'Correlación vs Causalidad en Estudios Sociales',
    descripcion: 'Aprende a distinguir entre correlación y causalidad al analizar datos sociodemográficos y evitar conclusiones erróneas.',
    contexto: 'Como investigador en ciencias sociales, estás analizando datos sobre el uso de redes sociales y los niveles de ansiedad en adolescentes. Los datos muestran una correlación positiva entre ambas variables. Tu tarea es diseñar un estudio y analizar los datos de manera que puedas extraer conclusiones válidas sobre esta relación.',
    area: 'sociologia',
    nivel: 'principiante',
    duracionEstimada: 25,
    pasos: [
      {
        id: 'introduccion',
        titulo: 'Contexto de la Investigación',
        descripcion: 'Has encontrado una correlación positiva entre el tiempo dedicado a redes sociales y los niveles de ansiedad reportados en una muestra de adolescentes. Los medios de comunicación están interesados en tu investigación, y hay presión para presentar conclusiones claras sobre si las redes sociales "causan" ansiedad.',
        tipo: 'introduccion',
        contenidoExtra: '### Información adicional\n\n- Existe un debate público sobre los efectos de la tecnología en la salud mental de los jóvenes.\n- Los datos correlacionales son abundantes, pero los estudios causales rigurosos son escasos.\n- Tu institución está interesada en obtener resultados que puedan influir en políticas públicas.'
      },
      {
        id: 'diseno-estudio',
        titulo: 'Diseño del Estudio',
        descripcion: 'Con los datos correlacionales iniciales, debes decidir cómo proceder para investigar mejor la relación entre redes sociales y ansiedad.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'diseno-a',
            texto: 'Publicar un artículo basado en los datos correlacionales actuales, sugiriendo que el uso de redes sociales causa ansiedad en adolescentes.',
            descripcion: 'Usar los datos correlacionales existentes para inferir causalidad.',
            sesgosRelacionados: ['correlacion-causalidad', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Inferir causalidad a partir de correlación constituye un error fundamental que puede llevar a conclusiones erróneas y recomendaciones potencialmente dañinas.'
          },
          {
            id: 'diseno-b',
            texto: 'Diseñar un estudio longitudinal que mida tanto el uso de redes sociales como los niveles de ansiedad en múltiples momentos a lo largo del tiempo.',
            descripcion: 'Seguimiento de las mismas personas a lo largo del tiempo para observar patrones temporales.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este diseño permite establecer precedencia temporal (un componente clave de la causalidad) y observar la dirección de los cambios en ambas variables.'
          },
          {
            id: 'diseno-c',
            texto: 'Buscar explicaciones alternativas revisando solo la literatura que confirma los efectos negativos de las redes sociales.',
            descripcion: 'Revisión selectiva de literatura que apoya una hipótesis preestablecida.',
            sesgosRelacionados: ['sesgo-confirmacion', 'sesgo-publicacion'],
            esOptima: false,
            consecuencias: 'Esta aproximación sesgada ignora evidencia contraria y alternativas plausibles, reforzando preconcepciones en lugar de buscar la verdad científica.'
          }
        ]
      },
      {
        id: 'variables-control',
        titulo: 'Variables de Control',
        descripcion: 'Al analizar la relación entre redes sociales y ansiedad, es importante considerar otras variables que podrían influir en esta relación.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'variables-a',
            texto: 'Analizar la relación sin incluir variables de control, centrándose exclusivamente en la correlación entre uso de redes sociales y ansiedad.',
            descripcion: 'Análisis bivariado simple sin controles.',
            sesgosRelacionados: ['correlacion-causalidad', 'variable-confusora'],
            esOptima: false,
            consecuencias: 'Ignora variables confusoras que podrían explicar parte o toda la correlación observada, llevando a conclusiones potencialmente erróneas.'
          },
          {
            id: 'variables-b',
            texto: 'Incluir un amplio conjunto de variables de control relevantes como problemas familiares preexistentes, trastornos mentales previos, presión académica y rasgos de personalidad.',
            descripcion: 'Análisis multivariado con controles exhaustivos para factores relevantes.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque reduce significativamente el riesgo de confusión y proporciona una estimación más precisa de la relación específica entre redes sociales y ansiedad.'
          },
          {
            id: 'variables-c',
            texto: 'Seleccionar solo las variables de control que no reducen la correlación entre redes sociales y ansiedad.',
            descripcion: 'Selección sesgada de variables de control para mantener el resultado deseado.',
            sesgosRelacionados: ['sesgo-confirmacion', 'p-hacking'],
            esOptima: false,
            consecuencias: 'Esta selección post-hoc manipulativa distorsiona los resultados para apoyar una conclusión predeterminada.'
          }
        ]
      },
      {
        id: 'analisis-datos',
        titulo: 'Análisis de Datos',
        descripcion: 'Los datos longitudinales muestran un patrón complejo: en algunos casos, la ansiedad precede al aumento del uso de redes sociales, mientras que en otros ocurre lo contrario. Además, cuando se controlan factores como problemas familiares y presión académica, la relación se debilita considerablemente.',
        tipo: 'analisis',
        opciones: [
          {
            id: 'analisis-a',
            texto: 'Centrarse en los casos que muestran que el aumento en el uso de redes sociales precede al aumento de ansiedad, ignorando los casos donde ocurre lo contrario.',
            descripcion: 'Análisis selectivo que favorecer una dirección causal particular.',
            sesgosRelacionados: ['sesgo-confirmacion', 'sesgo-seleccion'],
            esOptima: false,
            consecuencias: 'Este análisis sesgado ignora deliberadamente datos contrarios a la hipótesis preferida, distorsionando la imagen completa.'
          },
          {
            id: 'analisis-b',
            texto: 'Utilizar modelos estadísticos avanzados (como análisis de ruta o modelos de ecuaciones estructurales) para examinar la bidireccionalidad de la relación y los efectos de las variables de control.',
            descripcion: 'Análisis comprehensivo que considera la complejidad y bidireccionalidad de las relaciones.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque reconoce y modela adecuadamente la complejidad de la relación, permitiendo conclusiones matizadas y precisas.'
          },
          {
            id: 'analisis-c',
            texto: 'Dividir la muestra en múltiples subgrupos hasta encontrar alguno donde la relación entre redes sociales y ansiedad sea fuerte y significativa incluso después de controlar otras variables.',
            descripcion: 'Búsqueda de resultados significativos mediante análisis de múltiples subgrupos.',
            sesgosRelacionados: ['p-hacking', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Este enfoque de p-hacking aumenta dramáticamente el riesgo de falsos positivos a través de pruebas múltiples no corregidas.'
          }
        ]
      },
      {
        id: 'interpretacion',
        titulo: 'Interpretación de Resultados',
        descripcion: 'El análisis completo revela una relación bidireccional débil entre el uso de redes sociales y la ansiedad, con efectos mucho menores cuando se controlan otras variables. Los patrones difieren considerablemente entre subgrupos de adolescentes.',
        tipo: 'interpretacion',
        opciones: [
          {
            id: 'interpretacion-a',
            texto: 'Concluir y publicar que "Las redes sociales causan ansiedad en adolescentes", destacando los casos donde esta dirección se observó y minimizando la complejidad encontrada.',
            descripcion: 'Simplificación excesiva que ignora la complejidad y sobrecomunica una dirección causal.',
            sesgosRelacionados: ['correlacion-causalidad', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Esta conclusión simplista distorsiona los hallazgos reales y puede llevar a recomendaciones inapropiadas y alarma social injustificada.'
          },
          {
            id: 'interpretacion-b',
            texto: 'Presentar una interpretación matizada que reconozca la relación bidireccional, la importancia de otros factores, y las diferencias entre subgrupos de adolescentes.',
            descripcion: 'Interpretación equilibrada que refleja fielmente la complejidad de los hallazgos.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Esta interpretación representa honestamente la evidencia disponible y proporciona una base sólida para recomendaciones matizadas y futuras investigaciones.'
          },
          {
            id: 'interpretacion-c',
            texto: 'Sugerir que, aunque los resultados son complejos, se deberían implementar políticas restrictivas sobre el uso de redes sociales en adolescentes "por precaución".',
            descripcion: 'Recomendaciones de política que van más allá de lo justificado por los datos.',
            sesgosRelacionados: ['sesgo-confirmacion', 'extralimitacion-datos'],
            esOptima: false,
            consecuencias: 'Esta interpretación extrapola indebidamente los datos para justificar políticas que podrían resultar innecesarias o incluso contraproducentes.'
          }
        ]
      },
      {
        id: 'retroalimentacion',
        titulo: 'Retroalimentación',
        descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en el estudio de correlación versus causalidad.',
        tipo: 'retroalimentacion',
        contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
      },
      {
        id: 'conclusion',
        titulo: 'Conclusión y Estrategias',
        descripcion: 'Resumen de aprendizajes y estrategias para distinguir correctamente entre correlación y causalidad en investigación social.',
        tipo: 'conclusion',
        contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
      }
    ],
    sesgosAbordados: [
      'correlacion-causalidad',
      'sesgo-confirmacion',
      'p-hacking',
      'variable-confusora'
    ],
    imagenPortada: '/images/escenarios/default.jpg'
  },
  {
    id: 'social-diseno-encuestas',
    titulo: 'Diseño de Encuestas Sin Sesgos',
    descripcion: 'Aprende a diseñar encuestas y cuestionarios que minimicen los sesgos en las preguntas, la selección de participantes y la interpretación de respuestas.',
    contexto: 'Trabajas en una organización que estudia opiniones sobre temas sociales controvertidos. Tu tarea es diseñar una encuesta sobre actitudes hacia la inmigración que genere datos válidos y representativos, evitando sesgos comunes en el diseño de preguntas y muestreo.',
    area: 'sociologia',
    nivel: 'principiante',
    duracionEstimada: 30,
    pasos: [
      {
        id: 'introduccion',
        titulo: 'Contexto del Estudio',
        descripcion: 'Debes diseñar una encuesta nacional sobre actitudes hacia políticas migratorias. Los resultados serán utilizados para informar debate público y posibles políticas. Es fundamental que tu diseño recoja opiniones de manera representativa y sin inducir respuestas particulares.',
        tipo: 'introduccion',
        contenidoExtra: '### Información adicional\n\n- La inmigración es un tema con fuertes divisiones políticas e ideológicas.\n- Tu organización aspira a mantener neutralidad en temas políticos divisivos.\n- Un estudio previo fue criticado por utilizar preguntas sesgadas que parecían favorecer cierta postura.\n- Existe presión por publicar resultados rápidamente debido al actual debate legislativo.'
      },
      {
        id: 'diseno-preguntas',
        titulo: 'Diseño de Preguntas',
        descripcion: 'Debes formular las preguntas principales de la encuesta. ¿Cómo estructurarás estas preguntas para minimizar el sesgo?',
        tipo: 'diseno',
        opciones: [
          {
            id: 'preguntas-a',
            texto: 'Incluir preguntas claramente dirigidas que reflejen el problema, como: "¿Está de acuerdo en que la inmigración descontrolada daña la economía nacional?"',
            descripcion: 'Preguntas con lenguaje cargado y presunciones incorporadas.',
            sesgosRelacionados: ['sesgo-pregunta', 'sesgo-formulacion'],
            esOptima: false,
            consecuencias: 'Estas preguntas tendenciosas influencian fuertemente las respuestas, produciendo datos que reflejan el sesgo en la pregunta más que las opiniones reales de los encuestados.'
          },
          {
            id: 'preguntas-b',
            texto: 'Formular preguntas neutrales y equilibradas, como: "¿Cuál es su opinión sobre los niveles actuales de inmigración?" con opciones balanceadas desde "Deberían reducirse significativamente" hasta "Deberían aumentarse significativamente".',
            descripcion: 'Preguntas neutrales con escala de respuesta equilibrada.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque neutral permite a los encuestados expresar sus opiniones reales sin ser dirigidos hacia respuestas particulares, generando datos más válidos y representativos.'
          },
          {
            id: 'preguntas-c',
            texto: 'Incluir principalmente preguntas que apoyen los beneficios de la inmigración, ya que estudios académicos han demostrado estos beneficios y es importante educar a los encuestados.',
            descripcion: 'Preguntas sesgadas hacia una postura particular con justificación educativa.',
            sesgosRelacionados: ['sesgo-formulacion', 'sesgo-confirmacion'],
            esOptima: false,
            consecuencias: 'Este enfoque confunde investigación con persuasión, sesgando los resultados y comprometiendo la validez y credibilidad del estudio.'
          }
        ]
      },
      {
        id: 'estrategia-muestreo',
        titulo: 'Estrategia de Muestreo',
        descripcion: 'Debes decidir cómo seleccionarás a los participantes para tu encuesta.',
        tipo: 'diseno',
        opciones: [
          {
            id: 'muestreo-a',
            texto: 'Difundir la encuesta principalmente a través de tus redes sociales y las de tu organización, solicitando a seguidores que la compartan con sus contactos.',
            descripcion: 'Muestreo por conveniencia y bola de nieve a través de redes sociales.',
            sesgosRelacionados: ['sesgo-seleccion', 'sesgo-autoselecion'],
            esOptima: false,
            consecuencias: 'Este método producirá una muestra fuertemente sesgada hacia personas con perfiles demográficos e ideológicos similares a los de tu organización, limitando severamente la representatividad.'
          },
          {
            id: 'muestreo-b',
            texto: 'Implementar un muestreo probabilístico estratificado que garantice representación adecuada de diferentes regiones, grupos demográficos y posiciones políticas conocidas.',
            descripcion: 'Muestreo probabilístico con estratificación para garantizar representatividad.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este método proporciona la mejor garantía de una muestra representativa de la población general, reduciendo significativamente los sesgos de selección.'
          },
          {
            id: 'muestreo-c',
            texto: 'Concentrarse en obtener una muestra muy grande (decenas de miles de respuestas) a través de múltiples canales, confiando en que el gran tamaño compensará cualquier sesgo de selección.',
            descripcion: 'Priorizar tamaño muestral sobre metodología de selección.',
            sesgosRelacionados: ['sesgo-seleccion', 'falacia-tamaño-muestra'],
            esOptima: false,
            consecuencias: 'Un tamaño muestral grande no corrige los sesgos sistemáticos de selección. Este enfoque producirá estimaciones muy precisas pero potencialmente inexactas de las opiniones poblacionales reales.'
          }
        ]
      },
      {
        id: 'analisis-datos',
        titulo: 'Análisis de Datos',
        descripcion: 'Has recolectado respuestas de una muestra diversa pero imperfectamente representativa. ¿Cómo analizarás estos datos?',
        tipo: 'analisis',
        opciones: [
          {
            id: 'analisis-a',
            texto: 'Centrar el análisis en los subgrupos o preguntas específicas que muestran resultados más interesantes o sorprendentes.',
            descripcion: 'Análisis selectivo basado en hallazgos interesantes o inesperados.',
            sesgosRelacionados: ['p-hacking', 'sesgo-cherry-picking'],
            esOptima: false,
            consecuencias: 'Este enfoque selectivo distorsiona los resultados generales al destacar hallazgos no representativos, potencialmente produciendo "falsos descubrimientos" a través de pruebas múltiples no corregidas.'
          },
          {
            id: 'analisis-b',
            texto: 'Realizar un análisis integral que incluya ponderación estadística para corregir desbalances muestrales conocidos, transparencia sobre métodos y presentación equilibrada de todos los resultados principales.',
            descripcion: 'Análisis metodológicamente riguroso con correcciones por representatividad y transparencia completa.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Este enfoque produce la estimación más precisa posible de las opiniones reales en la población, mientras reconoce y comunica honestamente las limitaciones inherentes.'
          },
          {
            id: 'analisis-c',
            texto: 'Analizar los datos sin correcciones estadísticas, argumentando que los métodos de ponderación introducen sus propios sesgos y manipulaciones.',
            descripcion: 'Análisis sin correcciones metodológicas por sesgos de representatividad conocidos.',
            sesgosRelacionados: ['sesgo-seleccion', 'falacia-naturalista'],
            esOptima: false,
            consecuencias: 'Este enfoque ignora sesgos muestrales conocidos y evitables, resultando en estimaciones sistemáticamente sesgadas que no representan adecuadamente a la población general.'
          }
        ]
      },
      {
        id: 'interpretacion',
        titulo: 'Comunicación de Resultados',
        descripcion: 'Los resultados muestran una distribución compleja de opiniones, con diferencias significativas entre grupos demográficos y regiones. ¿Cómo comunicarás estos hallazgos?',
        tipo: 'interpretacion',
        opciones: [
          {
            id: 'interpretacion-a',
            texto: 'Destacar en el resumen ejecutivo y comunicados de prensa principalmente los resultados que parecen más impactantes o noticiables.',
            descripcion: 'Comunicación selectiva que prioriza impacto mediático sobre representatividad.',
            sesgosRelacionados: ['sesgo-cherry-picking', 'sesgo-noticiabilidad'],
            esOptima: false,
            consecuencias: 'Este enfoque distorsiona la percepción pública de los resultados generales, potencialmente alimentando narrativas simplistas o sensacionalistas en lugar de una comprensión matizada del tema.'
          },
          {
            id: 'interpretacion-b',
            texto: 'Presentar una comunicación integral y equilibrada que refleje la complejidad de los hallazgos, incluyendo tanto tendencias generales como variaciones importantes, con contexto metodológico claro.',
            descripcion: 'Comunicación completa, equilibrada y contextualizada de todos los hallazgos principales.',
            sesgosRelacionados: [],
            esOptima: true,
            consecuencias: 'Esta comunicación honesta y completa promueve una comprensión pública precisa de las actitudes hacia la inmigración, con sus complejidades y matices, facilitando un debate público más informado.'
          },
          {
            id: 'interpretacion-c',
            texto: 'Enmarcar los resultados para destacar la postura mayoritaria como la correcta o deseable, apelando al argumento de que representa "la voluntad popular".',
            descripcion: 'Comunicación normativa que confunde descripción con prescripción.',
            sesgosRelacionados: ['falacia-mayoritaria', 'sesgo-normativo'],
            esOptima: false,
            consecuencias: 'Este enfoque confunde inadecuadamente la investigación descriptiva con juicios normativos, comprometiendo la objetividad del estudio y potencialmente alienando a partes importantes de la audiencia.'
          }
        ]
      },
      {
        id: 'retroalimentacion',
        titulo: 'Retroalimentación',
        descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en el diseño y análisis de la encuesta.',
        tipo: 'retroalimentacion',
        contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
      },
      {
        id: 'conclusion',
        titulo: 'Conclusión y Estrategias',
        descripcion: 'Resumen de aprendizajes y estrategias para diseñar encuestas rigurosas y minimizar sesgos en investigación social.',
        tipo: 'conclusion',
        contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
      }
    ],
    sesgosAbordados: [
      'sesgo-pregunta',
      'sesgo-seleccion',
      'sesgo-autoselecion',
      'sesgo-cherry-picking'
    ],
    imagenPortada: '/images/escenarios/default.jpg'
  },
  // Estos escenarios deben agregarse al array 'escenarios' en src/data/escenarios.ts

// SESGOS EN INVESTIGACIÓN HISTÓRICA
{
  id: 'historia-fuentes-primarias',
  titulo: 'El Sesgo en la Selección de Fuentes Históricas',
  descripcion: 'Aprende a identificar y evitar sesgos en la selección e interpretación de fuentes primarias en investigación histórica.',
  contexto: 'Como historiador investigando un conflicto bélico del siglo XIX, debes analizar diversas fuentes primarias para reconstruir los eventos. Tus decisiones sobre qué fuentes priorizar y cómo interpretarlas determinarán la objetividad y validez de tus conclusiones.',
  area: 'historia',
  nivel: 'principiante',
  duracionEstimada: 30,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto de la Investigación',
      descripcion: 'Estás investigando la Guerra Civil Americana (1861-1865) para un libro académico. Tienes acceso a distintos tipos de fuentes primarias: diarios personales de soldados de ambos bandos, reportes militares oficiales, artículos de periódicos contemporáneos del Norte y del Sur, y correspondencia privada de líderes políticos.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- Las fuentes están distribuidas desigualmente, con mayor preservación de documentos del bando vencedor (la Unión).\n- Cada tipo de fuente ofrece perspectivas distintas, influenciadas por su contexto de producción.\n- Tu editorial espera una narrativa coherente y atractiva, además de rigor académico.\n- La Guerra Civil sigue siendo un tema con resonancias políticas en la actualidad.'
    },
    {
      id: 'seleccion-fuentes',
      titulo: 'Selección de Fuentes',
      descripcion: 'Debes decidir qué fuentes utilizarás como base principal para tu investigación, considerando su representatividad y potenciales sesgos.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'fuentes-a',
          texto: 'Priorizar fuentes oficiales y reportes militares por su aparente objetividad y precisión.',
          descripcion: 'Enfoque que prioriza documentos "oficiales" y registros formales.',
          sesgosRelacionados: ['sesgo-autoridad', 'sesgo-institucional'],
          esOptima: false,
          consecuencias: 'Esta selección privilegia la narrativa de las instituciones y autoridades, omitiendo experiencias directas de los participantes y perspectivas alternativas, y asumiendo incorrectamente que los documentos oficiales son necesariamente más objetivos.'
        },
        {
          id: 'fuentes-b',
          texto: 'Utilizar una combinación equilibrada de fuentes de diversos tipos y orígenes, explicitando sus limitaciones y contextos de producción.',
          descripcion: 'Enfoque que busca diversidad documental y transparencia metodológica.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque reconoce la parcialidad inherente a cualquier fuente histórica y busca triangular información mediante la comparación de distintos tipos de documentos y perspectivas.'
        },
        {
          id: 'fuentes-c',
          texto: 'Centrarse en diarios personales y correspondencia privada por ofrecer testimonios más "auténticos" y menos filtrados.',
          descripcion: 'Enfoque que privilegia testimonios personales directos.',
          sesgosRelacionados: ['sesgo-anecdotico', 'sesgo-emocional'],
          esOptima: false,
          consecuencias: 'Esta selección sobrevalora las experiencias individuales subjetivas, que pueden ser atípicas o estar distorsionadas por percepciones personales, sin el contexto más amplio que ofrecen otras fuentes.'
        }
      ]
    },
    {
      id: 'interpretacion-testimonios',
      titulo: 'Interpretación de Testimonios Contradictorios',
      descripcion: 'Has encontrado testimonios contradictorios sobre un evento clave. ¿Cómo manejarás estas contradicciones?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'interpretacion-a',
          texto: 'Seleccionar los testimonios que mejor se ajusten a la narrativa principal que estás desarrollando, descartando aquellos que resultan incongruentes.',
          descripcion: 'Selección de fuentes basada en su consistencia con una narrativa predeterminada.',
          sesgosRelacionados: ['sesgo-confirmacion', 'cherry-picking'],
          esOptima: false,
          consecuencias: 'Este enfoque distorsiona la realidad histórica para mantener una narrativa coherente pero potencialmente falsa, ignorando evidencia contradictoria crucial.'
        },
        {
          id: 'interpretacion-b',
          texto: 'Presentar explícitamente las contradicciones, analizando los posibles motivos de las discrepancias y las limitaciones de nuestro conocimiento histórico.',
          descripcion: 'Abordaje que reconoce y analiza las contradicciones como parte del proceso histórico.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque honesto reconoce las limitaciones inherentes a la reconstrucción histórica y presenta una visión más compleja pero más fiel a la realidad de los eventos pasados.'
        },
        {
          id: 'interpretacion-c',
          texto: 'Confiar principalmente en las fuentes que parecen más detalladas y vividas, asumiendo que son más precisas por su nivel de detalle.',
          descripcion: 'Priorización basada en la riqueza narrativa y vividez del testimonio.',
          sesgosRelacionados: ['sesgo-disponibilidad', 'efecto-vivacidad'],
          esOptima: false,
          consecuencias: 'La vividez de un relato no correlaciona con su precisión histórica, y este enfoque puede dar peso indebido a testimonios detallados pero potencialmente inexactos o atípicos.'
        }
      ]
    },
    {
      id: 'perspectivas-marginadas',
      titulo: 'Inclusión de Perspectivas Marginadas',
      descripcion: 'Debes decidir cómo abordar la relativa escasez de fuentes directas de grupos marginados (esclavos liberados, mujeres, nativos americanos) cuyas experiencias fueron fundamentales en el conflicto.',
      tipo: 'analisis',
      opciones: [
        {
          id: 'perspectivas-a',
          texto: 'Centrarse principalmente en las fuentes más abundantes y accesibles, mencionando brevemente que existen limitaciones respecto a ciertas perspectivas.',
          descripcion: 'Enfoque que prioriza las fuentes más numerosas y fácilmente disponibles.',
          sesgosRelacionados: ['sesgo-supervivencia', 'sesgo-disponibilidad'],
          esOptima: false,
          consecuencias: 'Este enfoque perpetúa los sesgos históricos en la preservación documental, reproduciendo las exclusiones originales y presentando una historia parcial dominada por voces privilegiadas.'
        },
        {
          id: 'perspectivas-b',
          texto: 'Hacer un esfuerzo específico por incluir las fuentes disponibles de grupos marginados, complementando con análisis de fuentes indirectas y contextualizando la escasez documental como resultado de dinámicas de poder históricas.',
          descripcion: 'Enfoque que busca activamente compensar los sesgos de preservación documental.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque reconoce y busca contrarrestar los sesgos inherentes al registro histórico, ofreciendo una reconstrucción más completa que considera las dinámicas de poder que moldearon la producción y preservación documental.'
        },
        {
          id: 'perspectivas-c',
          texto: 'Recurrir extensivamente a reconstrucciones contemporáneas y testimonios de segunda mano para "dar voz" a los grupos subrepresentados.',
          descripcion: 'Uso extensivo de fuentes secundarias y reconstrucciones para compensar vacíos documentales.',
          sesgosRelacionados: ['sesgo-presentismo', 'sesgo-proyeccion'],
          esOptima: false,
          consecuencias: 'Este enfoque puede introducir interpretaciones anacrónicos y proyectar valores contemporáneos al pasado, creando representaciones que parecen inclusivas pero que pueden distorsionar las realidades históricas.'
        }
      ]
    },
    {
      id: 'contexto-historico',
      titulo: 'Contextualización Histórica',
      descripcion: 'Debes decidir cómo contextualizar las acciones y perspectivas de los actores históricos, especialmente respecto a temas moralmente complejos como la esclavitud.',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'contexto-a',
          texto: 'Juzgar las acciones y creencias de los actores históricos según estándares éticos contemporáneos, destacando claramente los errores morales del pasado.',
          descripcion: 'Evaluación basada en estándares éticos actuales.',
          sesgosRelacionados: ['sesgo-presentismo', 'sesgo-superioridad-temporal'],
          esOptima: false,
          consecuencias: 'Este enfoque anacrónico impone valores contemporáneos a contextos históricos distintos, dificultando la comprensión genuina de las mentalidades y motivaciones de la época.'
        },
        {
          id: 'contexto-b',
          texto: 'Presentar acciones y creencias en su contexto histórico, explicando tanto las limitaciones de la época como las voces disidentes que existían, sin renunciar a análisis éticos claramente diferenciados.',
          descripcion: 'Contextualización que balancea comprensión histórica con claridad ética.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque permite entender genuinamente el pasado en sus propios términos, reconociendo simultáneamente la diversidad de posiciones éticas que existían en cada época y permitiendo un análisis moral informado.'
        },
        {
          id: 'contexto-c',
          texto: 'Evitar cualquier juicio sobre prácticas del pasado, argumentando que solo pueden entenderse en el contexto de su época y no deben evaluarse con criterios externos.',
          descripcion: 'Relativismo histórico completo que evita cualquier evaluación ética.',
          sesgosRelacionados: ['sesgo-relativismo', 'falacia-contexto'],
          esOptima: false,
          consecuencias: 'Este enfoque puede derivar en un relativismo excesivo que ignora las críticas contemporáneas a prácticas como la esclavitud, homogeneizando incorrectamente el pensamiento de épocas pasadas.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu interpretación histórica.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para mejorar la objetividad en la investigación histórica.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-autoridad',
    'sesgo-confirmacion',
    'sesgo-disponibilidad',
    'sesgo-presentismo'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},
{
  id: 'historia-narrativas-culturales',
  titulo: 'Narrativas Culturales en la Historia',
  descripcion: 'Explora cómo las narrativas culturales dominantes influyen en nuestra interpretación de eventos históricos y aprende a reconocer y superar estos sesgos narrativos.',
  contexto: 'Estás preparando una exposición museística sobre intercambios culturales entre civilizaciones. Debes seleccionar, contextualizar e interpretar artefactos y eventos históricos de manera que representen con precisión las complejas interacciones entre distintas culturas, evitando narrativas simplistas o sesgadas.',
  area: 'historia',
  nivel: 'principiante',
  duracionEstimada: 35,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Proyecto',
      descripcion: 'Como curador de un importante museo, estás diseñando una exposición sobre "Encuentros Culturales: Intercambios, Conflictos y Transformaciones" que explorará contactos históricos entre civilizaciones mediterráneas, asiáticas y americanas. Tu objetivo es crear una narrativa histórica que refleje la complejidad de estos encuentros.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- El museo tiene una larga tradición y su colección fue formada principalmente durante la era colonial.\n- Diferentes comunidades descendientes de las culturas representadas han expresado interés en cómo se narrarán estos encuentros.\n- Existen debates académicos actuales sobre cómo representar las dinámicas de poder en los intercambios culturales históricos.\n- La exposición será visitada por un público diverso, desde escolares hasta especialistas.'
    },
    {
      id: 'marco-narrativo',
      titulo: 'Marco Narrativo General',
      descripcion: 'Debes decidir el enfoque narrativo general que guiará la exposición y la interpretación de los intercambios culturales.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'narrativa-a',
          texto: 'Adoptar una narrativa de "Progreso y Difusión Cultural", destacando cómo las civilizaciones "más avanzadas" difundieron conocimientos y tecnologías a otras culturas.',
          descripcion: 'Narrativa tradicional centrada en la difusión desde centros culturales "avanzados".',
          sesgosRelacionados: ['sesgo-eurocentrismo', 'determinismo-tecnologico'],
          esOptima: false,
          consecuencias: 'Esta narrativa simplifica las complejas interacciones culturales, suele reforzar jerarquías culturales cuestionables y minimiza la agencia e innovación de culturas etiquetadas como "receptoras".'
        },
        {
          id: 'narrativa-b',
          texto: 'Presentar los encuentros culturales como redes complejas de intercambios multidireccionales, adaptaciones y negociaciones, contextualizando las dinámicas de poder sin simplificarlas.',
          descripcion: 'Enfoque que reconoce la complejidad, reciprocidad y contextos de poder en los intercambios.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este marco permite una representación más precisa y matizada de los encuentros culturales, reconociendo tanto las asimetrías de poder como la agencia y creatividad de todas las sociedades involucradas.'
        },
        {
          id: 'narrativa-c',
          texto: 'Enfocar la exposición como una narrativa de "Injusticia Histórica", centrándose principalmente en la dominación, apropiación y explotación por parte de potencias coloniales.',
          descripcion: 'Narrativa centrada en la crítica a las estructuras de dominación histórica.',
          sesgosRelacionados: ['sesgo-presentismo', 'reduccionismo-politico'],
          esOptima: false,
          consecuencias: 'Aunque aborda dimensiones importantes, esta narrativa puede resultar reduccionista, ignorando la complejidad y reciprocidad de muchos intercambios culturales y la agencia de las sociedades no dominantes.'
        }
      ]
    },
    {
      id: 'seleccion-artefactos',
      titulo: 'Selección de Artefactos',
      descripcion: 'Debes decidir qué criterios utilizarás para seleccionar los artefactos y objetos que se exhibirán.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'artefactos-a',
          texto: 'Priorizar los objetos más estéticamente impresionantes y de culturas más reconocibles por el público occidental.',
          descripcion: 'Selección basada en valor estético occidental y familiaridad cultural.',
          sesgosRelacionados: ['sesgo-estetico', 'sesgo-familiaridad'],
          esOptima: false,
          consecuencias: 'Este enfoque perpetúa jerarquías culturales existentes, privilegiando objetos que coinciden con gustos estéticos occidentales y marginando expresiones culturales menos familiares pero históricamente significativas.'
        },
        {
          id: 'artefactos-b',
          texto: 'Seleccionar objetos que reflejen la diversidad de intercambios culturales, incluyendo tanto piezas destacadas como cotidianas, con representación equilibrada de diferentes culturas.',
          descripcion: 'Selección diversa y equilibrada que prioriza la representatividad histórica.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque ofrece una visión más completa y precisa de los intercambios culturales, destacando tanto objetos excepcionales como cotidianos que evidencian conexiones e influencias mutuas entre sociedades.'
        },
        {
          id: 'artefactos-c',
          texto: 'Centrarse en objetos que desafíen explícitamente narrativas tradicionales, incluso si esto significa excluir piezas históricamente significativas pero que refuerzan visiones convencionales.',
          descripcion: 'Selección con intención principalmente revisionista.',
          sesgosRelacionados: ['sesgo-correctivo', 'sesgo-contrarreaccion'],
          esOptima: false,
          consecuencias: 'Aunque busca corregir desequilibrios históricos, este enfoque puede crear nuevos sesgos, distorsionando la representación histórica al excluir objetos significativos por motivos principalmente ideológicos actuales.'
        }
      ]
    },
    {
      id: 'contextualizacion-objetos',
      titulo: 'Contextualización de Objetos Controversiales',
      descripcion: 'La exposición incluirá algunos objetos con historias controversiales, como piezas saqueadas durante conquistas o artefactos sagrados adquiridos en circunstancias cuestionables. ¿Cómo contextualizarás estos objetos?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'contexto-a',
          texto: 'Presentar los objetos principalmente por su valor artístico o histórico, mencionando brevemente su procedencia pero evitando enfatizar controversias que podrían distraer de su apreciación.',
          descripcion: 'Minimización de las controversias en favor del valor artístico/histórico.',
          sesgosRelacionados: ['sesgo-descontextualizacion', 'sesgo-esteticismo'],
          esOptima: false,
          consecuencias: 'Este enfoque descontextualiza los objetos, separándolos de sus significados originales y sus historias complejas, presentando una visión incompleta y potencialmente engañosa.'
        },
        {
          id: 'contexto-b',
          texto: 'Proporcionar contexto completo sobre la creación, uso original, adquisición y controversias actuales de cada pieza, incluyendo perspectivas de las comunidades de origen y debates sobre repatriación cuando sea relevante.',
          descripcion: 'Contextualización completa que incluye historia, controversias y múltiples perspectivas.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque honesto reconoce la compleja biografía de los objetos culturales, permitiendo a los visitantes comprender tanto su valor intrínseco como las dimensiones éticas e históricas de su presencia en el museo.'
        },
        {
          id: 'contexto-c',
          texto: 'Enfocarse principalmente en las controversias y problemas éticos relacionados con la adquisición de los objetos, utilizándolos principalmente como ejemplos de apropiación cultural e imperialismo.',
          descripcion: 'Énfasis casi exclusivo en el aspecto controversial y ético.',
          sesgosRelacionados: ['sesgo-moralista', 'reduccionismo-etico'],
          esOptima: false,
          consecuencias: 'Esta aproximación reduce objetos culturales complejos a meros símbolos de conflictos éticos contemporáneos, potencialmente ignorando sus significados originales y múltiples dimensiones históricas.'
        }
      ]
    },
    {
      id: 'interpretacion-encuentros',
      titulo: 'Interpretación de Encuentros Culturales',
      descripcion: 'Debes decidir cómo interpretar y presentar un importante encuentro cultural histórico: el contacto europeo-americano del siglo XVI.',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'encuentro-a',
          texto: 'Presentarlo principalmente como un "descubrimiento" que, a pesar de sus aspectos negativos, llevó al progreso y la modernización del continente americano.',
          descripcion: 'Narrativa tradicional de descubrimiento y progreso.',
          sesgosRelacionados: ['sesgo-eurocentrismo', 'mito-progreso'],
          esOptima: false,
          consecuencias: 'Esta interpretación perpetúa una visión eurocéntrica, minimiza el impacto devastador para las poblaciones indígenas y simplifica procesos históricos complejos.'
        },
        {
          id: 'encuentro-b',
          texto: 'Presentarlo como un encuentro complejo con profundas consecuencias para todos los involucrados, incluyendo intercambios biológicos, tecnológicos y culturales, así como conflictos, resistencias y transformaciones en múltiples direcciones.',
          descripcion: 'Interpretación multidimensional que reconoce complejidad, asimetrías y bidireccionalidad.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque ofrece una visión histórica más precisa y matizada, reconociendo tanto las profundas asimetrías de poder como la agencia indígena y los múltiples niveles de intercambio y transformación.'
        },
        {
          id: 'encuentro-c',
          texto: 'Describirlo exclusivamente como un proceso de invasión, genocidio y destrucción cultural, destacando únicamente los aspectos negativos del contacto.',
          descripcion: 'Narrativa centrada exclusivamente en los aspectos destructivos.',
          sesgosRelacionados: ['sesgo-reduccionista', 'narrativa-victimizacion'],
          esOptima: false,
          consecuencias: 'Aunque aborda aspectos cruciales, esta interpretación unidimensional puede simplificar procesos históricos complejos y negar la agencia y adaptación de los pueblos indígenas, presentándolos exclusivamente como víctimas pasivas.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos narrativos pueden haber influido en tu interpretación histórica.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para crear narrativas históricas más equilibradas y conscientes de sus sesgos.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-eurocentrismo',
    'sesgo-presentismo',
    'sesgo-descontextualizacion',
    'narrativa-victimizacion'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},

// SESGOS EN ESTUDIOS ECOLÓGICOS
{
  id: 'ecologia-muestreo-habitat',
  titulo: 'Diseño de Muestreo en Estudios de Hábitat',
  descripcion: 'Aprende a diseñar protocolos de muestreo para estudios ecológicos que minimicen sesgos espaciales, temporales y de detección.',
  contexto: 'Como ecólogo de campo, debes diseñar un estudio para evaluar la biodiversidad y el estado de conservación de un ecosistema amenazado. Tus decisiones sobre métodos, lugares y tiempos de muestreo determinarán la validez de tus conclusiones y las recomendaciones de conservación resultantes.',
  area: 'ecologia',
  nivel: 'intermedio',
  duracionEstimada: 35,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Estudio',
      descripcion: 'Eres el ecólogo principal en un proyecto para evaluar la biodiversidad de un bosque tropical estacionalmente seco, con el objetivo de desarrollar un plan de conservación. El área es extensa (50,000 hectáreas), heterogénea en cuanto a topografía y vegetación, y está parcialmente afectada por actividades humanas como tala selectiva y ganadería extensiva.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- El financiamiento y tiempo disponibles son limitados: tienes un equipo de 4 personas y 3 meses para completar el trabajo de campo.\n- La zona tiene una marcada estacionalidad, con una temporada seca (actual) y una lluviosa.\n- Existen caminos que facilitan el acceso a ciertas áreas, mientras otras son remotas y de difícil acceso.\n- Las especies emblemáticas o carismáticas generan mayor interés en financiadores y autoridades locales.'
    },
    {
      id: 'estrategia-muestreo',
      titulo: 'Estrategia de Muestreo',
      descripcion: 'Debes decidir cómo distribuirás el esfuerzo de muestreo en el área de estudio.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'muestreo-a',
          texto: 'Concentrar el esfuerzo de muestreo en áreas de fácil acceso cercanas a caminos y senderos, maximizando la cantidad de sitios que puedes evaluar.',
          descripcion: 'Muestreo de conveniencia basado en accesibilidad.',
          sesgosRelacionados: ['sesgo-muestreo-conveniencia', 'sesgo-accesibilidad'],
          esOptima: false,
          consecuencias: 'Este enfoque introduce un fuerte sesgo espacial, sobrerrepresentando hábitats perturbados cercanos a vías de acceso y subestimando la biodiversidad de zonas remotas que suelen estar mejor conservadas.'
        },
        {
          id: 'muestreo-b',
          texto: 'Implementar un diseño de muestreo estratificado aleatorio, asegurando cobertura representativa de los diferentes tipos de hábitat y gradientes ambientales, incluyendo zonas remotas.',
          descripcion: 'Muestreo estratificado aleatorio que equilibra representatividad y factibilidad.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque proporciona una visión más precisa y representativa del ecosistema completo, equilibrando rigurosidad metodológica con limitaciones logísticas reales.'
        },
        {
          id: 'muestreo-c',
          texto: 'Priorizar áreas donde se han reportado especies carismáticas o de alto valor de conservación, centrando el estudio en hábitats óptimos para estas especies.',
          descripcion: 'Muestreo dirigido hacia especies o hábitats de particular interés.',
          sesgosRelacionados: ['sesgo-taxonomico', 'sesgo-confirmacion'],
          esOptima: false,
          consecuencias: 'Este enfoque sesgado sobreestimará la importancia de ciertas especies y hábitats mientras ignora la diversidad completa del ecosistema, generando recomendaciones de conservación potencialmente desequilibradas.'
        }
      ]
    },
    {
      id: 'estacionalidad',
      titulo: 'Consideración de la Estacionalidad',
      descripcion: 'El estudio se realizará durante la estación seca. ¿Cómo abordarás las limitaciones que esto impone?',
      tipo: 'diseno',
      opciones: [
        {
          id: 'estacionalidad-a',
          texto: 'Realizar el estudio únicamente durante la estación seca actual, maximizando la cobertura espacial en este período.',
          descripcion: 'Muestreo limitado a una sola estación.',
          sesgosRelacionados: ['sesgo-temporal', 'sesgo-estacional'],
          esOptima: false,
          consecuencias: 'Este enfoque proporcionará una visión sesgada del ecosistema, ya que muchas especies solo son activas o visibles durante la temporada lluviosa, subestimando significativamente la biodiversidad total.'
        },
        {
          id: 'estacionalidad-b',
          texto: 'Distribuir el esfuerzo entre un muestreo extensivo durante la estación seca y un muestreo complementario más limitado durante el inicio de la temporada lluviosa, reconociendo explícitamente las limitaciones de cobertura estacional.',
          descripcion: 'Muestreo bifásico con reconocimiento explícito de limitaciones.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque balancea las restricciones prácticas con la necesidad de capturar al menos parcialmente la variabilidad estacional, proporcionando datos más robustos y reconociendo explícitamente sus limitaciones.'
        },
        {
          id: 'estacionalidad-c',
          texto: 'Enfocarte solo en grupos taxonómicos poco afectados por la estacionalidad (como árboles y plantas perennes), evitando grupos con alta variación estacional.',
          descripcion: 'Restricción taxonómica para evitar el problema de estacionalidad.',
          sesgosRelacionados: ['sesgo-taxonomico', 'sesgo-simplificacion'],
          esOptima: false,
          consecuencias: 'Este enfoque simplista ignora componentes cruciales del ecosistema y sus interacciones, generando una visión artificialmente incompleta que no servirá adecuadamente para decisiones de conservación.'
        }
      ]
    },
    {
      id: 'tecnicas-muestreo',
      titulo: 'Técnicas de Muestreo',
      descripcion: 'Debes decidir qué técnicas utilizarás para muestrear la biodiversidad del bosque.',
      tipo: 'analisis',
      opciones: [
        {
          id: 'tecnicas-a',
          texto: 'Utilizar principalmente métodos de observación directa y conteos visuales por ser más sencillos de implementar y menos intensivos en recursos.',
          descripcion: 'Enfoque en técnicas observacionales directas y de baja complejidad.',
          sesgosRelacionados: ['sesgo-deteccion', 'sesgo-visibilidad'],
          esOptima: false,
          consecuencias: 'Este enfoque sesgará dramáticamente los resultados hacia especies grandes, diurnas y visualmente conspicuas, subestimando severamente grupos como insectos, especies nocturnas y organismos crípticos.'
        },
        {
          id: 'tecnicas-b',
          texto: 'Implementar un conjunto diverso de técnicas complementarias (transectos, parcelas, cámaras trampa, grabaciones acústicas, trampas de insectos) adaptadas a diferentes grupos taxonómicos.',
          descripcion: 'Combinación de múltiples técnicas adaptadas a diferentes componentes del ecosistema.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque integral proporciona una caracterización más completa y precisa de la biodiversidad, minimizando los sesgos inherentes a cada técnica individual.'
        },
        {
          id: 'tecnicas-c',
          texto: 'Enfocarse en métodos tecnológicamente avanzados como ADN ambiental y drones, priorizando innovación sobre métodos tradicionales.',
          descripcion: 'Priorización de técnicas novedosas y tecnológicamente avanzadas.',
          sesgosRelacionados: ['sesgo-novedad', 'sesgo-tecnologico'],
          esOptima: false,
          consecuencias: 'Aunque estas técnicas son valiosas, priorizarlas sobre métodos probados puede introducir sesgos metodológicos nuevos y poco comprendidos, además de problemas de comparabilidad con estudios previos.'
        }
      ]
    },
    {
      id: 'interpretacion-datos',
      titulo: 'Interpretación de Datos',
      descripcion: 'Tras el trabajo de campo, tienes datos heterogéneos con algunas limitaciones. ¿Cómo los interpretarás para formular recomendaciones de conservación?',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'interpretacion-a',
          texto: 'Destacar principalmente los hallazgos más impactantes y las especies amenazadas encontradas, enfatizando la necesidad urgente de protección.',
          descripcion: 'Interpretación que prioriza hallazgos impactantes y narrativas de crisis.',
          sesgosRelacionados: ['sesgo-alarmismo', 'sesgo-impacto'],
          esOptima: false,
          consecuencias: 'Aunque puede generar atención, esta interpretación selectiva distorsiona el panorama ecológico completo, potencialmente llevando a decisiones de conservación desequilibradas basadas en factores emotivos más que científicos.'
        },
        {
          id: 'interpretacion-b',
          texto: 'Presentar un análisis equilibrado de los patrones de biodiversidad encontrados, reconociendo explícitamente las limitaciones metodológicas y temporales del estudio y la incertidumbre asociada.',
          descripcion: 'Análisis integral con reconocimiento explícito de limitaciones e incertidumbres.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Esta interpretación honesta y científicamente rigurosa proporciona la base más sólida para decisiones de conservación informadas, reconociendo tanto los hallazgos como sus limitaciones.'
        },
        {
          id: 'interpretacion-c',
          texto: 'Comparar tus hallazgos principalmente con áreas altamente degradadas para enfatizar el valor de conservación relativo, maximizando la percepción de importancia del sitio.',
          descripcion: 'Comparación selectiva con referentes que maximizan la percepción de valor.',
          sesgosRelacionados: ['sesgo-comparativo', 'cherry-picking'],
          esOptima: false,
          consecuencias: 'Esta estrategia manipulativa distorsiona el contexto ecológico regional, potencialmente sobreestimando el valor relativo del área y llevando a prioridades de conservación subóptimas.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu estudio ecológico.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para diseñar estudios ecológicos más robustos y menos sesgados.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-muestreo-conveniencia',
    'sesgo-temporal',
    'sesgo-deteccion',
    'sesgo-taxonomico'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},
{
  id: 'ecologia-especies-indicadoras',
  titulo: 'Selección e Interpretación de Especies Indicadoras',
  descripcion: 'Aprende a seleccionar especies indicadoras adecuadas para monitoreo ambiental y a interpretar sus cambios poblacionales evitando sesgos de simplificación y causalidad.',
  contexto: 'Eres un ecólogo responsable de diseñar un programa de biomonitoreo para evaluar el impacto de actividades humanas en un ecosistema. Tu tarea es seleccionar e interpretar especies indicadoras que proporcionen información fiable sobre la salud ecosistémica.',
  area: 'ecologia',
  nivel: 'intermedio',
  duracionEstimada: 30,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Programa',
      descripcion: 'Estás diseñando un programa de monitoreo para evaluar los impactos ecológicos de la expansión urbana y agrícola en un humedal de importancia internacional. El objetivo es proporcionar datos científicamente sólidos que orienten políticas de gestión y conservación en los próximos 10 años.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- El humedal alberga especies carismáticas como aves migratorias, pero también innumerables invertebrados, microorganismos y plantas menos visibles.\n- El programa debe ser implementable con recursos limitados y producir resultados interpretables por gestores con formación científica variable.\n- Existe presión política por obtener resultados claros y accionables rápidamente.\n- Los cambios en el ecosistema pueden tener múltiples causas, incluyendo actividades humanas locales, cambios climáticos regionales y dinámicas ecológicas internas.'
    },
    {
      id: 'seleccion-indicadores',
      titulo: 'Selección de Especies Indicadoras',
      descripcion: 'Debes decidir qué especies o grupos taxonómicos utilizarás como principales indicadores en el programa de biomonitoreo.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'indicadores-a',
          texto: 'Enfocarte principalmente en especies carismáticas y visualmente atractivas como aves acuáticas y mamíferos, que son más fáciles de monitorear y generan mayor interés público.',
          descripcion: 'Selección basada en carisma, visibilidad y facilidad de monitoreo.',
          sesgosRelacionados: ['sesgo-carisma', 'sesgo-taxonomico'],
          esOptima: false,
          consecuencias: 'Este enfoque introduce un fuerte sesgo taxonómico, ignorando componentes ecosistémicos fundamentales y potencialmente menos resilientes, como invertebrados o microorganismos, que pueden ser mejores indicadores de ciertos impactos.'
        },
        {
          id: 'indicadores-b',
          texto: 'Seleccionar un conjunto diverso de organismos de diferentes niveles tróficos y grupos funcionales, priorizando su sensibilidad documentada a perturbaciones específicas y su rol ecológico.',
          descripcion: 'Selección basada en criterios ecológicos, funcionales y de sensibilidad específica.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque proporciona una imagen más completa y precisa del funcionamiento ecosistémico, capturando diferentes aspectos de la salud del humedal y permitiendo detectar impactos a múltiples niveles.'
        },
        {
          id: 'indicadores-c',
          texto: 'Centrarte exclusivamente en especies legalmente protegidas o en peligro de extinción, independientemente de su idoneidad como indicadores ecológicos.',
          descripcion: 'Selección basada exclusivamente en estatus legal de protección.',
          sesgosRelacionados: ['sesgo-normativo', 'sesgo-amenaza'],
          esOptima: false,
          consecuencias: 'Este enfoque confunde objetivos de conservación específicos con monitoreo ecosistémico, potencialmente fallando en detectar degradación de procesos ecológicos fundamentales que no afectan inmediatamente a especies protegidas.'
        }
      ]
    },
    {
      id: 'diseno-monitoreo',
      titulo: 'Diseño del Programa de Monitoreo',
      descripcion: 'Debes establecer cómo estructurarás temporalmente el programa de monitoreo.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'monitoreo-a',
          texto: 'Establecer un programa intensivo pero de corto plazo (1-2 años) para obtener resultados rápidos que puedan informar decisiones urgentes.',
          descripcion: 'Programa intensivo de corto plazo orientado a resultados rápidos.',
          sesgosRelacionados: ['sesgo-temporal', 'sesgo-inmediatez'],
          esOptima: false,
          consecuencias: 'Este enfoque no podrá distinguir entre fluctuaciones naturales y tendencias significativas, ni detectar impactos acumulativos o retardados, proporcionando una visión potencialmente engañosa de la dinámica ecosistémica.'
        },
        {
          id: 'monitoreo-b',
          texto: 'Diseñar un programa a largo plazo (5+ años) con muestreos regulares y protocolos consistentes, incluyendo datos de línea base y sitios de control, complementado con análisis preliminares para informar decisiones inmediatas.',
          descripcion: 'Programa a largo plazo con consistencia metodológica, controles y análisis parciales.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este diseño equilibra la necesidad de datos longitudinales robustos con la provisión de información preliminar útil, generando tanto comprensión científica sólida como herramientas para gestión adaptativa.'
        },
        {
          id: 'monitoreo-c',
          texto: 'Implementar un programa flexible que pueda modificar significativamente sus protocolos y especies objetivo según los resultados iniciales y las prioridades cambiantes de los gestores.',
          descripcion: 'Programa altamente adaptativo con cambios metodológicos frecuentes.',
          sesgosRelacionados: ['sesgo-inconsistencia', 'sesgo-oportunismo'],
          esOptima: false,
          consecuencias: 'La inconsistencia metodológica comprometerá severamente la comparabilidad temporal de los datos, haciendo imposible distinguir cambios reales del ecosistema de artefactos metodológicos.'
        }
      ]
    },
    {
      id: 'analisis-datos',
      titulo: 'Análisis de Datos',
      descripcion: 'Has comenzado a recibir datos del programa. ¿Cómo analizarás e interpretarás los cambios observados en las especies indicadoras?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'analisis-a',
          texto: 'Interpretar directamente cualquier disminución en las poblaciones de especies indicadoras como evidencia definitiva de degradación ecosistémica causada por actividades humanas locales.',
          descripcion: 'Interpretación simplista que asume causalidad directa.',
          sesgosRelacionados: ['correlacion-causalidad', 'sesgo-simplificacion'],
          esOptima: false,
          consecuencias: 'Esta interpretación supersimplificada ignora la complejidad de las dinámicas ecológicas, las fluctuaciones naturales y la multiplicidad de factores que pueden afectar las poblaciones, llevando potencialmente a conclusiones y acciones de gestión erróneas.'
        },
        {
          id: 'analisis-b',
          texto: 'Analizar las tendencias en especies indicadoras considerando múltiples hipótesis causales, controlando factores confusores, y triangulando entre diferentes indicadores y mediciones físico-químicas complementarias.',
          descripcion: 'Análisis multifactorial con controles, múltiples indicadores y consideración de hipótesis alternativas.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque riguroso y científicamente sólido proporciona una comprensión más precisa de los cambios ecosistémicos y sus causas probables, permitiendo intervenciones de gestión mejor dirigidas y fundamentadas.'
        },
        {
          id: 'analisis-c',
          texto: 'Concentrarte en detectar y reportar principalmente las tendencias estadísticamente significativas que muestren cambios dramáticos, minimizando la atención a indicadores que muestran estabilidad o cambios sutiles.',
          descripcion: 'Enfoque selectivo en tendencias estadísticamente significativas y cambios dramáticos.',
          sesgosRelacionados: ['sesgo-significatividad', 'sesgo-dramatismo'],
          esOptima: false,
          consecuencias: 'Este análisis sesgado sobreestima la importancia de cambios bruscos mientras potencialmente ignora deterioros graduales pero significativos, creando una visión distorsionada de la dinámica ecosistémica.'
        }
      ]
    },
    {
      id: 'comunicacion-resultados',
      titulo: 'Comunicación de Resultados',
      descripcion: 'Debes decidir cómo comunicarás los resultados del programa de biomonitoreo a gestores y tomadores de decisiones.',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'comunicacion-a',
          texto: 'Presentar los resultados de forma simplificada con conclusiones categóricas y recomendaciones directivas, evitando discusiones sobre incertidumbre o complejidad que podrían confundir a los gestores.',
          descripcion: 'Comunicación simplificada con conclusiones categóricas y omisión de incertidumbres.',
          sesgosRelacionados: ['sesgo-certeza', 'sesgo-simplificacion'],
          esOptima: false,
          consecuencias: 'Esta comunicación engañosamente simplista puede llevar a decisiones de gestión inapropiadas basadas en una confianza injustificada, ocultando la complejidad inherente y la incertidumbre real de los procesos ecológicos.'
        },
        {
          id: 'comunicacion-b',
          texto: 'Comunicar tanto los patrones observados como sus posibles interpretaciones, niveles de confianza y limitaciones, utilizando visualizaciones claras y lenguaje accesible que facilite la comprensión sin sacrificar precisión.',
          descripcion: 'Comunicación balanceada que presenta resultados, interpretaciones alternativas e incertidumbres de forma accesible.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque transparente permite decisiones de gestión informadas por la mejor evidencia disponible, reconociendo apropiadamente los límites del conocimiento actual y facilitando una gestión adaptativa basada en ciencia rigurosa.'
        },
        {
          id: 'comunicacion-c',
          texto: 'Enfatizar principalmente aquellos resultados que confirmen preocupaciones existentes y apoyen acciones de protección, minimizando hallazgos ambiguos o que podrían ser interpretados como indicativos de impactos menores.',
          descripcion: 'Comunicación selectiva que prioriza resultados alineados con objetivos conservacionistas.',
          sesgosRelacionados: ['sesgo-confirmacion', 'sesgo-precaucion'],
          esOptima: false,
          consecuencias: 'Este enfoque erosiona la integridad científica del programa y puede llevar a pérdida de credibilidad a largo plazo, además de potencialmente desviar recursos de problemas reales hacia preocupaciones exageradas.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu programa de biomonitoreo.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para programas de biomonitoreo más objetivos y científicamente robustos.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-carisma',
    'sesgo-temporal',
    'correlacion-causalidad',
    'sesgo-confirmacion'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},

// SESGOS EN ECONOMÍA COMPORTAMENTAL
{
  id: 'economia-preferencias-reveladas',
  titulo: 'Sesgos en Estudios de Preferencias Reveladas',
  descripcion: 'Aprende a identificar y mitigar sesgos en el diseño e interpretación de estudios sobre preferencias de consumidores y toma de decisiones económicas.',
  contexto: 'Como economista comportamental, debes diseñar un estudio para entender las preferencias de los consumidores hacia productos sostenibles. Tus decisiones metodológicas determinarán la validez de tus conclusiones y recomendaciones para políticas públicas y estrategias empresariales.',
  area: 'economia',
  nivel: 'intermedio',
  duracionEstimada: 35,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Estudio',
      descripcion: 'Trabajas para un instituto de investigación económica y te han encargado diseñar un estudio sobre la disposición de los consumidores a pagar por productos sostenibles. Los resultados informarán tanto políticas públicas para promover el consumo sostenible como estrategias empresariales para productos ecológicos.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- Existe un debate sobre el "gap verde": la diferencia entre las actitudes expresadas hacia productos sostenibles y el comportamiento real de compra.\n- Los métodos disponibles incluyen encuestas de preferencias declaradas, experimentos de elección, análisis de datos de compra reales y experimentos de campo.\n- Existe presión por presentar resultados accionables para tomadores de decisiones.\n- Tu instituto tiene una posición neutral sobre políticas ambientales, pero algunos financiadores tienen intereses definidos en el tema.'
    },
    {
      id: 'metodologia-estudio',
      titulo: 'Metodología del Estudio',
      descripcion: 'Debes decidir qué metodología utilizarás para evaluar las preferencias de los consumidores hacia productos sostenibles.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'metodologia-a',
          texto: 'Realizar únicamente encuestas de auto-reporte sobre intenciones y disposición a pagar por productos sostenibles, por ser el método más rápido y económico.',
          descripcion: 'Enfoque basado exclusivamente en preferencias declaradas mediante encuestas.',
          sesgosRelacionados: ['sesgo-deseabilidad-social', 'brecha-intencion-accion'],
          esOptima: false,
          consecuencias: 'Este método sobreestimará significativamente la disposición real a pagar por sostenibilidad debido al sesgo de deseabilidad social, ignorando la brecha sistemática entre intención declarada y comportamiento real.'
        },
        {
          id: 'metodologia-b',
          texto: 'Implementar una metodología mixta que combine encuestas, experimentos de elección controlados y análisis de datos reales de compra para triangular entre preferencias declaradas y reveladas.',
          descripcion: 'Enfoque multimétodo que triangula entre preferencias declaradas y reveladas.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque complementario mitiga las debilidades inherentes a cada método individual, proporcionando una imagen más precisa y matizada de las preferencias reales de los consumidores y los factores que influyen en sus decisiones.'
        },
        {
          id: 'metodologia-c',
          texto: 'Enfocarse exclusivamente en datos observacionales de compras reales, asumiendo que revelan las verdaderas preferencias sin los sesgos de los métodos declarativos.',
          descripcion: 'Enfoque puramente observacional basado en comportamiento de compra real.',
          sesgosRelacionados: ['sesgo-variables-omitidas', 'falacia-revelacion'],
          esOptima: false,
          consecuencias: 'Este enfoque ignora los numerosos factores contextuales que limitan las opciones disponibles (disponibilidad, precio, conocimiento), interpretando incorrectamente restricciones como preferencias y perdiendo información sobre motivaciones y barreras.'
        }
      ]
    },
    {
      id: 'diseno-experimento',
      titulo: 'Diseño del Componente Experimental',
      descripcion: 'Para la parte experimental del estudio, debes decidir cómo estructurar las opciones que se presentarán a los participantes.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'experimento-a',
          texto: 'Enfatizar fuertemente los beneficios ambientales de las opciones sostenibles, utilizando etiquetado distintivo y lenguaje emotivo para maximizar su atractivo.',
          descripcion: 'Presentación que enfatiza beneficios ambientales con señalización prominente.',
          sesgosRelacionados: ['sesgo-enmarcado', 'efecto-demanda'],
          esOptima: false,
          consecuencias: 'Este diseño introduce un fuerte sesgo de enmarcado y efectos de demanda experimental, donde los participantes responden a las señales sobre lo que se considera "correcto" más que revelar sus preferencias genuinas.'
        },
        {
          id: 'experimento-b',
          texto: 'Diseñar escenarios balanceados con variación sistemática de atributos (precio, funcionalidad, sostenibilidad) y minimizar señales sobre el foco del estudio, controlando por efectos de orden y enmarcado.',
          descripcion: 'Diseño balanceado con controles metodológicos para minimizar sesgos de enmarcado y demanda.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este diseño riguroso permite identificar el valor real que los consumidores asignan a la sostenibilidad en relación con otros atributos, minimizando la influencia del contexto experimental en las respuestas.'
        },
        {
          id: 'experimento-c',
          texto: 'Crear un conjunto de opciones donde las alternativas sostenibles sean siempre superiores en múltiples dimensiones (calidad, durabilidad, diseño) además de sostenibilidad.',
          descripcion: 'Opciones donde sostenibilidad está confundida con otros atributos deseables.',
          sesgosRelacionados: ['sesgo-confusión-variables', 'halo-verde'],
          esOptima: false,
          consecuencias: 'Este diseño confunde la valoración de sostenibilidad con otros atributos deseables, haciendo imposible determinar el valor específico asignado a las características ecológicas versus otros beneficios correlacionados.'
        }
      ]
    },
    {
      id: 'seleccion-muestra',
      titulo: 'Selección de la Muestra',
      descripcion: 'Debes decidir cómo seleccionarás a los participantes para el estudio.',
      tipo: 'analisis',
      opciones: [
        {
          id: 'muestra-a',
          texto: 'Reclutar participantes principalmente a través de grupos y foros relacionados con sostenibilidad y consumo consciente para garantizar suficiente interés en el tema.',
          descripcion: 'Muestreo selectivo centrado en grupos con interés previo en sostenibilidad.',
          sesgosRelacionados: ['sesgo-seleccion', 'sesgo-autoselecion'],
          esOptima: false,
          consecuencias: 'Esta muestra sesgada sobreestimará dramáticamente el interés general en sostenibilidad al incluir desproporcionadamente a personas ya comprometidas con el tema, generando conclusiones no generalizables a la población general.'
        },
        {
          id: 'muestra-b',
          texto: 'Implementar un muestreo estratificado representativo de la población objetivo, incluyendo participantes con diversos perfiles sociodemográficos y actitudes previas hacia temas ambientales.',
          descripcion: 'Muestreo representativo y estratificado de la población objetivo.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque proporciona una visión precisa y generalizable de las preferencias en la población completa, permitiendo además analizar cómo varían las actitudes entre diferentes segmentos demográficos y actitudinales.'
        },
        {
          id: 'muestra-c',
          texto: 'Centrarte en una muestra de conveniencia de estudiantes universitarios por su accesibilidad y bajo costo, asumiendo que sus preferencias son representativas o anticipan tendencias futuras.',
          descripcion: 'Muestreo de conveniencia limitado a estudiantes universitarios.',
          sesgosRelacionados: ['sesgo-muestreo-conveniencia', 'sesgo-weirdo'],
          esOptima: false,
          consecuencias: 'Este enfoque produce resultados con validez externa severamente limitada, basados en un subgrupo no representativo con características socioeconómicas, educativas y actitudinales distintivas que difieren sistemáticamente de la población general.'
        }
      ]
    },
    {
      id: 'interpretacion-resultados',
      titulo: 'Interpretación de Resultados',
      descripcion: 'Los resultados preliminares muestran un patrón complejo: alta valoración declarada de sostenibilidad pero menor disposición a pagar en experimentos controlados, con variación significativa entre diferentes segmentos de consumidores. ¿Cómo interpretarás estos hallazgos?',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'interpretacion-a',
          texto: 'Enfocarte principalmente en los resultados que muestran mayor valoración de sostenibilidad, sugiriendo que existe un mercado sustancial para productos ecológicos si se comunican adecuadamente sus beneficios.',
          descripcion: 'Interpretación selectiva que enfatiza señales positivas hacia sostenibilidad.',
          sesgosRelacionados: ['sesgo-optimismo', 'cherry-picking'],
          esOptima: false,
          consecuencias: 'Esta interpretación sesgada distorsiona la realidad compleja revelada por los datos, potencialmente llevando a empresas y políticas públicas a sobreestimar la disposición real a pagar por sostenibilidad y tomar decisiones subóptimas.'
        },
        {
          id: 'interpretacion-b',
          texto: 'Presentar una interpretación matizada que reconozca tanto la valoración de sostenibilidad como las barreras prácticas (precio, conveniencia) que limitan su expresión en comportamiento real, segmentando resultados por grupos relevantes.',
          descripcion: 'Interpretación integral que reconoce complejidades, barreras y heterogeneidad.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Esta interpretación honesta y matizada proporciona una base sólida para decisiones empresariales y políticas realistas, reconociendo tanto oportunidades como obstáculos en la promoción de consumo sostenible.'
        },
        {
          id: 'interpretacion-c',
          texto: 'Concluir que los consumidores generalmente no están dispuestos a pagar más por sostenibilidad y que las afirmaciones contrarias reflejan principalmente deseabilidad social, recomendando centrarse en otros atributos de producto.',
          descripcion: 'Interpretación reduccionista que minimiza la valoración de sostenibilidad.',
          sesgosRelacionados: ['sesgo-simplificacion', 'sesgo-cinismo'],
          esOptima: false,
          consecuencias: 'Esta interpretación excesivamente negativa simplifica un panorama complejo, ignorando segmentos con genuina disposición a pagar por sostenibilidad y desestimando oportunidades reales para diseñar productos y políticas que superen las barreras identificadas.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu estudio de preferencias de consumo.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para diseñar estudios de economía comportamental más rigurosos y menos sesgados.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-deseabilidad-social',
    'brecha-intencion-accion',
    'sesgo-enmarcado',
    'sesgo-seleccion'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},
{
  id: 'economia-incentivos-experimentos',
  titulo: 'Incentivos y Sesgos en Experimentos Económicos',
  descripcion: 'Aprende a diseñar experimentos económicos con incentivos adecuados y a evitar sesgos en la interpretación de comportamientos observados en entornos experimentales.',
  contexto: 'Como economista experimental, debes diseñar un estudio para analizar comportamientos cooperativos y de confianza en interacciones económicas. Tus decisiones sobre diseño, incentivos e interpretación determinarán la validez interna y externa de tus hallazgos.',
  area: 'economia',
  nivel: 'intermedio',
  duracionEstimada: 30,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Experimento',
      descripcion: 'Estás diseñando un experimento para estudiar cooperación y confianza en contextos económicos, evaluando cómo diferentes instituciones y mecanismos de incentivos influyen en el comportamiento prosocial. Los resultados podrían informar tanto teoría económica como diseño de políticas y sistemas organizacionales.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- La economía conductual ha demostrado que los modelos estándar de racionalidad pura no predicen adecuadamente el comportamiento en muchos contextos.\n- Existe debate sobre la validez externa de los experimentos de laboratorio y cómo se trasladan sus hallazgos a contextos reales.\n- Los experimentos pueden utilizar diferentes tipos de incentivos y grados de contextualización/abstracción.\n- La audiencia académica espera rigor metodológico, mientras que los responsables de política buscan implicaciones prácticas claras.'
    },
    {
      id: 'estructura-incentivos',
      titulo: 'Estructura de Incentivos',
      descripcion: 'Debes decidir cómo estructurarás los incentivos monetarios en tu experimento de cooperación y confianza.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'incentivos-a',
          texto: 'Utilizar incentivos hipotéticos o simbólicos (puntos sin valor monetario o sumas muy pequeñas) para maximizar el número de participantes y observaciones dentro del presupuesto.',
          descripcion: 'Incentivos hipotéticos o simbólicos sin consecuencias económicas reales.',
          sesgosRelacionados: ['sesgo-hipotetico', 'sesgo-costos-bajos'],
          esOptima: false,
          consecuencias: 'Este diseño compromete severamente la validez externa, ya que el comportamiento con dinero hipotético o simbólico difiere sistemáticamente del comportamiento con incentivos reales, especialmente en contextos de decisiones económicas.'
        },
        {
          id: 'incentivos-b',
          texto: 'Implementar incentivos monetarios reales proporcionales a las decisiones tomadas, con pagos significativos pero realistas que reflejen las consecuencias de las acciones dentro del experimento.',
          descripcion: 'Incentivos monetarios reales proporcionales a las decisiones experimentales.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este diseño incrementa la validez del experimento al crear consecuencias económicas reales para las decisiones, simulando adecuadamente los incentivos presentes en contextos naturales mientras mantiene control experimental.'
        },
        {
          id: 'incentivos-c',
          texto: 'Utilizar incentivos extremadamente altos que eclipsen cualquier otra consideración, asumiendo que esto revelará las "verdaderas" preferencias económicas sin influencias de normas sociales.',
          descripcion: 'Incentivos monetarios excesivamente altos que dominan otras motivaciones.',
          sesgosRelacionados: ['sesgo-incentivos-excesivos', 'sesgo-monetizacion'],
          esOptima: false,
          consecuencias: 'Este enfoque distorsiona el balance natural entre motivaciones monetarias y sociales presente en contextos reales, creando una situación artificial donde consideraciones económicas dominan completamente las decisiones, limitando la generalización a entornos normales.'
        }
      ]
    },
    {
      id: 'contextualizacion',
      titulo: 'Contextualización del Experimento',
      descripcion: 'Debes decidir cómo presentarás y enmarcarás el experimento a los participantes.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'contexto-a',
          texto: 'Utilizar un marco completamente abstracto y neutral, evitando cualquier lenguaje que sugiera un contexto específico o expectativas normativas.',
          descripcion: 'Enmarcado completamente abstracto y descontextualizado.',
          sesgosRelacionados: ['sesgo-abstracto', 'falacia-neutralidad'],
          esOptima: false,
          consecuencias: 'Este enfoque excesivamente abstracto crea una situación artificial que los participantes igualmente interpretan desde sus marcos cognitivos, pero de forma inconsistente y no controlada, reduciendo tanto validez interna como externa.'
        },
        {
          id: 'contexto-b',
          texto: 'Proporcionar un contexto realista pero controlado, con instrucciones claras que eviten terminología cargada, comparando sistemáticamente diferentes enmarcados para evaluar efectos de contexto.',
          descripcion: 'Contextualización equilibrada con variación sistemática y control de factores de enmarcado.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este diseño reconoce que los contextos importan en las decisiones económicas reales, permitiendo comprender cómo diferentes enmarcados afectan el comportamiento mientras mantiene validez experimental y comparabilidad.'
        },
        {
          id: 'contexto-c',
          texto: 'Enmarcar el experimento explícitamente como un estudio sobre "comportamiento ético y moral", señalando claramente qué comportamientos serían considerados más prosociales o morales.',
          descripcion: 'Enmarcado explícito con señalización clara de expectativas morales/éticas.',
          sesgosRelacionados: ['sesgo-deseabilidad-social', 'efecto-demanda'],
          esOptima: false,
          consecuencias: 'Este enmarcado crea fuertes efectos de demanda experimental y activa artificialmente consideraciones de deseabilidad social, distorsionando el comportamiento hacia lo que los participantes creen que el experimentador considera "correcto".'
        }
      ]
    },
    {
      id: 'seleccion-participantes',
      titulo: 'Selección de Participantes',
      descripcion: 'Debes decidir a quién reclutarás como participantes para tu experimento económico.',
      tipo: 'analisis',
      opciones: [
        {
          id: 'participantes-a',
          texto: 'Reclutar exclusivamente estudiantes universitarios por su disponibilidad y bajo costo, asumiendo que sus comportamientos son representativos del comportamiento económico humano general.',
          descripcion: 'Muestra homogénea de estudiantes universitarios exclusivamente.',
          sesgosRelacionados: ['sesgo-weirdo', 'sesgo-homogeneidad'],
          esOptima: false,
          consecuencias: 'Esta población presenta sistemáticamente características atípicas (más jóvenes, educados, occidentales, ricos y de entornos democráticos) que limitan severamente la generalización de resultados a contextos y poblaciones más diversas.'
        },
        {
          id: 'participantes-b',
          texto: 'Reclutar una muestra más diversa que incluya diferentes grupos demográficos, niveles educativos y antecedentes, complementando con replicaciones en diferentes contextos culturales cuando sea posible.',
          descripcion: 'Muestra diversificada con variación demográfica y replicaciones cross-culturales.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque aumenta significativamente la validez externa y permite identificar tanto patrones universales como variaciones importantes en el comportamiento económico entre diferentes poblaciones y contextos.'
        },
        {
          id: 'participantes-c',
          texto: 'Reclutar específicamente personas de ámbitos profesionales competitivos (como finanzas o negocios) para observar comportamiento económico "real" no influido por consideraciones sociales.',
          descripcion: 'Selección sesgada hacia profesionales de entornos altamente competitivos.',
          sesgosRelacionados: ['sesgo-seleccion', 'sesgo-representatividad'],
          esOptima: false,
          consecuencias: 'Esta muestra introduce un fuerte sesgo de selección hacia individuos con preferencias y comportamientos específicos, produciendo resultados que exageran ciertos aspectos del comportamiento económico mientras subestiman otros igualmente relevantes.'
        }
      ]
    },
    {
      id: 'interpretacion-resultados',
      titulo: 'Interpretación de Resultados',
      descripcion: 'Los resultados muestran niveles de cooperación y confianza mayores a los predichos por teoría económica estándar, pero con variación significativa según el contexto y los incentivos. ¿Cómo interpretarás estos hallazgos?',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'interpretacion-a',
          texto: 'Interpretar los comportamientos cooperativos como anomalías o errores de los participantes que no comprenden completamente la estructura de incentivos que debería llevarlos a comportamientos puramente egoístas.',
          descripcion: 'Interpretación que considera comportamiento prosocial como error o anomalía.',
          sesgosRelacionados: ['sesgo-teoria-estandar', 'sesgo-racionalidad-estrecha'],
          esOptima: false,
          consecuencias: 'Esta interpretación fuerza artificialmente observaciones empíricas a un marco teórico inadecuado, catalogando como "irracionales" comportamientos sistemáticos que reflejan genuinas preferencias sociales y reciprocidad.'
        },
        {
          id: 'interpretacion-b',
          texto: 'Reconocer la evidencia de preferencias sociales genuinas que conviven con motivaciones egoístas, analizando cómo diferentes condiciones institucionales e incentivos activan distintos tipos de comportamiento.',
          descripcion: 'Interpretación equilibrada que reconoce múltiples motivaciones y efectos contextuales.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Esta interpretación captura adecuadamente la complejidad del comportamiento económico humano, reconociendo tanto elementos egoístas como prosociales y cómo diferentes estructuras institucionales pueden fortalecer o debilitar comportamientos cooperativos.'
        },
        {
          id: 'interpretacion-c',
          texto: 'Concluir que los resultados demuestran que la teoría económica estándar está fundamentalmente equivocada y que los humanos son inherentemente altruistas cuando se eliminan las presiones del mercado.',
          descripcion: 'Sobre-interpretación ideológica que rechaza completamente modelos económicos estándar.',
          sesgosRelacionados: ['sesgo-sobregeneralizacion', 'sesgo-idealista'],
          esOptima: false,
          consecuencias: 'Esta interpretación sobregeneraliza resultados específicos, ignorando la complejidad del comportamiento observado y la persistencia de motivaciones egoístas junto con las prosociales en diferentes proporciones según el contexto.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu experimento económico.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para diseñar experimentos económicos más válidos y menos sesgados.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-hipotetico',
    'sesgo-abstracto',
    'sesgo-weirdo',
    'sesgo-teoria-estandar'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},

// ANÁLISIS ESTADÍSTICO AVANZADO
{
  id: 'estadistica-p-hacking',
  titulo: 'Evitando el P-Hacking en Análisis Estadístico',
  descripcion: 'Aprende a identificar y evitar prácticas de p-hacking y otros métodos que inflan artificialmente la significancia estadística de resultados científicos.',
  contexto: 'Como investigador cuantitativo, debes analizar un conjunto de datos complejo para identificar factores que influyen en un resultado de interés. Tus decisiones sobre métodos de análisis y reporte de resultados determinarán la validez e integridad de tus conclusiones.',
  area: 'estadistica',
  nivel: 'avanzado',
  duracionEstimada: 40,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Análisis',
      descripcion: 'Lideras un proyecto de investigación para identificar predictores de éxito académico en estudiantes universitarios. Tienes una base de datos con cientos de variables potencialmente relevantes (desde factores socioeconómicos hasta hábitos de estudio y características psicológicas) y una muestra de 300 estudiantes. Debes analizar estos datos para producir un artículo científico sobre determinantes del rendimiento académico.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- El entorno académico valora resultados "positivos" (estadísticamente significativos) por encima de resultados nulos.\n- Tu universidad está interesada en publicaciones de alto impacto para mejorar su ranking.\n- Tienes cierta libertad para decidir qué análisis realizar y qué resultados reportar en el artículo final.\n- Existen numerosas posibilidades analíticas legítimas para abordar la pregunta de investigación (diferentes variables dependientes, controles, transformaciones, submuestras, etc.).'
    },
    {
      id: 'plan-analisis',
      titulo: 'Plan de Análisis',
      descripcion: 'Antes de explorar los datos, debes decidir cómo estructurarás tu análisis estadístico.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'plan-a',
          texto: 'Explorar flexiblemente los datos probando múltiples combinaciones de variables y análisis, reportando finalmente aquellos que produzcan resultados estadísticamente significativos.',
          descripcion: 'Exploración flexible sin plan preestablecido, reportando selectivamente resultados significativos.',
          sesgosRelacionados: ['p-hacking', 'sesgo-publicacion'],
          esOptima: false,
          consecuencias: 'Este enfoque exploratorio sin controles incrementa dramáticamente la probabilidad de falsos positivos a través de múltiples pruebas no corregidas, llevando a hallazgos que probablemente no sean replicables.'
        },
        {
          id: 'plan-b',
          texto: 'Desarrollar un plan de análisis predeterminado con hipótesis específicas, estableciendo claramente variables, covariables y métodos de análisis, distinguiendo explícitamente entre análisis confirmatorios y exploratorios.',
          descripcion: 'Plan de análisis predeterminado con distinciones claras entre pruebas confirmatorias y exploratorias.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque riguroso controla adecuadamente la tasa de falsos positivos, incrementando la credibilidad y replicabilidad de los hallazgos mientras permitiendo exploraciones transparentes y claramente identificadas.'
        },
        {
          id: 'plan-c',
          texto: 'Preregistrar públicamente un análisis principal deliberadamente simple, pero mantener flexibilidad para realizar y reportar selectivamente análisis adicionales no preregistrados.',
          descripcion: 'Preregistro limitado combinado con análisis no preregistrados selectivamente reportados.',
          sesgosRelacionados: ['p-hacking', 'harking'],
          esOptima: false,
          consecuencias: 'Esta estrategia da apariencia de rigor mientras mantiene prácticas problemáticas, utilizando el preregistro como "cobertura" para análisis adicionales sujetos a los mismos problemas de pruebas múltiples y reporte selectivo.'
        }
      ]
    },
    {
      id: 'tratamiento-outliers',
      titulo: 'Tratamiento de Valores Atípicos (Outliers)',
      descripcion: 'Al explorar los datos, identificas varios valores potencialmente atípicos (outliers). ¿Cómo los manejarás?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'outliers-a',
          texto: 'Excluir selectivamente casos que debilitan las relaciones de interés, probando diferentes criterios de exclusión hasta obtener resultados estadísticamente significativos.',
          descripcion: 'Exclusión selectiva y flexible de outliers para obtener resultados deseados.',
          sesgosRelacionados: ['cherry-picking', 'p-hacking'],
          esOptima: false,
          consecuencias: 'Esta manipulación de datos dirigida por resultados incrementa artificialmente la probabilidad de falsos positivos y produce hallazgos no replicables, constituyendo una forma grave de p-hacking.'
        },
        {
          id: 'outliers-b',
          texto: 'Establecer criterios objetivos y transparentes para identificar y tratar outliers antes de analizar los efectos de interés, documentando todos los casos excluidos y realizando análisis de sensibilidad.',
          descripcion: 'Criterios predefinidos, transparentes y objetivos con análisis de sensibilidad.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque preserva la integridad del análisis al manejar outliers de manera imparcial y transparente, permitiendo evaluar la robustez de los resultados frente a diferentes tratamientos de datos extremos.'
        },
        {
          id: 'outliers-c',
          texto: 'Mantener todos los datos originales sin exclusiones para evitar cualquier subjetividad, independientemente del impacto que puedan tener valores extremos potencialmente erróneos.',
          descripcion: 'Inclusión indiscriminada de todos los datos sin evaluación crítica.',
          sesgosRelacionados: ['sesgo-conservadurismo', 'falacia-naturalista'],
          esOptima: false,
          consecuencias: 'Este enfoque ignora que algunos outliers pueden representar errores de medición o casos genuinamente no representativos, permitiendo que unos pocos puntos de datos potencialmente problemáticos distorsionen los resultados globales.'
        }
      ]
    },
    {
      id: 'pruebas-multiples',
      titulo: 'Manejo de Pruebas Múltiples',
      descripcion: 'Estás examinando múltiples variables predictoras potenciales. ¿Cómo manejarás el problema de las pruebas múltiples?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'multiples-a',
          texto: 'Realizar numerosas pruebas estadísticas sin ajustes, reportando como significativos todos los resultados con p < 0.05, independientemente del número total de pruebas realizadas.',
          descripcion: 'Múltiples pruebas sin ajustes ni control de tasa de error.',
          sesgosRelacionados: ['p-hacking', 'ignorancia-pruebas-multiples'],
          esOptima: false,
          consecuencias: 'Este enfoque garantiza un número elevado de falsos positivos debido a la inflación de error tipo I, produciendo "hallazgos" que realmente son artefactos estadísticos resultantes del azar y múltiples pruebas.'
        },
        {
          id: 'multiples-b',
          texto: 'Implementar métodos apropiados para controlar la tasa de falsos positivos (como correcciones FDR o FWER), distinguiendo claramente entre análisis confirmatorios (con hipótesis preestablecidas) y exploratorios.',
          descripcion: 'Control adecuado de tasa de error con distinciones claras entre análisis confirmatorios y exploratorios.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque mantiene un control apropiado sobre el error tipo I mientras permite descubrimientos genuinos, aumentando la credibilidad y replicabilidad de los resultados mediante un balance entre rigor y poder estadístico.'
        },
        {
          id: 'multiples-c',
          texto: 'Reportar selectivamente solo un subconjunto de las pruebas realizadas, presentándolas como análisis principal sin mencionar las numerosas otras pruebas exploradas.',
          descripcion: 'Reporte selectivo que oculta el problema de pruebas múltiples.',
          sesgosRelacionados: ['p-hacking', 'reporte-selectivo'],
          esOptima: false,
          consecuencias: 'Esta falta de transparencia oculta el verdadero número de pruebas realizadas, impidiendo a lectores y revisores evaluar adecuadamente la probabilidad de falsos positivos y sobreestimando artificialmente la evidencia.'
        }
      ]
    },
    {
      id: 'interpretacion-resultados',
      titulo: 'Interpretación y Reporte de Resultados',
      descripcion: 'Has completado los análisis y debes decidir cómo interpretar y reportar tus hallazgos.',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'reporte-a',
          texto: 'Presentar los análisis como confirmatorios y predefinidos aunque realmente fueron resultado de exploración extensiva, narrando una historia coherente como si las hipótesis hubieran precedido a los análisis.',
          descripcion: 'HARKing (Hypothesis After Results Known) presentado como análisis confirmatorio.',
          sesgosRelacionados: ['harking', 'sesgo-narrativo'],
          esOptima: false,
          consecuencias: 'Esta presentación engañosa de análisis exploratorios como confirmatorios infla artificialmente la credibilidad de los hallazgos y oculta el verdadero proceso de generación de hipótesis, creando una falsa impresión de predicción ex-ante.'
        },
        {
          id: 'reporte-b',
          texto: 'Reportar con transparencia tanto análisis confirmatorios como exploratorios, distinguiéndolos claramente, incluyendo resultados nulos junto con significativos y documentando el proceso analítico completo.',
          descripcion: 'Reporte transparente con distinciones claras y documentación completa del proceso analítico.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Esta transparencia total proporciona una visión precisa y honesta del proceso científico, permitiendo a lectores evaluar adecuadamente la fortaleza de la evidencia y facilitando la replicación y extensión del trabajo.'
        },
        {
          id: 'reporte-c',
          texto: 'Enfocarte exclusivamente en los resultados estadísticamente significativos, explorando y desarrollando explicaciones post-hoc para estos patrones mientras minimizas la atención a resultados no significativos.',
          descripcion: 'Foco selectivo en resultados significativos con teorización post-hoc.',
          sesgosRelacionados: ['sesgo-publicacion', 'sesgo-confirmacion'],
          esOptima: false,
          consecuencias: 'Este reporte sesgado distorsiona el panorama evidencial completo, ignorando información crucial contenida en resultados nulos y creando una percepción engañosa de la fortaleza y consistencia de los efectos encontrados.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu análisis estadístico.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para conducir análisis estadísticos rigurosos y evitar el p-hacking.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'p-hacking',
    'harking',
    'sesgo-publicacion',
    'reporte-selectivo'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},
{
  id: 'estadistica-seleccion-variables',
  titulo: 'Sesgos en la Selección de Variables',
  descripcion: 'Aprende a evitar sesgos en la selección de variables para modelado estadístico, asegurando que tus modelos reflejen relaciones causales genuinas en lugar de asociaciones espurias.',
  contexto: 'Como analista de datos, debes construir un modelo estadístico para identificar factores que influyen en un resultado importante. Tus decisiones sobre qué variables incluir u omitir determinarán la validez de tus conclusiones y recomendaciones.',
  area: 'estadistica',
  nivel: 'avanzado',
  duracionEstimada: 35,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Análisis',
      descripcion: 'Trabajas para una agencia gubernamental analizando factores que influyen en los resultados educativos a nivel de escuelas secundarias. Tienes un conjunto de datos con múltiples variables potencialmente relevantes a nivel de estudiante, escuela, vecindario y distrito. Tu análisis informará decisiones sobre asignación de recursos y prioridades de política educativa.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- Las relaciones entre variables educativas, socioeconómicas e institucionales son complejas y multidireccionales.\n- Hay presión para producir recomendaciones claras y accionables para los responsables políticos.\n- Algunas variables son más fáciles de medir o modificar mediante políticas públicas que otras.\n- Existen debates ideológicos sobre los determinantes del éxito educativo que podrían influir en la interpretación de resultados.'
    },
    {
      id: 'seleccion-inicial',
      titulo: 'Selección Inicial de Variables',
      descripcion: 'Debes decidir qué enfoque utilizarás para la selección inicial de variables en tu modelo.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'seleccion-a',
          texto: 'Incluir el mayor número posible de variables disponibles para maximizar la varianza explicada y el poder predictivo del modelo.',
          descripcion: 'Enfoque de "cocina del fregadero" (kitchen sink) con inclusión masiva de variables.',
          sesgosRelacionados: ['sesgo-sobreajuste', 'falacia-dimensionalidad'],
          esOptima: false,
          consecuencias: 'Este enfoque conduce a modelos sobreajustados que capturan ruido aleatorio junto con señales reales, reduciendo la generalización a nuevos datos y produciendo estimaciones inestables de los efectos de las variables.'
        },
        {
          id: 'seleccion-b',
          texto: 'Basar la selección de variables en un marco conceptual causal explícito, utilizando conocimiento teórico y empírico previo para identificar predictores, confusores y mediadores potenciales.',
          descripcion: 'Selección guiada por teoría causal y conocimiento del dominio.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque fundamentado teóricamente mejora la interpretabilidad y validez causal del modelo, identificando adecuadamente los factores relevantes y sus interrelaciones mientras evita confusiones entre correlación y causalidad.'
        },
        {
          id: 'seleccion-c',
          texto: 'Seleccionar variables basándose principalmente en su significancia estadística en análisis univariantes previos, incluyendo solo aquellas que muestren correlaciones significativas con el resultado.',
          descripcion: 'Selección basada exclusivamente en asociaciones estadísticas univariantes.',
          sesgosRelacionados: ['sesgo-univariante', 'sesgo-significatividad'],
          esOptima: false,
          consecuencias: 'Este enfoque ignora la estructura causal multivariada, potencialmente excluyendo variables importantes que solo muestran efectos en presencia de otras o incluyendo variables que son meras proxies de causas reales no medidas.'
        }
      ]
    },
    {
      id: 'variables-confusoras',
      titulo: 'Manejo de Variables Confusoras',
      descripcion: 'Has identificado que el nivel socioeconómico (NSE) de las familias está fuertemente correlacionado tanto con recursos escolares como con resultados educativos. ¿Cómo manejarás esta potencial confusión?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'confusoras-a',
          texto: 'Excluir el NSE del análisis por ser una variable "sensible" y difícil de modificar mediante políticas, centrándote solo en factores escolares más directamente intervenibles.',
          descripcion: 'Omisión de una importante variable confusora por razones pragmáticas o políticas.',
          sesgosRelacionados: ['sesgo-variables-omitidas', 'sesgo-intervenible'],
          esOptima: false,
          consecuencias: 'Esta omisión crítica produce estimaciones sesgadas de los efectos de recursos escolares, atribuyéndoles incorrectamente impactos que en realidad se deben a factores socioeconómicos familiares, potencialmente llevando a recomendaciones de política ineficaces.'
        },
        {
          id: 'confusoras-b',
          texto: 'Incluir el NSE como control en todos los modelos, estratificar análisis por niveles socioeconómicos, y examinar explícitamente interacciones entre NSE y factores escolares.',
          descripcion: 'Control apropiado por confusión con análisis de heterogeneidad e interacciones.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este manejo adecuado de la confusión permite estimar efectos más precisos de intervenciones escolares, identificando cómo varían según contexto socioeconómico y proporcionando una base más sólida para políticas diferenciadas.'
        },
        {
          id: 'confusoras-c',
          texto: 'Crear un índice compuesto que combine variables socioeconómicas con factores escolares para simplificar el análisis y evitar multicolinealidad.',
          descripcion: 'Combinación de variables confusoras con predictores de interés en índices compuestos.',
          sesgosRelacionados: ['sesgo-agregacion', 'sesgo-oscurecimiento'],
          esOptima: false,
          consecuencias: 'Esta agregación inapropiada oscurece las relaciones causales específicas entre factores, haciendo imposible distinguir efectos de variables socioeconómicas de aquellos relacionados con políticas escolares, complicando la interpretación y aplicación de resultados.'
        }
      ]
    },
    {
      id: 'mediacion-variables',
      titulo: 'Variables Mediadoras',
      descripcion: 'Has observado que ciertas características de los profesores (formación, experiencia) parecen mediar la relación entre recursos escolares y resultados. ¿Cómo abordarás estas variables mediadoras?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'mediacion-a',
          texto: 'Incluir únicamente las variables de recursos escolares o las características de profesores (pero no ambas) para evitar "controlar demasiado" y mantener el modelo simple.',
          descripcion: 'Exclusión de mediadores para evitar "sobrecontrol".',
          sesgosRelacionados: ['sesgo-camino-causal', 'sesgo-parsimonia-excesiva'],
          esOptima: false,
          consecuencias: 'Este enfoque impide comprender los mecanismos causales a través de los cuales los recursos afectan los resultados, reduciendo la utilidad práctica del análisis al ocultar potenciales puntos de intervención en la cadena causal.'
        },
        {
          id: 'mediacion-b',
          texto: 'Modelar explícitamente las relaciones de mediación, estimando tanto efectos directos como indirectos de recursos escolares, y clarificando los mecanismos causales en juego.',
          descripcion: 'Análisis explícito de mediación que clarifica mecanismos causales.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque revela los procesos a través de los cuales los recursos se traducen (o no) en mejores resultados, proporcionando una comprensión más profunda y accionable de los factores que influyen en el éxito educativo.'
        },
        {
          id: 'mediacion-c',
          texto: 'Tratar todas las variables como independientes entre sí, incluyéndolas simultáneamente en un único modelo sin considerar sus interrelaciones causales.',
          descripcion: 'Ignorar estructura causal entre predictores, tratándolos como independientes.',
          sesgosRelacionados: ['sesgo-independencia', 'sesgo-modelo-unico'],
          esOptima: false,
          consecuencias: 'Esta simplificación excesiva distorsiona la interpretación de los coeficientes cuando se incluyen variables en diferentes puntos de la misma cadena causal, llevando a conclusiones erróneas sobre la importancia relativa de diferentes factores.'
        }
      ]
    },
    {
      id: 'interpretacion-resultados',
      titulo: 'Interpretación de Resultados',
      descripcion: 'Tras completar el modelado, debes interpretar los resultados para formular recomendaciones de política. ¿Cómo abordarás esta interpretación?',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'interpretacion-a',
          texto: 'Enfocarte exclusivamente en los coeficientes estadísticamente significativos con los mayores tamaños de efecto, recomendando intervenciones directas sobre estas variables independientemente de su contexto causal.',
          descripcion: 'Interpretación simplista basada únicamente en significancia estadística y tamaño de coeficientes.',
          sesgosRelacionados: ['sesgo-significatividad', 'falacia-intervencionista'],
          esOptima: false,
          consecuencias: 'Esta interpretación simplista puede llevar a intervenciones ineficaces al confundir correlación con causalidad y al no considerar la factibilidad, costo y contexto de las posibles intervenciones en las variables identificadas.'
        },
        {
          id: 'interpretacion-b',
          texto: 'Interpretar los resultados dentro del marco causal establecido, considerando tanto la evidencia estadística como la plausibilidad teórica y práctica de las intervenciones, discutiendo explícitamente limitaciones y supuestos.',
          descripcion: 'Interpretación causal contextualizada con discusión explícita de limitaciones.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque equilibrado proporciona recomendaciones mejor fundamentadas y matizadas, reconociendo apropiadamente tanto la evidencia empírica como las complejidades prácticas de implementar cambios en sistemas educativos.'
        },
        {
          id: 'interpretacion-c',
          texto: 'Seleccionar e interpretar resultados que mejor se alineen con ciertas posiciones políticas o prioridades institucionales preexistentes, enfatizando estos hallazgos en las recomendaciones.',
          descripcion: 'Interpretación selectiva guiada por preferencias políticas o institucionales.',
          sesgosRelacionados: ['sesgo-confirmacion', 'cherry-picking'],
          esOptima: false,
          consecuencias: 'Esta interpretación sesgada subordina la evidencia científica a agendas preexistentes, potencialmente llevando a políticas ineficaces o contraproducentes mientras socava la credibilidad del análisis y la toma de decisiones basada en evidencia.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu modelo estadístico.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para una selección de variables más rigurosa en análisis estadístico.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-variables-omitidas',
    'sesgo-sobreajuste',
    'sesgo-confirmacion',
    'sesgo-camino-causal'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},

// ANÁLISIS ESTADÍSTICO AVANZADO (Escenario adicional)
{
  id: 'estadistica-comparacion-subgrupos',
  titulo: 'Sesgos en la Comparación de Subgrupos',
  descripcion: 'Aprende a realizar e interpretar correctamente análisis de subgrupos y heterogeneidad de efectos, evitando conclusiones erróneas basadas en comparaciones inapropiadas.',
  contexto: 'Como investigador médico, debes analizar los resultados de un ensayo clínico para determinar si un tratamiento tiene efectos diferentes en distintos subgrupos de pacientes. Tus decisiones sobre cómo dividir y comparar estos subgrupos determinarán la validez de tus conclusiones.',
  area: 'estadistica',
  nivel: 'avanzado',
  duracionEstimada: 35,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Estudio',
      descripcion: 'Estás analizando los datos de un ensayo clínico aleatorizado que evaluó la eficacia de un nuevo tratamiento para la hipertensión. Aunque el efecto promedio fue positivo, existe interés en determinar si el tratamiento funciona igualmente bien para todos los pacientes o si hay subgrupos que se benefician más o menos.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- El ensayo incluyó 1200 pacientes con datos completos sobre edad, sexo, raza/etnia, severidad inicial de la hipertensión, y comorbilidades.\n- El resultado principal es la reducción en presión arterial sistólica después de 6 meses.\n- Hay presión para identificar grupos de "respondedores óptimos" para guiar decisiones de prescripción.\n- Las revistas médicas tienden a favorecer hallazgos de efectos específicos de subgrupo por considerarlos más informativos y novedosos.'
    },
    {
      id: 'estrategia-subgrupos',
      titulo: 'Estrategia de Análisis de Subgrupos',
      descripcion: 'Debes decidir cómo abordarás el análisis de efectos en diferentes subgrupos de pacientes.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'subgrupos-a',
          texto: 'Realizar múltiples análisis exploratorios de subgrupos, dividiendo los datos según todas las variables demográficas y clínicas disponibles, reportando todos los resultados estadísticamente significativos.',
          descripcion: 'Análisis exploratorio masivo de subgrupos sin correcciones por pruebas múltiples.',
          sesgosRelacionados: ['sesgo-pruebas-multiples', 'sesgo-dragado-datos'],
          esOptima: false,
          consecuencias: 'Este enfoque produce numerosos falsos positivos debido a pruebas múltiples no corregidas, identificando "efectos específicos" que probablemente sean artefactos estadísticos y no reproducibles en futuros estudios.'
        },
        {
          id: 'subgrupos-b',
          texto: 'Especificar a priori un número limitado de interacciones hipotéticamente plausibles, utilizar términos de interacción en modelos estadísticos formales, y aplicar correcciones apropiadas para pruebas múltiples.',
          descripcion: 'Análisis de subgrupos preplanificado con modelado formal de interacciones y control de error tipo I.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque riguroso reduce el riesgo de falsos positivos mientras mantiene el poder para detectar heterogeneidad de efectos genuina y clínicamente relevante, proporcionando evidencia más fiable para decisiones médicas.'
        },
        {
          id: 'subgrupos-c',
          texto: 'Dividir la muestra en múltiples subgrupos no solapados y realizar análisis separados para cada uno, comparando directamente la significancia estadística entre ellos.',
          descripcion: 'Análisis estratificados separados con comparaciones directas de significancia.',
          sesgosRelacionados: ['sesgo-significatividad', 'falacia-interaccion'],
          esOptima: false,
          consecuencias: 'Esta metodología incorrecta confunde diferencias en tamaño muestral y poder estadístico con verdaderas diferencias en efecto, malinterpretando el que un resultado sea significativo en un grupo pero no en otro como evidencia de interacción.'
        }
      ]
    },
    {
      id: 'tamano-subgrupos',
      titulo: 'Tamaño y Definición de Subgrupos',
      descripcion: 'Tras análisis preliminares, notas variación sustancial en el número de pacientes en diferentes subgrupos. ¿Cómo manejarás esta heterogeneidad?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'tamano-a',
          texto: 'Ajustar los puntos de corte para variables continuas (como edad) o reagrupar categorías para crear subgrupos con tamaños más equilibrados y maximizar la posibilidad de encontrar diferencias significativas.',
          descripcion: 'Ajuste post-hoc de definiciones de subgrupo para maximizar resultados significativos.',
          sesgosRelacionados: ['p-hacking', 'sesgo-punto-corte'],
          esOptima: false,
          consecuencias: 'Esta manipulación de datos guiada por resultados incrementa dramáticamente la tasa de falsos positivos, produciendo "hallazgos" que son principalmente artefactos de decisiones analíticas arbitrarias más que efectos biológicos reales.'
        },
        {
          id: 'tamano-b',
          texto: 'Mantener definiciones de subgrupo clínicamente significativas y preestablecidas, interpretar resultados considerando explícitamente las limitaciones de poder estadístico en grupos pequeños, y utilizar métodos apropiados para grupos desbalanceados.',
          descripcion: 'Uso de definiciones de subgrupo clínicamente relevantes con reconocimiento explícito de limitaciones de poder.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque equilibra rigor metodológico con relevancia clínica, evitando tanto falsas conclusiones por manipulación de datos como sobreinterpretación de resultados de subgrupos con tamaños muestrales limitados.'
        },
        {
          id: 'tamano-c',
          texto: 'Centrarse exclusivamente en los subgrupos más grandes, ignorando categorías minoritarias para maximizar el poder estadístico general del análisis.',
          descripcion: 'Exclusión de subgrupos minoritarios para maximizar poder estadístico.',
          sesgosRelacionados: ['sesgo-exclusion', 'sesgo-representacion'],
          esOptima: false,
          consecuencias: 'Este enfoque introduce un sesgo sistemático contra poblaciones ya subrepresentadas en investigación clínica, perpetuando inequidades en evidencia médica y potencialmente ocultando diferencias de efectos importantes en grupos minoritarios.'
        }
      ]
    },
    {
      id: 'interpretacion-interacciones',
      titulo: 'Interpretación de Interacciones',
      descripcion: 'Has encontrado una posible interacción: el tratamiento parece funcionar mejor en pacientes mayores de 65 años. ¿Cómo interpretarás este hallazgo?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'interaccion-a',
          texto: 'Concluir definitivamente que el tratamiento es más efectivo en pacientes mayores y menos efectivo en jóvenes, recomendando su uso principalmente en población geriátrica.',
          descripcion: 'Sobreinterpretación de una interacción posiblemente espuria como resultado definitivo.',
          sesgosRelacionados: ['sesgo-certeza', 'falacia-interaccion'],
          esOptima: false,
          consecuencias: 'Esta interpretación sobreconfiada de un hallazgo que podría ser espurio puede llevar a recomendaciones clínicas inapropiadas, privando potencialmente a pacientes más jóvenes de un tratamiento beneficioso basándose en evidencia insuficiente.'
        },
        {
          id: 'interaccion-b',
          texto: 'Interpretar la interacción como sugestiva pero tentativa, considerar explicaciones biológicas plausibles, evaluar su robustez frente a diferentes especificaciones, y enfatizar la necesidad de validación externa.',
          descripcion: 'Interpretación cautelosa que enfatiza la naturaleza tentativa del hallazgo y necesidad de validación.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque apropiadamente cauto reconoce las limitaciones inherentes al análisis de subgrupos, proporcionando información potencialmente útil para futuras investigaciones sin sobreestimar la certeza de un hallazgo preliminar.'
        },
        {
          id: 'interaccion-c',
          texto: 'Ignorar este hallazgo por ser probablemente espurio, reportando únicamente los efectos promedio generales del tratamiento sin mencionar posibles interacciones.',
          descripcion: 'Supresión de resultados de interacción por escepticismo excesivo.',
          sesgosRelacionados: ['sesgo-simplificacion', 'sesgo-promedio'],
          esOptima: false,
          consecuencias: 'Este enfoque excesivamente conservador desperdicia información potencialmente valiosa sobre heterogeneidad de efectos, perpetuando un paradigma de "talla única" en medicina que ignora la variabilidad en respuestas al tratamiento entre pacientes.'
        }
      ]
    },
    {
      id: 'reporte-resultados',
      titulo: 'Reporte de Resultados de Subgrupos',
      descripcion: 'Debes decidir cómo reportarás los resultados del análisis de subgrupos en tu artículo científico.',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'reporte-a',
          texto: 'Reportar selectivamente solo los análisis de subgrupos que produjeron resultados estadísticamente significativos, presentándolos como hallazgos principales junto con el efecto promedio.',
          descripcion: 'Reporte selectivo de solo resultados significativos de subgrupos.',
          sesgosRelacionados: ['sesgo-publicacion', 'cherry-picking'],
          esOptima: false,
          consecuencias: 'Este reporte sesgado distorsiona el panorama evidencial completo, inflando artificialmente la aparente consistencia y fiabilidad de las diferencias entre subgrupos y contribuyendo a literatura científica no reproducible.'
        },
        {
          id: 'reporte-b',
          texto: 'Reportar todos los análisis de subgrupos preplanificados con sus especificaciones completas, presentando tanto resultados significativos como no significativos y contextualizándolos adecuadamente dentro de las limitaciones del estudio.',
          descripcion: 'Reporte transparente y completo de todos los análisis preplanificados.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Esta transparencia completa permite a lectores evaluar adecuadamente la evidencia de heterogeneidad de efectos, facilitando meta-análisis futuros y promoviendo una base más sólida para decisiones clínicas individualizadas.'
        },
        {
          id: 'reporte-c',
          texto: 'Reportar exhaustivamente todos los análisis realizados, incluyendo exploraciones post-hoc, pero presentando cada hallazgo significativo como confirmatorio de una hipótesis específica.',
          descripcion: 'Reporte exhaustivo pero presentación engañosa de análisis exploratorios como confirmatorios.',
          sesgosRelacionados: ['harking', 'sesgo-exploratorio'],
          esOptima: false,
          consecuencias: 'Esta presentación engañosa de análisis exploratorios como confirmatorios infla artificialmente la credibilidad de hallazgos potencialmente espurios, creando una falsa impresión de validez que puede llevar a decisiones clínicas inapropiadas.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu análisis de subgrupos.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para conducir análisis de subgrupos más rigurosos y menos sesgados.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-pruebas-multiples',
    'p-hacking',
    'sesgo-significatividad',
    'sesgo-publicacion'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},

// ANÁLISIS DE BIG DATA: Escenario 1
{
  id: 'bigdata-seleccion-algoritmos',
  titulo: 'Sesgos en la Selección de Algoritmos para Big Data',
  descripcion: 'Aprende a seleccionar e implementar algoritmos para análisis de big data evitando sesgos técnicos, interpretativos y éticos.',
  contexto: 'Como científico de datos en una gran organización, debes desarrollar un sistema de aprendizaje automático para procesar y analizar grandes volúmenes de datos. Tus decisiones sobre qué algoritmos implementar y cómo evaluarlos determinarán tanto la validez técnica como el impacto ético de tus resultados.',
  area: 'ciencia de datos',
  nivel: 'avanzado',
  duracionEstimada: 45,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Proyecto',
      descripcion: 'Trabajas para una gran compañía de seguros de salud que quiere desarrollar un sistema de aprendizaje automático para predecir riesgos de salud de los clientes y optimizar la asignación de recursos preventivos. Tienes acceso a un dataset masivo que incluye datos demográficos, historial médico, reclamaciones previas, y algunos indicadores de estilo de vida.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- El sistema debe ser implementable a escala, procesando datos de millones de asegurados.\n- Existen preocupaciones regulatorias y éticas sobre equidad, transparencia y privacidad.\n- Las predicciones influirán en decisiones importantes que afectan el acceso a programas preventivos.\n- Diferentes stakeholders dentro de la organización tienen expectativas y prioridades diferentes sobre el sistema.'
    },
    {
      id: 'seleccion-algoritmo',
      titulo: 'Selección de Algoritmo',
      descripcion: 'Debes decidir qué tipo de algoritmo de aprendizaje automático utilizarás como núcleo del sistema predictivo.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'algoritmo-a',
          texto: 'Implementar el algoritmo más avanzado y complejo disponible (como un deep learning ensemble) para maximizar el poder predictivo y la precisión general.',
          descripcion: 'Priorización de complejidad y poder predictivo bruto sobre otras consideraciones.',
          sesgosRelacionados: ['sesgo-complejidad', 'sesgo-precision'],
          esOptima: false,
          consecuencias: 'Este enfoque produce un sistema tipo "caja negra" con interpretabilidad severamente limitada, dificultando la identificación de sesgos, la evaluación de causalidad, el cumplimiento regulatorio y la confianza de stakeholders y usuarios finales.'
        },
        {
          id: 'algoritmo-b',
          texto: 'Seleccionar algoritmos balanceando poder predictivo con interpretabilidad, transparencia y equidad, potencialmente combinando modelos más simples e interpretables con técnicas avanzadas cuando sea apropiado.',
          descripcion: 'Balance entre poder predictivo, interpretabilidad, transparencia y consideraciones éticas.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque equilibrado permite suficiente poder predictivo mientras facilita la comprensión de las decisiones algorítmicas, la detección de sesgos, y el cumplimiento de requisitos regulatorios y éticos fundamentales en el contexto médico.'
        },
        {
          id: 'algoritmo-c',
          texto: 'Elegir el algoritmo que sea más rápido y eficiente computacionalmente, priorizando la velocidad de implementación y la escalabilidad sobre otras consideraciones.',
          descripcion: 'Priorización de eficiencia computacional y facilidad de implementación.',
          sesgosRelacionados: ['sesgo-eficiencia', 'falacia-accesibilidad'],
          esOptima: false,
          consecuencias: 'Este enfoque cortoplacista puede crear un sistema que escala bien pero hace predicciones subóptimas o inequitativas, sacrificando calidad y consideraciones éticas cruciales por conveniencia técnica inmediata.'
        }
      ]
    },
    {
      id: 'representacion-datos',
      titulo: 'Manejo de Sesgos en los Datos',
      descripcion: 'Una exploración inicial revela que ciertos grupos demográficos están sub-representados en el conjunto de datos históricos. ¿Cómo abordarás este problema?',
      tipo: 'diseno',
      opciones: [
        {
          id: 'datos-a',
          texto: 'Ignorar el problema de representatividad, asumiendo que el algoritmo aprenderá correctamente los patrones subyacentes independientemente de desequilibrios en los datos de entrenamiento.',
          descripcion: 'Ignorar desequilibrios muestrales y sesgos históricos en los datos.',
          sesgosRelacionados: ['sesgo-representatividad', 'falacia-algoritmica'],
          esOptima: false,
          consecuencias: 'Este enfoque perpetúa y potencialmente amplifica sesgos históricos, creando un sistema que hace predicciones sistemáticamente menos precisas o injustas para grupos subrepresentados, reforzando disparidades existentes en atención sanitaria.'
        },
        {
          id: 'datos-b',
          texto: 'Implementar técnicas para mitigar el impacto de datos desequilibrados, como reequilibrado de muestras, ponderación, o restricciones de equidad, evaluando explícitamente el desempeño en diferentes subgrupos.',
          descripcion: 'Corrección activa de desequilibrios con evaluación sistemática por subgrupos.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque proactivo ayuda a garantizar que el sistema funcione equitativamente para todos los grupos, previniendo la amplificación algorítmica de disparidades históricas mientras mantiene un rendimiento general adecuado.'
        },
        {
          id: 'datos-c',
          texto: 'Excluir variables sensibles como raza o género para crear un algoritmo "ciego" a estas características, asumiendo que esto eliminará automáticamente cualquier sesgo discriminatorio.',
          descripcion: 'Eliminación de variables sensibles sin abordar sesgos estructurales subyacentes.',
          sesgosRelacionados: ['falacia-ceguera', 'sesgo-proxy'],
          esOptima: false,
          consecuencias: 'Esta solución superficial no elimina efectivamente los sesgos, ya que otras variables pueden actuar como proxies para características protegidas, mientras que dificulta la detección y mitigación de disparidades al eliminar datos necesarios para evaluarlas.'
        }
      ]
    },
    {
      id: 'metricas-evaluacion',
      titulo: 'Selección de Métricas de Evaluación',
      descripcion: 'Debes decidir qué métricas utilizarás para evaluar y optimizar el rendimiento del sistema predictivo.',
      tipo: 'analisis',
      opciones: [
        {
          id: 'metricas-a',
          texto: 'Enfocarte exclusivamente en métricas agregadas de precisión global (como AUC o accuracy total) para maximizar el desempeño predictivo general del sistema.',
          descripcion: 'Foco exclusivo en métricas agregadas de precisión general.',
          sesgosRelacionados: ['sesgo-agregacion', 'falacia-promedio'],
          esOptima: false,
          consecuencias: 'Este enfoque oculta disparidades potencialmente graves en rendimiento entre diferentes grupos, permitiendo que un buen desempeño en grupos mayoritarios enmascare predicciones deficientes o sesgadas para poblaciones minoritarias o vulnerables.'
        },
        {
          id: 'metricas-b',
          texto: 'Implementar un conjunto diverso de métricas que evalúen tanto precisión general como equidad, desagregando resultados por grupos relevantes y considerando diferentes tipos de errores y sus impactos.',
          descripcion: 'Evaluación multidimensional que incluye precisión, equidad y análisis desagregado.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque integral permite identificar y abordar disparidades en el desempeño del algoritmo, asegurando que funcione adecuadamente para todos los grupos mientras considera el impacto diferencial de distintos tipos de errores.'
        },
        {
          id: 'metricas-c',
          texto: 'Centrarte principalmente en optimizar métricas de negocio directas (como reducción de costos o eficiencia operativa) por encima de consideraciones de precisión técnica o equidad.',
          descripcion: 'Priorización de métricas de negocio sobre precisión y equidad.',
          sesgosRelacionados: ['sesgo-economico', 'falacia-optimizacion'],
          esOptima: false,
          consecuencias: 'Este enfoque miope puede generar sistemas que optimizan objetivos financieros a corto plazo mientras producen resultados injustos o dañinos para ciertos grupos, creando riesgos legales, éticos y reputacionales significativos a largo plazo.'
        }
      ]
    },
    {
      id: 'interpretabilidad',
      titulo: 'Abordaje de la Interpretabilidad',
      descripcion: 'El sistema será utilizado para tomar decisiones importantes sobre asignación de recursos preventivos. ¿Cómo abordarás la necesidad de interpretabilidad?',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'interpretabilidad-a',
          texto: 'Tratar el modelo como una "caja negra", confiando en su precisión general sin preocuparte por explicar predicciones individuales o mecanismos internos del algoritmo.',
          descripcion: 'Enfoque de "caja negra" sin provisión de interpretabilidad.',
          sesgosRelacionados: ['sesgo-automation', 'falacia-precision'],
          esOptima: false,
          consecuencias: 'Este enfoque impide la supervisión significativa, dificulta la detección de errores algorítmicos o sesgos, reduce la aceptación por stakeholders, y probablemente incumple requisitos regulatorios para decisiones importantes en contextos médicos.'
        },
        {
          id: 'interpretabilidad-b',
          texto: 'Implementar técnicas de interpretabilidad apropiadas al contexto (como SHAP values, modelos sustitutos interpretables, o explicaciones contrastivas), adaptadas a las necesidades de diferentes usuarios y casos de uso.',
          descripcion: 'Implementación de métodos robustos de interpretabilidad adaptados a diferentes contextos y usuarios.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque facilita la supervisión humana significativa, permite a los usuarios comprender y potencialmente cuestionar decisiones algorítmicas, y proporciona transparencia necesaria para aplicaciones en ámbitos sensibles como salud.'
        },
        {
          id: 'interpretabilidad-c',
          texto: 'Proporcionar explicaciones simplificadas que destacan solo factores intuitivamente comprensibles, ocultando la complejidad real del modelo para facilitar la aceptación por usuarios no técnicos.',
          descripcion: 'Explicaciones selectivas y simplificadas que ocultan complejidad real.',
          sesgosRelacionados: ['sesgo-simplificacion', 'falacia-transparencia'],
          esOptima: false,
          consecuencias: 'Estas explicaciones engañosamente simplificadas crean una falsa sensación de comprensión, potencialmente ocultando sesgos o debilidades reales del modelo mientras reducen la capacidad de usuarios para cuestionar apropiadamente sus decisiones.'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu abordaje de algoritmos para big data.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para seleccionar e implementar algoritmos para big data de manera más equilibrada y ética.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'sesgo-complejidad',
    'sesgo-representatividad',
    'sesgo-agregacion',
    'sesgo-automation'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
},

// ANÁLISIS DE BIG DATA: Escenario 2
{
  id: 'bigdata-causalidad-correlacion',
  titulo: 'Causalidad vs. Correlación en Big Data',
  descripcion: 'Aprende a distinguir entre correlaciones espurias y relaciones causales genuinas en análisis de grandes volúmenes de datos, evitando conclusiones erróneas basadas puramente en asociaciones estadísticas.',
  contexto: 'Como analista de datos, debes extraer insights accionables de un masivo conjunto de datos correlacionados. Tus decisiones sobre cómo interpretar patrones estadísticos y qué conclusiones derivar determinarán la validez y utilidad de tus recomendaciones.',
  area: 'ciencia de datos',
  nivel: 'avanzado',
  duracionEstimada: 40,
  pasos: [
    {
      id: 'introduccion',
      titulo: 'Contexto del Análisis',
      descripcion: 'Trabajas para una empresa de comercio electrónico analizando un dataset masivo que contiene comportamiento de usuarios, historial de compras, interacciones con la plataforma, y múltiples variables contextuales. Tu objetivo es identificar factores que influyen en la conversión de ventas para informar estrategias de optimización.',
      tipo: 'introduccion',
      contenidoExtra: '### Información adicional\n\n- El dataset incluye miles de variables potencialmente relevantes y millones de observaciones.\n- Hay presión desde dirección para identificar "causas" accionables que puedan mejorar las tasas de conversión.\n- La empresa puede realizar experimentos controlados, pero son costosos y requieren justificación sólida.\n- Las decisiones basadas en tus análisis podrían implicar inversiones significativas en cambios de producto o estrategias de marketing.'
    },
    {
      id: 'enfoque-inicial',
      titulo: 'Enfoque Inicial',
      descripcion: 'Debes decidir cómo abordarás inicialmente el análisis para identificar factores relacionados con la conversión de ventas.',
      tipo: 'diseno',
      opciones: [
        {
          id: 'enfoque-a',
          texto: 'Realizar un análisis puramente correlacional masivo, identificando todas las variables que muestran asociaciones estadísticas fuertes con conversión, e interpretarlas directamente como factores causales.',
          descripcion: 'Análisis correlacional masivo con inferencia causal directa desde asociaciones estadísticas.',
          sesgosRelacionados: ['correlacion-causalidad', 'falacia-dragado'],
          esOptima: false,
          consecuencias: 'Este enfoque produce numerosas conclusiones espurias interpretando como causales simples asociaciones estadísticas que pueden deberse a variables confusoras, causalidad inversa o coincidencias en datos masivos, llevando a recomendaciones ineficaces o contraproducentes.'
        },
        {
          id: 'enfoque-b',
          texto: 'Combinar análisis exploratorio inicial con razonamiento causal explícito, utilizando conocimiento del dominio, gráficos causales, y cuando sea posible, datos experimentales o cuasi-experimentales.',
          descripcion: 'Combinación de exploración de datos con modelado causal explícito y métodos cuasi-experimentales.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque equilibrado permite descubrir patrones potencialmente valiosos mientras aplica rigor metodológico para distinguir correlaciones espurias de relaciones causales genuinas, proporcionando insights más confiables para decisiones de negocio.'
        },
        {
          id: 'enfoque-c',
          texto: 'Confiar exclusivamente en métodos de machine learning avanzados para identificar patrones predictivos, asumiendo que alta precisión predictiva implica comprensión causal.',
          descripcion: 'Confianza exclusiva en precisión predictiva como proxy de comprensión causal.',
          sesgosRelacionados: ['falacia-predictiva', 'sesgo-modelo'],
          esOptima: false,
          consecuencias: 'Este enfoque confunde predicción con causalidad, potencialmente identificando características que predicen bien pero no tienen relación causal con el resultado, o que funcionan como predictores solo bajo condiciones específicas que podrían cambiar.'
        }
      ]
    },
    {
      id: 'variables-confusoras',
      titulo: 'Manejo de Variables Confusoras',
      descripcion: 'Has identificado una fuerte correlación entre el tiempo que los usuarios pasan en cierta sección del sitio y la probabilidad de compra. ¿Cómo interpretarás y analizarás esta correlación?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'confusoras-a',
          texto: 'Concluir directamente que aumentar el tiempo que los usuarios pasan en esta sección causará mayores tasas de conversión, recomendando rediseñar el sitio para maximizar el tiempo en ella.',
          descripcion: 'Inferencia causal directa sin consideración de confusión o causalidad inversa.',
          sesgosRelacionados: ['correlacion-causalidad', 'causalidad-inversa'],
          esOptima: false,
          consecuencias: 'Esta interpretación simplista ignora explicaciones alternativas fundamentales, como que usuarios ya interesados en comprar pasan más tiempo investigando productos, o que un tercer factor (como interés en la categoría) causa tanto mayor tiempo en sitio como mayor propensión a comprar.'
        },
        {
          id: 'confusoras-b',
          texto: 'Analizar detalladamente la relación considerando múltiples explicaciones causales, controlando por variables confusoras, examinando secuencias temporales, y proponiendo experimentos A/B para validar cualquier hipótesis causal.',
          descripcion: 'Análisis causal riguroso con consideración de confusores y validación experimental.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque metódico distingue apropiadamente entre correlación y causalidad, reduciendo el riesgo de intervenciones inefectivas basadas en relaciones espurias y proporcionando una base sólida para decisiones de diseño o experimentación posterior.'
        },
        {
          id: 'confusoras-c',
          texto: 'Controlar estadísticamente por todas las variables disponibles en un modelo masivamente multivariado, asumiendo que esto elimina automáticamente la confusión y permite interpretación causal directa.',
          descripcion: 'Control estadístico masivo sin evaluación crítica de estructura causal.',
          sesgosRelacionados: ['sesgo-control-excesivo', 'falacia-control'],
          esOptima: false,
          consecuencias: 'Este enfoque puede introducir sesgos por control de mediadores o colisores, distorsionando las relaciones causales reales, mientras crea una falsa sensación de rigor que obscurece los supuestos causales implícitos en el análisis.'
        }
      ]
    },
    {
      id: 'patrones-subgrupos',
      titulo: 'Análisis de Patrones en Subgrupos',
      descripcion: 'Al profundizar el análisis, encuentras que algunas correlaciones varían significativamente entre diferentes segmentos de usuarios. ¿Cómo manejarás esta heterogeneidad?',
      tipo: 'analisis',
      opciones: [
        {
          id: 'subgrupos-a',
          texto: 'Realizar múltiples análisis de subgrupos sin correcciones por pruebas múltiples, reportando todos los patrones estadísticamente significativos encontrados como efectos causales específicos de subgrupo.',
          descripcion: 'Minería intensiva de subgrupos sin correcciones por pruebas múltiples.',
          sesgosRelacionados: ['p-hacking', 'falacia-subgrupos'],
          esOptima: false,
          consecuencias: 'Este enfoque genera numerosos falsos positivos debido a pruebas múltiples no corregidas, identificando patrones que probablemente sean artefactos estadísticos pero presentándolos como descubrimientos causales reales específicos a ciertos grupos.'
        },
        {
          id: 'subgrupos-b',
          texto: 'Aplicar un enfoque estructurado para explorar heterogeneidad de efectos, utilizando interacciones formalmente modeladas, aplicando correcciones apropiadas, y distinguiendo claramente hipótesis confirmatorias de exploratorias.',
          descripcion: 'Exploración sistemática de heterogeneidad con controles metodológicos apropiados.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque disciplinado permite descubrir variaciones genuinas en relaciones entre diferentes grupos de usuarios, manteniendo control sobre falsos positivos y proporcionando insights más fiables para estrategias de personalización o segmentación.'
        },
        {
          id: 'subgrupos-c',
          texto: 'Ignorar la heterogeneidad observada, enfocándote exclusivamente en efectos promedio para simplificar el análisis y las recomendaciones resultantes.',
          descripcion: 'Ignorar heterogeneidad para mantener simplicidad de análisis y recomendaciones.',
          sesgosRelacionados: ['sesgo-promedio', 'sesgo-simplificacion'],
          esOptima: false,
          consecuencias: 'Este enfoque excesivamente simplificador desperdicia información valiosa sobre cómo diferentes segmentos responden de manera distinta, potencialmente llevando a intervenciones ineficaces para importantes subgrupos de usuarios cuyo comportamiento difiere del promedio global.'
        }
      ]
    },
    {
      id: 'recomendaciones-acciones',
      titulo: 'Formulación de Recomendaciones',
      descripcion: 'Basándote en tu análisis, debes proporcionar recomendaciones accionables a la dirección. ¿Cómo formularás estas recomendaciones?',
      tipo: 'interpretacion',
      opciones: [
        {
          id: 'recomendaciones-a',
          texto: 'Presentar todas las correlaciones fuertes como factores causales comprobados, recomendando intervenciones directas e inmediatas para modificar estas variables.',
          descripcion: 'Presentación de correlaciones como causalidad comprobada con recomendaciones de intervención inmediata.',
          sesgosRelacionados: ['falacia-accionabilidad', 'sesgo-certeza'],
          esOptima: false,
          consecuencias: 'Estas recomendaciones prematuras basadas en evidencia insuficiente pueden llevar a inversiones costosas en intervenciones ineficaces o incluso contraproducentes, desperdiciando recursos y potencialmente dañando la experiencia del usuario o métricas de negocio.'
        },
        {
          id: 'recomendaciones-b',
          texto: 'Distinguir claramente entre correlaciones observacionales y evidencia causal, priorizando recomendaciones basadas en relaciones mejor establecidas mientras sugiriendo pruebas experimentales para validar hipótesis más inciertas.',
          descripcion: 'Diferenciación explícita entre evidencia correlacional y causal con recomendaciones graduadas por certeza.',
          sesgosRelacionados: [],
          esOptima: true,
          consecuencias: 'Este enfoque equilibrado proporciona accionabilidad inmediata donde la evidencia es sólida, mientras gestiona apropiadamente la incertidumbre para hipótesis más tentativas, optimizando recursos a través de un despliegue gradual guiado por evidencia cada vez más sólida.'
        },
        {
          id: 'recomendaciones-c',
          texto: 'Centrarte en recomendar únicamente cambios respaldados por teorías existentes o prácticas establecidas en la industria, independientemente de lo que muestren tus datos específicos.',
          descripcion: 'Recomendaciones basadas principalmente en teoría establecida o prácticas de industria ignorando evidencia específica.',
          sesgosRelacionados: ['sesgo-autoridad', 'sesgo-conservadurismo'],
          esOptima: false,
          consecuencias: 'Este enfoque excesivamente conservador desperdicia el potencial del análisis de big data para descubrir patrones nuevos o específicos al contexto, limitando la innovación y perpetuando prácticas subóptimas bajo la apariencia de seguir "mejores prácticas".'
        }
      ]
    },
    {
      id: 'retroalimentacion',
      titulo: 'Retroalimentación',
      descripcion: 'Análisis de tus decisiones y cómo los posibles sesgos pueden haber influido en tu interpretación de patrones en big data.',
      tipo: 'retroalimentacion',
      contenidoExtra: 'La retroalimentación detallada se generará basada en las opciones seleccionadas.'
    },
    {
      id: 'conclusion',
      titulo: 'Conclusión y Estrategias',
      descripcion: 'Resumen de aprendizajes y estrategias para distinguir mejor entre correlación y causalidad en análisis de big data.',
      tipo: 'conclusion',
      contenidoExtra: 'Las estrategias recomendadas se adaptarán según las respuestas proporcionadas.'
    }
  ],
  sesgosAbordados: [
    'correlacion-causalidad',
    'falacia-predictiva',
    'p-hacking',
    'sesgo-promedio'
  ],
  imagenPortada: '/images/escenarios/default.jpg'
}
];

export const getEscenarioPorId = (id: string): Escenario | undefined => {
  return escenarios.find(escenario => escenario.id === id);
};

export const getEscenariosPorCampana = (campanaId: string): Escenario[] => {
  const campana = getCampanaPorId(campanaId);
  if (!campana) return [];
  
  return campana.escenarios
    .map(id => getEscenarioPorId(id))
    .filter((escenario): escenario is Escenario => escenario !== undefined);
};

export const getEscenariosPorAreaYNivel = (area: Escenario['area'], nivel: Escenario['nivel']): Escenario[] => {
  return escenarios.filter(escenario => escenario.area === area && escenario.nivel === nivel);
};

export default escenarios;