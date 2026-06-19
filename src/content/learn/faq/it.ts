export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Devo confrontare i miei valori di salute con l'intervallo normale o con me stesso?",
      a: "Parti dal tuo punto di riferimento personale. Per quasi ogni segnale degno di essere monitorato, la variabilità tra le persone è molto più ampia delle tue oscillazioni quotidiane, quindi un numero che sembra insignificante su un grafico di popolazione può rappresentare un record personale o un campanello d'allarme per te. Usa gli intervalli pubblicati solo come verifica di buon senso, non come una classifica.",
    },
    {
      q: "Perché non dovrei reagire a una singola misurazione?",
      a: "Il corpo è rumoroso. La variabilità della frequenza cardiaca oscilla di circa il dieci percento da un giorno all'altro come puro rumore, e il peso corporeo varia di uno o due chili solo per i liquidi, quindi una singola lettura alta o bassa rientra di solito in questa normale dispersione. Ciò che conta è la direzione di una media mobile su giorni e settimane, non un singolo punto.",
    },
    {
      q: "Perché diversi miei parametri si muovono insieme nello stesso momento?",
      a: "Stanno tutti riferendo sugli stessi sistemi di fondo da angolazioni diverse. Una notte storta o l'alcol tendono ad alzare la frequenza cardiaca a riposo abbassando la HRV; l'inizio di un'infezione fa salire insieme frequenza cardiaca a riposo, frequenza respiratoria e temperatura mentre la HRV scende. Due o tre segnali che si muovono nella stessa direzione insieme danno più certezza di uno solo.",
    },
    {
      q: "I parametri di salute dei dispositivi indossabili sostituiscono la visita dal medico?",
      a: "No. Frequenza cardiaca a riposo, HRV, punteggi del sonno e tutto il resto sono indicazioni di benessere, utili per notare i cambiamenti e porre domande migliori, mai una diagnosi. Un avviso di un dispositivo, come la segnalazione di un ritmo irregolare, è uno stimolo a fare uno screening, non un risultato. Parla con un medico di qualsiasi cosa ti preoccupi.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "Qual è una frequenza cardiaca a riposo normale?",
      a: "L'intervallo classico per l'adulto è da 60 a 100 battiti al minuto, con le persone allenate alla resistenza spesso tra i 40 e i 60. Quella fascia è stata tracciata per la sicurezza clinica più che per la salute ottimale, e ampi studi rilevano un rischio che cresce in modo abbastanza costante al salire della frequenza a riposo, quindi la tendenza conta più di una singola lettura.",
    },
    {
      q: "Qual è il momento migliore per misurare la frequenza cardiaca a riposo?",
      a: "Idealmente appena svegli, prima di metterti seduto, controllare il telefono o assumere caffeina. Misurare ogni volta nelle stesse condizioni è ciò che rende il numero confrontabile, quindi una lettura costante vale molto più di una più precisa presa a caso.",
    },
    {
      q: "Perché la mia frequenza cardiaca a riposo è salita all'improvviso per qualche giorno?",
      a: "Un aumento improvviso e inspiegabile di diversi battiti che persiste per qualche giorno è il corpo che segnala in sordina qualcosa, spesso l'inizio di un'infezione, sonno scarso sommato allo stress, disidratazione, alcol la sera prima, o troppo allenamento e poco recupero. Anche caffeina, febbre, caldo, ansia e alcuni farmaci la fanno salire.",
    },
    {
      q: "Quando devo preoccuparmi della mia frequenza cardiaca a riposo?",
      a: "Una frequenza a riposo costantemente sopra i 100 senza spiegazione evidente, una frequenza bassa associata a giramenti di testa, svenimenti o affanno, o un battito irregolare ricorrente meritano di essere segnalati a un medico. Un avviso di ritmo irregolare da un dispositivo è uno stimolo a fare uno screening, non una diagnosi; solo un ECG può confermare un problema di ritmo.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "Qual è una buona HRV?",
      a: "Non esiste un numero buono universale. La variabilità della HRV tra le persone è enorme, quindi il tuo livello di base sano potrebbe essere un terzo di quello di un altro e andare bene per entrambi. La HRV cala anche nettamente con l'età e dipende dalla durata della registrazione e dalla postura, quindi i valori assoluti non sono trasferibili tra persone o dispositivi. Leggi la tua tendenza, non una classifica.",
    },
    {
      q: "Perché la mia HRV cambia così tanto da una notte all'altra?",
      a: "La HRV è estremamente sensibile alle condizioni. Postura, frequenza respiratoria, ora del giorno, l'ultimo pasto, caffeina, malattia, sonno e stress acuto la spostano tutti, e l'alcol la riduce in modo proporzionale alla dose. Oscillazioni di circa il dieci percento da una notte all'altra sono normali e di per sé non significano nulla, ed è per questo che una media mobile su sette giorni è l'unità di misura onesta da leggere.",
    },
    {
      q: "Perché la mia HRV è bassa dopo aver bevuto alcol?",
      a: "L'alcol riduce la HRV in modo proporzionale alla dose, più intensamente la notte stessa e la mattina dopo, spesso mentre frequenza cardiaca e pressione sembrano ancora del tutto normali. Un calo di una notte dopo un drink, una cena tardiva o un allenamento intenso è prevedibile e si recupera da solo; annotare i fattori confondenti evidenti è ciò che ti permette di distinguerlo da un calo prolungato e significativo.",
    },
    {
      q: "Quando una HRV bassa conta davvero?",
      a: "Da sola la HRV è troppo rumorosa per allarmarsi. Indica qualcosa quando un calo prolungato sotto il tuo livello di base personale arriva insieme a una frequenza cardiaca a riposo in salita e a una frequenza respiratoria notturna più alta, un debole segnale precoce di malattia o sovraffaticamento. Una tendenza in calo con sintomi come affanno o palpitazioni, o ripetute segnalazioni di ritmo irregolare, è un motivo per consultare un medico.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "Cosa significano i due numeri della pressione sanguigna?",
      a: "Il numero sistolico in alto è la pressione nelle arterie nell'istante in cui il cuore si contrae e spinge fuori il sangue; il numero diastolico sotto è la pressione residua mentre il cuore si rilassa e si riempie di nuovo tra un battito e l'altro. Entrambi si misurano in millimetri di mercurio ed entrambi comportano un rischio indipendente, quindi nessuno dei due è quello importante.",
    },
    {
      q: "Quale pressione sanguigna è considerata alta?",
      a: "Entrambi i principali organismi che redigono le linee guida concordano che l'ipertensione come malattia inizia a 140/90 misurata in ambulatorio. Differiscono sulle etichette al di sotto: il quadro statunitense chiama 130-139 su 80-89 ipertensione di Stadio 1, mentre quello europeo definisce gli stessi numeri semplicemente elevati. Il rischio cresce in modo continuo da circa 115/75 in su, senza una linea netta sotto la quale svanisca.",
    },
    {
      q: "Come misuro correttamente la pressione sanguigna a casa?",
      a: "Stai seduto in tranquillità per cinque minuti, con la schiena sostenuta e i piedi appoggiati, il braccio all'altezza del cuore e un bracciale da braccio della misura giusta. Evita caffeina, fumo e di parlare prima. La tecnica sposta il numero più di quasi tutto ciò che accade dentro di te quel giorno, e le medie fuori dall'ambulatorio su più giorni sono lo standard affidabile, con l'ipertensione a domicilio stimata intorno a 135/85.",
    },
    {
      q: "Quando una lettura di pressione alta è un'emergenza?",
      a: "Una singola lettura alta non è un'emergenza; misura di nuovo dopo un minuto. Se resta a 180/120 o oltre senza sintomi, contatta tempestivamente il tuo medico. Se è 180/120 o superiore con dolore al petto, affanno, un cambiamento neurologico o della vista, o un forte mal di testa, trattala come un'emergenza e chiama i servizi di emergenza.",
    },
  ],
  "sleep-consistency": [
    {
      q: "Di quante ore di sonno hanno davvero bisogno gli adulti?",
      a: "Le indicazioni nazionali collocano gli adulti tra i 18 e i 64 anni a 7-9 ore a notte e gli adulti più anziani a 7-8, con una soglia minima condivisa di almeno 7 ore in modo regolare. La relazione è a forma di U piuttosto che del tipo più-è-meglio: sia un sonno abitualmente corto sia uno abitualmente molto lungo comportano un rischio associato.",
    },
    {
      q: "La regolarità del sonno è più importante della durata?",
      a: "Contano entrambe, e l'orario può contare quanto la durata. In un'ampia coorte, la regolarità degli orari del sonno ha predetto la mortalità almeno con la stessa forza della durata, anche tenendo conto delle ore dormite. Due persone possono registrare ore identiche, e quella che le registra alla stessa ora ogni notte sta misurabilmente meglio.",
    },
    {
      q: "Posso recuperare il sonno perso nel fine settimana?",
      a: "Solo in parte. Il debito di sonno è una somma progressiva di notti in cui hai dormito poco, e il recupero da esso è parziale e non lineare, quindi un lungo fine settimana non annulla del tutto diverse notti ridotte. Un orario costante batte il tentativo di ripagare il debito in un'unica volta.",
    },
    {
      q: "Le fasi di sonno profondo e REM del mio dispositivo sono accurate?",
      a: "Sii scettico riguardo alla suddivisione in fasi. I dispositivi di consumo stimano la ripartizione tra sonno profondo, REM e leggero con solo una concordanza da discreta a moderata rispetto allo standard di laboratorio clinico, e tendono a sovrastimare quanto hai dormito. Il tempo totale di sonno e l'ora in cui vai a letto sono molto più affidabili di qualsiasi percentuale di sonno profondo; tratta le fasi come una tendenza personale approssimativa.",
    },
  ],
  "respiratory-rate": [
    {
      q: "Qual è una frequenza respiratoria normale?",
      a: "L'intervallo standard a riposo per l'adulto è da 12 a 20 respiri al minuto. Quella fascia è ampia, quindi il numero acquista valore in rapporto al tuo valore abituale piuttosto che rispetto all'intervallo di popolazione. I bambini respirano più velocemente e gli atleti di resistenza allenati tendono a stare verso il limite inferiore.",
    },
    {
      q: "Perché la frequenza respiratoria si misura di notte e non durante il giorno?",
      a: "Da svegli, la frequenza respiratoria è uno dei numeri più dipendenti dallo stato che il corpo produce; parlare, muoversi, le emozioni e persino la consapevolezza di essere misurati la spostano tutti, quindi una lettura puntuale diurna è quasi priva di significato. Nel sonno quegli influssi vengono meno e la tua frequenza notturna si assesta su un valore notevolmente stabile, il che rende facile notare uno scostamento reale.",
    },
    {
      q: "Cosa significa se la mia frequenza respiratoria notturna aumenta?",
      a: "Un aumento prolungato di circa tre respiri al minuto sopra il tuo valore notturno può segnalare che qualcosa si sta sviluppando, spesso prima che ti senta male. Il segnale è generico per le infezioni e ti dice che il corpo sta lavorando di più, non cosa non va. Anche cose ordinarie come un allenamento intenso a tarda ora, l'alcol o una stanza calda e poco arieggiata possono farla salire.",
    },
    {
      q: "Quando una frequenza respiratoria è un'emergenza medica?",
      a: "Una frequenza sopra 25 al minuto insieme ad affanno, confusione o un valore basso di ossigeno nel sangue richiede attenzione medica tempestiva. Un respiro lento e superficiale è la direzione più pericolosa, in particolare la depressione respiratoria causata da oppioidi o sedativi; se qualcuno respira molto lentamente, è difficile da svegliare o ha le labbra bluastre, trattala come un'emergenza e chiedi aiuto.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "Qual è un livello normale di ossigeno nel sangue?",
      a: "Per un adulto sano che respira aria ambiente a livello del mare, la SpO2 si colloca tra il 95 e il 100 percento, con la maggior parte delle letture raggruppate tra il 96 e il 99. Il limite inferiore si sposta con le circostanze, quindi circa il 90 percento può essere normale in quota, e le persone con malattie polmonari croniche vivono con un livello di base personale più basso. Non c'è premio sopra la fascia; più alto non è meglio.",
    },
    {
      q: "Perché la lettura di SpO2 al polso è bassa?",
      a: "Una singola lettura bassa è più spesso un artefatto che un'emergenza. I sensori da polso stanno più lontani da un letto arterioso pulsante e devono fare i conti con il movimento e una vestibilità più lasca, e mani fredde, un cinturino allentato, lo smalto per unghie o la luce ambientale abbassano il numero. Rimisura con la mano calda, ferma e ben irrorata prima di fidarti di un calo.",
    },
    {
      q: "Posso usare la SpO2 per rilevare le apnee notturne?",
      a: "Le ripetute desaturazioni notturne fanno parte di come si fa lo screening delle apnee notturne, quindi un dispositivo che le segnala può essere un primo indizio, ma non è una diagnosi. Un russamento intenso con pause osservate, o un sonno non ristoratore con sonnolenza diurna, meritano di essere segnalati a un medico per una valutazione adeguata.",
    },
    {
      q: "I pulsossimetri sono meno accurati sulla pelle più scura?",
      a: "Sì. I pulsossimetri possono sovrastimare la reale saturazione di ossigeno nelle persone con pelle più scura, riportando un numero rassicurante mentre la saturazione effettiva è più bassa, una discrepanza documentata nei dati ospedalieri e riesaminata dalle autorità di regolamentazione statunitensi. Una lettura dall'aspetto normale non dovrebbe mai prevalere su affanno, confusione o la semplice sensazione che qualcosa non vada.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "37 gradi Celsius è ancora la temperatura corporea normale?",
      a: "È una vecchia media che i dati moderni hanno spostato verso il basso. Un'ampia revisione ha collocato la media della popolazione a 36,59 °C, con un intervallo orale normale di circa 35,7-37,4 °C, abbastanza ampio da far stare due persone sane a quasi due gradi di distanza. Una lettura di 36,7 °C rientra pienamente nella norma, non è al di sotto.",
    },
    {
      q: "Perché la mia temperatura cambia nell'arco della giornata?",
      a: "La temperatura segue una curva circadiana, oscillando di circa mezzo grado tra il punto più basso nelle prime ore del mattino, all'incirca tra le 4 e le 8, e il picco nella prima serata, intorno alle 18-20. Una lettura serale che sembra leggermente alta è spesso solo il normale picco quotidiano, ed è per questo che dovresti confrontare letture prese alla stessa ora del giorno e nello stesso punto.",
    },
    {
      q: "La temperatura cutanea del dispositivo è uguale alla temperatura corporea?",
      a: "No. La temperatura cutanea di un dispositivo non è la temperatura corporea centrale; è lo scostamento notturno dal tuo livello di base calcolato su più notti, senza un intervallo clinico di riferimento. Usata bene può suggerire uno spostamento sub-febbrile prima che arrivino i sintomi, ma qualsiasi preoccupazione per la febbre va confermata con una vera misurazione orale.",
    },
    {
      q: "Quale temperatura è considerata febbre e quando dovrei rivolgermi a un medico?",
      a: "La febbre è una temperatura orale di 38,0 °C o superiore. Negli adulti i sintomi e la loro durata di solito contano più del valore esatto, ma rivolgiti a un medico intorno ai 39,4 °C, o per qualsiasi febbre con affanno, dolore al petto, forte mal di testa, confusione, rigidità del collo o un'eruzione cutanea. La febbre in un neonato sotto i tre mesi richiede sempre una valutazione urgente.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "Qual è una glicemia a digiuno normale?",
      a: "Sotto 100 mg/dL (sotto 5,6 mmol/L) è normale secondo l'American Diabetes Association, con 100-125 come fascia del prediabete; l'OMS apre invece il prediabete a 110. Entrambe condividono una soglia per il diabete di 126 mg/dL o superiore. Una singola lettura anomala non diagnostica nulla; la conferma richiede un test ripetuto in un giorno diverso.",
    },
    {
      q: "Qual è la differenza tra una lettura di glicemia e l'HbA1c?",
      a: "Una lettura di glicemia a digiuno o dopo il pasto è una fotografia, vera per l'istante in cui è stata campionata e facilmente influenzata dalla cena della sera prima o da un raffreddore in arrivo. L'HbA1c è un time-lapse, che riflette la tua glicemia media sulla durata di vita di circa due o tre mesi di un globulo rosso. Sono più utili lette fianco a fianco.",
    },
    {
      q: "Perché la mia glicemia mattutina è più alta dopo una brutta notte di sonno?",
      a: "Anche una sola notte di privazione parziale di sonno riduce in modo misurabile la sensibilità all'insulina, e la tolleranza al glucosio cala nell'arco della giornata, così uno stesso pasto produce un picco più alto la sera. Una notte storta o una cena tardiva e abbondante sono una ragione plausibile per un'anomalia isolata della mattina dopo, e di per sé non sono prova di nulla.",
    },
    {
      q: "Quando una lettura di glicemia è pericolosa?",
      a: "Una glicemia sotto 70 mg/dL (sotto 3,9 mmol/L) è un avviso di ipoglicemia; tratta con carboidrati a rapido assorbimento e ricontrolla dopo 15 minuti, e sotto 54 mg/dL serve un intervento immediato. Una glicemia molto alta e prolungata con sete, minzione frequente, vomito, respiro rapido o pensiero alterato richiede cure tempestive. Queste non sono autodiagnosi; parla con un medico.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "Cos'è il VO2max e perché è importante?",
      a: "Il VO2max è la velocità massima con cui il tuo corpo può assumere e utilizzare ossigeno durante l'esercizio intenso, misurata in millilitri di ossigeno per chilogrammo al minuto. Cattura l'intera catena di trasporto dell'ossigeno ed è uno dei più forti singoli predittori di quanto a lungo vivrai, con ogni incremento di forma fisica legato a un rischio di morte significativamente più basso.",
    },
    {
      q: "Quanto è accurato il VO2max del mio orologio?",
      a: "Il tuo dispositivo lo stima anziché misurarlo, ricavando un valore dalla relazione tra la tua frequenza cardiaca e il tuo passo, basandosi su una frequenza cardiaca massima presunta. Il valore assoluto può essere lontano di qualche punto, e terreno, caldo e vestibilità lo confondono ulteriormente. Il modo onesto di leggerlo è come una linea di tendenza: una salita costante nell'arco di settimane è reale.",
    },
    {
      q: "Qual è un buon VO2max per la mia età?",
      a: "Il VO2max si interpreta come un percentile all'interno della tua fascia di età e sesso, mai rispetto a un obiettivo fisso. Gli uomini ottengono valori di circa il 15-20 percento più alti delle donne alla stessa età, e la forma fisica cala con l'età, quindi un valore eccellente a 60 anni sarebbe insignificante a 25. Più di dove ti collochi conta in quale direzione ti stai muovendo.",
    },
    {
      q: "Come miglioro il mio VO2max?",
      a: "La forma fisica aerobica cresce con un allenamento costante. L'obiettivo settimanale comune alle principali linee guida è di 150-300 minuti di attività moderata o 75-150 minuti di attività vigorosa, più il rafforzamento muscolare almeno due volte a settimana, con il recupero integrato. Un allenamento regolare dimezza all'incirca il naturale declino legato all'età. Se sei stato inattivo o hai una condizione cardiaca, polmonare o metabolica, consulta un medico prima di iniziare un esercizio vigoroso.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Perché l'IMC è una misura limitata della salute?",
      a: "L'IMC è un indicatore di adiposità economico e ripetibile, ma non distingue il muscolo dal grasso, così una persona muscolosa può finire nella fascia del sovrappeso mentre un anziano che ha perso massa muscolare si colloca comodamente nella norma. Ignora anche dove si trova il grasso, e i suoi valori soglia sono stati tracciati su popolazioni perlopiù europee e comportano un rischio maggiore a IMC più bassi per le persone di origine sud e est asiatica.",
    },
    {
      q: "Perché dove accumulo il grasso conta più del mio peso?",
      a: "Il grasso intorno alla vita, stipato tra gli organi addominali, è metabolicamente molto più dannoso del grasso su fianchi e cosce e predice diabete, ipertensione e rischio cardiovascolare indipendentemente dall'IMC. Una semplice regola pratica valida tra i sessi e le diverse origini è tenere il girovita sotto la metà della propria altezza.",
    },
    {
      q: "Perché il mio peso aumenta da un giorno all'altro?",
      a: "Il peso corporeo oscilla di uno o due chili nell'arco di una giornata normale e da un giorno all'altro per idratazione, cibo ancora in transito e sale soltanto, nulla di tutto ciò è grasso. Osserva una media mobile su sette giorni e il rumore si annulla, lasciando la linea che significa davvero qualcosa. Lo stesso vale per una percentuale di grasso corporeo data da una bilancia.",
    },
    {
      q: "Quanto peso devo perdere per migliorare la mia salute?",
      a: "Negli adulti in sovrappeso o con obesità, una perdita sostenuta di appena il 5-10 percento del peso corporeo migliora in modo significativo glicemia, pressione e lipidi, un obiettivo molto migliore di qualsiasi singolo numero sul quadrante. Un cambiamento modesto e duraturo è l'obiettivo da inseguire, più che un numero clamoroso.",
    },
  ],
  "tracking-mood": [
    {
      q: "Che senso ha monitorare il mio umore?",
      a: "Una singola registrazione è un'opinione; qualche centinaio di registrazioni sono una tendenza, e una tendenza è un dato. Annotata con costanza per settimane, una semplice scala dell'umore fa emergere schemi che nessun singolo giorno rivela, come una lenta discesa lungo un periodo stressante, il sollevamento affidabile dopo l'esercizio, o un calo che arriva con una cadenza mensile prevedibile.",
    },
    {
      q: "Come dovrei registrare il mio umore perché sia utile?",
      a: "La costanza è l'abitudine più utile di tutte: stessa scala, stessa ora del giorno, ogni giorno. L'auto-valutazione è sensibile all'ora del giorno, agli eventi recenti e a come hai dormito, quindi una lettura isolata è rumorosa. Misurato allo stesso modo, l'oscillazione quotidiana si media e la direzione di fondo diventa leggibile.",
    },
    {
      q: "Qual è un punteggio preoccupante in un questionario sull'umore?",
      a: "Negli strumenti validati, un WHO-5 pari o inferiore al 50 percento indica un benessere scarso, e un punteggio totale del PHQ-9 o del GAD-7 di 10 o più è la soglia d'azione standard. Sono strumenti concordanti e ben consolidati, ma un risultato positivo è uno stimolo a parlare con un professionista, non una diagnosi che puoi fare a casa.",
    },
    {
      q: "Quando un umore basso dovrebbe spingermi a chiedere aiuto?",
      a: "Quando persiste: una tendenza in discesa che dura due settimane o più, o che inizia a interferire con la vita di tutti i giorni, è un motivo per parlare con un medico o un professionista della salute mentale, e non devi aspettare che ti sembri grave. Qualsiasi pensiero di farti del male è di per sé un motivo per contattare immediatamente il numero di emergenza locale o un servizio di crisi.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Perché il ciclo mestruale è considerato un parametro vitale?",
      a: "Gli organismi professionali chiedono ai medici di trattare il ciclo come trattano polso, pressione e temperatura, perché è un ritmo ricorrente che resta stabile quando le cose vanno bene e quindi un suo cambiamento porta informazioni. La lunghezza e la regolarità del ciclo sono una finestra accessibile sulla salute riproduttiva e generale.",
    },
    {
      q: "Qual è una lunghezza normale del ciclo mestruale?",
      a: "Valgono due intervalli affidabili. La fascia rivolta alle pazienti descrive i normali cicli sani dell'adulto come 21-35 giorni, mentre il quadro di screening clinico è 24-38 giorni. Una variazione di circa una settimana da un mese all'altro è ordinaria, e la fase luteale è l'ancora relativamente costante, con la maggior parte della variazione di lunghezza che risiede nella fase follicolare.",
    },
    {
      q: "Posso affidarmi a un'app di monitoraggio del ciclo come contraccettivo?",
      a: "No. Le previsioni algoritmiche del ciclo di qualsiasi app, dispositivo indossabile o apparecchio non sono un metodo contraccettivo. Le previsioni basate sui valori predefiniti di popolazione sono inaffidabili, il momento dell'ovulazione varia molto anche in chi ha cicli regolari, e la perimenopausa rende di nuovo i cicli imprevedibili. Chi usa la consapevolezza della fertilità dovrebbe usare un metodo validato e correttamente insegnato, non una singola data prevista.",
    },
    {
      q: "Quando dovrei consultare un medico riguardo al mio ciclo?",
      a: "Segnalalo a un medico quando i cicli cadono costantemente fuori dall'intervallo tipico, con intervalli più brevi di circa 21 giorni o più lunghi di circa 45, o quando c'è un marcato cambiamento prolungato rispetto al tuo schema abituale. Un'assenza di 90 giorni o più, un sanguinamento che dura più di 7 giorni o che impregna un assorbente più spesso di ogni una o due ore, e i sanguinamenti tra le mestruazioni meritano tutti una valutazione.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "Come fa un dispositivo indossabile a misurare la mia frequenza cardiaca?",
      a: "La maggior parte usa la fotopletismografia: un LED verde proietta luce nella pelle, il sangue ne assorbe una parte, e un sensore conta le pulsazioni man mano che il volume di sangue sale e scende a ogni battito. Funziona bene a riposo ma fatica con il movimento, ed è per questo che la frequenza cardiaca al polso durante gli intervalli o il sollevamento pesi è la lettura meno affidabile che la maggior parte delle persone possiede. Una fascia toracica resta accurata in movimento.",
    },
    {
      q: "Come fa il mio orologio a conoscere le mie fasi di sonno?",
      a: "Non vede il tuo cervello. Deduce il sonno da quanto poco ti muovi, spesso combinato con la frequenza cardiaca e la sua variabilità battito-battito, poi etichetta la notte in leggero, profondo e REM. Rispetto allo standard di laboratorio clinico, i dispositivi sono abbastanza bravi a distinguere addormentato o sveglio e molto più deboli su quale fase, quindi leggi l'ora di addormentamento e la durata totale con fiducia e tratta le fasi colorate come una stima.",
    },
    {
      q: "Le letture dei dispositivi indossabili sono accurate?",
      a: "Gran parte di ciò che un dispositivo ti mostra è una stima, non una misurazione di laboratorio. La frequenza cardiaca ottica, le fasi di sonno dedotte, la SpO2 al polso e ogni punteggio di recupero o prontezza sono modelli costruiti su pochi segnali reali, accurati abbastanza da rivelare i cambiamenti nel tempo ma raramente abbastanza precisi da trattare un singolo valore come verità assoluta. Leggili come relativi, non assoluti.",
    },
    {
      q: "Cosa misurano in realtà i punteggi di recupero e prontezza?",
      a: "Non sono affatto misurati; sono modelli proprietari che fondono flussi grezzi dei sensori, tipicamente HRV notturna, frequenza cardiaca a riposo e sonno, con la tua età, il tuo peso e la tua storia per produrre un singolo valore. Non hanno un intervallo clinico di riferimento e non sono standardizzati tra i dispositivi, quindi leggili come uno stimolo quotidiano, non come una misurazione clinica.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Perché il mio livello di base personale è migliore dell'intervallo normale?",
      a: "Una fascia di riferimento è costruita per segnalare la piccola frazione di persone che si collocano molto al di fuori della dispersione tipica; non è mai stata pensata per dirti se oggi è una buona giornata. Poiché la variabilità tra le persone è ampia, una frequenza cardiaca a riposo di 58 appare insignificante rispetto alla fascia dei manuali ma è un chiaro aumento di sei battiti se il tuo livello di base è 52, un cambiamento che l'intervallo di popolazione nasconde del tutto.",
    },
    {
      q: "Come distinguo un segnale reale dal rumore casuale?",
      a: "Il rumore è una lettura vicina al limite del tuo intervallo abituale, o un piccolo spostamento che rientra il giorno dopo. Il segnale è una direzione che persiste: uno spostamento di più giorni ben oltre la tua dispersione abituale, o una lenta deriva nella media mobile nell'arco di settimane. Una media mobile leviga la dispersione, e un cambiamento più grande di diverse volte rispetto alla tua oscillazione quotidiana abituale merita attenzione.",
    },
    {
      q: "Quanto tempo prima che un livello di base sia affidabile?",
      a: "Una misurazione è un punto senza contesto. Un nuovo segnale ha bisogno di un paio di settimane di letture costanti prima che un singolo numero significhi qualcosa, perché solo allora il rumore quotidiano si è mediato in un livello di base su cui puoi davvero contare.",
    },
    {
      q: "Perché misurare nelle stesse condizioni conta così tanto?",
      a: "Una tendenza è onesta solo se le condizioni che la generano restano costanti. La frequenza cardiaca a riposo al risveglio è ben al di sotto della stessa frequenza dopo il caffè e le scale, e il peso prima di colazione è di un chilo inferiore allo stesso corpo dopo cena. Un dispositivo leggermente imperfetto usato sempre allo stesso modo batte uno migliore usato in modo disordinato.",
    },
  ],
  "steps-and-movement": [
    {
      q: "Da dove viene l'obiettivo dei 10.000 passi?",
      a: "Non è mai stato una scoperta. Risale a un contapassi giapponese commercializzato intorno alle Olimpiadi di Tokyo del 1964, il cui nome significava contapassi da diecimila passi, scelto in parte perché il carattere per 10.000 ricorda una persona che cammina e in parte perché era un numero tondo e memorabile per vendere un dispositivo. Trattalo come folklore, non come una linea guida.",
    },
    {
      q: "Di quanti passi al giorno ho davvero bisogno?",
      a: "Gran parte del beneficio sulla mortalità si raggiunge ben sotto i 10.000. Gli studi mostrano i tassi di mortalità calare man mano che i passi aumentano, con la curva che si appiattisce intorno ai 6.000-8.000 passi al giorno per gli adulti più anziani e agli 8.000-10.000 per i più giovani. La curva si appiattisce, non si inverte, quindi camminare di più non è un problema, semplicemente aggiunge meno per ogni passo.",
    },
    {
      q: "È meglio camminare tutto in una volta o nell'arco della giornata?",
      a: "Distribuire il movimento nell'arco della giornata aiuta. Lo stare seduti a lungo senza interruzioni è sempre più considerato un fattore di rischio a sé, in qualche misura indipendente dal fatto che ci si alleni anche, ed è per questo che le indicazioni attuali abbinano muoversi di più a stare seduti di meno. Qualche minuto di cammino ogni ora, le scale e una passeggiata dopo i pasti contribuiscono tutti.",
    },
    {
      q: "Cosa non mi dice un conteggio dei passi sulla mia salute?",
      a: "È un misuratore di volume, non un test di forma fisica. Non dice nulla sull'intensità o sulla forza, non sa distinguere un miglio in salita a passo svelto da passi lenti per la cucina, e non misura la forma cardiorespiratoria, uno dei più forti predittori di salute a lungo termine. I passi appartengono a un quadro insieme ad altri segnali, non su un piedistallo.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "Come influenza la caffeina la mia frequenza cardiaca e la mia pressione?",
      a: "La caffeina blocca l'adenosina e lascia l'acceleratore simpatico correre più libero, così la frequenza cardiaca sale e la pressione aumenta temporaneamente, un effetto più marcato nelle persone che non la consumano regolarmente. Un caffè un'ora prima di misurare può far salire sia la frequenza cardiaca a riposo sia la pressione abbastanza da notarlo.",
    },
    {
      q: "Il caffè del pomeriggio influisce davvero sul mio sonno?",
      a: "Spesso più di quanto tu possa percepire. L'emivita della caffeina è comunemente di circa cinque ore, quindi una tazza pomeridiana ha ancora metà della sua dose in circolo all'ora di andare a letto. In uno studio controllato, una dose equivalente a un caffè forte assunta sei ore prima di coricarsi ha ridotto in modo misurabile il tempo totale di sonno, anche se i partecipanti sottostimavano il disturbo.",
    },
    {
      q: "Perché la mia HRV è bassa e la frequenza cardiaca alta dopo aver bevuto?",
      a: "Mentre il corpo smaltisce l'alcol durante la notte il versante simpatico resta attivo, così la frequenza cardiaca a riposo rimane elevata e la HRV scende, con quantità maggiori che producono effetti più grandi e duraturi. È per questo che un singolo bicchiere a cena può abbassare in sordina il tuo punteggio di recupero mentre tu dormi attraverso tutto questo.",
    },
    {
      q: "Questo significa che dovrei rinunciare a caffeina e alcol?",
      a: "Non necessariamente. Il valore sta nell'attribuzione, non nell'astinenza. Osservare i tuoi dati mostra quanto tardi è troppo tardi per la caffeina prima che il sonno si logori e quanto alcol serve prima che la frequenza cardiaca notturna salga, così smetti di scambiare un calo prevedibile e temporaneo per un segno che qualcosa non va.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Ho davvero bisogno di otto bicchieri d'acqua al giorno?",
      a: "Non c'è una solida base scientifica per una regola universale degli otto bicchieri; le revisioni che hanno rintracciato l'origine dell'affermazione non hanno trovato prove credibili a sostegno. Gli organismi autorevoli forniscono valori di riferimento di popolazione per l'acqua totale da tutte le fonti, all'incirca 2-2,7 litri al giorno per le donne e 2,5-3,7 per gli uomini, e sottolineano che i bisogni variano molto con corporatura, attività, clima e dieta.",
    },
    {
      q: "Come faccio a sapere se bevo abbastanza?",
      a: "Per la maggior parte delle persone sane in una giornata ordinaria, i segnali del corpo sono guide ragionevoli. La sete è un sensore reale e funzionante, e bere fino a soddisfare la sete mantiene la maggior parte degli adulti sani adeguatamente idratati. Il colore dell'urina è una verifica casalinga approssimativa: paglierino chiaro suggerisce che vai bene, costantemente scuro suggerisce che potresti bere di più.",
    },
    {
      q: "Perché la disidratazione fa salire la mia frequenza cardiaca?",
      a: "Quando perdi abbastanza liquidi da far calare il volume del sangue, il cuore compensa battendo più velocemente per mantenere stabile la circolazione, così la disidratazione fa salire la frequenza cardiaca a riposo e sotto sforzo. Anche lievi deficit di liquidi dell'uno-due percento della massa corporea bastano a intaccare l'umore, aumentare la percezione dello sforzo e compromettere la concentrazione.",
    },
    {
      q: "Si può bere troppa acqua?",
      a: "Sì. Bere ben oltre il bisogno, più spesso durante prove di resistenza, può diluire il sodio nel sangue in una condizione pericolosa chiamata iponatriemia, i cui primi segni si sovrappongono a quelli della disidratazione. Chi ha malattie cardiache, renali o epatiche, o assume farmaci che influenzano l'equilibrio dei liquidi, può avere un obiettivo deliberatamente limitato e dovrebbe seguire le indicazioni cliniche più di qualsiasi regola generale.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "Come si manifesta lo stress nei miei dati di salute?",
      a: "Lo stress è l'acceleratore simpatico tenuto premuto, e alimenta molti parametri da un'unica manopola, così si muovono insieme. La frequenza cardiaca a riposo sale, la HRV notturna scende, il sonno diventa più leggero e frammentato, e la frequenza respiratoria a volte è elevata. Nessun singolo segnale è decisivo, ma letti come un insieme rispetto al tuo livello di base sono difficili da contestare.",
    },
    {
      q: "Qual è la differenza tra stress acuto e cronico?",
      a: "Gli stressori acuti come un allenamento intenso o una scadenza spostano i parametri e, dopo una o due notti di vero riposo, tutto torna al livello di base; quel ritorno è il punto. La preoccupazione è quando il ritorno smette di arrivare e il corpo paga il costo cumulativo del carico allostatico, leggibile nei dati come un livello di base che si è spostato in sordina ed è rimasto spostato.",
    },
    {
      q: "Il recupero è solo l'assenza di stress?",
      a: "No. Il recupero è un processo parasimpatico attivo, il freno vagale che si reinnesta, la frequenza cardiaca che cala e il sonno profondo che svolge il lavoro di riparazione, ed è per questo che si manifesta come un segnale positivo anziché come numeri che semplicemente si zittiscono. Questo significa che può essere sostenuto, non solo atteso, attraverso un sonno regolare e protetto, un leggero movimento aerobico e la luce del giorno.",
    },
    {
      q: "Quando dovrei prendere sul serio uno stress prolungato?",
      a: "Questi segnali possono indicare uno sforzo prolungato ma non possono dirti perché, e non sostituiscono come ti senti. Uno stress che disturba il tuo sonno, la concentrazione o il piacere delle cose ordinarie per settimane merita di essere discusso con un medico o un professionista della salute mentale, qualunque cosa dicano i numeri. Se il disagio ti sembra mai opprimente o hai pensieri di autolesionismo, contatta subito il numero di emergenza locale o un servizio di crisi.",
    },
  ],
};
export default FAQ;
