import type { LearnMeta } from "@/content/learn";

const meta: LearnMeta = {
  ui: {
    hubKicker: "Aprende",
    hubTitle: "Las métricas de salud, explicadas",
    hubIntro:
      "Guías claras y en lenguaje sencillo sobre las cifras que produce tu cuerpo: qué significan, qué las modifica y cuándo un cambio merece atención. Cada afirmación está respaldada con fuentes; cada guía enlaza a una página de referencia más detallada en la documentación.",
    allGuides: "Todas las guías",
    minRead: (n) => `${n} min de lectura`,
    goDeeperLabel: "Profundizar",
    goDeeperBody: (title) =>
      `Para la referencia completa —rangos de las guías clínicas, detalle de la medición y la lista íntegra de fuentes— lee la página de referencia sobre ${title.toLowerCase()} en la documentación.`,
    goDeeperCta: "Abrir la página de referencia",
    footerDisclaimer:
      "Contenido educativo: información general, no consejo médico.",
    languageLabel: "Idioma",
    docs: "Documentación",
    home: "Inicio",
  },
  categories: {
    foundations: "Fundamentos",
    heart: "Corazón y circulación",
    sleep: "Sueño y recuperación",
    metabolic: "Salud metabólica",
    fitness: "Forma física y longevidad",
    body: "Cuerpo y composición",
    mind: "Mente y ciclo",
  },
  articles: {
    "understanding-your-health-metrics": {
      title: "Tus métricas de salud, conectadas",
      dek: "Por qué un solo número rara vez cuenta toda la historia, y cómo encajan entre sí las señales que produce tu cuerpo.",
      description:
        "Una guía en lenguaje sencillo sobre las métricas de salud cotidianas que vale la pena seguir —frecuencia cardíaca, sueño, presión arterial, glucosa y más— y cómo se conectan en una sola imagen.",
    },
    "resting-heart-rate": {
      title: "Qué te dice tu frecuencia cardíaca en reposo",
      dek: "El número más simple de tu muñeca es también uno de los más honestos. Así se interpreta.",
      description:
        "Qué es la frecuencia cardíaca en reposo, qué se considera normal, qué la sube o la baja, y cuándo un cambio sostenido merece la atención de un profesional.",
    },
    "heart-rate-variability": {
      title: "La variabilidad de la frecuencia cardíaca, sin exageraciones",
      dek: "La VFC es potente y muy malinterpretada. Una mirada realista a lo que significan los números latido a latido.",
      description:
        "La variabilidad de la frecuencia cardíaca explicada: qué mide la VFC, por qué varía tanto entre personas, cómo leer tu propia tendencia y los límites de una sola lectura.",
    },
    "reading-your-blood-pressure": {
      title: "Cómo leer tus cifras de presión arterial",
      dek: "Dos números, muchos matices. Qué significan de verdad la sistólica y la diastólica para tu salud.",
      description:
        "Cómo leer la presión arterial: qué significan los dos números, las categorías de las guías clínicas, por qué importa la técnica de medición y cuándo las lecturas requieren seguimiento médico.",
    },
    "your-ecg-recordings": {
      title: "Cómo leer tus registros de ECG",
      dek: "Un ECG de un ponible es un trazado eléctrico real, no un diagnóstico. Qué te dicen de verdad la tira y el resultado de una palabra.",
      description:
        "Qué registra un ECG de una derivación, qué significa el resultado del propio dispositivo, por qué HealthLog lo muestra sobre una cuadrícula familiar sin interpretarlo, y cuándo un registro merece la mirada de un clínico.",
    },
    "resting-heart-rate-through-the-day": {
      title: "Tu frecuencia cardíaca en reposo a lo largo del día",
      dek: "Un número por la mañana te dice hasta qué punto puede bajar tu corazón al ralentí. La curva de todo el día te dice cómo pasa su día.",
      description:
        "Qué muestra una curva de frecuencia cardíaca intradía, por qué una subida sostenida en reposo puede ser una señal temprana mientras que un solo pico es ruido, y cómo leer tu suelo en reposo como una tendencia de forma física a lo largo de semanas.",
    },
    "heart-rate-recovery": {
      title:
        "Recuperación de la frecuencia cardíaca: lo rápido que baja tu corazón",
      dek: "La mayoría de las cifras de forma física premian lo fuerte que te exiges. Esta premia lo rápido que puedes parar.",
      description:
        "Qué mide la recuperación de la frecuencia cardíaca, por qué la rápida caída del primer minuto refleja el tono vagal, qué significan los umbrales clínicos, y cómo leer tu propia recuperación posterior al ejercicio como una tendencia de forma física.",
    },
    "wrist-temperature-at-night": {
      title: "La temperatura de la muñeca como señal nocturna",
      dek: "La temperatura nocturna de un dispositivo ponible no es una lectura de termómetro. Es una desviación de tu propia línea base, y ahí está lo útil.",
      description:
        "Qué puede y qué no puede decirte una tendencia nocturna de la temperatura de la piel de la muñeca: desviaciones relativas frente a tu línea base, señales de fase del ciclo y de enfermedad temprana, y por qué nunca puede confirmar una fiebre.",
    },
    "sleep-consistency": {
      title: "Por qué la regularidad del sueño supera a su duración",
      dek: "Ocho horas a horas aleatorias no es lo mismo que siete con un horario estable. El momento es la señal.",
      description:
        "El sueño, explicado: las fases, cuánto necesitas de verdad, por qué un horario regular importa tanto como las horas totales, y qué puede revelar tu tendencia de sueño.",
    },
    "respiratory-rate": {
      title: "Frecuencia respiratoria: el signo vital más silencioso",
      dek: "Rara vez piensas en tu ritmo respiratorio, que es justo por lo que un cambio en él resulta tan revelador.",
      description:
        "Qué es la frecuencia respiratoria, el rango normal en reposo, por qué la línea base nocturna es tan estable y por qué un aumento sostenido puede ser una señal temprana que vale la pena notar.",
    },
    "blood-oxygen-spo2": {
      title: "Qué te dice el oxígeno en sangre (y qué no)",
      dek: "La SpO₂ tranquiliza cuando está alta y es fácil de malinterpretar cuando baja. Una guía serena de este número.",
      description:
        "La saturación de oxígeno en sangre (SpO₂) explicada: el rango normal, por qué las lecturas en la muñeca varían, las limitaciones de precisión conocidas y cuándo una lectura baja merece atención.",
    },
    "body-temperature-baseline": {
      title: "Tu temperatura de referencia como señal",
      dek: "No hay una sola temperatura «normal»: está la tuya. La desviación respecto a ella es la parte útil.",
      description:
        "Por qué la temperatura corporal varía a lo largo del día y entre personas, cómo una línea base personal supera a los 37 °C del manual, y qué puede indicar una desviación sostenida.",
    },
    "blood-sugar-beyond-diabetes": {
      title: "El azúcar en sangre, más allá de la diabetes",
      dek: "La glucosa no es solo un número de la diabetes. Esto es lo que refleja para todos, y cómo encaja la HbA1c.",
      description:
        "La glucosa en sangre y la HbA1c explicadas para un público general: qué significan los números, los rangos de las guías clínicas y la diferencia entre una lectura puntual y la media a largo plazo.",
    },
    "vo2max-and-longevity": {
      title: "VO₂máx: el número de forma física vinculado a una vida más larga",
      dek: "La condición cardiorrespiratoria es uno de los predictores más sólidos de cuánto vivirás. Aquí va el porqué.",
      description:
        "El VO₂máx explicado: qué mide, cómo lo estiman los dispositivos, por qué la condición cardiorrespiratoria se asocia tan estrechamente con la longevidad y cómo mover el número.",
    },
    "beyond-the-scale": {
      title: "Más allá de la báscula: peso, IMC y composición corporal",
      dek: "La báscula responde una pregunta. La composición corporal responde la que de verdad te importa.",
      description:
        "Por qué el peso corporal y el IMC son útiles pero toscos, qué añade la composición corporal, cómo leer las tendencias de grasa y masa magra, y qué señales importan para la salud.",
    },
    "tracking-mood": {
      title: "El estado de ánimo como señal de salud",
      dek: "El ánimo parece demasiado subjetivo para medirse, pero un registro constante lo convierte en una de tus tendencias más útiles.",
      description:
        "Por qué un registro de ánimo simple y constante es una métrica de salud legítima, cómo interactúa con el sueño y la actividad, y cuándo un ánimo bajo sostenido requiere apoyo.",
    },
    "the-cycle-as-a-vital-sign": {
      title: "El ciclo menstrual como signo vital",
      dek: "Los profesionales tratan el ciclo como un signo vital por buenas razones. Qué revela su ritmo sobre la salud.",
      description:
        "El ciclo menstrual explicado como señal de salud: las cuatro fases, cómo es un ciclo normal, qué lo altera y cuándo un cambio justifica acudir a un profesional.",
    },
    "how-wearables-measure-you": {
      title: "Cómo te miden de verdad los dispositivos",
      dek: "Sensores ópticos, acelerómetros, estimaciones ingeniosas: qué puede ver realmente el hardware de tu muñeca, y dónde no llega.",
      description:
        "Cómo miden los dispositivos la frecuencia cardíaca, los pasos, el sueño, el oxígeno en sangre y la temperatura: los sensores detrás de los números, las estimaciones derivadas y los límites de precisión conocidos.",
    },
    "reading-your-trends": {
      title: "Lee tendencias, no números",
      dek: "La habilidad más útil en el seguimiento de la salud no es leer un número: es leer tu propia línea a lo largo del tiempo.",
      description:
        "Por qué tu línea base personal supera a cualquier rango poblacional, cómo distinguir una tendencia significativa del ruido diario y por qué unas condiciones de medición constantes importan más que la precisión.",
    },
    "steps-and-movement": {
      title: "Pasos y movimiento cotidiano",
      dek: "Qué te dice de verdad un recuento diario de pasos, y por qué los 10.000 fueron una cifra de marketing, no un objetivo de salud.",
      description:
        "Qué revelan los pasos diarios sobre la salud, la evidencia de que los beneficios empiezan muy por debajo de 10.000, por qué importa el movimiento a lo largo del día, y cómo se estiman los recuentos de pasos.",
    },
    "caffeine-alcohol-and-your-readings": {
      title: "La cafeína, el alcohol y tus lecturas",
      dek: "Dos hábitos cotidianos dejan huellas claras en tu frecuencia cardíaca, tu sueño y tu recuperación. Esto es lo que hay que buscar.",
      description:
        "Cómo la cafeína y el alcohol mueven de forma visible las métricas que sigues —frecuencia cardíaca, VFC, sueño y glucosa— y por qué explican tantas mañanas en baja forma.",
    },
    "hydration-and-your-body": {
      title: "La hidratación y tu cuerpo",
      dek: "La mayoría de los vaivenes diarios de peso son agua. Una mirada serena al equilibrio de líquidos, y la verdad sobre los «ocho vasos al día».",
      description:
        "Qué hace la hidratación por la frecuencia cardíaca, el peso y cómo te sientes, la evidencia honesta sobre las necesidades diarias de líquido, y cuándo el equilibrio de líquidos importa de verdad.",
    },
    "stress-and-recovery": {
      title: "Estrés y recuperación",
      dek: "Tu cuerpo lleva la cuenta: en tu frecuencia cardíaca, tu VFC y tu sueño. Cómo leer los signos de la tensión y el descanso.",
      description:
        "Cómo aparecen el estrés y la recuperación en la frecuencia cardíaca en reposo, la VFC y el sueño, el equilibrio autónomo que los sostiene, y por qué la recuperación es una señal activa que puedes construir.",
    },
    "screening-not-diagnosis": {
      title: "La puntuación de un cribado no es un diagnóstico",
      dek: "El PHQ-9 y el GAD-7 parecen resultados de laboratorio, pero criban: no diagnostican. Por qué esa distinción es lo esencial.",
      description:
        "Qué miden en realidad los cuestionarios de salud mental PHQ-9, GAD-7, WHO-5 y PSS-10, cómo leer sus bandas de gravedad, por qué repetirlos supera a una sola sesión, y por qué un cribado positivo es un aviso para hablar con un profesional, no un autodiagnóstico.",
    },
    "longevity-labs-explained": {
      title: "Análisis de longevidad: la sangre más allá del colesterol",
      dek: "Un panel lipídico estándar subestima tu riesgo. La ApoB, la Lp(a) y la hs-CRP cuentan la historia más completa.",
      description:
        "Por qué un panel de colesterol básico se pierde riesgo, y qué añaden la ApoB, el no-HDL, la Lp(a), la hs-CRP, la HbA1c y la insulina en ayunas, con rangos de orientación, el enfoque de tendencia y repetición, y por qué la sangre se lee con un profesional.",
    },
    "waist-and-central-fat": {
      title: "Cintura y grasa central: por qué la cinta le gana a la báscula",
      dek: "Dónde almacenas grasa importa más que cuánto pesas. La relación cintura-altura sigue el riesgo que el IMC se pierde.",
      description:
        "Por qué la grasa visceral es más dañina que la subcutánea, los umbrales de cintura y de relación cintura-altura, cómo medir de forma constante, y qué predice la adiposidad central para la salud metabólica y cardiovascular.",
    },
    "grip-strength-as-a-vital-sign": {
      title: "Fuerza de prensión: la prueba de longevidad más barata",
      dek: "Un dinamómetro de mano predice la mortalidad mejor que la presión arterial. La fuerza es un signo vital, no solo una métrica de gimnasio.",
      description:
        "Qué representa la fuerza de prensión sobre la fuerza de todo el cuerpo y la sarcopenia, los rangos normativos por edad y sexo, la asociación con la mortalidad del estudio PURE, cómo seguir la tendencia, y cómo la mueve el entrenamiento de fuerza.",
    },
    "weather-altitude-and-your-body": {
      title: "El clima, la altitud y tu cuerpo",
      dek: "El calor, la altitud y la calidad del aire mueven tu frecuencia cardíaca, tu sueño y tu respiración antes de que lo notes: contexto para las lecturas «raras».",
      description:
        "Cómo el calor, la altitud y la contaminación del aire cambian tu frecuencia cardíaca en reposo, tu sueño, tu respiración y tu oxígeno en sangre, por qué esos cambios son información y no avería, y cómo leer tus datos frente al entorno en lugar de en el vacío.",
    },
  },
};

export default meta;
