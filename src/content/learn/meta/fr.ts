import type { LearnMeta } from "@/content/learn";

const meta: LearnMeta = {
  ui: {
    hubKicker: "Comprendre",
    hubTitle: "Vos indicateurs de santé, expliqués",
    hubIntro:
      "Des guides clairs, en langage courant, sur les chiffres que produit votre corps : ce qu'ils signifient, ce qui les fait bouger et quand un changement mérite votre attention. Chaque affirmation est sourcée ; chaque guide renvoie vers une page de référence plus détaillée dans la documentation.",
    allGuides: "Tous les guides",
    minRead: (n) => `${n} min de lecture`,
    goDeeperLabel: "Aller plus loin",
    goDeeperBody: (title) =>
      `Pour la référence complète — plages des recommandations, détail de la mesure et liste exhaustive des sources — consultez la page de référence ${title.toLowerCase()} dans la documentation.`,
    goDeeperCta: "Ouvrir la page de référence",
    footerDisclaimer:
      "Contenu éducatif — information générale, et non un avis médical.",
    languageLabel: "Langue",
    docs: "Documentation",
    home: "Accueil",
  },
  categories: {
    foundations: "Principes fondamentaux",
    heart: "Cœur et circulation",
    sleep: "Sommeil et récupération",
    metabolic: "Santé métabolique",
    fitness: "Forme physique et longévité",
    body: "Corps et composition",
    mind: "Esprit et cycle",
  },
  articles: {
    "understanding-your-health-metrics": {
      title: "Vos indicateurs de santé, reliés entre eux",
      dek: "Pourquoi un seul chiffre raconte rarement toute l'histoire — et comment les signaux que produit votre corps s'articulent les uns aux autres.",
      description:
        "Un guide en langage clair sur les indicateurs de santé du quotidien qui méritent d'être suivis — fréquence cardiaque, sommeil, tension artérielle, glycémie et plus encore — et sur la manière dont ils se relient en une seule image d'ensemble.",
    },
    "resting-heart-rate": {
      title: "Ce que votre fréquence cardiaque au repos vous dit",
      dek: "Le chiffre le plus simple à votre poignet est aussi l'un des plus honnêtes. Voici comment le lire.",
      description:
        "Ce qu'est une fréquence cardiaque au repos, ce qui compte comme normal, ce qui la fait monter ou descendre, et quand un changement durable mérite l'attention d'un médecin.",
    },
    "heart-rate-variability": {
      title: "La variabilité de la fréquence cardiaque, sans le battage",
      dek: "La VFC est puissante et largement mal comprise. Un regard posé sur ce que révèlent les écarts d'un battement à l'autre.",
      description:
        "La variabilité de la fréquence cardiaque expliquée : ce que mesure la VFC, pourquoi elle varie autant d'une personne à l'autre, comment lire votre propre tendance, et les limites d'une mesure isolée.",
    },
    "reading-your-blood-pressure": {
      title: "Lire vos chiffres de tension artérielle",
      dek: "Deux nombres, beaucoup de nuances. Ce que la systolique et la diastolique signifient vraiment pour votre santé.",
      description:
        "Comment lire la tension artérielle : ce que signifient les deux nombres, les catégories des recommandations, pourquoi la technique de mesure compte, et quand une mesure justifie un suivi médical.",
    },
    "sleep-consistency": {
      title: "Pourquoi la régularité du sommeil prime sur sa durée",
      dek: "Huit heures à des horaires aléatoires ne valent pas sept heures sur un rythme stable. C'est le moment qui fait le signal.",
      description:
        "Le sommeil expliqué : les stades, ce dont vous avez réellement besoin, pourquoi un horaire régulier compte autant que le nombre d'heures, et ce que votre tendance de sommeil peut révéler.",
    },
    "respiratory-rate": {
      title: "La fréquence respiratoire : le signe vital le plus discret",
      dek: "Vous pensez rarement à votre respiration — et c'est justement pour cela qu'un changement y est si parlant.",
      description:
        "Ce qu'est la fréquence respiratoire, sa plage normale au repos, pourquoi une référence nocturne est si stable, et pourquoi une hausse durable peut être un signal précoce digne d'attention.",
    },
    "blood-oxygen-spo2": {
      title: "Ce que l'oxygène du sang vous dit (et ce qu'il ne dit pas)",
      dek: "La SpO₂ rassure quand elle est haute et se lit mal quand elle baisse. Un guide posé sur ce chiffre.",
      description:
        "La saturation en oxygène du sang (SpO₂) expliquée : la plage normale, pourquoi les mesures au poignet varient, les réserves connues sur leur précision, et quand une valeur basse mérite attention.",
    },
    "body-temperature-baseline": {
      title: "Votre température de référence comme signal",
      dek: "Il n'existe pas une seule température « normale » — il y a la vôtre. C'est l'écart par rapport à elle qui est utile.",
      description:
        "Pourquoi la température corporelle varie au fil de la journée et d'une personne à l'autre, en quoi une référence personnelle vaut mieux que les 37 °C des manuels, et ce qu'un écart durable peut indiquer.",
    },
    "blood-sugar-beyond-diabetes": {
      title: "La glycémie, au-delà du diabète",
      dek: "Le glucose n'est pas qu'un chiffre lié au diabète. Voici ce qu'il reflète pour tout le monde — et la place de l'HbA1c.",
      description:
        "La glycémie et l'HbA1c expliquées au grand public : ce que signifient les chiffres, les plages des recommandations, la différence entre une mesure ponctuelle et une moyenne à long terme.",
    },
    "vo2max-and-longevity": {
      title: "La VO₂max : le chiffre de forme physique lié à une vie plus longue",
      dek: "La capacité cardiorespiratoire est l'un des plus puissants prédicteurs de votre espérance de vie. Voici pourquoi.",
      description:
        "La VO₂max expliquée : ce qu'elle mesure, comment les objets connectés l'estiment, pourquoi la capacité cardiorespiratoire est si étroitement liée à la longévité, et comment faire évoluer ce chiffre.",
    },
    "beyond-the-scale": {
      title: "Au-delà de la balance : poids, IMC et composition corporelle",
      dek: "La balance répond à une question. La composition corporelle répond à celle qui vous importe vraiment.",
      description:
        "Pourquoi le poids et l'IMC sont utiles mais grossiers, ce que la composition corporelle ajoute, comment lire les tendances de masse grasse et de masse maigre, et quels signaux comptent pour la santé.",
    },
    "tracking-mood": {
      title: "Suivre l'humeur comme un signal de santé",
      dek: "L'humeur semble trop subjective pour se mesurer — mais un suivi régulier en fait l'une de vos tendances les plus utiles.",
      description:
        "Pourquoi un suivi d'humeur simple et régulier est un indicateur de santé légitime, comment il interagit avec le sommeil et l'activité, et quand une humeur basse durable justifie un accompagnement.",
    },
    "the-cycle-as-a-vital-sign": {
      title: "Le cycle menstruel comme signe vital",
      dek: "Les médecins traitent le cycle comme un signe vital pour de bonnes raisons. Ce que son rythme révèle de la santé.",
      description:
        "Le cycle menstruel expliqué comme signal de santé : les quatre phases, à quoi ressemble un cycle normal, ce qui le déplace, et quand un changement justifie de consulter un médecin.",
    },
    "how-wearables-measure-you": {
      title: "Comment les objets connectés vous mesurent vraiment",
      dek: "Capteurs optiques, accéléromètres, estimations astucieuses — ce que le matériel à votre poignet peut réellement voir, et ce qu'il ne peut pas.",
      description:
        "Comment les objets connectés de fitness mesurent la fréquence cardiaque, les pas, le sommeil, l'oxygène du sang et la température — les capteurs derrière les chiffres, les estimations dérivées, et les limites de précision connues.",
    },
    "reading-your-trends": {
      title: "Lisez des tendances, pas des chiffres",
      dek: "La compétence la plus utile en suivi de santé n'est pas de lire un chiffre — c'est de lire votre propre ligne dans le temps.",
      description:
        "Pourquoi votre référence personnelle l'emporte sur n'importe quelle plage de population, comment distinguer une vraie tendance du bruit quotidien, et pourquoi mesurer toujours dans les mêmes conditions compte plus que la précision.",
    },
    "steps-and-movement": {
      title: "Les pas et le mouvement du quotidien",
      dek: "Ce qu'un nombre de pas quotidiens vous dit vraiment — et pourquoi 10 000 était un chiffre marketing, pas un objectif de santé.",
      description:
        "Ce que les pas quotidiens révèlent de la santé, les données montrant que les bénéfices commencent bien en dessous de 10 000, pourquoi le mouvement réparti dans la journée compte, et comment les nombres de pas sont estimés.",
    },
    "caffeine-alcohol-and-your-readings": {
      title: "La caféine, l'alcool et vos mesures",
      dek: "Deux habitudes du quotidien laissent des traces nettes sur votre fréquence cardiaque, votre sommeil et votre récupération. Voici ce qu'il faut y chercher.",
      description:
        "Comment la caféine et l'alcool déplacent visiblement les indicateurs que vous suivez — fréquence cardiaque, VFC, sommeil et glycémie — et pourquoi ils expliquent tant de matins difficiles.",
    },
    "hydration-and-your-body": {
      title: "L'hydratation et votre corps",
      dek: "La plupart des variations de poids quotidiennes sont de l'eau. Un regard posé sur l'équilibre hydrique — et la vérité sur les « huit verres par jour ».",
      description:
        "Ce que l'hydratation fait pour la fréquence cardiaque, le poids et votre ressenti, les données honnêtes sur les besoins quotidiens en liquide, et quand l'équilibre hydrique compte vraiment.",
    },
    "stress-and-recovery": {
      title: "Stress et récupération",
      dek: "Votre corps tient le compte — dans votre fréquence cardiaque, votre VFC et votre sommeil. Comment lire les signes de tension et de repos.",
      description:
        "Comment le stress et la récupération apparaissent dans la fréquence cardiaque au repos, la VFC et le sommeil, l'équilibre autonome qui les sous-tend, et pourquoi la récupération est un signal actif que vous pouvez construire.",
    },
    "screening-not-diagnosis": {
      title: "Un score de dépistage n'est pas un diagnostic",
      dek: "Le PHQ-9 et le GAD-7 ressemblent à des résultats de laboratoire, mais ils dépistent — ils ne diagnostiquent pas. Pourquoi cette distinction fait tout.",
      description:
        "Ce que mesurent réellement les questionnaires de santé mentale PHQ-9, GAD-7, WHO-5 et PSS-10, comment lire leurs bandes de sévérité, pourquoi les répéter vaut mieux qu'une passation unique, et pourquoi un dépistage positif est une invitation à en parler à un professionnel — non un autodiagnostic.",
    },
    "longevity-labs-explained": {
      title:
        "Les analyses de longévité : la prise de sang au-delà du cholestérol",
      dek: "Un bilan lipidique standard sous-estime votre risque. L'ApoB, la Lp(a) et la hs-CRP en racontent l'histoire complète.",
      description:
        "Pourquoi un bilan de cholestérol de base passe à côté du risque, et ce qu'ajoutent l'ApoB, le non-HDL, la Lp(a), la hs-CRP, l'HbA1c et l'insuline à jeun — avec des plages de repère, le principe de la tendance répétée, et pourquoi une prise de sang se lit avec un clinicien.",
    },
    "waist-and-central-fat": {
      title:
        "Tour de taille et graisse centrale : pourquoi le mètre ruban l'emporte sur la balance",
      dek: "L'endroit où vous stockez la graisse compte plus que votre poids. Le rapport tour de taille/taille suit le risque que l'IMC manque.",
      description:
        "Pourquoi la graisse viscérale est plus nocive que la graisse sous-cutanée, les seuils du tour de taille et du rapport tour de taille/taille, comment mesurer de façon régulière, et ce que l'adiposité centrale prédit pour la santé métabolique et cardiovasculaire.",
    },
    "grip-strength-as-a-vital-sign": {
      title: "La force de préhension : le test de longévité le moins coûteux",
      dek: "Un dynamomètre de poigne prédit la mortalité mieux que la tension artérielle. La force est un signe vital, pas seulement un indicateur de salle de sport.",
      description:
        "Ce dont la force de préhension est le reflet — force du corps entier et sarcopénie —, les plages de référence selon l'âge et le sexe, l'association à la mortalité de l'étude PURE, comment en suivre la tendance, et comment le renforcement musculaire la fait évoluer.",
    },
    "weather-altitude-and-your-body": {
      title: "La météo, l'altitude et votre corps",
      dek: "La chaleur, l'altitude et la qualité de l'air déplacent votre fréquence cardiaque, votre sommeil et votre respiration avant que vous ne le remarquiez — un contexte pour les mesures « qui clochent ».",
      description:
        "Comment la chaleur, l'altitude et la pollution de l'air modifient votre fréquence cardiaque au repos, votre sommeil, votre respiration et votre oxygène du sang, pourquoi ces décalages sont une information plutôt qu'un dysfonctionnement, et comment lire vos données face à l'environnement plutôt que dans le vide.",
    },
  },
};

export default meta;
