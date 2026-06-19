import type { LearnMeta } from "@/content/learn";

const meta: LearnMeta = {
  ui: {
    hubKicker: "Impara",
    hubTitle: "I parametri della salute, spiegati",
    hubIntro:
      "Guide chiare e in linguaggio semplice ai numeri che il tuo corpo produce: cosa significano, cosa li fa cambiare e quando una variazione merita attenzione. Ogni affermazione è documentata; ogni guida rimanda a una pagina di riferimento più approfondita nella documentazione.",
    allGuides: "Tutte le guide",
    minRead: (n) => `${n} min di lettura`,
    goDeeperLabel: "Approfondisci",
    goDeeperBody: (title) =>
      `Per il riferimento completo — intervalli delle linee guida, dettagli di misurazione e l'elenco integrale delle fonti — leggi la pagina di riferimento su ${title.toLowerCase()} nella documentazione.`,
    goDeeperCta: "Apri la pagina di riferimento",
    footerDisclaimer:
      "Contenuto educativo — informazioni generali, non un parere medico.",
    languageLabel: "Lingua",
    docs: "Documentazione",
    home: "Home",
  },
  categories: {
    foundations: "Fondamenti",
    heart: "Cuore e circolazione",
    sleep: "Sonno e recupero",
    metabolic: "Salute metabolica",
    fitness: "Forma fisica e longevità",
    body: "Corpo e composizione",
    mind: "Mente e ciclo",
  },
  articles: {
    "understanding-your-health-metrics": {
      title: "I tuoi parametri di salute, collegati tra loro",
      dek: "Perché un singolo numero racconta raramente tutta la storia — e come si incastrano i segnali che il tuo corpo produce.",
      description:
        "Una guida in linguaggio semplice ai parametri di salute quotidiani che vale la pena monitorare — frequenza cardiaca, sonno, pressione, glicemia e altro — e a come si compongono in un quadro unico.",
    },
    "resting-heart-rate": {
      title: "Cosa ti dice la tua frequenza cardiaca a riposo",
      dek: "Il numero più semplice al tuo polso è anche uno dei più sinceri. Ecco come leggerlo.",
      description:
        "Cos'è la frequenza cardiaca a riposo, cosa si considera normale, cosa la fa salire o scendere e quando una variazione prolungata merita l'attenzione di un medico.",
    },
    "heart-rate-variability": {
      title: "Variabilità della frequenza cardiaca, senza esagerazioni",
      dek: "La HRV è potente e molto fraintesa. Uno sguardo concreto a cosa dicono davvero i numeri battito per battito.",
      description:
        "La variabilità della frequenza cardiaca spiegata: cosa misura la HRV, perché varia così tanto tra le persone, come leggere il tuo andamento e i limiti di una singola lettura.",
    },
    "reading-your-blood-pressure": {
      title: "Leggere i numeri della pressione arteriosa",
      dek: "Due numeri, molte sfumature. Cosa significano davvero la sistolica e la diastolica per la tua salute.",
      description:
        "Come leggere la pressione: cosa significano i due numeri, le categorie delle linee guida, perché la tecnica di misurazione conta e quando le letture richiedono un controllo medico.",
    },
    "sleep-consistency": {
      title: "Perché la regolarità del sonno batte la durata",
      dek: "Otto ore a orari casuali non sono come sette su un programma costante. È l'orario il vero segnale.",
      description:
        "Il sonno spiegato: le fasi, di quanto hai davvero bisogno, perché un programma regolare conta quanto le ore totali e cosa può rivelare il tuo andamento del sonno.",
    },
    "respiratory-rate": {
      title: "Frequenza respiratoria: il parametro vitale più silenzioso",
      dek: "Quasi mai pensi al tuo ritmo respiratorio — ed è proprio per questo che una sua variazione è così informativa.",
      description:
        "Cos'è la frequenza respiratoria, l'intervallo normale a riposo, perché la linea di base notturna è così stabile e perché un aumento prolungato può essere un segnale precoce da notare.",
    },
    "blood-oxygen-spo2": {
      title: "Cosa ti dice l'ossigeno nel sangue (e cosa no)",
      dek: "La SpO₂ rassicura quando è alta ed è facile da fraintendere quando cala. Una guida pacata al numero.",
      description:
        "La saturazione dell'ossigeno nel sangue (SpO₂) spiegata: l'intervallo normale, perché le letture al polso variano, i limiti noti di accuratezza e quando un valore basso merita attenzione.",
    },
    "body-temperature-baseline": {
      title: "La tua temperatura di base come segnale",
      dek: "Non esiste un'unica temperatura 'normale' — c'è la tua. La parte utile è lo scostamento da essa.",
      description:
        "Perché la temperatura corporea varia nell'arco della giornata e tra le persone, perché una linea di base personale batte i canonici 37 °C e cosa può indicare uno scostamento prolungato.",
    },
    "blood-sugar-beyond-diabetes": {
      title: "La glicemia, oltre il diabete",
      dek: "Il glucosio non è solo un numero per il diabete. Ecco cosa riflette per tutti — e come si inserisce l'HbA1c.",
      description:
        "Glicemia ed HbA1c spiegate per tutti: cosa significano i numeri, gli intervalli delle linee guida, la differenza tra una lettura puntuale e la media a lungo termine.",
    },
    "vo2max-and-longevity": {
      title: "VO₂max: il parametro di forma fisica legato a una vita più lunga",
      dek: "La forma cardiorespiratoria è uno dei più forti predittori di quanto vivrai. Ecco perché.",
      description:
        "Il VO₂max spiegato: cosa misura, come lo stimano i dispositivi indossabili, perché la forma cardiorespiratoria è così legata alla longevità e come migliorare il numero.",
    },
    "beyond-the-scale": {
      title: "Oltre la bilancia: peso, IMC e composizione corporea",
      dek: "La bilancia risponde a una domanda. La composizione corporea risponde a quella che ti interessa davvero.",
      description:
        "Perché peso corporeo e IMC sono utili ma grossolani, cosa aggiunge la composizione corporea, come leggere gli andamenti di massa grassa e magra e quali segnali contano per la salute.",
    },
    "tracking-mood": {
      title: "Monitorare l'umore come segnale di salute",
      dek: "L'umore sembra troppo soggettivo da misurare — ma un registro costante lo trasforma in uno dei tuoi andamenti più utili.",
      description:
        "Perché un registro dell'umore semplice e costante è un parametro di salute legittimo, come interagisce con sonno e attività e quando un umore basso prolungato richiede supporto.",
    },
    "the-cycle-as-a-vital-sign": {
      title: "Il ciclo mestruale come parametro vitale",
      dek: "I medici trattano il ciclo come un parametro vitale per buone ragioni. Cosa rivela il suo ritmo sulla salute.",
      description:
        "Il ciclo mestruale spiegato come segnale di salute: le quattro fasi, com'è un ciclo normale, cosa lo modifica e quando una variazione richiede un medico.",
    },
    "how-wearables-measure-you": {
      title: "Come ti misurano davvero i dispositivi indossabili",
      dek: "Sensori ottici, accelerometri, stime ingegnose — cosa l'hardware al tuo polso può davvero vedere, e dove non arriva.",
      description:
        "Come i dispositivi indossabili per il fitness misurano frequenza cardiaca, passi, sonno, ossigeno nel sangue e temperatura — i sensori dietro i numeri, le stime derivate e i limiti noti di accuratezza.",
    },
    "reading-your-trends": {
      title: "Leggi gli andamenti, non i numeri",
      dek: "La competenza più utile nel monitoraggio della salute non è leggere un numero — è leggere la tua stessa linea nel tempo.",
      description:
        "Perché la tua linea di base personale batte qualsiasi intervallo di popolazione, come distinguere un andamento significativo dal rumore quotidiano e perché condizioni di misurazione costanti contano più della precisione.",
    },
    "steps-and-movement": {
      title: "Passi e movimento quotidiano",
      dek: "Cosa ti dice davvero un conteggio giornaliero dei passi — e perché 10.000 era un numero pubblicitario, non un obiettivo di salute.",
      description:
        "Cosa rivelano i passi giornalieri sulla salute, le evidenze secondo cui i benefici iniziano ben al di sotto dei 10.000, perché il movimento nell'arco della giornata conta e come vengono stimati i conteggi dei passi.",
    },
    "caffeine-alcohol-and-your-readings": {
      title: "Caffeina, alcol e le tue letture",
      dek: "Due abitudini quotidiane lasciano impronte chiare sulla tua frequenza cardiaca, sul sonno e sul recupero. Ecco cosa cercare.",
      description:
        "Come caffeina e alcol spostano visibilmente i parametri che monitori — frequenza cardiaca, HRV, sonno e glicemia — e perché spiegano così tante mattine storte.",
    },
    "hydration-and-your-body": {
      title: "L'idratazione e il tuo corpo",
      dek: "La maggior parte delle oscillazioni quotidiane di peso è acqua. Uno sguardo pacato al bilancio dei liquidi — e la verità su 'otto bicchieri al giorno'.",
      description:
        "Cosa fa l'idratazione per la frequenza cardiaca, il peso e come ti senti, le evidenze oneste sul fabbisogno giornaliero di liquidi e quando il bilancio dei liquidi conta davvero.",
    },
    "stress-and-recovery": {
      title: "Stress e recupero",
      dek: "Il tuo corpo tiene il conto — nella tua frequenza cardiaca, nella tua HRV e nel tuo sonno. Come leggere i segni dello sforzo e del riposo.",
      description:
        "Come stress e recupero compaiono nella frequenza cardiaca a riposo, nella HRV e nel sonno, l'equilibrio autonomico che li sottende e perché il recupero è un segnale attivo che puoi costruire.",
    },
  },
};

export default meta;
