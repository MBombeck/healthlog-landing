export const FAQ: Record<string, { q: string; a: string }[]> = {
  "understanding-your-health-metrics": [
    {
      q: "Should I compare my health numbers to the normal range or to myself?",
      a: "Lead with your own baseline. For nearly every signal worth tracking the variation between people is far larger than your own day-to-day drift, so a number that looks unremarkable on a population chart can be a personal best or a warning for you. Use the published ranges only as a sanity check, not a scoreboard.",
    },
    {
      q: "Why shouldn't I react to a single health reading?",
      a: "Bodies are noisy. Heart rate variability swings about ten percent from one day to the next as pure noise, and body weight drifts a kilogram or two on fluid alone, so one high or low reading usually sits inside that normal scatter. The meaning lives in the direction of a rolling average over days and weeks, not in any single dot.",
    },
    {
      q: "Why do several of my metrics move together at once?",
      a: "They are all reporting on the same underlying systems from different angles. A poor night or alcohol tends to lift resting heart rate while lowering HRV; the onset of an infection nudges resting heart rate, breathing rate and temperature up together while HRV falls. Two or three signals moving the same way at once carries more confidence than any one alone.",
    },
    {
      q: "Are wearable health metrics a substitute for seeing a doctor?",
      a: "No. Resting heart rate, HRV, sleep scores and the rest are wellness cues, useful for noticing change and asking better questions, never a diagnosis. A wearable alert, such as an irregular-rhythm flag, is a prompt to screen, not a result. Talk to a clinician about anything that concerns you.",
    },
  ],
  "resting-heart-rate": [
    {
      q: "What is a normal resting heart rate?",
      a: "The classic adult range is 60 to 100 beats per minute, with endurance-trained people often sitting in the 40s to 60s. That band was drawn for clinical safety rather than optimal health, and large studies find risk climbing fairly steadily as resting rate rises, so the trend matters more than any single reading.",
    },
    {
      q: "When is the best time to measure resting heart rate?",
      a: "Ideally first thing in the morning, before you sit up, check your phone, or have any caffeine. Measuring under the same conditions every time is what makes the number comparable, so a consistent reading is worth far more than a more accurate one taken at random.",
    },
    {
      q: "Why did my resting heart rate suddenly go up for a few days?",
      a: "A sudden, unexplained rise of several beats that holds for a few days is the body quietly flagging something, often the onset of an infection, poor sleep stacked on stress, dehydration, alcohol the evening before, or too much training and not enough recovery. Caffeine, fever, heat, anxiety and some medications also push it up.",
    },
    {
      q: "When should I worry about my resting heart rate?",
      a: "A resting rate persistently above 100 with no obvious explanation, a low rate paired with light-headedness, fainting or breathlessness, or a recurring irregular pulse are worth raising with a clinician. An irregular-rhythm alert from a wearable is a prompt to screen, not a diagnosis; only an ECG can confirm a rhythm problem.",
    },
  ],
  "heart-rate-variability": [
    {
      q: "What is a good HRV?",
      a: "There is no universal good number. Between-person variation in HRV is huge, so your healthy baseline might be a third of someone else's healthy baseline and both are fine. HRV also falls steeply with age, and it depends on recording length and posture, so absolute values do not transfer across people or devices. Read your own trend, not a leaderboard.",
    },
    {
      q: "Why does my HRV change so much from night to night?",
      a: "HRV is extremely sensitive to conditions. Posture, breathing rate, time of day, the last meal, caffeine, illness, sleep and acute stress all move it, and alcohol suppresses it in a dose-dependent way. Single-night swings of about ten percent are routine and mean nothing on their own, which is why a rolling seven-day average is the honest unit to read.",
    },
    {
      q: "Why is my HRV low after drinking alcohol?",
      a: "Alcohol suppresses HRV in a dose-dependent way, strongest the night of and the morning after, often while heart rate and blood pressure still look perfectly normal. A one-night dip after a drink, a late dinner or a hard workout is expected and recovers on its own; logging the obvious confounders is what lets you tell that from a meaningful sustained decline.",
    },
    {
      q: "When does a low HRV actually matter?",
      a: "On its own HRV is too noisy to alarm on. It points somewhere when a sustained drop below your personal baseline arrives together with a rising resting heart rate and a higher overnight breathing rate, a soft early-warning of illness or overreach. A falling trend with symptoms such as breathlessness or palpitations, or repeated irregular-rhythm flags, is a reason to see a clinician.",
    },
  ],
  "reading-your-blood-pressure": [
    {
      q: "What do the two blood pressure numbers mean?",
      a: "The systolic number on top is the pressure in your arteries the instant the heart contracts and pushes blood out; the diastolic number underneath is the residual pressure while the heart relaxes and refills between beats. Both are measured in millimetres of mercury, and both carry risk independently, so neither one is the important one.",
    },
    {
      q: "What blood pressure counts as high?",
      a: "Both major guideline bodies agree hypertension as a disease begins at 140/90 in the office. They differ on the labels below it: the US framework calls 130 to 139 over 80 to 89 Stage 1 hypertension, while the European framework calls those same numbers merely elevated. Risk rises continuously from about 115/75 upward, with no clean line below which it vanishes.",
    },
    {
      q: "How do I measure my blood pressure correctly at home?",
      a: "Sit quietly for five minutes first, back supported and feet flat, with the arm resting at heart level and a correctly sized upper-arm cuff. Avoid caffeine, smoking and talking beforehand. Technique moves the number more than almost anything happening inside you that day, and out-of-office averages over several days are the trusted standard, with home hypertension reckoned at about 135/85.",
    },
    {
      q: "When is a high blood pressure reading an emergency?",
      a: "A single high reading is not an emergency; re-measure after a minute. If it stays at or above 180/120 without symptoms, contact your health professional promptly. If it is 180/120 or higher with chest pain, breathlessness, a neurological or vision change, or a severe headache, treat it as an emergency and call emergency services.",
    },
  ],
  "your-ecg-recordings": [
    {
      q: "What does a single-lead ECG actually measure?",
      a: "It records one channel of your heart's electrical activity — the small voltage difference between two points on your body — and draws it as a rhythm strip. A clinical ECG uses twelve such channels to see the heart from twelve angles; a wearable uses one, which is enough to show the rhythm and the rate but is a single view rather than the full picture.",
    },
    {
      q: "Can a watch ECG diagnose atrial fibrillation or a heart attack?",
      a: "No. An atrial-fibrillation result is a screening flag, not a confirmed diagnosis — guidelines treat a 30-second single-lead tracing as a reason to seek a formal ECG, not a replacement for one. And a single lead cannot detect a heart attack at all, because the changes that signal one appear on leads a wrist recording never captures. Chest pain or pressure is an emergency regardless of what the device shows.",
    },
    {
      q: "Does HealthLog interpret my ECG?",
      a: "No. HealthLog shows your imported recording on a familiar ECG grid and displays the result the recording device itself produced, carried across unchanged. It does not read the trace, score it, or offer a diagnosis of its own — the interpretation that matters is a clinician's.",
    },
    {
      q: "Why does my ECG say 'inconclusive'?",
      a: "An inconclusive result usually means the signal wasn't clean enough to classify — a loose contact, a cold hand, movement during the recording, or a heart rate outside the band the algorithm will label. It is common and rarely a sign that something is wrong; retake it warm, still and with good skin contact. Persistent inconclusive readings alongside symptoms are worth mentioning to a clinician.",
    },
  ],
  "sleep-consistency": [
    {
      q: "How many hours of sleep do adults actually need?",
      a: "National guidance puts adults aged 18 to 64 at 7 to 9 hours a night and older adults at 7 to 8, with a consensus floor of at least 7 hours regularly. The relationship is U-shaped rather than more-is-better: both habitually short and habitually very long sleep carry associated risk.",
    },
    {
      q: "Is sleep consistency more important than sleep duration?",
      a: "Both matter, and timing may matter as much as length. In a large cohort, the regularity of sleep timing predicted mortality at least as strongly as duration did, even after accounting for hours slept. Two people can log identical hours, and the one who logs them at the same time each night is doing measurably better.",
    },
    {
      q: "Can I catch up on lost sleep at the weekend?",
      a: "Only partly. Sleep debt is a rolling sum of nights that fell short, and recovery from it is partial and nonlinear, so one long weekend does not fully reverse several restricted nights. A consistent schedule beats trying to repay the debt in one go.",
    },
    {
      q: "Are the deep sleep and REM stages from my tracker accurate?",
      a: "Be skeptical of the stage breakdown. Consumer trackers estimate the deep, REM and light split with only fair-to-moderate agreement against the clinical lab standard, and they tend to overestimate how long you slept. Total sleep time and your bedtime are far more trustworthy than any deep-sleep percentage; treat the stages as a rough personal trend.",
    },
  ],
  "respiratory-rate": [
    {
      q: "What is a normal respiratory rate?",
      a: "The standard resting adult range is 12 to 20 breaths per minute. That band is wide, so where the number earns its keep is relative to your own usual figure rather than against the population range. Children breathe faster and trained endurance athletes tend to sit at the low end.",
    },
    {
      q: "Why is breathing rate measured overnight rather than during the day?",
      a: "Awake, respiratory rate is one of the most state-dependent numbers your body produces; talking, moving, emotion and even the awareness of being measured all shift it, so a daytime spot reading is almost meaningless. Asleep, those influences fall away and your overnight rate settles into a remarkably steady figure, which makes a genuine departure easy to see.",
    },
    {
      q: "What does it mean if my overnight breathing rate goes up?",
      a: "A sustained rise of roughly three breaths per minute above your own nightly figure can flag that something is developing, often before you feel unwell. The signal is infection-generic, telling you the body is working harder, not what is wrong. Ordinary things like a hard late workout, alcohol or a hot stuffy room can nudge it too.",
    },
    {
      q: "When is a breathing rate a medical emergency?",
      a: "A rate above 25 per minute alongside breathlessness, confusion or a low blood oxygen reading needs prompt medical attention. Slow, shallow breathing is the more dangerous direction, especially the respiratory depression caused by opioids or sedatives; if someone is breathing very slowly, is hard to wake, or has bluish lips, treat it as an emergency and call for help.",
    },
  ],
  "blood-oxygen-spo2": [
    {
      q: "What is a normal blood oxygen level?",
      a: "For a healthy adult breathing room air at sea level, SpO2 sits between 95 and 100 percent, with most readings clustered at 96 to 99. The floor moves with circumstances, so about 90 percent can be normal at altitude, and people with chronic lung disease live at a lower personal baseline. There is no prize above the band; higher is not better.",
    },
    {
      q: "Why is my wrist SpO2 reading low?",
      a: "A single low reading is more often an artefact than an emergency. Wrist sensors sit further from a pulsing arterial bed and contend with movement and a looser fit, and cold hands, a loose band, nail polish or ambient light will pull the number down. Retake it warm, still and well-perfused before you trust a dip.",
    },
    {
      q: "Can I use SpO2 to detect sleep apnoea?",
      a: "Repeated overnight desaturations are part of how sleep apnoea is screened, so a wearable flagging them can be an early hint, but it is not a diagnosis. Loud snoring with witnessed pauses or unrefreshing sleep with daytime sleepiness are worth raising with a clinician for proper assessment.",
    },
    {
      q: "Are pulse oximeters less accurate on darker skin?",
      a: "Yes. Pulse oximeters can overestimate true oxygen saturation in people with darker skin pigmentation, reporting a reassuring number while actual saturation is lower, a mismatch documented in hospital data and reviewed by US regulators. A normal-looking reading should never override breathlessness, confusion or the plain sense that something is wrong.",
    },
  ],
  "body-temperature-baseline": [
    {
      q: "Is 37 degrees Celsius still the normal body temperature?",
      a: "It is an old average that modern data has nudged down. A large review put the population mean at 36.59 C, with a normal oral range of roughly 35.7 to 37.4 C, wide enough that two healthy people can sit nearly two degrees apart. A reading of 36.7 C is squarely within normal, not below it.",
    },
    {
      q: "Why does my temperature change through the day?",
      a: "Temperature follows a circadian curve, swinging about half a degree between its lowest point in the small hours, roughly 4 to 8 a.m., and its peak in the early evening, around 6 to 8 p.m. An evening reading that looks slightly high is often just the normal daily peak, which is why you should compare readings taken at the same time of day and the same site.",
    },
    {
      q: "Is wearable skin temperature the same as body temperature?",
      a: "No. Skin temperature from a wearable is not core body temperature; it is the nightly deviation from your own multi-night baseline, with no authoritative clinical range. Used well it can hint at a sub-febrile shift before symptoms arrive, but any fever concern has to be confirmed against an actual oral reading.",
    },
    {
      q: "What temperature counts as a fever, and when should I seek care?",
      a: "A fever is an oral temperature of 38.0 C or higher. In adults the symptoms and how long they last usually matter more than the exact figure, but seek care around 39.4 C, or for any fever with breathlessness, chest pain, severe headache, confusion, a stiff neck or a rash. A fever in an infant under three months always needs urgent assessment.",
    },
  ],
  "blood-sugar-beyond-diabetes": [
    {
      q: "What is a normal fasting blood sugar?",
      a: "Under 100 mg/dL (under 5.6 mmol/L) is normal by the American Diabetes Association, with 100 to 125 the prediabetes band; the WHO opens prediabetes at 110 instead. Both share a diabetes threshold of 126 mg/dL or higher. A single abnormal reading never diagnoses anything; confirmation needs a repeat test on a separate day.",
    },
    {
      q: "What is the difference between a glucose reading and HbA1c?",
      a: "A fasting or post-meal glucose reading is a photograph, true for the instant it was sampled and easily nudged by last night's dinner or a cold coming on. HbA1c is a time-lapse, reflecting your average blood sugar over the roughly two to three month lifespan of a red blood cell. They are most useful read side by side.",
    },
    {
      q: "Why is my morning blood sugar higher after a bad night's sleep?",
      a: "Even one night of partial sleep deprivation measurably lowers insulin sensitivity, and glucose tolerance falls across the day so an identical meal spikes higher in the evening. A poor night or a late, heavy dinner is a plausible reason for an isolated next-morning anomaly, and not by itself evidence of anything.",
    },
    {
      q: "When is a blood sugar reading dangerous?",
      a: "A glucose under 70 mg/dL (under 3.9 mmol/L) is a hypoglycaemia alert; treat with fast-acting carbohydrate and re-check in 15 minutes, and under 54 mg/dL needs immediate action. Sustained very high glucose with thirst, frequent urination, vomiting, fast breathing or altered thinking warrants prompt care. These are not self-diagnoses; talk to a clinician.",
    },
  ],
  "vo2max-and-longevity": [
    {
      q: "What is VO2max and why does it matter?",
      a: "VO2max is the maximum rate at which your body can take in and use oxygen during hard exercise, measured in millilitres of oxygen per kilogram per minute. It captures the whole oxygen-delivery chain and is one of the strongest single predictors of how long you will live, with each fitness increment tied to a meaningfully lower risk of death.",
    },
    {
      q: "How accurate is the VO2max on my watch?",
      a: "Your wearable estimates rather than measures it, inferring a figure from the relationship between your heart rate and your pace, leaning on an assumed maximum heart rate. The absolute value may be a few points off, and terrain, heat and fit blur it further. The honest way to read it is as a trend line: a steady climb over weeks is real.",
    },
    {
      q: "What is a good VO2max for my age?",
      a: "VO2max is interpreted as a percentile within your own age and sex band, never against a fixed target. Men test roughly 15 to 20 percent higher than women at the same age, and fitness falls with age, so a value that is excellent at 60 would be unremarkable at 25. What matters more than where you sit is which direction you are moving.",
    },
    {
      q: "How do I improve my VO2max?",
      a: "Aerobic fitness rises with consistent training. The weekly target across the major guidelines is 150 to 300 minutes of moderate activity or 75 to 150 minutes of vigorous activity, plus muscle-strengthening at least twice a week, with recovery built in. Regular training roughly halves the natural age-related decline. Check with a clinician before starting vigorous exercise if you have been inactive or have a heart, lung or metabolic condition.",
    },
  ],
  "beyond-the-scale": [
    {
      q: "Why is BMI a limited measure of health?",
      a: "BMI is a cheap, repeatable adiposity proxy, but it cannot tell muscle from fat, so a muscular person can land in the overweight band while an older adult who has lost muscle sits comfortably in normal. It also ignores where fat sits, and its cut-offs were drawn from mostly European populations and carry higher risk at lower BMI for people of South and East Asian descent.",
    },
    {
      q: "Why does where I carry fat matter more than my weight?",
      a: "Fat around the waist, packed among the abdominal organs, is metabolically far more harmful than fat on the hips and thighs and predicts diabetes, hypertension and cardiovascular risk independently of BMI. A simple rule of thumb that travels well across sexes and ancestries is to keep your waist under half your height.",
    },
    {
      q: "Why does my weight jump up overnight?",
      a: "Body weight swings one to two kilograms across a normal day and from one day to the next on hydration, food still in transit and salt alone, none of it fat. Watch a seven-day moving average and the noise cancels out, leaving the line that actually means something. The same applies to a body-fat percentage from a scale.",
    },
    {
      q: "How much weight do I need to lose to improve my health?",
      a: "In adults with overweight or obesity, a sustained loss of just 5 to 10 percent of body weight meaningfully improves blood sugar, blood pressure and lipids, a far better target than any single figure on the dial. Modest, sustained change is the goal worth chasing rather than a dramatic number.",
    },
  ],
  "tracking-mood": [
    {
      q: "What is the point of tracking my mood?",
      a: "One entry is an opinion; a few hundred entries are a trend, and a trend is data. Logged consistently over weeks, a simple mood scale surfaces patterns no single day reveals, such as a slow drift down across a stressful stretch, the reliable lift after exercise, or a dip that arrives on a predictable monthly schedule.",
    },
    {
      q: "How should I record my mood for it to be useful?",
      a: "Consistency is the single most useful habit: same scale, same time of day, every day. Self-report is sensitive to time of day, recent events and how you slept, so a one-off reading is noisy. Measured the same way, the day-to-day wobble averages out and the underlying direction becomes legible.",
    },
    {
      q: "What is a concerning score on a mood questionnaire?",
      a: "On the validated screens, a WHO-5 at or below 50 percent indicates poor wellbeing, and a PHQ-9 or GAD-7 total of 10 or above is the standard action threshold. These are concordant, well-established screens, but a positive result is a prompt to talk to a professional, not a diagnosis you can make at home.",
    },
    {
      q: "When should a low mood prompt me to reach out for help?",
      a: "When it persists: a downward trend that holds for two weeks or more, or that starts getting in the way of everyday life, is a reason to talk to a doctor or mental-health professional, and you do not need to wait until it feels severe. Any thought of harming yourself is on its own a reason to contact your local emergency number or a crisis service immediately.",
    },
  ],
  "the-cycle-as-a-vital-sign": [
    {
      q: "Why is the menstrual cycle considered a vital sign?",
      a: "Professional bodies ask clinicians to treat the cycle the way they treat pulse, blood pressure and temperature, because it is a recurring rhythm that holds steady when things are well and so a shift in it carries information. Cycle length and regularity are an accessible window on reproductive and overall health.",
    },
    {
      q: "What is a normal menstrual cycle length?",
      a: "Two reputable ranges both count. The patient-facing band describes everyday healthy adult cycles as 21 to 35 days, while the clinical screening frame is 24 to 38 days. Variation of about a week from month to month is ordinary, and the luteal phase is the relatively constant anchor, with most length variation living in the follicular phase.",
    },
    {
      q: "Can I rely on a cycle-tracking app for birth control?",
      a: "No. Algorithmic cycle predictions from any app, wearable or device are not a contraceptive method. Population-default predictions are unreliable, ovulation timing varies widely even in regular cyclers, and perimenopause makes cycles unpredictable again. Anyone using fertility awareness should use a validated, properly instructed method, not a single predicted date.",
    },
    {
      q: "When should I see a doctor about my cycle?",
      a: "Raise it with a clinician when cycles consistently fall outside the typical range, with intervals shorter than about 21 days or longer than about 45, or there is a marked sustained change from your own pattern. A gap of 90 days or more, bleeding lasting more than 7 days or soaking a pad more often than every one to two hours, and bleeding between periods all warrant evaluation.",
    },
  ],
  "how-wearables-measure-you": [
    {
      q: "How does a wearable measure my heart rate?",
      a: "Most use photoplethysmography: a green LED shines light into the skin, blood absorbs some of it, and a sensor counts the pulses as blood volume rises and falls with each beat. It works well at rest but struggles with movement, which is why wrist heart rate during intervals or weightlifting is the least reliable reading most people own. A chest strap stays accurate through motion.",
    },
    {
      q: "How does my watch know my sleep stages?",
      a: "It does not see your brain. It infers sleep from how little you move, often combined with heart rate and its beat-to-beat variation, then labels the night into light, deep and REM. Against the clinical lab standard, devices are fairly good at asleep-or-awake and considerably weaker at which stage, so read the bedtime and total duration with confidence and treat the coloured stages as an estimate.",
    },
    {
      q: "Are wearable readings accurate?",
      a: "Most of what a wearable shows you is an estimate, not a lab measurement. Optical heart rate, inferred sleep stages, wrist SpO2 and every recovery or readiness score are models built on a few real signals, accurate enough to reveal change over time but rarely precise enough to treat a single value as ground truth. Read them as relative, not absolute.",
    },
    {
      q: "What are recovery and readiness scores actually measuring?",
      a: "They are not measured at all; they are proprietary models that blend raw sensor streams, typically overnight HRV, resting heart rate and sleep, with your age, weight and history to produce a single figure. They have no clinical reference range and are not standardised across devices, so read them as a daily nudge, not a clinical measurement.",
    },
  ],
  "reading-your-trends": [
    {
      q: "Why is my own baseline better than the normal range?",
      a: "A reference band is built to flag the small fraction of people who sit far outside the typical spread; it was never designed to tell you whether today is a good day. Because between-person variation is large, a resting heart rate of 58 looks unremarkable against the textbook band but is a clear six-beat rise if your baseline is 52, a change the population range completely hides.",
    },
    {
      q: "How do I tell a real signal from random noise?",
      a: "Noise is a reading near the edge of your usual range, or a small move that reverts the next day. Signal is a direction that persists: a multi-day shift well beyond your usual spread, or a slow drift in the rolling average over weeks. A rolling average smooths the scatter, and a change several times larger than your usual day-to-day wobble is worth attending to.",
    },
    {
      q: "How long before a baseline is reliable?",
      a: "One measurement is a dot with no context. A new signal needs a couple of weeks of consistent readings before a single number means anything, because only then has the daily noise averaged out into a baseline you can actually lean on.",
    },
    {
      q: "Why does measuring under the same conditions matter so much?",
      a: "A trend is only honest if the conditions behind it stay constant. Resting heart rate on waking sits well below the same rate after coffee and stairs, and weight before breakfast runs a kilogram under the same body after dinner. A slightly imperfect device used the same way every day outperforms a better one used haphazardly.",
    },
  ],
  "steps-and-movement": [
    {
      q: "Where did the 10,000 steps target come from?",
      a: "It was never a finding. It traces to a Japanese pedometer marketed around the 1964 Tokyo Olympics whose name meant ten-thousand-step meter, chosen partly because the character for 10,000 resembles a walking person and partly because it was a memorable round number to sell a device. Treat it as folklore, not a guideline.",
    },
    {
      q: "How many steps a day do I actually need?",
      a: "Most of the mortality benefit is captured well below 10,000. Studies show death rates falling as steps rise, with the curve flattening somewhere around 6,000 to 8,000 steps a day for older adults and 8,000 to 10,000 for younger ones. The curve flattens, it does not reverse, so walking more is not a problem, it just adds less per step.",
    },
    {
      q: "Is it better to walk all at once or throughout the day?",
      a: "Spreading movement through the day helps. Prolonged uninterrupted sitting is increasingly treated as its own risk factor, somewhat independent of whether you also exercise, which is why current guidance pairs move more with sit less. A few minutes of walking every hour, the stairs, and a walk after meals all add up.",
    },
    {
      q: "What does a step count not tell me about my health?",
      a: "It is a volume meter, not a fitness test. It says nothing about intensity or strength, cannot distinguish a brisk uphill mile from slow steps around the kitchen, and does not measure cardiorespiratory fitness, one of the strongest predictors of long-term health. Steps belong in a panel alongside other signals, not on a pedestal.",
    },
  ],
  "caffeine-alcohol-and-your-readings": [
    {
      q: "How does caffeine affect my heart rate and blood pressure?",
      a: "Caffeine blocks adenosine and lets the sympathetic accelerator run freer, so heart rate ticks up and blood pressure rises transiently, an effect most pronounced in people who do not drink it regularly. A coffee an hour before you measure can nudge both your resting heart rate and blood pressure upward enough to notice.",
    },
    {
      q: "Does afternoon coffee really affect my sleep?",
      a: "Often more than you can feel. Caffeine's half-life is commonly around five hours, so an afternoon cup still has half its dose circulating at bedtime. In a controlled study, a dose equivalent to a strong coffee taken six hours before bed measurably reduced total sleep time, even though participants underestimated the disruption.",
    },
    {
      q: "Why is my HRV low and heart rate high after drinking?",
      a: "As the body clears alcohol overnight the sympathetic side stays switched on, so resting heart rate runs elevated and HRV drops, with larger amounts producing larger and longer-lasting effects. This is why a single glass with dinner can quietly flatten your recovery score while you sleep through the whole thing.",
    },
    {
      q: "Does this mean I should give up caffeine and alcohol?",
      a: "Not necessarily. The value is attribution, not abstinence. Watching your own data shows how late is too late for caffeine before your sleep frays and how much alcohol it takes before your overnight heart rate climbs, so you stop mistaking a predictable, temporary dip for a sign that something is wrong.",
    },
  ],
  "hydration-and-your-body": [
    {
      q: "Do I really need eight glasses of water a day?",
      a: "There is no strong scientific basis for a universal eight-glasses rule; reviews tracing the claim found no credible evidence behind it. Authoritative bodies give population reference values for total water from all sources, roughly 2 to 2.7 litres a day for women and 2.5 to 3.7 for men, and stress that needs vary widely with body size, activity, climate and diet.",
    },
    {
      q: "How do I know if I am drinking enough?",
      a: "For most healthy people on an ordinary day, the body's own signals are reasonable guides. Thirst is a real, functioning sensor, and drinking to thirst keeps most healthy adults adequately hydrated. Urine colour is a rough at-home check: pale straw suggests you are fine, consistently dark suggests you could drink more.",
    },
    {
      q: "Why does dehydration raise my heart rate?",
      a: "When you lose enough fluid that blood volume drops, the heart compensates by beating faster to keep circulation steady, so dehydration nudges resting and exertion heart rate upward. Even mild fluid deficits of one to two percent of body mass are enough to dent mood, raise the sense of effort and impair concentration.",
    },
    {
      q: "Can you drink too much water?",
      a: "Yes. Drinking far beyond need, most often during endurance events, can dilute blood sodium into a dangerous condition called hyponatraemia, whose early signs overlap with dehydration. Anyone with heart, kidney or liver disease, or on medication affecting fluid balance, may have a deliberately restricted target and should follow clinical advice over any general rule.",
    },
  ],
  "stress-and-recovery": [
    {
      q: "How does stress show up in my health data?",
      a: "Stress is the sympathetic accelerator held down, and it feeds many metrics from one dial, so they move together. Resting heart rate rises, overnight HRV falls, sleep gets lighter and more broken, and breathing rate is sometimes elevated. No one signal is decisive, but read as a cluster against your own baseline they are hard to argue with.",
    },
    {
      q: "What is the difference between acute and chronic stress?",
      a: "Acute stressors like a hard workout or a deadline shift the metrics, and given a night or two of genuine rest everything returns to baseline; that rebound is the point. The concern is when the rebound stops coming and the body pays the cumulative cost of allostatic load, read in the data as a baseline that has quietly shifted and stayed shifted.",
    },
    {
      q: "Is recovery just the absence of stress?",
      a: "No. Recovery is an active parasympathetic process, the vagal brake re-engaging, heart rate falling and deep sleep doing the repair work, which is why it shows up as a positive signal rather than numbers merely going quiet. That means it can be supported, not just waited for, through protected regular sleep, easy aerobic movement and daylight.",
    },
    {
      q: "When should I take ongoing stress seriously?",
      a: "These signals can flag sustained strain but cannot tell you why, and they are no substitute for how you feel. Stress that disrupts your sleep, concentration or enjoyment of ordinary things for weeks is worth talking through with a doctor or mental-health professional, whatever the numbers say. If distress ever feels overwhelming or you have thoughts of self-harm, contact your local emergency number or a crisis service right away.",
    },
  ],
  "screening-not-diagnosis": [
    {
      q: "Is a high PHQ-9 or GAD-7 score a diagnosis?",
      a: "No. These are screening instruments, not diagnostic tests. A score crossing its threshold means the screen is positive and a closer conversation is warranted, not that a condition is confirmed. Even at a PHQ-9 cut-off of 10, roughly one in eight people who screen positive will not have major depression on fuller assessment, which is why a positive result is a prompt to talk to a professional rather than a verdict you render yourself.",
    },
    {
      q: "What score on the PHQ-9 or GAD-7 should prompt action?",
      a: "A total of 10 or above is the standard action threshold for both: about 88% sensitivity and specificity for major depression on the PHQ-9, and about 89% sensitivity and 82% specificity for generalised anxiety on the GAD-7. The WHO-5 flags poor wellbeing at or below 50%. These are starting points for a professional assessment, not labels to assign yourself.",
    },
    {
      q: "Why should I repeat a screening questionnaire instead of doing it once?",
      a: "A single sitting is a noisy snapshot, sensitive to how you slept, recent events and how the questions land that day. Repeated over weeks and months, the same scored questions become a trend you and a clinician can act on, and the WHO-5 is explicitly designed to be read as movement against your own earlier scores, with a 10-point fall counting as a meaningful change. Repeat administration is also how these tools track whether a treatment is working.",
    },
    {
      q: "What is the PHQ-9 item about self-harm, and what should I do?",
      a: "The ninth PHQ-9 question asks directly about thoughts of being better off dead or of harming yourself, and it is read on its own, immediately, regardless of the total score — a low overall score never cancels it out. Any such thought, even occasional, is on its own a reason to reach out right now: contact your local emergency number or a crisis service immediately. These feelings are treatable and help is available.",
    },
  ],
  "longevity-labs-explained": [
    {
      q: "Why isn't a standard cholesterol panel enough?",
      a: "A basic panel measures the mass of cholesterol being carried, but cardiovascular risk tracks the number of atherogenic particles, and the cholesterol per particle varies between people. ApoB is a direct particle count and non-HDL cholesterol is a cheap proxy for the same idea, so two people with identical LDL-C can carry very different risk. The basic panel is also silent on Lp(a) and on inflammation.",
    },
    {
      q: "What is Lp(a) and why is it measured only once?",
      a: "Lipoprotein(a) is an LDL-like particle whose level is roughly 80 to 90 percent genetically set and barely moves with diet, exercise or standard statins. Because it is so stable, the guidance is to measure it once in a lifetime to find the minority carrying an elevated inherited cardiovascular risk. A high level doesn't mean something is acutely wrong; it shifts your baseline risk and raises the priority of every lever you can move.",
    },
    {
      q: "What does hs-CRP tell me, and why repeat it?",
      a: "High-sensitivity CRP reads the low-grade inflammation that accompanies atherosclerosis, in cardiovascular tertiles of under 1, 1 to 3, and over 3 mg/L. Because any cold or flare moves it, it is taken as the average of two measurements at least two weeks apart and away from illness, and a value above 10 mg/L is set aside as likely acute inflammation and repeated. It is a risk modifier layered onto the lipid picture, not a standalone number.",
    },
    {
      q: "Should I interpret my lab results myself?",
      a: "No. These markers interact, the guideline bands disagree at the edges, and a single value sits inside a band of biological and analytical noise, so the honest test of a real change is the reference change value across repeated tests, not whether one result crossed a threshold. A panel is interpreted as a whole, against your personal risk and history, by the clinician who ordered it. Treat an out-of-range value as a reason to ask a question.",
    },
  ],
  "waist-and-central-fat": [
    {
      q: "Why does waist circumference matter more than weight?",
      a: "Where you store fat carries more information than how much you weigh. Visceral fat, wrapped around the abdominal organs, releases fatty acids and inflammatory signals that drive insulin resistance, higher blood pressure and an adverse lipid profile, while subcutaneous fat on the hips and thighs is largely inert. Waist circumference is a simple proxy for the visceral compartment and predicts cardiometabolic risk independently of BMI.",
    },
    {
      q: "What is the waist-to-height ratio rule?",
      a: "Keep your waist under half your height. It needs no chart, works across heights, sexes and ancestries where fixed waist thresholds do not, and a large meta-analysis found it a better predictor of cardiometabolic risk than BMI or waist circumference alone. A ratio at or above 0.5 is the practical flag to look at the rest of the picture.",
    },
    {
      q: "How do I measure my waist correctly?",
      a: "Measure at the midpoint between your lowest rib and the top of your hip bone, not at the navel by reflex, with the tape snug but not compressing the skin and taken at the end of a normal breath out. Measure the same way every time, because an inconsistent method invents changes that aren't there. A soft tape used consistently beats an expensive scale used carelessly.",
    },
    {
      q: "Do waist thresholds differ by ethnicity?",
      a: "Yes. The common cut-offs of over 94 and 102 cm for men and over 80 and 88 cm for women were drawn largely from European-origin populations. People of South and East Asian descent carry higher cardiometabolic risk at lower waists, so the thresholds shift down, commonly to around 90 cm for men and 80 cm for women. The waist-to-height rule travels better across populations.",
    },
  ],
  "grip-strength-as-a-vital-sign": [
    {
      q: "Why does grip strength predict health?",
      a: "Grip is a faithful, low-effort proxy for whole-body strength, muscle mass and the neuromuscular system that drives them. When that system declines through ageing, inactivity or illness, grip declines with it, making a falling grip one of the first measurable signs of sarcopenia. In the PURE study of nearly 140,000 people it predicted all-cause and cardiovascular mortality better than systolic blood pressure did.",
    },
    {
      q: "What is a good grip strength for my age?",
      a: "Grip is read against your own age and sex, never a fixed target. It peaks in early adulthood (roughly 46 to 51 kg for men and 28 to 31 kg for women), plateaus in the thirties and declines from mid-life, so a value that is unremarkable at 30 can be excellent at 70. European working groups flag probable sarcopenia below about 27 kg for men and 16 kg for women, which is a prompt for assessment, not a fitness score.",
    },
    {
      q: "How do I measure grip strength consistently?",
      a: "Use the same dynamometer each time, seated with the elbow bent at a right angle, taking two or three maximal squeezes per hand with a short rest and recording the best. Watch the rolling trend across months rather than any single reading: grip dips with fatigue, a recent hard workout, a hand injury or simply a different device, so compare like with like.",
    },
    {
      q: "How do I improve my grip strength?",
      a: "Grip and the whole-body strength it proxies respond to resistance training, not to squeezing a ball. The major activity guidelines recommend muscle-strengthening activity for all main muscle groups on at least two days a week, alongside aerobic activity, and this is the most reliable lever for building and preserving strength across the lifespan. Check with a clinician first if you have been inactive or have a relevant condition.",
    },
  ],
  "weather-altitude-and-your-body": [
    {
      q: "Why is my resting heart rate higher in hot weather?",
      a: "When you are warm, your body sends blood to the skin to shed heat, so the heart pumps harder and faster to keep circulation steady. A hot day or a warm bedroom can lift resting and exertion heart rate by several beats with no change in fitness. Heat also fragments sleep, because falling asleep depends on your core temperature dropping, which a warm room blunts.",
    },
    {
      q: "Is a lower blood oxygen reading normal at altitude?",
      a: "Yes. Higher up, the air holds the same fraction of oxygen at lower pressure, so each breath delivers less and blood oxygen falls — around 90 percent can be entirely normal at about 2,500 m — while breathing rate and heart rate rise to compensate. Over a few days, acclimatisation partly settles the numbers. A worsening headache with nausea, breathlessness at rest or confusion is different: those are warning signs of altitude illness and a reason to descend.",
    },
    {
      q: "Can air quality affect my health readings?",
      a: "Fine particulate matter, PM2.5, is small enough to reach deep into the lungs and cross into the bloodstream, and exposure is linked to higher cardiorespiratory strain, raised inflammation and higher blood pressure, with risk climbing across the whole exposure range. On a high-pollution day a quicker breathing rate or a poorer recovery score can have an outdoor cause, especially after exercising in it.",
    },
    {
      q: "How should I read my data when the environment changes?",
      a: "Log the context — a heatwave, a trip to altitude, a smoky or smoggy day — the same way you would log a late dinner or a hard workout, so a single environment-driven reading isn't mistaken for a developing problem. The signal worth attending to is a sustained drift that holds once conditions return to normal. Heat illness and altitude illness, though, are emergencies to act on by how you feel, not by a wearable.",
    },
  ],
};
export default FAQ;
