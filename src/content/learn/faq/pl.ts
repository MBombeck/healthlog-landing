export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Czy powinienem porównywać swoje wyniki zdrowotne z zakresem normy, czy z samym sobą?",
      a: "Wychodź zawsze od własnej linii bazowej. Przy niemal każdym sygnale wartym śledzenia różnice między ludźmi są znacznie większe niż twoje wahania z dnia na dzień, więc wynik, który na wykresie populacyjnym wygląda przeciętnie, może być twoim rekordem życiowym albo sygnałem ostrzegawczym. Opublikowane zakresy traktuj tylko jako punkt odniesienia, a nie jako ranking, w którym musisz zająć dobre miejsce.",
    },
    {
      q: "Dlaczego nie powinienem reagować na pojedynczy pomiar zdrowotny?",
      a: "Organizm po prostu szumi. Zmienność rytmu serca potrafi z dnia na dzień skakać o jakieś dziesięć procent czysto przypadkowo, a masa ciała dryfuje o kilogram czy dwa wyłącznie za sprawą wody, więc jeden wyższy albo niższy wynik mieści się zwykle w tym normalnym rozrzucie. Liczy się to, w którą stronę zmierza średnia krocząca przez dni i tygodnie, a nie pojedynczy punkt na wykresie.",
    },
    {
      q: "Dlaczego kilka moich wskaźników zmienia się jednocześnie?",
      a: "Wszystkie opowiadają o tych samych układach w organizmie, tyle że z różnej perspektywy. Kiepska noc albo alkohol zwykle podbijają tętno spoczynkowe i zbijają HRV; początek infekcji jednocześnie podnosi tętno spoczynkowe, częstość oddechów i temperaturę, a HRV przy tym spada. Dwa albo trzy sygnały idące naraz w tę samą stronę mówią więcej niż którykolwiek z osobna.",
    },
    {
      q: "Czy wskaźniki zdrowotne z urządzeń noszonych zastępują wizytę u lekarza?",
      a: "Nie. Tętno spoczynkowe, HRV, oceny snu i cała reszta to wskazówki o twoim samopoczuciu — przydatne, by wychwycić zmianę i zadać lekarzowi lepsze pytania, ale nigdy nie diagnoza. Alert z urządzenia, choćby sygnał nieregularnego rytmu, to powód, żeby się zbadać, a nie gotowy wynik. O wszystkim, co cię niepokoi, porozmawiaj z lekarzem.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "Jakie tętno spoczynkowe jest prawidłowe?",
      a: "Klasyczny zakres dla dorosłych to 60 do 100 uderzeń na minutę, a osoby wytrenowane wytrzymałościowo często schodzą w przedział 40-60. Ten zakres wyznaczono z myślą o bezpieczeństwie klinicznym, a nie o optymalnym zdrowiu, a duże badania pokazują, że ryzyko rośnie dość równomiernie w miarę wzrostu tętna spoczynkowego — dlatego trend liczy się bardziej niż pojedynczy pomiar.",
    },
    {
      q: "Kiedy najlepiej mierzyć tętno spoczynkowe?",
      a: "Najlepiej tuż po przebudzeniu, zanim usiądziesz, sięgniesz po telefon albo wypijesz kawę. Wynik staje się porównywalny dopiero wtedy, gdy mierzysz go za każdym razem w tych samych warunkach, więc odczyt robiony konsekwentnie jest wart znacznie więcej niż dokładniejszy, ale wykonany przypadkowo.",
    },
    {
      q: "Dlaczego moje tętno spoczynkowe nagle wzrosło na kilka dni?",
      a: "Nagły, niewyjaśniony skok o kilka uderzeń, który trzyma się przez parę dni, to organizm po cichu daje znać, że coś się dzieje — często początek infekcji, niewyspanie nałożone na stres, odwodnienie, alkohol z poprzedniego wieczoru albo za dużo treningu i za mało regeneracji. Podnoszą je też kofeina, gorączka, upał, lęk i niektóre leki.",
    },
    {
      q: "Kiedy powinienem martwić się o swoje tętno spoczynkowe?",
      a: "Z lekarzem warto omówić tętno spoczynkowe, które bez wyraźnego powodu trzyma się powyżej 100, niskie tętno z zawrotami głowy, omdleniami lub dusznością, a także nawracające nieregularne tętno. Alert o nieregularnym rytmie z urządzenia noszonego to powód, żeby się zbadać, a nie diagnoza — tylko EKG może potwierdzić zaburzenie rytmu.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "Jakie HRV jest dobre?",
      a: "Nie ma jednej dobrej wartości dla wszystkich. Różnice HRV między ludźmi są ogromne, więc twoja zdrowa linia bazowa może być jedną trzecią czyjejś — i obie są w porządku. HRV gwałtownie spada z wiekiem, zależy też od długości pomiaru i pozycji ciała, więc bezwzględne liczby nie przekładają się ani między ludźmi, ani między urządzeniami. Czytaj własny trend, a nie cudzy ranking.",
    },
    {
      q: "Dlaczego moje HRV tak bardzo zmienia się z nocy na noc?",
      a: "HRV jest wyjątkowo czułe na warunki. Zmieniają je pozycja ciała, częstość oddechów, pora dnia, ostatni posiłek, kofeina, choroba, sen i ostry stres, a alkohol tłumi je tym mocniej, im więcej go wypijesz. Wahania z nocy na noc rzędu dziesięciu procent to norma i same w sobie nic nie znaczą — dlatego uczciwą miarą jest siedmiodniowa średnia krocząca.",
    },
    {
      q: "Dlaczego moje HRV jest niskie po wypiciu alkoholu?",
      a: "Alkohol tłumi HRV tym mocniej, im więcej go wypijesz, a najsilniej w noc po spożyciu i następnego ranka — często wtedy, gdy tętno i ciśnienie krwi wciąż wyglądają zupełnie normalnie. Spadek po jednym wieczorze z drinkiem, późną kolacją czy ciężkim treningiem jest do przewidzenia i cofa się sam; zapisywanie takich oczywistych czynników zakłócających pozwala odróżnić go od istotnego, trwałego spadku.",
    },
    {
      q: "Kiedy niskie HRV naprawdę ma znaczenie?",
      a: "Samo HRV jest zbyt zmienne, żeby na nim alarmować. Coś zaczyna oznaczać dopiero wtedy, gdy trwały spadek poniżej twojej osobistej linii bazowej zbiega się z rosnącym tętnem spoczynkowym i wyższą nocną częstością oddechów — to wtedy działa jak delikatne wczesne ostrzeżenie przed chorobą albo przemęczeniem. Spadkowy trend z objawami w rodzaju duszności czy kołatania serca, albo powtarzające się sygnały nieregularnego rytmu, to powód, żeby pójść do lekarza.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "Co oznaczają dwie liczby ciśnienia krwi?",
      a: "Liczba skurczowa, ta na górze, to ciśnienie w tętnicach w chwili, gdy serce się kurczy i wypycha krew; liczba rozkurczowa pod spodem to ciśnienie resztkowe, gdy serce rozluźnia się i napełnia między uderzeniami. Obie podaje się w milimetrach słupa rtęci i każda z osobna niesie własne ryzyko, więc żadna nie jest tą ważniejszą.",
    },
    {
      q: "Jakie ciśnienie krwi uznaje się za wysokie?",
      a: "Obie główne grupy eksperckie zgadzają się, że nadciśnienie jako choroba zaczyna się od 140/90 zmierzonego w gabinecie. Różnią się tym, jak nazywają wartości poniżej tego progu: wytyczne amerykańskie nazywają 130 do 139 na 80 do 89 nadciśnieniem stopnia 1, a europejskie te same liczby — jedynie podwyższonym ciśnieniem. Ryzyko rośnie płynnie już od mniej więcej 115/75 w górę, bez wyraźnej granicy, poniżej której znikałoby zupełnie.",
    },
    {
      q: "Jak prawidłowo mierzyć ciśnienie krwi w domu?",
      a: "Najpierw posiedź spokojnie pięć minut, z podpartymi plecami i stopami płasko na podłodze, z ramieniem opartym na wysokości serca i prawidłowo dobranym mankietem. Wcześniej odpuść sobie kofeinę, papierosa i rozmowę. Technika zmienia wynik bardziej niż niemal wszystko, co tego dnia dzieje się w twoim organizmie, a uznanym standardem są uśrednione pomiary z kilku dni poza gabinetem — przy czym o nadciśnieniu domowym mówimy od mniej więcej 135/85.",
    },
    {
      q: "Kiedy wysoki odczyt ciśnienia krwi jest stanem nagłym?",
      a: "Pojedynczy wysoki odczyt to jeszcze nie stan nagły — zmierz ponownie po minucie. Jeśli bez żadnych objawów wciąż wynosi 180/120 lub więcej, niezwłocznie skontaktuj się z lekarzem. Jeśli sięga 180/120 lub więcej i towarzyszy mu ból w klatce piersiowej, duszność, objaw neurologiczny lub zaburzenie widzenia albo silny ból głowy, potraktuj to jak stan nagły i wezwij pogotowie.",
    },
  ],
  "sleep-consistency": [
    {
      q: "Ile godzin snu naprawdę potrzebują dorośli?",
      a: "Krajowe wytyczne dają dorosłym w wieku 18 do 64 lat 7 do 9 godzin na dobę, a osobom starszym 7 do 8, z uzgodnioną dolną granicą: regularnie co najmniej 7 godzin. Zależność ma kształt litery U, a nie zasady „im więcej, tym lepiej” — ryzyko niosą zarówno sen nawykowo krótki, jak i nawykowo bardzo długi.",
    },
    {
      q: "Czy regularność snu jest ważniejsza niż jego długość?",
      a: "Liczy się jedno i drugie, a pora bywa równie ważna co długość. W dużym badaniu regularność godzin snu przewidywała śmiertelność co najmniej tak mocno jak jego długość — nawet po uwzględnieniu liczby przespanych godzin. Dwie osoby mogą wypracować identyczną liczbę godzin, ale ta, która kładzie się o tej samej porze każdej nocy, wychodzi na tym wymiernie lepiej.",
    },
    {
      q: "Czy mogę odespać utracony sen w weekend?",
      a: "Tylko częściowo. Dług snu to narastająca suma nocy, w które spałeś za krótko, a wychodzenie z niego jest niepełne i nierównomierne, więc jeden długi weekend nie odrobi w całości kilku skróconych nocy. Spójny harmonogram liczy się bardziej niż próba spłacenia całego długu za jednym razem.",
    },
    {
      q: "Czy fazy snu głębokiego i REM z mojego trackera są dokładne?",
      a: "Do podziału na fazy podchodź sceptycznie. Urządzenia konsumenckie rozdzielają sen na głęboki, REM i lekki tylko z umiarkowaną zgodnością ze standardem z laboratorium snu i zwykle zawyżają, ile naprawdę spałeś. Całkowity czas snu i godzina zaśnięcia są znacznie bardziej wiarygodne niż jakikolwiek odsetek snu głębokiego — fazy traktuj jako orientacyjny, osobisty trend.",
    },
  ],
  "respiratory-rate": [
    {
      q: "Jaka jest prawidłowa częstość oddechów?",
      a: "Standardowy zakres spoczynkowy dla dorosłych to 12 do 20 oddechów na minutę. Jest szeroki, więc wartość nabiera znaczenia dopiero w odniesieniu do twojej własnej zwykłej liczby, a nie do zakresu populacyjnego. Dzieci oddychają szybciej, a wytrenowani sportowcy wytrzymałościowi zwykle siedzą w dolnej części tego przedziału.",
    },
    {
      q: "Dlaczego częstość oddechów mierzy się w nocy, a nie w ciągu dnia?",
      a: "Na jawie częstość oddechów to jedna z najbardziej zmiennych liczb, jakie wytwarza organizm; rozchwiewają ją mówienie, ruch, emocje, a nawet sama świadomość, że ktoś cię mierzy, więc pojedynczy pomiar w ciągu dnia jest prawie bez wartości. We śnie te wpływy zanikają, a twoja nocna częstość ustala się na zaskakująco równym poziomie — i właśnie dlatego prawdziwe odchylenie łatwo wychwycić.",
    },
    {
      q: "Co oznacza, jeśli moja nocna częstość oddechów wzrasta?",
      a: "Trwały wzrost o jakieś trzy oddechy na minutę ponad twoją własną nocną liczbę może zwiastować, że coś się rozwija — często jeszcze zanim poczujesz się źle. To sygnał ogólny, typowy dla infekcji: mówi, że organizm pracuje ciężej, a nie co konkretnie szwankuje. Podbić go potrafią też zwykłe rzeczy, jak ciężki późny trening, alkohol czy gorące, duszne pomieszczenie.",
    },
    {
      q: "Kiedy częstość oddechów jest stanem nagłym?",
      a: "Częstość powyżej 25 na minutę razem z dusznością, splątaniem lub niskim odczytem natlenienia krwi wymaga pilnej pomocy medycznej. Groźniejszy kierunek to wolny, płytki oddech, zwłaszcza depresja oddechowa po opioidach lub lekach uspokajających; jeśli ktoś oddycha bardzo wolno, trudno go dobudzić albo ma sine usta, potraktuj to jak stan nagły i wezwij pomoc.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "Jaki jest prawidłowy poziom natlenienia krwi?",
      a: "U zdrowego dorosłego oddychającego zwykłym powietrzem na poziomie morza SpO2 mieści się między 95 a 100 procent, a większość odczytów skupia się w przedziale 96 do 99. Dolna granica zależy od okoliczności: na dużej wysokości normą bywa około 90 procent, a osoby z przewlekłą chorobą płuc żyją z niższą osobistą linią bazową. Powyżej tego zakresu nie ma żadnej nagrody — wyżej nie znaczy lepiej.",
    },
    {
      q: "Dlaczego mój odczyt SpO2 na nadgarstku jest niski?",
      a: "Pojedynczy niski odczyt to częściej błąd pomiaru niż powód do paniki. Czujnik na nadgarstku jest dalej od pulsującego łożyska tętniczego i gorzej radzi sobie z ruchem oraz luźniejszym przyleganiem, a zimne dłonie, obluzowana opaska, lakier do paznokci czy światło z otoczenia jeszcze zaniżą wynik. Zanim zaufasz spadkowi, powtórz pomiar rozgrzany, w bezruchu i z dobrze ukrwioną ręką.",
    },
    {
      q: "Czy mogę użyć SpO2 do wykrycia bezdechu sennego?",
      a: "Powtarzające się nocne spadki natlenienia to jeden z elementów badania przesiewowego w kierunku bezdechu sennego, więc urządzenie, które je wyłapuje, może dać wczesną wskazówkę — ale nie diagnozę. Głośne chrapanie z zauważalnymi przerwami w oddychaniu albo sen, który nie daje wypoczynku, plus senność w ciągu dnia, warto omówić z lekarzem, żeby porządnie to ocenić.",
    },
    {
      q: "Czy pulsoksymetry są mniej dokładne na ciemniejszej skórze?",
      a: "Tak. U osób o ciemniejszej karnacji pulsoksymetry potrafią zawyżać rzeczywiste wysycenie tlenem — pokazują uspokajającą liczbę, choć faktyczne wysycenie jest niższe. Udokumentowano to w danych szpitalnych i poddano przeglądowi przez amerykańskie organy nadzoru. Normalnie wyglądający odczyt nigdy nie powinien brać góry nad dusznością, splątaniem ani zwykłym poczuciem, że coś jest nie tak.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "Czy 37 stopni Celsjusza to wciąż prawidłowa temperatura ciała?",
      a: "To stara średnia, którą współczesne dane trochę obniżyły. Obszerny przegląd ustalił średnią populacyjną na 36,59 C, z prawidłowym zakresem pomiaru w jamie ustnej mniej więcej od 35,7 do 37,4 C — na tyle szerokim, że dwie zdrowe osoby mogą różnić się o prawie dwa stopnie. Odczyt 36,7 C mieści się dokładnie w normie, a nie poniżej niej.",
    },
    {
      q: "Dlaczego moja temperatura zmienia się w ciągu dnia?",
      a: "Temperatura idzie za rytmem dobowym i waha się o jakieś pół stopnia między najniższym punktem nad ranem, mniej więcej od 4 do 8 rano, a szczytem wczesnym wieczorem, około 18 do 20. Wieczorny odczyt, który wydaje się nieco za wysoki, to często zwyczajny dobowy szczyt — dlatego porównuj pomiary robione o tej samej porze dnia i w tym samym miejscu na ciele.",
    },
    {
      q: "Czy temperatura skóry z urządzenia noszonego to to samo co temperatura ciała?",
      a: "Nie. Temperatura skóry z urządzenia noszonego to nie temperatura głęboka ciała, tylko nocne odchylenie od twojej własnej linii bazowej z wielu nocy — bez wiarygodnego zakresu klinicznego. Dobrze wykorzystana potrafi podpowiedzieć przejście w stan podgorączkowy, zanim pojawią się objawy, ale każdy niepokój o gorączkę trzeba potwierdzić rzeczywistym pomiarem w jamie ustnej.",
    },
    {
      q: "Jaka temperatura liczy się jako gorączka i kiedy szukać pomocy?",
      a: "O gorączce mówimy przy temperaturze 38,0 C lub wyższej, mierzonej w jamie ustnej. U dorosłych zwykle bardziej liczą się objawy i to, jak długo trwają, niż dokładna liczba, ale po pomoc sięgnij przy około 39,4 C albo przy każdej gorączce z dusznością, bólem w klatce piersiowej, silnym bólem głowy, splątaniem, sztywnością karku lub wysypką. Gorączka u niemowlęcia poniżej trzeciego miesiąca życia zawsze wymaga pilnej oceny.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "Jaki jest prawidłowy poziom cukru we krwi na czczo?",
      a: "Poniżej 100 mg/dl (poniżej 5,6 mmol/l) to norma według Amerykańskiego Towarzystwa Diabetologicznego, a przedział stanu przedcukrzycowego sięga od 100 do 125; WHO zaczyna stan przedcukrzycowy dopiero przy 110. Obie instytucje przyjmują ten sam próg cukrzycy: 126 mg/dl lub więcej. Pojedynczy nieprawidłowy odczyt niczego nie rozstrzyga — potwierdzenie wymaga powtórki w innym dniu.",
    },
    {
      q: "Jaka jest różnica między odczytem glukozy a HbA1c?",
      a: "Odczyt glukozy na czczo lub po posiłku to zdjęcie jednej chwili — prawdziwe dla momentu, w którym pobrano próbkę, i łatwe do zachwiania przez wczorajszą kolację czy nadciągające przeziębienie. HbA1c to raczej film poklatkowy: pokazuje twój średni poziom cukru przez mniej więcej dwu- do trzymiesięczny okres życia czerwonej krwinki. Najwięcej mówią czytane obok siebie.",
    },
    {
      q: "Dlaczego mój poranny poziom cukru jest wyższy po źle przespanej nocy?",
      a: "Wystarczy jedna noc częściowego niedoboru snu, by wymiernie obniżyć wrażliwość na insulinę, a tolerancja glukozy słabnie w ciągu dnia, więc ten sam posiłek daje wieczorem wyższy skok. Kiepska noc albo późna, obfita kolacja to prawdopodobne wytłumaczenie pojedynczej nieprawidłowości następnego ranka i same w sobie niczego nie dowodzą.",
    },
    {
      q: "Kiedy odczyt poziomu cukru jest niebezpieczny?",
      a: "Glukoza poniżej 70 mg/dl (poniżej 3,9 mmol/l) to alert hipoglikemii — sięgnij po szybko działający węglowodan i sprawdź ponownie po 15 minutach, a poniżej 54 mg/dl trzeba działać natychmiast. Utrzymująca się bardzo wysoka glukoza z pragnieniem, częstym oddawaniem moczu, wymiotami, szybkim oddechem lub zmąconym myśleniem wymaga pilnej pomocy. To nie są diagnozy, które stawiasz sam — porozmawiaj z lekarzem.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "Co to jest VO2max i dlaczego ma znaczenie?",
      a: "VO2max to maksymalne tempo, w jakim organizm potrafi pobierać i wykorzystywać tlen podczas ciężkiego wysiłku, podawane w mililitrach tlenu na kilogram na minutę. Obejmuje cały łańcuch dostarczania tlenu i jest jednym z najmocniejszych pojedynczych predyktorów tego, jak długo pożyjesz — każdy przyrost sprawności wiąże się z wyraźnie niższym ryzykiem zgonu.",
    },
    {
      q: "Jak dokładny jest VO2max na moim zegarku?",
      a: "Twoje urządzenie noszone tę wartość raczej szacuje, niż mierzy — wylicza ją z zależności między tętnem a tempem i opiera się na założonym tętnie maksymalnym. Bezwzględna liczba może być o kilka punktów obok, a teren, upał i sposób noszenia jeszcze ją rozmywają. Najuczciwiej czytać ją jako linię trendu: stały wzrost w skali tygodni jest prawdziwy.",
    },
    {
      q: "Jaki VO2max jest dobry dla mojego wieku?",
      a: "VO2max czyta się jako percentyl w obrębie twojego własnego przedziału wieku i płci, nigdy w odniesieniu do sztywnego celu. Mężczyźni wypadają mniej więcej 15 do 20 procent wyżej niż kobiety w tym samym wieku, a sprawność spada z latami, więc wartość znakomita w wieku 60 lat byłaby przeciętna w wieku 25. Ważniejsze od tego, gdzie jesteś, jest to, w którą stronę zmierzasz.",
    },
    {
      q: "Jak poprawić swój VO2max?",
      a: "Wydolność tlenowa rośnie dzięki regularnemu treningowi. Tygodniowy cel wspólny dla wszystkich głównych wytycznych to 150 do 300 minut umiarkowanej aktywności albo 75 do 150 minut intensywnej, plus wzmacnianie mięśni co najmniej dwa razy w tygodniu i wbudowana regeneracja. Regularny trening z grubsza o połowę spowalnia naturalny, związany z wiekiem spadek. Jeśli długo się nie ruszałeś albo masz chorobę serca, płuc lub metaboliczną, przed rozpoczęciem intensywnych ćwiczeń skonsultuj się z lekarzem.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Dlaczego BMI jest ograniczoną miarą zdrowia?",
      a: "BMI to tani i powtarzalny zamiennik pomiaru otłuszczenia, ale nie odróżnia mięśni od tłuszczu, więc osoba umięśniona może wylądować w przedziale nadwagi, a starszy dorosły, który stracił mięśnie, wygodnie zmieścić się w normie. Pomija też, gdzie tłuszcz się odkłada, a jego progi wyznaczono głównie na populacjach europejskich — u osób pochodzenia południowo- i wschodnioazjatyckiego wyższe ryzyko pojawia się już przy niższym BMI.",
    },
    {
      q: "Dlaczego to, gdzie odkłada się tłuszcz, ma większe znaczenie niż moja waga?",
      a: "Tłuszcz w okolicy talii, upakowany między narządami jamy brzusznej, jest metabolicznie znacznie groźniejszy niż ten na biodrach i udach, a do tego zapowiada cukrzycę, nadciśnienie i ryzyko sercowo-naczyniowe niezależnie od BMI. Prosta zasada, która dobrze sprawdza się u obu płci i różnych grup pochodzenia, brzmi: utrzymuj obwód talii poniżej połowy swojego wzrostu.",
    },
    {
      q: "Dlaczego moja waga skacze w górę z dnia na dzień?",
      a: "W ciągu zwykłego dnia i z dnia na dzień masa ciała waha się o jeden do dwóch kilogramów wyłącznie za sprawą nawodnienia, jedzenia wciąż w trakcie trawienia i soli — a żadne z tego nie jest tłuszczem. Patrz na siedmiodniową średnią kroczącą, a szum się zniesie i zostanie linia, która naprawdę coś znaczy. Tak samo jest z odsetkiem tkanki tłuszczowej z wagi.",
    },
    {
      q: "Ile wagi muszę zrzucić, by poprawić swoje zdrowie?",
      a: "U dorosłych z nadwagą lub otyłością trwałe zrzucenie zaledwie 5 do 10 procent masy ciała wyraźnie poprawia poziom cukru, ciśnienie krwi i lipidy — i jest znacznie lepszym celem niż jakakolwiek pojedyncza liczba na wadze. Warto gonić za umiarkowaną, utrzymaną zmianą, a nie za spektakularnym wynikiem.",
    },
  ],
  "tracking-mood": [
    {
      q: "Jaki jest sens śledzenia mojego nastroju?",
      a: "Jeden wpis to opinia; kilkaset wpisów to trend, a trend to już dane. Prosta skala nastroju, prowadzona konsekwentnie przez tygodnie, wydobywa wzorce, których nie widać w żadnym pojedynczym dniu: powolny spadek w trakcie stresującego okresu, niezawodny przypływ po ćwiczeniach albo dołek wracający w przewidywalnym miesięcznym rytmie.",
    },
    {
      q: "Jak powinienem zapisywać swój nastrój, by było to przydatne?",
      a: "Najcenniejszy jest tu jeden nawyk — konsekwencja: ta sama skala, ta sama pora dnia, codziennie. Samoocena zależy od pory dnia, świeżych wydarzeń i tego, jak się wyspałeś, więc jednorazowy odczyt jest zaszumiony. Mierzona zawsze tak samo, codzienna huśtawka się uśrednia, a kierunek pod spodem staje się czytelny.",
    },
    {
      q: "Jaki wynik w kwestionariuszu nastroju jest niepokojący?",
      a: "Na zwalidowanych skalach przesiewowych WHO-5 na poziomie 50 procent lub niżej wskazuje na słabe samopoczucie, a suma PHQ-9 lub GAD-7 wynosząca 10 lub więcej to standardowy próg, przy którym warto zareagować. To spójne, dobrze ugruntowane skale, ale dodatni wynik jest powodem do rozmowy ze specjalistą, a nie diagnozą, którą postawisz w domu.",
    },
    {
      q: "Kiedy obniżony nastrój powinien skłonić mnie do szukania pomocy?",
      a: "Wtedy, gdy się utrzymuje. Spadkowy trend trwający dwa tygodnie lub dłużej albo taki, który zaczyna przeszkadzać w codziennym życiu, to powód, by porozmawiać z lekarzem lub specjalistą zdrowia psychicznego — i nie musisz czekać, aż zrobi się naprawdę źle. Każda myśl o zrobieniu sobie krzywdy jest sama w sobie powodem, by natychmiast zadzwonić pod lokalny numer alarmowy lub na telefon zaufania.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Dlaczego cykl menstruacyjny uznaje się za parametr życiowy?",
      a: "Towarzystwa lekarskie zalecają, by traktować cykl tak jak tętno, ciśnienie krwi i temperaturę, bo to powracający rytm, który pozostaje stabilny, dopóki wszystko jest w porządku — a więc jego zmiana coś znaczy. Długość i regularność cyklu to łatwo dostępne okno na zdrowie reprodukcyjne i ogólne.",
    },
    {
      q: "Jaka jest prawidłowa długość cyklu menstruacyjnego?",
      a: "W grę wchodzą dwa uznane zakresy. Przedział kierowany do pacjentek opisuje zdrowe, codzienne cykle dorosłych jako 21 do 35 dni, a kliniczne kryteria przesiewowe to 24 do 38 dni. Wahania rzędu tygodnia z miesiąca na miesiąc są czymś normalnym, faza lutealna stanowi względnie stałą kotwicę, a większość zmienności długości przypada na fazę folikularną.",
    },
    {
      q: "Czy mogę polegać na aplikacji śledzącej cykl jako na antykoncepcji?",
      a: "Nie. Algorytmiczne prognozy cyklu z jakiejkolwiek aplikacji, urządzenia noszonego czy sprzętu nie są metodą antykoncepcji. Przewidywania oparte na uśrednionych wartościach populacyjnych bywają zawodne, moment owulacji potrafi się mocno różnić nawet u osób z regularnym cyklem, a perimenopauza znów czyni cykle nieprzewidywalnymi. Kto korzysta z metod rozpoznawania płodności, powinien stosować zwalidowaną, porządnie opanowaną metodę, a nie jedną przewidzianą datę.",
    },
    {
      q: "Kiedy powinnam udać się do lekarza w sprawie cyklu?",
      a: "Warto omówić to z lekarzem, gdy cykle stale wykraczają poza typowy zakres — z odstępami krótszymi niż około 21 dni lub dłuższymi niż około 45 — albo gdy widać wyraźną, trwałą zmianę względem twojego własnego wzorca. Oceny wymagają też przerwa wynosząca 90 dni lub więcej, krwawienie trwające dłużej niż 7 dni, przesiąkanie podpaski częściej niż co jedną do dwóch godzin oraz krwawienie między miesiączkami.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "Jak urządzenie noszone mierzy moje tętno?",
      a: "Większość używa fotopletyzmografii: zielona dioda LED świeci w skórę, krew częściowo pochłania to światło, a czujnik liczy pulsacje, gdy z każdym uderzeniem objętość krwi rośnie i opada. W spoczynku działa to dobrze, ale gorzej radzi sobie z ruchem — dlatego tętno z nadgarstka podczas interwałów czy podnoszenia ciężarów to najmniej wiarygodny odczyt, jakim większość ludzi dysponuje. Pas piersiowy pozostaje dokładny także w ruchu.",
    },
    {
      q: "Skąd mój zegarek zna moje fazy snu?",
      a: "Nie zagląda ci do mózgu. Sen wnioskuje z tego, jak mało się ruszasz, często łącząc to z tętnem i jego zmiennością między uderzeniami, a potem rozpisuje noc na sen lekki, głęboki i REM. W porównaniu ze standardem z laboratorium snu urządzenia całkiem dobrze odróżniają sen od czuwania, a znacznie gorzej rozpoznają konkretną fazę — dlatego godzinę zaśnięcia i całkowitą długość czytaj z ufnością, a kolorowe fazy traktuj jako oszacowanie.",
    },
    {
      q: "Czy odczyty z urządzeń noszonych są dokładne?",
      a: "Większość tego, co pokazuje urządzenie noszone, to oszacowanie, a nie pomiar laboratoryjny. Optyczne tętno, wywnioskowane fazy snu, SpO2 z nadgarstka i każdy wynik regeneracji czy gotowości to modele zbudowane na kilku rzeczywistych sygnałach — wystarczająco dokładne, by uchwycić zmianę w czasie, ale rzadko na tyle precyzyjne, by pojedynczą wartość brać za świętość. Czytaj je względnie, a nie bezwzględnie.",
    },
    {
      q: "Co tak naprawdę mierzą wyniki regeneracji i gotowości?",
      a: "Tak naprawdę nic tu się nie mierzy — to autorskie modele, które łączą surowe strumienie z czujników, zwykle nocne HRV, tętno spoczynkowe i sen, z twoim wiekiem, wagą i historią, by wypluć jedną liczbę. Nie mają klinicznego zakresu odniesienia ani wspólnego standardu między urządzeniami, więc czytaj je jak codzienną podpowiedź, a nie pomiar kliniczny.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Dlaczego moja własna linia bazowa jest lepsza niż zakres normy?",
      a: "Zakres odniesienia zbudowano po to, by wyłapać niewielki odsetek osób plasujących się daleko poza typowym rozrzutem; nigdy nie po to, by mówić ci, czy dziś masz dobry dzień. Ponieważ różnice między ludźmi są spore, tętno spoczynkowe 58 wygląda przeciętnie na tle podręcznikowego zakresu, ale przy linii bazowej 52 jest już wyraźnym wzrostem o sześć uderzeń — zmianą, którą zakres populacyjny całkowicie zamazuje.",
    },
    {
      q: "Jak odróżnić prawdziwy sygnał od losowego szumu?",
      a: "Szum to odczyt przy krawędzi twojego zwykłego zakresu albo niewielki ruch, który nazajutrz się cofa. Sygnał to kierunek, który trwa: wielodniowe przesunięcie znacznie poza twój zwykły rozrzut albo powolny dryf średniej kroczącej w skali tygodni. Średnia krocząca wygładza rozrzut, a zmiana kilka razy większa niż twoje zwykłe wahania z dnia na dzień zasługuje na uwagę.",
    },
    {
      q: "Jak długo trwa, zanim linia bazowa stanie się wiarygodna?",
      a: "Pojedynczy pomiar to punkt bez kontekstu. Nowy sygnał potrzebuje kilku tygodni konsekwentnych odczytów, zanim pojedyncza liczba zacznie cokolwiek znaczyć — dopiero wtedy codzienny szum uśredni się w linię bazową, na której naprawdę można się oprzeć.",
    },
    {
      q: "Dlaczego pomiar w tych samych warunkach ma aż takie znaczenie?",
      a: "Trend jest uczciwy tylko wtedy, gdy stojące za nim warunki pozostają stałe. Tętno spoczynkowe tuż po przebudzeniu jest znacznie niższe niż to samo tętno po kawie i wejściu po schodach, a waga przed śniadaniem o kilogram niższa niż to samo ciało po kolacji. Urządzenie nieco niedoskonałe, ale używane codziennie tak samo, bije to lepsze, lecz stosowane byle jak.",
    },
  ],
  "steps-and-movement": [
    {
      q: "Skąd wziął się cel 10 000 kroków?",
      a: "Nigdy nie wyniknął z badań. Pochodzi od japońskiego krokomierza wypuszczonego na rynek mniej więcej w czasie igrzysk olimpijskich w Tokio w 1964 roku, którego nazwa znaczyła „krokomierz dziesięciu tysięcy kroków” — wybrano ją po części dlatego, że znak liczby 10 000 przypomina idącego człowieka, a po części dlatego, że to chwytliwa, okrągła liczba, która dobrze się sprzedawała. Traktuj to jak folklor, a nie wytyczną.",
    },
    {
      q: "Ile kroków dziennie naprawdę potrzebuję?",
      a: "Większość korzyści dla długości życia zbiera się znacznie poniżej 10 000. Badania pokazują, że śmiertelność spada w miarę wzrostu liczby kroków, a krzywa wypłaszcza się gdzieś koło 6000 do 8000 kroków dziennie u osób starszych i 8000 do 10 000 u młodszych. Krzywa się wypłaszcza, ale nie zawraca, więc więcej chodzenia nie szkodzi — po prostu każdy kolejny krok dodaje coraz mniej.",
    },
    {
      q: "Czy lepiej chodzić wszystko naraz, czy w ciągu całego dnia?",
      a: "Rozłożenie ruchu na cały dzień pomaga. Długie, nieprzerwane siedzenie coraz częściej traktuje się jako osobny czynnik ryzyka, do pewnego stopnia niezależny od tego, czy w ogóle ćwiczysz — dlatego dzisiejsze wytyczne łączą „ruszaj się więcej” z „siedź mniej”. Kilka minut spaceru co godzinę, schody zamiast windy i przechadzka po posiłkach — wszystko to się sumuje.",
    },
    {
      q: "Czego liczba kroków nie mówi mi o moim zdrowiu?",
      a: "To miara ilości, a nie test sprawności. Nic nie mówi o intensywności ani sile, nie odróżni żwawego marszu pod górę od dreptania po kuchni i nie mierzy wydolności krążeniowo-oddechowej — jednego z najmocniejszych predyktorów zdrowia w dłuższej perspektywie. Kroki należą do całego panelu, obok innych sygnałów, a nie na piedestał.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "Jak kofeina wpływa na moje tętno i ciśnienie krwi?",
      a: "Kofeina blokuje adenozynę i puszcza nieco luzem współczulny pedał gazu, więc tętno przyspiesza, a ciśnienie krwi przejściowo rośnie — najmocniej u osób, które nie piją jej na co dzień. Kawa wypita na godzinę przed pomiarem potrafi podnieść i twoje tętno spoczynkowe, i ciśnienie krwi na tyle, że to widać.",
    },
    {
      q: "Czy popołudniowa kawa naprawdę wpływa na mój sen?",
      a: "Często bardziej, niż jesteś w stanie to odczuć. Okres półtrwania kofeiny to zwykle jakieś pięć godzin, więc popołudniowa filiżanka ma o porze snu wciąż połowę dawki w obiegu. W kontrolowanym badaniu dawka odpowiadająca mocnej kawie, przyjęta sześć godzin przed snem, wymiernie skróciła całkowity czas snu — choć sami uczestnicy lekceważyli to zakłócenie.",
    },
    {
      q: "Dlaczego po wypiciu mam niskie HRV i wysokie tętno?",
      a: "Gdy organizm przez noc rozkłada alkohol, strona współczulna zostaje włączona, więc tętno spoczynkowe trzyma się podwyższone, a HRV spada — im więcej wypijesz, tym mocniejszy i dłużej trwający efekt. Dlatego pojedyncza lampka do kolacji potrafi po cichu zaniżyć twój wynik regeneracji, choć przesypiasz całe to zdarzenie.",
    },
    {
      q: "Czy to oznacza, że powinienem zrezygnować z kofeiny i alkoholu?",
      a: "Niekoniecznie. Wartość tkwi w przypisaniu przyczyny, a nie w abstynencji. Patrząc na własne dane, widzisz, jak późno jest już za późno na kofeinę, zanim twój sen zacznie się sypać, i ile alkoholu wystarczy, by nocne tętno poszło w górę — i przestajesz mylić przewidywalny, przejściowy spadek z sygnałem, że coś jest nie tak.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Czy naprawdę potrzebuję ośmiu szklanek wody dziennie?",
      a: "Uniwersalna zasada ośmiu szklanek nie ma mocnych podstaw naukowych — przeglądy, które tropiły to twierdzenie, nie znalazły za nim wiarygodnych dowodów. Renomowane instytucje podają populacyjne wartości odniesienia dla całej wody ze wszystkich źródeł, mniej więcej 2 do 2,7 litra dziennie dla kobiet i 2,5 do 3,7 dla mężczyzn, i podkreślają, że potrzeby bardzo się różnią zależnie od masy ciała, aktywności, klimatu i diety.",
    },
    {
      q: "Skąd mam wiedzieć, czy piję wystarczająco dużo?",
      a: "U większości zdrowych osób w zwykły dzień rozsądną wskazówką są własne sygnały organizmu. Pragnienie to prawdziwy, sprawnie działający czujnik, a picie wedle pragnienia utrzymuje większość zdrowych dorosłych w dobrym nawodnieniu. Kolor moczu to domowy sygnał orientacyjny: blada słoma sugeruje, że jest w porządku, a uporczywie ciemny — że mógłbyś pić więcej.",
    },
    {
      q: "Dlaczego odwodnienie podnosi moje tętno?",
      a: "Gdy stracisz tyle płynu, że spada objętość krwi, serce nadrabia to szybszym biciem, byle utrzymać stabilne krążenie — i właśnie dlatego odwodnienie podnosi tętno spoczynkowe i wysiłkowe. Wystarczą nawet łagodne niedobory płynów rzędu jednego do dwóch procent masy ciała, by popsuć nastrój, podbić poczucie wysiłku i osłabić koncentrację.",
    },
    {
      q: "Czy można wypić zbyt dużo wody?",
      a: "Tak. Picie znacznie ponad potrzebę, najczęściej podczas zawodów wytrzymałościowych, może rozcieńczyć sód we krwi do niebezpiecznego stanu zwanego hiponatremią, której wczesne objawy mylą się z odwodnieniem. Kto ma chorobę serca, nerek lub wątroby albo bierze leki wpływające na gospodarkę płynami, może mieć celowo obniżony limit i powinien trzymać się zaleceń lekarza ponad jakąkolwiek ogólną zasadą.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "Jak stres objawia się w moich danych zdrowotnych?",
      a: "Stres to wciśnięty współczulny pedał gazu, który steruje wieloma wskaźnikami z jednego pokrętła, więc ruszają się razem. Tętno spoczynkowe rośnie, nocne HRV spada, sen robi się płytszy i bardziej poszarpany, a częstość oddechów bywa podwyższona. Żaden pojedynczy sygnał nie przesądza sprawy, ale czytane razem, na tle twojej własnej linii bazowej, trudno je zlekceważyć.",
    },
    {
      q: "Jaka jest różnica między stresem ostrym a przewlekłym?",
      a: "Ostre czynniki stresowe, jak ciężki trening czy termin oddania pracy, ruszają wskaźnikami, ale po nocy czy dwóch prawdziwego odpoczynku wszystko wraca do linii bazowej — i właśnie ten powrót jest tu kluczowy. Niepokój zaczyna się wtedy, gdy powrót przestaje przychodzić, a organizm płaci skumulowany koszt obciążenia allostatycznego — w danych widać go jako linię bazową, która po cichu się przesunęła i taka została.",
    },
    {
      q: "Czy regeneracja to po prostu brak stresu?",
      a: "Nie. Regeneracja to aktywny proces przywspółczulny — ponownie załącza się hamulec nerwu błędnego, tętno opada, a sen głęboki wykonuje pracę naprawczą — dlatego pojawia się jako pozytywny sygnał, a nie zwykłe wyciszenie liczb. To znaczy, że można ją wspierać, a nie tylko na nią czekać: chronionym, regularnym snem, lekkim ruchem tlenowym i światłem dziennym.",
    },
    {
      q: "Kiedy powinienem potraktować utrzymujący się stres poważnie?",
      a: "Te sygnały mogą zwiastować trwałe obciążenie, ale nie powiedzą ci dlaczego i nie zastąpią tego, jak się naprawdę czujesz. Stres, który tygodniami zaburza twój sen, koncentrację albo radość ze zwykłych rzeczy, warto omówić z lekarzem lub specjalistą zdrowia psychicznego, niezależnie od tego, co mówią liczby. Jeśli cierpienie kiedykolwiek wyda się nie do udźwignięcia albo pojawią się myśli o zrobieniu sobie krzywdy, natychmiast zadzwoń pod lokalny numer alarmowy lub na telefon zaufania.",
    },
  ],
};
export default FAQ;
