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
      dek: "La VFC est puissante et très mal comprise. Un regard posé sur ce que disent les écarts d'un battement à l'autre.",
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
      dek: "Vous pensez rarement à votre rythme respiratoire — c'est précisément pour cela qu'un changement y est si parlant.",
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
  },
};

export default meta;
