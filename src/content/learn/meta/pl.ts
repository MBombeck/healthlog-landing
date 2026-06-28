import type { LearnMeta } from "@/content/learn";

const meta: LearnMeta = {
  ui: {
    hubKicker: "Wiedza",
    hubTitle: "Wskaźniki zdrowia — wyjaśnione",
    hubIntro:
      "Jasne, napisane przystępnym językiem przewodniki po liczbach, które wytwarza Twoje ciało — co oznaczają, co je zmienia i kiedy zmiana zasługuje na uwagę. Każde twierdzenie ma źródło; każdy przewodnik prowadzi do głębszej strony referencyjnej w dokumentacji.",
    allGuides: "Wszystkie przewodniki",
    minRead: (n) => `${n} min czytania`,
    goDeeperLabel: "Zgłęb temat",
    goDeeperBody: (title) =>
      `Po pełną wiedzę — zakresy z wytycznych, szczegóły pomiaru i kompletną listę źródeł — przeczytaj stronę referencyjną „${title.toLowerCase()}” w dokumentacji.`,
    goDeeperCta: "Otwórz stronę referencyjną",
    footerDisclaimer:
      "Treść edukacyjna — ogólne informacje, a nie porada medyczna.",
    languageLabel: "Język",
    docs: "Dokumentacja",
    home: "Strona główna",
  },
  categories: {
    foundations: "Podstawy",
    heart: "Serce i krążenie",
    sleep: "Sen i regeneracja",
    metabolic: "Zdrowie metaboliczne",
    fitness: "Kondycja i długowieczność",
    body: "Ciało i skład",
    mind: "Umysł i cykl",
  },
  articles: {
    "understanding-your-health-metrics": {
      title: "Twoje wskaźniki zdrowia, powiązane",
      dek: "Dlaczego pojedyncza liczba rzadko opowiada całą historię — i jak sygnały wytwarzane przez Twoje ciało łączą się w jedną całość.",
      description:
        "Napisany przystępnym językiem przewodnik po codziennych wskaźnikach zdrowia, które warto śledzić — tętno, sen, ciśnienie krwi, glukoza i więcej — oraz po tym, jak łączą się w jeden obraz.",
    },
    "resting-heart-rate": {
      title: "Co mówi Ci tętno spoczynkowe",
      dek: "Najprostsza liczba na Twoim nadgarstku jest zarazem jedną z najszczerszych. Oto jak ją czytać.",
      description:
        "Czym jest tętno spoczynkowe, co uchodzi za normę, co je podnosi lub obniża i kiedy utrzymująca się zmiana zasługuje na uwagę lekarza.",
    },
    "heart-rate-variability": {
      title: "Zmienność rytmu serca, bez szumu",
      dek: "HRV jest potężna i fatalnie rozumiana. Rzeczowe spojrzenie na to, co oznaczają liczby z odstępów między uderzeniami.",
      description:
        "Zmienność rytmu serca wyjaśniona: co mierzy HRV, dlaczego tak bardzo różni się między ludźmi, jak odczytywać własny trend i jakie są granice pojedynczego pomiaru.",
    },
    "reading-your-blood-pressure": {
      title: "Jak odczytywać wartości ciśnienia krwi",
      dek: "Dwie liczby i sporo niuansów. Co skurczowe i rozkurczowe naprawdę znaczą dla Twojego zdrowia.",
      description:
        "Jak odczytywać ciśnienie krwi: co oznaczają dwie liczby, jakie są kategorie z wytycznych, dlaczego technika pomiaru ma znaczenie i kiedy wyniki wymagają kontroli lekarskiej.",
    },
    "sleep-consistency": {
      title: "Dlaczego regularność snu liczy się bardziej niż jego długość",
      dek: "Osiem godzin o przypadkowych porach to nie to samo co siedem przy stałym rytmie. To pora niesie sygnał.",
      description:
        "Sen wyjaśniony: fazy, ile go naprawdę potrzebujesz, dlaczego regularny rytm liczy się tak samo jak łączna liczba godzin i co może ujawnić trend Twojego snu.",
    },
    "respiratory-rate": {
      title: "Częstość oddechu: najcichszy z parametrów życiowych",
      dek: "Rzadko myślisz o tempie swojego oddechu — i właśnie dlatego jego zmiana mówi tak wiele.",
      description:
        "Czym jest częstość oddechu, jaki jest jej zakres normy w spoczynku, dlaczego nocna linia bazowa jest tak stabilna i dlaczego utrzymujący się wzrost może być wczesnym sygnałem wartym uwagi.",
    },
    "blood-oxygen-spo2": {
      title: "Co mówi Ci saturacja krwi (a czego nie)",
      dek: "SpO₂ uspokaja, gdy jest wysoka, i łatwo ją źle odczytać, gdy spada. Spokojny przewodnik po tej liczbie.",
      description:
        "Saturacja krwi tlenem (SpO₂) wyjaśniona: zakres normy, dlaczego odczyty z nadgarstka się wahają, znane zastrzeżenia co do dokładności i kiedy niski wynik zasługuje na uwagę.",
    },
    "body-temperature-baseline": {
      title: "Twoja bazowa temperatura jako sygnał",
      dek: "Nie ma jednej „prawidłowej” temperatury — jest Twoja. To odchylenie od niej naprawdę coś mówi.",
      description:
        "Dlaczego temperatura ciała zmienia się w ciągu dnia i u różnych osób, dlaczego osobista linia bazowa mówi więcej niż podręcznikowe 37 °C i co może oznaczać utrzymujące się odchylenie.",
    },
    "blood-sugar-beyond-diabetes": {
      title: "Cukier we krwi, nie tylko przy cukrzycy",
      dek: "Glukoza to nie tylko liczba związana z cukrzycą. Oto co odzwierciedla dla każdego — i jak wpisuje się w to HbA1c.",
      description:
        "Glukoza we krwi i HbA1c wyjaśnione dla szerokiego odbiorcy: co oznaczają liczby, jakie są zakresy z wytycznych i jaka jest różnica między pojedynczym pomiarem a długofalową średnią.",
    },
    "vo2max-and-longevity": {
      title: "VO₂max: wskaźnik kondycji powiązany z dłuższym życiem",
      dek: "Wydolność krążeniowo-oddechowa to jeden z najsilniejszych predyktorów tego, jak długo będziesz żyć. Oto dlaczego.",
      description:
        "VO₂max wyjaśniony: co mierzy, jak szacują go urządzenia ubieralne, dlaczego wydolność krążeniowo-oddechowa tak silnie wiąże się z długowiecznością i jak ten wskaźnik zmieniać.",
    },
    "beyond-the-scale": {
      title: "Poza wagą: masa ciała, BMI i skład ciała",
      dek: "Waga odpowiada na jedno pytanie. Skład ciała odpowiada na to, które naprawdę Cię obchodzi.",
      description:
        "Dlaczego masa ciała i BMI są użyteczne, ale zgrubne, co dodaje skład ciała, jak odczytywać trendy masy tłuszczowej i beztłuszczowej oraz które sygnały liczą się dla zdrowia.",
    },
    "tracking-mood": {
      title: "Śledzenie nastroju jako sygnał zdrowia",
      dek: "Nastrój wydaje się zbyt subiektywny, by go mierzyć — ale stały zapis zamienia go w jeden z Twoich najbardziej użytecznych trendów.",
      description:
        "Dlaczego prosty, konsekwentny zapis nastroju jest pełnoprawnym wskaźnikiem zdrowia, jak współgra ze snem i aktywnością i kiedy utrzymujący się obniżony nastrój wymaga wsparcia.",
    },
    "the-cycle-as-a-vital-sign": {
      title: "Cykl menstruacyjny jako parametr życiowy",
      dek: "Lekarze nie bez powodu traktują cykl jak parametr życiowy. Co jego rytm ujawnia o zdrowiu.",
      description:
        "Cykl menstruacyjny wyjaśniony jako sygnał zdrowia: cztery fazy, jak wygląda prawidłowy cykl, co go zmienia i kiedy zmiana wymaga konsultacji z lekarzem.",
    },
    "how-wearables-measure-you": {
      title: "Jak urządzenia ubieralne naprawdę Cię mierzą",
      dek: "Czujniki optyczne, akcelerometry, sprytne szacunki — co sprzęt na Twoim nadgarstku naprawdę widzi, a czego nie.",
      description:
        "Jak urządzenia ubieralne mierzą tętno, kroki, sen, saturację krwi i temperaturę — czujniki stojące za liczbami, szacunki pochodne i znane granice dokładności.",
    },
    "reading-your-trends": {
      title: "Czytaj trendy, nie liczby",
      dek: "Najcenniejsza umiejętność w śledzeniu zdrowia to nie odczytanie liczby — to czytanie własnej linii w czasie.",
      description:
        "Dlaczego Twoja osobista linia bazowa mówi więcej niż jakikolwiek zakres populacyjny, jak odróżnić znaczący trend od dziennego szumu i dlaczego spójne warunki pomiaru liczą się bardziej niż precyzja.",
    },
    "steps-and-movement": {
      title: "Kroki i codzienny ruch",
      dek: "Co naprawdę mówi Ci dzienna liczba kroków — i dlaczego 10 000 było liczbą marketingową, a nie celem zdrowotnym.",
      description:
        "Co dzienne kroki ujawniają o zdrowiu, dowody na to, że korzyści zaczynają się znacznie poniżej 10 000, dlaczego ruch przez cały dzień ma znaczenie i jak szacowana jest liczba kroków.",
    },
    "caffeine-alcohol-and-your-readings": {
      title: "Kofeina, alkohol i Twoje odczyty",
      dek: "Dwa codzienne nawyki zostawiają wyraźny ślad na Twoim tętnie, śnie i regeneracji. Oto czego szukać.",
      description:
        "Jak kofeina i alkohol widocznie poruszają wskaźniki, które śledzisz — tętno, HRV, sen i glukozę — i dlaczego wyjaśniają tak wiele kiepskich poranków.",
    },
    "hydration-and-your-body": {
      title: "Nawodnienie a Twoje ciało",
      dek: "Większość dziennych wahań masy ciała to woda. Spokojne spojrzenie na bilans płynów — i prawda o „ośmiu szklankach dziennie”.",
      description:
        "Co nawodnienie robi dla tętna, masy ciała i samopoczucia, uczciwe dowody na dzienne potrzeby płynów oraz kiedy bilans płynów naprawdę się liczy.",
    },
    "stress-and-recovery": {
      title: "Stres i regeneracja",
      dek: "Twoje ciało prowadzi rachunek — w tętnie, HRV i śnie. Jak odczytywać oznaki napięcia i odpoczynku.",
      description:
        "Jak stres i regeneracja ujawniają się w tętnie spoczynkowym, HRV i śnie, jaki bilans autonomiczny za nimi stoi i dlaczego regeneracja jest aktywnym sygnałem, który można budować.",
    },
    "screening-not-diagnosis": {
      title: "Wynik przesiewowy to nie diagnoza",
      dek: "PHQ-9 i GAD-7 wyglądają jak wyniki laboratoryjne, ale przesiewają — nie diagnozują. Dlaczego to rozróżnienie jest w tym wszystkim sednem.",
      description:
        "Co tak naprawdę mierzą kwestionariusze zdrowia psychicznego PHQ-9, GAD-7, WHO-5 i PSS-10, jak odczytywać ich przedziały nasilenia, dlaczego powtarzanie bije jednorazowe podejście i dlaczego dodatni przesiew to zachęta do rozmowy ze specjalistą, a nie samodzielna diagnoza.",
    },
    "longevity-labs-explained": {
      title: "Badania długowieczności: krew poza cholesterolem",
      dek: "Standardowy lipidogram zaniża twoje ryzyko. ApoB, Lp(a) i hs-CRP opowiadają pełniejszą historię.",
      description:
        "Dlaczego podstawowy lipidogram pomija ryzyko i co dodają ApoB, nie-HDL, Lp(a), hs-CRP, HbA1c oraz insulina na czczo — z zakresami orientacyjnymi, ujęciem „trend i powtórka” oraz wyjaśnieniem, dlaczego badania krwi czyta się z lekarzem.",
    },
    "waist-and-central-fat": {
      title: "Talia i tłuszcz centralny: dlaczego centymetr bije wagę",
      dek: "To, gdzie magazynujesz tłuszcz, liczy się bardziej niż to, ile ważysz. Stosunek talii do wzrostu śledzi ryzyko, które BMI pomija.",
      description:
        "Dlaczego tłuszcz trzewny jest groźniejszy niż podskórny, jakie są progi obwodu talii i stosunku talii do wzrostu, jak mierzyć konsekwentnie i co otyłość centralna przewiduje dla zdrowia metabolicznego i sercowo-naczyniowego.",
    },
    "grip-strength-as-a-vital-sign": {
      title: "Siła chwytu: najtańszy test długowieczności",
      dek: "Dynamometr ręczny przewiduje śmiertelność lepiej niż ciśnienie krwi. Siła to parametr życiowy, a nie tylko wskaźnik z siłowni.",
      description:
        "Co siła chwytu odwzorowuje względem siły całego ciała i sarkopenii, jakie są zakresy norm według wieku i płci, jaki jest związek ze śmiertelnością z badania PURE, jak śledzić trend i jak trening oporowy go zmienia.",
    },
    "weather-altitude-and-your-body": {
      title: "Pogoda, wysokość a Twoje ciało",
      dek: "Upał, wysokość i jakość powietrza poruszają Twoje tętno, sen i oddech, zanim to zauważysz — kontekst dla odczytów „nie tak”.",
      description:
        "Jak upał, wysokość i zanieczyszczenie powietrza zmieniają Twoje tętno spoczynkowe, sen, oddech i natlenienie krwi, dlaczego te przesunięcia są informacją, a nie usterką, i jak czytać dane względem otoczenia, a nie w próżni.",
    },
  },
};

export default meta;
