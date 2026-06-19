import type { LearnMeta } from "@/content/learn";

const meta: LearnMeta = {
  ui: {
    hubKicker: "Wissen",
    hubTitle: "Gesundheitswerte, verständlich erklärt",
    hubIntro:
      "Klare, verständliche Leitfäden zu den Werten, die dein Körper produziert — was sie bedeuten, was sie beeinflusst und wann eine Veränderung Aufmerksamkeit verdient. Jede Aussage ist belegt; jeder Leitfaden verlinkt auf eine vertiefende Referenzseite in der Dokumentation.",
    allGuides: "Alle Leitfäden",
    minRead: (n) => `${n} Min. Lesezeit`,
    goDeeperLabel: "Tiefer einsteigen",
    goDeeperBody: (title) =>
      `Für die vollständige Referenz — Leitlinienbereiche, Messdetails und die komplette Quellenliste — lies die Referenzseite zu ${title.toLowerCase()} in der Dokumentation.`,
    goDeeperCta: "Referenzseite öffnen",
    footerDisclaimer:
      "Bildungsinhalt — allgemeine Informationen, keine medizinische Beratung.",
    languageLabel: "Sprache",
    docs: "Doku",
    home: "Start",
  },
  categories: {
    foundations: "Grundlagen",
    heart: "Herz & Kreislauf",
    sleep: "Schlaf & Erholung",
    metabolic: "Stoffwechselgesundheit",
    fitness: "Fitness & Langlebigkeit",
    body: "Körper & Zusammensetzung",
    mind: "Psyche & Zyklus",
  },
  articles: {
    "understanding-your-health-metrics": {
      title: "Deine Gesundheitswerte im Zusammenspiel",
      dek: "Warum eine einzelne Zahl selten die ganze Geschichte erzählt — und wie die Signale deines Körpers zusammenpassen.",
      description:
        "Ein verständlicher Leitfaden zu den alltäglichen Gesundheitswerten, die sich zu verfolgen lohnen — Herzfrequenz, Schlaf, Blutdruck, Glukose und mehr — und wie sie sich zu einem Gesamtbild fügen.",
    },
    "resting-heart-rate": {
      title: "Was dir dein Ruhepuls verrät",
      dek: "Die einfachste Zahl an deinem Handgelenk ist auch eine der ehrlichsten. So liest du sie richtig.",
      description:
        "Was ein Ruhepuls ist, was als normal gilt, was ihn nach oben oder unten verschiebt und wann eine anhaltende Veränderung ärztliche Aufmerksamkeit verdient.",
    },
    "heart-rate-variability": {
      title: "Herzfrequenzvariabilität, ohne den Hype",
      dek: "Die HRV ist mächtig und gründlich missverstanden. Ein nüchterner Blick darauf, was die Schlag-zu-Schlag-Werte bedeuten.",
      description:
        "Herzfrequenzvariabilität erklärt: Was die HRV misst, warum sie zwischen Menschen so stark schwankt, wie du deinen eigenen Trend liest und wo die Grenzen einer einzelnen Messung liegen.",
    },
    "reading-your-blood-pressure": {
      title: "Deine Blutdruckwerte richtig lesen",
      dek: "Zwei Zahlen, jede Menge Feinheiten. Was systolisch und diastolisch wirklich für deine Gesundheit bedeuten.",
      description:
        "So liest du den Blutdruck: was die beiden Zahlen bedeuten, die Leitlinienkategorien, warum die Messtechnik entscheidend ist und wann Werte eine ärztliche Abklärung erfordern.",
    },
    "sleep-consistency": {
      title: "Warum Regelmäßigkeit beim Schlaf zählt — mehr als die Dauer",
      dek: "Acht Stunden zu wechselnden Zeiten sind nicht dasselbe wie sieben nach festem Rhythmus. Das Timing ist das Signal.",
      description:
        "Schlaf erklärt: die Phasen, wie viel du wirklich brauchst, warum ein fester Rhythmus genauso wichtig ist wie die Gesamtstunden und was dein Schlaftrend offenlegen kann.",
    },
    "respiratory-rate": {
      title: "Atemfrequenz: das leiseste Vitalzeichen",
      dek: "Über deine Atemfrequenz denkst du kaum nach — genau deshalb ist eine Veränderung so aufschlussreich.",
      description:
        "Was die Atemfrequenz ist, der Normalbereich in Ruhe, warum eine nächtliche Baseline so stabil ist und warum ein anhaltender Anstieg ein frühes, beachtenswertes Signal sein kann.",
    },
    "blood-oxygen-spo2": {
      title: "Was die Blutsauerstoffsättigung verrät (und was nicht)",
      dek: "SpO₂ beruhigt, wenn sie hoch ist, und ist leicht falsch zu deuten, wenn sie absackt. Ein gelassener Leitfaden zu diesem Wert.",
      description:
        "Blutsauerstoffsättigung (SpO₂) erklärt: der Normalbereich, warum Messungen am Handgelenk schwanken, die bekannten Genauigkeitsvorbehalte und wann ein niedriger Wert Aufmerksamkeit verdient.",
    },
    "body-temperature-baseline": {
      title: "Deine Baseline-Temperatur als Signal",
      dek: "Es gibt keine einzelne „normale“ Temperatur — es gibt deine. Die Abweichung davon ist der nützliche Teil.",
      description:
        "Warum die Körpertemperatur über den Tag und zwischen Menschen schwankt, warum eine persönliche Baseline den Lehrbuchwert von 37 °C schlägt und was eine anhaltende Abweichung anzeigen kann.",
    },
    "blood-sugar-beyond-diabetes": {
      title: "Blutzucker — über Diabetes hinaus",
      dek: "Glukose ist nicht nur ein Diabeteswert. Was sie für jeden Menschen widerspiegelt — und wie der HbA1c dazupasst.",
      description:
        "Blutzucker und HbA1c für ein breites Publikum erklärt: was die Werte bedeuten, die Leitlinienbereiche und der Unterschied zwischen einer Momentaufnahme und dem Langzeitmittel.",
    },
    "vo2max-and-longevity": {
      title: "VO₂max: der Fitnesswert, der mit einem längeren Leben verknüpft ist",
      dek: "Die kardiorespiratorische Fitness ist einer der stärksten Prädiktoren dafür, wie lange du lebst. Hier ist der Grund.",
      description:
        "VO₂max erklärt: was sie misst, wie Wearables sie schätzen, warum die kardiorespiratorische Fitness so eng mit der Lebenserwartung zusammenhängt und wie du den Wert bewegst.",
    },
    "beyond-the-scale": {
      title: "Mehr als die Waage: Gewicht, BMI und Körperzusammensetzung",
      dek: "Die Waage beantwortet eine Frage. Die Körperzusammensetzung beantwortet die, auf die es dir wirklich ankommt.",
      description:
        "Warum Körpergewicht und BMI nützlich, aber grob sind, was die Körperzusammensetzung ergänzt, wie du Fett- und Magermasse-Trends liest und welche Signale für die Gesundheit zählen.",
    },
    "tracking-mood": {
      title: "Die Stimmung als Gesundheitssignal erfassen",
      dek: "Stimmung wirkt zu subjektiv zum Messen — doch ein stetiges Protokoll macht daraus einen deiner nützlichsten Trends.",
      description:
        "Warum ein einfaches, regelmäßiges Stimmungsprotokoll ein legitimer Gesundheitswert ist, wie es mit Schlaf und Aktivität zusammenspielt und wann eine anhaltend gedrückte Stimmung Unterstützung erfordert.",
    },
    "the-cycle-as-a-vital-sign": {
      title: "Der Menstruationszyklus als Vitalzeichen",
      dek: "Fachleute behandeln den Zyklus aus gutem Grund als Vitalzeichen. Was sein Rhythmus über die Gesundheit verrät.",
      description:
        "Der Menstruationszyklus als Gesundheitssignal erklärt: die vier Phasen, wie ein normaler Zyklus aussieht, was ihn verschiebt und wann eine Veränderung ärztliche Abklärung erfordert.",
    },
    "how-wearables-measure-you": {
      title: "Wie Wearables dich wirklich messen",
      dek: "Optische Sensoren, Beschleunigungssensoren, clevere Schätzungen — was die Hardware an deinem Handgelenk wirklich sehen kann und wo nicht.",
      description:
        "Wie Fitness-Wearables Herzfrequenz, Schritte, Schlaf, Blutsauerstoff und Temperatur messen — die Sensoren hinter den Zahlen, die abgeleiteten Schätzungen und die bekannten Genauigkeitsgrenzen.",
    },
    "reading-your-trends": {
      title: "Lies Trends, nicht Zahlen",
      dek: "Die nützlichste Fähigkeit beim Gesundheitstracking ist nicht, eine Zahl zu lesen — es ist, deine eigene Linie über die Zeit zu lesen.",
      description:
        "Warum deine persönliche Baseline jeden Bevölkerungsbereich schlägt, wie du einen bedeutsamen Trend von täglichem Rauschen unterscheidest und warum gleichbleibende Messbedingungen mehr zählen als Präzision.",
    },
    "steps-and-movement": {
      title: "Schritte und alltägliche Bewegung",
      dek: "Was eine tägliche Schrittzahl wirklich verrät — und warum 10.000 eine Marketingzahl war, kein Gesundheitsziel.",
      description:
        "Was tägliche Schritte über die Gesundheit verraten, die Evidenz, dass der Nutzen weit unter 10.000 beginnt, warum Bewegung über den Tag zählt und wie Schrittzahlen geschätzt werden.",
    },
    "caffeine-alcohol-and-your-readings": {
      title: "Koffein, Alkohol und deine Werte",
      dek: "Zwei alltägliche Gewohnheiten hinterlassen klare Fingerabdrücke auf deiner Herzfrequenz, deinem Schlaf und deiner Erholung. Worauf du achten solltest.",
      description:
        "Wie Koffein und Alkohol die Werte, die du verfolgst, sichtbar bewegen — Herzfrequenz, HRV, Schlaf und Glukose — und warum sie so viele schlechte Morgen erklären.",
    },
    "hydration-and-your-body": {
      title: "Hydration und dein Körper",
      dek: "Die meisten täglichen Gewichtsschwankungen sind Wasser. Ein gelassener Blick auf die Flüssigkeitsbalance — und die Wahrheit über „acht Gläser am Tag“.",
      description:
        "Was Hydration für Herzfrequenz, Gewicht und dein Befinden bedeutet, die ehrliche Evidenz zum täglichen Flüssigkeitsbedarf und wann die Flüssigkeitsbalance wirklich zählt.",
    },
    "stress-and-recovery": {
      title: "Stress und Erholung",
      dek: "Dein Körper führt Buch — in deiner Herzfrequenz, deiner HRV und deinem Schlaf. Wie du die Zeichen von Belastung und Ruhe liest.",
      description:
        "Wie sich Stress und Erholung im Ruhepuls, in der HRV und im Schlaf zeigen, die autonome Balance dahinter und warum Erholung ein aktives Signal ist, das du aufbauen kannst.",
    },
  },
};

export default meta;
