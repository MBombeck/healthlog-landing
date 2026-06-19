export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Devo confrontare i miei valori con l'intervallo normale o con me stesso?",
      a: "Parti sempre dai tuoi valori abituali. Per quasi ogni segnale che vale la pena seguire, le differenze da persona a persona sono molto più ampie delle tue oscillazioni di giorno in giorno: un numero che su un grafico di popolazione sembra del tutto banale può essere un tuo record personale o, al contrario, un campanello d'allarme. Gli intervalli pubblicati servono come controllo di buon senso, non come una classifica.",
    },
    {
      q: "Perché non dovrei reagire a una sola misurazione?",
      a: "Il corpo fa rumore. La variabilità della frequenza cardiaca balla intorno al dieci percento da un giorno all'altro per puro caso, e il peso si sposta di uno o due chili solo per i liquidi: una singola lettura alta o bassa rientra quasi sempre in questa normale dispersione. Quello che conta è in che direzione va una media mobile su giorni e settimane, non il singolo puntino.",
    },
    {
      q: "Perché diversi parametri si muovono insieme tutti nello stesso momento?",
      a: "Raccontano tutti gli stessi sistemi di fondo, ognuno da una sua angolazione. Una notte storta o l'alcol tendono ad alzare la frequenza cardiaca a riposo e ad abbassare la HRV; l'inizio di un'infezione fa salire insieme frequenza a riposo, frequenza respiratoria e temperatura mentre la HRV scende. Due o tre segnali che puntano nella stessa direzione dicono molto più di uno solo.",
    },
    {
      q: "I parametri dei dispositivi indossabili sostituiscono la visita dal medico?",
      a: "No. Frequenza cardiaca a riposo, HRV, punteggi del sonno e tutto il resto sono indizi sul tuo benessere, utili per accorgerti dei cambiamenti e fare domande più mirate, ma non sono mai una diagnosi. Un avviso del dispositivo, per esempio la segnalazione di un ritmo irregolare, è un invito a farti controllare, non un verdetto. Per qualunque cosa ti preoccupi, parlane con un medico.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "Qual è una frequenza cardiaca a riposo normale?",
      a: "L'intervallo classico per un adulto va da 60 a 100 battiti al minuto, e chi si allena nella resistenza spesso resta tra i 40 e i 60. Quella fascia è stata pensata per la sicurezza clinica più che per la salute ottimale, e gli studi su larga scala vedono il rischio crescere in modo abbastanza regolare man mano che la frequenza a riposo sale: la tendenza conta più della singola lettura.",
    },
    {
      q: "Qual è il momento migliore per misurare la frequenza a riposo?",
      a: "L'ideale è appena svegli, prima di metterti seduto, guardare il telefono o prendere caffeina. È misurare ogni volta nelle stesse condizioni che rende il numero confrontabile, perciò una lettura costante vale molto di più di una più precisa ma presa a caso.",
    },
    {
      q: "Perché la mia frequenza a riposo è salita all'improvviso per qualche giorno?",
      a: "Un rialzo improvviso e senza spiegazione di qualche battito che resta per qualche giorno è il corpo che ti segnala sottovoce qualcosa: spesso l'inizio di un'infezione, sonno scarso che si somma allo stress, disidratazione, l'alcol della sera prima, oppure troppo allenamento e poco recupero. Anche caffeina, febbre, caldo, ansia e alcuni farmaci la spingono in alto.",
    },
    {
      q: "Quando devo preoccuparmi della mia frequenza a riposo?",
      a: "Una frequenza a riposo che resta sopra i 100 senza una ragione evidente, una frequenza bassa accompagnata da giramenti di testa, svenimenti o fiato corto, oppure un battito irregolare che torna spesso: tutto questo vale la pena segnalarlo a un medico. Un avviso di ritmo irregolare dal dispositivo è un invito a farti controllare, non una diagnosi; solo un ECG può confermare un problema di ritmo.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "Qual è una buona HRV?",
      a: "Non esiste un numero buono per tutti. La HRV varia moltissimo da persona a persona, tanto che la tua base sana potrebbe essere un terzo di quella di qualcun altro e andare benissimo per entrambi. Cala anche nettamente con l'età e dipende da quanto dura la registrazione e dalla postura, quindi i valori assoluti non si trasferiscono tra persone o tra dispositivi. Leggi la tua tendenza, non una classifica.",
    },
    {
      q: "Perché la mia HRV cambia così tanto da una notte all'altra?",
      a: "La HRV è sensibilissima alle condizioni. La spostano tutte la postura, la frequenza del respiro, l'ora, l'ultimo pasto, la caffeina, una malattia, il sonno e lo stress acuto, e l'alcol la abbassa in proporzione a quanto ne bevi. Oscillazioni intorno al dieci percento da una notte all'altra sono la norma e da sole non significano niente: ecco perché la media mobile su sette giorni è l'unità di misura onesta da guardare.",
    },
    {
      q: "Perché la mia HRV è bassa dopo aver bevuto alcol?",
      a: "L'alcol abbassa la HRV in proporzione alla dose, in modo più marcato la notte stessa e la mattina dopo, spesso mentre frequenza cardiaca e pressione sembrano ancora del tutto a posto. Un calo di una notte dopo un drink, una cena tardiva o un allenamento pesante è prevedibile e si riassorbe da solo; annotare i fattori in gioco più evidenti è ciò che ti permette di distinguerlo da un calo prolungato e significativo.",
    },
    {
      q: "Quando una HRV bassa conta davvero?",
      a: "Da sola la HRV è troppo rumorosa per farne un allarme. Indica qualcosa quando un calo prolungato sotto la tua base personale arriva insieme a una frequenza a riposo in salita e a una frequenza respiratoria notturna più alta: è un debole segnale precoce di una malattia in arrivo o di un sovraccarico. Una tendenza in discesa con sintomi come fiato corto o palpitazioni, oppure ripetute segnalazioni di ritmo irregolare, è un buon motivo per sentire un medico.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "Cosa significano i due numeri della pressione?",
      a: "Il numero sistolico, quello in alto, è la pressione nelle arterie nell'istante in cui il cuore si contrae e spinge fuori il sangue; il numero diastolico, quello sotto, è la pressione che resta mentre il cuore si rilassa e si riempie di nuovo tra un battito e l'altro. Si misurano entrambi in millimetri di mercurio e ciascuno porta con sé un rischio a sé stante, quindi nessuno dei due è quello che conta davvero a scapito dell'altro.",
    },
    {
      q: "Quale pressione è considerata alta?",
      a: "I due principali organismi che scrivono le linee guida concordano: l'ipertensione come malattia parte da 140/90 misurata in ambulatorio. Divergono sulle etichette al di sotto: il quadro statunitense chiama 130-139 su 80-89 ipertensione di Stadio 1, mentre quello europeo definisce gli stessi numeri semplicemente «elevati». Il rischio cresce di continuo già da circa 115/75 in su, senza una linea netta sotto la quale sparisca.",
    },
    {
      q: "Come misuro bene la pressione a casa?",
      a: "Stai seduto in tranquillità per cinque minuti, schiena appoggiata e piedi a terra, il braccio all'altezza del cuore e un bracciale da braccio della misura giusta. Prima, niente caffeina, niente fumo e non parlare. La tecnica sposta il numero più di quasi tutto ciò che ti succede dentro quel giorno, e le medie fuori dall'ambulatorio su più giornate sono lo standard di riferimento, con l'ipertensione a domicilio stimata intorno a 135/85.",
    },
    {
      q: "Quando una pressione alta è un'emergenza?",
      a: "Una singola lettura alta non è un'emergenza; rimisura dopo un minuto. Se resta a 180/120 o oltre ma senza sintomi, contatta presto il tuo medico. Se è 180/120 o più con dolore al petto, fiato corto, un cambiamento neurologico o della vista, o un forte mal di testa, trattala come un'emergenza e chiama il numero unico per le emergenze.",
    },
  ],
  "sleep-consistency": [
    {
      q: "Di quante ore di sonno hanno davvero bisogno gli adulti?",
      a: "Le indicazioni nazionali collocano gli adulti tra i 18 e i 64 anni a 7-9 ore a notte e gli anziani a 7-8, con una soglia minima condivisa di almeno 7 ore in modo regolare. Il rapporto è a forma di U, non del tipo «più è meglio»: sia dormire abitualmente poco sia dormire abitualmente troppo si porta dietro un rischio.",
    },
    {
      q: "La regolarità del sonno conta più della durata?",
      a: "Contano entrambe, e l'orario può pesare quanto la durata. In un'ampia coorte la regolarità degli orari del sonno ha predetto la mortalità almeno con la stessa forza della durata, anche tenendo conto delle ore effettivamente dormite. Due persone possono registrare le stesse ore, e chi le registra alla stessa ora ogni notte sta misurabilmente meglio.",
    },
    {
      q: "Posso recuperare nel fine settimana il sonno perso?",
      a: "Solo in parte. Il debito di sonno è la somma che si accumula notte dopo notte quando dormi poco, e il recupero è parziale e non lineare: un lungo weekend non cancella del tutto diverse notti tagliate. Un orario costante batte il tentativo di saldare tutto il debito in una volta sola.",
    },
    {
      q: "Le fasi di sonno profondo e REM del mio dispositivo sono attendibili?",
      a: "Sulla suddivisione in fasi vale la pena essere scettici. I dispositivi di consumo stimano la ripartizione tra sonno profondo, REM e leggero con una concordanza solo discreta o moderata rispetto allo standard di laboratorio, e tendono a sovrastimare quanto hai dormito. Il tempo totale di sonno e l'ora in cui ti corichi sono molto più affidabili di qualsiasi percentuale di sonno profondo; prendi le fasi come una tendenza personale di massima.",
    },
  ],
  "respiratory-rate": [
    {
      q: "Qual è una frequenza respiratoria normale?",
      a: "L'intervallo standard a riposo per un adulto va da 12 a 20 respiri al minuto. È una fascia ampia, perciò il numero acquista senso rispetto al tuo valore abituale più che rispetto a quello di popolazione. I bambini respirano più in fretta, mentre gli atleti di resistenza ben allenati tendono a stare verso il limite basso.",
    },
    {
      q: "Perché la frequenza respiratoria si misura di notte e non di giorno?",
      a: "Da sveglio, la frequenza del respiro è uno dei numeri più legati allo stato del momento: parlare, muoverti, le emozioni e perfino sapere che ti stanno misurando la spostano, e una lettura puntuale di giorno finisce per non dire quasi nulla. Nel sonno tutti questi disturbi vengono meno e la tua frequenza notturna si assesta su un valore notevolmente stabile, e questo rende facile cogliere uno scostamento vero.",
    },
    {
      q: "Cosa significa se la mia frequenza respiratoria notturna aumenta?",
      a: "Un rialzo prolungato di circa tre respiri al minuto sopra il tuo valore notturno può segnalare che qualcosa si sta muovendo, spesso prima ancora che ti senta male. È un segnale generico, comune a varie infezioni: ti dice che il corpo sta lavorando di più, non cosa c'è che non va. Anche cose banali come un allenamento intenso a tarda sera, l'alcol o una stanza calda e poco arieggiata possono spingerla in alto.",
    },
    {
      q: "Quando una frequenza respiratoria è un'emergenza?",
      a: "Una frequenza sopra i 25 al minuto insieme a fiato corto, confusione o un valore basso di ossigeno nel sangue richiede attenzione medica rapida. Un respiro lento e superficiale è la direzione più pericolosa, soprattutto la depressione respiratoria da oppioidi o sedativi: se qualcuno respira molto lentamente, fatica a svegliarsi o ha le labbra bluastre, trattala come un'emergenza e chiedi aiuto.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "Qual è un livello normale di ossigeno nel sangue?",
      a: "In un adulto sano che respira aria ambiente a livello del mare, la SpO2 sta tra il 95 e il 100 percento, con la maggior parte delle letture raccolte tra il 96 e il 99. Il limite inferiore cambia con le circostanze, perciò in quota circa il 90 percento può essere normale, e chi ha una malattia polmonare cronica convive con una base personale più bassa. Sopra la fascia non c'è nessun premio: più alto non vuol dire meglio.",
    },
    {
      q: "Perché la lettura di SpO2 al polso è bassa?",
      a: "Una singola lettura bassa è più spesso un artefatto che un'emergenza. I sensori da polso stanno più lontani da un letto arterioso che pulsa e devono vedersela con il movimento e con una vestibilità più larga, e bastano mani fredde, un cinturino lasco, lo smalto sulle unghie o la luce dell'ambiente per far scendere il numero. Rimisura con la mano calda, ferma e ben irrorata prima di dare retta a un calo.",
    },
    {
      q: "Posso usare la SpO2 per scoprire le apnee notturne?",
      a: "Le cali ripetuti di ossigeno durante la notte fanno parte di come si fa lo screening delle apnee notturne, quindi un dispositivo che li segnala può essere un primo indizio, ma non è una diagnosi. Un russamento forte con pause osservate, oppure un sonno che non ristora con sonnolenza di giorno, sono cose da segnalare a un medico per una valutazione fatta come si deve.",
    },
    {
      q: "I pulsossimetri sono meno precisi sulla pelle più scura?",
      a: "Sì. I pulsossimetri possono sovrastimare la reale saturazione di ossigeno nelle persone con pelle più scura, restituendo un numero rassicurante mentre la saturazione vera è più bassa: è uno scarto documentato nei dati ospedalieri e riesaminato dalle autorità di regolamentazione statunitensi. Una lettura dall'aria normale non dovrebbe mai prevalere su fiato corto, confusione o la semplice sensazione che qualcosa non vada.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "37 gradi sono ancora la temperatura corporea normale?",
      a: "È una vecchia media che i dati moderni hanno spostato verso il basso. Un'ampia revisione ha collocato la media della popolazione a 36,59 °C, con un intervallo orale normale di circa 35,7-37,4 °C, abbastanza ampio da far stare due persone sane a quasi due gradi di distanza. Una lettura di 36,7 °C è in piena norma, non al di sotto.",
    },
    {
      q: "Perché la mia temperatura cambia nel corso della giornata?",
      a: "La temperatura segue una curva circadiana e oscilla di circa mezzo grado tra il punto più basso nelle prime ore del mattino, all'incirca tra le 4 e le 8, e il picco di prima serata, intorno alle 18-20. Una lettura serale che sembra un po' alta spesso è solo il normale picco quotidiano: ecco perché conviene confrontare letture prese alla stessa ora e nello stesso punto.",
    },
    {
      q: "La temperatura cutanea del dispositivo è la temperatura corporea?",
      a: "No. La temperatura cutanea di un dispositivo non è la temperatura interna del corpo; è lo scostamento notturno dalla tua base, calcolata su più notti, e non ha un intervallo clinico di riferimento. Usata bene può far sospettare uno spostamento sub-febbrile prima che arrivino i sintomi, ma qualsiasi preoccupazione per la febbre va confermata con una vera misurazione orale.",
    },
    {
      q: "Quale temperatura è febbre e quando devo rivolgermi a un medico?",
      a: "La febbre è una temperatura orale di 38,0 °C o più. Negli adulti contano di solito più i sintomi e quanto durano che il valore esatto, ma rivolgiti a un medico intorno ai 39,4 °C, oppure per qualsiasi febbre accompagnata da fiato corto, dolore al petto, forte mal di testa, confusione, rigidità del collo o un'eruzione cutanea. La febbre in un neonato sotto i tre mesi richiede sempre una valutazione urgente.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "Qual è una glicemia a digiuno normale?",
      a: "Sotto i 100 mg/dL (sotto 5,6 mmol/L) è normale secondo l'American Diabetes Association, con la fascia 100-125 che indica il prediabete; l'OMS, invece, fa partire il prediabete da 110. Entrambe condividono la soglia per il diabete di 126 mg/dL o più. Una singola lettura anomala non diagnostica niente: per la conferma serve un test ripetuto in un altro giorno.",
    },
    {
      q: "Che differenza c'è tra una lettura della glicemia e l'HbA1c?",
      a: "Una glicemia a digiuno o dopo il pasto è una fotografia: vera per l'istante in cui l'hai presa e facilmente influenzata dalla cena della sera prima o da un raffreddore in arrivo. L'HbA1c è invece un time-lapse, e riflette la tua glicemia media lungo i due o tre mesi circa di vita di un globulo rosso. Rendono di più lette una accanto all'altra.",
    },
    {
      q: "Perché la glicemia mattutina è più alta dopo una notte storta?",
      a: "Basta una sola notte di sonno parzialmente tagliato per ridurre in modo misurabile la sensibilità all'insulina, e nel corso della giornata la tolleranza al glucosio cala, così lo stesso pasto fa un picco più alto la sera. Una notte andata male o una cena tardiva e abbondante spiegano benissimo un'anomalia isolata della mattina dopo, e di per sé non dimostrano nulla.",
    },
    {
      q: "Quando una glicemia è pericolosa?",
      a: "Una glicemia sotto i 70 mg/dL (sotto 3,9 mmol/L) è un avviso di ipoglicemia: assumi carboidrati a rapido assorbimento e ricontrolla dopo 15 minuti; sotto i 54 mg/dL serve un intervento immediato. Una glicemia molto alta e prolungata con sete, urinare spesso, vomito, respiro affannoso o pensiero confuso richiede cure rapide. Non sono autodiagnosi: parlane con un medico.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "Cos'è il VO2max e perché conta?",
      a: "Il VO2max è la velocità massima con cui il corpo riesce ad assorbire e usare ossigeno durante uno sforzo intenso, misurata in millilitri di ossigeno per chilogrammo al minuto. Riassume l'intera catena di trasporto dell'ossigeno ed è uno dei più forti predittori, da solo, di quanto a lungo vivrai: ogni gradino di forma fisica in più si lega a un rischio di morte sensibilmente più basso.",
    },
    {
      q: "Quanto è preciso il VO2max del mio orologio?",
      a: "Il tuo dispositivo lo stima, non lo misura: ricava un valore dal rapporto tra la tua frequenza cardiaca e il tuo passo, appoggiandosi a una frequenza massima presunta. Il valore assoluto può sbagliare di qualche punto, e terreno, caldo e vestibilità lo confondono ancora di più. Il modo onesto di leggerlo è come una linea di tendenza: una salita costante nell'arco di settimane è reale.",
    },
    {
      q: "Qual è un buon VO2max per la mia età?",
      a: "Il VO2max si legge come un percentile dentro la tua fascia di età e sesso, mai rispetto a un obiettivo fisso. Gli uomini ottengono valori circa il 15-20 percento più alti delle donne alla stessa età, e la forma cala con l'età, perciò un valore eccellente a 60 anni sarebbe banale a 25. Più di dove ti trovi, conta in che direzione ti stai muovendo.",
    },
    {
      q: "Come miglioro il mio VO2max?",
      a: "La forma aerobica cresce con un allenamento costante. L'obiettivo settimanale comune alle principali linee guida è di 150-300 minuti di attività moderata oppure 75-150 minuti di attività intensa, più il rafforzamento muscolare almeno due volte a settimana, con il recupero compreso. Allenarsi con regolarità dimezza all'incirca il naturale declino legato all'età. Se sei stato fermo a lungo o hai una condizione cardiaca, polmonare o metabolica, senti un medico prima di affrontare esercizi intensi.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Perché l'IMC è una misura limitata della salute?",
      a: "L'IMC è un indicatore di adiposità economico e ripetibile, ma non distingue il muscolo dal grasso: una persona muscolosa può finire nella fascia del sovrappeso, mentre un anziano che ha perso massa muscolare resta comodamente nella norma. Ignora anche dove si accumula il grasso, e le sue soglie sono state tracciate su popolazioni perlopiù europee e portano un rischio più alto a IMC più bassi per le persone di origine sud e est asiatica.",
    },
    {
      q: "Perché dove accumulo il grasso conta più del peso?",
      a: "Il grasso intorno alla vita, stipato tra gli organi dell'addome, è molto più dannoso dal punto di vista metabolico di quello su fianchi e cosce, e predice diabete, ipertensione e rischio cardiovascolare a prescindere dall'IMC. Una regola pratica semplice, valida tra i sessi e le diverse origini, è tenere il girovita sotto la metà della propria altezza.",
    },
    {
      q: "Perché il mio peso aumenta da un giorno all'altro?",
      a: "Nell'arco di una giornata normale, e da un giorno al successivo, il peso oscilla di uno o due chili solo per idratazione, cibo ancora in transito e sale: niente di tutto questo è grasso. Guarda una media mobile su sette giorni e il rumore si annulla, lasciando la linea che significa davvero qualcosa. Lo stesso vale per la percentuale di grasso corporeo letta da una bilancia.",
    },
    {
      q: "Quanto peso devo perdere per migliorare la salute?",
      a: "Negli adulti in sovrappeso o con obesità, una perdita stabile di appena il 5-10 percento del peso migliora in modo significativo glicemia, pressione e lipidi: un obiettivo molto più sensato di qualsiasi singolo numero sul quadrante. Vale la pena puntare a un cambiamento modesto e duraturo, non a una cifra clamorosa.",
    },
  ],
  "tracking-mood": [
    {
      q: "Che senso ha tenere traccia dell'umore?",
      a: "Una sola registrazione è un'opinione; qualche centinaio di registrazioni sono una tendenza, e una tendenza è un dato. Annotata con costanza per settimane, una semplice scala dell'umore fa emergere schemi che nessun singolo giorno mostra: una lenta discesa lungo un periodo pesante, la ripresa puntuale dopo l'esercizio, oppure un calo che ritorna con una cadenza mensile prevedibile.",
    },
    {
      q: "Come dovrei registrare l'umore perché serva a qualcosa?",
      a: "La costanza è l'abitudine che rende di più: stessa scala, stessa ora, ogni giorno. L'auto-valutazione risente dell'ora del giorno, di quello che è appena successo e di come hai dormito, perciò una lettura isolata è rumorosa. Misurato sempre allo stesso modo, l'altalena quotidiana si media e la direzione di fondo diventa leggibile.",
    },
    {
      q: "Qual è un punteggio preoccupante in un questionario sull'umore?",
      a: "Negli strumenti validati, un WHO-5 pari o inferiore al 50% indica un benessere scarso, e un totale del PHQ-9 o del GAD-7 di 10 o più è la soglia d'azione standard. Sono strumenti concordi e ben consolidati, ma un risultato positivo è un invito a parlarne con un professionista, non una diagnosi che puoi fare a casa.",
    },
    {
      q: "Quando un umore basso dovrebbe spingermi a chiedere aiuto?",
      a: "Quando dura: una tendenza in discesa che si trascina per due settimane o più, o che inizia a mettersi di traverso nella vita di tutti i giorni, è un motivo per parlarne con un medico o uno specialista della salute mentale, e non devi aspettare che ti sembri grave. Qualsiasi pensiero di farti del male è di per sé un motivo per chiamare subito il numero di emergenza locale o un servizio di crisi.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Perché il ciclo mestruale è considerato un parametro vitale?",
      a: "Gli organismi professionali chiedono ai medici di trattare il ciclo come trattano polso, pressione e temperatura, perché è un ritmo che si ripete e che resta stabile quando le cose vanno bene: per questo un suo cambiamento porta informazioni. La durata e la regolarità del ciclo sono una finestra a portata di mano sulla salute riproduttiva e su quella generale.",
    },
    {
      q: "Qual è una durata normale del ciclo mestruale?",
      a: "Valgono due intervalli affidabili. La fascia pensata per le pazienti descrive i normali cicli sani dell'adulto come 21-35 giorni, mentre il quadro di screening clinico parla di 24-38 giorni. Una variazione di circa una settimana da un mese all'altro è ordinaria, e la fase luteale è l'àncora relativamente costante: gran parte dello scarto di durata sta nella fase follicolare.",
    },
    {
      q: "Posso affidarmi a un'app per il ciclo come contraccettivo?",
      a: "No. Le previsioni del ciclo calcolate da un'app, un dispositivo da polso o qualunque altro apparecchio non sono un metodo contraccettivo. Le previsioni basate su valori medi di popolazione sono inaffidabili, il momento dell'ovulazione varia molto anche in chi ha cicli regolari, e la perimenopausa rende di nuovo i cicli imprevedibili. Chi usa la consapevolezza della fertilità dovrebbe affidarsi a un metodo validato e insegnato come si deve, non a una singola data prevista.",
    },
    {
      q: "Quando dovrei sentire un medico per il mio ciclo?",
      a: "Parlane con un medico quando i cicli cadono di continuo fuori dall'intervallo tipico, con intervalli più brevi di circa 21 giorni o più lunghi di circa 45, oppure quando c'è un cambiamento marcato e prolungato rispetto al tuo schema abituale. Un'assenza di 90 giorni o più, un sanguinamento che dura più di 7 giorni o che impregna un assorbente più spesso che ogni una o due ore, e le perdite tra una mestruazione e l'altra meritano tutti una valutazione.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "Come fa un dispositivo da polso a misurare la frequenza cardiaca?",
      a: "Quasi tutti usano la fotopletismografia: un LED verde manda luce nella pelle, il sangue ne assorbe una parte e un sensore conta le pulsazioni man mano che il volume di sangue sale e scende a ogni battito. Funziona bene a riposo ma va in difficoltà col movimento, ed è per questo che la frequenza al polso durante gli intervalli o i pesi è la lettura meno affidabile che la maggior parte delle persone abbia. Una fascia toracica, invece, resta precisa anche in movimento.",
    },
    {
      q: "Come fa il mio orologio a conoscere le fasi del sonno?",
      a: "Non vede il tuo cervello. Deduce il sonno da quanto poco ti muovi, spesso unendoci la frequenza cardiaca e la sua variabilità battito per battito, poi etichetta la notte in leggero, profondo e REM. Rispetto allo standard di laboratorio, i dispositivi se la cavano abbastanza bene nel dire se dormi o sei sveglio e molto meno nel dire in quale fase sei: leggi con fiducia l'ora in cui ti sei addormentato e la durata totale, e prendi le fasi colorate come una stima.",
    },
    {
      q: "Le letture dei dispositivi da polso sono precise?",
      a: "Gran parte di ciò che un dispositivo ti mostra è una stima, non una misura di laboratorio. La frequenza cardiaca ottica, le fasi di sonno dedotte, la SpO2 al polso e ogni punteggio di recupero o di prontezza sono modelli costruiti su pochi segnali reali, precisi abbastanza da far vedere i cambiamenti nel tempo ma di rado tanto da prendere un singolo valore per oro colato. Leggili come valori relativi, non assoluti.",
    },
    {
      q: "Cosa misurano davvero i punteggi di recupero e prontezza?",
      a: "Non misurano proprio niente: sono modelli proprietari che mescolano i flussi grezzi dei sensori, in genere HRV notturna, frequenza a riposo e sonno, con la tua età, il tuo peso e la tua storia, per tirar fuori un unico numero. Non hanno un intervallo clinico di riferimento e non sono uniformati tra un dispositivo e l'altro, quindi leggili come una spinta quotidiana, non come una misura clinica.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Perché la mia base personale vale più dell'intervallo normale?",
      a: "Una fascia di riferimento è fatta per segnalare la piccola quota di persone che cadono molto fuori dalla dispersione tipica; non è mai stata pensata per dirti se oggi è una buona giornata. Siccome le differenze tra le persone sono ampie, una frequenza a riposo di 58 sembra banale rispetto alla fascia dei manuali, ma è un netto aumento di sei battiti se la tua base è 52: un cambiamento che l'intervallo di popolazione nasconde del tutto.",
    },
    {
      q: "Come distinguo un segnale vero dal rumore casuale?",
      a: "Il rumore è una lettura vicina al bordo del tuo intervallo abituale, o un piccolo spostamento che rientra il giorno dopo. Il segnale è una direzione che tiene: uno spostamento di più giorni ben oltre la tua dispersione abituale, o una lenta deriva della media mobile nell'arco di settimane. La media mobile leviga la dispersione, e un cambiamento più grande di diverse volte la tua oscillazione quotidiana merita attenzione.",
    },
    {
      q: "Quanto tempo serve prima che una base sia affidabile?",
      a: "Una misurazione è un punto senza contesto. Un nuovo segnale ha bisogno di un paio di settimane di letture costanti prima che un singolo numero voglia dire qualcosa, perché solo allora il rumore quotidiano si è mediato in una base su cui puoi davvero contare.",
    },
    {
      q: "Perché misurare nelle stesse condizioni conta così tanto?",
      a: "Una tendenza è onesta solo se le condizioni che la producono restano sempre le stesse. La frequenza a riposo appena svegli è ben sotto la stessa frequenza dopo il caffè e le scale, e il peso prima di colazione è un chilo più basso dello stesso corpo dopo cena. Un dispositivo un po' impreciso, usato sempre allo stesso modo, batte uno migliore usato alla rinfusa.",
    },
  ],
  "steps-and-movement": [
    {
      q: "Da dove arriva l'obiettivo dei 10.000 passi?",
      a: "Non è mai stato il frutto di una scoperta. Risale a un contapassi giapponese messo in commercio intorno alle Olimpiadi di Tokyo del 1964, il cui nome significava «contapassi da diecimila passi», scelto un po' perché il carattere per 10.000 ricorda una persona che cammina e un po' perché era un numero tondo e memorabile per vendere un apparecchio. Trattalo come folklore, non come una linea guida.",
    },
    {
      q: "Di quanti passi al giorno ho davvero bisogno?",
      a: "Gran parte del beneficio sulla mortalità si raggiunge ben prima dei 10.000. Gli studi mostrano i tassi di mortalità calare man mano che i passi aumentano, con la curva che si appiattisce intorno ai 6.000-8.000 passi al giorno per gli anziani e agli 8.000-10.000 per i più giovani. La curva si appiattisce, non si inverte, quindi camminare di più non è un problema: semplicemente, a ogni passo in più rende un po' meno.",
    },
    {
      q: "Meglio camminare tutto in una volta o lungo la giornata?",
      a: "Distribuire il movimento nella giornata aiuta. Stare seduti a lungo senza pause è sempre più visto come un fattore di rischio a sé, in parte a prescindere dal fatto che ti alleni anche, ed è per questo che le indicazioni di oggi affiancano «muoviti di più» a «stai seduto di meno». Qualche minuto di cammino ogni ora, le scale e una passeggiata dopo i pasti contano tutti.",
    },
    {
      q: "Cosa non mi dice un conteggio dei passi sulla mia salute?",
      a: "È un misuratore di volume, non un test di forma fisica. Non dice niente sull'intensità o sulla forza, non sa distinguere un chilometro in salita a passo svelto da passi lenti per la cucina, e non misura la forma cardiorespiratoria, uno dei più forti predittori di salute a lungo termine. I passi vanno in un quadro insieme ad altri segnali, non su un piedistallo.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "Come influisce la caffeina sulla frequenza cardiaca e sulla pressione?",
      a: "La caffeina blocca l'adenosina e lascia correre più libero l'acceleratore simpatico, così la frequenza cardiaca sale e la pressione aumenta per un po', un effetto più marcato in chi non la prende di solito. Un caffè un'ora prima di misurare può alzare sia la frequenza a riposo sia la pressione abbastanza da farsi notare.",
    },
    {
      q: "Il caffè del pomeriggio influisce davvero sul mio sonno?",
      a: "Spesso più di quanto te ne accorga. L'emivita della caffeina è di solito intorno alle cinque ore, perciò una tazza del pomeriggio ha ancora metà della sua dose in circolo quando vai a letto. In uno studio controllato, una dose pari a un caffè forte presa sei ore prima di coricarsi ha ridotto in modo misurabile il tempo totale di sonno, anche se i partecipanti sottostimavano il disturbo.",
    },
    {
      q: "Perché dopo aver bevuto ho la HRV bassa e la frequenza alta?",
      a: "Mentre il corpo smaltisce l'alcol durante la notte, il versante simpatico resta acceso: la frequenza a riposo rimane alta e la HRV scende, con quantità maggiori che danno effetti più grandi e più duraturi. Ecco perché un solo bicchiere a cena può schiacciare in sordina il tuo punteggio di recupero mentre tu dormi e non ti accorgi di nulla.",
    },
    {
      q: "Vuol dire che dovrei rinunciare a caffeina e alcol?",
      a: "Non per forza. Il valore sta nel capire le cause, non nell'astinenza. Guardare i tuoi dati ti mostra quanto tardi è troppo tardi per la caffeina prima che il sonno ne risenta e quanto alcol serve prima che la frequenza notturna salga, così smetti di scambiare un calo prevedibile e passeggero per il segno che c'è qualcosa che non va.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Ho davvero bisogno di otto bicchieri d'acqua al giorno?",
      a: "Non c'è una solida base scientifica dietro la regola universale degli otto bicchieri; le revisioni che hanno cercato l'origine di questa idea non hanno trovato prove credibili a sostegno. Gli organismi autorevoli danno valori di riferimento di popolazione per l'acqua totale da tutte le fonti, all'incirca 2-2,7 litri al giorno per le donne e 2,5-3,7 per gli uomini, e sottolineano che il fabbisogno cambia molto con corporatura, attività, clima e dieta.",
    },
    {
      q: "Come faccio a sapere se bevo abbastanza?",
      a: "Per la maggior parte delle persone sane, in una giornata normale, i segnali del corpo sono guide ragionevoli. La sete è un sensore vero e funzionante, e bere fino a togliersela tiene quasi tutti gli adulti sani abbastanza idratati. Il colore dell'urina è un controllo casalingo grossolano: paglierino chiaro suggerisce che vai bene, costantemente scuro che potresti bere di più.",
    },
    {
      q: "Perché la disidratazione mi fa salire la frequenza cardiaca?",
      a: "Quando perdi tanti liquidi da far calare il volume del sangue, il cuore compensa battendo più in fretta per tenere stabile la circolazione, così la disidratazione alza la frequenza a riposo e sotto sforzo. Bastano lievi deficit di liquidi, intorno all'uno-due percento della massa corporea, per intaccare l'umore, far percepire più fatica e annebbiare la concentrazione.",
    },
    {
      q: "Si può bere troppa acqua?",
      a: "Sì. Bere ben oltre il bisogno, più che altro durante prove di resistenza, può diluire il sodio nel sangue in una condizione pericolosa chiamata iponatriemia, i cui primi segni assomigliano a quelli della disidratazione. Chi ha malattie cardiache, renali o epatiche, o prende farmaci che agiscono sull'equilibrio dei liquidi, può avere un obiettivo volutamente limitato e dovrebbe seguire le indicazioni del medico più di qualunque regola generale.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "Come si vede lo stress nei miei dati di salute?",
      a: "Lo stress è l'acceleratore simpatico tenuto premuto, e da una sola leva muove molti parametri tutti insieme. La frequenza a riposo sale, la HRV notturna scende, il sonno si fa più leggero e spezzettato, e a volte la frequenza respiratoria è alta. Nessun segnale da solo è decisivo, ma letti come un insieme rispetto alla tua base sono difficili da smentire.",
    },
    {
      q: "Che differenza c'è tra stress acuto e cronico?",
      a: "Gli stressori acuti, come un allenamento pesante o una scadenza, spostano i parametri e, dopo una o due notti di vero riposo, tutto torna alla base; è proprio quel ritorno il punto. Il problema è quando il ritorno smette di arrivare e il corpo paga il costo accumulato del carico allostatico, leggibile nei dati come una base che si è spostata in sordina ed è rimasta lì.",
    },
    {
      q: "Il recupero è solo l'assenza di stress?",
      a: "No. Il recupero è un processo parasimpatico attivo: il freno vagale che si reinnesta, la frequenza che cala e il sonno profondo che fa il lavoro di riparazione. Ecco perché si vede come un segnale positivo e non come dei numeri che semplicemente si zittiscono. Vuol dire che lo puoi sostenere, non solo aspettare, con un sonno regolare e protetto, un po' di movimento aerobico leggero e la luce del giorno.",
    },
    {
      q: "Quando dovrei prendere sul serio uno stress prolungato?",
      a: "Questi segnali possono indicare uno sforzo che dura, ma non sanno dirti perché, e non sostituiscono come ti senti. Uno stress che per settimane ti rovina il sonno, la concentrazione o il piacere delle cose di tutti i giorni vale la pena discuterlo con un medico o uno specialista della salute mentale, qualunque cosa dicano i numeri. Se il disagio dovesse mai sembrarti opprimente, o se hai pensieri di farti del male, chiama subito il numero di emergenza locale o un servizio di crisi.",
    },
  ],
};
export default FAQ;
