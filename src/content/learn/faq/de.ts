export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Sollte ich meine Gesundheitswerte mit dem Normbereich oder mit mir selbst vergleichen?",
      a: "Stelle deine eigene Ausgangslinie in den Mittelpunkt. Bei fast jedem Signal, das sich zu verfolgen lohnt, sind die Unterschiede zwischen Menschen weit grer als deine eigenen Schwankungen von Tag zu Tag. Ein Wert, der auf einer Bevlkerungskurve unauffllig wirkt, kann fr dich eine persnliche Bestleistung oder eine Warnung sein. Nutze die verffentlichten Bereiche nur als Plausibilittsprfung, nicht als Punktetafel.",
    },
    {
      q: "Warum sollte ich nicht auf einen einzelnen Messwert reagieren?",
      a: "Der Krper ist verrauscht. Die Herzfrequenzvariabilitt schwankt von Tag zu Tag um etwa zehn Prozent als reines Rauschen, und das Krpergewicht driftet allein durch Flssigkeit um ein bis zwei Kilogramm. Ein einzelner hoher oder niedriger Wert liegt meist innerhalb dieser normalen Streuung. Bedeutung trgt die Richtung eines gleitenden Durchschnitts ber Tage und Wochen, nicht ein einzelner Punkt.",
    },
    {
      q: "Warum bewegen sich mehrere meiner Werte gleichzeitig?",
      a: "Sie berichten alle aus unterschiedlichen Blickwinkeln ber dieselben zugrunde liegenden Systeme. Eine schlechte Nacht oder Alkohol hebt tendenziell die Ruheherzfrequenz an und senkt die HRV; der Beginn einer Infektion lsst Ruheherzfrequenz, Atemfrequenz und Temperatur gemeinsam steigen, whrend die HRV fllt. Zwei oder drei Signale, die sich zugleich in dieselbe Richtung bewegen, sind aussagekrftiger als jedes einzelne fr sich.",
    },
    {
      q: "Ersetzen Gesundheitswerte aus Wearables den Arztbesuch?",
      a: "Nein. Ruheherzfrequenz, HRV, Schlafwerte und der Rest sind Wellness-Hinweise, ntzlich, um Vernderungen zu bemerken und bessere Fragen zu stellen, niemals eine Diagnose. Ein Wearable-Hinweis wie eine Warnung vor unregelmigem Rhythmus ist ein Anlass zur Abklrung, kein Befund. Sprich ber alles, was dich beunruhigt, mit einer rztin oder einem Arzt.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "Was ist eine normale Ruheherzfrequenz?",
      a: "Der klassische Bereich fr Erwachsene liegt bei 60 bis 100 Schlgen pro Minute, ausdauertrainierte Menschen oft in den 40ern bis 60ern. Dieser Bereich wurde fr die klinische Sicherheit gezogen, nicht fr optimale Gesundheit. Groe Studien zeigen, dass das Risiko mit steigender Ruhefrequenz recht stetig zunimmt, weshalb der Trend mehr zhlt als ein einzelner Wert.",
    },
    {
      q: "Wann misst man die Ruheherzfrequenz am besten?",
      a: "Idealerweise gleich morgens, bevor du dich aufsetzt, aufs Handy schaust oder Koffein zu dir nimmst. Unter stets gleichen Bedingungen zu messen macht den Wert vergleichbar, deshalb ist eine konsistente Messung weit mehr wert als eine genauere, die zufllig zustande kommt.",
    },
    {
      q: "Warum ist meine Ruheherzfrequenz fr ein paar Tage pltzlich gestiegen?",
      a: "Ein pltzlicher, unerklrlicher Anstieg um mehrere Schlge, der einige Tage anhlt, ist der stille Hinweis des Krpers auf etwas, oft der Beginn einer Infektion, schlechter Schlaf gepaart mit Stress, Flssigkeitsmangel, Alkohol am Vorabend oder zu viel Training bei zu wenig Erholung. Auch Koffein, Fieber, Hitze, Angst und manche Medikamente treiben ihn nach oben.",
    },
    {
      q: "Wann sollte ich mir wegen meiner Ruheherzfrequenz Sorgen machen?",
      a: "Eine Ruhefrequenz, die ohne erkennbaren Grund dauerhaft ber 100 liegt, ein niedriger Wert gepaart mit Schwindel, Ohnmacht oder Atemnot oder ein wiederkehrend unregelmiger Puls gehren rztlich besprochen. Ein Hinweis auf unregelmigen Rhythmus aus einem Wearable ist ein Anlass zur Abklrung, keine Diagnose; nur ein EKG kann ein Rhythmusproblem besttigen.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "Was ist eine gute HRV?",
      a: "Es gibt keinen allgemeingltigen guten Wert. Die Unterschiede zwischen Menschen bei der HRV sind enorm, deine gesunde Ausgangslinie kann ein Drittel der gesunden Ausgangslinie eines anderen betragen, und beides ist in Ordnung. Die HRV fllt zudem stark mit dem Alter und hngt von Aufzeichnungsdauer und Krperhaltung ab, absolute Werte lassen sich daher weder zwischen Menschen noch zwischen Gerten bertragen. Lies deinen eigenen Trend, keine Rangliste.",
    },
    {
      q: "Warum ndert sich meine HRV von Nacht zu Nacht so stark?",
      a: "Die HRV reagiert uerst empfindlich auf die Umstnde. Krperhaltung, Atemfrequenz, Tageszeit, die letzte Mahlzeit, Koffein, Krankheit, Schlaf und akuter Stress bewegen sie alle, und Alkohol unterdrckt sie dosisabhngig. Schwankungen von etwa zehn Prozent von Nacht zu Nacht sind alltglich und bedeuten fr sich genommen nichts, weshalb ein gleitender Sieben-Tage-Durchschnitt die ehrliche Einheit zum Ablesen ist.",
    },
    {
      q: "Warum ist meine HRV nach Alkohol niedrig?",
      a: "Alkohol unterdrckt die HRV dosisabhngig, am strksten in der Nacht selbst und am Morgen danach, oft whrend Herzfrequenz und Blutdruck noch vllig normal aussehen. Ein einnchtiger Einbruch nach einem Drink, einem spten Abendessen oder einem harten Training ist zu erwarten und erholt sich von selbst; das Protokollieren der offensichtlichen Strfaktoren lsst dich genau das von einem bedeutsamen, anhaltenden Rckgang unterscheiden.",
    },
    {
      q: "Wann ist eine niedrige HRV tatschlich von Bedeutung?",
      a: "Fr sich genommen ist die HRV zu verrauscht, um darauf Alarm zu schlagen. Sie deutet auf etwas hin, wenn ein anhaltender Abfall unter deine persnliche Ausgangslinie zusammen mit steigender Ruheherzfrequenz und einer hheren nchtlichen Atemfrequenz auftritt, eine leise Frhwarnung fr Krankheit oder berlastung. Ein fallender Trend mit Symptomen wie Atemnot oder Herzklopfen oder wiederholte Hinweise auf unregelmigen Rhythmus sind ein Grund, eine rztin oder einen Arzt aufzusuchen.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "Was bedeuten die zwei Blutdruckwerte?",
      a: "Der obere, systolische Wert ist der Druck in deinen Arterien in dem Moment, in dem sich das Herz zusammenzieht und Blut auswirft; der untere, diastolische Wert ist der Restdruck, whrend sich das Herz zwischen den Schlgen entspannt und wieder fllt. Beide werden in Millimeter Quecksilbersule gemessen, und beide tragen unabhngig voneinander ein Risiko, keiner ist also der entscheidende.",
    },
    {
      q: "Welcher Blutdruck gilt als hoch?",
      a: "Beide groen Leitlinien-Gremien stimmen darin berein, dass Bluthochdruck als Erkrankung in der Praxis bei 140/90 beginnt. Bei den Bezeichnungen darunter unterscheiden sie sich: Der US-Rahmen nennt 130 bis 139 zu 80 bis 89 Hypertonie Stadium 1, der europische Rahmen nennt dieselben Werte lediglich erhht. Das Risiko steigt kontinuierlich ab etwa 115/75 aufwrts, ohne eine klare Linie, unter der es verschwindet.",
    },
    {
      q: "Wie messe ich meinen Blutdruck zu Hause richtig?",
      a: "Sitze zunchst fnf Minuten ruhig, mit gesttztem Rcken und flachen Fen, der Arm auf Herzhhe und einer korrekt dimensionierten Oberarmmanschette. Verzichte vorher auf Koffein, Rauchen und Reden. Die Technik bewegt den Wert strker als fast alles, was an diesem Tag in deinem Krper geschieht, und Durchschnittswerte auerhalb der Praxis ber mehrere Tage sind der anerkannte Mastab, wobei Bluthochdruck zu Hause bei etwa 135/85 angesetzt wird.",
    },
    {
      q: "Wann ist ein hoher Blutdruckwert ein Notfall?",
      a: "Ein einzelner hoher Wert ist kein Notfall; miss nach einer Minute erneut. Bleibt er bei 180/120 oder darber ohne Symptome, wende dich umgehend an deine Fachperson. Liegt er bei 180/120 oder hher zusammen mit Brustschmerz, Atemnot, einer neurologischen oder Sehvernderung oder starken Kopfschmerzen, behandle es als Notfall und rufe den Rettungsdienst.",
    },
  ],
  "sleep-consistency": [
    {
      q: "Wie viele Stunden Schlaf brauchen Erwachsene wirklich?",
      a: "Nationale Empfehlungen setzen Erwachsene von 18 bis 64 Jahren bei 7 bis 9 Stunden pro Nacht an und ltere Erwachsene bei 7 bis 8, mit einer Untergrenze von regelmig mindestens 7 Stunden im Konsens. Der Zusammenhang ist U-frmig statt mehr-ist-besser: Sowohl gewohnheitsmig kurzer als auch gewohnheitsmig sehr langer Schlaf gehen mit einem Risiko einher.",
    },
    {
      q: "Ist Schlafregelmigkeit wichtiger als Schlafdauer?",
      a: "Beides zhlt, und das Timing knnte ebenso viel ausmachen wie die Lnge. In einer groen Kohorte sagte die Regelmigkeit des Schlaftimings die Sterblichkeit mindestens so stark voraus wie die Dauer, sogar nach Bercksichtigung der geschlafenen Stunden. Zwei Menschen knnen identische Stunden protokollieren, und wer sie jede Nacht zur selben Zeit erreicht, steht messbar besser da.",
    },
    {
      q: "Kann ich am Wochenende verlorenen Schlaf nachholen?",
      a: "Nur teilweise. Schlafschuld ist eine fortlaufende Summe zu kurz geratener Nchte, und die Erholung daraus ist unvollstndig und nichtlinear, ein langes Wochenende macht mehrere eingeschrnkte Nchte also nicht vollstndig wett. Ein konsistenter Rhythmus schlgt den Versuch, die Schuld auf einen Schlag zu begleichen.",
    },
    {
      q: "Sind die Tiefschlaf- und REM-Phasen aus meinem Tracker genau?",
      a: "Sei skeptisch gegenber der Phasenaufschlsselung. Verbraucher-Tracker schtzen die Aufteilung in Tief-, REM- und Leichtschlaf nur mit mig guter bereinstimmung gegenber dem klinischen Laborstandard und neigen dazu, deine Schlafdauer zu berschtzen. Die Gesamtschlafzeit und deine Schlafenszeit sind weit vertrauenswrdiger als jeder Tiefschlafanteil; behandle die Phasen als groben persnlichen Trend.",
    },
  ],
  "respiratory-rate": [
    {
      q: "Was ist eine normale Atemfrequenz?",
      a: "Der Standardbereich fr ruhende Erwachsene liegt bei 12 bis 20 Atemzgen pro Minute. Dieser Bereich ist weit, weshalb der Wert seinen Nutzen relativ zu deiner eigenen blichen Zahl entfaltet, nicht gegenber dem Bevlkerungsbereich. Kinder atmen schneller, und trainierte Ausdauersportler liegen tendenziell am unteren Ende.",
    },
    {
      q: "Warum wird die Atemfrequenz nachts statt tagsber gemessen?",
      a: "Im Wachzustand ist die Atemfrequenz einer der zustandsabhngigsten Werte, die dein Krper erzeugt; Reden, Bewegung, Emotion und sogar das Bewusstsein, gemessen zu werden, verschieben sie alle, eine tagsber genommene Einzelmessung ist daher fast bedeutungslos. Im Schlaf fallen diese Einflsse weg und deine nchtliche Frequenz pendelt sich auf einen bemerkenswert stabilen Wert ein, was eine echte Abweichung leicht erkennbar macht.",
    },
    {
      q: "Was bedeutet es, wenn meine nchtliche Atemfrequenz steigt?",
      a: "Ein anhaltender Anstieg um etwa drei Atemzge pro Minute ber deine eigene nchtliche Zahl kann signalisieren, dass sich etwas entwickelt, oft bevor du dich krank fhlst. Das Signal ist infektionsunspezifisch, es sagt dir, dass der Krper mehr arbeitet, nicht was nicht stimmt. Alltgliches wie ein hartes sptes Training, Alkohol oder ein heies, stickiges Zimmer kann es ebenfalls anheben.",
    },
    {
      q: "Wann ist eine Atemfrequenz ein medizinischer Notfall?",
      a: "Eine Frequenz ber 25 pro Minute zusammen mit Atemnot, Verwirrtheit oder einem niedrigen Sauerstoffwert im Blut erfordert rasche medizinische Hilfe. Langsame, flache Atmung ist die gefhrlichere Richtung, besonders die durch Opioide oder Beruhigungsmittel verursachte Atemdepression; wenn jemand sehr langsam atmet, schwer aufzuwecken ist oder bluliche Lippen hat, behandle es als Notfall und hole Hilfe.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "Was ist ein normaler Sauerstoffgehalt im Blut?",
      a: "Bei einem gesunden Erwachsenen, der auf Meereshhe Raumluft atmet, liegt die SpO2 zwischen 95 und 100 Prozent, die meisten Werte gruppieren sich bei 96 bis 99. Die Untergrenze verschiebt sich mit den Umstnden, etwa 90 Prozent knnen in der Hhe normal sein, und Menschen mit chronischer Lungenerkrankung leben mit einer niedrigeren persnlichen Ausgangslinie. Oberhalb des Bereichs gibt es keinen Preis; hher ist nicht besser.",
    },
    {
      q: "Warum ist meine SpO2-Messung am Handgelenk niedrig?",
      a: "Eine einzelne niedrige Messung ist hufiger ein Artefakt als ein Notfall. Handgelenkssensoren sitzen weiter von einem pulsierenden arteriellen Bett entfernt und kmpfen mit Bewegung und lockererem Sitz, und kalte Hnde, ein lockeres Band, Nagellack oder Umgebungslicht ziehen den Wert nach unten. Miss warm, ruhig und gut durchblutet erneut, bevor du einem Einbruch vertraust.",
    },
    {
      q: "Kann ich mit SpO2 eine Schlafapnoe erkennen?",
      a: "Wiederholte nchtliche Entsttigungen sind Teil davon, wie eine Schlafapnoe abgeklrt wird, ein Wearable, das sie kennzeichnet, kann also ein frher Hinweis sein, ist aber keine Diagnose. Lautes Schnarchen mit beobachteten Atempausen oder nicht erholsamer Schlaf mit Tagesmdigkeit gehren fr eine ordentliche Beurteilung rztlich besprochen.",
    },
    {
      q: "Sind Pulsoximeter bei dunklerer Haut weniger genau?",
      a: "Ja. Pulsoximeter knnen die tatschliche Sauerstoffsttigung bei Menschen mit dunklerer Hautpigmentierung berschtzen und einen beruhigenden Wert anzeigen, whrend die echte Sttigung niedriger liegt, eine Diskrepanz, die in Krankenhausdaten dokumentiert und von US-Aufsichtsbehrden geprft wurde. Ein normal wirkender Wert sollte niemals Atemnot, Verwirrtheit oder das klare Gefhl, dass etwas nicht stimmt, bertrumpfen.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "Sind 37 Grad Celsius noch die normale Krpertemperatur?",
      a: "Es ist ein alter Durchschnitt, den moderne Daten nach unten korrigiert haben. Eine groe bersichtsarbeit setzte den Bevlkerungsmittelwert bei 36,59 C an, mit einem normalen oralen Bereich von etwa 35,7 bis 37,4 C, weit genug, dass zwei gesunde Menschen fast zwei Grad auseinanderliegen knnen. Ein Wert von 36,7 C liegt klar im Normalbereich, nicht darunter.",
    },
    {
      q: "Warum ndert sich meine Temperatur im Lauf des Tages?",
      a: "Die Temperatur folgt einer zirkadianen Kurve und schwankt um etwa ein halbes Grad zwischen ihrem Tiefpunkt in den frhen Morgenstunden, etwa 4 bis 8 Uhr, und ihrem Hhepunkt am frhen Abend, gegen 18 bis 20 Uhr. Ein Abendwert, der leicht erhht aussieht, ist oft nur der normale Tageshhepunkt, weshalb du Werte vergleichen solltest, die zur selben Tageszeit und an derselben Krperstelle genommen wurden.",
    },
    {
      q: "Ist die Hauttemperatur aus dem Wearable dasselbe wie die Krpertemperatur?",
      a: "Nein. Die Hauttemperatur aus einem Wearable ist nicht die Kernkrpertemperatur; sie ist die nchtliche Abweichung von deiner eigenen, ber mehrere Nchte gebildeten Ausgangslinie, ohne einen verbindlichen klinischen Bereich. Gut genutzt kann sie auf eine subfebrile Verschiebung hindeuten, bevor Symptome auftreten, aber jede Fiebersorge muss gegen eine tatschliche orale Messung besttigt werden.",
    },
    {
      q: "Welche Temperatur gilt als Fieber, und wann sollte ich Hilfe suchen?",
      a: "Fieber ist eine orale Temperatur von 38,0 C oder hher. Bei Erwachsenen zhlen die Symptome und ihre Dauer meist mehr als der genaue Wert, aber suche um 39,4 C herum Hilfe, oder bei jedem Fieber mit Atemnot, Brustschmerz, starken Kopfschmerzen, Verwirrtheit, einem steifen Nacken oder einem Ausschlag. Fieber bei einem Suling unter drei Monaten braucht immer eine dringende Abklrung.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "Was ist ein normaler Nchternblutzucker?",
      a: "Unter 100 mg/dl (unter 5,6 mmol/l) ist laut der American Diabetes Association normal, mit 100 bis 125 als Prdiabetes-Bereich; die WHO erffnet Prdiabetes stattdessen bei 110. Beide teilen eine Diabetes-Schwelle von 126 mg/dl oder hher. Ein einzelner aufflliger Wert diagnostiziert nie etwas; die Besttigung braucht einen Wiederholungstest an einem anderen Tag.",
    },
    {
      q: "Was ist der Unterschied zwischen einem Glukosewert und dem HbA1c?",
      a: "Ein Nchtern- oder Nach-dem-Essen-Glukosewert ist eine Momentaufnahme, wahr fr den Augenblick der Probennahme und leicht durch das gestrige Abendessen oder eine aufkommende Erkltung verschoben. Das HbA1c ist ein Zeitraffer und spiegelt deinen durchschnittlichen Blutzucker ber die etwa zwei bis drei Monate Lebensdauer eines roten Blutkrperchens. Am ntzlichsten sind sie nebeneinander gelesen.",
    },
    {
      q: "Warum ist mein Morgenblutzucker nach einer schlechten Nacht hher?",
      a: "Schon eine Nacht teilweisen Schlafentzugs senkt messbar die Insulinempfindlichkeit, und die Glukosetoleranz fllt im Tagesverlauf, sodass eine identische Mahlzeit am Abend hher ausschlgt. Eine schlechte Nacht oder ein sptes, schweres Abendessen sind ein plausibler Grund fr eine vereinzelte Aufflligkeit am nchsten Morgen und fr sich genommen kein Beleg fr irgendetwas.",
    },
    {
      q: "Wann ist ein Blutzuckerwert gefhrlich?",
      a: "Ein Glukosewert unter 70 mg/dl (unter 3,9 mmol/l) ist ein Hypoglykmie-Alarm; behandle mit schnell wirkenden Kohlenhydraten und kontrolliere nach 15 Minuten erneut, und unter 54 mg/dl braucht sofortiges Handeln. Anhaltend sehr hohe Glukose mit Durst, hufigem Wasserlassen, Erbrechen, schneller Atmung oder verndertem Denken erfordert rasche Versorgung. Das sind keine Selbstdiagnosen; sprich mit einer rztin oder einem Arzt.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "Was ist VO2max und warum ist es wichtig?",
      a: "VO2max ist die maximale Rate, mit der dein Krper bei harter Belastung Sauerstoff aufnehmen und verwerten kann, gemessen in Milliliter Sauerstoff pro Kilogramm pro Minute. Sie erfasst die gesamte Sauerstofftransportkette und ist einer der strksten einzelnen Vorhersagewerte dafr, wie lange du leben wirst, wobei jeder Fitnesszuwachs mit einem deutlich geringeren Sterberisiko verknpft ist.",
    },
    {
      q: "Wie genau ist die VO2max auf meiner Uhr?",
      a: "Dein Wearable schtzt sie eher, als dass es sie misst, und leitet einen Wert aus dem Verhltnis zwischen deiner Herzfrequenz und deinem Tempo ab, gesttzt auf eine angenommene maximale Herzfrequenz. Der absolute Wert kann ein paar Punkte danebenliegen, und Gelnde, Hitze und Sitz verwischen ihn weiter. Der ehrliche Weg, ihn zu lesen, ist als Trendlinie: Ein stetiger Anstieg ber Wochen ist echt.",
    },
    {
      q: "Was ist eine gute VO2max fr mein Alter?",
      a: "Die VO2max wird als Perzentil innerhalb deiner eigenen Alters- und Geschlechtsgruppe interpretiert, nie gegen ein festes Ziel. Mnner testen im selben Alter etwa 15 bis 20 Prozent hher als Frauen, und die Fitness fllt mit dem Alter, ein Wert, der mit 60 hervorragend ist, wre mit 25 unauffllig. Wichtiger als dein Standort ist, in welche Richtung du dich bewegst.",
    },
    {
      q: "Wie verbessere ich meine VO2max?",
      a: "Die aerobe Fitness steigt mit konsequentem Training. Das wchentliche Ziel ber die groen Leitlinien hinweg sind 150 bis 300 Minuten moderate Aktivitt oder 75 bis 150 Minuten intensive Aktivitt, dazu mindestens zweimal pro Woche muskelkrftigendes Training, mit eingebauter Erholung. Regelmiges Training halbiert ungefhr den natrlichen altersbedingten Rckgang. Sprich mit einer rztin oder einem Arzt, bevor du mit intensivem Sport beginnst, wenn du inaktiv warst oder eine Herz-, Lungen- oder Stoffwechselerkrankung hast.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Warum ist der BMI ein begrenztes Ma fr Gesundheit?",
      a: "Der BMI ist ein gnstiger, wiederholbarer Nherungswert fr den Krperfettanteil, kann aber Muskel nicht von Fett unterscheiden, ein muskulser Mensch kann also im bergewichtsbereich landen, whrend ein lterer Mensch, der Muskeln verloren hat, bequem im Normalbereich sitzt. Er ignoriert auch, wo das Fett sitzt, und seine Grenzwerte wurden berwiegend aus europischen Populationen gezogen und bergen bei niedrigerem BMI ein hheres Risiko fr Menschen sd- und ostasiatischer Abstammung.",
    },
    {
      q: "Warum ist wichtiger, wo ich Fett trage, als mein Gewicht?",
      a: "Fett um die Taille, eingelagert zwischen den Bauchorganen, ist stoffwechselseitig weit schdlicher als Fett an Hften und Oberschenkeln und sagt Diabetes, Bluthochdruck und Herz-Kreislauf-Risiko unabhngig vom BMI voraus. Eine einfache Faustregel, die ber Geschlechter und Herknfte hinweg gut trgt, ist, den Taillenumfang unter der Hlfte der Krpergre zu halten.",
    },
    {
      q: "Warum springt mein Gewicht ber Nacht nach oben?",
      a: "Das Krpergewicht schwankt im Lauf eines normalen Tages und von einem Tag zum nchsten um ein bis zwei Kilogramm, allein durch Flssigkeitshaushalt, noch in Verdauung befindliches Essen und Salz, nichts davon ist Fett. Beobachte einen gleitenden Sieben-Tage-Durchschnitt, dann hebt sich das Rauschen auf und die Linie bleibt, die wirklich etwas bedeutet. Dasselbe gilt fr einen Krperfettanteil von einer Waage.",
    },
    {
      q: "Wie viel Gewicht muss ich verlieren, um meine Gesundheit zu verbessern?",
      a: "Bei Erwachsenen mit bergewicht oder Adipositas verbessert ein dauerhafter Verlust von nur 5 bis 10 Prozent des Krpergewichts Blutzucker, Blutdruck und Blutfette deutlich, ein weit besseres Ziel als jede einzelne Zahl auf der Anzeige. Eine moderate, dauerhafte Vernderung ist das Ziel, das sich zu verfolgen lohnt, nicht eine dramatische Zahl.",
    },
  ],
  "tracking-mood": [
    {
      q: "Was bringt es, meine Stimmung zu verfolgen?",
      a: "Ein Eintrag ist eine Meinung; ein paar hundert Eintrge sind ein Trend, und ein Trend ist Daten. ber Wochen konsequent protokolliert bringt eine einfache Stimmungsskala Muster ans Licht, die kein einzelner Tag verrt, etwa ein langsames Abdriften ber eine belastende Phase, den verlsslichen Aufschwung nach Bewegung oder ein Tief, das in einem vorhersehbaren monatlichen Rhythmus eintrifft.",
    },
    {
      q: "Wie sollte ich meine Stimmung festhalten, damit es ntzlich ist?",
      a: "Konsistenz ist die ntzlichste Gewohnheit: gleiche Skala, gleiche Tageszeit, jeden Tag. Selbsteinschtzung reagiert empfindlich auf Tageszeit, jngste Ereignisse und darauf, wie du geschlafen hast, eine einmalige Messung ist also verrauscht. Auf dieselbe Weise gemessen mittelt sich das Schwanken von Tag zu Tag heraus und die zugrunde liegende Richtung wird lesbar.",
    },
    {
      q: "Was ist ein besorgniserregender Wert in einem Stimmungsfragebogen?",
      a: "Auf den validierten Screenings deutet ein WHO-5 von 50 Prozent oder darunter auf schlechtes Wohlbefinden hin, und eine PHQ-9- oder GAD-7-Gesamtpunktzahl von 10 oder darber ist die bliche Handlungsschwelle. Das sind bereinstimmende, gut etablierte Screenings, aber ein positives Ergebnis ist ein Anlass, mit einer Fachperson zu sprechen, keine Diagnose, die du zu Hause stellen kannst.",
    },
    {
      q: "Wann sollte mich eine gedrckte Stimmung dazu bringen, Hilfe zu suchen?",
      a: "Wenn sie anhlt: ein Abwrtstrend, der zwei Wochen oder lnger besteht oder beginnt, den Alltag zu beeintrchtigen, ist ein Grund, mit einer rztin, einem Arzt oder einer psychologischen Fachperson zu sprechen, und du musst nicht warten, bis es sich schwerwiegend anfhlt. Jeder Gedanke, dir selbst zu schaden, ist fr sich allein ein Grund, sofort die rtliche Notrufnummer oder einen Krisendienst zu kontaktieren.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Warum gilt der Menstruationszyklus als Vitalzeichen?",
      a: "Fachgesellschaften bitten Behandelnde, den Zyklus so zu behandeln wie Puls, Blutdruck und Temperatur, weil er ein wiederkehrender Rhythmus ist, der stabil bleibt, wenn alles in Ordnung ist, sodass eine Verschiebung darin Information trgt. Zykluslnge und Regelmigkeit sind ein zugnglicher Einblick in die reproduktive und allgemeine Gesundheit.",
    },
    {
      q: "Was ist eine normale Zykluslnge?",
      a: "Zwei serise Bereiche gelten beide. Der patientennahe Bereich beschreibt alltgliche gesunde Zyklen bei Erwachsenen als 21 bis 35 Tage, whrend der klinische Screening-Rahmen 24 bis 38 Tage angibt. Eine Schwankung von etwa einer Woche von Monat zu Monat ist gewhnlich, und die Lutealphase ist der relativ konstante Anker, wobei die meiste Lngenschwankung in der Follikelphase liegt.",
    },
    {
      q: "Kann ich mich bei der Verhtung auf eine Zyklus-Tracking-App verlassen?",
      a: "Nein. Algorithmische Zyklusvorhersagen aus jeder App, jedem Wearable oder Gert sind keine Verhtungsmethode. Auf Bevlkerungsvorgaben beruhende Vorhersagen sind unzuverlssig, der Eisprungzeitpunkt schwankt selbst bei regelmigen Zyklen stark, und die Perimenopause macht Zyklen wieder unvorhersehbar. Wer auf natrliche Familienplanung setzt, sollte eine validierte, ordentlich angeleitete Methode nutzen, nicht ein einzelnes vorhergesagtes Datum.",
    },
    {
      q: "Wann sollte ich wegen meines Zyklus eine rztin oder einen Arzt aufsuchen?",
      a: "Sprich es an, wenn Zyklen dauerhaft auerhalb des typischen Bereichs liegen, mit Abstnden krzer als etwa 21 Tage oder lnger als etwa 45, oder es eine deutliche anhaltende Vernderung gegenber deinem eigenen Muster gibt. Eine Lcke von 90 Tagen oder mehr, eine Blutung von mehr als 7 Tagen oder das Durchnssen einer Binde hufiger als alle ein bis zwei Stunden sowie Blutungen zwischen den Perioden gehren alle abgeklrt.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "Wie misst ein Wearable meine Herzfrequenz?",
      a: "Die meisten nutzen Photoplethysmographie: Eine grne LED strahlt Licht in die Haut, das Blut absorbiert einen Teil davon, und ein Sensor zhlt die Pulse, whrend das Blutvolumen mit jedem Schlag steigt und fllt. In Ruhe funktioniert das gut, hat aber bei Bewegung Mhe, weshalb die Handgelenks-Herzfrequenz bei Intervallen oder Krafttraining die unzuverlssigste Messung ist, die die meisten besitzen. Ein Brustgurt bleibt durch Bewegung hindurch genau.",
    },
    {
      q: "Woher kennt meine Uhr meine Schlafphasen?",
      a: "Sie sieht dein Gehirn nicht. Sie leitet den Schlaf daraus ab, wie wenig du dich bewegst, oft kombiniert mit Herzfrequenz und ihrer Schlag-zu-Schlag-Schwankung, und teilt die Nacht dann in Leicht-, Tief- und REM-Schlaf ein. Gegen den klinischen Laborstandard sind Gerte recht gut bei schlafend-oder-wach und deutlich schwcher bei der Frage, welche Phase, lies Schlafenszeit und Gesamtdauer also mit Zuversicht und behandle die farbigen Phasen als Schtzung.",
    },
    {
      q: "Sind Wearable-Messwerte genau?",
      a: "Das meiste, was ein Wearable dir zeigt, ist eine Schtzung, keine Labormessung. Optische Herzfrequenz, abgeleitete Schlafphasen, SpO2 am Handgelenk und jeder Erholungs- oder Bereitschaftswert sind Modelle, gebaut auf wenigen echten Signalen, genau genug, um Vernderungen ber die Zeit zu zeigen, aber selten przise genug, um einen einzelnen Wert als Tatsache zu behandeln. Lies sie relativ, nicht absolut.",
    },
    {
      q: "Was messen Erholungs- und Bereitschaftswerte eigentlich?",
      a: "Sie werden berhaupt nicht gemessen; es sind proprietre Modelle, die rohe Sensordaten, typischerweise nchtliche HRV, Ruheherzfrequenz und Schlaf, mit deinem Alter, Gewicht und Verlauf vermischen, um eine einzelne Zahl zu erzeugen. Sie haben keinen klinischen Referenzbereich und sind ber Gerte hinweg nicht standardisiert, lies sie also als tglichen Anhaltspunkt, nicht als klinische Messung.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Warum ist meine eigene Ausgangslinie besser als der Normbereich?",
      a: "Ein Referenzbereich ist gebaut, um den kleinen Anteil von Menschen zu kennzeichnen, die weit auerhalb der typischen Streuung liegen; er war nie dafr gedacht, dir zu sagen, ob heute ein guter Tag ist. Weil die Unterschiede zwischen Menschen gro sind, sieht eine Ruheherzfrequenz von 58 gegenber dem Lehrbuchbereich unauffllig aus, ist aber ein klarer Anstieg um sechs Schlge, wenn deine Ausgangslinie 52 betrgt, eine Vernderung, die der Bevlkerungsbereich vllig verbirgt.",
    },
    {
      q: "Wie unterscheide ich ein echtes Signal von zuflligem Rauschen?",
      a: "Rauschen ist ein Wert nahe am Rand deines blichen Bereichs oder eine kleine Bewegung, die sich am nchsten Tag wieder umkehrt. Signal ist eine Richtung, die anhlt: eine mehrtgige Verschiebung deutlich ber deine bliche Streuung hinaus oder ein langsames Driften des gleitenden Durchschnitts ber Wochen. Ein gleitender Durchschnitt glttet die Streuung, und eine Vernderung, die mehrmals so gro ist wie dein bliches Schwanken von Tag zu Tag, verdient Aufmerksamkeit.",
    },
    {
      q: "Wie lange dauert es, bis eine Ausgangslinie verlsslich ist?",
      a: "Eine Messung ist ein Punkt ohne Kontext. Ein neues Signal braucht ein paar Wochen konsistenter Messungen, bevor eine einzelne Zahl etwas bedeutet, denn erst dann hat sich das tgliche Rauschen zu einer Ausgangslinie gemittelt, auf die du dich wirklich verlassen kannst.",
    },
    {
      q: "Warum ist es so wichtig, unter gleichen Bedingungen zu messen?",
      a: "Ein Trend ist nur ehrlich, wenn die Bedingungen dahinter konstant bleiben. Die Ruheherzfrequenz beim Aufwachen liegt deutlich unter derselben Frequenz nach Kaffee und Treppen, und das Gewicht vor dem Frhstck liegt ein Kilogramm unter demselben Krper nach dem Abendessen. Ein leicht unvollkommenes Gert, jeden Tag gleich verwendet, schlgt ein besseres, das willkrlich genutzt wird.",
    },
  ],
  "steps-and-movement": [
    {
      q: "Woher kommt das Ziel von 10.000 Schritten?",
      a: "Es war nie ein Forschungsergebnis. Es geht auf einen japanischen Schrittzhler zurck, der um die Olympischen Spiele 1964 in Tokio vermarktet wurde und dessen Name Zehntausend-Schritte-Messer bedeutete, teils gewhlt, weil das Schriftzeichen fr 10.000 einem gehenden Menschen hnelt, teils weil es eine einprgsame runde Zahl war, um ein Gert zu verkaufen. Behandle es als Folklore, nicht als Leitlinie.",
    },
    {
      q: "Wie viele Schritte am Tag brauche ich tatschlich?",
      a: "Der grte Teil des Sterblichkeitsnutzens wird deutlich unter 10.000 erreicht. Studien zeigen sinkende Sterberaten mit steigenden Schritten, wobei die Kurve irgendwo bei 6.000 bis 8.000 Schritten am Tag fr ltere Erwachsene und 8.000 bis 10.000 fr jngere abflacht. Die Kurve flacht ab, sie kehrt sich nicht um, mehr zu gehen ist also kein Problem, es bringt nur pro Schritt weniger.",
    },
    {
      q: "Ist es besser, auf einmal zu gehen oder ber den Tag verteilt?",
      a: "Bewegung ber den Tag zu verteilen hilft. Lang andauerndes ununterbrochenes Sitzen wird zunehmend als eigener Risikofaktor behandelt, etwas unabhngig davon, ob du dich auch bewegst, weshalb die aktuelle Empfehlung mehr-bewegen mit weniger-sitzen koppelt. Ein paar Minuten Gehen jede Stunde, die Treppe und ein Spaziergang nach den Mahlzeiten summieren sich alle.",
    },
    {
      q: "Was sagt mir eine Schrittzahl nicht ber meine Gesundheit?",
      a: "Sie ist ein Mengenmesser, kein Fitnesstest. Sie sagt nichts ber Intensitt oder Kraft, kann eine zgige Meile bergauf nicht von langsamen Schritten um die Kche unterscheiden und misst nicht die kardiorespiratorische Fitness, einen der strksten Vorhersagewerte fr langfristige Gesundheit. Schritte gehren in eine bersicht neben andere Signale, nicht auf ein Podest.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "Wie wirkt sich Koffein auf meine Herzfrequenz und meinen Blutdruck aus?",
      a: "Koffein blockiert Adenosin und lsst das sympathische Gaspedal freier laufen, die Herzfrequenz steigt also leicht und der Blutdruck vorbergehend an, am ausgeprgtesten bei Menschen, die es nicht regelmig trinken. Ein Kaffee eine Stunde vor der Messung kann sowohl deine Ruheherzfrequenz als auch deinen Blutdruck merklich nach oben schieben.",
    },
    {
      q: "Wirkt sich Nachmittagskaffee wirklich auf meinen Schlaf aus?",
      a: "Oft strker, als du es sprst. Die Halbwertszeit von Koffein liegt blicherweise bei etwa fnf Stunden, eine nachmittgliche Tasse hat zur Schlafenszeit also noch die Hlfte ihrer Dosis im Umlauf. In einer kontrollierten Studie reduzierte eine Dosis entsprechend einem starken Kaffee, sechs Stunden vor dem Zubettgehen eingenommen, die Gesamtschlafzeit messbar, obwohl die Teilnehmenden die Strung unterschtzten.",
    },
    {
      q: "Warum ist meine HRV niedrig und meine Herzfrequenz hoch nach dem Trinken?",
      a: "Whrend der Krper Alkohol ber Nacht abbaut, bleibt die sympathische Seite eingeschaltet, die Ruheherzfrequenz luft also erhht und die HRV fllt, wobei grere Mengen grere und lnger anhaltende Effekte erzeugen. Deshalb kann ein einzelnes Glas zum Abendessen deinen Erholungswert still drcken, whrend du das Ganze verschlfst.",
    },
    {
      q: "Heit das, ich sollte Koffein und Alkohol aufgeben?",
      a: "Nicht unbedingt. Der Wert liegt in der Zuordnung, nicht im Verzicht. Deine eigenen Daten zu beobachten zeigt, wie spt zu spt fr Koffein ist, bevor dein Schlaf leidet, und wie viel Alkohol es braucht, bis deine nchtliche Herzfrequenz steigt, sodass du aufhrst, einen vorhersehbaren, vorbergehenden Einbruch mit einem Zeichen zu verwechseln, dass etwas nicht stimmt.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Brauche ich wirklich acht Glser Wasser am Tag?",
      a: "Es gibt keine starke wissenschaftliche Grundlage fr eine allgemeine Acht-Glser-Regel; bersichtsarbeiten, die der Behauptung nachgingen, fanden keinen glaubwrdigen Beleg dahinter. Magebende Gremien geben Bevlkerungsreferenzwerte fr die Gesamtwasseraufnahme aus allen Quellen an, etwa 2 bis 2,7 Liter am Tag fr Frauen und 2,5 bis 3,7 fr Mnner, und betonen, dass der Bedarf je nach Krpergre, Aktivitt, Klima und Ernhrung stark schwankt.",
    },
    {
      q: "Woher wei ich, ob ich genug trinke?",
      a: "Fr die meisten gesunden Menschen an einem gewhnlichen Tag sind die krpereigenen Signale vernnftige Wegweiser. Durst ist ein echter, funktionierender Sensor, und nach Durst zu trinken hlt die meisten gesunden Erwachsenen ausreichend hydriert. Die Urinfarbe ist eine grobe Kontrolle fr zu Hause: blasses Strohgelb deutet darauf hin, dass alles passt, durchgehend dunkel darauf, dass du mehr trinken knntest.",
    },
    {
      q: "Warum erhht Flssigkeitsmangel meine Herzfrequenz?",
      a: "Wenn du so viel Flssigkeit verlierst, dass das Blutvolumen fllt, gleicht das Herz aus, indem es schneller schlgt, um den Kreislauf stabil zu halten, Flssigkeitsmangel schiebt die Ruhe- und Belastungsherzfrequenz also nach oben. Schon milde Defizite von ein bis zwei Prozent der Krpermasse reichen, um die Stimmung zu trben, das Anstrengungsempfinden zu erhhen und die Konzentration zu beeintrchtigen.",
    },
    {
      q: "Kann man zu viel Wasser trinken?",
      a: "Ja. Weit ber den Bedarf zu trinken, am hufigsten bei Ausdauerveranstaltungen, kann das Natrium im Blut zu einem gefhrlichen Zustand namens Hyponatrimie verdnnen, dessen frhe Anzeichen sich mit denen von Flssigkeitsmangel berschneiden. Wer eine Herz-, Nieren- oder Lebererkrankung hat oder Medikamente nimmt, die den Flssigkeitshaushalt beeinflussen, hat mglicherweise ein bewusst begrenztes Ziel und sollte rztlichem Rat vor jeder allgemeinen Regel folgen.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "Wie zeigt sich Stress in meinen Gesundheitsdaten?",
      a: "Stress ist das niedergedrckte sympathische Gaspedal, und er speist viele Werte aus einer Quelle, sie bewegen sich also gemeinsam. Die Ruheherzfrequenz steigt, die nchtliche HRV fllt, der Schlaf wird leichter und unterbrochener, und die Atemfrequenz ist mitunter erhht. Kein einzelnes Signal ist entscheidend, aber als Bndel gegen deine eigene Ausgangslinie gelesen sind sie schwer zu widerlegen.",
    },
    {
      q: "Was ist der Unterschied zwischen akutem und chronischem Stress?",
      a: "Akute Stressoren wie ein hartes Training oder eine Deadline verschieben die Werte, und nach einer oder zwei Nchten echter Ruhe kehrt alles zur Ausgangslinie zurck; diese Rckkehr ist der Sinn. Bedenklich wird es, wenn die Rckkehr ausbleibt und der Krper die kumulative Last der allostatischen Belastung trgt, in den Daten ablesbar als eine Ausgangslinie, die sich still verschoben hat und verschoben geblieben ist.",
    },
    {
      q: "Ist Erholung einfach die Abwesenheit von Stress?",
      a: "Nein. Erholung ist ein aktiver parasympathischer Prozess, die vagale Bremse greift wieder, die Herzfrequenz fllt und der Tiefschlaf leistet die Reparaturarbeit, weshalb sie sich als positives Signal zeigt, nicht als bloes Verstummen der Zahlen. Das heit, sie lsst sich untersttzen, nicht nur abwarten, durch geschtzten regelmigen Schlaf, leichte aerobe Bewegung und Tageslicht.",
    },
    {
      q: "Wann sollte ich anhaltenden Stress ernst nehmen?",
      a: "Diese Signale knnen anhaltende Belastung anzeigen, aber nicht sagen, warum, und sie sind kein Ersatz dafr, wie du dich fhlst. Stress, der ber Wochen deinen Schlaf, deine Konzentration oder deine Freude an alltglichen Dingen strt, gehrt mit einer rztin, einem Arzt oder einer psychologischen Fachperson besprochen, was auch immer die Zahlen sagen. Wenn sich Belastung jemals berwltigend anfhlt oder du Gedanken an Selbstverletzung hast, kontaktiere sofort die rtliche Notrufnummer oder einen Krisendienst.",
    },
  ],
};
export default FAQ;
