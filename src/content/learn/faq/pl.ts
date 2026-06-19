export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Czy powinienem porównywać swoje wyniki zdrowotne z zakresem normy, czy z samym sobą?",
      a: "Zacznij od własnej linii bazowej. W przypadku niemal każdego wartego śledzenia sygnału różnice między ludźmi są znacznie większe niż twoje własne wahania z dnia na dzień, więc wynik, który na wykresie populacyjnym wygląda przeciętnie, może być twoim rekordem życiowym albo ostrzeżeniem. Opublikowanych zakresów używaj tylko jako sprawdzenia rozsądku, a nie jako tablicy wyników.",
    },
    {
      q: "Dlaczego nie powinienem reagować na pojedynczy pomiar zdrowotny?",
      a: "Organizm jest zmienny. Zmienność rytmu serca waha się o około dziesięć procent z dnia na dzień jako czysty szum, a masa ciała dryfuje o kilogram lub dwa wyłącznie z powodu płynów, więc jeden wysoki lub niski wynik zwykle mieści się w tym normalnym rozrzucie. Znaczenie ma kierunek średniej kroczącej w skali dni i tygodni, a nie żaden pojedynczy punkt.",
    },
    {
      q: "Dlaczego kilka moich wskaźników zmienia się jednocześnie?",
      a: "Wszystkie one informują o tych samych leżących u podstaw układach, tylko z różnych perspektyw. Kiepska noc lub alkohol zwykle podnoszą spoczynkowe tętno i obniżają HRV; początek infekcji jednocześnie podnosi tętno spoczynkowe, częstość oddechów i temperaturę, podczas gdy HRV spada. Dwa lub trzy sygnały zmierzające w tę samą stronę naraz niosą więcej pewności niż którykolwiek z osobna.",
    },
    {
      q: "Czy wskaźniki zdrowotne z urządzeń noszonych zastępują wizytę u lekarza?",
      a: "Nie. Tętno spoczynkowe, HRV, oceny snu i reszta to wskazówki dotyczące samopoczucia, przydatne do dostrzegania zmian i zadawania lepszych pytań, ale nigdy nie są diagnozą. Alert z urządzenia, taki jak sygnał nieregularnego rytmu, to zachęta do badania, a nie wynik. O wszystkim, co cię niepokoi, porozmawiaj z lekarzem.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "Jakie tętno spoczynkowe jest prawidłowe?",
      a: "Klasyczny zakres dla dorosłych to 60 do 100 uderzeń na minutę, a osoby wytrenowane wytrzymałościowo często mieszczą się w przedziale 40-60. Ten zakres wyznaczono z myślą o bezpieczeństwie klinicznym, a nie o optymalnym zdrowiu, a duże badania pokazują, że ryzyko rośnie dość równomiernie wraz ze wzrostem tętna spoczynkowego, więc trend liczy się bardziej niż pojedynczy pomiar.",
    },
    {
      q: "Kiedy najlepiej mierzyć tętno spoczynkowe?",
      a: "Najlepiej zaraz po przebudzeniu, zanim usiądziesz, sięgniesz po telefon czy wypijesz kawę. To pomiar w tych samych warunkach za każdym razem sprawia, że wynik jest porównywalny, więc konsekwentny odczyt jest wart znacznie więcej niż dokładniejszy wykonany przypadkowo.",
    },
    {
      q: "Dlaczego moje tętno spoczynkowe nagle wzrosło na kilka dni?",
      a: "Nagły, niewyjaśniony wzrost o kilka uderzeń, który utrzymuje się przez parę dni, to ciche sygnalizowanie przez organizm, że coś się dzieje, często początek infekcji, niewyspanie nałożone na stres, odwodnienie, alkohol poprzedniego wieczoru albo zbyt dużo treningu i za mało regeneracji. Kofeina, gorączka, upał, lęk i niektóre leki również je podnoszą.",
    },
    {
      q: "Kiedy powinienem martwić się o swoje tętno spoczynkowe?",
      a: "Tętno spoczynkowe utrzymujące się powyżej 100 bez wyraźnego wyjaśnienia, niskie tętno połączone z zawrotami głowy, omdleniami lub dusznością, albo nawracające nieregularne tętno warto poruszyć z lekarzem. Alert o nieregularnym rytmie z urządzenia noszonego to zachęta do badania, a nie diagnoza; tylko EKG może potwierdzić zaburzenie rytmu.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "Jakie HRV jest dobre?",
      a: "Nie ma uniwersalnej dobrej wartości. Różnice HRV między ludźmi są ogromne, więc twoja zdrowa linia bazowa może wynosić jedną trzecią czyjejś zdrowej linii bazowej i obie są w porządku. HRV gwałtownie spada z wiekiem i zależy od długości pomiaru oraz pozycji ciała, więc wartości bezwzględne nie przekładają się między ludźmi ani urządzeniami. Czytaj własny trend, a nie tabelę wyników.",
    },
    {
      q: "Dlaczego moje HRV tak bardzo zmienia się z nocy na noc?",
      a: "HRV jest niezwykle wrażliwe na warunki. Pozycja ciała, częstość oddechów, pora dnia, ostatni posiłek, kofeina, choroba, sen i ostry stres wszystkie je zmieniają, a alkohol tłumi je w sposób zależny od dawki. Wahania pojedynczej nocy rzędu dziesięciu procent są czymś rutynowym i same w sobie nic nie znaczą, dlatego uczciwą jednostką do czytania jest siedmiodniowa średnia krocząca.",
    },
    {
      q: "Dlaczego moje HRV jest niskie po wypiciu alkoholu?",
      a: "Alkohol tłumi HRV w sposób zależny od dawki, najsilniej w noc po spożyciu i następnego ranka, często gdy tętno i ciśnienie krwi wciąż wyglądają zupełnie normalnie. Jednonocny spadek po drinku, późnej kolacji czy ciężkim treningu jest spodziewany i sam się odwraca; zapisywanie oczywistych czynników zakłócających pozwala odróżnić go od istotnego, trwałego spadku.",
    },
    {
      q: "Kiedy niskie HRV naprawdę ma znaczenie?",
      a: "Samo w sobie HRV jest zbyt zmienne, by na nim alarmować. Wskazuje na coś, gdy trwały spadek poniżej twojej osobistej linii bazowej pojawia się razem z rosnącym tętnem spoczynkowym i wyższą nocną częstością oddechów, jako delikatne wczesne ostrzeżenie przed chorobą lub przemęczeniem. Spadkowy trend z objawami takimi jak duszność czy kołatanie serca, lub powtarzające się sygnały nieregularnego rytmu, to powód, by udać się do lekarza.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "Co oznaczają dwie liczby ciśnienia krwi?",
      a: "Liczba skurczowa na górze to ciśnienie w tętnicach w chwili, gdy serce się kurczy i wypycha krew; liczba rozkurczowa pod nią to ciśnienie resztkowe, gdy serce się rozluźnia i napełnia między uderzeniami. Obie mierzy się w milimetrach słupa rtęci i obie niosą ryzyko niezależnie, więc żadna z nich nie jest tą ważniejszą.",
    },
    {
      q: "Jakie ciśnienie krwi uznaje się za wysokie?",
      a: "Oba główne gremia wytycznych zgadzają się, że nadciśnienie jako choroba zaczyna się od 140/90 w gabinecie. Różnią się co do etykiet poniżej tego progu: ramy amerykańskie nazywają 130 do 139 na 80 do 89 nadciśnieniem stopnia 1, podczas gdy ramy europejskie nazywają te same wartości jedynie podwyższonymi. Ryzyko rośnie w sposób ciągły od około 115/75 w górę, bez wyraźnej granicy, poniżej której znika.",
    },
    {
      q: "Jak prawidłowo mierzyć ciśnienie krwi w domu?",
      a: "Najpierw posiedź spokojnie przez pięć minut, z podpartymi plecami i stopami płasko na podłodze, z ramieniem opartym na wysokości serca i prawidłowo dobranym mankietem na ramię. Wcześniej unikaj kofeiny, palenia i mówienia. Technika zmienia wynik bardziej niż prawie cokolwiek, co dzieje się tego dnia w twoim ciele, a uznanym standardem są średnie z kilku dni poza gabinetem, przy czym nadciśnienie domowe liczy się od około 135/85.",
    },
    {
      q: "Kiedy wysoki odczyt ciśnienia krwi jest stanem nagłym?",
      a: "Pojedynczy wysoki odczyt nie jest stanem nagłym; zmierz ponownie po minucie. Jeśli utrzymuje się na poziomie 180/120 lub wyżej bez objawów, niezwłocznie skontaktuj się z pracownikiem ochrony zdrowia. Jeśli wynosi 180/120 lub więcej i towarzyszy mu ból w klatce piersiowej, duszność, zmiana neurologiczna lub w widzeniu albo silny ból głowy, potraktuj to jako stan nagły i wezwij pogotowie.",
    },
  ],
  "sleep-consistency": [
    {
      q: "Ile godzin snu naprawdę potrzebują dorośli?",
      a: "Krajowe wytyczne wskazują dla dorosłych w wieku 18 do 64 lat 7 do 9 godzin na dobę, a dla osób starszych 7 do 8, z uzgodnioną dolną granicą regularnie co najmniej 7 godzin. Zależność ma kształt litery U, a nie zasady im więcej tym lepiej: zarówno nawykowo krótki, jak i nawykowo bardzo długi sen wiążą się z ryzykiem.",
    },
    {
      q: "Czy regularność snu jest ważniejsza niż jego długość?",
      a: "Liczy się jedno i drugie, a pora może mieć takie samo znaczenie jak długość. W dużej kohorcie regularność pór snu przewidywała śmiertelność co najmniej tak silnie jak jego długość, nawet po uwzględnieniu liczby przespanych godzin. Dwie osoby mogą zapisać identyczną liczbę godzin, a ta, która zapisuje je o tej samej porze każdej nocy, radzi sobie wymiernie lepiej.",
    },
    {
      q: "Czy mogę odespać utracony sen w weekend?",
      a: "Tylko częściowo. Dług snu to krocząca suma nocy, które okazały się niewystarczające, a regeneracja po nim jest częściowa i nieliniowa, więc jeden długi weekend nie odwróci w pełni kilku skróconych nocy. Spójny harmonogram bije próbę spłaty całego długu za jednym razem.",
    },
    {
      q: "Czy fazy snu głębokiego i REM z mojego trackera są dokładne?",
      a: "Podchodź sceptycznie do podziału na fazy. Trackery konsumenckie szacują podział na sen głęboki, REM i lekki tylko z umiarkowaną zgodnością względem standardu z laboratorium klinicznego i mają tendencję do zawyżania, jak długo spałeś. Całkowity czas snu i pora pójścia spać są znacznie bardziej wiarygodne niż jakikolwiek odsetek snu głębokiego; traktuj fazy jako zgrubny osobisty trend.",
    },
  ],
  "respiratory-rate": [
    {
      q: "Jaka jest prawidłowa częstość oddechów?",
      a: "Standardowy zakres spoczynkowy dla dorosłych to 12 do 20 oddechów na minutę. Ten zakres jest szeroki, więc wartość zyskuje na znaczeniu w odniesieniu do twojej własnej zwykłej liczby, a nie do zakresu populacyjnego. Dzieci oddychają szybciej, a wytrenowani sportowcy wytrzymałościowi zwykle mieszczą się w dolnej części zakresu.",
    },
    {
      q: "Dlaczego częstość oddechów mierzy się w nocy, a nie w ciągu dnia?",
      a: "Na jawie częstość oddechów jest jedną z najbardziej zależnych od stanu liczb, jakie produkuje twoje ciało; mówienie, ruch, emocje, a nawet świadomość bycia mierzonym wszystkie ją zmieniają, więc dzienny pojedynczy pomiar jest niemal bezwartościowy. Podczas snu te wpływy zanikają, a twoja nocna częstość ustala się na zaskakująco stałym poziomie, dzięki czemu prawdziwe odchylenie łatwo dostrzec.",
    },
    {
      q: "Co oznacza, jeśli moja nocna częstość oddechów wzrasta?",
      a: "Trwały wzrost o mniej więcej trzy oddechy na minutę powyżej twojej własnej nocnej liczby może sygnalizować, że coś się rozwija, często zanim poczujesz się źle. Sygnał jest ogólny dla infekcji, mówi ci, że organizm pracuje ciężej, a nie co jest nie tak. Zwykłe rzeczy, jak ciężki późny trening, alkohol czy gorące, duszne pomieszczenie, też mogą go podnieść.",
    },
    {
      q: "Kiedy częstość oddechów jest stanem nagłym?",
      a: "Częstość powyżej 25 na minutę wraz z dusznością, splątaniem lub niskim odczytem natlenienia krwi wymaga pilnej pomocy medycznej. Wolny, płytki oddech to groźniejszy kierunek, zwłaszcza depresja oddechowa wywołana opioidami lub środkami uspokajającymi; jeśli ktoś oddycha bardzo wolno, trudno go obudzić lub ma sine usta, potraktuj to jako stan nagły i wezwij pomoc.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "Jaki jest prawidłowy poziom natlenienia krwi?",
      a: "U zdrowego dorosłego oddychającego powietrzem na poziomie morza SpO2 mieści się między 95 a 100 procent, a większość odczytów skupia się w przedziale 96 do 99. Dolna granica zmienia się wraz z okolicznościami, więc około 90 procent może być normą na dużej wysokości, a osoby z przewlekłą chorobą płuc żyją z niższą osobistą linią bazową. Powyżej zakresu nie ma nagrody; wyżej nie znaczy lepiej.",
    },
    {
      q: "Dlaczego mój odczyt SpO2 na nadgarstku jest niski?",
      a: "Pojedynczy niski odczyt częściej jest artefaktem niż stanem nagłym. Czujniki na nadgarstku znajdują się dalej od pulsującego łożyska tętniczego i zmagają się z ruchem oraz luźniejszym dopasowaniem, a zimne dłonie, luźna opaska, lakier do paznokci czy światło otoczenia zaniżą wynik. Wykonaj pomiar ponownie, gdy będziesz rozgrzany, w bezruchu i dobrze ukrwiony, zanim zaufasz spadkowi.",
    },
    {
      q: "Czy mogę użyć SpO2 do wykrycia bezdechu sennego?",
      a: "Powtarzające się nocne spadki natlenienia są częścią tego, jak przesiewa się bezdech senny, więc urządzenie sygnalizujące je może być wczesną wskazówką, ale nie jest diagnozą. Głośne chrapanie z zaobserwowanymi przerwami albo sen nieprzynoszący wypoczynku z sennością w ciągu dnia warto poruszyć z lekarzem, by właściwie to ocenić.",
    },
    {
      q: "Czy pulsoksymetry są mniej dokładne na ciemniejszej skórze?",
      a: "Tak. Pulsoksymetry mogą zawyżać rzeczywiste wysycenie tlenem u osób z ciemniejszą pigmentacją skóry, podając uspokajającą wartość, podczas gdy faktyczne wysycenie jest niższe, co udokumentowano w danych szpitalnych i poddano przeglądowi przez amerykańskich regulatorów. Normalnie wyglądający odczyt nigdy nie powinien przeważać nad dusznością, splątaniem czy zwykłym poczuciem, że coś jest nie tak.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "Czy 37 stopni Celsjusza to wciąż prawidłowa temperatura ciała?",
      a: "To stara średnia, którą współczesne dane nieco obniżyły. Obszerny przegląd ustalił średnią populacyjną na 36,59 C, z prawidłowym zakresem doustnym mniej więcej od 35,7 do 37,4 C, na tyle szerokim, że dwie zdrowe osoby mogą różnić się o niemal dwa stopnie. Odczyt 36,7 C mieści się dokładnie w normie, a nie poniżej niej.",
    },
    {
      q: "Dlaczego moja temperatura zmienia się w ciągu dnia?",
      a: "Temperatura podąża za krzywą dobową, wahając się o około pół stopnia między najniższym punktem nad ranem, mniej więcej od 4 do 8 rano, a szczytem we wczesnym wieczorze, około 18 do 20. Wieczorny odczyt, który wygląda na nieco wysoki, to często po prostu normalny dobowy szczyt, dlatego należy porównywać pomiary wykonane o tej samej porze dnia i w tym samym miejscu.",
    },
    {
      q: "Czy temperatura skóry z urządzenia noszonego to to samo co temperatura ciała?",
      a: "Nie. Temperatura skóry z urządzenia noszonego to nie głęboka temperatura ciała; to nocne odchylenie od twojej własnej wielonocnej linii bazowej, bez wiarygodnego zakresu klinicznego. Dobrze użyta może zasugerować przejście w stan podgorączkowy, zanim pojawią się objawy, ale każdą obawę o gorączkę trzeba potwierdzić rzeczywistym pomiarem doustnym.",
    },
    {
      q: "Jaka temperatura liczy się jako gorączka i kiedy szukać pomocy?",
      a: "Gorączka to temperatura doustna 38,0 C lub wyższa. U dorosłych objawy i czas ich trwania zwykle liczą się bardziej niż dokładna wartość, ale szukaj pomocy przy około 39,4 C lub przy każdej gorączce z dusznością, bólem w klatce piersiowej, silnym bólem głowy, splątaniem, sztywnością karku lub wysypką. Gorączka u niemowlęcia poniżej trzeciego miesiąca życia zawsze wymaga pilnej oceny.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "Jaki jest prawidłowy poziom cukru we krwi na czczo?",
      a: "Poniżej 100 mg/dl (poniżej 5,6 mmol/l) to norma według Amerykańskiego Towarzystwa Diabetologicznego, z przedziałem stanu przedcukrzycowego od 100 do 125; WHO otwiera stan przedcukrzycowy zamiast tego przy 110. Oba mają wspólny próg cukrzycy wynoszący 126 mg/dl lub wyżej. Pojedynczy nieprawidłowy odczyt niczego nie diagnozuje; potwierdzenie wymaga powtórnego badania w innym dniu.",
    },
    {
      q: "Jaka jest różnica między odczytem glukozy a HbA1c?",
      a: "Odczyt glukozy na czczo lub po posiłku to fotografia, prawdziwa dla chwili, w której pobrano próbkę, i łatwo zmieniana przez wczorajszą kolację czy nadchodzące przeziębienie. HbA1c to poklatkowy zapis, odzwierciedlający twój średni poziom cukru we krwi przez mniej więcej dwu- do trzymiesięczny okres życia czerwonej krwinki. Najwięcej pożytku przynoszą czytane obok siebie.",
    },
    {
      q: "Dlaczego mój poranny poziom cukru jest wyższy po źle przespanej nocy?",
      a: "Nawet jedna noc częściowego niedoboru snu wymiernie obniża wrażliwość na insulinę, a tolerancja glukozy spada w ciągu dnia, więc identyczny posiłek powoduje wyższy skok wieczorem. Kiepska noc albo późna, obfita kolacja to prawdopodobny powód odosobnionej nieprawidłowości następnego ranka i sama w sobie nie jest dowodem na cokolwiek.",
    },
    {
      q: "Kiedy odczyt poziomu cukru jest niebezpieczny?",
      a: "Glukoza poniżej 70 mg/dl (poniżej 3,9 mmol/l) to alert hipoglikemii; lecz szybko działającym węglowodanem i sprawdź ponownie po 15 minutach, a poniżej 54 mg/dl wymaga natychmiastowego działania. Utrzymująca się bardzo wysoka glukoza z pragnieniem, częstym oddawaniem moczu, wymiotami, szybkim oddechem lub zaburzonym myśleniem wymaga pilnej pomocy. To nie są samodzielne diagnozy; porozmawiaj z lekarzem.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "Co to jest VO2max i dlaczego ma znaczenie?",
      a: "VO2max to maksymalne tempo, w jakim organizm potrafi pobierać i zużywać tlen podczas intensywnego wysiłku, mierzone w mililitrach tlenu na kilogram na minutę. Obejmuje cały łańcuch dostarczania tlenu i jest jednym z najsilniejszych pojedynczych predyktorów tego, jak długo będziesz żyć, przy czym każdy przyrost sprawności wiąże się ze znacząco niższym ryzykiem zgonu.",
    },
    {
      q: "Jak dokładny jest VO2max na moim zegarku?",
      a: "Twoje urządzenie noszone raczej szacuje, niż mierzy tę wartość, wnioskując ją z relacji między tętnem a tempem i opierając się na założonym maksymalnym tętnie. Wartość bezwzględna może być o kilka punktów obok, a teren, upał i dopasowanie jeszcze ją zacierają. Uczciwym sposobem jej czytania jest traktowanie jako linii trendu: stały wzrost w skali tygodni jest prawdziwy.",
    },
    {
      q: "Jaki VO2max jest dobry dla mojego wieku?",
      a: "VO2max interpretuje się jako percentyl w obrębie twojego własnego przedziału wieku i płci, nigdy względem stałego celu. Mężczyźni osiągają wyniki mniej więcej 15 do 20 procent wyższe niż kobiety w tym samym wieku, a sprawność spada z wiekiem, więc wartość znakomita w wieku 60 lat byłaby przeciętna w wieku 25. Ważniejsze niż to, gdzie się znajdujesz, jest to, w którą stronę zmierzasz.",
    },
    {
      q: "Jak poprawić swój VO2max?",
      a: "Sprawność tlenowa rośnie przy regularnym treningu. Tygodniowy cel we wszystkich głównych wytycznych to 150 do 300 minut umiarkowanej aktywności lub 75 do 150 minut intensywnej aktywności, plus wzmacnianie mięśni co najmniej dwa razy w tygodniu, z wbudowaną regeneracją. Regularny trening z grubsza o połowę zmniejsza naturalny związany z wiekiem spadek. Jeśli byłeś nieaktywny lub masz chorobę serca, płuc czy metaboliczną, skonsultuj się z lekarzem przed rozpoczęciem intensywnych ćwiczeń.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Dlaczego BMI jest ograniczoną miarą zdrowia?",
      a: "BMI to tani, powtarzalny wskaźnik zastępczy otłuszczenia, ale nie odróżnia mięśni od tłuszczu, więc umięśniona osoba może wylądować w przedziale nadwagi, podczas gdy starszy dorosły, który stracił mięśnie, wygodnie mieści się w normie. Pomija też, gdzie tłuszcz się odkłada, a jego progi wyznaczono głównie na populacjach europejskich i niosą one wyższe ryzyko przy niższym BMI u osób pochodzenia południowo- i wschodnioazjatyckiego.",
    },
    {
      q: "Dlaczego to, gdzie odkłada się tłuszcz, ma większe znaczenie niż moja waga?",
      a: "Tłuszcz wokół talii, upakowany wśród narządów jamy brzusznej, jest metabolicznie znacznie groźniejszy niż tłuszcz na biodrach i udach oraz przewiduje cukrzycę, nadciśnienie i ryzyko sercowo-naczyniowe niezależnie od BMI. Prosta reguła kciuka, która dobrze sprawdza się u obu płci i różnych pochodzeń, to utrzymanie obwodu talii poniżej połowy swojego wzrostu.",
    },
    {
      q: "Dlaczego moja waga skacze w górę z dnia na dzień?",
      a: "Masa ciała waha się o jeden do dwóch kilogramów w ciągu normalnego dnia i z dnia na dzień wyłącznie przez nawodnienie, jedzenie wciąż w trakcie trawienia i sól, z czego nic nie jest tłuszczem. Obserwuj siedmiodniową średnią kroczącą, a szum się znosi, pozostawiając linię, która rzeczywiście coś znaczy. To samo dotyczy odsetka tkanki tłuszczowej z wagi.",
    },
    {
      q: "Ile wagi muszę zrzucić, by poprawić swoje zdrowie?",
      a: "U dorosłych z nadwagą lub otyłością trwała utrata zaledwie 5 do 10 procent masy ciała znacząco poprawia poziom cukru, ciśnienie krwi i lipidy, co jest znacznie lepszym celem niż jakakolwiek pojedyncza liczba na wadze. Umiarkowana, trwała zmiana to cel warty pogoni, a nie spektakularna liczba.",
    },
  ],
  "tracking-mood": [
    {
      q: "Jaki jest sens śledzenia mojego nastroju?",
      a: "Jeden wpis to opinia; kilkaset wpisów to trend, a trend to dane. Zapisywana konsekwentnie przez tygodnie prosta skala nastroju ujawnia wzorce, których żaden pojedynczy dzień nie pokazuje, takie jak powolny spadek w trakcie stresującego okresu, niezawodny przypływ po ćwiczeniach albo dołek pojawiający się w przewidywalnym miesięcznym rytmie.",
    },
    {
      q: "Jak powinienem zapisywać swój nastrój, by było to przydatne?",
      a: "Konsekwencja to najbardziej przydatny nawyk: ta sama skala, ta sama pora dnia, każdego dnia. Samoocena jest wrażliwa na porę dnia, niedawne wydarzenia i to, jak się wyspałeś, więc jednorazowy odczyt jest zaszumiony. Mierzony w ten sam sposób, dzienny rozrzut się uśrednia, a leżący u podstaw kierunek staje się czytelny.",
    },
    {
      q: "Jaki wynik w kwestionariuszu nastroju jest niepokojący?",
      a: "Na zwalidowanych skalach przesiewowych WHO-5 na poziomie 50 procent lub niżej wskazuje na złe samopoczucie, a suma PHQ-9 lub GAD-7 wynosząca 10 lub więcej to standardowy próg do działania. To zgodne, dobrze ugruntowane skale, ale wynik dodatni jest zachętą do rozmowy ze specjalistą, a nie diagnozą, którą można postawić w domu.",
    },
    {
      q: "Kiedy obniżony nastrój powinien skłonić mnie do szukania pomocy?",
      a: "Gdy się utrzymuje: spadkowy trend trwający dwa tygodnie lub dłużej, albo zaczynający przeszkadzać w codziennym życiu, to powód, by porozmawiać z lekarzem lub specjalistą zdrowia psychicznego, i nie musisz czekać, aż poczujesz się naprawdę źle. Każda myśl o skrzywdzeniu siebie jest sama w sobie powodem, by natychmiast skontaktować się z lokalnym numerem alarmowym lub telefonem zaufania.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Dlaczego cykl menstruacyjny uznaje się za parametr życiowy?",
      a: "Gremia zawodowe proszą lekarzy, by traktowali cykl tak jak tętno, ciśnienie krwi i temperaturę, ponieważ jest to powracający rytm, który pozostaje stabilny, gdy wszystko jest w porządku, więc jego zmiana niesie informację. Długość i regularność cyklu to dostępne okno na zdrowie reprodukcyjne i ogólne.",
    },
    {
      q: "Jaka jest prawidłowa długość cyklu menstruacyjnego?",
      a: "Liczą się dwa renomowane zakresy. Przedział kierowany do pacjentek opisuje codzienne zdrowe cykle dorosłych jako 21 do 35 dni, podczas gdy kliniczne ramy przesiewowe to 24 do 38 dni. Zmienność rzędu tygodnia z miesiąca na miesiąc jest czymś zwykłym, a faza lutealna jest względnie stałą kotwicą, przy czym większość zmienności długości mieści się w fazie folikularnej.",
    },
    {
      q: "Czy mogę polegać na aplikacji śledzącej cykl jako na antykoncepcji?",
      a: "Nie. Algorytmiczne przewidywania cyklu z dowolnej aplikacji, urządzenia noszonego czy sprzętu nie są metodą antykoncepcji. Przewidywania oparte na domyślnych wartościach populacyjnych są niewiarygodne, moment owulacji bardzo się różni nawet u osób z regularnymi cyklami, a perimenopauza znów czyni cykle nieprzewidywalnymi. Każdy korzystający z metod rozpoznawania płodności powinien stosować zwalidowaną, właściwie zaplanowaną metodę, a nie pojedynczą przewidzianą datę.",
    },
    {
      q: "Kiedy powinnam udać się do lekarza w sprawie cyklu?",
      a: "Poruszyć to z lekarzem warto, gdy cykle stale wykraczają poza typowy zakres, z odstępami krótszymi niż około 21 dni lub dłuższymi niż około 45, albo gdy następuje wyraźna, trwała zmiana względem twojego własnego wzorca. Przerwa wynosząca 90 dni lub więcej, krwawienie trwające dłużej niż 7 dni lub przesiąkanie podpaski częściej niż co jedną do dwóch godzin, a także krwawienie między miesiączkami wymagają oceny.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "Jak urządzenie noszone mierzy moje tętno?",
      a: "Większość używa fotopletyzmografii: zielona dioda LED świeci światłem w skórę, krew częściowo je pochłania, a czujnik liczy pulsacje, gdy objętość krwi rośnie i opada z każdym uderzeniem. Działa to dobrze w spoczynku, ale zmaga się z ruchem, dlatego tętno z nadgarstka podczas interwałów lub podnoszenia ciężarów to najmniej wiarygodny odczyt, jaki większość ludzi posiada. Pas piersiowy pozostaje dokładny w ruchu.",
    },
    {
      q: "Skąd mój zegarek zna moje fazy snu?",
      a: "Nie widzi twojego mózgu. Wnioskuje sen z tego, jak mało się ruszasz, często w połączeniu z tętnem i jego zmiennością między uderzeniami, a następnie oznacza noc jako sen lekki, głęboki i REM. Względem standardu z laboratorium klinicznego urządzenia są całkiem dobre w odróżnianiu snu od czuwania i znacznie słabsze w określaniu, która to faza, więc czytaj porę pójścia spać i całkowitą długość z ufnością, a kolorowe fazy traktuj jako oszacowanie.",
    },
    {
      q: "Czy odczyty z urządzeń noszonych są dokładne?",
      a: "Większość tego, co pokazuje ci urządzenie noszone, to oszacowanie, a nie pomiar laboratoryjny. Optyczne tętno, wywnioskowane fazy snu, SpO2 z nadgarstka i każdy wynik regeneracji czy gotowości to modele zbudowane na kilku rzeczywistych sygnałach, dość dokładne, by ujawnić zmianę w czasie, ale rzadko na tyle precyzyjne, by traktować pojedynczą wartość jako prawdę absolutną. Czytaj je jako względne, a nie bezwzględne.",
    },
    {
      q: "Co tak naprawdę mierzą wyniki regeneracji i gotowości?",
      a: "One wcale nie są mierzone; to autorskie modele, które łączą surowe strumienie z czujników, zwykle nocne HRV, tętno spoczynkowe i sen, z twoim wiekiem, wagą i historią, by wytworzyć jedną liczbę. Nie mają klinicznego zakresu odniesienia ani nie są ujednolicone między urządzeniami, więc czytaj je jako codzienną podpowiedź, a nie pomiar kliniczny.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Dlaczego moja własna linia bazowa jest lepsza niż zakres normy?",
      a: "Zakres odniesienia jest zbudowany, by wychwycić niewielki odsetek osób, które plasują się daleko poza typowym rozrzutem; nigdy nie zaprojektowano go po to, by powiedzieć ci, czy dzisiaj jest dobry dzień. Ponieważ różnice między ludźmi są duże, tętno spoczynkowe 58 wygląda przeciętnie na tle podręcznikowego zakresu, ale jest wyraźnym wzrostem o sześć uderzeń, jeśli twoja linia bazowa to 52, czyli zmianą, którą zakres populacyjny całkowicie ukrywa.",
    },
    {
      q: "Jak odróżnić prawdziwy sygnał od losowego szumu?",
      a: "Szum to odczyt blisko krawędzi twojego zwykłego zakresu albo niewielki ruch, który cofa się następnego dnia. Sygnał to kierunek, który się utrzymuje: wielodniowe przesunięcie znacznie poza twój zwykły rozrzut albo powolny dryf średniej kroczącej w skali tygodni. Średnia krocząca wygładza rozrzut, a zmiana kilkukrotnie większa niż twoje zwykłe wahania z dnia na dzień zasługuje na uwagę.",
    },
    {
      q: "Jak długo trwa, zanim linia bazowa stanie się wiarygodna?",
      a: "Pojedynczy pomiar to punkt bez kontekstu. Nowy sygnał potrzebuje kilku tygodni konsekwentnych odczytów, zanim pojedyncza liczba zacznie cokolwiek znaczyć, bo dopiero wtedy dzienny szum uśredni się do linii bazowej, na której rzeczywiście można się oprzeć.",
    },
    {
      q: "Dlaczego pomiar w tych samych warunkach ma aż takie znaczenie?",
      a: "Trend jest uczciwy tylko wtedy, gdy warunki za nim stojące pozostają stałe. Tętno spoczynkowe po przebudzeniu jest znacznie niższe niż to samo tętno po kawie i wejściu po schodach, a waga przed śniadaniem jest o kilogram niższa niż to samo ciało po kolacji. Nieco niedoskonałe urządzenie używane w ten sam sposób każdego dnia przewyższa lepsze używane chaotycznie.",
    },
  ],
  "steps-and-movement": [
    {
      q: "Skąd wziął się cel 10 000 kroków?",
      a: "Nigdy nie był wynikiem badań. Wywodzi się od japońskiego krokomierza wprowadzonego na rynek około igrzysk olimpijskich w Tokio w 1964 roku, którego nazwa oznaczała krokomierz dziesięciu tysięcy kroków, wybrana częściowo dlatego, że znak liczby 10 000 przypomina idącego człowieka, a częściowo dlatego, że była zapadającą w pamięć okrągłą liczbą do sprzedaży urządzenia. Traktuj to jako folklor, a nie wytyczną.",
    },
    {
      q: "Ile kroków dziennie naprawdę potrzebuję?",
      a: "Większość korzyści dla śmiertelności uzyskuje się znacznie poniżej 10 000. Badania pokazują, że śmiertelność spada wraz ze wzrostem liczby kroków, a krzywa spłaszcza się gdzieś około 6000 do 8000 kroków dziennie u osób starszych i 8000 do 10 000 u młodszych. Krzywa się spłaszcza, ale nie odwraca, więc więcej chodzenia nie jest problemem, po prostu dodaje mniej na każdy krok.",
    },
    {
      q: "Czy lepiej chodzić wszystko naraz, czy w ciągu całego dnia?",
      a: "Rozłożenie ruchu na cały dzień pomaga. Długotrwałe nieprzerwane siedzenie coraz częściej traktuje się jako odrębny czynnik ryzyka, w pewnym stopniu niezależny od tego, czy też ćwiczysz, dlatego obecne wytyczne łączą ruszaj się więcej z siedź mniej. Kilka minut spaceru co godzinę, schody i spacer po posiłkach wszystko się sumuje.",
    },
    {
      q: "Czego liczba kroków nie mówi mi o moim zdrowiu?",
      a: "To miernik objętości, a nie test sprawności. Nic nie mówi o intensywności ani sile, nie potrafi odróżnić energicznej mili pod górę od powolnych kroków po kuchni i nie mierzy wydolności krążeniowo-oddechowej, jednego z najsilniejszych predyktorów długoterminowego zdrowia. Kroki należą do panelu obok innych sygnałów, a nie na piedestale.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "Jak kofeina wpływa na moje tętno i ciśnienie krwi?",
      a: "Kofeina blokuje adenozynę i pozwala swobodniej pracować współczulnemu pedałowi gazu, więc tętno przyspiesza, a ciśnienie krwi przejściowo rośnie, co jest najsilniejsze u osób, które nie piją jej regularnie. Kawa na godzinę przed pomiarem może podnieść zarówno twoje tętno spoczynkowe, jak i ciśnienie krwi na tyle, by było to zauważalne.",
    },
    {
      q: "Czy popołudniowa kawa naprawdę wpływa na mój sen?",
      a: "Często bardziej, niż jesteś w stanie odczuć. Okres półtrwania kofeiny wynosi zwykle około pięciu godzin, więc popołudniowa filiżanka wciąż ma połowę dawki w obiegu o porze snu. W kontrolowanym badaniu dawka odpowiadająca mocnej kawie przyjęta sześć godzin przed snem wymiernie skróciła całkowity czas snu, mimo że uczestnicy nie doceniali tego zakłócenia.",
    },
    {
      q: "Dlaczego po wypiciu mam niskie HRV i wysokie tętno?",
      a: "Gdy organizm rozkłada alkohol w ciągu nocy, strona współczulna pozostaje włączona, więc tętno spoczynkowe utrzymuje się podwyższone, a HRV spada, przy czym większe ilości dają większe i dłużej trwające efekty. Dlatego pojedyncza lampka do kolacji może po cichu spłaszczyć twój wynik regeneracji, podczas gdy przesypiasz całe zdarzenie.",
    },
    {
      q: "Czy to oznacza, że powinienem zrezygnować z kofeiny i alkoholu?",
      a: "Niekoniecznie. Wartością jest przypisanie przyczyny, a nie abstynencja. Obserwacja własnych danych pokazuje, jak późno jest zbyt późno na kofeinę, zanim twój sen się posypie, i ile alkoholu trzeba, by twoje nocne tętno wzrosło, więc przestajesz mylić przewidywalny, przejściowy spadek z oznaką, że coś jest nie tak.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Czy naprawdę potrzebuję ośmiu szklanek wody dziennie?",
      a: "Nie ma mocnych podstaw naukowych dla uniwersalnej zasady ośmiu szklanek; przeglądy śledzące to twierdzenie nie znalazły za nim wiarygodnych dowodów. Wiarygodne gremia podają populacyjne wartości odniesienia dla całkowitej wody ze wszystkich źródeł, mniej więcej 2 do 2,7 litra dziennie dla kobiet i 2,5 do 3,7 dla mężczyzn, i podkreślają, że potrzeby bardzo się różnią w zależności od masy ciała, aktywności, klimatu i diety.",
    },
    {
      q: "Skąd mam wiedzieć, czy piję wystarczająco dużo?",
      a: "Dla większości zdrowych osób w zwykły dzień własne sygnały organizmu są rozsądnymi wskazówkami. Pragnienie to prawdziwy, działający czujnik, a picie zgodnie z pragnieniem utrzymuje większość zdrowych dorosłych w odpowiednim nawodnieniu. Kolor moczu to zgrubne sprawdzenie w domu: blada słoma sugeruje, że jest w porządku, stale ciemny sugeruje, że mógłbyś pić więcej.",
    },
    {
      q: "Dlaczego odwodnienie podnosi moje tętno?",
      a: "Gdy stracisz dość płynu, by spadła objętość krwi, serce kompensuje to szybszym biciem, by utrzymać stabilne krążenie, więc odwodnienie podnosi tętno spoczynkowe i wysiłkowe. Nawet łagodne niedobory płynów rzędu jednego do dwóch procent masy ciała wystarczą, by pogorszyć nastrój, zwiększyć poczucie wysiłku i osłabić koncentrację.",
    },
    {
      q: "Czy można wypić zbyt dużo wody?",
      a: "Tak. Picie znacznie ponad potrzebę, najczęściej podczas zawodów wytrzymałościowych, może rozcieńczyć sód we krwi do niebezpiecznego stanu zwanego hiponatremią, której wczesne objawy pokrywają się z odwodnieniem. Każdy z chorobą serca, nerek lub wątroby, albo przyjmujący leki wpływające na gospodarkę płynami, może mieć celowo ograniczony cel i powinien kierować się zaleceniami lekarskimi ponad jakąkolwiek ogólną zasadą.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "Jak stres objawia się w moich danych zdrowotnych?",
      a: "Stres to wciśnięty współczulny pedał gazu, który zasila wiele wskaźników z jednego pokrętła, więc poruszają się razem. Tętno spoczynkowe rośnie, nocne HRV spada, sen staje się lżejszy i bardziej przerywany, a częstość oddechów bywa podwyższona. Żaden pojedynczy sygnał nie jest rozstrzygający, ale czytane jako zespół na tle twojej własnej linii bazowej trudno z nimi dyskutować.",
    },
    {
      q: "Jaka jest różnica między stresem ostrym a przewlekłym?",
      a: "Ostre czynniki stresowe, jak ciężki trening czy termin oddania pracy, zmieniają wskaźniki, a po nocy lub dwóch prawdziwego odpoczynku wszystko wraca do linii bazowej; ten powrót jest właśnie sednem. Niepokoić zaczyna się wtedy, gdy powrót przestaje następować, a organizm płaci skumulowany koszt obciążenia allostatycznego, odczytywany w danych jako linia bazowa, która po cichu się przesunęła i taka pozostała.",
    },
    {
      q: "Czy regeneracja to po prostu brak stresu?",
      a: "Nie. Regeneracja to aktywny proces przywspółczulny, ponowne włączenie hamulca nerwu błędnego, spadek tętna i sen głęboki wykonujący pracę naprawczą, dlatego ujawnia się jako sygnał pozytywny, a nie po prostu wyciszenie liczb. Oznacza to, że można ją wspierać, a nie tylko na nią czekać, poprzez chroniony regularny sen, lekki ruch tlenowy i światło dzienne.",
    },
    {
      q: "Kiedy powinienem potraktować utrzymujący się stres poważnie?",
      a: "Te sygnały mogą sygnalizować trwałe obciążenie, ale nie powiedzą ci dlaczego, i nie zastąpią tego, jak się czujesz. Stres, który zaburza twój sen, koncentrację lub czerpanie radości ze zwykłych rzeczy przez tygodnie, warto omówić z lekarzem lub specjalistą zdrowia psychicznego, niezależnie od tego, co mówią liczby. Jeśli cierpienie kiedykolwiek wyda się przytłaczające albo masz myśli o samookaleczeniu, natychmiast skontaktuj się z lokalnym numerem alarmowym lub telefonem zaufania.",
    },
  ],
};
export default FAQ;
