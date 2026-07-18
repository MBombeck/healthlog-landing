export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "¿Debería comparar mis cifras de salud con el rango normal o conmigo mismo?",
      a: "Parte de tu propia base. En casi todas las señales que vale la pena seguir, la variación entre personas es mucho mayor que tu propia fluctuación diaria, así que un valor que parece corriente en un gráfico poblacional puede ser un récord personal o una advertencia para ti. Usa los rangos publicados solo como comprobación de cordura, no como un marcador.",
    },
    {
      q: "¿Por qué no debería reaccionar ante una sola lectura de salud?",
      a: "El cuerpo es ruidoso. La variabilidad de la frecuencia cardíaca oscila cerca de un diez por ciento de un día a otro como puro ruido, y el peso corporal varía uno o dos kilos solo por líquidos; una lectura alta o baja suele estar dentro de esa dispersión normal. Lo que significa algo es la dirección de un promedio móvil a lo largo de días y semanas, no un punto aislado.",
    },
    {
      q: "¿Por qué varias de mis métricas se mueven juntas a la vez?",
      a: "Todas informan sobre los mismos sistemas subyacentes desde ángulos distintos. Una mala noche o el alcohol tienden a elevar la frecuencia cardíaca en reposo mientras bajan la VFC; el inicio de una infección empuja al alza la frecuencia cardíaca en reposo, la frecuencia respiratoria y la temperatura a la vez, mientras la VFC cae. Dos o tres señales moviéndose en el mismo sentido a la vez dan más confianza que cualquiera por separado.",
    },
    {
      q: "¿Sustituyen las métricas de los dispositivos vestibles la visita al médico?",
      a: "No. La frecuencia cardíaca en reposo, la VFC, las puntuaciones de sueño y el resto son indicios de bienestar, útiles para notar cambios y hacer mejores preguntas, nunca un diagnóstico. Una alerta de un dispositivo vestible, como un aviso de ritmo irregular, es un motivo para hacerse una revisión, no un resultado. Habla con un profesional de la salud sobre cualquier cosa que te preocupe.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "¿Cuál es una frecuencia cardíaca en reposo normal?",
      a: "El rango clásico en adultos es de 60 a 100 latidos por minuto, y las personas entrenadas en resistencia suelen situarse entre los 40 y los 60. Esa banda se trazó por seguridad clínica más que por salud óptima, y grandes estudios encuentran que el riesgo sube de forma bastante constante a medida que aumenta la frecuencia en reposo. La tendencia importa más que cualquier lectura aislada.",
    },
    {
      q: "¿Cuál es el mejor momento para medir la frecuencia cardíaca en reposo?",
      a: "Idealmente a primera hora de la mañana, antes de incorporarte, mirar el teléfono o tomar cafeína. Medir siempre en las mismas condiciones es lo que hace que la cifra sea comparable, de modo que una lectura constante vale mucho más que una más exacta tomada al azar.",
    },
    {
      q: "¿Por qué subió de repente mi frecuencia cardíaca en reposo durante unos días?",
      a: "Una subida repentina e inexplicada de varios latidos que se mantiene unos días es la forma en que el cuerpo señala algo en silencio, a menudo el inicio de una infección, mal sueño sumado al estrés, deshidratación, alcohol la noche anterior, o demasiado entrenamiento y poca recuperación. La cafeína, la fiebre, el calor, la ansiedad y algunos medicamentos también la elevan.",
    },
    {
      q: "¿Cuándo debería preocuparme por mi frecuencia cardíaca en reposo?",
      a: "Una frecuencia en reposo que se mantiene por encima de 100 sin explicación clara, una frecuencia baja acompañada de mareos, desmayos o falta de aire, o un pulso irregular recurrente merecen comentarse con un profesional de la salud. Una alerta de ritmo irregular de un dispositivo vestible es un motivo para hacerse una revisión, no un diagnóstico; solo un electrocardiograma puede confirmar un problema de ritmo.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "¿Qué es una buena VFC?",
      a: "No existe una cifra buena universal. La variación de la VFC entre personas es enorme, así que tu base saludable podría ser un tercio de la de otra persona y ambas estar bien. La VFC también cae con fuerza con la edad y depende de la duración del registro y de la postura, por lo que los valores absolutos no se trasladan entre personas ni dispositivos. Lee tu propia tendencia, no una clasificación.",
    },
    {
      q: "¿Por qué cambia tanto mi VFC de una noche a otra?",
      a: "La VFC es extremadamente sensible a las condiciones. La postura, la frecuencia respiratoria, la hora del día, la última comida, la cafeína, una enfermedad, el sueño y el estrés agudo la mueven, y el alcohol la suprime de forma dependiente de la dosis. Las oscilaciones de una sola noche de cerca de un diez por ciento son habituales y no significan nada por sí solas; un promedio móvil de siete días es la unidad honesta para leerla.",
    },
    {
      q: "¿Por qué tengo la VFC baja después de beber alcohol?",
      a: "El alcohol suprime la VFC de forma dependiente de la dosis, con mayor intensidad la noche en que se bebe y la mañana siguiente, a menudo mientras la frecuencia cardíaca y la presión arterial siguen pareciendo perfectamente normales. Una caída de una noche tras una copa, una cena tardía o un entrenamiento duro es esperable y se recupera sola; anotar los factores de confusión evidentes es lo que te permite distinguirla de un descenso sostenido y significativo.",
    },
    {
      q: "¿Cuándo importa de verdad una VFC baja?",
      a: "Por sí sola, la VFC es demasiado ruidosa para alarmarse. Apunta a algo cuando una caída sostenida por debajo de tu base personal llega junto con una frecuencia cardíaca en reposo en aumento y una frecuencia respiratoria nocturna más alta, una señal temprana y sutil de enfermedad o sobrecarga. Una tendencia a la baja con síntomas como falta de aire o palpitaciones, o avisos repetidos de ritmo irregular, es motivo para acudir a un profesional de la salud.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "¿Qué significan las dos cifras de la presión arterial?",
      a: "La cifra sistólica, arriba, es la presión en las arterias en el instante en que el corazón se contrae y expulsa la sangre; la cifra diastólica, debajo, es la presión residual mientras el corazón se relaja y se vuelve a llenar entre latidos. Ambas se miden en milímetros de mercurio y ambas conllevan riesgo de forma independiente, así que ninguna es la importante.",
    },
    {
      q: "¿Qué presión arterial se considera alta?",
      a: "Los dos grandes organismos de guías coinciden en que la hipertensión como enfermedad empieza en 140/90 en la consulta. Difieren en las etiquetas por debajo: el marco estadounidense llama hipertensión de fase 1 a los valores de 130 a 139 sobre 80 a 89, mientras que el marco europeo llama a esas mismas cifras simplemente elevadas. El riesgo aumenta de forma continua desde cerca de 115/75 hacia arriba, sin una línea clara por debajo de la cual desaparezca.",
    },
    {
      q: "¿Cómo mido correctamente mi presión arterial en casa?",
      a: "Siéntate tranquilo cinco minutos antes, con la espalda apoyada y los pies planos, el brazo descansando a la altura del corazón y un brazalete de brazo del tamaño correcto. Evita la cafeína, fumar y hablar de antemano. La técnica mueve la cifra más que casi cualquier cosa que ocurra dentro de ti ese día. Los promedios fuera de la consulta a lo largo de varios días son el estándar de referencia, con la hipertensión en casa estimada en torno a 135/85.",
    },
    {
      q: "¿Cuándo es una emergencia una lectura de presión arterial alta?",
      a: "Una sola lectura alta no es una emergencia; vuelve a medir tras un minuto. Si se mantiene en 180/120 o más sin síntomas, contacta sin demora con tu profesional de la salud. Si está en 180/120 o más con dolor de pecho, falta de aire, un cambio neurológico o de la visión, o un dolor de cabeza intenso, trátalo como una emergencia y llama a los servicios de urgencias.",
    },
  ],
  "your-ecg-recordings": [
    {
      q: "¿Qué mide en realidad un ECG de una derivación?",
      a: "Registra un canal de la actividad eléctrica del corazón —la pequeña diferencia de voltaje entre dos puntos del cuerpo— y lo dibuja como una tira de ritmo. Un ECG clínico usa doce de esos canales para ver el corazón desde doce ángulos; un ponible usa uno, suficiente para mostrar el ritmo y la frecuencia, pero una sola vista en lugar del cuadro completo.",
    },
    {
      q: "¿Puede un ECG de reloj diagnosticar una fibrilación auricular o un infarto?",
      a: "No. Un resultado de fibrilación auricular es un aviso de cribado, no un diagnóstico confirmado: las guías tratan una tira de una derivación de 30 segundos como motivo para buscar un ECG formal, no como su sustituto. Y una sola derivación no puede detectar un infarto en absoluto, porque los cambios que lo señalan aparecen en derivaciones que un registro de muñeca nunca capta. El dolor o la presión en el pecho es una urgencia, muestre lo que muestre el dispositivo.",
    },
    {
      q: "¿HealthLog interpreta mi ECG?",
      a: "No. HealthLog muestra tu registro importado sobre una cuadrícula de ECG familiar y presenta el resultado que produjo el propio dispositivo de registro, trasladado sin cambios. No lee el trazado, no lo puntúa ni ofrece un diagnóstico propio: la lectura que cuenta es la de un clínico.",
    },
    {
      q: "¿Por qué mi ECG dice «no concluyente»?",
      a: "Un resultado no concluyente suele significar que la señal no fue lo bastante limpia para clasificarla: un contacto flojo, una mano fría, movimiento durante el registro o una frecuencia fuera de la banda que el algoritmo etiqueta. Es frecuente y rara vez señal de que algo va mal; repítelo con la mano caliente, quieta y con buen contacto. Lecturas no concluyentes persistentes junto con síntomas merecen mencionarse a un clínico.",
    },
  ],
  "sleep-consistency": [
    {
      q: "¿Cuántas horas de sueño necesitan realmente los adultos?",
      a: "Las guías nacionales sitúan a los adultos de 18 a 64 años en 7 a 9 horas por noche y a los adultos mayores en 7 a 8, con un mínimo de consenso de al menos 7 horas de forma regular. La relación tiene forma de U más que de cuanto más mejor: tanto dormir habitualmente poco como dormir habitualmente mucho conllevan un riesgo asociado.",
    },
    {
      q: "¿Es la regularidad del sueño más importante que su duración?",
      a: "Ambas importan, y el horario puede importar tanto como la duración. En una cohorte amplia, la regularidad del horario de sueño predijo la mortalidad al menos con tanta fuerza como lo hizo la duración, incluso teniendo en cuenta las horas dormidas. Dos personas pueden registrar las mismas horas, y la que las registra a la misma hora cada noche está, de forma medible, mejor.",
    },
    {
      q: "¿Puedo recuperar el sueño perdido el fin de semana?",
      a: "Solo en parte. La deuda de sueño es una suma acumulada de noches que quedaron cortas, y recuperarse de ella es parcial y no lineal, así que un fin de semana largo no revierte por completo varias noches restringidas. Un horario constante supera al intento de saldar la deuda de una sola vez.",
    },
    {
      q: "¿Son exactas las fases de sueño profundo y REM de mi rastreador?",
      a: "Sé escéptico con el desglose de fases. Los rastreadores de consumo estiman la división entre sueño profundo, REM y ligero con una concordancia solo aceptable o moderada frente al estándar del laboratorio clínico, y tienden a sobreestimar cuánto dormiste. El tiempo total de sueño y tu hora de acostarte son mucho más fiables que cualquier porcentaje de sueño profundo; trata las fases como una tendencia personal aproximada.",
    },
  ],
  "respiratory-rate": [
    {
      q: "¿Cuál es una frecuencia respiratoria normal?",
      a: "El rango estándar en reposo para adultos es de 12 a 20 respiraciones por minuto. Esa banda es amplia, así que donde la cifra cobra valor es en relación con tu propio número habitual más que frente al rango poblacional. Los niños respiran más rápido y los atletas entrenados en resistencia tienden a situarse en el extremo bajo.",
    },
    {
      q: "¿Por qué se mide la frecuencia respiratoria por la noche y no durante el día?",
      a: "Despierto, la frecuencia respiratoria es una de las cifras más dependientes del estado que produce tu cuerpo; hablar, moverse, la emoción e incluso saber que te están midiendo la modifican, así que una lectura puntual diurna es casi inútil. Dormido, esas influencias desaparecen y tu frecuencia nocturna se asienta en una cifra notablemente estable, fácil de comparar para ver una desviación real.",
    },
    {
      q: "¿Qué significa que mi frecuencia respiratoria nocturna suba?",
      a: "Una subida sostenida de unas tres respiraciones por minuto por encima de tu cifra nocturna habitual puede indicar que algo se está gestando, a menudo antes de que te sientas mal. La señal es genérica de infección: te dice que el cuerpo trabaja más, no qué falla. Cosas corrientes como un entrenamiento duro a última hora, el alcohol o una habitación calurosa y cargada también pueden subirla.",
    },
    {
      q: "¿Cuándo es una emergencia médica la frecuencia respiratoria?",
      a: "Una frecuencia por encima de 25 por minuto junto con falta de aire, confusión o una lectura baja de oxígeno en sangre necesita atención médica sin demora. La respiración lenta y superficial es la dirección más peligrosa, sobre todo la depresión respiratoria causada por opioides o sedantes; si alguien respira muy despacio, cuesta despertarlo o tiene los labios azulados, trátalo como una emergencia y pide ayuda.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "¿Cuál es un nivel normal de oxígeno en sangre?",
      a: "En un adulto sano que respira aire ambiente a nivel del mar, la SpO2 se sitúa entre el 95 y el 100 por ciento, con la mayoría de las lecturas agrupadas entre el 96 y el 99. El límite inferior cambia con las circunstancias, así que cerca del 90 por ciento puede ser normal en altitud, y las personas con enfermedad pulmonar crónica viven con una base personal más baja. No hay premio por encima de la banda; más alto no es mejor.",
    },
    {
      q: "¿Por qué mi lectura de SpO2 en la muñeca es baja?",
      a: "Una sola lectura baja suele ser más un artefacto que una emergencia. Los sensores de muñeca están más lejos de un lecho arterial pulsante y lidian con el movimiento y un ajuste más flojo, y las manos frías, una correa floja, el esmalte de uñas o la luz ambiental tiran la cifra hacia abajo. Vuelve a medir con la mano caliente, quieta y bien irrigada antes de fiarte de una caída.",
    },
    {
      q: "¿Puedo usar la SpO2 para detectar la apnea del sueño?",
      a: "Las desaturaciones nocturnas repetidas forman parte de cómo se hace el cribado de la apnea del sueño, así que un dispositivo vestible que las señale puede ser una pista temprana, pero no es un diagnóstico. Ronquidos fuertes con pausas presenciadas o un sueño que no descansa con somnolencia diurna merecen comentarse con un profesional de la salud para una evaluación adecuada.",
    },
    {
      q: "¿Son los pulsioxímetros menos exactos en pieles más oscuras?",
      a: "Sí. Los pulsioxímetros pueden sobreestimar la saturación real de oxígeno en personas con pigmentación de piel más oscura, mostrando una cifra tranquilizadora mientras la saturación real es más baja, un desajuste documentado en datos hospitalarios y revisado por organismos reguladores estadounidenses. Una lectura de apariencia normal nunca debería anular la falta de aire, la confusión o la simple sensación de que algo va mal.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "¿Siguen siendo 37 grados Celsius la temperatura corporal normal?",
      a: "Es un promedio antiguo que los datos modernos han bajado un poco. Una revisión amplia situó la media poblacional en 36,59 C, con un rango oral normal de aproximadamente 35,7 a 37,4 C, lo bastante amplio como para que dos personas sanas estén casi dos grados aparte. Una lectura de 36,7 C está de lleno dentro de lo normal, no por debajo.",
    },
    {
      q: "¿Por qué cambia mi temperatura a lo largo del día?",
      a: "La temperatura sigue una curva circadiana, oscilando cerca de medio grado entre su punto más bajo de la madrugada, hacia las 4 a 8 de la mañana, y su pico al principio de la noche, en torno a las 6 a 8 de la tarde. Una lectura nocturna que parece algo alta suele ser solo el pico diario normal; compara siempre lecturas tomadas a la misma hora del día y en el mismo sitio.",
    },
    {
      q: "¿Es la temperatura de la piel de un vestible lo mismo que la temperatura corporal?",
      a: "No. La temperatura de la piel de un vestible no es la temperatura corporal central; es la desviación nocturna respecto a tu propia base de varias noches, sin un rango clínico de referencia. Bien usada puede insinuar un cambio subfebril antes de que aparezcan los síntomas, pero cualquier preocupación por fiebre debe confirmarse con una lectura oral real.",
    },
    {
      q: "¿Qué temperatura cuenta como fiebre y cuándo debo buscar atención?",
      a: "La fiebre es una temperatura oral de 38,0 C o superior. En adultos suelen importar más los síntomas y cuánto duran que la cifra exacta, pero busca atención en torno a 39,4 C, o ante cualquier fiebre con falta de aire, dolor de pecho, dolor de cabeza intenso, confusión, rigidez de cuello o erupción. La fiebre en un bebé menor de tres meses siempre necesita evaluación urgente.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "¿Cuál es un nivel normal de azúcar en sangre en ayunas?",
      a: "Por debajo de 100 mg/dL (menos de 5,6 mmol/L) es normal según la American Diabetes Association, con la banda de prediabetes de 100 a 125; la OMS abre la prediabetes en 110 en su lugar. Ambas comparten un umbral de diabetes de 126 mg/dL o más. Una sola lectura anómala nunca diagnostica nada; la confirmación necesita repetir la prueba otro día.",
    },
    {
      q: "¿Cuál es la diferencia entre una lectura de glucosa y la HbA1c?",
      a: "Una lectura de glucosa en ayunas o posprandial es una fotografía, cierta para el instante en que se tomó la muestra y fácilmente alterada por la cena de anoche o un resfriado que asoma. La HbA1c es un lapso de tiempo, que refleja tu azúcar en sangre promedio a lo largo de la vida de unos dos a tres meses de un glóbulo rojo. Son más útiles leídas una junto a la otra.",
    },
    {
      q: "¿Por qué mi azúcar en sangre matutino es más alto tras una mala noche de sueño?",
      a: "Incluso una sola noche de privación parcial de sueño reduce de forma medible la sensibilidad a la insulina, y la tolerancia a la glucosa cae a lo largo del día, de modo que una comida idéntica eleva más el pico por la noche. Una mala noche o una cena tardía y copiosa son una razón plausible para una anomalía aislada a la mañana siguiente, y no son por sí solas prueba de nada.",
    },
    {
      q: "¿Cuándo es peligrosa una lectura de azúcar en sangre?",
      a: "Una glucosa por debajo de 70 mg/dL (menos de 3,9 mmol/L) es una alerta de hipoglucemia; trátala con carbohidratos de acción rápida y vuelve a medir a los 15 minutos, y por debajo de 54 mg/dL requiere acción inmediata. Una glucosa muy alta sostenida con sed, micción frecuente, vómitos, respiración acelerada o pensamiento alterado exige atención sin demora. Esto no son autodiagnósticos; habla con un profesional de la salud.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "¿Qué es el VO2máx y por qué importa?",
      a: "El VO2máx es la tasa máxima a la que tu cuerpo puede captar y usar oxígeno durante el ejercicio intenso, medida en mililitros de oxígeno por kilogramo por minuto. Capta toda la cadena de aporte de oxígeno y es uno de los predictores individuales más potentes de cuánto vivirás, con cada incremento de forma física ligado a un riesgo de muerte notablemente menor.",
    },
    {
      q: "¿Qué exactitud tiene el VO2máx de mi reloj?",
      a: "Tu dispositivo vestible lo estima en lugar de medirlo, infiriendo una cifra a partir de la relación entre tu frecuencia cardíaca y tu ritmo, apoyándose en una frecuencia cardíaca máxima supuesta. El valor absoluto puede desviarse unos puntos, y el terreno, el calor y el ajuste lo difuminan más. La forma honesta de leerlo es como una línea de tendencia: una subida constante a lo largo de las semanas es real.",
    },
    {
      q: "¿Cuál es un buen VO2máx para mi edad?",
      a: "El VO2máx se interpreta como un percentil dentro de tu propia banda de edad y sexo, nunca frente a un objetivo fijo. Los hombres dan resultados de un 15 a un 20 por ciento más altos que las mujeres a la misma edad, y la forma física cae con la edad, así que un valor excelente a los 60 sería corriente a los 25. Lo que importa más que dónde te sitúas es en qué dirección te mueves.",
    },
    {
      q: "¿Cómo mejoro mi VO2máx?",
      a: "La forma física aeróbica sube con un entrenamiento constante. El objetivo semanal en las principales guías es de 150 a 300 minutos de actividad moderada o de 75 a 150 minutos de actividad vigorosa, más fortalecimiento muscular al menos dos veces por semana, con recuperación incluida. El entrenamiento regular reduce aproximadamente a la mitad el declive natural ligado a la edad. Consulta con un profesional de la salud antes de empezar ejercicio vigoroso si has estado inactivo o tienes una afección cardíaca, pulmonar o metabólica.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "¿Por qué el IMC es una medida limitada de salud?",
      a: "El IMC es un indicador de adiposidad barato y repetible, pero no distingue el músculo de la grasa, así que una persona musculosa puede caer en la banda de sobrepeso mientras un adulto mayor que ha perdido músculo se sitúa cómodamente en lo normal. También ignora dónde se acumula la grasa, y sus puntos de corte se trazaron a partir de poblaciones mayormente europeas y conllevan mayor riesgo con un IMC más bajo en personas de ascendencia del sur y el este de Asia.",
    },
    {
      q: "¿Por qué importa más dónde acumulo la grasa que mi peso?",
      a: "La grasa alrededor de la cintura, apretujada entre los órganos abdominales, es metabólicamente mucho más dañina que la grasa de caderas y muslos, y predice diabetes, hipertensión y riesgo cardiovascular con independencia del IMC. Una regla práctica sencilla que funciona bien entre sexos y ascendencias es mantener la cintura por debajo de la mitad de tu estatura.",
    },
    {
      q: "¿Por qué mi peso sube de la noche a la mañana?",
      a: "El peso corporal oscila uno o dos kilos a lo largo de un día normal y de un día a otro por la hidratación, la comida aún en tránsito y la sal por sí sola, nada de eso es grasa. Observa un promedio móvil de siete días y el ruido se cancela, dejando la línea que de verdad significa algo. Lo mismo vale para el porcentaje de grasa corporal de una báscula.",
    },
    {
      q: "¿Cuánto peso necesito perder para mejorar mi salud?",
      a: "En adultos con sobrepeso u obesidad, una pérdida sostenida de apenas un 5 a un 10 por ciento del peso corporal mejora de forma significativa el azúcar en sangre, la presión arterial y los lípidos, un objetivo mucho mejor que cualquier cifra concreta en la báscula. Un cambio modesto y sostenido es la meta que vale la pena perseguir, más que un número espectacular.",
    },
  ],
  "tracking-mood": [
    {
      q: "¿Qué sentido tiene registrar mi estado de ánimo?",
      a: "Una entrada es una opinión; unos cientos de entradas son una tendencia, y una tendencia son datos. Registrada de forma constante durante semanas, una escala de ánimo sencilla saca a la luz patrones que ningún día por sí solo revela, como una lenta caída a lo largo de un tramo estresante, el impulso fiable tras el ejercicio, o un bajón que llega en un calendario mensual previsible.",
    },
    {
      q: "¿Cómo debo registrar mi estado de ánimo para que sea útil?",
      a: "La constancia es el hábito más útil: la misma escala, a la misma hora del día, cada día. El autoinforme es sensible a la hora del día, los acontecimientos recientes y cómo dormiste, así que una lectura puntual es ruidosa. Medido de la misma forma, el vaivén diario se promedia y la dirección de fondo se vuelve legible.",
    },
    {
      q: "¿Qué puntuación es preocupante en un cuestionario de estado de ánimo?",
      a: "En los cribados validados, un WHO-5 igual o inferior al 50 por ciento indica bajo bienestar, y un total de PHQ-9 o GAD-7 de 10 o más es el umbral de acción estándar. Son cribados concordantes y bien establecidos, pero un resultado positivo es un motivo para hablar con un profesional, no un diagnóstico que puedas hacer en casa.",
    },
    {
      q: "¿Cuándo debería un estado de ánimo bajo llevarme a pedir ayuda?",
      a: "Cuando persiste: una tendencia a la baja que se mantiene dos semanas o más, o que empieza a interferir con la vida cotidiana, es motivo para hablar con un médico o un profesional de salud mental, y no necesitas esperar a que se sienta grave. Cualquier pensamiento de hacerte daño es por sí solo motivo para contactar de inmediato con tu número de emergencias local o un servicio de crisis.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "¿Por qué se considera el ciclo menstrual un signo vital?",
      a: "Los organismos profesionales piden a los clínicos que traten el ciclo como tratan el pulso, la presión arterial y la temperatura, porque es un ritmo recurrente que se mantiene estable cuando las cosas van bien y, por tanto, un cambio en él aporta información. La duración y la regularidad del ciclo son una ventana accesible a la salud reproductiva y general.",
    },
    {
      q: "¿Cuál es una duración normal del ciclo menstrual?",
      a: "Dos rangos de referencia cuentan. La banda orientada al paciente describe los ciclos saludables corrientes de un adulto como de 21 a 35 días, mientras que el marco de cribado clínico es de 24 a 38 días. Una variación de cerca de una semana de un mes a otro es corriente, y la fase lútea es el ancla relativamente constante, con la mayor parte de la variación de duración en la fase folicular.",
    },
    {
      q: "¿Puedo fiarme de una aplicación de seguimiento del ciclo como método anticonceptivo?",
      a: "No. Las predicciones algorítmicas del ciclo de cualquier aplicación, dispositivo vestible o aparato no son un método anticonceptivo. Las predicciones basadas en valores poblacionales por defecto no son fiables, el momento de la ovulación varía mucho incluso en personas con ciclos regulares, y la perimenopausia vuelve los ciclos impredecibles de nuevo. Quien use el conocimiento de la fertilidad debería emplear un método validado y debidamente instruido, no una sola fecha predicha.",
    },
    {
      q: "¿Cuándo debería consultar al médico por mi ciclo?",
      a: "Coméntalo con un profesional de la salud cuando los ciclos caigan de forma constante fuera del rango habitual, con intervalos más cortos de unos 21 días o más largos de unos 45, o cuando haya un cambio marcado y sostenido respecto a tu propio patrón. Un intervalo de 90 días o más, un sangrado que dure más de 7 días o que empape una compresa con más frecuencia que cada una o dos horas, y el sangrado entre periodos merecen todos una evaluación.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "¿Cómo mide un dispositivo vestible mi frecuencia cardíaca?",
      a: "La mayoría usa fotopletismografía: un LED verde proyecta luz sobre la piel, la sangre absorbe parte de ella, y un sensor cuenta los pulsos a medida que el volumen de sangre sube y baja con cada latido. Funciona bien en reposo pero le cuesta con el movimiento, por lo que la frecuencia cardíaca de muñeca durante series o levantamiento de pesas es la lectura menos fiable que tiene la mayoría. Una banda pectoral se mantiene exacta pese al movimiento.",
    },
    {
      q: "¿Cómo sabe mi reloj mis fases de sueño?",
      a: "No ve tu cerebro. Infiere el sueño a partir de lo poco que te mueves, a menudo combinado con la frecuencia cardíaca y su variación latido a latido, y luego etiqueta la noche en ligero, profundo y REM. Frente al estándar del laboratorio clínico, los dispositivos distinguen bastante bien dormido de despierto y bastante peor en qué fase: fíate de la hora de acostarte y la duración total, y trata las fases de colores como una estimación.",
    },
    {
      q: "¿Son exactas las lecturas de los dispositivos vestibles?",
      a: "La mayoría de lo que te muestra un dispositivo vestible es una estimación, no una medición de laboratorio. La frecuencia cardíaca óptica, las fases de sueño inferidas, la SpO2 de muñeca y toda puntuación de recuperación o disposición son modelos construidos sobre unas pocas señales reales, lo bastante exactos para revelar cambios con el tiempo pero rara vez lo bastante precisos para tratar un solo valor como verdad absoluta. Léelos en relativo, no en absoluto.",
    },
    {
      q: "¿Qué miden en realidad las puntuaciones de recuperación y disposición?",
      a: "No se miden en absoluto; son modelos propietarios que combinan flujos de sensores en bruto, normalmente la VFC nocturna, la frecuencia cardíaca en reposo y el sueño, con tu edad, peso e historial para producir una sola cifra. No tienen rango clínico de referencia ni están estandarizados entre dispositivos, así que léelos como un empujón diario, no como una medición clínica.",
    },
  ],
  "reading-your-trends": [
    {
      q: "¿Por qué es mejor mi propia base que el rango normal?",
      a: "Una banda de referencia se construye para señalar a la pequeña fracción de personas que quedan muy fuera de la dispersión habitual; nunca se diseñó para decirte si hoy es un buen día. Como la variación entre personas es grande, una frecuencia cardíaca en reposo de 58 parece corriente frente a la banda del manual pero es una subida clara de seis latidos si tu base es 52, un cambio que el rango poblacional oculta por completo.",
    },
    {
      q: "¿Cómo distingo una señal real del ruido aleatorio?",
      a: "El ruido es una lectura cerca del borde de tu rango habitual, o un pequeño movimiento que se revierte al día siguiente. La señal es una dirección que persiste: un cambio de varios días muy por encima de tu dispersión habitual, o una lenta deriva en el promedio móvil a lo largo de semanas. El promedio móvil suaviza el vaivén, y un cambio varias veces mayor que tu oscilación diaria habitual merece atención.",
    },
    {
      q: "¿Cuánto tarda en ser fiable una base?",
      a: "Una sola medición es un punto sin contexto. Una señal nueva necesita un par de semanas de lecturas constantes antes de que una sola cifra signifique algo, porque solo entonces el ruido diario se ha promediado en una base sobre la que de verdad puedes apoyarte.",
    },
    {
      q: "¿Por qué importa tanto medir en las mismas condiciones?",
      a: "Una tendencia solo es honesta si las condiciones que la sostienen se mantienen constantes. La frecuencia cardíaca en reposo al despertar está muy por debajo de la misma frecuencia tras el café y las escaleras, y el peso antes del desayuno corre un kilo por debajo del mismo cuerpo después de cenar. Un dispositivo algo imperfecto usado de la misma forma cada día supera a uno mejor usado al azar.",
    },
  ],
  "steps-and-movement": [
    {
      q: "¿De dónde salió el objetivo de los 10.000 pasos?",
      a: "Nunca fue un hallazgo. Se remonta a un podómetro comercializado en torno a los Juegos Olímpicos de Tokio de 1964 cuyo nombre significaba contador de diez mil pasos, elegido en parte porque el carácter del 10.000 se parece a una persona caminando y en parte porque era una cifra redonda y memorable para vender un aparato. Tómalo como folclore, no como una guía.",
    },
    {
      q: "¿Cuántos pasos al día necesito en realidad?",
      a: "La mayor parte del beneficio para la mortalidad se logra muy por debajo de los 10.000. Los estudios muestran que las tasas de muerte caen a medida que suben los pasos, con la curva aplanándose en torno a los 6.000 a 8.000 pasos al día en adultos mayores y los 8.000 a 10.000 en los más jóvenes. La curva se aplana, no se invierte, así que caminar más no es un problema, solo aporta menos por paso.",
    },
    {
      q: "¿Es mejor caminar todo de una vez o repartido a lo largo del día?",
      a: "Repartir el movimiento a lo largo del día ayuda. Estar sentado mucho tiempo sin interrupción se trata cada vez más como un factor de riesgo propio, algo independiente de si además haces ejercicio, por lo que las guías actuales emparejan muévete más con siéntate menos. Unos minutos de caminata cada hora, las escaleras y un paseo después de las comidas suman.",
    },
    {
      q: "¿Qué no me dice un recuento de pasos sobre mi salud?",
      a: "Es un medidor de volumen, no una prueba de forma física. No dice nada sobre la intensidad ni la fuerza, no puede distinguir un kilómetro cuesta arriba a paso vivo de pasos lentos por la cocina, y no mide la forma cardiorrespiratoria, uno de los predictores más potentes de la salud a largo plazo. Los pasos pertenecen a un panel junto a otras señales, no a un pedestal.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "¿Cómo afecta la cafeína a mi frecuencia cardíaca y a mi presión arterial?",
      a: "La cafeína bloquea la adenosina y deja correr más libre el acelerador simpático, así que la frecuencia cardíaca sube y la presión arterial aumenta de forma transitoria, un efecto más marcado en quienes no la consumen con regularidad. Un café una hora antes de medir puede empujar al alza tanto tu frecuencia cardíaca en reposo como tu presión arterial lo suficiente para notarlo.",
    },
    {
      q: "¿Afecta de verdad a mi sueño el café de la tarde?",
      a: "A menudo más de lo que puedes percibir. La semivida de la cafeína suele rondar las cinco horas, así que una taza de la tarde aún tiene la mitad de su dosis circulando a la hora de acostarte. En un estudio controlado, una dosis equivalente a un café fuerte tomada seis horas antes de dormir redujo de forma medible el tiempo total de sueño, aunque los participantes subestimaron la alteración.",
    },
    {
      q: "¿Por qué tengo la VFC baja y la frecuencia cardíaca alta después de beber?",
      a: "A medida que el cuerpo elimina el alcohol durante la noche, el lado simpático permanece activado, así que la frecuencia cardíaca en reposo corre elevada y la VFC cae, con cantidades mayores produciendo efectos mayores y más duraderos. Por eso una sola copa con la cena puede aplanar en silencio tu puntuación de recuperación mientras duermes sin enterarte.",
    },
    {
      q: "¿Significa esto que debería dejar la cafeína y el alcohol?",
      a: "No necesariamente. El valor está en la atribución, no en la abstinencia. Observar tus propios datos muestra cuán tarde es demasiado tarde para la cafeína antes de que tu sueño se resienta y cuánto alcohol hace falta para que tu frecuencia cardíaca nocturna suba, de modo que dejas de confundir un bajón previsible y pasajero con una señal de que algo va mal.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "¿De verdad necesito ocho vasos de agua al día?",
      a: "No hay una base científica sólida para una regla universal de ocho vasos; las revisiones que rastrearon la afirmación no encontraron pruebas creíbles tras ella. Los organismos de referencia dan valores poblacionales de agua total de todas las fuentes, aproximadamente de 2 a 2,7 litros al día para mujeres y de 2,5 a 3,7 para hombres, y subrayan que las necesidades varían mucho con el tamaño corporal, la actividad, el clima y la dieta.",
    },
    {
      q: "¿Cómo sé si estoy bebiendo suficiente?",
      a: "Para la mayoría de las personas sanas en un día corriente, las propias señales del cuerpo son guías razonables. La sed es un sensor real y funcional, y beber según la sed mantiene a la mayoría de los adultos sanos adecuadamente hidratados. El color de la orina es una comprobación casera aproximada: un tono pajizo pálido sugiere que estás bien, un tono oscuro de forma constante sugiere que podrías beber más.",
    },
    {
      q: "¿Por qué la deshidratación eleva mi frecuencia cardíaca?",
      a: "Cuando pierdes suficiente líquido como para que baje el volumen de sangre, el corazón compensa latiendo más rápido para mantener la circulación estable, así que la deshidratación empuja al alza la frecuencia cardíaca en reposo y en esfuerzo. Incluso déficits leves de líquido del uno al dos por ciento de la masa corporal bastan para mermar el ánimo, aumentar la sensación de esfuerzo y dificultar la concentración.",
    },
    {
      q: "¿Se puede beber demasiada agua?",
      a: "Sí. Beber muy por encima de la necesidad, lo más frecuente durante pruebas de resistencia, puede diluir el sodio de la sangre hasta una afección peligrosa llamada hiponatremia, cuyos primeros signos se solapan con los de la deshidratación. Quien tenga enfermedad cardíaca, renal o hepática, o tome medicación que afecte al equilibrio de líquidos, puede tener un objetivo deliberadamente restringido y debería seguir el consejo clínico por encima de cualquier regla general.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "¿Cómo se manifiesta el estrés en mis datos de salud?",
      a: "El estrés es el acelerador simpático mantenido pisado, y alimenta muchas métricas desde un mismo mando, así que se mueven juntas. La frecuencia cardíaca en reposo sube, la VFC nocturna cae, el sueño se vuelve más ligero y fragmentado, y la frecuencia respiratoria a veces se eleva. Ninguna señal es decisiva, pero leídas como un conjunto frente a tu propia base son difíciles de rebatir.",
    },
    {
      q: "¿Cuál es la diferencia entre el estrés agudo y el crónico?",
      a: "Los factores agudos como un entrenamiento duro o un plazo de entrega mueven las métricas, y con una o dos noches de descanso genuino todo vuelve a la base; ese rebote es lo importante. La preocupación llega cuando el rebote deja de venir y el cuerpo paga el coste acumulado de la carga alostática, leído en los datos como una base que se ha desplazado en silencio y ha seguido desplazada.",
    },
    {
      q: "¿Es la recuperación solo la ausencia de estrés?",
      a: "No. La recuperación es un proceso parasimpático activo, el freno vagal volviéndose a activar, la frecuencia cardíaca cayendo y el sueño profundo haciendo el trabajo de reparación, por lo que aparece como una señal positiva y no como números que simplemente se aquietan. Eso significa que se puede favorecer, no solo esperar, mediante un sueño regular protegido, movimiento aeróbico suave y luz del día.",
    },
    {
      q: "¿Cuándo debería tomarme en serio el estrés continuado?",
      a: "Estas señales pueden indicar una tensión sostenida pero no pueden decirte por qué, y no sustituyen a cómo te sientes. El estrés que altera tu sueño, tu concentración o tu disfrute de las cosas corrientes durante semanas merece hablarse con un médico o un profesional de salud mental, digan lo que digan los números. Si el malestar llega a sentirse abrumador o tienes pensamientos de autolesión, contacta de inmediato con tu número de emergencias local o un servicio de crisis.",
    },
  ],
  "screening-not-diagnosis": [
    {
      q: "¿Es una puntuación alta del PHQ-9 o el GAD-7 un diagnóstico?",
      a: "No. Son instrumentos de cribado, no pruebas diagnósticas. Una puntuación que cruza su umbral significa que el cribado es positivo y que conviene una conversación más a fondo, no que una afección esté confirmada. Incluso con un punto de corte del PHQ-9 de 10, aproximadamente una de cada ocho personas que dan positivo no tendrá una depresión mayor en una evaluación más completa, que es por lo que un resultado positivo es un aviso para hablar con un profesional y no un veredicto que dictamines tú mismo.",
    },
    {
      q: "¿Qué puntuación del PHQ-9 o el GAD-7 debería motivar una acción?",
      a: "Un total de 10 o más es el umbral de acción estándar para ambos: alrededor del 88 % de sensibilidad y especificidad para depresión mayor en el PHQ-9, y alrededor del 89 % de sensibilidad y 82 % de especificidad para ansiedad generalizada en el GAD-7. El WHO-5 señala bienestar pobre en o por debajo del 50 %. Son puntos de partida para una evaluación profesional, no etiquetas que te adjudiques a ti mismo.",
    },
    {
      q: "¿Por qué debería repetir un cuestionario de cribado en lugar de hacerlo una vez?",
      a: "Una sola sesión es una instantánea ruidosa, sensible a cómo dormiste, a los acontecimientos recientes y a cómo te llegan las preguntas ese día. Repetidas a lo largo de semanas y meses, las mismas preguntas puntuadas se convierten en una tendencia sobre la que tú y un profesional podéis actuar, y el WHO-5 está diseñado explícitamente para leerse como movimiento frente a tus propias puntuaciones anteriores, con una caída de 10 puntos contando como un cambio significativo. La administración repetida es también la forma en que estas herramientas siguen si un tratamiento funciona.",
    },
    {
      q: "¿Qué es el ítem del PHQ-9 sobre la autolesión, y qué debería hacer?",
      a: "La novena pregunta del PHQ-9 pregunta directamente por pensamientos de que estarías mejor muerto o de hacerte daño, y se lee por sí sola, de inmediato, al margen de la puntuación total: una puntuación global baja nunca lo cancela. Cualquier pensamiento de ese tipo, aunque sea ocasional, es por sí solo un motivo para buscar ayuda ahora mismo: contacta de inmediato con tu número local de emergencias o con un servicio de crisis. Estos sentimientos son tratables y hay ayuda disponible.",
    },
  ],
  "longevity-labs-explained": [
    {
      q: "¿Por qué no basta con un panel de colesterol estándar?",
      a: "Un panel básico mide la masa de colesterol que se transporta, pero el riesgo cardiovascular sigue el número de partículas aterogénicas, y el colesterol por partícula varía entre personas. La ApoB es un recuento directo de partículas y el colesterol no-HDL es un sustituto barato de la misma idea, así que dos personas con un LDL-C idéntico pueden cargar con un riesgo muy distinto. El panel básico también guarda silencio sobre la Lp(a) y sobre la inflamación.",
    },
    {
      q: "¿Qué es la Lp(a) y por qué se mide solo una vez?",
      a: "La lipoproteína(a) es una partícula similar al LDL cuyo nivel está fijado genéticamente en torno a un 80 a 90 por ciento y apenas se mueve con la dieta, el ejercicio o las estatinas estándar. Como es tan estable, la recomendación es medirla una vez en la vida para encontrar a la minoría que carga con un riesgo cardiovascular hereditario elevado. Un nivel alto no significa que algo vaya agudamente mal; desplaza tu riesgo de base y eleva la prioridad de cada palanca que sí puedes mover.",
    },
    {
      q: "¿Qué me dice la hs-CRP, y por qué repetirla?",
      a: "La CRP de alta sensibilidad lee la inflamación de bajo grado que acompaña a la aterosclerosis, en terciles cardiovasculares de menos de 1, de 1 a 3 y de más de 3 mg/L. Como cualquier resfriado o brote la mueve, se toma como el promedio de dos mediciones separadas al menos dos semanas y lejos de una enfermedad, y un valor por encima de 10 mg/L se aparta como probable inflamación aguda y se repite. Es un modificador del riesgo superpuesto a la imagen lipídica, no un número independiente.",
    },
    {
      q: "¿Debería interpretar yo mismo mis resultados de laboratorio?",
      a: "No. Estos marcadores interactúan, las bandas de las guías discrepan en los márgenes, y un único valor vive dentro de una banda de ruido biológico y analítico, así que la prueba honesta de un cambio real es el valor de cambio de referencia a lo largo de pruebas repetidas, no si un resultado cruzó un umbral. Un panel se interpreta como un todo, frente a tu riesgo y tu historia personales, por el profesional que lo pidió. Trata un valor fuera de rango como un motivo para hacer una pregunta.",
    },
  ],
  "waist-and-central-fat": [
    {
      q: "¿Por qué importa el perímetro de cintura más que el peso?",
      a: "Dónde almacenas grasa lleva más información que cuánto pesas. La grasa visceral, envuelta alrededor de los órganos abdominales, libera ácidos grasos y señales inflamatorias que impulsan la resistencia a la insulina, una presión arterial más alta y un perfil lipídico desfavorable, mientras que la grasa subcutánea de las caderas y los muslos es en buena medida inerte. El perímetro de cintura es un sustituto sencillo del compartimento visceral y predice el riesgo cardiometabólico de forma independiente del IMC.",
    },
    {
      q: "¿Cuál es la regla de la relación cintura-altura?",
      a: "Mantén tu cintura por debajo de la mitad de tu altura. No necesita ninguna tabla, funciona entre alturas, sexos y ascendencias donde los umbrales fijos de cintura no lo hacen, y un gran metaanálisis la encontró mejor predictora del riesgo cardiometabólico que el IMC o el perímetro de cintura por sí solos. Una relación en o por encima de 0,5 es la señal práctica para mirar el resto de la imagen.",
    },
    {
      q: "¿Cómo mido mi cintura correctamente?",
      a: "Mide en el punto medio entre tu costilla más baja y la parte superior del hueso de la cadera, no en el ombligo por reflejo, con la cinta ceñida pero sin comprimir la piel y tomada al final de una espiración normal. Mide de la misma manera cada vez, porque un método inconsistente inventa cambios que no están ahí. Una cinta blanda usada de forma constante le gana a una báscula cara usada con descuido.",
    },
    {
      q: "¿Difieren los umbrales de cintura según la etnia?",
      a: "Sí. Los puntos de corte comunes de más de 94 y 102 cm para hombres y más de 80 y 88 cm para mujeres se trazaron en gran parte a partir de poblaciones de origen europeo. Las personas de ascendencia surasiática y del este asiático cargan con mayor riesgo cardiometabólico a cinturas menores, así que los umbrales se desplazan a la baja, comúnmente a unos 90 cm para hombres y 80 cm para mujeres. La regla de la cintura-altura viaja mejor entre poblaciones.",
    },
  ],
  "grip-strength-as-a-vital-sign": [
    {
      q: "¿Por qué predice la salud la fuerza de prensión?",
      a: "La prensión es un sustituto fiel y de bajo esfuerzo de la fuerza de todo el cuerpo, la masa muscular y el sistema neuromuscular que los impulsa. Cuando ese sistema declina por el envejecimiento, la inactividad o la enfermedad, la prensión declina con él, lo que convierte una prensión en caída en uno de los primeros signos medibles de sarcopenia. En el estudio PURE, de casi 140.000 personas, predijo la mortalidad por todas las causas y cardiovascular mejor que la presión arterial sistólica.",
    },
    {
      q: "¿Cuál es una buena fuerza de prensión para mi edad?",
      a: "La prensión se lee frente a tu propia edad y sexo, nunca frente a un objetivo fijo. Alcanza su pico en la adultez temprana (aproximadamente de 46 a 51 kg en hombres y de 28 a 31 kg en mujeres), se estabiliza en los treinta y declina desde la mediana edad, así que un valor que es anodino a los 30 puede ser excelente a los 70. Los grupos de trabajo europeos señalan sarcopenia probable por debajo de unos 27 kg en hombres y 16 kg en mujeres, lo que es un aviso para una evaluación, no una puntuación de forma física.",
    },
    {
      q: "¿Cómo mido la fuerza de prensión de forma constante?",
      a: "Usa el mismo dinamómetro cada vez, sentado con el codo doblado en ángulo recto, tomando dos o tres apretones máximos por mano con un breve descanso y registrando el mejor. Vigila la tendencia móvil a lo largo de los meses en lugar de cualquier lectura suelta: la prensión baja con la fatiga, un entrenamiento duro reciente, una lesión de mano o simplemente un dispositivo distinto, así que compara lo comparable.",
    },
    {
      q: "¿Cómo mejoro mi fuerza de prensión?",
      a: "La prensión y la fuerza de todo el cuerpo que representa responden al entrenamiento de fuerza, no a apretar una pelota. Las principales guías de actividad recomiendan actividad de fortalecimiento muscular para todos los grupos musculares principales al menos dos días a la semana, junto a la actividad aeróbica, y esta es la palanca más fiable para construir y preservar la fuerza a lo largo de la vida. Consulta primero con un profesional si has estado inactivo o tienes una afección relevante.",
    },
  ],
  "weather-altitude-and-your-body": [
    {
      q: "¿Por qué está más alta mi frecuencia cardíaca en reposo con calor?",
      a: "Cuando tienes calor, tu cuerpo envía sangre a la piel para disipar el calor, así que el corazón bombea con más fuerza y más rápido para mantener la circulación estable. Un día caluroso o un dormitorio caliente pueden elevar la frecuencia cardíaca en reposo y en esfuerzo en varios latidos sin cambio alguno en la forma física. El calor también fragmenta el sueño, porque conciliar el sueño depende de que tu temperatura central baje, algo que una habitación caliente amortigua.",
    },
    {
      q: "¿Es normal una lectura de oxígeno en sangre más baja en altitud?",
      a: "Sí. Más arriba, el aire mantiene la misma fracción de oxígeno a menor presión, así que cada respiración aporta menos y el oxígeno en sangre cae —alrededor del 90 por ciento puede ser perfectamente normal a unos 2.500 m— mientras la frecuencia respiratoria y cardíaca suben para compensar. A lo largo de unos días, la aclimatación asienta en parte los números. Un dolor de cabeza que empeora con náuseas, la falta de aire en reposo o la confusión es distinto: esos son signos de alarma de enfermedad de altitud y un motivo para descender.",
    },
    {
      q: "¿Puede la calidad del aire afectar a mis lecturas de salud?",
      a: "Las partículas finas, las PM2.5, son lo bastante pequeñas como para llegar al fondo de los pulmones y cruzar al torrente sanguíneo, y la exposición se vincula con una mayor tensión cardiorrespiratoria, inflamación elevada y presión arterial más alta, con un riesgo que asciende a lo largo de todo el rango de exposición. En un día de alta contaminación, una respiración más rápida o una peor puntuación de recuperación pueden tener una causa al aire libre, sobre todo después de hacer ejercicio en él.",
    },
    {
      q: "¿Cómo debería leer mis datos cuando cambia el entorno?",
      a: "Anota el contexto —una ola de calor, un viaje a la altitud, un día con humo o esmog— igual que anotarías una cena tardía o un entrenamiento duro, para que una sola lectura impulsada por el entorno no se confunda con un problema que se está gestando. La señal que merece la pena atender es una deriva sostenida que se mantiene una vez que las condiciones vuelven a la normalidad. La enfermedad por calor y la de altitud, sin embargo, son emergencias sobre las que actuar según cómo te sientes, no según un dispositivo.",
    },
  ],
  "resting-heart-rate-through-the-day": [
    {
      q: "¿Qué muestra una curva de frecuencia cardíaca intradía que un solo número en reposo no muestra?",
      a: "Muestra cómo se comporta tu corazón, no solo hasta qué punto puede bajar al ralentí. La frecuencia cardíaca sigue un ritmo diario —más baja en el sueño profundo, subiendo antes de que despiertes, más alta y más variable a lo largo del día activo—, con el movimiento, las comidas, la cafeína y el estrés superpuestos encima. Ver la curva entera es lo que te permite distinguir una frecuencia que está alta porque subiste la escalera de una frecuencia que está alta mientras estás sentado sin moverte.",
    },
    {
      q: "¿Qué significa de verdad «elevada en reposo»?",
      a: "Significa que tu frecuencia cardíaca se sitúa por encima de tu suelo en reposo habitual mientras estás quieto y sin esforzarte. Una subida breve tras la actividad, la cafeína o el estrés es normal. Lo que lleva información es un suelo en reposo que se mantiene varios latidos por encima de tu propia línea base de dos a cuatro semanas durante un día o más, lo que puede señalar enfermedad, sobrecarga o mal sueño, y se lee con más claridad cuando la variabilidad de la frecuencia cardíaca cae y el sueño se resiente al mismo tiempo.",
    },
    {
      q: "¿Es motivo de preocupación un solo tramo alto en la curva?",
      a: "Casi nunca por sí solo. Una habitación cálida, un esfuerzo duro, una hora estresante o una comida copiosa elevan la línea brevemente. El significado vive en un cambio sostenido a lo largo de días, y en dos o tres señales inclinándose en la misma dirección, no en un pico aislado.",
    },
    {
      q: "¿Puede la curva intradía diagnosticar un problema cardíaco?",
      a: "No. Es una vista de bienestar. Puede mostrar que tu corazón late rápido o de forma inusual, pero no por qué. Un pulso irregular, o una frecuencia en reposo que se mantiene alta con falta de aire, molestias en el pecho, mareo o desmayo, es un motivo para acudir a un clínico, y solo un ECG puede confirmar un problema de ritmo.",
    },
  ],
  "heart-rate-recovery": [
    {
      q: "¿Qué es la recuperación de la frecuencia cardíaca?",
      a: "Es lo rápido que cae tu frecuencia cardíaca después de que dejas de hacer ejercicio, normalmente expresada como el número de latidos que baja en el primer minuto. Esa caída del primer minuto la impulsa sobre todo tu sistema nervioso parasimpático —el «freno» vagal— al volver a activarse. Una caída más rápida tiende a ir de la mano de una mejor forma cardiovascular; una lenta significa que el cuerpo sigue revolucionado una vez terminado el trabajo.",
    },
    {
      q: "¿Qué es un buen número de recuperación de la frecuencia cardíaca?",
      a: "Los umbrales más conocidos provienen de pruebas de esfuerzo estandarizadas: una caída en el primer minuto de 12 latidos o menos marcó un mayor riesgo a largo plazo en un gran estudio en cinta, y unos 22 latidos o menos a los dos minutos en un protocolo de recuperación de pie. Esos son umbrales de prueba clínica, no objetivos para un entrenamiento en el parque. El uso honesto del número de un dispositivo ponible es tu propia tendencia tras esfuerzos similares, no una línea fija.",
    },
    {
      q: "¿Por qué mi recuperación fue más lenta hoy?",
      a: "En un día cualquiera, una recuperación más lenta puede significar una tarde calurosa, un esfuerzo que deshidrata, una mala noche, alcohol la víspera o, sencillamente, la sesión más dura que has hecho en un tiempo. Los betabloqueantes y algunos otros medicamentos amortiguan toda respuesta de la frecuencia cardíaca, incluida esta. Una sola lectura lenta significa poco; un descenso persistente es lo que merece atención.",
    },
    {
      q: "¿No es la recuperación de la frecuencia cardíaca lo mismo que la reserva de frecuencia cardíaca?",
      a: "No, solo suenan parecido. La recuperación de la frecuencia cardíaca es el descenso posterior al ejercicio que se describe aquí. La reserva de frecuencia cardíaca es la distancia entre tu frecuencia en reposo y la máxima, usada para fijar las zonas de entrenamiento. Miden cosas distintas.",
    },
  ],
  "wrist-temperature-at-night": [
    {
      q: "¿Es la lectura de temperatura de mi dispositivo ponible mi temperatura corporal real?",
      a: "No. Es una medición de la piel en la muñeca, informada como una desviación de tu propia línea base de varias noches, no como un grado absoluto. La temperatura de la piel periférica corre más fría y oscila más que la temperatura central, moldeada por el flujo sanguíneo, la habitación y tu ropa de cama. No existe un rango de referencia clínico autorizado para una desviación de la muñeca: la banda «normal» que un dispositivo dibuja la define el fabricante y es solo una pista relativa.",
    },
    {
      q: "¿Por qué los dispositivos miden la temperatura durante la noche?",
      a: "Porque estás quieto, caliente bajo las mantas y en un entorno bastante estable durante horas, lo que hace que la lectura de la piel sea la más estable y comparable de una noche a otra. Se lee como la noche de hoy frente a tu propia línea base, no como un número que pudieras comparar con un umbral de fiebre.",
    },
    {
      q: "¿Puede una tendencia de temperatura de la muñeca decirme que tengo fiebre?",
      a: "No. No puede confirmar una fiebre, que se define frente a una temperatura medida —oral de 38,0 °C (100,4 °F) o superior— y necesita un termómetro. Una desviación del dispositivo que parece alta es una razón para tomar una lectura real, no un sustituto de ella. Tampoco puede decirte por qué una noche fue cálida: la enfermedad, una habitación cargada, el alcohol y un entrenamiento tardío se leen casi igual en la muñeca.",
    },
    {
      q: "¿Qué puede mostrar de forma útil la tendencia?",
      a: "Leída como una señal relativa, una pequeña subida sostenida durante una o dos noches puede ser un aviso temprano e inespecífico de enfermedad, sobre todo junto con una frecuencia cardíaca en reposo al alza y una variabilidad de la frecuencia cardíaca a la baja. Para quien menstrúa, un cambio constante durante parte del mes a menudo refleja la subida de temperatura de la fase lútea. Es una tendencia frente a tus propias noches, honesta sobre lo poco que significa una sola noche.",
    },
  ],
};
export default FAQ;
