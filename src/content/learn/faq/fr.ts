export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Dois-je comparer mes chiffres de santé à la plage normale ou à moi-même ?",
      a: "Partez d'abord de votre propre référence. Pour presque chaque signal qui mérite d'être suivi, les écarts entre individus sont bien plus grands que vos propres variations quotidiennes : un chiffre qui paraît banal sur une courbe de population peut être un record personnel ou une alerte pour vous. N'utilisez les plages publiées que comme un repère, jamais comme un tableau de scores.",
    },
    {
      q: "Pourquoi ne devrais-je pas réagir à une seule mesure de santé ?",
      a: "Le corps est bruyant. La variabilité de la fréquence cardiaque fluctue d'environ dix pour cent d'un jour à l'autre par simple bruit, et le poids corporel dérive d'un ou deux kilos rien qu'à cause des fluides : une seule mesure haute ou basse reste donc le plus souvent dans cette dispersion normale. Ce qui a du sens, c'est la direction d'une moyenne mobile sur des jours et des semaines, pas un point isolé.",
    },
    {
      q: "Pourquoi plusieurs de mes indicateurs évoluent-ils ensemble en même temps ?",
      a: "Ils rendent tous compte des mêmes systèmes sous-jacents, vus sous des angles différents. Une mauvaise nuit ou l'alcool tend à faire monter la fréquence cardiaque au repos tout en abaissant la VFC ; le début d'une infection pousse ensemble vers le haut la fréquence cardiaque au repos, la fréquence respiratoire et la température, pendant que la VFC chute. Deux ou trois signaux qui bougent dans le même sens en même temps inspirent plus de confiance qu'un seul isolé.",
    },
    {
      q: "Les indicateurs de santé des objets connectés remplacent-ils une consultation médicale ?",
      a: "Non. La fréquence cardiaque au repos, la VFC, les scores de sommeil et les autres sont des repères de bien-être, utiles pour remarquer un changement et poser de meilleures questions, jamais un diagnostic. Une alerte d'un objet connecté, comme un signalement de rythme irrégulier, est une incitation à se faire dépister, pas un résultat. Parlez à un professionnel de santé de tout ce qui vous préoccupe.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "Qu'est-ce qu'une fréquence cardiaque au repos normale ?",
      a: "La plage classique chez l'adulte est de 60 à 100 battements par minute, les personnes entraînées en endurance se situant souvent entre 40 et 60. Cette bande a été tracée pour la sécurité clinique plutôt que pour une santé optimale, et de vastes études montrent un risque qui augmente assez régulièrement à mesure que la fréquence au repos monte : la tendance compte donc plus qu'une mesure isolée.",
    },
    {
      q: "Quel est le meilleur moment pour mesurer sa fréquence cardiaque au repos ?",
      a: "Idéalement dès le réveil, avant de vous asseoir, de regarder votre téléphone ou de prendre de la caféine. Mesurer dans les mêmes conditions à chaque fois est ce qui rend le chiffre comparable : une mesure constante vaut bien plus qu'une mesure plus précise prise au hasard.",
    },
    {
      q: "Pourquoi ma fréquence cardiaque au repos a-t-elle soudainement augmenté pendant quelques jours ?",
      a: "Une hausse soudaine et inexpliquée de plusieurs battements qui se maintient quelques jours est une façon discrète qu'a le corps de signaler quelque chose, souvent le début d'une infection, un mauvais sommeil cumulé au stress, la déshydratation, l'alcool de la veille au soir, ou trop d'entraînement et pas assez de récupération. La caféine, la fièvre, la chaleur, l'anxiété et certains médicaments la font aussi monter.",
    },
    {
      q: "Quand dois-je m'inquiéter de ma fréquence cardiaque au repos ?",
      a: "Une fréquence au repos durablement au-dessus de 100 sans explication évidente, une fréquence basse accompagnée d'étourdissements, d'évanouissements ou d'essoufflement, ou un pouls irrégulier récurrent méritent d'être évoqués avec un professionnel de santé. Une alerte de rythme irrégulier d'un objet connecté est une incitation à se faire dépister, pas un diagnostic ; seul un ECG peut confirmer un trouble du rythme.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "Qu'est-ce qu'une bonne VFC ?",
      a: "Il n'existe pas de bon chiffre universel. Les écarts de VFC entre individus sont énormes : votre référence saine peut représenter un tiers de celle de quelqu'un d'autre, et les deux sont parfaitement normales. La VFC chute aussi fortement avec l'âge, et elle dépend de la durée d'enregistrement et de la posture : les valeurs absolues ne se transposent donc ni d'une personne à l'autre ni d'un appareil à l'autre. Lisez votre propre tendance, pas un classement.",
    },
    {
      q: "Pourquoi ma VFC change-t-elle autant d'une nuit à l'autre ?",
      a: "La VFC est extrêmement sensible aux conditions. La posture, la fréquence respiratoire, l'heure de la journée, le dernier repas, la caféine, la maladie, le sommeil et le stress aigu la font tous bouger, et l'alcool la supprime de façon proportionnelle à la dose. Des variations d'environ dix pour cent d'une nuit à l'autre sont courantes et ne signifient rien en elles-mêmes, c'est pourquoi une moyenne mobile sur sept jours est l'unité honnête à lire.",
    },
    {
      q: "Pourquoi ma VFC est-elle basse après avoir bu de l'alcool ?",
      a: "L'alcool supprime la VFC de façon proportionnelle à la dose, le plus fortement la nuit même et le lendemain matin, souvent alors que la fréquence cardiaque et la tension artérielle paraissent encore tout à fait normales. Une baisse d'une nuit après un verre, un dîner tardif ou un entraînement intense est attendue et se rétablit d'elle-même ; consigner les facteurs confondants évidents est ce qui permet de la distinguer d'un déclin durable et significatif.",
    },
    {
      q: "Quand une VFC basse compte-t-elle vraiment ?",
      a: "Prise isolément, la VFC est trop bruyante pour servir d'alarme. Elle indique quelque chose lorsqu'une baisse durable sous votre référence personnelle survient en même temps qu'une fréquence cardiaque au repos en hausse et une fréquence respiratoire nocturne plus élevée, un signe avant-coureur discret de maladie ou de surmenage. Une tendance à la baisse accompagnée de symptômes comme l'essoufflement ou des palpitations, ou des signalements répétés de rythme irrégulier, sont une raison de consulter un professionnel de santé.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "Que signifient les deux chiffres de la tension artérielle ?",
      a: "Le chiffre systolique, en haut, est la pression dans vos artères à l'instant où le cœur se contracte et propulse le sang ; le chiffre diastolique, en dessous, est la pression résiduelle pendant que le cœur se relâche et se remplit entre deux battements. Les deux se mesurent en millimètres de mercure, et chacun porte un risque indépendamment, de sorte qu'aucun n'est le seul à compter.",
    },
    {
      q: "À partir de quelle tension parle-t-on d'hypertension ?",
      a: "Les deux grandes instances de recommandations s'accordent à dire que l'hypertension en tant que maladie commence à 140/90 au cabinet médical. Elles divergent sur les étiquettes en dessous : le cadre américain qualifie 130 à 139 sur 80 à 89 d'hypertension de stade 1, tandis que le cadre européen qualifie ces mêmes chiffres de simplement élevés. Le risque augmente continûment à partir d'environ 115/75, sans seuil net en dessous duquel il disparaît.",
    },
    {
      q: "Comment mesurer correctement ma tension à la maison ?",
      a: "Restez d'abord assis tranquillement cinq minutes, dos soutenu et pieds à plat, le bras posé au niveau du cœur avec un brassard de bras à la bonne taille. Évitez la caféine, le tabac et de parler au préalable. La technique fait bouger le chiffre plus que presque tout ce qui se passe en vous ce jour-là, et les moyennes hors cabinet sur plusieurs jours sont la référence fiable, l'hypertension à domicile étant estimée vers 135/85.",
    },
    {
      q: "Quand une tension élevée est-elle une urgence ?",
      a: "Une seule mesure élevée n'est pas une urgence ; reprenez-la après une minute. Si elle reste à 180/120 ou au-dessus sans symptômes, contactez rapidement votre professionnel de santé. Si elle atteint 180/120 ou plus avec une douleur thoracique, un essoufflement, un changement neurologique ou visuel, ou un mal de tête sévère, traitez-la comme une urgence et appelez les secours.",
    },
  ],
  "sleep-consistency": [
    {
      q: "De combien d'heures de sommeil les adultes ont-ils réellement besoin ?",
      a: "Les recommandations nationales situent les adultes de 18 à 64 ans entre 7 et 9 heures par nuit et les adultes plus âgés entre 7 et 8, avec un plancher consensuel d'au moins 7 heures régulièrement. La relation est en forme de U plutôt que du type plus-c'est-mieux : un sommeil habituellement court comme un sommeil habituellement très long portent tous deux un risque associé.",
    },
    {
      q: "La régularité du sommeil est-elle plus importante que sa durée ?",
      a: "Les deux comptent, et l'horaire pourrait compter autant que la durée. Dans une vaste cohorte, la régularité des horaires de sommeil prédisait la mortalité au moins aussi fortement que la durée, même après prise en compte des heures dormies. Deux personnes peuvent enregistrer un nombre d'heures identique, et celle qui les enregistre à la même heure chaque nuit s'en sort mesurablement mieux.",
    },
    {
      q: "Puis-je rattraper le sommeil perdu le week-end ?",
      a: "Seulement en partie. La dette de sommeil est une somme cumulée de nuits trop courtes, et la récupération est partielle et non linéaire : un seul long week-end n'efface pas entièrement plusieurs nuits écourtées. Un horaire régulier vaut mieux que d'essayer de rembourser la dette d'un coup.",
    },
    {
      q: "Les phases de sommeil profond et de sommeil paradoxal de mon traqueur sont-elles fiables ?",
      a: "Soyez sceptique face à la répartition par phase. Les traqueurs grand public estiment le partage entre sommeil profond, paradoxal et léger avec une concordance seulement passable à modérée par rapport à la référence en laboratoire clinique, et ils ont tendance à surestimer votre durée de sommeil. Le temps de sommeil total et votre heure de coucher sont bien plus fiables que tout pourcentage de sommeil profond ; traitez les phases comme une tendance personnelle approximative.",
    },
  ],
  "respiratory-rate": [
    {
      q: "Qu'est-ce qu'une fréquence respiratoire normale ?",
      a: "La plage standard de l'adulte au repos est de 12 à 20 respirations par minute. Cette bande est large, c'est pourquoi le chiffre prend toute sa valeur par rapport à votre propre figure habituelle plutôt que face à la plage de population. Les enfants respirent plus vite et les athlètes d'endurance entraînés se situent plutôt dans le bas.",
    },
    {
      q: "Pourquoi la fréquence respiratoire est-elle mesurée la nuit plutôt que le jour ?",
      a: "Éveillée, la fréquence respiratoire est l'un des chiffres les plus dépendants de l'état que votre corps produise ; parler, bouger, l'émotion et même la conscience d'être mesuré la modifient tous, de sorte qu'une mesure ponctuelle en journée n'a presque aucun sens. Endormi, ces influences disparaissent et votre fréquence nocturne se stabilise sur une valeur remarquablement régulière, ce qui rend un écart réel facile à voir.",
    },
    {
      q: "Que signifie une hausse de ma fréquence respiratoire nocturne ?",
      a: "Une hausse durable d'environ trois respirations par minute au-dessus de votre figure nocturne habituelle peut signaler que quelque chose se développe, souvent avant que vous ne vous sentiez mal. Le signal n'est pas spécifique à une infection : il vous dit que le corps travaille davantage, pas ce qui ne va pas. Des choses banales comme un entraînement intense tardif, l'alcool ou une chambre chaude et mal aérée peuvent aussi le faire bouger.",
    },
    {
      q: "Quand une fréquence respiratoire est-elle une urgence médicale ?",
      a: "Une fréquence supérieure à 25 par minute accompagnée d'essoufflement, de confusion ou d'une faible saturation en oxygène nécessite une prise en charge médicale rapide. Une respiration lente et superficielle est la direction la plus dangereuse, en particulier la dépression respiratoire causée par les opioïdes ou les sédatifs ; si quelqu'un respire très lentement, est difficile à réveiller ou a les lèvres bleutées, traitez cela comme une urgence et appelez à l'aide.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "Qu'est-ce qu'un taux d'oxygène dans le sang normal ?",
      a: "Chez un adulte en bonne santé respirant l'air ambiant au niveau de la mer, la SpO2 se situe entre 95 et 100 pour cent, la plupart des mesures se regroupant entre 96 et 99. Le plancher évolue selon les circonstances : environ 90 pour cent peut être normal en altitude, et les personnes atteintes d'une maladie pulmonaire chronique vivent avec une référence personnelle plus basse. Il n'y a aucun bénéfice au-dessus de la bande ; plus haut n'est pas mieux.",
    },
    {
      q: "Pourquoi ma mesure de SpO2 au poignet est-elle basse ?",
      a: "Une seule mesure basse est plus souvent un artefact qu'une urgence. Les capteurs au poignet sont plus éloignés d'un lit artériel pulsé et doivent composer avec le mouvement et un ajustement plus lâche, et des mains froides, un bracelet desserré, du vernis à ongles ou la lumière ambiante tirent le chiffre vers le bas. Reprenez la mesure au chaud, immobile et bien perfusé avant de faire confiance à une baisse.",
    },
    {
      q: "Puis-je utiliser la SpO2 pour détecter une apnée du sommeil ?",
      a: "Des désaturations nocturnes répétées font partie de la manière dont on dépiste l'apnée du sommeil : un objet connecté qui les signale peut donc être un indice précoce, mais ce n'est pas un diagnostic. Des ronflements bruyants avec des pauses observées ou un sommeil non réparateur avec une somnolence diurne méritent d'être évoqués avec un professionnel de santé pour une évaluation appropriée.",
    },
    {
      q: "Les oxymètres de pouls sont-ils moins fiables sur les peaux foncées ?",
      a: "Oui. Les oxymètres de pouls peuvent surestimer la véritable saturation en oxygène chez les personnes à la pigmentation cutanée plus foncée, affichant un chiffre rassurant alors que la saturation réelle est plus basse, un écart documenté dans des données hospitalières et examiné par les autorités de régulation américaines. Une mesure d'apparence normale ne devrait jamais l'emporter sur un essoufflement, une confusion ou le simple sentiment que quelque chose ne va pas.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "37 degrés Celsius est-elle toujours la température corporelle normale ?",
      a: "C'est une vieille moyenne que les données modernes ont revue à la baisse. Une vaste revue situe la moyenne de population à 36,59 °C, avec une plage orale normale d'environ 35,7 à 37,4 °C, assez large pour que deux personnes en bonne santé soient séparées de près de deux degrés. Une mesure de 36,7 °C est tout à fait dans la normale, et non en dessous.",
    },
    {
      q: "Pourquoi ma température change-t-elle au cours de la journée ?",
      a: "La température suit une courbe circadienne, oscillant d'environ un demi-degré entre son point le plus bas au petit matin, vers 4 à 8 heures, et son pic en début de soirée, vers 18 à 20 heures. Une mesure du soir qui paraît légèrement élevée n'est souvent que le pic quotidien normal, c'est pourquoi vous devriez comparer des mesures prises à la même heure de la journée et au même endroit.",
    },
    {
      q: "La température cutanée d'un objet connecté est-elle la même que la température corporelle ?",
      a: "Non. La température cutanée d'un objet connecté n'est pas la température corporelle centrale ; c'est l'écart nocturne par rapport à votre propre référence établie sur plusieurs nuits, sans plage clinique faisant autorité. Bien utilisée, elle peut suggérer un glissement sous-fébrile avant l'apparition des symptômes, mais toute inquiétude de fièvre doit être confirmée par une véritable mesure orale.",
    },
    {
      q: "À partir de quelle température parle-t-on de fièvre, et quand consulter ?",
      a: "Une fièvre est une température orale de 38,0 °C ou plus. Chez l'adulte, les symptômes et leur durée comptent généralement plus que le chiffre exact, mais consultez autour de 39,4 °C, ou pour toute fièvre accompagnée d'essoufflement, de douleur thoracique, de mal de tête sévère, de confusion, d'une raideur de la nuque ou d'une éruption cutanée. Une fièvre chez un nourrisson de moins de trois mois nécessite toujours une évaluation urgente.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "Qu'est-ce qu'une glycémie à jeun normale ?",
      a: "En dessous de 100 mg/dL (sous 5,6 mmol/L) est normal selon l'American Diabetes Association, la bande 100 à 125 correspondant au prédiabète ; l'OMS ouvre plutôt le prédiabète à 110. Les deux partagent un seuil de diabète à 126 mg/dL ou plus. Une seule mesure anormale ne diagnostique jamais rien ; la confirmation exige un test répété un autre jour.",
    },
    {
      q: "Quelle est la différence entre une mesure de glycémie et l'HbA1c ?",
      a: "Une glycémie à jeun ou post-prandiale est une photographie, vraie pour l'instant où elle a été prélevée et facilement influencée par le dîner de la veille ou un rhume qui couve. L'HbA1c est un film accéléré, reflétant votre glycémie moyenne sur la durée de vie d'un globule rouge, soit environ deux à trois mois. Elles sont les plus utiles lues côte à côte.",
    },
    {
      q: "Pourquoi ma glycémie matinale est-elle plus élevée après une mauvaise nuit de sommeil ?",
      a: "Même une seule nuit de privation partielle de sommeil abaisse mesurablement la sensibilité à l'insuline, et la tolérance au glucose diminue au fil de la journée, si bien qu'un repas identique fait grimper la glycémie plus haut le soir. Une mauvaise nuit ou un dîner tardif et copieux est une raison plausible à une anomalie isolée le lendemain matin, et n'est en soi la preuve de rien.",
    },
    {
      q: "Quand une glycémie est-elle dangereuse ?",
      a: "Une glycémie sous 70 mg/dL (sous 3,9 mmol/L) est une alerte d'hypoglycémie ; traitez avec un glucide à action rapide et recontrôlez dans 15 minutes, et en dessous de 54 mg/dL une action immédiate s'impose. Une glycémie très élevée et persistante avec soif, mictions fréquentes, vomissements, respiration rapide ou pensée altérée justifie des soins rapides. Ce ne sont pas des autodiagnostics ; parlez-en à un professionnel de santé.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "Qu'est-ce que la VO2max et pourquoi est-elle importante ?",
      a: "La VO2max est le débit maximal auquel votre corps peut absorber et utiliser l'oxygène lors d'un effort intense, mesurée en millilitres d'oxygène par kilogramme et par minute. Elle reflète toute la chaîne d'apport en oxygène et est l'un des plus puissants prédicteurs isolés de la durée de vie, chaque gain de condition physique étant lié à un risque de décès nettement plus faible.",
    },
    {
      q: "Quelle est la fiabilité de la VO2max affichée par ma montre ?",
      a: "Votre objet connecté l'estime plutôt qu'il ne la mesure, en déduisant une valeur de la relation entre votre fréquence cardiaque et votre allure, en s'appuyant sur une fréquence cardiaque maximale supposée. La valeur absolue peut être décalée de quelques points, et le terrain, la chaleur et l'ajustement la brouillent davantage. La façon honnête de la lire est comme une ligne de tendance : une progression régulière sur plusieurs semaines est bien réelle.",
    },
    {
      q: "Qu'est-ce qu'une bonne VO2max pour mon âge ?",
      a: "La VO2max s'interprète comme un percentile au sein de votre propre tranche d'âge et de sexe, jamais face à une cible fixe. Les hommes obtiennent des valeurs environ 15 à 20 pour cent plus élevées que les femmes au même âge, et la condition physique décline avec l'âge : une valeur excellente à 60 ans serait banale à 25. Ce qui compte plus que votre position, c'est la direction dans laquelle vous allez.",
    },
    {
      q: "Comment améliorer ma VO2max ?",
      a: "La condition aérobie s'améliore avec un entraînement régulier. La cible hebdomadaire commune aux grandes recommandations est de 150 à 300 minutes d'activité modérée ou de 75 à 150 minutes d'activité intense, plus du renforcement musculaire au moins deux fois par semaine, avec de la récupération prévue. Un entraînement régulier réduit environ de moitié le déclin naturel lié à l'âge. Consultez un professionnel de santé avant de commencer un exercice intense si vous étiez inactif ou avez une affection cardiaque, pulmonaire ou métabolique.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Pourquoi l'IMC est-il une mesure de santé limitée ?",
      a: "L'IMC est un indicateur d'adiposité peu coûteux et reproductible, mais il ne distingue pas le muscle de la graisse : une personne musclée peut atterrir dans la bande surpoids tandis qu'une personne âgée ayant perdu du muscle se situe confortablement dans la normale. Il ignore aussi où se trouve la graisse, et ses seuils ont été tracés à partir de populations majoritairement européennes et portent un risque plus élevé à IMC plus bas chez les personnes d'origine sud et est-asiatique.",
    },
    {
      q: "Pourquoi l'endroit où je stocke la graisse compte-t-il plus que mon poids ?",
      a: "La graisse autour de la taille, tassée entre les organes abdominaux, est métaboliquement bien plus nocive que celle des hanches et des cuisses et prédit le diabète, l'hypertension et le risque cardiovasculaire indépendamment de l'IMC. Une règle simple qui se transpose bien entre les sexes et les origines est de garder votre tour de taille à moins de la moitié de votre taille.",
    },
    {
      q: "Pourquoi mon poids fait-il un bond du jour au lendemain ?",
      a: "Le poids corporel oscille d'un à deux kilos au cours d'une journée normale et d'un jour à l'autre, selon l'hydratation, les aliments encore en transit et le sel seul, sans que rien de cela soit de la graisse. Observez une moyenne mobile sur sept jours et le bruit s'annule, ne laissant que la ligne qui a réellement du sens. La même chose vaut pour un pourcentage de masse grasse fourni par une balance.",
    },
    {
      q: "De combien dois-je maigrir pour améliorer ma santé ?",
      a: "Chez les adultes en surpoids ou obèses, une perte durable de seulement 5 à 10 pour cent du poids corporel améliore significativement la glycémie, la tension artérielle et les lipides, une bien meilleure cible que n'importe quel chiffre unique sur le cadran. Un changement modeste et durable est l'objectif à viser plutôt qu'un chiffre spectaculaire.",
    },
  ],
  "tracking-mood": [
    {
      q: "À quoi sert de suivre mon humeur ?",
      a: "Une entrée est une opinion ; quelques centaines d'entrées forment une tendance, et une tendance, ce sont des données. Consignée régulièrement sur des semaines, une simple échelle d'humeur fait apparaître des motifs qu'aucune journée isolée ne révèle, comme une lente dérive à la baisse sur une période stressante, le regain fiable après l'exercice, ou un creux qui revient selon un calendrier mensuel prévisible.",
    },
    {
      q: "Comment dois-je noter mon humeur pour que ce soit utile ?",
      a: "La régularité est l'habitude la plus utile de toutes : même échelle, même heure de la journée, chaque jour. L'auto-évaluation est sensible à l'heure, aux événements récents et à la qualité du sommeil, si bien qu'une mesure ponctuelle est bruyante. Mesurée de la même façon, l'oscillation quotidienne se lisse et la direction de fond devient lisible.",
    },
    {
      q: "Qu'est-ce qu'un score préoccupant à un questionnaire d'humeur ?",
      a: "Sur les questionnaires validés, un WHO-5 à 50 pour cent ou en dessous indique un mauvais bien-être, et un total de 10 ou plus au PHQ-9 ou au GAD-7 est le seuil d'action standard. Ce sont des questionnaires concordants et bien établis, mais un résultat positif est une incitation à parler à un professionnel, pas un diagnostic que vous pouvez poser chez vous.",
    },
    {
      q: "Quand une humeur basse devrait-elle m'inciter à chercher de l'aide ?",
      a: "Lorsqu'elle persiste : une tendance à la baisse qui se maintient deux semaines ou plus, ou qui commence à gêner la vie quotidienne, est une raison de parler à un médecin ou à un professionnel de la santé mentale, et vous n'avez pas besoin d'attendre qu'elle paraisse grave. Toute pensée de vous faire du mal est à elle seule une raison de contacter immédiatement votre numéro d'urgence local ou un service de crise.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Pourquoi le cycle menstruel est-il considéré comme un signe vital ?",
      a: "Les instances professionnelles demandent aux cliniciens de traiter le cycle comme ils traitent le pouls, la tension artérielle et la température, car c'est un rythme récurrent qui reste stable quand tout va bien : un changement y porte donc une information. La durée et la régularité du cycle offrent une fenêtre accessible sur la santé reproductive et la santé globale.",
    },
    {
      q: "Quelle est la durée normale d'un cycle menstruel ?",
      a: "Deux plages reconnues comptent toutes deux. La bande destinée aux patientes décrit les cycles sains de l'adulte au quotidien comme allant de 21 à 35 jours, tandis que le cadre de dépistage clinique retient 24 à 38 jours. Une variation d'environ une semaine d'un mois à l'autre est ordinaire, et la phase lutéale est l'ancrage relativement constant, l'essentiel de la variation de durée se logeant dans la phase folliculaire.",
    },
    {
      q: "Puis-je me fier à une application de suivi de cycle comme moyen de contraception ?",
      a: "Non. Les prédictions de cycle algorithmiques de toute application, objet connecté ou appareil ne sont pas une méthode contraceptive. Les prédictions basées sur des valeurs par défaut de population sont peu fiables, le moment de l'ovulation varie largement même chez les personnes à cycles réguliers, et la périménopause rend de nouveau les cycles imprévisibles. Quiconque utilise la planification familiale naturelle devrait recourir à une méthode validée et correctement enseignée, pas à une seule date prédite.",
    },
    {
      q: "Quand devrais-je consulter un médecin au sujet de mon cycle ?",
      a: "Évoquez-le avec un professionnel de santé lorsque les cycles sortent systématiquement de la plage habituelle, avec des intervalles plus courts qu'environ 21 jours ou plus longs qu'environ 45, ou lorsqu'il y a un changement marqué et durable par rapport à votre propre schéma. Un intervalle de 90 jours ou plus, des règles durant plus de 7 jours ou imbibant une protection plus souvent que toutes les une à deux heures, et des saignements entre les règles justifient tous une évaluation.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "Comment un objet connecté mesure-t-il ma fréquence cardiaque ?",
      a: "La plupart utilisent la photopléthysmographie : une LED verte projette de la lumière dans la peau, le sang en absorbe une partie, et un capteur compte les pulsations à mesure que le volume sanguin monte et descend à chaque battement. Cela fonctionne bien au repos mais peine avec le mouvement, c'est pourquoi la fréquence cardiaque au poignet pendant des intervalles ou de la musculation est la mesure la moins fiable que possède la plupart des gens. Une ceinture pectorale reste précise pendant le mouvement.",
    },
    {
      q: "Comment ma montre connaît-elle mes phases de sommeil ?",
      a: "Elle ne voit pas votre cerveau. Elle déduit le sommeil de votre faible niveau de mouvement, souvent combiné à la fréquence cardiaque et à sa variation battement à battement, puis étiquette la nuit en sommeil léger, profond et paradoxal. Par rapport à la référence en laboratoire clinique, les appareils sont plutôt bons pour distinguer endormi-ou-éveillé et nettement plus faibles sur la phase précise : lisez donc l'heure de coucher et la durée totale avec confiance et traitez les phases colorées comme une estimation.",
    },
    {
      q: "Les mesures des objets connectés sont-elles fiables ?",
      a: "L'essentiel de ce qu'un objet connecté vous montre est une estimation, pas une mesure de laboratoire. La fréquence cardiaque optique, les phases de sommeil déduites, la SpO2 au poignet et tout score de récupération ou de disponibilité sont des modèles bâtis sur quelques signaux réels, assez précis pour révéler un changement dans le temps mais rarement assez précis pour traiter une valeur unique comme une vérité absolue. Lisez-les comme du relatif, pas de l'absolu.",
    },
    {
      q: "Que mesurent réellement les scores de récupération et de disponibilité ?",
      a: "Ils ne sont pas mesurés du tout ; ce sont des modèles propriétaires qui mélangent des flux de capteurs bruts, généralement la VFC nocturne, la fréquence cardiaque au repos et le sommeil, avec votre âge, votre poids et votre historique pour produire un chiffre unique. Ils n'ont pas de plage de référence clinique et ne sont pas normalisés entre les appareils : lisez-les comme une incitation quotidienne, pas comme une mesure clinique.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Pourquoi ma propre référence vaut-elle mieux que la plage normale ?",
      a: "Une bande de référence est conçue pour repérer la petite fraction de gens qui se situe loin de la dispersion habituelle ; elle n'a jamais été pensée pour vous dire si aujourd'hui est une bonne journée. Comme les écarts entre individus sont importants, une fréquence cardiaque au repos de 58 paraît banale face à la bande des manuels, mais représente une nette hausse de six battements si votre référence est 52, un changement que la plage de population masque complètement.",
    },
    {
      q: "Comment distinguer un vrai signal d'un bruit aléatoire ?",
      a: "Le bruit, c'est une mesure proche du bord de votre plage habituelle, ou un petit mouvement qui s'inverse le lendemain. Le signal, c'est une direction qui persiste : un décalage sur plusieurs jours bien au-delà de votre dispersion habituelle, ou une lente dérive de la moyenne mobile sur des semaines. Une moyenne mobile lisse la dispersion, et un changement plusieurs fois plus grand que votre oscillation quotidienne habituelle mérite qu'on s'y attarde.",
    },
    {
      q: "Combien de temps avant qu'une référence soit fiable ?",
      a: "Une seule mesure est un point sans contexte. Un nouveau signal a besoin de quelques semaines de mesures régulières avant qu'un chiffre unique ne signifie quoi que ce soit, car ce n'est qu'alors que le bruit quotidien s'est moyenné en une référence sur laquelle vous pouvez réellement vous appuyer.",
    },
    {
      q: "Pourquoi mesurer dans les mêmes conditions importe-t-il autant ?",
      a: "Une tendance n'est honnête que si les conditions qui la sous-tendent restent constantes. La fréquence cardiaque au repos au réveil se situe bien en dessous de la même fréquence après un café et des escaliers, et le poids avant le petit-déjeuner pèse un kilo de moins que le même corps après le dîner. Un appareil légèrement imparfait utilisé de la même façon chaque jour surpasse un meilleur appareil utilisé n'importe comment.",
    },
  ],
  "steps-and-movement": [
    {
      q: "D'où vient l'objectif des 10 000 pas ?",
      a: "Ce n'a jamais été une conclusion scientifique. Cela remonte à un podomètre japonais commercialisé autour des Jeux olympiques de Tokyo de 1964, dont le nom signifiait compteur de dix mille pas, choisi en partie parce que le caractère pour 10 000 ressemble à une personne qui marche et en partie parce que c'était un chiffre rond mémorable pour vendre un appareil. Traitez-le comme un mythe, pas comme une recommandation.",
    },
    {
      q: "De combien de pas par jour ai-je réellement besoin ?",
      a: "L'essentiel du bénéfice sur la mortalité est obtenu bien en dessous de 10 000. Les études montrent les taux de décès qui baissent à mesure que les pas augmentent, la courbe s'aplatissant quelque part autour de 6 000 à 8 000 pas par jour pour les personnes âgées et de 8 000 à 10 000 pour les plus jeunes. La courbe s'aplatit, elle ne s'inverse pas : marcher davantage n'est pas un problème, cela apporte simplement moins par pas.",
    },
    {
      q: "Vaut-il mieux marcher d'un coup ou tout au long de la journée ?",
      a: "Répartir le mouvement sur la journée aide. La position assise prolongée et ininterrompue est de plus en plus considérée comme un facteur de risque à part entière, quelque peu indépendant du fait que vous fassiez aussi de l'exercice, c'est pourquoi les recommandations actuelles associent bougez plus et restez moins assis. Quelques minutes de marche chaque heure, les escaliers, et une promenade après les repas s'additionnent tous.",
    },
    {
      q: "Que ne me dit pas un nombre de pas sur ma santé ?",
      a: "C'est un compteur de volume, pas un test de condition physique. Il ne dit rien de l'intensité ni de la force, ne peut distinguer un kilomètre soutenu en montée de pas lents autour de la cuisine, et ne mesure pas la condition cardiorespiratoire, l'un des plus puissants prédicteurs de santé à long terme. Les pas ont leur place dans un tableau de bord aux côtés d'autres signaux, pas sur un piédestal.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "Comment la caféine affecte-t-elle ma fréquence cardiaque et ma tension artérielle ?",
      a: "La caféine bloque l'adénosine et laisse l'accélérateur sympathique tourner plus librement, si bien que la fréquence cardiaque grimpe et que la tension artérielle monte transitoirement, un effet le plus marqué chez les personnes qui n'en consomment pas régulièrement. Un café une heure avant de mesurer peut faire monter votre fréquence cardiaque au repos comme votre tension artérielle suffisamment pour le remarquer.",
    },
    {
      q: "Le café de l'après-midi affecte-t-il vraiment mon sommeil ?",
      a: "Souvent plus que vous ne pouvez le ressentir. La demi-vie de la caféine est couramment d'environ cinq heures, si bien qu'une tasse de l'après-midi a encore la moitié de sa dose en circulation à l'heure du coucher. Dans une étude contrôlée, une dose équivalant à un café fort prise six heures avant le coucher a réduit mesurablement le temps de sommeil total, même si les participants sous-estimaient la perturbation.",
    },
    {
      q: "Pourquoi ma VFC est-elle basse et ma fréquence cardiaque élevée après avoir bu ?",
      a: "Pendant que le corps élimine l'alcool durant la nuit, le versant sympathique reste enclenché, si bien que la fréquence cardiaque au repos reste élevée et que la VFC chute, des quantités plus importantes produisant des effets plus grands et plus durables. C'est pourquoi un seul verre au dîner peut discrètement écraser votre score de récupération pendant que vous dormez tout du long.",
    },
    {
      q: "Cela signifie-t-il que je devrais renoncer à la caféine et à l'alcool ?",
      a: "Pas nécessairement. La valeur réside dans l'attribution, pas dans l'abstinence. Observer vos propres données montre jusqu'à quelle heure la caféine devient trop tardive avant que votre sommeil ne s'effiloche et quelle quantité d'alcool il faut avant que votre fréquence cardiaque nocturne ne grimpe, de sorte que vous cessez de confondre un creux prévisible et temporaire avec un signe que quelque chose ne va pas.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Ai-je vraiment besoin de huit verres d'eau par jour ?",
      a: "Il n'existe pas de base scientifique solide à une règle universelle des huit verres ; les revues remontant à l'origine de cette affirmation n'ont trouvé aucune preuve crédible derrière elle. Les instances faisant autorité donnent des valeurs de référence de population pour l'eau totale issue de toutes les sources, environ 2 à 2,7 litres par jour pour les femmes et 2,5 à 3,7 pour les hommes, et soulignent que les besoins varient largement selon la corpulence, l'activité, le climat et l'alimentation.",
    },
    {
      q: "Comment savoir si je bois assez ?",
      a: "Pour la plupart des gens en bonne santé un jour ordinaire, les signaux du corps lui-même sont des guides raisonnables. La soif est un capteur réel et fonctionnel, et boire à la soif maintient la plupart des adultes en bonne santé suffisamment hydratés. La couleur de l'urine est un contrôle approximatif à domicile : jaune paille clair suggère que tout va bien, foncée de façon constante suggère que vous pourriez boire davantage.",
    },
    {
      q: "Pourquoi la déshydratation augmente-t-elle ma fréquence cardiaque ?",
      a: "Lorsque vous perdez assez de fluide pour que le volume sanguin baisse, le cœur compense en battant plus vite pour maintenir une circulation stable, si bien que la déshydratation fait monter la fréquence cardiaque au repos et à l'effort. Même de légers déficits hydriques d'un à deux pour cent de la masse corporelle suffisent à entamer l'humeur, à augmenter le sentiment d'effort et à altérer la concentration.",
    },
    {
      q: "Peut-on boire trop d'eau ?",
      a: "Oui. Boire bien au-delà du besoin, le plus souvent lors d'épreuves d'endurance, peut diluer le sodium sanguin jusqu'à une affection dangereuse appelée hyponatrémie, dont les premiers signes recoupent ceux de la déshydratation. Quiconque souffre d'une maladie cardiaque, rénale ou hépatique, ou prend un médicament agissant sur l'équilibre des fluides, peut avoir une cible volontairement restreinte et devrait suivre l'avis clinique plutôt qu'une règle générale.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "Comment le stress se manifeste-t-il dans mes données de santé ?",
      a: "Le stress, c'est l'accélérateur sympathique maintenu enfoncé, et il alimente de nombreux indicateurs à partir d'un seul cadran, si bien qu'ils bougent ensemble. La fréquence cardiaque au repos monte, la VFC nocturne baisse, le sommeil devient plus léger et plus haché, et la fréquence respiratoire est parfois élevée. Aucun signal pris seul n'est décisif, mais lus comme un faisceau face à votre propre référence, ils sont difficiles à contester.",
    },
    {
      q: "Quelle est la différence entre stress aigu et stress chronique ?",
      a: "Les facteurs de stress aigus, comme un entraînement intense ou une échéance, déplacent les indicateurs, et après une nuit ou deux de repos véritable tout revient à la référence ; ce rebond est justement l'essentiel. Le souci, c'est quand le rebond cesse de venir et que le corps paie le coût cumulé de la charge allostatique, qui se lit dans les données comme une référence qui s'est discrètement déplacée et y est restée.",
    },
    {
      q: "La récupération n'est-elle que l'absence de stress ?",
      a: "Non. La récupération est un processus parasympathique actif, le frein vagal qui se réenclenche, la fréquence cardiaque qui baisse et le sommeil profond qui fait le travail de réparation, c'est pourquoi elle se manifeste comme un signal positif plutôt que comme des chiffres qui se contentent de s'apaiser. Cela signifie qu'elle peut être soutenue, pas seulement attendue, par un sommeil régulier et protégé, un mouvement aérobie léger et la lumière du jour.",
    },
    {
      q: "Quand devrais-je prendre au sérieux un stress persistant ?",
      a: "Ces signaux peuvent signaler une tension durable mais ne peuvent vous dire pourquoi, et ils ne remplacent pas ce que vous ressentez. Un stress qui perturbe votre sommeil, votre concentration ou votre plaisir des choses ordinaires pendant des semaines mérite d'être abordé avec un médecin ou un professionnel de la santé mentale, quels que soient les chiffres. Si la détresse vous semble un jour insurmontable ou si vous avez des pensées d'automutilation, contactez immédiatement votre numéro d'urgence local ou un service de crise.",
    },
  ],
};
export default FAQ;
