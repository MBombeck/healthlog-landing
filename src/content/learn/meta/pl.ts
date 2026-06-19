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
      dek: "Najprostsza liczba na Twoim nadgarstku jest też jedną z najbardziej szczerych. Oto jak ją odczytywać.",
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
      title: "Dlaczego regularność snu bije jego długość",
      dek: "Osiem godzin o przypadkowych porach to nie to samo co siedem przy stałym rytmie. Sygnałem jest pora.",
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
      dek: "Nie ma jednej „prawidłowej” temperatury — jest Twoja. Użyteczne jest odchylenie od niej.",
      description:
        "Dlaczego temperatura ciała zmienia się w ciągu dnia i między ludźmi, dlaczego osobista linia bazowa bije podręcznikowe 37 °C i co może oznaczać utrzymujące się odchylenie.",
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
  },
};

export default meta;
