export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Dois-je comparer mes chiffres de santé à la plage normale ou à moi-même ?",
      a: "Partez d'abord de votre propre référence. Pour presque chaque signal qui mérite d'être suivi, les écarts d'une personne à l'autre dépassent largement vos variations d'un jour sur l'autre : un chiffre qui semble anodin sur une courbe de population peut être un record personnel, ou une alerte, pour vous. Les plages publiées servent de garde-fou, pas de palmarès.",
    },
    {
      q: "Pourquoi ne devrais-je pas réagir à une seule mesure de santé ?",
      a: "Le corps est bruyant. La variabilité de la fréquence cardiaque varie d'environ dix pour cent d'un jour sur l'autre par simple bruit, et le poids fluctue d'un ou deux kilos rien qu'au gré des fluides : une mesure isolément haute ou basse tombe donc presque toujours dans cette dispersion normale. Le sens se loge dans la direction d'une moyenne mobile sur des jours et des semaines, pas dans un point unique.",
    },
    {
      q: "Pourquoi plusieurs de mes indicateurs évoluent-ils ensemble en même temps ?",
      a: "Ils décrivent tous les mêmes systèmes de fond, chacun sous son angle. Une mauvaise nuit ou un verre d'alcool a tendance à faire grimper la fréquence cardiaque au repos tout en abaissant la VFC ; le début d'une infection fait monter de concert la fréquence cardiaque au repos, la fréquence respiratoire et la température, tandis que la VFC chute. Deux ou trois signaux qui glissent dans le même sens en même temps pèsent plus lourd qu'un seul pris isolément.",
    },
    {
      q: "Les indicateurs de santé des objets connectés remplacent-ils une consultation médicale ?",
      a: "Non. La fréquence cardiaque au repos, la VFC, les scores de sommeil et le reste sont des repères de bien-être, utiles pour repérer un changement et poser de meilleures questions, jamais un diagnostic. Une alerte d'un capteur connecté, comme un signalement de rythme irrégulier, est une invitation à consulter, pas un résultat. Parlez de tout ce qui vous inquiète à un professionnel de santé.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "Qu'est-ce qu'une fréquence cardiaque au repos normale ?",
      a: "Chez l'adulte, la plage classique va de 60 à 100 battements par minute, les sportifs d'endurance se situant souvent entre 40 et 60. Cette bande a été tracée pour la sécurité clinique, non pour une santé optimale, et de vastes études montrent un risque qui s'élève assez régulièrement à mesure que la fréquence au repos monte : la tendance pèse donc plus qu'une mesure isolée.",
    },
    {
      q: "Quel est le meilleur moment pour mesurer sa fréquence cardiaque au repos ?",
      a: "Idéalement dès le réveil, avant de vous redresser, de consulter votre téléphone ou d'avaler la moindre caféine. C'est de mesurer chaque fois dans les mêmes conditions qui rend le chiffre comparable : une mesure régulière vaut bien plus qu'une mesure plus précise prise au hasard.",
    },
    {
      q: "Pourquoi ma fréquence cardiaque au repos a-t-elle soudainement augmenté pendant quelques jours ?",
      a: "Une hausse brusque et inexpliquée de plusieurs battements qui tient quelques jours est la manière discrète qu'a le corps de signaler quelque chose : souvent le début d'une infection, un mauvais sommeil qui s'ajoute au stress, la déshydratation, l'alcool de la veille au soir, ou trop d'entraînement pour trop peu de récupération. La caféine, la fièvre, la chaleur, l'anxiété et certains médicaments la poussent aussi vers le haut.",
    },
    {
      q: "Quand dois-je m'inquiéter de ma fréquence cardiaque au repos ?",
      a: "Une fréquence au repos qui reste au-dessus de 100 sans explication évidente, une fréquence basse accompagnée d'étourdissements, d'évanouissements ou d'essoufflement, ou un pouls irrégulier qui revient méritent d'être évoqués avec un professionnel de santé. Une alerte de rythme irrégulier d'un capteur connecté est un signal pour aller vous faire examiner, pas un diagnostic ; seul un ECG peut confirmer un trouble du rythme.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "Qu'est-ce qu'une bonne VFC ?",
      a: "Aucun chiffre n'est bon dans l'absolu. Les écarts de VFC d'une personne à l'autre sont énormes : votre référence saine peut valoir un tiers de celle d'une autre personne, et les deux sont parfaitement normales. La VFC chute aussi nettement avec l'âge, et elle dépend de la durée d'enregistrement et de la posture ; les valeurs absolues ne se transposent donc ni d'un individu à l'autre ni d'un appareil à l'autre. Lisez votre propre tendance, pas un classement.",
    },
    {
      q: "Pourquoi ma VFC change-t-elle autant d'une nuit à l'autre ?",
      a: "La VFC est extrêmement sensible aux conditions. La posture, la fréquence respiratoire, l'heure, le dernier repas, la caféine, la maladie, le sommeil et le stress aigu la font tous bouger, et l'alcool la réduit proportionnellement à la dose. Des écarts d'environ dix pour cent d'une nuit sur l'autre sont monnaie courante et ne veulent rien dire en eux-mêmes ; voilà pourquoi une moyenne mobile sur sept jours est la seule unité honnête à lire.",
    },
    {
      q: "Pourquoi ma VFC est-elle basse après avoir bu de l'alcool ?",
      a: "L'alcool réduit la VFC proportionnellement à la dose, le plus fortement la nuit même et au réveil, souvent alors que la fréquence cardiaque et la tension paraissent encore tout à fait normales. Une baisse d'une nuit après un verre, un dîner tardif ou un entraînement intense est attendue et se corrige d'elle-même ; c'est en consignant les facteurs évidents qu'on la distingue d'un déclin durable et réel.",
    },
    {
      q: "Quand une VFC basse compte-t-elle vraiment ?",
      a: "Prise seule, la VFC est trop bruyante pour déclencher l'alarme. Elle devient parlante quand une baisse durable sous votre référence personnelle coïncide avec une fréquence cardiaque au repos en hausse et une fréquence respiratoire nocturne plus élevée : un signe avant-coureur discret de maladie ou de surmenage. Une tendance à la baisse doublée de symptômes comme l'essoufflement ou des palpitations, ou des signalements répétés de rythme irrégulier, sont une raison de consulter un professionnel de santé.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "Que signifient les deux chiffres de la tension artérielle ?",
      a: "Le chiffre du haut, la systolique, est la pression dans vos artères à l'instant où le cœur se contracte et chasse le sang ; celui du bas, la diastolique, est la pression résiduelle pendant que le cœur se relâche et se remplit entre deux battements. Les deux se mesurent en millimètres de mercure, et chacun porte son propre risque : aucun n'est celui qui compte vraiment au détriment de l'autre.",
    },
    {
      q: "À partir de quelle tension parle-t-on d'hypertension ?",
      a: "Les deux grandes instances de recommandations conviennent que l'hypertension, comme maladie, débute à 140/90 mesurée au cabinet. Elles divergent sur ce qui se situe en dessous : le cadre américain qualifie 130 à 139 sur 80 à 89 d'hypertension de stade 1, là où le cadre européen y voit une simple tension élevée. Le risque croît de façon continue dès environ 115/75, sans seuil net sous lequel il s'évanouirait.",
    },
    {
      q: "Comment mesurer correctement ma tension à la maison ?",
      a: "Commencez par rester assis tranquillement cinq minutes, dos soutenu et pieds à plat, le bras posé au niveau du cœur, avec un brassard de bras à la bonne taille. Évitez auparavant la caféine, le tabac et toute conversation. La technique fait bouger le chiffre davantage que presque tout ce qui se passe en vous ce jour-là ; les moyennes hors cabinet sur plusieurs jours font foi, l'hypertension à domicile se situant autour de 135/85.",
    },
    {
      q: "Quand une tension élevée est-elle une urgence ?",
      a: "Une mesure élevée isolée n'est pas une urgence ; reprenez-la après une minute. Si elle reste à 180/120 ou au-dessus sans symptômes, contactez rapidement votre professionnel de santé. Si elle atteint 180/120 ou plus avec une douleur thoracique, un essoufflement, un trouble neurologique ou visuel, ou un mal de tête violent, considérez-la comme une urgence et appelez les secours.",
    },
  ],
  "sleep-consistency": [
    {
      q: "De combien d'heures de sommeil les adultes ont-ils réellement besoin ?",
      a: "Les recommandations nationales placent les adultes de 18 à 64 ans entre 7 et 9 heures par nuit, et les plus âgés entre 7 et 8, avec un plancher consensuel d'au moins 7 heures de façon régulière. La relation suit une courbe en U, et non la logique du « plus, c'est mieux » : un sommeil habituellement trop court comme un sommeil habituellement très long s'accompagnent l'un et l'autre d'un risque.",
    },
    {
      q: "La régularité du sommeil est-elle plus importante que sa durée ?",
      a: "Les deux comptent, et l'horaire pèse peut-être autant que la durée. Dans une vaste cohorte, la régularité des horaires de coucher prédisait la mortalité au moins aussi fortement que la durée, même une fois les heures dormies prises en compte. Deux personnes peuvent cumuler un nombre d'heures identique : celle qui se couche à la même heure chaque nuit s'en tire mesurablement mieux.",
    },
    {
      q: "Puis-je rattraper le sommeil perdu le week-end ?",
      a: "En partie seulement. La dette de sommeil est le cumul des nuits trop courtes, et son remboursement reste partiel et non linéaire : un seul long week-end n'efface pas entièrement plusieurs nuits écourtées. Mieux vaut un horaire régulier que d'essayer de solder la dette d'un coup.",
    },
    {
      q: "Les phases de sommeil profond et de sommeil paradoxal de mon capteur sont-elles fiables ?",
      a: "Méfiez-vous de la répartition par phase. Les appareils grand public estiment le partage entre sommeil profond, paradoxal et léger avec une concordance seulement passable à modérée face à la référence en laboratoire clinique, et ils ont tendance à surestimer votre durée de sommeil. Le temps de sommeil total et votre heure de coucher sont bien plus fiables que n'importe quel pourcentage de sommeil profond ; voyez les phases comme une tendance personnelle approximative.",
    },
  ],
  "respiratory-rate": [
    {
      q: "Qu'est-ce qu'une fréquence respiratoire normale ?",
      a: "Chez l'adulte au repos, la plage standard va de 12 à 20 respirations par minute. La bande est large : le chiffre prend donc tout son sens rapporté à votre propre valeur habituelle plutôt qu'à la plage de population. Les enfants respirent plus vite, et les sportifs d'endurance se situent plutôt dans le bas.",
    },
    {
      q: "Pourquoi la fréquence respiratoire est-elle mesurée la nuit plutôt que le jour ?",
      a: "À l'éveil, la fréquence respiratoire compte parmi les chiffres les plus tributaires de l'instant : parler, bouger, l'émotion et jusqu'au fait de se savoir mesuré la déplacent tous, si bien qu'une mesure ponctuelle en journée ne veut presque rien dire. Endormi, ces influences s'effacent et votre fréquence nocturne se cale sur une valeur remarquablement stable, ce qui rend un écart réel facile à repérer.",
    },
    {
      q: "Que signifie une hausse de ma fréquence respiratoire nocturne ?",
      a: "Une hausse durable d'environ trois respirations par minute au-dessus de votre valeur nocturne habituelle peut indiquer que quelque chose se prépare, souvent avant que vous ne vous sentiez mal. Le signal ne pointe pas une infection en particulier : il dit que le corps travaille plus, pas ce qui cloche. Des causes banales comme un entraînement intense tardif, l'alcool ou une chambre chaude et mal aérée peuvent aussi le faire bouger.",
    },
    {
      q: "Quand une fréquence respiratoire est-elle une urgence médicale ?",
      a: "Une fréquence supérieure à 25 par minute, doublée d'essoufflement, de confusion ou d'une faible saturation en oxygène, appelle une prise en charge médicale rapide. La respiration lente et superficielle est la direction la plus dangereuse, en particulier la dépression respiratoire due aux opioïdes ou aux sédatifs ; si quelqu'un respire très lentement, est difficile à réveiller ou a les lèvres bleutées, traitez la situation comme une urgence et appelez à l'aide.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "Qu'est-ce qu'un taux d'oxygène dans le sang normal ?",
      a: "Chez un adulte en bonne santé respirant l'air ambiant au niveau de la mer, la SpO2 se situe entre 95 et 100 pour cent, l'essentiel des mesures se groupant entre 96 et 99. Le plancher varie avec les circonstances : environ 90 pour cent peut être normal en altitude, et les personnes atteintes d'une maladie pulmonaire chronique vivent avec une référence personnelle plus basse. Rien à gagner au-dessus de la bande : plus haut n'est pas meilleur.",
    },
    {
      q: "Pourquoi ma mesure de SpO2 au poignet est-elle basse ?",
      a: "Une mesure basse isolée tient plus souvent de l'artefact que de l'urgence. Les capteurs au poignet sont plus éloignés d'un lit artériel pulsé et doivent composer avec le mouvement et un maintien plus lâche ; des mains froides, un bracelet desserré, du vernis à ongles ou la lumière ambiante tirent le chiffre vers le bas. Reprenez la mesure au chaud, immobile et bien perfusé avant de vous fier à une baisse.",
    },
    {
      q: "Puis-je utiliser la SpO2 pour détecter une apnée du sommeil ?",
      a: "Les désaturations nocturnes répétées font partie des critères de dépistage de l'apnée du sommeil : un capteur connecté qui les signale peut donc donner un indice précoce, sans valoir diagnostic. Des ronflements bruyants ponctués de pauses observées, ou un sommeil non réparateur avec somnolence dans la journée, méritent d'être évoqués avec un professionnel de santé pour une évaluation en règle.",
    },
    {
      q: "Les oxymètres de pouls sont-ils moins fiables sur les peaux foncées ?",
      a: "Oui. Les oxymètres de pouls peuvent surestimer la saturation réelle en oxygène chez les personnes à la pigmentation cutanée plus foncée, affichant un chiffre rassurant alors que la saturation est en fait plus basse : un écart documenté dans des données hospitalières et examiné par les autorités de régulation américaines. Une mesure d'apparence normale ne devrait jamais l'emporter sur un essoufflement, une confusion ou le simple sentiment que quelque chose ne va pas.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "37 degrés Celsius est-elle toujours la température corporelle normale ?",
      a: "C'est une vieille moyenne que les données modernes ont revue à la baisse. Une vaste revue situe la moyenne de population à 36,59 °C, avec une plage orale normale d'environ 35,7 à 37,4 °C, assez large pour que deux personnes en bonne santé soient distantes de près de deux degrés. Une mesure de 36,7 °C est pleinement dans la normale, et non en dessous.",
    },
    {
      q: "Pourquoi ma température change-t-elle au cours de la journée ?",
      a: "La température suit une courbe circadienne, oscillant d'environ un demi-degré entre son creux du petit matin, vers 4 à 8 heures, et son pic en début de soirée, vers 18 à 20 heures. Une mesure du soir qui semble un peu élevée n'est souvent que le pic quotidien normal ; mieux vaut donc comparer des mesures prises à la même heure et au même endroit du corps.",
    },
    {
      q: "La température cutanée d'un capteur connecté est-elle la même que la température corporelle ?",
      a: "Non. La température cutanée relevée par un capteur connecté n'est pas la température corporelle centrale ; c'est l'écart nocturne par rapport à votre propre référence établie sur plusieurs nuits, sans plage clinique faisant autorité. Bien lue, elle peut laisser deviner un glissement sous-fébrile avant l'apparition des symptômes, mais toute crainte de fièvre doit être confirmée par une vraie mesure orale.",
    },
    {
      q: "À partir de quelle température parle-t-on de fièvre, et quand consulter ?",
      a: "On parle de fièvre à partir d'une température orale de 38,0 °C. Chez l'adulte, les symptômes et leur durée pèsent en général plus que le chiffre exact ; consultez tout de même autour de 39,4 °C, ou pour toute fièvre accompagnée d'essoufflement, de douleur thoracique, de mal de tête violent, de confusion, d'une nuque raide ou d'une éruption cutanée. Chez un nourrisson de moins de trois mois, une fièvre exige toujours une évaluation urgente.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "Qu'est-ce qu'une glycémie à jeun normale ?",
      a: "Sous 100 mg/dL (sous 5,6 mmol/L), la glycémie à jeun est normale selon l'American Diabetes Association, la bande 100 à 125 correspondant au prédiabète ; l'OMS, elle, ouvre le prédiabète dès 110. Les deux partagent un seuil de diabète fixé à 126 mg/dL ou plus. Une mesure anormale isolée ne diagnostique jamais rien : la confirmation passe par un test répété un autre jour.",
    },
    {
      q: "Quelle est la différence entre une mesure de glycémie et l'HbA1c ?",
      a: "Une glycémie à jeun ou après un repas est une photographie : vraie pour l'instant du prélèvement, et facilement faussée par le dîner de la veille ou un rhume qui couve. L'HbA1c, elle, est un film en accéléré, qui reflète votre glycémie moyenne sur la durée de vie d'un globule rouge, soit environ deux à trois mois. Les deux se révèlent surtout lues côte à côte.",
    },
    {
      q: "Pourquoi ma glycémie matinale est-elle plus élevée après une mauvaise nuit de sommeil ?",
      a: "Même une seule nuit de manque partiel de sommeil abaisse mesurablement la sensibilité à l'insuline, et la tolérance au glucose s'affaisse au fil de la journée, si bien qu'un repas identique fait davantage grimper la glycémie le soir. Une mauvaise nuit ou un dîner tardif et copieux explique très bien une anomalie isolée le lendemain matin, et ne prouve rien en soi.",
    },
    {
      q: "Quand une glycémie est-elle dangereuse ?",
      a: "Une glycémie sous 70 mg/dL (sous 3,9 mmol/L) signale une hypoglycémie : prenez un glucide à action rapide et recontrôlez dans 15 minutes ; en dessous de 54 mg/dL, l'action immédiate s'impose. Une glycémie très élevée et persistante avec soif, mictions fréquentes, vomissements, respiration rapide ou pensée embrumée justifie des soins rapides. Rien de tout cela n'est un autodiagnostic : parlez-en à un professionnel de santé.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "Qu'est-ce que la VO2max et pourquoi est-elle importante ?",
      a: "La VO2max est le débit maximal auquel votre corps peut capter et utiliser l'oxygène lors d'un effort intense, exprimé en millilitres d'oxygène par kilogramme et par minute. Elle résume toute la chaîne d'apport en oxygène et figure parmi les plus puissants prédicteurs isolés de la longévité, chaque gain de condition physique étant associé à un risque de décès nettement plus bas.",
    },
    {
      q: "Quelle est la fiabilité de la VO2max affichée par ma montre ?",
      a: "Votre capteur connecté l'estime plutôt qu'il ne la mesure : il déduit une valeur du rapport entre votre fréquence cardiaque et votre allure, en s'appuyant sur une fréquence cardiaque maximale supposée. La valeur absolue peut être décalée de quelques points, et le terrain, la chaleur et le maintien du capteur la brouillent encore. La seule lecture honnête est celle d'une ligne de tendance : une progression régulière sur plusieurs semaines, elle, est bien réelle.",
    },
    {
      q: "Qu'est-ce qu'une bonne VO2max pour mon âge ?",
      a: "La VO2max se lit comme un percentile au sein de votre propre tranche d'âge et de sexe, jamais face à une cible fixe. Les hommes affichent des valeurs environ 15 à 20 pour cent plus élevées que les femmes au même âge, et la condition physique recule avec les années : une valeur excellente à 60 ans serait banale à 25. Plus que votre position, c'est la direction que vous prenez qui compte.",
    },
    {
      q: "Comment améliorer ma VO2max ?",
      a: "La condition aérobie progresse avec un entraînement régulier. La cible hebdomadaire commune aux grandes recommandations est de 150 à 300 minutes d'activité modérée ou de 75 à 150 minutes d'activité intense, avec du renforcement musculaire au moins deux fois par semaine et de la récupération prévue. Un entraînement régulier réduit d'environ moitié le déclin naturel lié à l'âge. Consultez un professionnel de santé avant de vous lancer dans un exercice intense si vous étiez sédentaire ou souffrez d'une affection cardiaque, pulmonaire ou métabolique.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Pourquoi l'IMC est-il une mesure de santé limitée ?",
      a: "L'IMC est un indicateur d'adiposité peu coûteux et reproductible, mais il ne sépare pas le muscle de la graisse : une personne musclée peut tomber dans la bande surpoids quand une personne âgée ayant fondu côté muscle se loge tranquillement dans la normale. Il ignore aussi la localisation de la graisse, et ses seuils, tracés sur des populations en majorité européennes, portent un risque plus élevé à IMC plus bas chez les personnes d'origine sud- et est-asiatique.",
    },
    {
      q: "Pourquoi l'endroit où je stocke la graisse compte-t-il plus que mon poids ?",
      a: "La graisse de la taille, tassée entre les organes abdominaux, est métaboliquement bien plus nocive que celle des hanches et des cuisses ; elle prédit le diabète, l'hypertension et le risque cardiovasculaire indépendamment de l'IMC. Une règle simple, qui vaut quels que soient le sexe et l'origine, consiste à garder votre tour de taille sous la moitié de votre taille.",
    },
    {
      q: "Pourquoi mon poids fait-il un bond du jour au lendemain ?",
      a: "Le poids oscille d'un à deux kilos au fil d'une journée ordinaire et d'un jour sur l'autre, au gré de l'hydratation, des aliments encore en transit et du sel à eux seuls, sans que rien de cela soit de la graisse. Regardez une moyenne mobile sur sept jours et le bruit s'annule, ne laissant que la ligne qui a vraiment du sens. Idem pour le pourcentage de masse grasse affiché par une balance.",
    },
    {
      q: "De combien dois-je maigrir pour améliorer ma santé ?",
      a: "Chez les adultes en surpoids ou obèses, une perte durable de seulement 5 à 10 pour cent du poids améliore nettement la glycémie, la tension et les lipides : une bien meilleure cible que n'importe quel chiffre unique sur le cadran. Visez un changement modeste et durable plutôt qu'une perte spectaculaire.",
    },
  ],
  "tracking-mood": [
    {
      q: "À quoi sert de suivre mon humeur ?",
      a: "Une entrée, c'est une opinion ; quelques centaines d'entrées, c'est une tendance, et une tendance, ce sont des données. Notée régulièrement pendant des semaines, une simple échelle d'humeur fait ressortir des motifs qu'aucune journée prise seule ne révèle : une lente glissade vers le bas sur une période stressante, le regain fidèle après l'exercice, ou un creux qui revient selon un rythme mensuel prévisible.",
    },
    {
      q: "Comment dois-je noter mon humeur pour que ce soit utile ?",
      a: "La régularité est de loin l'habitude la plus utile : même échelle, même heure, chaque jour. L'auto-évaluation dépend de l'heure, des événements récents et de la qualité du sommeil, si bien qu'une note ponctuelle est bruyante. Relevée toujours de la même façon, l'oscillation d'un jour sur l'autre se lisse et la direction de fond devient lisible.",
    },
    {
      q: "Qu'est-ce qu'un score préoccupant à un questionnaire d'humeur ?",
      a: "Sur les questionnaires validés, un WHO-5 à 50 pour cent ou en dessous traduit un bien-être médiocre, et un total de 10 ou plus au PHQ-9 ou au GAD-7 marque le seuil d'action habituel. Ce sont des questionnaires concordants et bien établis, mais un résultat positif invite à en parler à un professionnel ; ce n'est pas un diagnostic que vous pouvez poser chez vous.",
    },
    {
      q: "Quand une humeur basse devrait-elle m'inciter à chercher de l'aide ?",
      a: "Quand elle dure : une tendance à la baisse qui tient deux semaines ou plus, ou qui commence à empiéter sur le quotidien, est une raison d'en parler à un médecin ou à un professionnel de la santé mentale, sans attendre qu'elle paraisse grave. Toute pensée de vous faire du mal est, à elle seule, une raison de contacter sur-le-champ votre numéro d'urgence local ou un service de crise.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Pourquoi le cycle menstruel est-il considéré comme un signe vital ?",
      a: "Les instances professionnelles demandent aux cliniciens de traiter le cycle comme ils traitent le pouls, la tension et la température, car c'est un rythme récurrent qui se tient stable quand tout va bien : un changement y porte donc une information. La durée et la régularité du cycle ouvrent une fenêtre accessible sur la santé reproductive et la santé globale.",
    },
    {
      q: "Quelle est la durée normale d'un cycle menstruel ?",
      a: "Deux plages reconnues font autorité l'une comme l'autre. La bande destinée aux patientes décrit les cycles sains de l'adulte au quotidien de 21 à 35 jours, là où le cadre de dépistage clinique retient 24 à 38 jours. Une variation d'environ une semaine d'un mois à l'autre est banale, et la phase lutéale fait office d'ancre relativement constante, l'essentiel de l'écart de durée se logeant dans la phase folliculaire.",
    },
    {
      q: "Puis-je me fier à une application de suivi de cycle comme moyen de contraception ?",
      a: "Non. Les prédictions de cycle calculées par n'importe quelle application, n'importe quel objet ou appareil connecté ne sont pas une méthode contraceptive. Les estimations fondées sur des valeurs par défaut de population manquent de fiabilité, le moment de l'ovulation varie beaucoup même chez les personnes à cycles réguliers, et la périménopause rend de nouveau les cycles imprévisibles. Quiconque pratique la planification familiale naturelle devrait recourir à une méthode validée et bien enseignée, et non à une seule date prédite.",
    },
    {
      q: "Quand devrais-je consulter un médecin au sujet de mon cycle ?",
      a: "Évoquez-le avec un professionnel de santé quand les cycles sortent régulièrement de la plage habituelle, avec des intervalles plus courts qu'environ 21 jours ou plus longs qu'environ 45, ou quand survient un changement marqué et durable par rapport à votre propre schéma. Un intervalle de 90 jours ou plus, des règles qui durent plus de 7 jours ou imbibent une protection plus souvent que toutes les une à deux heures, et des saignements entre les règles justifient tous une évaluation.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "Comment un objet connecté mesure-t-il ma fréquence cardiaque ?",
      a: "La plupart recourent à la photopléthysmographie : une LED verte projette de la lumière dans la peau, le sang en absorbe une part, et un capteur compte les pulsations à mesure que le volume sanguin monte et descend à chaque battement. Cela marche bien au repos mais se débat avec le mouvement, et c'est pourquoi la fréquence cardiaque au poignet pendant des fractionnés ou de la musculation est la mesure la moins fiable que possèdent la plupart des gens. Une ceinture pectorale, elle, reste précise en plein mouvement.",
    },
    {
      q: "Comment ma montre connaît-elle mes phases de sommeil ?",
      a: "Elle ne voit pas votre cerveau. Elle déduit le sommeil de votre faible niveau de mouvement, souvent croisé avec la fréquence cardiaque et sa variation battement à battement, puis étiquette la nuit en sommeil léger, profond et paradoxal. Face à la référence en laboratoire clinique, les appareils s'en sortent plutôt bien pour dire endormi ou éveillé, mais bien moins pour trancher la phase exacte : lisez donc l'heure de coucher et la durée totale en confiance, et voyez les phases colorées comme une estimation.",
    },
    {
      q: "Les mesures des objets connectés sont-elles fiables ?",
      a: "L'essentiel de ce qu'un objet connecté affiche est une estimation, pas une mesure de laboratoire. La fréquence cardiaque optique, les phases de sommeil déduites, la SpO2 au poignet et tout score de récupération ou de disponibilité sont des modèles bâtis sur quelques signaux réels : assez justes pour révéler un changement dans le temps, rarement assez pour traiter une valeur isolée comme une vérité absolue. Lisez-les en relatif, pas en absolu.",
    },
    {
      q: "Que mesurent réellement les scores de récupération et de disponibilité ?",
      a: "Rien n'y est mesuré à proprement parler : ce sont des modèles propriétaires qui mêlent des flux de capteurs bruts, en général la VFC nocturne, la fréquence cardiaque au repos et le sommeil, à votre âge, votre poids et votre historique pour en sortir un chiffre unique. Ils n'ont pas de plage de référence clinique et ne sont pas harmonisés d'un appareil à l'autre : voyez-les comme un coup de pouce quotidien, pas comme une mesure clinique.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Pourquoi ma propre référence vaut-elle mieux que la plage normale ?",
      a: "Une bande de référence est faite pour repérer la petite fraction de gens qui se situe loin de la dispersion habituelle ; elle n'a jamais été pensée pour vous dire si aujourd'hui est une bonne journée. Comme les écarts d'une personne à l'autre sont importants, une fréquence cardiaque au repos de 58 semble banale face à la bande des manuels, mais représente une nette hausse de six battements si votre référence est 52 : un changement que la plage de population masque entièrement.",
    },
    {
      q: "Comment distinguer un vrai signal d'un bruit aléatoire ?",
      a: "Le bruit, c'est une mesure tout près du bord de votre plage habituelle, ou un petit mouvement qui s'inverse dès le lendemain. Le signal, c'est une direction qui dure : un décalage sur plusieurs jours bien au-delà de votre dispersion habituelle, ou une lente dérive de la moyenne mobile sur des semaines. La moyenne mobile lisse la dispersion, et un changement plusieurs fois plus ample que votre oscillation quotidienne habituelle mérite qu'on s'y arrête.",
    },
    {
      q: "Combien de temps avant qu'une référence soit fiable ?",
      a: "Une mesure isolée n'est qu'un point sans contexte. Un nouveau signal réclame quelques semaines de mesures régulières avant qu'un chiffre unique ne veuille dire quoi que ce soit : ce n'est qu'alors que le bruit quotidien s'est moyenné en une référence sur laquelle vous pouvez vraiment vous appuyer.",
    },
    {
      q: "Pourquoi mesurer dans les mêmes conditions importe-t-il autant ?",
      a: "Une tendance n'est honnête que si les conditions qui la sous-tendent restent constantes. La fréquence cardiaque au repos au réveil se situe bien en dessous de la même fréquence après un café et quelques escaliers, et le poids avant le petit-déjeuner pèse un kilo de moins que le même corps après le dîner. Un appareil un peu imparfait, utilisé de la même façon chaque jour, l'emporte sur un meilleur appareil utilisé n'importe comment.",
    },
  ],
  "steps-and-movement": [
    {
      q: "D'où vient l'objectif des 10 000 pas ?",
      a: "Ce n'a jamais été une conclusion scientifique. L'origine remonte à un podomètre japonais commercialisé autour des Jeux olympiques de Tokyo de 1964, dont le nom signifiait « compteur de dix mille pas », choisi en partie parce que le caractère de 10 000 évoque une personne qui marche, en partie parce que c'était un chiffre rond facile à retenir pour vendre un appareil. À ranger du côté du folklore, pas de la recommandation.",
    },
    {
      q: "De combien de pas par jour ai-je réellement besoin ?",
      a: "L'essentiel du bénéfice sur la mortalité est acquis bien en dessous de 10 000. Les études montrent des taux de décès qui reculent à mesure que les pas s'accumulent, la courbe s'aplatissant quelque part autour de 6 000 à 8 000 pas par jour chez les personnes âgées et de 8 000 à 10 000 chez les plus jeunes. La courbe s'aplatit, elle ne se retourne pas : marcher davantage n'a rien de problématique, cela rapporte simplement moins par pas.",
    },
    {
      q: "Vaut-il mieux marcher d'un coup ou tout au long de la journée ?",
      a: "Étaler le mouvement sur la journée aide. La position assise prolongée et ininterrompue est de plus en plus tenue pour un facteur de risque à part entière, en partie indépendant du fait que vous fassiez aussi de l'exercice ; c'est pourquoi les recommandations actuelles couplent « bougez plus » et « restez moins assis ». Quelques minutes de marche chaque heure, les escaliers et une promenade après les repas finissent tous par compter.",
    },
    {
      q: "Que ne me dit pas un nombre de pas sur ma santé ?",
      a: "C'est un compteur de volume, pas un test de condition physique. Il ne dit rien de l'intensité ni de la force, ne sait pas distinguer un kilomètre soutenu en côte de quelques pas lents autour de la cuisine, et ne mesure pas la condition cardiorespiratoire, l'un des plus puissants prédicteurs de santé à long terme. Les pas ont leur place dans un tableau de bord, aux côtés d'autres signaux, pas sur un piédestal.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "Comment la caféine affecte-t-elle ma fréquence cardiaque et ma tension artérielle ?",
      a: "La caféine bloque l'adénosine et laisse l'accélérateur sympathique tourner plus librement : la fréquence cardiaque grimpe et la tension monte de façon passagère, un effet d'autant plus marqué chez les personnes qui n'en consomment pas régulièrement. Un café pris une heure avant la mesure peut soulever à la fois votre fréquence cardiaque au repos et votre tension de quoi se voir.",
    },
    {
      q: "Le café de l'après-midi affecte-t-il vraiment mon sommeil ?",
      a: "Souvent plus que vous ne le ressentez. La demi-vie de la caféine tourne couramment autour de cinq heures, si bien qu'une tasse de l'après-midi conserve la moitié de sa dose en circulation à l'heure du coucher. Dans une étude contrôlée, une dose équivalant à un café fort prise six heures avant le coucher a réduit mesurablement le temps de sommeil total, alors même que les participants sous-estimaient la gêne.",
    },
    {
      q: "Pourquoi ma VFC est-elle basse et ma fréquence cardiaque élevée après avoir bu ?",
      a: "Pendant que le corps élimine l'alcool durant la nuit, le versant sympathique reste enclenché : la fréquence cardiaque au repos demeure élevée et la VFC chute, les quantités plus fortes produisant des effets plus amples et plus durables. Voilà pourquoi un seul verre au dîner peut discrètement écraser votre score de récupération pendant que vous dormez d'un trait.",
    },
    {
      q: "Cela signifie-t-il que je devrais renoncer à la caféine et à l'alcool ?",
      a: "Pas forcément. Tout l'intérêt est dans l'attribution, pas dans l'abstinence. Observer vos propres données vous montre à partir de quelle heure la caféine arrive trop tard avant que votre sommeil ne s'effiloche, et quelle dose d'alcool fait grimper votre fréquence cardiaque nocturne ; vous cessez alors de prendre un creux prévisible et passager pour le signe que quelque chose ne va pas.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Ai-je vraiment besoin de huit verres d'eau par jour ?",
      a: "Aucune base scientifique solide ne soutient une règle universelle des huit verres ; les revues qui ont remonté l'origine de cette idée n'ont trouvé derrière elle aucune preuve crédible. Les instances faisant autorité donnent des valeurs de référence de population pour l'eau totale, toutes sources confondues, soit environ 2 à 2,7 litres par jour pour les femmes et 2,5 à 3,7 pour les hommes, et rappellent que les besoins varient beaucoup selon la corpulence, l'activité, le climat et l'alimentation.",
    },
    {
      q: "Comment savoir si je bois assez ?",
      a: "Pour la plupart des gens en bonne santé, un jour ordinaire, les signaux du corps lui-même font de bons guides. La soif est un capteur réel et fonctionnel, et boire à la soif suffit à garder la plupart des adultes en bonne santé correctement hydratés. La couleur de l'urine offre un contrôle maison approximatif : jaune paille clair, tout va bien ; constamment foncée, vous pourriez boire davantage.",
    },
    {
      q: "Pourquoi la déshydratation augmente-t-elle ma fréquence cardiaque ?",
      a: "Quand vous perdez assez de fluide pour que le volume sanguin baisse, le cœur compense en battant plus vite afin de tenir une circulation stable ; la déshydratation pousse donc la fréquence cardiaque vers le haut, au repos comme à l'effort. Même de légers déficits hydriques, d'un à deux pour cent de la masse corporelle, suffisent à entamer l'humeur, à alourdir la sensation d'effort et à brouiller la concentration.",
    },
    {
      q: "Peut-on boire trop d'eau ?",
      a: "Oui. Boire très au-delà du besoin, le plus souvent lors d'épreuves d'endurance, peut diluer le sodium sanguin jusqu'à une affection dangereuse, l'hyponatrémie, dont les premiers signes recoupent ceux de la déshydratation. Quiconque souffre d'une maladie cardiaque, rénale ou hépatique, ou prend un médicament agissant sur l'équilibre des fluides, peut se voir fixer une cible volontairement restreinte et devrait suivre l'avis clinique plutôt qu'une règle générale.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "Comment le stress se manifeste-t-il dans mes données de santé ?",
      a: "Le stress, c'est l'accélérateur sympathique maintenu enfoncé ; il alimente de nombreux indicateurs à partir d'un seul cadran, qui bougent donc de concert. La fréquence cardiaque au repos monte, la VFC nocturne baisse, le sommeil s'allège et se hache, et la fréquence respiratoire est parfois élevée. Aucun signal pris seul n'est décisif, mais lus comme un faisceau face à votre propre référence, ils sont difficiles à récuser.",
    },
    {
      q: "Quelle est la différence entre stress aigu et stress chronique ?",
      a: "Les stress aigus, comme un entraînement intense ou une échéance, déplacent les indicateurs ; après une nuit ou deux de vrai repos, tout revient à la référence, et c'est précisément ce rebond qui compte. Le souci commence quand le rebond ne vient plus et que le corps règle le coût cumulé de la charge allostatique : dans les données, cela se lit comme une référence qui a discrètement glissé et n'est jamais revenue.",
    },
    {
      q: "La récupération n'est-elle que l'absence de stress ?",
      a: "Non. La récupération est un processus parasympathique actif : le frein vagal qui se réenclenche, la fréquence cardiaque qui retombe et le sommeil profond qui fait le travail de réparation. Voilà pourquoi elle apparaît comme un signal positif, et non comme des chiffres qui se contentent de se calmer. Elle peut donc se soutenir, et pas seulement s'attendre : sommeil régulier et protégé, mouvement aérobie léger, lumière du jour.",
    },
    {
      q: "Quand devrais-je prendre au sérieux un stress persistant ?",
      a: "Ces signaux peuvent indiquer une tension durable, mais sans vous en dire la cause, et ils ne remplacent pas ce que vous ressentez. Un stress qui perturbe votre sommeil, votre concentration ou le plaisir des choses ordinaires pendant des semaines mérite d'être abordé avec un médecin ou un professionnel de la santé mentale, quels que soient les chiffres. Si la détresse vous paraît un jour insurmontable ou si vous avez des pensées d'automutilation, contactez sur-le-champ votre numéro d'urgence local ou un service de crise.",
    },
  ],
};
export default FAQ;
