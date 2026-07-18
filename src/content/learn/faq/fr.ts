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
  "your-ecg-recordings": [
    {
      q: "Que mesure vraiment un ECG à une dérivation ?",
      a: "Il enregistre un canal de l'activité électrique du cœur — la petite différence de tension entre deux points du corps — et le trace comme une bande de rythme. Un ECG clinique utilise douze de ces canaux pour voir le cœur sous douze angles ; un objet connecté en utilise un, ce qui suffit à montrer le rythme et la fréquence, mais reste une seule vue au lieu du tableau complet.",
    },
    {
      q: "Un ECG de montre peut-il diagnostiquer une fibrillation auriculaire ou un infarctus ?",
      a: "Non. Un résultat de fibrillation auriculaire est une alerte de dépistage, pas un diagnostic confirmé — les recommandations traitent une bande à une dérivation de 30 secondes comme une raison de chercher un ECG en bonne et due forme, pas comme un substitut. Et une seule dérivation ne peut pas du tout détecter un infarctus, car les changements qui le signalent apparaissent sur des dérivations qu'un enregistrement au poignet ne capte jamais. Une douleur ou une oppression thoracique est une urgence, quoi qu'affiche l'appareil.",
    },
    {
      q: "HealthLog interprète-t-il mon ECG ?",
      a: "Non. HealthLog affiche votre enregistrement importé sur une grille d'ECG familière et présente le résultat produit par l'appareil d'enregistrement lui-même, repris tel quel. Il ne lit pas le tracé, ne le note pas et ne propose aucun diagnostic propre — la lecture qui compte est celle d'un clinicien.",
    },
    {
      q: "Pourquoi mon ECG indique-t-il « non concluant » ?",
      a: "Un résultat non concluant signifie le plus souvent que le signal n'était pas assez net pour être classé : un contact lâche, une main froide, un mouvement pendant l'enregistrement ou une fréquence hors de la bande que l'algorithme étiquette. C'est fréquent et rarement le signe que quelque chose ne va pas ; recommencez la main chaude, immobile et avec un bon contact. Des résultats non concluants persistants accompagnés de symptômes méritent d'être signalés à un clinicien.",
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
  "screening-not-diagnosis": [
    {
      q: "Un score élevé au PHQ-9 ou au GAD-7 est-il un diagnostic ?",
      a: "Non. Ce sont des instruments de dépistage, non des tests diagnostiques. Un score qui franchit son seuil signifie que le dépistage est positif et qu'un échange plus approfondi se justifie, non qu'une affection est confirmée. Même à un seuil de 10 au PHQ-9, environ une personne sur huit dépistée positive n'aura pas de dépression majeure après une évaluation plus complète, et c'est pourquoi un résultat positif est une invitation à en parler à un professionnel plutôt qu'un verdict que vous rendez vous-même.",
    },
    {
      q: "Quel score au PHQ-9 ou au GAD-7 devrait inciter à agir ?",
      a: "Un total de 10 ou plus est le seuil d'action habituel pour les deux : environ 88 % de sensibilité et de spécificité pour la dépression majeure au PHQ-9, et environ 89 % de sensibilité et 82 % de spécificité pour l'anxiété généralisée au GAD-7. Le WHO-5 signale un bien-être médiocre à 50 % ou en dessous. Ce sont des points de départ pour une évaluation professionnelle, non des étiquettes à vous attribuer.",
    },
    {
      q: "Pourquoi répéter un questionnaire de dépistage plutôt que de le passer une seule fois ?",
      a: "Une passation unique est un instantané bruité, sensible à la qualité de votre nuit, aux événements récents et à la façon dont les questions tombent ce jour-là. Répétées sur des semaines et des mois, les mêmes questions cotées deviennent une tendance sur laquelle vous et un clinicien pouvez agir, et le WHO-5 est explicitement conçu pour se lire comme un mouvement par rapport à vos propres scores antérieurs, une baisse de 10 points valant comme un changement significatif. La répétition est aussi la façon dont ces outils suivent si un traitement fonctionne.",
    },
    {
      q: "Qu'est-ce que l'item du PHQ-9 sur l'automutilation, et que dois-je faire ?",
      a: "La neuvième question du PHQ-9 interroge directement sur les pensées qu'il vaudrait mieux être mort ou de se faire du mal, et elle se lit pour elle-même, immédiatement, quel que soit le score total — un score global bas ne l'annule jamais. Toute pensée de ce type, même occasionnelle, est à elle seule une raison de demander de l'aide sur-le-champ : contactez immédiatement votre numéro d'urgence local ou un service de crise. Ces ressentis se soignent et de l'aide existe.",
    },
  ],
  "longevity-labs-explained": [
    {
      q: "Pourquoi un bilan lipidique standard ne suffit-il pas ?",
      a: "Un bilan de base mesure la masse de cholestérol transporté, mais le risque cardiovasculaire suit le nombre de particules athérogènes, or le cholestérol par particule varie d'une personne à l'autre. L'ApoB est un décompte direct des particules et le cholestérol non-HDL un substitut peu coûteux de la même idée, si bien que deux personnes au LDL-C identique peuvent porter un risque très différent. Le bilan de base reste aussi muet sur la Lp(a) et sur l'inflammation.",
    },
    {
      q: "Qu'est-ce que la Lp(a) et pourquoi ne la mesure-t-on qu'une seule fois ?",
      a: "La lipoprotéine(a) est une particule apparentée au LDL dont le taux est déterminé à environ 80 à 90 pour cent par la génétique et ne bouge guère avec l'alimentation, l'exercice ou les statines courantes. Parce qu'elle est si stable, la recommandation est de la mesurer une fois dans la vie afin de repérer la minorité qui porte un risque cardiovasculaire héréditaire élevé. Un taux élevé ne signifie pas que quelque chose ne va pas dans l'immédiat ; il décale votre risque de base et relève la priorité de tous les leviers que vous pouvez actionner.",
    },
    {
      q: "Que m'indique la hs-CRP, et pourquoi la répéter ?",
      a: "La CRP ultrasensible lit l'inflammation de bas grade qui accompagne l'athérosclérose, en tertiles cardiovasculaires de moins de 1, de 1 à 3, et de plus de 3 mg/L. Parce que le moindre rhume ou la moindre poussée la déplace, elle se prend comme la moyenne de deux mesures espacées d'au moins deux semaines et à distance de toute maladie, et une valeur supérieure à 10 mg/L est mise de côté comme inflammation aiguë probable, puis reprise. C'est un modificateur de risque superposé à l'image lipidique, non un chiffre autonome.",
    },
    {
      q: "Dois-je interpréter mes résultats de laboratoire moi-même ?",
      a: "Non. Ces marqueurs interagissent, les bandes des recommandations divergent sur les bords, et une valeur isolée se loge dans une bande de bruit biologique et analytique, si bien que le vrai test d'un changement réel est la valeur de changement de référence au fil de mesures répétées, et non le fait qu'un résultat ait franchi un seuil. Un bilan s'interprète comme un tout, au regard de votre risque et de vos antécédents personnels, par le clinicien qui l'a prescrit. Tenez une valeur hors plage pour une raison de poser une question.",
    },
  ],
  "waist-and-central-fat": [
    {
      q: "Pourquoi le tour de taille compte-t-il plus que le poids ?",
      a: "L'endroit où vous stockez la graisse porte plus d'information que votre poids. La graisse viscérale, enroulée autour des organes abdominaux, déverse des acides gras et des signaux inflammatoires qui alimentent l'insulinorésistance, une tension plus élevée et un profil lipidique défavorable, tandis que la graisse sous-cutanée des hanches et des cuisses est largement inerte. Le tour de taille est un substitut simple du compartiment viscéral et prédit le risque cardiométabolique indépendamment de l'IMC.",
    },
    {
      q: "Quelle est la règle du rapport tour de taille/taille ?",
      a: "Gardez votre tour de taille sous la moitié de votre taille. Elle ne réclame aucun tableau, fonctionne d'une stature, d'un sexe et d'une origine à l'autre là où les seuils de tour de taille fixes échouent, et une vaste méta-analyse l'a trouvée meilleur prédicteur du risque cardiométabolique que l'IMC ou le tour de taille seuls. Un rapport à 0,5 ou au-dessus est le repère pratique pour examiner le reste du tableau.",
    },
    {
      q: "Comment mesurer correctement mon tour de taille ?",
      a: "Mesurez au point milieu entre votre côte la plus basse et le sommet de l'os de votre hanche, et non au nombril par réflexe, le ruban bien ajusté mais sans comprimer la peau et pris en fin d'expiration normale. Mesurez de la même façon à chaque fois, car une méthode irrégulière invente des changements qui n'existent pas. Un ruban souple employé de façon régulière vaut mieux qu'une balance coûteuse employée sans soin.",
    },
    {
      q: "Les seuils de tour de taille varient-ils selon l'origine ethnique ?",
      a: "Oui. Les seuils courants de plus de 94 et 102 cm pour les hommes et de plus de 80 et 88 cm pour les femmes ont été tracés en grande partie sur des populations d'origine européenne. Les personnes d'origine sud- et est-asiatique portent un risque cardiométabolique plus élevé à tour de taille plus bas, si bien que les seuils s'abaissent, couramment autour de 90 cm pour les hommes et 80 cm pour les femmes. La règle du rapport tour de taille/taille vaut mieux d'une population à l'autre.",
    },
  ],
  "grip-strength-as-a-vital-sign": [
    {
      q: "Pourquoi la force de préhension prédit-elle la santé ?",
      a: "La poigne est un reflet fidèle, et peu coûteux en effort, de la force du corps entier, de la masse musculaire et du système neuromusculaire qui les anime. Quand ce système décline par le vieillissement, l'inactivité ou la maladie, la poigne décline avec lui, ce qui fait d'une force de préhension en baisse l'un des premiers signes mesurables de la sarcopénie. Dans l'étude PURE portant sur près de 140 000 personnes, elle a prédit la mortalité toutes causes et cardiovasculaire mieux que ne le faisait la tension artérielle systolique.",
    },
    {
      q: "Qu'est-ce qu'une bonne force de préhension pour mon âge ?",
      a: "La poigne se lit au regard de votre âge et de votre sexe, jamais d'une cible fixe. Elle culmine au début de l'âge adulte (environ 46 à 51 kg pour les hommes et 28 à 31 kg pour les femmes), plafonne dans la trentaine et décline à partir du milieu de la vie, si bien qu'une valeur banale à 30 ans peut être excellente à 70. Les groupes de travail européens signalent une sarcopénie probable en dessous d'environ 27 kg pour les hommes et 16 kg pour les femmes, ce qui est une invitation à une évaluation, non un score de forme physique.",
    },
    {
      q: "Comment mesurer la force de préhension de façon régulière ?",
      a: "Utilisez le même dynamomètre à chaque fois, assis, le coude plié à angle droit, en prenant deux ou trois serrages maximaux par main avec un court repos et en retenant le meilleur. Surveillez la tendance lissée sur des mois plutôt qu'une mesure isolée : la poigne fléchit avec la fatigue, un entraînement intense récent, une blessure à la main ou simplement un appareil différent, alors comparez ce qui est comparable.",
    },
    {
      q: "Comment améliorer ma force de préhension ?",
      a: "La poigne et la force du corps entier qu'elle reflète répondent au renforcement musculaire, et non au fait de serrer une balle. Les grandes recommandations d'activité physique préconisent un travail de renforcement de tous les principaux groupes musculaires au moins deux jours par semaine, en parallèle de l'activité aérobie, et c'est le levier le plus fiable pour bâtir et préserver la force tout au long de la vie. Demandez d'abord l'avis d'un clinicien si vous étiez inactif ou souffrez d'une affection pertinente.",
    },
  ],
  "weather-altitude-and-your-body": [
    {
      q: "Pourquoi ma fréquence cardiaque au repos est-elle plus élevée par temps chaud ?",
      a: "Quand vous avez chaud, votre corps envoie le sang vers la peau pour évacuer la chaleur, si bien que le cœur pompe plus fort et plus vite pour maintenir une circulation stable. Une journée chaude ou une chambre surchauffée peut élever la fréquence cardiaque au repos et à l'effort de plusieurs battements sans aucun changement de condition physique. La chaleur fragmente aussi le sommeil, car l'endormissement dépend de la baisse de votre température centrale, qu'une pièce chaude émousse.",
    },
    {
      q: "Une mesure d'oxygène du sang plus basse est-elle normale en altitude ?",
      a: "Oui. Plus haut, l'air contient la même fraction d'oxygène à une pression plus basse, si bien que chaque inspiration en délivre moins et que l'oxygène du sang baisse — environ 90 pour cent peut être tout à fait normal vers 2 500 m — tandis que la fréquence respiratoire et la fréquence cardiaque s'élèvent pour compenser. En quelques jours, l'acclimatation cale en partie les chiffres. Un mal de tête qui s'aggrave avec des nausées, un essoufflement au repos ou une confusion, c'est autre chose : ce sont des signes d'alerte du mal de l'altitude et une raison de redescendre.",
    },
    {
      q: "La qualité de l'air peut-elle influencer mes mesures de santé ?",
      a: "Les particules fines, les PM2.5, sont assez petites pour pénétrer profondément dans les poumons et passer dans le sang, et l'exposition est liée à une contrainte cardiorespiratoire accrue, à une inflammation augmentée et à une tension plus élevée, avec un risque qui croît sur toute l'étendue de l'exposition. Un jour de forte pollution, une respiration plus rapide ou un score de récupération moins bon peut avoir une cause extérieure, surtout après y avoir fait de l'exercice.",
    },
    {
      q: "Comment lire mes données quand l'environnement change ?",
      a: "Consignez le contexte — une canicule, un séjour en altitude, une journée enfumée ou de smog — comme vous consigneriez un dîner tardif ou un entraînement intense, pour qu'une mesure isolée dictée par l'environnement ne soit pas prise pour un problème naissant. Le signal qui mérite l'attention est une dérive durable qui tient une fois les conditions revenues à la normale. Le coup de chaleur et le mal de l'altitude, en revanche, sont des urgences sur lesquelles agir selon ce que vous ressentez, et non d'après un objet connecté.",
    },
  ],
  "resting-heart-rate-through-the-day": [
    {
      q: "Que montre une courbe de fréquence cardiaque au cours de la journée qu'un seul chiffre au repos ne montre pas ?",
      a: "Elle montre comment votre cœur se comporte, pas seulement à quel point il peut tourner au ralenti. La fréquence cardiaque suit un rythme quotidien — la plus basse en sommeil profond, en hausse avant votre réveil, plus haute et plus fluctuante durant la journée active — avec le mouvement, les repas, la caféine et le stress qui se superposent. Voir toute la courbe est ce qui vous permet de distinguer une fréquence haute parce que vous avez monté l'escalier d'une fréquence haute alors que vous êtes assis sans bouger.",
    },
    {
      q: "Que signifie vraiment « élevée au repos » ?",
      a: "Cela signifie que votre fréquence cardiaque se tient au-dessus de votre plancher habituel au repos alors que vous êtes immobile et sans effort. Une brève montée après une activité, la caféine ou le stress est normale. Ce qui porte de l'information, c'est un plancher au repos qui reste plusieurs battements au-dessus de votre propre référence sur deux à quatre semaines pendant un jour ou plus — ce qui peut signaler une maladie, une surcharge ou un mauvais sommeil, et se lit le plus clairement quand la variabilité de la fréquence cardiaque baisse et que le sommeil se dégrade en même temps.",
    },
    {
      q: "Une seule phase haute sur la courbe est-elle un motif d'inquiétude ?",
      a: "Presque jamais à elle seule. Une pièce chaude, un effort intense, une heure stressante ou un repas copieux font tous monter la ligne brièvement. Le sens se loge dans un décalage durable sur plusieurs jours, et dans deux ou trois signaux qui penchent dans le même sens, pas dans un pic isolé.",
    },
    {
      q: "La courbe au cours de la journée peut-elle diagnostiquer un problème cardiaque ?",
      a: "Non. C'est une vue de bien-être. Elle peut montrer que votre cœur bat vite ou de façon inhabituelle, mais pas pourquoi. Un pouls irrégulier, ou une fréquence au repos qui reste haute avec un essoufflement, une gêne thoracique, des étourdissements ou des évanouissements, est un motif pour consulter un clinicien — et seul un ECG peut confirmer un trouble du rythme.",
    },
  ],
  "heart-rate-recovery": [
    {
      q: "Qu'est-ce que la récupération de la fréquence cardiaque ?",
      a: "C'est la vitesse à laquelle votre fréquence cardiaque chute après l'arrêt de l'exercice, généralement rapportée comme le nombre de battements dont elle baisse dans la première minute. Cette chute de la première minute est principalement pilotée par votre système nerveux parasympathique — le « frein » vagal — qui se réenclenche. Une chute plus rapide a tendance à aller de pair avec une meilleure forme cardiovasculaire ; une chute lente signifie que le corps reste emballé une fois le travail terminé.",
    },
    {
      q: "Qu'est-ce qu'un bon chiffre de récupération de la fréquence cardiaque ?",
      a: "Les seuils bien connus proviennent de tests d'effort standardisés : une chute à la première minute de 12 battements ou moins marquait un risque plus élevé à long terme dans une vaste étude sur tapis roulant, et environ 22 battements ou moins à deux minutes dans un protocole de récupération debout. Ce sont des seuils de tests cliniques, pas des cibles pour un entraînement dans le parc. L'usage honnête du chiffre d'un objet connecté est votre propre tendance après des efforts semblables, pas une limite fixe.",
    },
    {
      q: "Pourquoi ma récupération était-elle plus lente aujourd'hui ?",
      a: "Un jour donné, une récupération plus lente peut signifier un après-midi chaud, un effort déshydratant, une mauvaise nuit, l'alcool de la veille au soir, ou simplement la séance la plus dure que vous ayez faite depuis un moment. Les bêtabloquants et certains autres médicaments émoussent toute réaction de la fréquence cardiaque, celle-ci comprise. Une seule mesure lente signifie peu de chose ; c'est un déclin durable qui mérite l'attention.",
    },
    {
      q: "La récupération de la fréquence cardiaque n'est-elle pas la même chose que la réserve de fréquence cardiaque ?",
      a: "Non — les deux se ressemblent juste au nom. La récupération de la fréquence cardiaque est la chute après l'effort décrite ici. La réserve de fréquence cardiaque est l'écart entre votre fréquence de repos et votre fréquence maximale, utilisée pour définir les zones d'entraînement. Elles mesurent des choses différentes.",
    },
  ],
  "wrist-temperature-at-night": [
    {
      q: "La valeur de température de mon objet connecté est-elle ma vraie température corporelle ?",
      a: "Non. C'est une mesure de peau au poignet, rapportée comme un écart par rapport à votre propre référence sur plusieurs nuits plutôt qu'un degré absolu. La température cutanée périphérique est plus fraîche et fluctue davantage que la température centrale, façonnée par la circulation sanguine, la pièce et votre literie. Il n'existe pas de plage de référence clinique faisant autorité pour un écart au poignet — la bande « normale » qu'un appareil trace est définie par le fabricant et n'est qu'un repère relatif.",
    },
    {
      q: "Pourquoi les appareils mesurent-ils la température pendant la nuit ?",
      a: "Parce que vous êtes immobile, au chaud sous les couvertures et dans un environnement assez stable pendant des heures, ce qui rend la mesure de peau la plus stable et la plus comparable d'une nuit à l'autre. Elle se lit comme la nuit d'aujourd'hui face à votre propre référence, pas comme un chiffre que vous pourriez comparer à un seuil de fièvre.",
    },
    {
      q: "Une tendance de température au poignet peut-elle me dire que j'ai de la fièvre ?",
      a: "Non. Elle ne peut pas confirmer une fièvre, qui se définit face à une température mesurée — 38,0 °C (100,4 °F) par voie orale ou plus — et exige un thermomètre. Un écart d'appareil qui paraît élevé est une raison de prendre une vraie mesure, pas un substitut à celle-ci. Elle ne peut pas non plus vous dire pourquoi une nuit a été chaude : une maladie, une chambre étouffante, l'alcool et un entraînement tardif se lisent presque de la même façon au poignet.",
    },
    {
      q: "Que peut utilement montrer la tendance ?",
      a: "Lue comme un signal relatif, une petite hausse durable sur une ou deux nuits peut être un signe de maladie précoce et non spécifique, surtout aux côtés d'une fréquence cardiaque au repos en hausse et d'une variabilité de la fréquence cardiaque en baisse. Pour toute personne qui a ses règles, un décalage régulier sur une partie du mois reflète souvent la hausse de température de la phase lutéale. C'est une tendance face à vos propres nuits, honnête sur le peu que signifie une seule nuit.",
    },
  ],
};
export default FAQ;
