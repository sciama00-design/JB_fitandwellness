-- Full population of exercise_library with Italian translations (Batch 6)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  '0ad3e309-43e9-4a21-8f84-db03d8515ee3', 
  'One-Arm Open Palm Kettlebell Clean', 
  'One-Arm Open Palm Kettlebell Clean', 
  'Place one kettlebell between your feet.
Grab the handle with one hand and raise the kettlebell rapidly, let it flip so that the ball of the kettlebell lands in the palm of your hand.
Throw the kettlebell out in front of you and catch the handle with one hand.
Take the kettlebell to the floor and repeat. Make sure to work both arms.', 
  'Posiziona una kettlebell tra i piedi. Afferra l''impugnatura con una mano e solleva la kettlebell rapidamente, lasciandola ruotare in modo che la sfera della kettlebell atterri sul palmo della mano. Lancia la kettlebell in avanti e riprendi l''impugnatura con la mano. Riporta la kettlebell a terra e ripeti. Assicurati di allenare entrambe le braccia.', 
  'hamstrings', 
  'forearms', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Open_Palm_Kettlebell_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Open_Palm_Kettlebell_Clean/1.jpg'], 
  NOW()
),
(
  'fb72755e-e483-42e5-87a0-e4403038c087', 
  'One-Arm Overhead Kettlebell Squats', 
  'One-Arm Overhead Kettlebell Squats', 
  'Clean and press a kettlebell with one arm. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so. Press the weight overhead by extending through the elbow.This will be your starting position.
Looking straight ahead and keeping a kettlebell locked out above you, flex the knees and hips and lower your torso between your legs, keeping your head and chest up.
Pause at the bottom position for a second before rising back to the top, driving through the heels of your feet.', 
  'Esegui un Clean e un Press con una kettlebell utilizzando un solo braccio. Porta la kettlebell alla spalla estendendo gambe e anche mentre tiri la kettlebell verso di te, ruotando il polso. Spingi il peso sopra la testa estendendo il gomito: questa è la posizione di partenza. Guardando dritto davanti a te e mantenendo la kettlebell bloccata sopra la testa, fletti ginocchia e anche e abbassa il busto tra le gambe, mantenendo testa e petto alti. Fermati nella posizione bassa per un secondo prima di risalire, facendo forza sui talloni.', 
  'quadriceps', 
  'calves', 
  'kettlebells', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Overhead_Kettlebell_Squats/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Overhead_Kettlebell_Squats/1.jpg'], 
  NOW()
),
(
  '9724a03c-9268-414c-b1a7-4550e220eac5', 
  'One-Arm Side Deadlift', 
  'One-Arm Side Deadlift', 
  'Stand to the side of a barbell next to its center. Bend your knees and lower your body until you are able to reach the barbell.
Grasp the bar as if you were grabbing a briefcase (palms facing you since the bar is sideways). You may need a wrist wrap if you are using a significant amount of weight. This is your starting position.
Use your legs to help lift the barbell up while exhaling. Your arms should extend fully as bring the barbell up until you are in a standing position.
Slowly bring the barbell back down while inhaling. Tip: Make sure to bend your knees while lowering the weight to avoid any injury from occurring.
Repeat for the recommended amount of repetitions.
Switch arms and repeat the movement.', 
  'Posizionati lateralmente rispetto al centro di un bilanciere. Fletti le ginocchia e abbassati fino a raggiungere il bilanciere. Afferra la sbarra come se stessi impugnando una valigetta (i palmi rivolti verso di te poiché la sbarra è trasversale). Potrebbe essere necessario l''uso di fasce per i polsi se utilizzi un carico elevato. Questa è la posizione di partenza. Usa le gambe per sollevare il bilanciere espirando. Le braccia devono estendersi completamente mentre sollevi il carico fino a trovarti in posizione eretta. Torna lentamente verso il basso inspirando. Consiglio: Assicurati di flettere le ginocchia durante la discesa per evitare infortuni. Ripeti per il numero di ripetizioni consigliato, poi cambia braccio.', 
  'quadriceps', 
  'abdominals', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Side_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Side_Deadlift/1.jpg'], 
  NOW()
),
(
  '1208f197-844c-4baf-ad05-ecdc37135295', 
  'One-Arm Side Laterals', 
  'One-Arm Side Laterals', 
  'Pick a dumbbell and place it in one of your hands. Your non lifting hand should be used to grab something steady such as an incline bench press. Lean towards your lifting arm and away from the hand that is gripping the incline bench as this will allow you to keep your balance.
Stand with a straight torso and have the dumbbell by your side at arm''s length with the palm of the hand facing you. This will be your starting position.
While maintaining the torso stationary (no swinging), lift the dumbbell to your side with a slight bend on the elbow and your hand slightly tilted forward as if pouring water in a glass. Continue to go up until you arm is parallel to the floor. Exhale as you execute this movement and pause for a second at the top.
Lower the dumbbell back down slowly to the starting position as you inhale.
Repeat for the recommended amount of repetitions.
Switch arms and repeat the exercise.', 
  'Afferra un manubrio con una mano. Usa l''altra mano per reggerti a un supporto stabile, come una panca inclinata. Inclinati verso il braccio che solleva il peso, allontanandoti dalla mano che poggia sulla panca per mantenere l''equilibrio. Resta con il busto dritto e il manubrio lungo il fianco, palmo rivolto verso di te. Mantieni il busto fermo (senza oscillare) e solleva il manubrio lateralmente con il gomito leggermente flesso e la mano leggermente inclinata in avanti, come se stessi versando acqua da una brocca. Continua finché il braccio non è parallelo al pavimento. Espira durante il sollevamento e fai una pausa di un secondo in alto. Scendi lentamente inspirando. Ripeti per il numero di ripetizioni previsto, poi cambia braccio.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Side_Laterals/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Side_Laterals/1.jpg'], 
  NOW()
),
(
  '455ade7f-3537-43a6-acd8-687d267b8095', 
  'One-Legged Cable Kickback', 
  'One-Legged Cable Kickback', 
  'Hook a leather ankle cuff to a low cable pulley and then attach the cuff to your ankle.
Face the weight stack from a distance of about two feet, grasping the steel frame for support.
While keeping your knees and hips bent slightly and your abs tight, contract your glutes to slowly "kick" the working leg back in a semicircular arc as high as it will comfortably go as you breathe out. Tip: At full extension, squeeze your glutes for a second in order to achieve a peak contraction.
Now slowly bring your working leg forward, resisting the pull of the cable until you reach the starting position.
Repeat for the recommended amount of repetitions.
Switch legs and repeat the movement for the other side.', 
  'Aggancia una cavigliera a un cavo basso e fissala alla caviglia. Posizionati a circa 60 cm dal pacco pesi, afferrando il telaio per supporto. Mantenendo ginocchia e anche leggermente flesse e gli addominali contratti, contrai i glutei per "calciare" lentamente la gamba all''indietro, seguendo un arco semicircolare il più in alto possibile, espirando. Consiglio: alla massima estensione, contrai i glutei per un secondo per massimizzare la contrazione. Torna lentamente in avanti, resistendo alla trazione del cavo fino alla posizione iniziale. Ripeti per le ripetizioni previste, poi cambia gamba.', 
  'glutes', 
  'hamstrings', 
  'cable', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Legged_Cable_Kickback/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Legged_Cable_Kickback/1.jpg'], 
  NOW()
),
(
  'd5dece0f-468c-40a3-b0d5-5ec9b0caf689', 
  'One Arm Against Wall', 
  'One Arm Against Wall', 
  'From a standing position, place a bent arm against a wall or doorway.
Slowly lean toward your arm until you feel a stretch in your lats.', 
  'In posizione eretta, appoggia un braccio flesso contro una parete o lo stipite di una porta. Inclinati lentamente verso il braccio finché non avverti uno stretching dei dorsali.', 
  'lats', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Against_Wall/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Against_Wall/1.jpg'], 
  NOW()
),
(
  '4ac4c319-e309-4cb4-bf93-bcf1fdba927d', 
  'One Arm Chin-Up', 
  'One Arm Chin-Up', 
  'For this exercise, start out by placing a towel around a chin up bar.
Grab the chin-up bar with your palm facing you. One hand will be grabbing the chin-up bar and the other will be grabbing the towel.
Bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.v
Pull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.
After a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.
Repeat this motion for the prescribed amount of repetitions.
Switch arms and repeat the movement.', 
  'Per questo esercizio, posiziona un asciugamano attorno a una sbarra per trazioni. Afferra la sbarra con il palmo rivolto verso di te; una mano afferra la sbarra e l''altra l''asciugamano. Porta il busto indietro di circa 30 gradi inarcando leggermente la zona lombare e spingendo il petto in fuori. Tira il busto verso l''alto finché la sbarra non tocca la parte alta del petto, spingendo spalle e braccia verso il basso e indietro. Espira durante la salita. Consiglio: concentrati sulla contrazione dei muscoli dorsali una volta raggiunta la massima altezza. Il busto deve rimanere fermo nello spazio e muoversi solo tramite le braccia. Gli avambracci non devono fare altro che reggere la presa. Dopo un secondo di contrazione, inspira e scendi lentamente fino a estensione completa delle braccia. Ripeti e cambia braccio.', 
  'middle back', 
  'biceps', 
  'other', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Chin-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Chin-Up/1.jpg'], 
  NOW()
),
(
  'c438a343-9c70-4482-a91f-b1e94a8289db', 
  'One Arm Dumbbell Bench Press', 
  'One Arm Dumbbell Bench Press', 
  'Lie down on a flat bench with a dumbbell in one hand on top of your thigh.
By using your thigh to help you get the dumbbell up, clean the dumbbell up so that you can hold it in front of you at shoulder width. Use the hand you are not lifting with to help position the dumbbell over you properly.
Once at shoulder width, rotate your wrist forward so that the palm of your hand is facing away from you. This will be your starting position.
Bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbell at all times. Tip: Use the hand that you are not lifting with to help keep the dumbbell balance as you may struggle a bit at first. Only use your non-lifting hand if it is needed. Otherwise, keep it resting to the side.
As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions of your training program.
Switch arms and repeat the movement.', 
  'Sdraiati su una panca piana con un manubrio in mano appoggiato sulla coscia. Usa la spinta della coscia per portare il manubrio in posizione, tenendolo davanti a te alla larghezza della spalla. Usa la mano libera per stabilizzarlo. Ruota il polso in avanti in modo che il palmo sia rivolto in avanti. Questa è la posizione di partenza. Scendi lentamente verso il fianco inspirando, mantenendo il pieno controllo del manubrio. Consiglio: usa la mano libera per bilanciare il manubrio se necessario. Espirando, spingi il manubrio verso l''alto usando i pettorali. Blocca il braccio in alto, contrai il petto, mantieni per un secondo e scendi lentamente. La fase di discesa dovrebbe durare il doppio di quella di salita. Ripeti e cambia braccio.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Dumbbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Dumbbell_Bench_Press/1.jpg'], 
  NOW()
),
(
  'f2e226b6-8e27-4c1c-946a-2e72a923ebfc', 
  'One Arm Dumbbell Preacher Curl', 
  'One Arm Dumbbell Preacher Curl', 
  'Grab a dumbbell with the right arm and place the upper arm on top of the preacher bench or the incline bench. The dumbbell should be held at shoulder length. This will be your starting position.
As you breathe in, slowly lower the dumbbell until your upper arm is extended and the biceps is fully stretched.
As you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the dumbbell is at shoulder height. Again, remember that to ensure full contraction you need to bring that small finger higher than the thumb.
Squeeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.
Switch arms and repeat the movement.', 
  'Afferra un manubrio con il braccio destro e appoggia la parte superiore del braccio sulla panca Scott o su una panca inclinata. Il manubrio deve essere tenuto all''altezza della spalla. Questa è la posizione di partenza. Inspira e abbassa lentamente il manubrio finché il braccio non è esteso e il bicipite completamente allungato. Espira e contrai il bicipite per sollevare il peso finché il bicipite non è contratto e il manubrio all''altezza della spalla. Per una contrazione completa, assicurati che il mignolo sia più in alto del pollice. Contrai intensamente il bicipite per un secondo, poi ripeti. Cambia braccio.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Dumbbell_Preacher_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Dumbbell_Preacher_Curl/1.jpg'], 
  NOW()
),
(
  '52ccff1b-b28a-456a-97df-5cd90b0c20a9', 
  'One Arm Floor Press', 
  'One Arm Floor Press', 
  'Lie down on a flat surface with your back pressing against the floor or an exercise mat. Make sure your knees are bent.
Have a partner hand you the bar on one hand. When starting, your arm should be just about fully extended, similar to the starting position of a barbell bench press. However, this time your grip will be neutral (palms facing your torso).
Make sure the hand you are not using to lift the weight is placed by your side.
Begin the exercise by lowering the barbell until your elbow touches the ground. Make sure to breathe in as this is the eccentric (lowering part of the exercise).
Then start lifting the barbell back up to the original starting position. Remember to breathe out during the concentric (lifting part of the exercise).
Repeat until you have performed your recommended repetitions.
Switch arms and repeat the movement.', 
  'Sdraiati su una superficie piana con la schiena a terra o su un tappetino. Tieni le ginocchia flesse. Fatti passare il bilanciere da un partner. Il braccio deve essere quasi completamente esteso, come nella posizione di partenza di una panca piana, ma con presa neutra (palmi rivolti verso il busto). Tieni l''altra mano lungo il fianco. Inizia l''esercizio abbassando il bilanciere finché il gomito non tocca terra. Inspira durante questa fase eccentrica. Risali fino alla posizione di partenza espirando durante la fase concentrica. Ripeti per le ripetizioni consigliate, poi cambia braccio.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Floor_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Floor_Press/1.jpg'], 
  NOW()
),
(
  '774c25be-bfa7-496a-a433-1bbf191e36b3', 
  'One Arm Lat Pulldown', 
  'Lat Pulldown a un braccio', 
  'Select an appropriate weight and adjust the knee pad to help keep you down. Grasp the handle with a pronated grip. This will be your starting position.
Pull the handle down, squeezing your elbow to your side as you flex the elbow.
Pause at the bottom of the motion, and then slowly return the handle to the starting position.
For multiple repetitions, avoid completely returning the weight to keep tension on the muscles being worked.', 
  'Seleziona un peso adeguato e regola il supporto per le ginocchia per aiutarti a mantenere la posizione. Afferra la maniglia con una presa prona. Questa sarà la tua posizione di partenza. Tira la maniglia verso il basso, avvicinando il gomito al fianco mentre fletti il braccio. Fai una pausa nella parte inferiore del movimento, quindi ritorna lentamente alla posizione iniziale. Per le ripetizioni successive, evita di riappoggiare completamente il peso per mantenere la tensione sui muscoli coinvolti.', 
  'lats', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Lat_Pulldown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Lat_Pulldown/1.jpg'], 
  NOW()
),
(
  '4afad7d7-0538-4ac3-af5e-ac8c4d8dd35c', 
  'One Arm Pronated Dumbbell Triceps Extension', 
  'Estensione tricipiti con manubrio a un braccio (presa prona)', 
  'Lie flat on a bench while holding a dumbbell at arms length. Your arm should be perpendicular to your body. The palm of your hand should be facing towards your feet as a pronated grip is required to perform this exercise.
Place your non lifting hand on your bicep for support.
Slowly begin to lower the dumbbell down as you breathe in.
Then, begin lifting the dumbbell upward as you contract the triceps. Remember to breathe out during the concentric (lifting part of the exercise).
Repeat until you have performed your set repetitions.
Switch arms and repeat the movement.', 
  'Sdraiati su una panca tenendo un manubrio a braccio teso. Il braccio deve essere perpendicolare al corpo. Il palmo della mano deve essere rivolto verso i piedi, poiché per questo esercizio è richiesta una presa prona. Posiziona l''altra mano sul bicipite per supporto. Inizia ad abbassare lentamente il manubrio mentre inspiri. Successivamente, solleva il manubrio contraendo i tricipiti. Ricordati di espirare durante la fase concentrica (la parte di sollevamento dell''esercizio). Ripeti per il numero di volte previsto, quindi cambia braccio e ripeti.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Pronated_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Pronated_Dumbbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  'f7f40d13-5071-4b5d-ab25-efd1cec6191d', 
  'One Arm Supinated Dumbbell Triceps Extension', 
  'Estensione tricipiti con manubrio a un braccio (presa supinata)', 
  'Lie flat on a bench while holding a dumbbell at arms length. Your arm should be perpendicular to your body. The palm of your hand should be facing towards your face as a supinated grip is required to perform this exercise.
Place your non lifting hand on your bicep for support.
Slowly begin to lower the dumbbell down as you breathe in.
Then, begin lifting the dumbbell upward as you contract the triceps. Remember to breathe out during the concentric (lifting part of the exercise).
Repeat until you have performed your set repetitions.
Switch arms and repeat the movement.
Switch arms again and repeat the movement.', 
  'Sdraiati su una panca tenendo un manubrio a braccio teso. Il braccio deve essere perpendicolare al corpo. Il palmo della mano deve essere rivolto verso il viso, poiché per questo esercizio è richiesta una presa supinata. Posiziona l''altra mano sul bicipite per supporto. Inizia ad abbassare lentamente il manubrio mentre inspiri. Successivamente, solleva il manubrio contraendo i tricipiti. Ricordati di espirare durante la fase concentrica (la parte di sollevamento dell''esercizio). Ripeti per il numero di volte previsto, quindi cambia braccio e ripeti.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Supinated_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Supinated_Dumbbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '4f823b4d-de31-46fb-b556-b5851afad9ab', 
  'One Half Locust', 
  'Mezza Locusta', 
  'Lie facedown on the floor.
Put your left hand under your left hipbone to pad your hip and pubic bone.
Bend your right knee so you can hold the foot in your right hand.
Lift the foot in the air and simultaneously lift your shoulders off the floor. This also stretches the right hip flexor and the chest and shoulders. Switch sides. If it doesn''t bother your back, you can try it with both arms and legs at the same time.', 
  'Sdraiati a pancia in giù sul pavimento. Posiziona la mano sinistra sotto l''anca sinistra per proteggere l''osso iliaco e il pube. Piega il ginocchio destro in modo da poter afferrare il piede con la mano destra. Solleva il piede in aria e contemporaneamente solleva le spalle dal pavimento. Questo movimento allunga anche il flessore dell''anca destra, il petto e le spalle. Cambia lato. Se non avverti fastidio alla schiena, puoi provare a eseguire l''esercizio con entrambe le braccia e le gambe contemporaneamente.', 
  'quadriceps', 
  'abdominals', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Half_Locust/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Half_Locust/1.jpg'], 
  NOW()
),
(
  'f01c5a65-fcf4-4167-bf22-ba70784ed7c8', 
  'One Handed Hang', 
  'Appeso a una mano', 
  'Grab onto a chinup bar with one hand, using a pronated grip. Keep your feet on the floor or a step. Allow the majority of your weight to hang from that hand, while keeping your feet on the ground. Hold for 10-20 seconds and switch sides.', 
  'Afferra una barra per trazioni con una mano, utilizzando una presa prona. Tieni i piedi sul pavimento o su uno scalino. Lascia che la maggior parte del tuo peso sia sostenuta dalla mano, mantenendo i piedi a terra. Mantieni la posizione per 10-20 secondi, poi cambia mano.', 
  'lats', 
  'biceps', 
  'other', 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Handed_Hang/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Handed_Hang/1.jpg'], 
  NOW()
),
(
  '3f76568d-17bc-425c-80c8-b31f920d720e', 
  'One Knee To Chest', 
  'Ginocchio al petto', 
  'Start off by lying on the floor.
Extend one leg straight and pull the other knee to your chest. Hold under the knee joint to protect the kneecap.
Gently tug that knee toward your nose.
Switch sides. This stretches the buttocks and lower back of the bent leg and the hip flexor of the straight leg.', 
  'Sdraiati a terra. Distendi una gamba e porta l''altro ginocchio al petto. Fai presa sotto l''articolazione del ginocchio per proteggere la rotula. Tira delicatamente il ginocchio verso il naso. Cambia lato. Questo esercizio allunga i glutei e la parte bassa della schiena della gamba piegata, e il flessore dell''anca della gamba distesa.', 
  'glutes', 
  'hamstrings', 
  NULL, 
  'beginner', 
  'compound', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Knee_To_Chest/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Knee_To_Chest/1.jpg'], 
  NOW()
),
(
  'eda45d1b-a40a-4054-81dd-6db9d31729ea', 
  'One Leg Barbell Squat', 
  'Squat bulgaro con bilanciere', 
  'Start by standing about 2 to 3 feet in front of a flat bench with your back facing the bench. Have a barbell in front of you on the floor. Tip: Your feet should be shoulder width apart from each other.
Bend the knees and use a pronated grip with your hands being wider than shoulder width apart from each other to lift the barbell up until you can rest it on your chest.
Then lift the barbell over your head and rest it on the base of your neck. Move one foot back so that your toe is resting on the flat bench. Your other foot should be stationary in front of you. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. Tip: Make sure your back is straight and chest is out while performing this exercise.
As you inhale, slowly lower your leg until your thigh is parallel to the floor. At this point, your knee should be over your toes. Your chest should be directly above the middle of your thigh.
Leading with the chest and hips and contracting the quadriceps, elevate your leg back to the starting position as you exhale.
Repeat for the recommended amount of repetitions.
Switch legs and repeat the movement.', 
  'Posizionati a circa 60-90 cm di distanza da una panca, dando le spalle ad essa. Tieni un bilanciere a terra davanti a te. Consiglio: i piedi devono essere alla larghezza delle spalle. Piega le ginocchia e usa una presa prona, con le mani più larghe delle spalle, per sollevare il bilanciere fino a portarlo al petto. Solleva il bilanciere sopra la testa e poggialo sulla base del collo. Porta un piede all''indietro appoggiando la punta sulla panca. L''altro piede deve rimanere fermo davanti a te. Tieni la testa alta e la schiena dritta. Consiglio: assicurati che la schiena sia dritta e il petto in fuori. Mentre inspiri, abbassati lentamente finché la coscia non è parallela al pavimento. Il ginocchio dovrebbe essere allineato sopra la punta del piede. Spingendo con petto e fianchi, contrai i quadricipiti e risali nella posizione iniziale mentre espiri. Ripeti per le serie previste, quindi cambia gamba.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Leg_Barbell_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Leg_Barbell_Squat/1.jpg'], 
  NOW()
),
(
  '76d66b01-bed4-488b-8cbe-f6614416262c', 
  'Open Palm Kettlebell Clean', 
  'Clean con kettlebell a palmo aperto', 
  'Place one kettlebell between your feet. Clean the kettlebell by extending through the legs and hips as you raise the kettlebell towards your shoulders.
Release the kettlebell as it comes up, and let it flip so that the ball of the kettlebell lands in the palms of your hands.
Release the kettlebell out in front of you and catch the handle with both hands. Lower the kettlebell to the starting position and repeat.', 
  'Posiziona una kettlebell tra i piedi. Esegui un Clean estendendo gambe e anche mentre sollevi la kettlebell verso le spalle. Rilascia la presa mentre sale, lasciando che la kettlebell ruoti in modo che la parte sferica si appoggi sui palmi delle tue mani. Rilascia la kettlebell davanti a te, afferrando nuovamente l''impugnatura con entrambe le mani. Riporta la kettlebell nella posizione iniziale e ripeti.', 
  'hamstrings', 
  'glutes', 
  'kettlebells', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Open_Palm_Kettlebell_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Open_Palm_Kettlebell_Clean/1.jpg'], 
  NOW()
),
(
  '8e1253ed-33dd-4095-bde4-b2eed9ef430a', 
  'Otis-Up', 
  'Otis-Up', 
  'Secure your feet and lay back on the floor. Your knees should be bent. Hold a weight with both hands to your chest. This will be your starting position.
Initiate the movement by flexing the hips and spine to raise your torso up from the ground.
As you move up, press the weight up so that it is above your head at the top of the movement.
Return the weight to your chest as you reverse the sit-up motion, ensuring not to go all the way down to the floor.', 
  'Blocca i piedi e sdraiati sul pavimento con le ginocchia piegate. Tieni un peso con entrambe le mani al petto. Questa è la posizione di partenza. Inizia il movimento flettendo fianchi e colonna vertebrale per sollevare il busto da terra. Mentre sali, spingi il peso verso l''alto sopra la testa. Riporta il peso al petto mentre esegui il movimento inverso del sit-up, assicurandoti di non tornare completamente a terra.', 
  'abdominals', 
  'chest', 
  'other', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Otis-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Otis-Up/1.jpg'], 
  NOW()
),
(
  '5dc87c88-15fd-4338-aa8b-21b9980f8ade', 
  'Overhead Cable Curl', 
  'Curl ai cavi alti', 
  'To begin, set a weight that is comfortable on each side of the pulley machine. Note: Make sure that the amount of weight selected is the same on each side.
Now adjust the height of the pulleys on each side and make sure that they are positioned at a height higher than that of your shoulders.
Stand in the middle of both sides and use an underhand grip (palms facing towards the ceiling) to grab each handle. Your arms should be fully extended and parallel to the floor with your feet positioned shoulder width apart from each other. Your body should be evenly aligned the handles. This is the starting position.
While exhaling, slowly squeeze the biceps on each side until your forearms and biceps touch.
While inhaling, move your forearms back to the starting position. Note: Your entire body is stationary during this exercise except for the forearms.
Repeat for the recommended amount of repetitions prescribed in your program.', 
  'Imposta un peso confortevole su entrambi i lati della macchina ai cavi. Nota: assicurati che il carico sia uguale su entrambi i lati. Regola l''altezza delle carrucole in modo che siano più alte delle tue spalle. Posizionati al centro e afferra le maniglie con una presa supina (palmi verso l''alto). Le braccia devono essere completamente distese e parallele al pavimento, piedi alla larghezza delle spalle. Il corpo deve essere ben allineato tra le maniglie. Questa è la posizione di partenza. Mentre espiri, contrai lentamente i bicipiti fino a far toccare gli avambracci ai bicipiti. Mentre inspiri, riporta le braccia nella posizione iniziale. Nota: il corpo deve rimanere fermo durante l''esercizio, muovendo solo gli avambracci. Ripeti per le serie prescritte.', 
  'biceps', 
  NULL, 
  'cable', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Cable_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Cable_Curl/1.jpg'], 
  NOW()
),
(
  '75838dc6-9930-47a2-9e17-c8b2daf616c0', 
  'Overhead Lat', 
  'Overhead Lat Stretch', 
  'Sit upright on the floor with your partner behind you. Raise one arm straight up, and flex the elbow, attempting to touch your hand to your back. Your parner should hold your tricep and wrist. This will be your starting position.
Attempt to pull your upper arm to your side as your partner prevents you from doing actually doing so.
After 10-20 seconds, relax the arm and allow your partner to further stretch the lat by applying gentle pressure to the tricep. Hold for 10-20 seconds, and then switch sides.', 
  'Siediti dritto sul pavimento con il partner dietro di te. Solleva un braccio dritto verso l''alto e fletti il gomito, cercando di toccare la mano sulla schiena. Il partner deve trattenere il tuo tricipite e il polso. Questa sarà la posizione di partenza. Tenta di tirare la parte superiore del braccio verso il fianco mentre il partner ti oppone resistenza impedendoti di farlo. Dopo 10-20 secondi, rilassa il braccio e consenti al partner di allungare ulteriormente il gran dorsale applicando una leggera pressione sul tricipite. Mantieni la posizione per 10-20 secondi, quindi cambia lato.', 
  'lats', 
  'triceps', 
  'other', 
  'expert', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Lat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Lat/1.jpg'], 
  NOW()
),
(
  '9cc79fe2-6c6d-4a96-8973-38dee5062173', 
  'Overhead Slam', 
  'Overhead Slam', 
  'Hold a medine ball with both hands and stand with your feet at shoulder width. This will be your starting position.
Initiate the countermovement by raising the ball above your head and fully extending your body.
Reverse the motion, slamming the ball into the ground directly in front of you as hard as you can.
Receive the ball with both hands on the bounce and repeat the movement.', 
  'Impugna una palla medica con entrambe le mani e resta in piedi con i piedi alla larghezza delle spalle. Questa sarà la posizione di partenza. Inizia il movimento sollevando la palla sopra la testa ed estendendo completamente il corpo. Inverti il movimento, scagliando la palla a terra direttamente davanti a te con la massima forza possibile. Ricevi la palla con entrambe le mani al rimbalzo e ripeti il movimento.', 
  'lats', 
  NULL, 
  'medicine ball', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Slam/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Slam/1.jpg'], 
  NOW()
),
(
  '62d4e1c6-78a4-4d6d-b1b8-669d28425021', 
  'Overhead Squat', 
  'Overhead Squat', 
  'Start out by having a barbell in front of you on the floor. Your feet should be wider than shoulder width apart from each other.
Bend the knees and use a pronated grip (palms facing you) to grab the barbell. Your hands should be at a wider than shoulder width apart from each other before lifting. Once you are positioned, lift the barbell up until you can rest it on your chest.
Move the barbell over and slightly behind your head and make sure your arms are fully extended. Keep your head up at all times and also maintain a straight back. Retract your shoulder blades. This is your starting position.
Slowly lower the weight by bending your knees until your thighs are parallel to the ground while inhaling. Tip: Keep your back straight while performing this exercise to avoid any injuries and your arms should remain extended and over your head at all times.
Now use your feet and legs to help bring the weight back up to the starting position while exhaling.
Repeat for the recommended amount of repetitions.', 
  'Inizia con un bilanciere a terra davanti a te. I piedi devono essere più larghi della larghezza delle spalle. Piega le ginocchia e usa una presa prona (palmi rivolti verso di te) per afferrare il bilanciere con le mani a una distanza superiore alla larghezza delle spalle. Solleva il bilanciere fino a portarlo sul petto. Porta il bilanciere sopra e leggermente dietro la testa, assicurandoti che le braccia siano completamente estese. Tieni la testa alta e la schiena dritta. Contrai le scapole. Questa è la posizione di partenza. Espirando, abbassa lentamente il peso piegando le ginocchia finché le cosce non sono parallele al suolo. Suggerimento: mantieni la schiena dritta per evitare infortuni e tieni le braccia sempre estese sopra la testa. Usa la spinta dei piedi e delle gambe per tornare alla posizione di partenza espirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'abdominals', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Squat/1.jpg'], 
  NOW()
),
(
  'a9130ca0-80fa-4520-b495-ce3866b64f17', 
  'Overhead Stretch', 
  'Overhead Stretch', 
  'Standing straight up, lace your fingers together and open your palms to the ceiling. Keep your shoulders down as you extend your arms up.
To create a full torso stretch, pull your tailbone down and stabilize your torso as you do this. Stretch the muscles on both the front and the back of the torso.', 
  'In piedi, intreccia le dita e rivolgi i palmi verso il soffitto. Mantieni le spalle basse mentre estendi le braccia verso l''alto. Per un allungamento completo del busto, tira il coccige verso il basso e stabilizza il tronco. Allunga i muscoli della parte anteriore e posteriore del busto.', 
  'abdominals', 
  'chest', 
  NULL, 
  'beginner', 
  'compound', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Stretch/1.jpg'], 
  NOW()
),
(
  'b5ce60ee-91aa-415e-bd66-50339d763696', 
  'Overhead Triceps', 
  'Overhead Triceps Stretch', 
  'Sit upright on the floor with your partner behind you. Raise one arm straight up, and flex the elbow, attempting to touch your hand to your back. Your parner should hold your elbow and wrist. This will be your starting position.
Attempt to extend the arm straight into the air as your partner prevents you from doing actually doing so.
After 10-20 seconds, relax the arm and allow your partner to further stretch the tricep by applying gentle pressure to the wrist. Hold for 10-20 seconds, and then switch sides.', 
  'Siediti dritto sul pavimento con il partner dietro di te. Solleva un braccio dritto verso l''alto e fletti il gomito, cercando di toccare la mano sulla schiena. Il partner deve trattenere il tuo gomito e il polso. Questa sarà la posizione di partenza. Tenta di estendere il braccio dritto verso l''alto mentre il partner ti oppone resistenza. Dopo 10-20 secondi, rilassa il braccio e consenti al partner di allungare ulteriormente il tricipite applicando una leggera pressione sul polso. Mantieni la posizione per 10-20 secondi, quindi cambia lato.', 
  'triceps', 
  'lats', 
  'body only', 
  'expert', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Triceps/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Triceps/1.jpg'], 
  NOW()
),
(
  '2fb705da-1313-4a66-a74c-975abe50003d', 
  'Pallof Press', 
  'Pallof Press', 
  'Connect a standard handle to a tower, and—if possible—position the cable to shoulder height. If not, a low pulley will suffice.
With your side to the cable, grab the handle with both hands and step away from the tower. You should be approximately arm''s length away from the pulley, with the tension of the weight on the cable.
With your feet positioned hip-width apart and knees slightly bent, hold the cable to the middle of your chest. This will be your starting position.
Press the cable away from your chest, fully extending both arms. You core should be tight and engaged.
Hold the repetition for several seconds before returning to the starting position.
At the conclusion of the set, repeat facing the other direction.', 
  'Collega una maniglia standard a un cavo, posizionandolo preferibilmente all''altezza delle spalle; in alternativa, un cavo basso è sufficiente. Mettiti di fianco alla torre, afferra la maniglia con entrambe le mani e allontanati fino ad avere il braccio teso, mantenendo il cavo in tensione. Con i piedi alla larghezza dei fianchi e le ginocchia leggermente flesse, tieni la maniglia al centro del petto. Questa è la posizione di partenza. Spingi la maniglia lontano dal petto, estendendo completamente le braccia. Il core deve essere contratto e attivo. Mantieni la posizione per alcuni secondi prima di tornare alla posizione di partenza. Al termine della serie, ripeti girandoti verso il lato opposto.', 
  'abdominals', 
  'chest', 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pallof_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pallof_Press/1.jpg'], 
  NOW()
),
(
  'b1e3a616-6e7c-450b-839a-53b159500407', 
  'Pallof Press With Rotation', 
  'Pallof Press con rotazione', 
  'Connect a standard handle to a tower, and position the cable to shoulder height.
With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately arm''s length away from the pulley, with the tension of the weight on the cable. Align outstretched arm with cable.
With your feet positioned hip-width apart, pull the cable into your chest and grab the handle with your other hand. Both hands should be on the handle at this time.
Facing forward, press the cable away from your chest. You core should be tight and engaged.
Keeping your hips straight, twist your torso away from the pulley until you get a full quarter rotation.
Maintain your rigid stance and straight arms. Return to the neutral position in a slow and controlled manner. Your arms should be extended in front of you.
With the side tension still engaging your core, bring your hands to your chest and immediately press outward to a fully extended position. This constitutes one rep.
Repeat to failure.
Then, reposition and repeat the same series of movements on the opposite side.', 
  'Collega una maniglia standard a un cavo, posizionandolo all''altezza delle spalle. Mettiti di fianco al cavo, afferra la maniglia con una mano e allontanati finché il braccio non è teso e il cavo in tensione. Allinea il braccio teso con il cavo. Con i piedi alla larghezza dei fianchi, porta la maniglia al petto e afferrala con l''altra mano. Ora entrambe le mani sono sulla maniglia. Guardando in avanti, spingi la maniglia lontano dal petto, mantenendo il core contratto. Mantenendo i fianchi fermi, ruota il busto lontano dal cavo di un quarto di giro. Mantieni la posizione rigida e le braccia dritte. Torna lentamente alla posizione neutra. Con la tensione laterale ancora attiva sul core, porta le mani al petto e spingi immediatamente verso l''esterno per tornare a una posizione di completa estensione. Questo costituisce una ripetizione. Ripeti fino a esaurimento, poi cambia lato.', 
  'abdominals', 
  'chest', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pallof_Press_With_Rotation/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pallof_Press_With_Rotation/1.jpg'], 
  NOW()
),
(
  'f684ed54-9dc9-42f1-aaca-d3050ba09566', 
  'Palms-Down Dumbbell Wrist Curl Over A Bench', 
  'Wrist Curl con manubri (palmi in giù) su panca', 
  'Start out by placing two dumbbells on one side of a flat bench.
Kneel down on both of your knees so that your body is facing the flat bench.
Use your arms to grab both of the dumbbells with a pronated grip (palms facing down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.
Start out by curling your wrist upwards and exhaling.
Slowly lower your wrists back down to the starting position while inhaling.
Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.
Repeat for the recommended amount of repetitions.', 
  'Posiziona due manubri su un lato di una panca piana. Inginocchiati di fronte alla panca. Afferra i manubri con una presa prona (palmi rivolti verso il basso) e appoggia gli avambracci sulla panca, lasciando che i polsi sporgano dal bordo. Fletti i polsi verso l''alto espirando. Abbassa lentamente i polsi alla posizione di partenza inspirando. Gli avambracci devono rimanere fermi; il movimento deve coinvolgere solo i polsi. Ripeti per il numero di ripetizioni raccomandato.', 
  'forearms', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench/1.jpg'], 
  NOW()
),
(
  'b685fa70-6666-4f37-b5df-55c531199ed5', 
  'Palms-Down Wrist Curl Over A Bench', 
  'Wrist Curl con bilanciere (palmi in giù) su panca', 
  'Start out by placing a barbell on one side of a flat bench.
Kneel down on both of your knees so that your body is facing the flat bench.
Use your arms to grab the barbell with a pronated grip (palms down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.
Start out by curling your wrist upwards and exhaling.
Slowly lower your wrists back down to the starting position while inhaling.
Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.
Repeat for the recommended amount of repetitions.', 
  'Posiziona un bilanciere su un lato di una panca piana. Inginocchiati di fronte alla panca. Afferra il bilanciere con una presa prona (palmi rivolti verso il basso) e appoggia gli avambracci sulla panca, lasciando che i polsi sporgano dal bordo. Fletti i polsi verso l''alto espirando. Abbassa lentamente i polsi alla posizione di partenza inspirando. Gli avambracci devono rimanere fermi; il movimento deve coinvolgere solo i polsi. Ripeti per il numero di ripetizioni raccomandato.', 
  'forearms', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Down_Wrist_Curl_Over_A_Bench/1.jpg'], 
  NOW()
),
(
  'a92548da-daa4-40bd-ba42-fafca3b61dd9', 
  'Palms-Up Barbell Wrist Curl Over A Bench', 
  'Wrist Curl con bilanciere (palmi in su) su panca', 
  'Start out by placing a barbell on one side of a flat bench.
Kneel down on both of your knees so that your body is facing the flat bench.
Use your arms to grab the barbell with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.
Start out by curling your wrist upwards and exhaling.
Slowly lower your wrists back down to the starting position while inhaling.
Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.
Repeat for the recommended amount of repetitions.', 
  'Posiziona un bilanciere su un lato di una panca piana. Inginocchiati di fronte alla panca. Afferra il bilanciere con una presa supinata (palmi rivolti verso l''alto) e appoggia gli avambracci sulla panca, lasciando che i polsi sporgano dal bordo. Fletti i polsi verso l''alto espirando. Abbassa lentamente i polsi alla posizione di partenza inspirando. Gli avambracci devono rimanere fermi; il movimento deve coinvolgere solo i polsi. Ripeti per il numero di ripetizioni raccomandato.', 
  'forearms', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Up_Barbell_Wrist_Curl_Over_A_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Up_Barbell_Wrist_Curl_Over_A_Bench/1.jpg'], 
  NOW()
),
(
  '5742b1b6-0047-458e-a342-7c487d5ec6f1', 
  'Palms-Up Dumbbell Wrist Curl Over A Bench', 
  'Wrist Curl con manubri su panca (palmi verso l''alto)', 
  'Start out by placing two dumbbells on one side of a flat bench.
Kneel down on both of your knees so that your body is facing the flat bench.
Use your arms to grab both of the dumbbells with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.
Start out by curling your wrist upwards and exhaling.
Slowly lower your wrists back down to the starting position while inhaling. Make sure to inhale during this part of the exercise.
Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.
Repeat for the recommended amount of repetitions.', 
  'Posiziona due manubri su un lato di una panca piana. Inginocchiati di fronte alla panca. Afferra i manubri con una presa supinata (palmi verso l''alto) e appoggia gli avambracci sulla panca, lasciando che i polsi sporgano dal bordo. Esegui il curl dei polsi verso l''alto espirando. Ritorna lentamente alla posizione iniziale inspirando. Mantieni gli avambracci fermi: il movimento deve coinvolgere esclusivamente i polsi. Ripeti per il numero di ripetizioni consigliato.', 
  'forearms', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Up_Dumbbell_Wrist_Curl_Over_A_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Palms-Up_Dumbbell_Wrist_Curl_Over_A_Bench/1.jpg'], 
  NOW()
),
(
  'c94a2da7-4d32-4311-8ad0-9f77bec1f920', 
  'Parallel Bar Dip', 
  'Dip alle parallele', 
  'Stand between a set of parallel bars. Place a hand on each bar, and then take a small jump to help you get into the starting position with your arms locked out.
Begin by flexing the elbow, lowering your body until your arms break 90 degrees. Avoid swinging, and maintain good posture throughout the descent.
Reverse the motion by extending the elbow, pushing yourself back up into the starting position.
Repeat for the desired number of repetitions.', 
  'Posizionati tra le barre parallele. Afferra ciascuna barra con una mano e datti una piccola spinta per portarti nella posizione iniziale con le braccia distese. Fletti i gomiti per abbassare il corpo finché le braccia non superano i 90 gradi. Evita di oscillare e mantieni una postura corretta durante la discesa. Inverti il movimento estendendo i gomiti per tornare alla posizione iniziale. Ripeti per il numero di ripetizioni desiderato.', 
  'triceps', 
  'chest', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Parallel_Bar_Dip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Parallel_Bar_Dip/1.jpg'], 
  NOW()
),
(
  '534d358d-1c44-4f18-b470-50ca1061a4e6', 
  'Pelvic Tilt Into Bridge', 
  'Retroversione del bacino in ponte', 
  'Lie down with your feet on the floor, heels directly under your knees.
Lift only your tailbone to the ceiling to stretch your lower back. (Don''t lift the entire spine yet.) Pull in your stomach.
To go into a bridge, lift the entire spine except the neck.', 
  'Sdraiati con i piedi a terra e i talloni allineati sotto le ginocchia. Solleva solo l''osso sacro verso il soffitto per allungare la zona lombare (senza sollevare l''intera colonna vertebrale) e contrai l''addome. Per eseguire il ponte, solleva l''intera colonna vertebrale, mantenendo il collo a terra.', 
  'lower back', 
  NULL, 
  NULL, 
  'intermediate', 
  'compound', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pelvic_Tilt_Into_Bridge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pelvic_Tilt_Into_Bridge/1.jpg'], 
  NOW()
),
(
  '56f12b8d-d1f4-4391-8ba2-0f836bf10c31', 
  'Peroneals-SMR', 
  'SMR per i muscoli peronieri', 
  'Lay on your side, supporting your weight on your forearm and on a foam roller placed on the outside of your lower leg. Your upper leg can either be on top of your lower leg, or you can cross it in front of you. This will be your starting position.
Raise your hips off of the ground and begin to roll from below the knee to above the ankle on the side of your leg, pausing at points of tension for 10-30 seconds. Repeat on the other leg.', 
  'Sdraiati su un fianco, sostenendo il peso sull''avambraccio e su un foam roller posizionato sulla parte esterna della parte inferiore della gamba. La gamba superiore può essere appoggiata su quella inferiore o incrociata davanti ad essa. Solleva i fianchi da terra e inizia a rullare dal ginocchio fino sopra la caviglia sul lato della gamba, fermandoti sui punti di tensione per 10-30 secondi. Ripeti sull''altra gamba.', 
  'calves', 
  NULL, 
  'foam roll', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Peroneals-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Peroneals-SMR/1.jpg'], 
  NOW()
),
(
  'c4b81e12-cec4-46da-b49f-9d929219dfc8', 
  'Peroneals Stretch', 
  'Stretching per i muscoli peronieri', 
  'In a seated position, loop a belt, rope, or band around one foot. This will be your starting position.
With the leg extended and the heel off of the ground, pull on the belt so that the foot is inverted, with the inside of the foot being pulled towards you. Hold for 10-20 seconds, and then switch sides.', 
  'Da seduto, fai passare una cintura, una corda o una fascia attorno a un piede. Con la gamba estesa e il tallone sollevato da terra, tira la fascia per invertire il piede, portando la parte interna del piede verso di te. Mantieni la posizione per 10-20 secondi, quindi cambia lato.', 
  'calves', 
  NULL, 
  'other', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Peroneals_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Peroneals_Stretch/1.jpg'], 
  NOW()
),
(
  'c7fbe33c-bb8c-4f52-9ca5-64e9874c116e', 
  'Physioball Hip Bridge', 
  'Hip Bridge su Physioball', 
  'Lay on a ball so that your upper back is on the ball with your hips unsupported. Both feet should be flat on the floor, hip width apart or wider. This will be your starting position.
Begin by extending the hips using your glutes and hamstrings, raising your hips upward as you bridge.
Pause at the top of the motion and return to the starting position.', 
  'Sdraiati su una palla in modo che la parte superiore della schiena sia supportata, mentre i fianchi rimangono sollevati. Entrambi i piedi devono essere ben appoggiati a terra, alla larghezza delle spalle o più. Estendi i fianchi utilizzando glutei e bicipiti femorali per sollevare il bacino verso l''alto. Fermati al culmine del movimento e ritorna alla posizione iniziale.', 
  'glutes', 
  'hamstrings', 
  'exercise ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Physioball_Hip_Bridge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Physioball_Hip_Bridge/1.jpg'], 
  NOW()
),
(
  '647b712e-008d-4213-8db0-61208a79ab05', 
  'Pin Presses', 
  'Pin Press', 
  'Pin presses remove the eccentric phase of the bench press, developing starting strength. They also allow you to train a desired range of motion.
The bench should be set up in a power rack. Set the pins to the desired point in your range of motion, whether it just be lockout or an inch off of your chest. The bar should be moved to the pins and prepared for lifting.
Begin by lying on the bench, with the bar directly above the contact point during your regular bench. Tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement.
You can take a standard bench grip, or shoulder width to focus on the triceps. The bar, wrist, and elbow should stay in line at all times. Focus on squeezing the bar and trying to pull it apart.
Drive the bar up with as much force as possible. The elbows should be tucked in until lockout.
Return the bar to the pins, pausing before beginning the next repetition.', 
  'I Pin Press eliminano la fase eccentrica della panca piana, sviluppando la forza esplosiva iniziale e permettendo di allenare specifici range di movimento. Posiziona il bilanciere su un power rack impostando i perni all''altezza desiderata (dal blocco completo a pochi centimetri dal petto). Sdraiati sulla panca, posizionandoti come per una normale panca piana, con i piedi ben piantati e la schiena inarcata. Solleva le scapole dalla panca e adducile (avvicinale tra loro). Spingi i trapezi contro la panca. Mantieni una postura rigida. Afferra il bilanciere con una presa standard o alla larghezza delle spalle per focalizzarti sui tricipiti. Mantenendo polsi e gomiti allineati, spingi il bilanciere verso l''alto con massima forza. Tieni i gomiti stretti fino alla distensione completa. Riponi il bilanciere sui perni e fai una pausa prima della ripetizione successiva.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pin_Presses/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pin_Presses/1.jpg'], 
  NOW()
),
(
  '2b3b051a-4351-499d-bd79-4a67687610ed', 
  'Piriformis-SMR', 
  'SMR per il piriforme', 
  'Sit with your buttocks on top of a foam roll. Bend your knees, and then cross one leg so that the ankle is over the knee. This will be your starting position.
Shift your weight to the side of the crossed leg, rolling over the buttocks until you feel tension in your upper glute. You may assist the stretch by using one hand to pull the bent knee towards your chest. Hold this position for 10-30 seconds, and then switch sides.', 
  'Siediti con i glutei sopra un foam roller. Fletti le ginocchia e incrocia una gamba posizionando la caviglia sul ginocchio opposto. Sposta il peso sul lato della gamba incrociata, rotolando sui glutei finché non senti tensione nella parte superiore. Puoi intensificare lo stretching usando una mano per tirare il ginocchio flesso verso il petto. Mantieni per 10-30 secondi, poi cambia lato.', 
  'glutes', 
  NULL, 
  'foam roll', 
  'intermediate', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Piriformis-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Piriformis-SMR/1.jpg'], 
  NOW()
),
(
  '18146ef5-cadd-497f-b55b-77e496bbeb69', 
  'Plank', 
  'Plank', 
  'Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder.
Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.', 
  'Posizionati a terra a pancia in giù, sostenendo il peso sulle punte dei piedi e sugli avambracci. Le braccia devono essere flesse e perpendicolari alle spalle. Mantieni il corpo in linea retta e tieni la posizione il più a lungo possibile. Per aumentare la difficoltà, è possibile sollevare un braccio o una gamba.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg'], 
  NOW()
),
(
  'c670af19-ad82-42d6-9c23-eb8f50ce8731', 
  'Plate Pinch', 
  'Plate Pinch', 
  'Grab two wide-rimmed plates and put them together with the smooth sides facing outward
Use your fingers to grip the outside part of the plate and your thumb for the other side thus holding both plates together. This is the starting position.
Squeeze the plate with your fingers and thumb. Hold this position for as long as you can.
Repeat for the recommended amount of sets prescribed in your program.
Switch arms and repeat the movements.', 
  'Afferra due dischi dal bordo largo e uniscili con i lati lisci rivolti verso l''esterno. Usa le dita per afferrare il lato esterno di un disco e il pollice per l''altro, tenendo i dischi uniti. Stringi i dischi con forza. Mantieni questa posizione il più a lungo possibile. Ripeti per il numero di serie prescritto nel tuo programma. Cambia braccio e ripeti.', 
  'forearms', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plate_Pinch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plate_Pinch/1.jpg'], 
  NOW()
),
(
  'fc78b78c-3c9e-4a46-8999-573f73fe202c', 
  'Plate Twist', 
  'Plate Twist', 
  'Lie down on the floor or an exercise mat with your legs fully extended and your upper body upright. Grab the plate by its sides with both hands out in front of your abdominals with your arms slightly bent.
Slowly cross your legs near your ankles and lift them up off the ground. Your knees should also be bent slightly. Note: Move your upper body back slightly to help keep you balanced turning this exercise. This is the starting position.
Move the plate to the left side and touch the floor with it. Breathe out as you perform that movement.
Come back to the starting position as you breathe in and then repeat the movement but this time to the right side of the body. Tip: Use a slow controlled movement at all times. Jerking motions can injure the back.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati sul pavimento o su un tappetino da fitness con le gambe completamente distese e il busto sollevato. Afferra il disco (plate) lateralmente con entrambe le mani davanti agli addominali, tenendo le braccia leggermente flesse. Incrocia lentamente le gambe vicino alle caviglie e sollevale da terra, mantenendo le ginocchia leggermente flesse. Nota: inclina leggermente il busto all''indietro per mantenere l''equilibrio durante l''esercizio. Questa è la posizione di partenza. Ruota il disco verso sinistra e tocca il pavimento. Espira durante il movimento. Torna alla posizione di partenza inspirando, quindi ripeti il movimento verso il lato destro del corpo. Suggerimento: esegui il movimento sempre in modo lento e controllato. Scatti bruschi possono causare infortuni alla schiena. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plate_Twist/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plate_Twist/1.jpg'], 
  NOW()
),
(
  '536a5b7f-7e43-4a29-85fc-2021ccad2e62', 
  'Platform Hamstring Slides', 
  'Platform Hamstring Slides', 
  'For this movement a wooden floor or similar is needed. Lay on your back with your legs extended. Place a gym towel or a light weight underneath your heel. This will be your starting position.
Begin the movement by flexing the knee, keeping your other leg straight.
Continue bringing the heel closer to you, sliding it on the floor.
At full knee flexion, reverse the movement to return to the starting position.', 
  'Per questo esercizio è necessario un pavimento in legno o una superficie simile. Sdraiati sulla schiena con le gambe distese. Posiziona un asciugamano da palestra o un piccolo peso sotto il tallone. Questa è la posizione di partenza. Inizia il movimento flettendo il ginocchio, mantenendo l''altra gamba tesa. Continua a portare il tallone verso di te facendolo scivolare sul pavimento. Una volta raggiunta la massima flessione del ginocchio, inverte il movimento per tornare alla posizione di partenza.', 
  'hamstrings', 
  'glutes', 
  'other', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Platform_Hamstring_Slides/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Platform_Hamstring_Slides/1.jpg'], 
  NOW()
),
(
  '8d1601db-3419-490a-a4e9-657d5a379337', 
  'Plie Dumbbell Squat', 
  'Plie Dumbbell Squat', 
  'Hold a dumbbell at the base with both hands and stand straight up. Move your legs so that they are wider than shoulder width apart from each other with your knees slightly bent.
Your toes should be facing out. Note: Your arms should be stationary while performing the exercise. This is the starting position.
Slowly bend the knees and lower your legs until your thighs are parallel to the floor. Make sure to inhale as this is the eccentric part of the exercise.
Press mainly with the heel of the foot to bring the body back to the starting position while exhaling.
Repeat for the recommended amount of repetitions.', 
  'Impugna un manubrio dalla base con entrambe le mani e resta in piedi. Divarica le gambe a una larghezza superiore a quella delle spalle, con le ginocchia leggermente flesse e le punte dei piedi rivolte verso l''esterno. Nota: le braccia devono rimanere ferme durante l''esecuzione. Questa è la posizione di partenza. Piega lentamente le ginocchia e abbassati finché le cosce non sono parallele al pavimento. Inspira durante questa fase eccentrica dell''esercizio. Spingi principalmente facendo forza sui talloni per riportare il corpo nella posizione di partenza, espirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'abdominals', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plie_Dumbbell_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plie_Dumbbell_Squat/1.jpg'], 
  NOW()
),
(
  'fc9d1724-3860-4857-8fb2-8ba2e9cbd81e', 
  'Plyo Kettlebell Pushups', 
  'Plyo Kettlebell Pushups', 
  'Place a kettlebell on the floor. Place yourself in a pushup position, on your toes with one hand on the ground and one hand holding the kettlebell, with your elbows extended. This will be your starting position.
Begin by lowering yourself as low as you can, keeping your back straight.
Quickly and forcefully reverse direction, pushing yourself up to the other side of the kettlebell, switching hands as you do so. Continue the movement by descending and repeating the movement back and forth.', 
  'Posiziona una kettlebell a terra. Mettiti in posizione di push-up (flessioni) sulle punte dei piedi, con una mano a terra e l''altra sulla kettlebell, braccia tese. Questa è la posizione di partenza. Inizia abbassandoti il più possibile mantenendo la schiena dritta. Con un movimento rapido ed esplosivo, inverte la direzione spingendo verso l''alto e spostandoti sull''altro lato della kettlebell, cambiando mano. Continua il movimento scendendo e ripetendo il cambio di lato.', 
  'chest', 
  'shoulders', 
  'kettlebells', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plyo_Kettlebell_Pushups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plyo_Kettlebell_Pushups/1.jpg'], 
  NOW()
),
(
  'be93bda9-4483-43d6-bf62-75c21b33f654', 
  'Plyo Push-up', 
  'Plyo Push-up', 
  'Move into a prone position on the floor, supporting your weight on your hands and toes.
Your arms should be fully extended with the hands around shoulder width. Keep your body straight throughout the movement. This will be your starting position.
Descend by flexing at the elbow, lowering your chest towards the ground.
At the bottom, reverse the motion by pushing yourself up through elbow extension as quickly as possible. Attempt to push your upper body up until your hands leave the ground.
Return to the starting position and repeat the exercise.
For added difficulty, add claps into the movement while you are air borne.', 
  'Mettiti in posizione prona a terra, sostenendo il peso sulle mani e sulle punte dei piedi. Le braccia devono essere completamente distese con le mani a una larghezza pari a quella delle spalle. Mantieni il corpo dritto per tutta la durata del movimento. Questa è la posizione di partenza. Scendi flettendo i gomiti e portando il petto verso terra. Nella parte inferiore, inverte il movimento spingendo verso l''alto tramite l''estensione dei gomiti il più velocemente possibile. Cerca di spingere il busto verso l''alto finché le mani non si staccano da terra. Torna alla posizione di partenza e ripeti. Per una maggiore difficoltà, aggiungi un battito di mani mentre sei sospeso a mezz''aria.', 
  'chest', 
  'shoulders', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plyo_Push-up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plyo_Push-up/1.jpg'], 
  NOW()
),
(
  '178ec547-aef2-4ae0-8a16-1d857e7f1276', 
  'Posterior Tibialis Stretch', 
  'Stretching del Tibiale Posteriore', 
  'In a seated position, loop a belt, rope, or band around one foot. This will be your starting position.
With the leg extended and the heel off of the ground, pull on the belt so that the foot is everted, with the outside of the foot being pulled towards you. Hold for 10-20 seconds, and then switch sides.', 
  'Da seduto, fai passare una cintura, una corda o una banda elastica attorno a un piede. Questa è la posizione di partenza. Con la gamba distesa e il tallone sollevato da terra, tira la cintura in modo che il piede ruoti verso l''esterno (eversione), tirando il bordo esterno del piede verso di te. Mantieni la posizione per 10-20 secondi, poi cambia lato.', 
  'calves', 
  NULL, 
  'other', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Posterior_Tibialis_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Posterior_Tibialis_Stretch/1.jpg'], 
  NOW()
),
(
  '30446468-9d24-47d6-845c-b24aa78aef6f', 
  'Power Clean', 
  'Power Clean', 
  'Stand with your feet slightly wider than shoulder width apart and toes pointing out slightly.
Squat down and grasp bar with a closed, pronated grip. Your hands should be slightly wider than shoulder width apart outside knees with elbows fully extended.
Place the bar about 1 inch in front of your shins and over the balls of your feet.
Your back should be flat or slightly arched, your chest held up and out and your shoulder blades should be retracted.
Keep your head in a neutral position (in line with vertebral column and not tilted or rotated) with your eyes focused straight ahead. Inhale during this phase.
Lift the bar from the floor by forcefully extending the hips and the knees as you exhale. Tip: The upper torso should maintain the same angle. Do not bend at the waist yet and do not let the hips rise before the shoulders (this would have the effect of pushing the glutes in the air and stretching the hamstrings.
Keep elbows fully extended with the head in a neutral position and the shoulders over the bar.
As the bar raises keep it as close to the shins as possible.
As the bar passes the knees, thrust your hips forward and slightly bend the knees to avoid locking them. Tip: At this point your thighs should be against the bar.
Keep the back flat or slightly arched, elbows fully extended and your head neutral. Tip: You will hold your breath until the next phase.
Inhale and then forcefully and quickly extend your hips and knees and stand on your toes.
Keep the bar as close to your body as possible. Tip: Your back should be flat with the elbows pointed out to the sides and your head in a neutral position. Also, keep your shoulders over the bar and arms straight as long as possible.
When your lower body joints are fully extended, shrug the shoulders upward rapidly without letting the elbows flex yet. Exhale during this portion of the movement.
As the shoulders reach their highest elevation flex your elbows to begin pulling your body under the bar.
Continue to pull the arms as high and as long as possible. Tip: Due to the explosive nature of this phase, your torso will be erect or with an arched back, your head will be tilted back slightly and your feet may lose contact with the floor.
After the lower body has fully extended and the bar reaches near maximal height, pull your body under the bar and rotate the arms around and under the bar.
Simultaneously, flex the hips and knees into a quarter squat position.
Once the arms are under the bar, inhale and then lift your elbows to position the upper arms parallel to the floor. Rack the bar across the front of your collar bones and front shoulder muscles.
Catch the bar with an erect and tight torso, a neutral head position and flat feet. Exhale during this movement.
Stand up by extending the hips and knees to a fully erect position.
Lower the bar by gradually reducing the muscular tension of the arms to allow a controlled descent of the bar to the thighs. Inhale during this movement.
Simultaneously flex the hips and knees to cushion the impact of the bar on the thighs.
Squat down with the elbows fully extended until the bar touches the floor.
Start over at Phase 1 and repeat for the recommended amount of repetitions.', 
  'Posizionati con i piedi leggermente più larghi delle spalle e le punte leggermente rivolte verso l''esterno. Accovacciati e afferra il bilanciere con una presa chiusa e prona, leggermente più larga delle spalle e all''esterno delle ginocchia, con le braccia completamente distese. Posiziona il bilanciere a circa 2-3 cm dagli stinchi e sopra la pianta dei piedi. Schiena piatta o leggermente inarcata, petto in fuori e scapole retratte. Testa in posizione neutra (allineata alla colonna vertebrale) e sguardo in avanti. Inspira durante questa fase. Solleva il bilanciere estendendo con forza anche e ginocchia mentre espiri. Suggerimento: il busto deve mantenere la stessa inclinazione. Non piegare la vita e non far salire le anche prima delle spalle. Tieni il bilanciere il più vicino possibile agli stinchi. Quando supera le ginocchia, spingi le anche in avanti e fletti leggermente le ginocchia per evitare di bloccarle. A questo punto, le cosce dovrebbero essere a contatto con il bilanciere. Trattieni il respiro fino alla fase successiva. Inspira, quindi estendi rapidamente anche e ginocchia portandoti sulle punte. Mantieni il bilanciere vicino al corpo. Quando la parte inferiore del corpo è completamente estesa, fai una scrollata di spalle rapida verso l''alto senza flettere i gomiti. Espira durante questa fase. Quando le spalle raggiungono il punto massimo, fletti i gomiti per iniziare a portarti sotto il bilanciere. Continua a tirare le braccia il più in alto possibile. Dopo la massima estensione, entra sotto il bilanciere ruotando le braccia attorno e sotto di esso. Fletti contemporaneamente anche e ginocchia in un quarto di squat. Una volta sotto, solleva i gomiti per posizionare le braccia parallele al pavimento. Ricevi il bilanciere sopra le clavicole e i muscoli delle spalle anteriori. Mantieni il busto eretto e la testa neutra. Torna in posizione eretta estendendo anche e ginocchia. Abbassa il bilanciere riducendo gradualmente la tensione delle braccia per un ritorno controllato sulle cosce, inspirando. Fletti anche e ginocchia per ammortizzare l''impatto. Accovacciati fino a toccare il pavimento. Ricomincia dalla Fase 1.', 
  'hamstrings', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Clean/1.jpg'], 
  NOW()
),
(
  '363cadef-6135-41b8-a9db-e3fa3f876a5c', 
  'Power Clean from Blocks', 
  'Power Clean from Blocks', 
  'With a barbell on boxes of the desired height, take a grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.
Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight. As the bar approaches the mid-thigh position, begin extending through the hips.
In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight. At the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended.
As full extension is achieved, transition into the third pull by aggressively shrugging and flexing the arms with the elbows up and out. At peak extension, pull yourself under the bar far enough that it can be racked onto the shoulders, rotating your elbows under the bar as you do so. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed.
Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position, and complete the repetition by returning the weight to the boxes.', 
  'Con il bilanciere posizionato su dei blocchi all''altezza desiderata, afferralo appena fuori dalle gambe. Abbassa le anche caricando il peso sui talloni, schiena dritta, testa in avanti, petto in fuori e spalle leggermente oltre il bilanciere. Questa è la posizione di partenza. Inizia la prima trazione spingendo sui talloni ed estendendo le ginocchia. L''angolo della schiena deve rimanere costante e le braccia dritte. Quando il bilanciere raggiunge la metà delle cosce, inizia l''estensione delle anche. Con un movimento simile a un salto, accelera estendendo anche, ginocchia e caviglie. Non è necessario tirare attivamente con le braccia. Alla fine della seconda trazione, il corpo deve essere completamente esteso, inclinato leggermente all''indietro, con le braccia tese. Passa alla terza trazione scrollando le spalle e flettendo le braccia con i gomiti verso l''alto e l''esterno. Entra sotto il bilanciere per riceverlo sulle spalle, ruotando i gomiti. Recupera la posizione eretta con il bilanciere sulle spalle, quindi riporta il peso sui blocchi.', 
  'hamstrings', 
  'quadriceps', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Clean_from_Blocks/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Clean_from_Blocks/1.jpg'], 
  NOW()
),
(
  '650c3621-8bac-47b3-968d-6eb629dfbda8', 
  'Power Jerk', 
  'Power Jerk', 
  'Standing with the weight racked on the front of the shoulders, begin with the dip. With your feet directly under your hips, flex the knees without moving the hips backward. Go down only slightly, and reverse direction as powerfully as possible.
Drive through the heels create as much speed and force as possible, and be sure to move your head out of the way as the bar leaves the shoulders.
At this moment as the feet leave the floor, the feet must be placed into the receiving position as quickly as possible. In the brief moment the feet are not actively driving against the platform, the athletes effort to push the bar up will drive them down. The feet should be moved to a slightly wider stance, with the knees partially bent.
Receive the bar with the arms locked out overhead.
Return to a standing position.', 
  'In piedi, con il bilanciere poggiato sulle spalle anteriori. Con i piedi sotto le anche, fletti le ginocchia senza spostare le anche all''indietro. Scendi solo leggermente, quindi inverte la direzione con la massima potenza possibile. Spingi sui talloni per generare velocità e forza, assicurandoti di spostare la testa quando il bilanciere lascia le spalle. Non appena i piedi si staccano da terra, portali nella posizione di ricezione il più velocemente possibile. Mentre il bilanciere sale, il tuo sforzo di spinta ti spingerà verso il basso. I piedi devono trovarsi in una posizione leggermente più larga, con le ginocchia parzialmente flesse. Ricevi il bilanciere con le braccia bloccate sopra la testa. Torna in posizione eretta.', 
  'quadriceps', 
  'abdominals', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Jerk/1.jpg'], 
  NOW()
),
(
  'dacfb789-6ffc-4454-af21-a01c7c13b3ab', 
  'Power Partials', 
  'Power Partials', 
  'Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso.
The palms of the hands should be facing your torso. Your feet should be about shoulder width apart. This will be your starting position.
Keeping your arms straight and the torso stationary, lift the weights out to your sides until they are about shoulder level height while exhaling.
Feel the contraction for a second and begin to lower the weights back down to the starting position while inhaling. Tip: Keep the palms facing down with the little finger slightly higher while lifting and lowering the weights as it will concentrate the stress on your shoulders mainly.
Repeat for the recommended amount of repetitions.', 
  'In piedi con il busto eretto e un manubrio in ogni mano lungo i fianchi. I gomiti devono essere vicini al busto e i palmi rivolti verso il corpo. Piedi alla larghezza delle spalle. Questa è la posizione di partenza. Mantenendo le braccia dritte e il busto immobile, solleva i pesi lateralmente fino all''altezza delle spalle espirando. Senti la contrazione per un secondo e inizia ad abbassare i pesi tornando alla posizione di partenza inspirando. Suggerimento: tieni i palmi rivolti verso il basso con il mignolo leggermente più alto durante il movimento per concentrare lo sforzo principalmente sulle spalle. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Partials/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Partials/1.jpg'], 
  NOW()
),
(
  '98d3d30b-e433-4209-a5b0-b2cfbe4891e2', 
  'Power Snatch', 
  'Power Snatch', 
  'Begin with a loaded barbell on the floor. The bar should be close to or touching the shins, and a wide grip should be taken on the bar. The feet should be directly below the hips, with the feet turned out as needed. Lower the hips, with the chest up and the head looking forward. The shoulders should be just in front of the bar. This will be the starting position.
Begin the first pull by driving through the front of the heels, raising the bar from the ground. The back angle should stay the same until the bar passes the knees.
Transition into the second pull by extending through the hips knees and ankles, driving the bar up as quickly as possible. The bar should be close to the body. At peak extension, shrug the shoulders and allow the elbows to flex to the side.
As you move your feet into the receiving position, a slightly wider position, pull yourself below the bar as you elevate the bar overhead. The bar should be received in a partial squat. Continue raising the bar to the overhead position, receiving the bar locked out overhead.
Return to a standing position with the weight over head.', 
  'Inizia con un bilanciere carico a terra. La sbarra deve essere vicina o a contatto con gli stinchi; impugna la sbarra con una presa larga. I piedi devono essere posizionati direttamente sotto le anche, ruotati verso l''esterno secondo necessità. Abbassa le anche mantenendo il petto alto e la testa rivolta in avanti. Le spalle devono trovarsi leggermente oltre la sbarra. Questa è la posizione di partenza. Inizia la prima trazione spingendo attraverso l''avampiede e sollevando il bilanciere da terra. L''angolo della schiena deve rimanere costante finché la sbarra non supera le ginocchia. Transita nella seconda trazione estendendo anche, ginocchia e caviglie, spingendo il bilanciere verso l''alto il più rapidamente possibile. Il bilanciere deve rimanere vicino al corpo. Al culmine dell''estensione, esegui una scrollata di spalle e permetti ai gomiti di flettersi lateralmente. Mentre sposti i piedi nella posizione di ricezione, leggermente più ampia, tirati sotto la sbarra mentre la porti sopra la testa. Il bilanciere va ricevuto in uno squat parziale. Continua a sollevare la sbarra fino alla posizione di blocco sopra la testa. Torna in posizione eretta con il peso sopra la testa.', 
  'hamstrings', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Snatch/1.jpg'], 
  NOW()
),
(
  '59bd0e9a-2468-4e5e-9f3a-93291ef9f96f', 
  'Power Snatch from Blocks', 
  'Power Snatch dai blocchi', 
  'Begin with a loaded barbell on boxes or stands of the desired height. A wide grip should be taken on the bar. The feet should be directly below the hips, with the feet turned out as needed. Lower the hips, with the chest up and the head looking forward. The shoulders should be just in front of the bar, with the elbows pointed out. This will be the starting position.
Begin the first pull by driving through the front of the heels, raising the bar from the boxes.
Transition into the second pull by extending through the hips knees and ankles, driving the bar up as quickly as possible. The bar should be close to the body. At peak extension, shrug the shoulders and allow the elbows to flex to the side.
As you move your feet into the receiving position, forcefully pull yourself below the bar as you elevate the bar overhead. The feet should move to just outside the hips, turned out as necessary. Receive the bar above a full squat and with the arms fully extended overhead.
Keeping the bar aligned over the front of the heels, your head and chest up, drive through heels of the feet to move to a standing position. Carefully return the weight to the boxes.', 
  'Inizia con un bilanciere carico posizionato su blocchi o supporti all''altezza desiderata. Usa una presa larga. I piedi devono essere sotto le anche, ruotati verso l''esterno se necessario. Abbassa le anche, petto in fuori e testa rivolta in avanti. Le spalle devono essere appena oltre la sbarra, con i gomiti rivolti verso l''esterno. Questa è la posizione di partenza. Avvia la prima trazione spingendo attraverso l''avampiede per sollevare il bilanciere dai blocchi. Transita nella seconda trazione estendendo anche, ginocchia e caviglie, spingendo il bilanciere verso l''alto rapidamente. Il bilanciere deve restare vicino al corpo. Al picco dell''estensione, esegui una scrollata di spalle lasciando flettere i gomiti lateralmente. Mentre sposti i piedi nella posizione di ricezione, tirati energicamente sotto la sbarra sollevandola sopra la testa. I piedi devono portarsi appena oltre la larghezza delle anche. Ricevi la sbarra in uno squat profondo con le braccia completamente estese sopra la testa. Mantenendo la sbarra allineata sopra l''avampiede, testa e petto alti, spingi sui talloni per tornare in posizione eretta. Riponi con cura il peso sui blocchi.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Snatch_from_Blocks/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Snatch_from_Blocks/1.jpg'], 
  NOW()
),
(
  'a40a6d1f-ca85-45de-a7c7-4c153c1e01ff', 
  'Power Stairs', 
  'Power Stairs', 
  'In the power stairs, implements are moved up a staircase. For training purposes, these can be performed with a tire or box.
Begin by taking the implement with both hands. Set your feet wide, with your head and chest up. Drive through the ground with your heels, extending your knees and hips to raise the weight from the ground.
As you lean back, attempt to swing the weight onto the stairs, which are usually around 16-18" high. You can use your legs to help push the weight onto the stair.
Repeat for 3-5 repetitions, and continue with a heavier weight, moving as fast as possible.', 
  'Nelle Power Stairs, degli attrezzi vengono spostati su una scala. A scopo di allenamento, si possono utilizzare un pneumatico o una cassa. Inizia afferrando l''attrezzo con entrambe le mani. Tieni i piedi larghi, testa e petto alti. Spingi verso il terreno con i talloni, estendendo ginocchia e anche per sollevare il peso da terra. Mentre ti inclini all''indietro, prova a sollevare il peso sul gradino, che solitamente è alto circa 40-45 cm. Puoi usare le gambe per aiutare a spingere il peso sul gradino. Ripeti per 3-5 volte e continua con un peso maggiore, muovendoti il più velocemente possibile.', 
  'hamstrings', 
  'adductors', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Stairs/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Power_Stairs/1.jpg'], 
  NOW()
),
(
  '9dc67eeb-d028-4055-a417-3f4bc3644e43', 
  'Preacher Curl', 
  'Preacher Curl', 
  'To perform this movement you will need a preacher bench and an E-Z bar. Grab the E-Z curl bar at the close inner handle (either have someone hand you the bar which is preferable or grab the bar from the front bar rest provided by most preacher benches). The palm of your hands should be facing forward and they should be slightly tilted inwards due to the shape of the bar.
With the upper arms positioned against the preacher bench pad and the chest against it, hold the E-Z Curl Bar at shoulder length. This will be your starting position.
As you breathe in, slowly lower the bar until your upper arm is extended and the biceps is fully stretched.
As you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the bar is at shoulder height. Squeeze the biceps hard and hold this position for a second.
Repeat for the recommended amount of repetitions.', 
  'Per eseguire questo movimento avrai bisogno di una panca Scott e di un bilanciere EZ. Afferra il bilanciere EZ all''impugnatura interna stretta (è preferibile farsi passare il bilanciere da qualcuno o prenderlo dal supporto frontale della panca). I palmi delle mani devono essere rivolti verso l''alto e leggermente inclinati verso l''interno a causa della forma del bilanciere. Con le braccia posizionate contro l''imbottitura della panca e il petto appoggiato ad essa, tieni il bilanciere all''altezza delle spalle. Questa è la posizione di partenza. Inspirando, abbassa lentamente il bilanciere finché le braccia non sono estese e i bicipiti completamente allungati. Espirando, usa i bicipiti per sollevare il peso finché i bicipiti non sono completamente contratti e il bilanciere all''altezza delle spalle. Contrai intensamente i bicipiti e mantieni la posizione per un secondo. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Preacher_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Preacher_Curl/1.jpg'], 
  NOW()
),
(
  '456baa98-ab86-4837-bc4b-256c50af5745', 
  'Preacher Hammer Dumbbell Curl', 
  'Preacher Hammer Dumbbell Curl', 
  'Place the upper part of both arms on top of the preacher bench as you hold a dumbbell in each hand with the palms facing each other (neutral grip).
As you breathe in, slowly lower the dumbbells until your upper arm is extended and the biceps is fully stretched.
As you exhale, use the biceps to curl the weight up until your biceps is fully contracted and the dumbbells are at shoulder height.
Squeeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.', 
  'Posiziona la parte superiore delle braccia sopra la panca Scott tenendo un manubrio in ciascuna mano con i palmi rivolti l''uno verso l''altro (presa neutra). Inspirando, abbassa lentamente i manubri finché le braccia non sono estese e i bicipiti completamente allungati. Espirando, usa i bicipiti per sollevare il peso finché i bicipiti non sono completamente contratti e i manubri all''altezza delle spalle. Contrai intensamente i bicipiti per un secondo nella posizione di massima contrazione e ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Preacher_Hammer_Dumbbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Preacher_Hammer_Dumbbell_Curl/1.jpg'], 
  NOW()
),
(
  'e66ce05c-2af6-445f-ab99-4aabbb19d76f', 
  'Press Sit-Up', 
  'Press Sit-Up', 
  'To begin, lie down on a bench with a barbell resting on your chest. Position your legs so they are secure on the extension of the abdominal bench. This is the starting position.
While inhaling, tighten your abdominals and glutes. Simultaneously curl your torso as you do when performing a sit-up and press the barbell to an overhead position while exhaling. Tip: Use your arms to push the barbell out as you perform this exercise while still focusing on the abdominal muscles.
Lower your upper body back down to the starting position while bringing the barbell back down to your torso. Remember to breathe in while lowering the body.
Repeat for the recommended amount of repetitions.', 
  'Per iniziare, sdraiati su una panca con un bilanciere appoggiato sul petto. Posiziona le gambe in modo che siano bloccate sull''estensione della panca per addominali. Questa è la posizione di partenza. Inspirando, contrai addominali e glutei. Contemporaneamente, solleva il busto come in un normale sit-up ed esegui una distensione del bilanciere sopra la testa espirando. Consiglio: usa le braccia per spingere il bilanciere verso l''alto durante l''esercizio, mantenendo il focus sulla muscolatura addominale. Riporta il busto alla posizione di partenza mentre abbassi il bilanciere verso il torace. Ricordati di inspirare durante la fase di discesa. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  'chest', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Press_Sit-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Press_Sit-Up/1.jpg'], 
  NOW()
),
(
  'a460a8a8-8ab7-4f68-a080-51d1e9a6dd6f', 
  'Prone Manual Hamstring', 
  'Prone Manual Hamstring', 
  'You will need a partner for this exercise. Lay face down with your legs straight. Your assistant will place their hand on your heel.
To begin, flex the knee to curl your leg up. Your partner should provide resistance, starting light and increasing the pressure as the movement is completed. Communicate with your partner to monitor appropriate resistance levels.
Pause at the top, returning the leg to the starting position as your partner provides resistance going the other direction.', 
  'Per questo esercizio è necessario un partner. Sdraiati a pancia in giù con le gambe dritte. L''assistente posizionerà la mano sul tuo tallone. Per iniziare, fletti il ginocchio per sollevare la gamba. Il tuo partner deve fornire resistenza, iniziando con una pressione leggera e aumentandola man mano che il movimento viene completato. Comunica con il partner per monitorare il livello di resistenza appropriato. Fai una pausa nella parte alta del movimento e torna alla posizione di partenza mentre il partner continua a fornire resistenza nel verso opposto.', 
  'hamstrings', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Prone_Manual_Hamstring/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Prone_Manual_Hamstring/1.jpg'], 
  NOW()
),
(
  'd8e71b61-aff2-47e6-a29c-a5310972aa0d', 
  'Prowler Sprint', 
  'Prowler Sprint', 
  'Place your sled on an appropriate surface, loaded to a suitable weight. The sled should provide enough resistance to require effort, but not so heavy that you are significantly slowed down.
You may use the upright or the low handles for this exercise. Place your hands on the handles with your arms extended, leaning into the implement.
With good posture, drive through the ground with alternating, short steps. Move as fast as you can for a short distance.', 
  'Posiziona la slitta su una superficie adatta, caricandola con un peso adeguato. La slitta deve offrire una resistenza sufficiente a richiedere impegno, ma non essere così pesante da rallentarti eccessivamente. Puoi utilizzare le impugnature verticali o quelle basse per questo esercizio. Appoggia le mani sulle impugnature con le braccia distese, spingendo contro l''attrezzo. Mantenendo una postura corretta, spingi contro il terreno con passi brevi e alternati. Muoviti il più velocemente possibile per una breve distanza.', 
  'hamstrings', 
  'calves', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Prowler_Sprint/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Prowler_Sprint/1.jpg'], 
  NOW()
),
(
  'ffce4403-2a49-42d1-8fcf-f7dce04f6410', 
  'Pull Through', 
  'Pull Through', 
  'Begin standing a few feet in front of a low pulley with a rope or handle attached. Face away from the machine, straddling the cable, with your feet set wide apart.
Begin the movement by reaching through your legs as far as possible, bending at the hips. Keep your knees slightly bent. Keeping your arms straight, extend through the hip to stand straight up. Avoid pulling upward through the shoulders; all of the motion should originate through the hips.', 
  'Inizia in piedi a breve distanza da una carrucola bassa con una corda o un''impugnatura attaccata. Rivolgi le spalle alla macchina, posizionandoti a cavalcioni del cavo con i piedi ben distanziati. Inizia il movimento allungandoti tra le gambe il più possibile, piegandoti sulle anche. Mantieni le ginocchia leggermente flesse. Tenendo le braccia dritte, estendi le anche per tornare in posizione eretta. Evita di sollevare il carico usando le spalle; tutto il movimento deve originare dalle anche.', 
  'glutes', 
  'hamstrings', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pull_Through/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pull_Through/1.jpg'], 
  NOW()
),
(
  '550c3eb2-9bd4-47f0-8902-73cf2b2ef95a', 
  'Pullups', 
  'Pullups (Trazioni alla sbarra)', 
  'Grab the pull-up bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.
As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.
Pull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.
After a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.
Repeat this motion for the prescribed amount of repetitions.', 
  'Afferra la sbarra per le trazioni con i palmi rivolti in avanti usando la presa prescritta. Nota sulle prese: per una presa larga, le mani devono essere a una distanza maggiore della larghezza delle spalle. Per una presa media, la distanza deve essere pari alla larghezza delle spalle e, per una presa stretta, inferiore ad essa. Con entrambe le braccia distese davanti a te che tengono la sbarra, porta il busto leggermente all''indietro (circa 30 gradi) inarcando la zona lombare e spingendo il petto in fuori. Questa è la posizione di partenza. Solleva il busto fino a far toccare la sbarra alla parte superiore del petto, portando spalle e braccia verso il basso e indietro. Espira durante questa fase. Consiglio: concentrati sulla contrazione dei muscoli dorsali una volta raggiunta la posizione di massima contrazione. La parte superiore del busto deve rimanere ferma mentre si sposta nello spazio e solo le braccia devono muoversi. Gli avambracci devono solo sostenere la presa sulla sbarra. Dopo un secondo di contrazione, inizia a inspirare e abbassa lentamente il busto alla posizione iniziale finché le braccia non sono completamente distese e i dorsali completamente allungati. Ripeti il movimento per il numero di ripetizioni prescritto.', 
  'lats', 
  'biceps', 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg'], 
  NOW()
),
(
  'af3242fd-2cbf-4736-8396-a422a9f37b4c', 
  'Push-Up Wide', 
  'Push-Up a presa larga', 
  'With your hands wide apart, support your body on your toes and hands in a plank position. Your elbows should be extended and your body straight. Do not allow your hips to sag. This will be your starting position.
To begin, allow the elbows to flex, lowering your chest to the floor as you inhale.
Using your pectoral muscles, press your upper body back up to the starting position by extending the elbows. Exhale as you perform this step.
After pausing at the contracted position, repeat the movement for the prescribed amount of repetitions.', 
  'Mettiti in posizione di plank con le mani ben distanziate tra loro, sostenendo il corpo sulle punte dei piedi e sulle mani. Le braccia devono essere tese e il corpo in linea retta. Non lasciare che i fianchi si abbassino; questa sarà la posizione di partenza. Per iniziare, fletti i gomiti abbassando il petto verso il pavimento mentre inspiri. Utilizzando i muscoli pettorali, spingi la parte superiore del corpo verso l''alto fino alla posizione iniziale distendendo i gomiti. Espira durante questa fase. Dopo una breve pausa nella posizione di massima contrazione, ripeti il movimento per il numero di ripetizioni prescritto.', 
  'chest', 
  'abdominals', 
  'body only', 
  'beginner', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Up_Wide/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Up_Wide/1.jpg'], 
  NOW()
),
(
  '63aa4160-1fbf-459b-9b12-f2932f3da134', 
  'Push-Ups - Close Triceps Position', 
  'Push-Up - Posizione stretta per tricipiti', 
  'Lie on the floor face down and place your hands closer than shoulder width for a close hand position. Make sure that you are holding your torso up at arms'' length.
Lower yourself until your chest almost touches the floor as you inhale.
Using your triceps and some of your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.
After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati a terra a faccia in giù e posiziona le mani a una larghezza inferiore a quella delle spalle. Assicurati di mantenere il busto sollevato con le braccia tese. Abbassati finché il petto non sfiora quasi il pavimento mentre inspiri. Utilizzando i tricipiti e parte dei muscoli pettorali, spingi il busto verso l''alto tornando alla posizione di partenza e contrai i pettorali. Espira durante questa fase. Dopo un secondo di pausa nella posizione di massima contrazione, ripeti il movimento per il numero di ripetizioni prescritto.', 
  'triceps', 
  'chest', 
  'body only', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_-_Close_Triceps_Position/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_-_Close_Triceps_Position/1.jpg'], 
  NOW()
),
(
  'a584e0c1-27ff-441b-80d2-3c9c5b72426d', 
  'Push-Ups With Feet Elevated', 
  'Push-Up con piedi rialzati', 
  'Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length.
Place your toes on top of a flat bench. This will allow your body to be elevated. Note: The higher the elevation of the flat bench, the higher the resistance of the exercise is.
Lower yourself until your chest almost touches the floor as you inhale.
Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.
After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati a terra a faccia in giù e posiziona le mani a circa 90 cm di distanza l''una dall''altra, mantenendo il busto sollevato con le braccia tese. Appoggia le punte dei piedi su una panca piana; questo solleverà il corpo. Nota: maggiore è l''altezza della panca, maggiore sarà la resistenza dell''esercizio. Abbassati finché il petto non sfiora quasi il pavimento mentre inspiri. Utilizzando i pettorali, spingi il busto verso l''alto tornando alla posizione di partenza e contrai i pettorali. Espira durante questa fase. Dopo un secondo di pausa nella posizione di massima contrazione, ripeti il movimento per il numero di ripetizioni prescritto.', 
  'chest', 
  'shoulders', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_With_Feet_Elevated/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_With_Feet_Elevated/1.jpg'], 
  NOW()
),
(
  '15274580-f976-4680-9bfe-4d1c455d3666', 
  'Push-Ups With Feet On An Exercise Ball', 
  'Push-Up con piedi su fitball', 
  'Lie on the floor face down and place your hands about 36 inches apart from each other holding your torso up at arms length.
Place your toes on top of an exercise ball. This will allow your body to be elevated.
Lower yourself until your chest almost touches the floor as you inhale.
Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.
After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati a terra a faccia in giù e posiziona le mani a circa 90 cm di distanza l''una dall''altra, mantenendo il busto sollevato con le braccia tese. Appoggia le punte dei piedi sopra una fitball per sollevare il corpo. Abbassati finché il petto non sfiora quasi il pavimento mentre inspiri. Utilizzando i pettorali, spingi il busto verso l''alto tornando alla posizione di partenza e contrai i pettorali. Espira durante questa fase. Dopo un secondo di pausa nella posizione di massima contrazione, ripeti il movimento per il numero di ripetizioni prescritto.', 
  'chest', 
  'shoulders', 
  'exercise ball', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_With_Feet_On_An_Exercise_Ball/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_With_Feet_On_An_Exercise_Ball/1.jpg'], 
  NOW()
),
(
  '85d323c5-c04b-43a3-a9e9-ce6e842cf4a6', 
  'Push Press', 
  'Push Press', 
  NULL, 
  'In posizione eretta con il bilanciere appoggiato sulle spalle, esegui un leggero ''dip'' (piegamento delle ginocchia) senza spostare i fianchi all''indietro. Spingi con forza attraverso i talloni per generare velocità e spinta, estendendo contemporaneamente le braccia per portare il bilanciere sopra la testa. Torna alla posizione di partenza assorbendo l''impatto con le gambe.', 
  'shoulders', 
  'quadriceps', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Press/1.jpg'], 
  NOW()
),
(
  '2d4abd3c-08c8-4d6c-94eb-18e6cb1423d6', 
  'Push Press - Behind the Neck', 
  'Push Press - Dietro la nuca', 
  'Standing with the weight racked on the back of the shoulders, begin with the dip. With your feet directly under your hips, flex the knees without moving the hips backward. Go down only slightly, and reverse direction as powerfully as possible. Drive through the heels create as much speed and force as possible, moving the bar in a vertical path.
Using the momentum generated, finish pressing the weight overhead be extending through the arms.
Return to the starting position, using your legs to absorb the impact.', 
  'In posizione eretta con il bilanciere posizionato sulla parte posteriore delle spalle, inizia con il ''dip''. Con i piedi allineati sotto i fianchi, fletti le ginocchia senza spostare i fianchi all''indietro. Scendi solo leggermente e inverte la direzione con la massima potenza. Spingi attraverso i talloni per generare velocità e forza, muovendo il bilanciere lungo una traiettoria verticale. Sfrutta lo slancio generato per completare la spinta sopra la testa estendendo le braccia. Torna alla posizione di partenza usando le gambe per assorbire l''impatto.', 
  'shoulders', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Press_-_Behind_the_Neck/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Press_-_Behind_the_Neck/1.jpg'], 
  NOW()
),
(
  '0f76d2f8-16f1-495e-8514-f1b57dd3160c', 
  'Push Up to Side Plank', 
  'Push-Up con rotazione in side plank', 
  'Get into pushup position on the toes with your hands just outside of shoulder width.
Perform a pushup by allowing the elbows to flex. As you descend, keep your body straight.
Do one pushup and as you come up, shift your weight on the left side of the body, twist to the side while bringing the right arm up towards the ceiling in a side plank.
Lower the arm back to the floor for another pushup and then twist to the other side.
Repeat the series, alternating each side, for 10 or more reps.', 
  'Assumi la posizione di push-up sulle punte dei piedi con le mani appena oltre la larghezza delle spalle. Esegui un push-up flettendo i gomiti e mantenendo il corpo dritto. Risalendo, sposta il peso sul lato sinistro del corpo, ruotando lateralmente e portando il braccio destro verso il soffitto in posizione di side plank. Riporta il braccio a terra per un altro push-up e ruota poi verso l''altro lato. Ripeti la serie alternando i lati per 10 o più ripetizioni.', 
  'chest', 
  'abdominals', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Up_to_Side_Plank/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push_Up_to_Side_Plank/1.jpg'], 
  NOW()
),
(
  '5ebc6fce-66b0-4e74-8911-c90589fd8201', 
  'Pushups', 
  'Push-up (Piegamenti)', 
  'Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length.
Next, lower yourself downward until your chest almost touches the floor as you inhale.
Now breathe out and press your upper body back up to the starting position while squeezing your chest.
After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.', 
  'Sdraiati a terra a faccia in giù, posiziona le mani a circa 90 cm di distanza e tieni il busto sollevato a braccia tese. Abbassati finché il petto non sfiora quasi il pavimento mentre inspiri. Espira e spingi il busto verso l''alto fino alla posizione di partenza, contraendo i pettorali. Dopo una breve pausa nella posizione di massima contrazione, inizia nuovamente la discesa per il numero di ripetizioni desiderato.', 
  'chest', 
  'shoulders', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg'], 
  NOW()
),
(
  '62de8751-f5e9-4505-b1e5-ded923a8dc1c', 
  'Pushups (Close and Wide Hand Positions)', 
  'Push-up (Posizioni mani larghe e strette)', 
  'Lie on the floor face down and body straight with your toes on the floor and the hands wider than shoulder width for a wide hand position and closer than shoulder width for a close hand position. Make sure you are holding your torso up at arms length.
Lower yourself until your chest almost touches the floor as you inhale.
Using your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step.
After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati a terra a faccia in giù con il corpo dritto, le punte dei piedi a terra e le mani posizionate più larghe delle spalle (per la presa larga) o più strette (per la presa stretta). Mantieni il busto sollevato a braccia tese. Abbassati finché il petto non sfiora quasi il pavimento mentre inspiri. Utilizzando i pettorali, spingi il busto verso l''alto tornando alla posizione di partenza e contrai i pettorali. Espira durante questa fase. Dopo un secondo di pausa nella posizione di massima contrazione, ripeti il movimento per il numero di ripetizioni prescritto.', 
  'chest', 
  'shoulders', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups_Close_and_Wide_Hand_Positions/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups_Close_and_Wide_Hand_Positions/1.jpg'], 
  NOW()
),
(
  'c7a35ecb-7a4d-410f-a5f8-9915558fd694', 
  'Pyramid', 
  'Pyramid (esercizio con palla)', 
  'Start off by rolling your torso forward onto the ball so your hips rest on top of the ball and become the highest point of your body.
Rest your hands and feet on the floor. Your arms and legs can be slightly bent or straight, depending on the size of the ball, your flexibility, and the length of your limbs. This also helps develop stabilizing strength in your torso and shoulders.', 
  'Inizia facendo rotolare il busto in avanti sopra la palla finché i fianchi non poggiano su di essa, diventando il punto più alto del corpo. Appoggia mani e piedi a terra. Braccia e gambe possono essere leggermente flesse o dritte, a seconda delle dimensioni della palla, della flessibilità e della lunghezza degli arti. Questo esercizio aiuta anche a sviluppare la forza stabilizzatrice del busto e delle spalle.', 
  'lower back', 
  'shoulders', 
  'exercise ball', 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pyramid/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pyramid/1.jpg'], 
  NOW()
),
(
  '1da6f028-6959-4bea-97b1-fd16713e3176', 
  'Quad Stretch', 
  'Stretching dei quadricipiti', 
  'Lay on your side. Loop a belt, rope, or band around your top foot. Flex the knee and extend your hip, attempting to touch your glutes with your foot, and holding the belt with your hands. This will be your starting position.
With the belt being held over the shoulder or overhead, gently pull to increase the stretch in the quadriceps. Hold for 10-20 seconds, and then switch sides.', 
  'Sdraiati su un fianco. Avvolgi una cinghia, una corda o una banda elastica attorno al piede superiore. Fletti il ginocchio ed estendi l''anca, cercando di toccare i glutei con il tallone mentre tieni la cinghia con le mani. Questa sarà la posizione di partenza. Tenendo la cinghia sopra la spalla o sopra la testa, tira delicatamente per aumentare lo stretching del quadricipite. Mantieni per 10-20 secondi, quindi cambia lato.', 
  'quadriceps', 
  NULL, 
  'other', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Quad_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Quad_Stretch/1.jpg'], 
  NOW()
),
(
  'a226a1bd-3ff5-4463-9c7e-56447b5e9cf4', 
  'Quadriceps-SMR', 
  'SMR dei quadricipiti', 
  'Lay facedown on the floor with your weight supported by your hands or forearms. Place a foam roll underneath one leg on the quadriceps, and keep the foot off of the ground. Make sure to relax the leg as much as possible. This will be your starting position.
Shifting as much weight onto the leg to be stretched as is tolerable, roll over the foam from above the knee to below the hip, holding points of tension for 10-30 seconds. Switch sides.', 
  'Sdraiati a pancia in giù sul pavimento con il peso sostenuto dalle mani o dagli avambracci. Posiziona un foam roller sotto una gamba, a livello del quadricipite, mantenendo il piede sollevato da terra. Assicurati di rilassare la gamba il più possibile. Questa sarà la posizione di partenza. Spostando quanto più peso possibile sulla gamba da trattare, rotola sul foam roller dalla zona sopra il ginocchio fino a sotto l''anca, mantenendo la pressione sui punti di tensione per 10-30 secondi. Cambia lato.', 
  'quadriceps', 
  NULL, 
  'foam roll', 
  'intermediate', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Quadriceps-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Quadriceps-SMR/1.jpg'], 
  NOW()
),
(
  '15f671d3-36e2-42b9-88eb-7cf75143b75a', 
  'Quick Leap', 
  'Quick Leap', 
  'You will need a box for this exerise.
Begin facing the box standing 1-2 feet from its edge.
By utilizing your hips, hop onto the box, landing on both legs. Ensure that you land with your legs bent and your feet flat.
Immediately upon landing, fully extend through the entire body and swing your arms overhead to explode off of the box. Use your legs to absorb the impact of landing.', 
  'Per questo esercizio avrai bisogno di un box (piattaforma). Inizia di fronte al box, in piedi a 30-60 cm dal bordo. Utilizzando la spinta delle anche, salta sul box atterrando su entrambe le gambe. Assicurati di atterrare con le gambe flesse e i piedi piatti. Immediatamente dopo l''atterraggio, estendi completamente tutto il corpo e slancia le braccia verso l''alto per esplodere dal box. Usa le gambe per ammortizzare l''impatto dell''atterraggio.', 
  'quadriceps', 
  'calves', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Quick_Leap/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Quick_Leap/1.jpg'], 
  NOW()
),
(
  'a8852550-ce72-48a4-aff5-1c6aa82336ca', 
  'Rack Delivery', 
  'Rack Delivery', 
  'This drill teaches the delivery of the barbell to the rack position on the shoulders. Begin holding a bar in the scarecrow position, with the upper arms parallel to the floor, and the forearms hanging down. Use a hook grip, with your fingers wrapped over your thumbs.
Begin by rotating the elbows around the bar, delivering the bar to the shoulders. As your elbows come forward, relax your grip. The shoulders should be protracted, providing a shelf for the bar, which should lightly contact the throat.
It is important that the bar stay close to the body at all times, as with a heavier load any distance will result in an unwanted collision. As the movement becomes smoother, speed and load can be increased before progressing further.', 
  'Questo esercizio insegna a portare il bilanciere nella posizione di ''rack'' sulle spalle. Inizia tenendo il bilanciere nella posizione ''scarecrow'' (spaventapasseri), con la parte superiore delle braccia parallela al pavimento e gli avambracci rivolti verso il basso. Usa una ''hook grip'', con le dita che avvolgono i pollici. Inizia ruotando i gomiti attorno al bilanciere, portandolo sulle spalle. Man mano che i gomiti avanzano, rilassa la presa. Le spalle devono essere in protrazione, creando un supporto per il bilanciere, che deve sfiorare la gola. È importante che il bilanciere rimanga sempre vicino al corpo, poiché con carichi maggiori qualsiasi distanza risulterebbe in un urto indesiderato. Quando il movimento diventa più fluido, è possibile aumentare velocità e carico.', 
  'shoulders', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rack_Delivery/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rack_Delivery/1.jpg'], 
  NOW()
),
(
  '71da2a8f-097c-4dae-83b3-59dbdfce51d7', 
  'Rack Pull with Bands', 
  'Rack Pull con bande elastiche', 
  'Set up in a power rack with the bar on the pins. The pins should be set to the desired point; just below the knees, just above, or in the mid thigh position. Attach bands to the base of the rack, or secure them with dumbbells. Attach the other end to the bar. You may need to choke the bands to provide tension.
Position yourself against the bar in proper deadlifting position. Your feet should be under your hips, your grip shoulder width, back arched, and hips back to engage the hamstrings. Since the weight is typically heavy, you may use a mixed grip, a hook grip, or use straps to aid in holding the weight.
With your head looking forward, extend through the hips and knees, pulling the weight up and back until lockout. Be sure to pull your shoulders back as you complete the movement. Return the weight to the pins and repeat.', 
  'Posizionati in un power rack con il bilanciere sui perni. I perni devono essere impostati all''altezza desiderata: appena sotto le ginocchia, appena sopra, o a metà coscia. Attacca le bande alla base del rack o fissale con dei manubri, quindi aggancia l''altra estremità al bilanciere. Potrebbe essere necessario avvolgere le bande per creare tensione. Posizionati contro il bilanciere in una corretta posizione di stacco (deadlift). I piedi devono essere sotto le anche, la presa alla larghezza delle spalle, la schiena inarcata e le anche spinte indietro per coinvolgere i femorali. Poiché il peso è solitamente elevato, puoi usare una presa mista, una ''hook grip'' o delle cinghie. Con lo sguardo in avanti, estendi anche e ginocchia, tirando il peso verso l''alto fino al bloccaggio. Assicurati di tirare le spalle indietro completando il movimento. Riporta il peso sui perni e ripeti.', 
  'lower back', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rack_Pull_with_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rack_Pull_with_Bands/1.jpg'], 
  NOW()
),
(
  '58de4924-1f7d-494b-9f15-671871760f6c', 
  'Rack Pulls', 
  'Rack Pulls', 
  'Set up in a power rack with the bar on the pins. The pins should be set to the desired point; just below the knees, just above, or in the mid thigh position. Position yourself against the bar in proper deadlifting position. Your feet should be under your hips, your grip shoulder width, back arched, and hips back to engage the hamstrings. Since the weight is typically heavy, you may use a mixed grip, a hook grip, or use straps to aid in holding the weight.
With your head looking forward, extend through the hips and knees, pulling the weight up and back until lockout. Be sure to pull your shoulders back as you complete the movement.
Return the weight to the pins and repeat.', 
  'Posizionati in un power rack con il bilanciere sui perni. I perni devono essere impostati all''altezza desiderata: appena sotto le ginocchia, appena sopra, o a metà coscia. Posizionati contro il bilanciere in una corretta posizione di stacco (deadlift). I piedi devono essere sotto le anche, la presa alla larghezza delle spalle, la schiena inarcata e le anche spinte indietro per coinvolgere i femorali. Poiché il peso è solitamente elevato, puoi usare una presa mista, una ''hook grip'' o delle cinghie. Con lo sguardo in avanti, estendi anche e ginocchia, tirando il peso verso l''alto fino al bloccaggio. Assicurati di tirare le spalle indietro completando il movimento. Riporta il peso sui perni e ripeti.', 
  'lower back', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rack_Pulls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rack_Pulls/1.jpg'], 
  NOW()
),
(
  '3528b950-deab-4d60-acc0-fb91158e620d', 
  'Rear Leg Raises', 
  'Rear Leg Raises', 
  'Place yourself on your hands knees on an exercise mat. Your head should be looking forward and the bend of the knees should create a 90-degree angle between the hamstrings and the calves. This will be your starting position.
Extend one leg up and behind you. The knee and hip should both extend. Repeat for 5-10 repetitions, and then switch sides.', 
  'Mettiti in quadrupedia su un tappetino da fitness. Lo sguardo deve essere rivolto in avanti e le ginocchia devono formare un angolo di 90 gradi tra femorali e polpacci. Questa è la posizione di partenza. Estendi una gamba verso l''alto e all''indietro. Sia il ginocchio che l''anca devono estendersi. Esegui 5-10 ripetizioni, quindi cambia lato.', 
  'quadriceps', 
  NULL, 
  'body only', 
  'beginner', 
  NULL, 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rear_Leg_Raises/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rear_Leg_Raises/1.jpg'], 
  NOW()
),
(
  '588d3a1c-3e97-48a7-ae06-6dc405a2dc0f', 
  'Recumbent Bike', 
  'Cyclette orizzontale (Recumbent Bike)', 
  'To begin, seat yourself on the bike and adjust the seat to your height.
Select the desired option from the menu. You may have to start pedaling to turn it on. You can use the manual setting, or you can select a program to use. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. The level of resistance can be changed throughout the workout. The handles can be used to monitor your heart rate to help you stay at an appropriate intensity.
Recumbent bikes offer convenience, cardiovascular benefits, and have less impact than other activities. A 150 lb person will burn about 230 calories cycling at a moderate rate for 30 minutes, compared to 450 calories or more running.', 
  'Per iniziare, siediti sulla cyclette e regola il sedile in base alla tua altezza. Seleziona l''opzione desiderata dal menu; potrebbe essere necessario iniziare a pedalare per accenderla. Puoi usare l''impostazione manuale o selezionare un programma. Solitamente, puoi inserire età e peso per stimare le calorie bruciate. Il livello di resistenza può essere modificato durante l''allenamento. Le maniglie possono essere utilizzate per monitorare la frequenza cardiaca e mantenere l''intensità adeguata. Le cyclette orizzontali offrono praticità, benefici cardiovascolari e un impatto inferiore rispetto ad altre attività. Una persona di 68 kg brucerà circa 230 calorie pedalando a un ritmo moderato per 30 minuti, rispetto alle 450 o più calorie bruciate correndo.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Recumbent_Bike/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Recumbent_Bike/1.jpg'], 
  NOW()
),
(
  'f7df9980-850e-4239-90d1-6306454f2a2f', 
  'Return Push from Stance', 
  'Return Push from Stance', 
  'You will need a partner for this drill.
Begin in an athletic 2 or 3 point stance.
At the signal, move into a position to receive the pass from your partner.
Catch the medicine ball with both hands and immediately throw it back to your partner.
You can modify this drill by running different routes.', 
  'Per questo esercizio avrai bisogno di un partner. Inizia in una posizione atletica a 2 o 3 punti. Al segnale, mettiti in posizione per ricevere il passaggio dal tuo partner. Prendi la palla medica con entrambe le mani e rilanciala immediatamente al partner. Puoi modificare questo esercizio variando i percorsi di corsa.', 
  'shoulders', 
  'chest', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Return_Push_from_Stance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Return_Push_from_Stance/1.jpg'], 
  NOW()
),
(
  '7b1d6746-5b11-400c-9c57-8782604296d7', 
  'Reverse Band Bench Press', 
  'Reverse Band Bench Press', 
  'Position a bench inside a power rack, with the bar set to the correct height. Begin by anchoring bands either to band pegs or to the top of the rack. Ensure that you will be position properly under the bands. Attach the other end to the barbell.
Lie on the bench, tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement. However wide your grip, it should cover the ring on the bar.
Pull the bar out of the rack without protracting your shoulders. Focus on squeezing the bar and trying to pull it apart. Lower the bar to your lower chest or upper stomach. The bar, wrist, and elbow should stay in line at all times.
Pause when the barbell touches your torso, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.', 
  'Posiziona una panca all''interno di un power rack, con il bilanciere all''altezza corretta. Inizia ancorando le bande ai pioli o alla parte superiore del rack, assicurandoti di essere posizionato correttamente sotto di esse. Collega l''altra estremità al bilanciere. Sdraiati sulla panca, metti i piedi sotto di te e inarca la schiena. Usando il bilanciere per sostenere il peso, solleva le spalle dalla panca e falle rientrare in retrazione, stringendo le scapole. Usa i piedi per spingere i trapezi contro la panca. Mantieni questa posizione corporea contratta durante tutto il movimento. Indipendentemente dalla larghezza della presa, questa dovrebbe coprire l''anello sul bilanciere. Estrai il bilanciere dal rack senza portare le spalle in protrazione. Concentrati sullo stringere la sbarra cercando di ''tirarla verso l''esterno''. Abbassa il bilanciere verso la parte bassa del petto o la parte alta dello stomaco. Il bilanciere, il polso e il gomito devono rimanere sempre allineati. Fai una pausa quando il bilanciere tocca il busto, quindi spingilo verso l''alto con la massima forza possibile. I gomiti devono rimanere stretti fino al bloccaggio finale.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Bench_Press/1.jpg'], 
  NOW()
),
(
  '296d14c3-341d-4d38-a4d2-b22e47f41467', 
  'Reverse Band Box Squat', 
  'Reverse Band Box Squat', 
  'Begin in a power rack with a box at the appropriate height behind you. Set up the bands either on band pegs or attached to the top of the rack, ensuring they will be directly above the bar during the squat. Attach the other end to the bar.
Begin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.
With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.
Keeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe. Use care to return the barbell to the rack.', 
  'Inizia all''interno di un power rack con un box di altezza adeguata posizionato dietro di te. Fissa le bande elastiche sui pioli o alla parte superiore del rack, assicurandoti che si trovino direttamente sopra il bilanciere durante lo squat. Aggancia l''altra estremità alla barra.
Posizionati sotto il bilanciere e appoggialo sulla parte alta della schiena. Avvicina le scapole e ruota i gomiti in avanti, cercando di flettere il bilanciere sulle spalle. Stacca il bilanciere dal rack, crea un arco teso nella parte bassa della schiena e fai un passo indietro per posizionarti. Tieni i piedi più larghi per enfatizzare il lavoro su schiena, glutei, adduttori e femorali, o più stretti per uno sviluppo maggiore dei quadricipiti. Mantieni lo sguardo rivolto in avanti.
Con schiena, spalle e core in tensione, spingi le ginocchia e i glutei verso l''esterno iniziando la discesa. Siediti all''indietro con le anche finché non sei seduto sul box. Idealmente, le tibie dovrebbero essere perpendicolari al suolo. Fai una pausa quando raggiungi il box e rilassa i flessori dell''anca. Non rimbalzare mai sul box.
Mantenendo il peso sui talloni e spingendo piedi e ginocchia verso l''esterno, spingi verso l''alto dal box guidando il movimento con la testa. Continua la risalita mantenendo la tensione dalla testa ai piedi. Riponi il bilanciere sul rack con attenzione.', 
  'quadriceps', 
  'abductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Box_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Box_Squat/1.jpg'], 
  NOW()
),
(
  '0debd163-2b57-4da6-a2b1-f05d06d11d50', 
  'Reverse Band Deadlift', 
  'Reverse Band Deadlift', 
  'Set the bar up in a power rack. Attach bands to the top of the rack, using either bands pegs or the frame itself. Attach the other end of the bands to the bar.
Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets.
With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward.
After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.
Lower the bar by bending at the hips and guiding it to the floor.', 
  'Posiziona il bilanciere in un power rack. Aggancia le bande alla parte superiore del rack, utilizzando i pioli o la struttura stessa, e fissa l''altra estremità al bilanciere.
Avvicinati alla barra in modo che sia centrata sopra i piedi, posizionati a una larghezza pari a quella delle anche. Fletti le anche per afferrare il bilanciere a larghezza spalle, lasciando che le scapole si protraggano. Solitamente si utilizza una presa prona o una presa mista (supina/prona) per i carichi più pesanti.
Con i piedi e la presa ben impostati, fai un respiro profondo, abbassa le anche e piega le ginocchia finché le tibie non toccano il bilanciere. Guarda in avanti, tieni il petto alto e la schiena arcuata, quindi inizia a spingere sui talloni per sollevare il peso.
Dopo che il bilanciere ha superato le ginocchia, tira energicamente la barra verso di te, avvicinando le scapole mentre spingi le anche in avanti verso il bilanciere.
Abbassa il bilanciere flettendo le anche e guidandolo verso il pavimento.', 
  'lower back', 
  'abductors', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Deadlift/1.jpg'], 
  NOW()
),
(
  'f4bda6e7-3ff6-4927-847d-4964ede191c0', 
  'Reverse Band Power Squat', 
  'Reverse Band Power Squat', 
  'Begin in a power rack with the pins and bar set at the appropriate height. After loading the bar, attach bands to the top of the rack, using either pegs or the frame itself. Attach the other end of the bands to the bar.
Begin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wide for more emphasis on the back, glutes, adductors, and hamstrings.
Keep your head facing forward. With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips as much as possible. Ideally, your shins should be perpendicular to the ground. Lower bar position necessitates a greater torso lean to keep the bar over the heels. Continue until you break parallel, which is defined as the crease of the hip being in line with the top of the knee.
Keeping the weight on your heels and pushing your feet and knees out, drive upward as you lead the movement with your head. Continue upward, maintaining tightness head to toe, until you have returned to the starting position.', 
  'Inizia in un power rack con i perni e il bilanciere all''altezza appropriata. Dopo aver caricato il bilanciere, fissa le bande alla parte superiore del rack utilizzando i pioli o il telaio stesso. Aggancia l''altra estremità delle bande al bilanciere.
Posizionati sotto la barra e appoggiala sulla parte posteriore delle spalle. Avvicina le scapole e ruota i gomiti in avanti, cercando di flettere la barra sulle spalle. Stacca la barra dal rack, crea un arco teso nella parte bassa della schiena e torna in posizione. Tieni i piedi larghi per enfatizzare il lavoro su schiena, glutei, adduttori e femorali.
Mantieni lo sguardo in avanti. Con schiena, spalle e core tesi, spingi ginocchia e glutei verso l''esterno e inizia la discesa. Siediti all''indietro con le anche il più possibile. Idealmente, le tibie dovrebbero essere perpendicolari al suolo. Una posizione più bassa del bilanciere richiede una maggiore inclinazione del busto per mantenere la barra sopra i talloni. Continua fino a superare il parallelo, definito come il punto in cui la piega dell''anca è in linea con la parte superiore del ginocchio.
Mantenendo il peso sui talloni e spingendo piedi e ginocchia verso l''esterno, spingi verso l''alto guidando il movimento con la testa. Continua la salita mantenendo la tensione da capo a piedi, fino a tornare nella posizione iniziale.', 
  'quadriceps', 
  'adductors', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Power_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Power_Squat/1.jpg'], 
  NOW()
),
(
  '3ca358e3-0cf3-4efa-9237-9b795c045baf', 
  'Reverse Band Sumo Deadlift', 
  'Reverse Band Sumo Deadlift', 
  'Begin with a bar loaded on the floor inside of a power rack. Attach bands to the top of the rack, using either pegs or the frame itself. Attach the other end to the barbell.
Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip. Relax the shoulders, which in effect lengthens your arms.
Take a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.
As the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.
Return the weight to the ground by bending at the hips and controlling the weight on the way down.', 
  'Inizia con un bilanciere caricato a terra all''interno di un power rack. Fissa le bande alla parte superiore del rack utilizzando i pioli o la struttura stessa. Aggancia l''altra estremità al bilanciere.
Avvicinati alla barra in modo che intersechi la metà dei piedi. I piedi devono essere posizionati molto larghi, vicino ai dischi. Fletti le anche per afferrare la barra. Le braccia devono essere direttamente sotto le spalle, all''interno delle gambe; puoi usare una presa prona, mista o hook grip. Rilassa le spalle, il che di fatto allunga le braccia.
Fai un respiro, poi abbassa le anche, guardando in avanti con il petto alto. Spingi contro il pavimento, allargando i piedi, con il peso distribuito sulla parte posteriore dei piedi. Estendi anche e ginocchia.
Quando il bilanciere supera le ginocchia, inclinati leggermente all''indietro, spingi le anche verso il bilanciere e contrai le scapole.
Riporta il peso a terra flettendo le anche e controllando il carico durante la discesa.', 
  'hamstrings', 
  'abductors', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Sumo_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Band_Sumo_Deadlift/1.jpg'], 
  NOW()
),
(
  '6e0e1ccb-3f7b-47cb-bd03-9975cbe346ff', 
  'Reverse Barbell Curl', 
  'Reverse Barbell Curl', 
  'Stand up with your torso upright while holding a barbell at shoulder width with the elbows close to the torso. The palm of your hands should be facing down (pronated grip). This will be your starting position.
While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.
Slowly begin to bring the bar back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi con il busto eretto, impugna un bilanciere a larghezza spalle con i gomiti vicini al corpo. I palmi delle mani devono essere rivolti verso il basso (presa prona). Questa è la posizione di partenza.
Mantenendo le braccia ferme, solleva il peso contraendo i bicipiti ed espirando. Solo gli avambracci devono muoversi. Continua il movimento finché i bicipiti sono completamente contratti e il bilanciere è all''altezza delle spalle. Mantieni la posizione di contrazione per un secondo strizzando il muscolo.
Inizia lentamente a riportare il bilanciere nella posizione iniziale mentre inspiri.
Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Barbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Barbell_Curl/1.jpg'], 
  NOW()
),
(
  '1dd570d3-6937-4672-bc3e-c0fa19e47f86', 
  'Reverse Barbell Preacher Curls', 
  'Reverse Barbell Preacher Curls', 
  'Grab an EZ-bar using a shoulder width and palms down (pronated) grip.
Now place the upper part of both arms on top of the preacher bench and have your arms extended. This will be your starting position.
As you exhale, use the biceps to curl the weight up until your biceps are fully contracted and the barbell is at shoulder height. Squeeze the biceps hard for a second at the contracted position.
As you breathe in, slowly lower the barbell until your upper arms are extended and the biceps is fully stretched.
Repeat for the recommended amount of repetitions.', 
  'Afferra un bilanciere EZ con una presa a larghezza spalle e palmi rivolti verso il basso (prona).
Posiziona la parte superiore delle braccia sopra la panca Scott (preacher bench) con le braccia estese. Questa è la posizione di partenza.
Espirando, usa i bicipiti per sollevare il peso finché i bicipiti sono completamente contratti e il bilanciere è all''altezza delle spalle. Strizza i bicipiti con forza per un secondo nella posizione di massima contrazione.
Inspirando, abbassa lentamente il bilanciere finché le braccia sono distese e i bicipiti completamente allungati.
Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'e-z curl bar', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Barbell_Preacher_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Barbell_Preacher_Curls/1.jpg'], 
  NOW()
),
(
  'a6db8a36-4f88-452b-b7d8-c85d34042a6a', 
  'Reverse Cable Curl', 
  'Reverse Cable Curl', 
  'Stand up with your torso upright while holding a bar attachment that is attached to a low pulley using a pronated (palms down) and shoulder width grip. Make sure also that you keep the elbows close to the torso. This will be your starting position.
While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.
Slowly begin to bring the bar back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi con il busto eretto, impugna una barra collegata a un cavo basso con una presa prona (palmi verso il basso) a larghezza spalle. Tieni i gomiti vicini al busto. Questa è la posizione di partenza.
Mantenendo le braccia ferme, solleva il peso contraendo i bicipiti ed espirando. Solo gli avambracci devono muoversi. Continua il movimento finché i bicipiti sono completamente contratti e la barra è all''altezza delle spalle. Mantieni la posizione di contrazione per un secondo strizzando il muscolo.
Inizia lentamente a riportare la barra nella posizione iniziale mentre inspiri.
Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Cable_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Cable_Curl/1.jpg'], 
  NOW()
),
(
  '28b9cdb0-466e-4ad9-90f5-cc356d605c4f', 
  'Reverse Crunch', 
  'Reverse Crunch', 
  'Lie down on the floor with your legs fully extended and arms to the side of your torso with the palms on the floor. Your arms should be stationary for the entire exercise.
Move your legs up so that your thighs are perpendicular to the floor and feet are together and parallel to the floor. This is the starting position.
While inhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the floor. At the end of this movement your knees will be touching your chest.
Hold the contraction for a second and move your legs back to the starting position while exhaling.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati sul pavimento con le gambe completamente distese e le braccia lungo i fianchi con i palmi a terra. Le braccia devono rimanere ferme per tutta la durata dell''esercizio.
Porta le gambe verso l''alto in modo che le cosce siano perpendicolari al pavimento, con i piedi uniti e paralleli al suolo. Questa è la posizione di partenza.
Mentre inspiri, muovi le gambe verso il busto ruotando il bacino all''indietro e sollevando le anche dal pavimento. Alla fine del movimento, le ginocchia dovrebbero toccare il petto.
Mantieni la contrazione per un secondo e torna nella posizione iniziale espirando.
Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Crunch/1.jpg'], 
  NOW()
),
(
  'edc6aa11-a07f-42be-91d6-dbb4a5da5765', 
  'Reverse Flyes', 
  'Reverse Flyes', 
  'To begin, lie down on an incline bench with the chest and stomach pressing against the incline. Have the dumbbells in each hand with the palms facing each other (neutral grip).
Extend the arms in front of you so that they are perpendicular to the angle of the bench. The legs should be stationary while applying pressure with the ball of your toes. This is the starting position.
Maintaining the slight bend of the elbows, move the weights out and away from each other (to the side) in an arc motion while exhaling. Tip: Try to squeeze your shoulder blades together to get the best results from this exercise.
The arms should be elevated until they are parallel to the floor.
Feel the contraction and slowly lower the weights back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions.', 
  'Per iniziare, sdraiati su una panca inclinata con il petto e lo stomaco premuti contro lo schienale. Impugna un manubrio in ogni mano con i palmi rivolti l''uno verso l''altro (presa neutra).
Estendi le braccia davanti a te in modo che siano perpendicolari all''inclinazione della panca. Le gambe devono rimanere ferme facendo pressione con l''avampiede. Questa è la posizione di partenza.
Mantenendo una leggera flessione dei gomiti, sposta i pesi verso l''esterno e lontano l''uno dall''altro (lateralmente) con un movimento ad arco, espirando. Consiglio: cerca di avvicinare le scapole tra loro per ottenere i migliori risultati.
Le braccia devono essere sollevate finché non sono parallele al pavimento.
Percepisci la contrazione e abbassa lentamente i pesi nella posizione di partenza mentre inspiri.
Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Flyes/1.jpg'], 
  NOW()
),
(
  'c2cd912f-2395-4758-a904-b23b241baf24', 
  'Reverse Flyes With External Rotation', 
  'Reverse Flyes With External Rotation', 
  'To begin, lie down on an incline bench set at a 30-degree angle with the chest and stomach pressing against the incline.
Have the dumbbells in each hand with the palms facing down to the floor. Your arms should be in front of you so that they are perpendicular to the angle of the bench. Tip: Your elbows should have a slight bend. The legs should be stationary while applying pressure with the ball of your toes (your heels should not be touching the floor). This is the starting position.
Maintaining the slight bend of the elbows, move the weights out and away from each other in an arc motion while exhaling.
As you lift the weight, your wrist should externally rotate by 90-degrees so that you go from a palms down (pronated) grip to a palms facing each other (neutral) grip. Tip: Try to squeeze your shoulder blades together to get the best results from this exercise.
The arms should be elevated until they are level with the head.
Feel the contraction and slowly lower the weights back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions.', 
  'Per iniziare, sdraiati su una panca inclinata a 30 gradi con il petto e lo stomaco premuti contro lo schienale.
Impugna un manubrio in ogni mano con i palmi rivolti verso il pavimento. Le braccia devono essere davanti a te, perpendicolari all''inclinazione della panca. Consiglio: i gomiti devono avere una leggera flessione. Le gambe devono rimanere ferme facendo pressione con l''avampiede (i talloni non devono toccare il pavimento). Questa è la posizione di partenza.
Mantenendo una leggera flessione dei gomiti, sposta i pesi verso l''esterno con un movimento ad arco espirando.
Durante il sollevamento, ruota esternamente i polsi di 90 gradi, passando da una presa prona (palmi verso il basso) a una presa neutra (palmi rivolti l''uno verso l''altro). Consiglio: cerca di avvicinare le scapole tra loro per massimizzare i risultati.
Le braccia devono essere sollevate fino all''altezza della testa.
Percepisci la contrazione e abbassa lentamente i pesi nella posizione di partenza mentre inspiri.
Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Flyes_With_External_Rotation/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Flyes_With_External_Rotation/1.jpg'], 
  NOW()
),
(
  '51cfe12a-325c-4e0c-90bf-e7b3f074ad33', 
  'Reverse Grip Bent-Over Rows', 
  'Rematore con bilanciere a presa inversa', 
  'Stand erect while holding a barbell with a supinated grip (palms facing up).
Bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.
While keeping the torso stationary, lift the barbell as you breathe out, keeping the elbows close to the body and not doing any force with the forearm other than holding the weights. On the top contracted position, squeeze the back muscles and hold for a second.
Slowly lower the weight again to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Assumi una posizione eretta impugnando un bilanciere con una presa supinata (palmi rivolti verso l''alto). Fletti leggermente le ginocchia e porta il busto in avanti flettendo la vita, mantenendo la schiena dritta finché non è quasi parallela al pavimento. Consiglio: mantieni la testa alta. Il bilanciere dovrebbe penzolare davanti a te, con le braccia perpendicolari al pavimento e al busto. Questa è la posizione di partenza. Mantenendo il busto fermo, solleva il bilanciere espirando, tenendo i gomiti vicini al corpo ed evitando di usare la forza degli avambracci oltre a quella necessaria per reggere il peso. Nella posizione di massima contrazione, contrai i muscoli della schiena e mantieni per un secondo. Abbassa lentamente il peso nella posizione di partenza inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'middle back', 
  'biceps', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Grip_Bent-Over_Rows/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Grip_Bent-Over_Rows/1.jpg'], 
  NOW()
),
(
  '259ab6e4-8646-4ffd-8097-64b90cae11c1', 
  'Reverse Grip Triceps Pushdown', 
  NULL, 
  'Start by setting a bar attachment (straight or e-z) on a high pulley machine.
Facing the bar attachment, grab it with the palms facing up (supinated grip) at shoulder width. Lower the bar by using your lats until your arms are fully extended by your sides. Tip: Elbows should be in by your sides and your feet should be shoulder width apart from each other. This is the starting position.
Slowly elevate the bar attachment up as you inhale so it is aligned with your chest. Only the forearms should move and the elbows/upper arms should be stationary by your side at all times.
Then begin to lower the cable bar back down to the original staring position while exhaling and contracting the triceps hard.
Repeat for the recommended amount of repetitions.', 
  NULL, 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Grip_Triceps_Pushdown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Grip_Triceps_Pushdown/1.jpg'], 
  NOW()
),
(
  '04c9c5a4-e7c5-4063-8b58-ad53d89760c6', 
  'Reverse Hyperextension', 
  'Reverse Hyperextension', 
  'Place your feet between the pads after loading an appropriate weight. Lay on the top pad, allowing your hips to hang off the back, while grasping the handles to hold your position.
To begin the movement, flex the hips, pulling the legs forward.
Reverse the motion by extending the hips, kicking the leg back. It is very important not to over-extend the hip on this movement, stopping short of your full range of motion.
Return by again flexing the hip, pulling the carriage forward as far as you can.
Repeat for the desired number of repetitions.', 
  'Posiziona i piedi tra i cuscinetti dopo aver caricato il peso appropriato. Sdraiati sul cuscinetto superiore, lasciando che le anche sporgano oltre il bordo, afferrando le maniglie per mantenere la posizione. Per iniziare il movimento, fletti le anche tirando le gambe in avanti. Inverti il movimento estendendo le anche e spingendo le gambe all''indietro. È fondamentale non iperestendere l''anca in questo movimento, fermandosi prima di raggiungere il massimo range di movimento. Ritorna flettendo nuovamente l''anca e tirando il carrello in avanti il più possibile. Ripeti per il numero di ripetizioni desiderato.', 
  'hamstrings', 
  'calves', 
  'machine', 
  'intermediate', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Hyperextension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Hyperextension/1.jpg'], 
  NOW()
),
(
  '8e94cf58-faf0-46c7-93c3-57b45653b293', 
  'Reverse Machine Flyes', 
  'Reverse Machine Flyes', 
  'Adjust the handles so that they are fully to the rear. Make an appropriate weight selection and adjust the seat height so the handles are at shoulder level. Grasp the handles with your hands facing inwards. This will be your starting position.
In a semicircular motion, pull your hands out to your side and back, contracting your rear delts.
Keep your arms slightly bent throughout the movement, with all of the motion occurring at the shoulder joint.
Pause at the rear of the movement, and slowly return the weight to the starting position.', 
  'Regola le maniglie in modo che siano completamente arretrate. Seleziona il peso appropriato e regola l''altezza del sedile in modo che le maniglie siano all''altezza delle spalle. Afferra le maniglie con i palmi rivolti verso l''interno. Questa sarà la posizione di partenza. Con un movimento semicircolare, tira le maniglie verso l''esterno e all''indietro, contraendo i deltoidi posteriori. Mantieni le braccia leggermente flesse durante tutto il movimento, facendo sì che l''intero movimento avvenga solo a livello dell''articolazione della spalla. Fermati al culmine del movimento e riporta lentamente il peso alla posizione iniziale.', 
  'shoulders', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Machine_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Machine_Flyes/1.jpg'], 
  NOW()
),
(
  '3c374aa0-cb61-4d24-9278-09b8721d717b', 
  'Reverse Plate Curls', 
  'Reverse Plate Curls', 
  'Start by standing straight with a weighted plate held by both hands and arms fully extended. Use a pronated grip (palms facing down) and make sure your fingers grab the rough side of the plate while your thumb grabs the smooth side. Note: For the best results, grab the weighted plate at an 11:00 and 1:00 o''clock position.
Your feet should be shoulder width apart from each other and the weighted plate should be near the groin area. This is the starting position.
Slowly lift the plate up while keeping the elbows in and the upper arms stationary until your biceps and forearms touch while exhaling. The plate should be evenly aligned with your torso at this point.
Feel the contraction for a second and begin to lower the weight back down to the starting position while inhaling
Repeat for the recommended amount of repetitions.', 
  'Inizia stando in piedi, tenendo un disco con entrambe le mani e le braccia completamente distese. Usa una presa prona (palmi rivolti verso il basso) assicurandoti che le dita facciano presa sul lato ruvido del disco mentre il pollice afferra il lato liscio. Nota: per risultati ottimali, afferra il disco nelle posizioni corrispondenti alle ore 11:00 e 1:00 di un orologio. I piedi devono essere alla larghezza delle spalle e il disco deve trovarsi vicino all''inguine. Questa è la posizione di partenza. Solleva lentamente il disco espirando, mantenendo i gomiti vicini al corpo e la parte superiore delle braccia immobile, finché bicipiti e avambracci non si toccano. A questo punto il disco deve essere allineato con il busto. Senti la contrazione per un secondo e inizia ad abbassare il peso nella posizione di partenza inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  'forearms', 
  'other', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Plate_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Plate_Curls/1.jpg'], 
  NOW()
),
(
  '5e068a76-c399-41a1-9c0e-dae8d3aca99d', 
  'Reverse Triceps Bench Press', 
  'Reverse Triceps Bench Press', 
  'Lie back on a flat bench. Using a close, supinated grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked extended in front of you and perpendicular to the floor. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that as opposed to a regular bench press, you keep the elbows close to the torso at all times in order to maximize triceps involvement.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Sdraiati su una panca piana. Usando una presa stretta e supinata (circa alla larghezza delle spalle), solleva il bilanciere dal rack e tienilo dritto sopra di te con le braccia bloccate in estensione, perpendicolari al pavimento. Questa sarà la posizione di partenza. Inspirando, scendi lentamente finché non senti il bilanciere a metà petto. Consiglio: assicurati di mantenere i gomiti vicini al busto per massimizzare il coinvolgimento dei tricipiti, diversamente dalla panca piana tradizionale. Dopo una pausa di un secondo, riporta il bilanciere alla posizione di partenza espirando e spingendo usando i muscoli dei tricipiti. Blocca le braccia nella posizione contratta, mantieni per un secondo e poi ricomincia a scendere lentamente. Consiglio: la fase di discesa dovrebbe durare almeno il doppio della fase di risalita. Ripeti per il numero di ripetizioni prescritto. Al termine, riponi il bilanciere sul rack.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Triceps_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Triceps_Bench_Press/1.jpg'], 
  NOW()
),
(
  '4dd9f5e4-50e4-435c-b67b-d1550092f493', 
  'Rhomboids-SMR', 
  'SMR per i romboidi', 
  'Lay down with your back on the floor. Place a foam roll underneath your upper back, and cross your arms in front of you, protracting your shoulders. This will be your starting position.
Raise your hips off of the ground, placing your weight onto the foam roll. Shift your weight to one side at a time, rolling over your middle and upper back. Pause at points of tension for 10-30 seconds.', 
  'Sdraiati con la schiena a terra. Posiziona un foam roller sotto la parte superiore della schiena e incrocia le braccia davanti a te, protraendo le spalle. Questa sarà la posizione di partenza. Solleva i fianchi da terra, scaricando il peso sul foam roller. Sposta il peso su un lato alla volta, facendolo scorrere sulla parte centrale e superiore della schiena. Fermati sui punti di tensione per 10-30 secondi.', 
  'middle back', 
  'traps', 
  'foam roll', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rhomboids-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rhomboids-SMR/1.jpg'], 
  NOW()
),
(
  'c85442e2-4a3a-45d6-a0c3-2e65a305bddf', 
  'Rickshaw Carry', 
  'Rickshaw Carry', 
  'Position the frame at the starting point, and load with the appropriate weight. Standing in the center of the frame, begin by gripping the handles and driving through your heels to lift the frame. Ensure your chest and head are up and your back is straight.
Immediately begin walking briskly with quick, controlled steps. Keep your chest up and head forward, and make sure you continue breathing. Bring the frame to the ground after you have reached the end point.', 
  'Posiziona il telaio nel punto di partenza e caricalo con il peso appropriato. In piedi al centro del telaio, inizia afferrando le maniglie e spingendo sui talloni per sollevare il carico. Assicurati che petto e testa siano alti e la schiena dritta. Inizia subito a camminare velocemente con passi rapidi e controllati. Mantieni il petto alto, lo sguardo in avanti e continua a respirare. Appoggia il telaio a terra dopo aver raggiunto il punto di arrivo.', 
  'forearms', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rickshaw_Carry/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rickshaw_Carry/1.jpg'], 
  NOW()
),
(
  '81f1434c-1ad5-42c0-9503-4333a3acbdc8', 
  'Rickshaw Deadlift', 
  'Rickshaw Deadlift', 
  'Load the frame with the desired weight. Center yourself between the handles. You feet should be about hip width apart. Bend at the hips to grip the handles, allowing your shoulder blades to protract.
With your feet and your grip set, take a big breath and then lower your hips and flex the knees. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. As the weight comes up, pull your shoulder blades together as you drive your hips forward.
Lower the weight by bending at the hips and guiding it to the ground.', 
  'Carica il telaio con il peso desiderato. Centrati tra le maniglie. I piedi dovrebbero essere alla larghezza dei fianchi. Fletti le anche per afferrare le maniglie, lasciando che le scapole vadano in protrazione. Con i piedi e la presa ben saldi, fai un respiro profondo, abbassa le anche e fletti le ginocchia. Guarda avanti, tieni il petto alto, la schiena inarcata e inizia a spingere sui talloni per sollevare il peso. Mentre il peso sale, unisci le scapole e spingi le anche in avanti. Abbassa il peso flettendo le anche e guidandolo verso il terreno.', 
  'quadriceps', 
  'forearms', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rickshaw_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rickshaw_Deadlift/1.jpg'], 
  NOW()
),
(
  'fb1dd961-878e-4a1e-8a4d-4eb116e18496', 
  'Ring Dips', 
  'Dip agli anelli', 
  'Grip a ring in each hand, and then take a small jump to help you get into the starting position with your arms locked out.
Begin by flexing the elbow, lowering your body until your arms break 90 degrees. Avoid swinging, and maintain good posture throughout the descent.
Reverse the motion by extending the elbow, pushing yourself back up into the starting position.
Repeat for the desired number of repetitions.', 
  'Afferra un anello con ogni mano, quindi dai un piccolo slancio per portarti nella posizione di partenza con le braccia bloccate in estensione. Inizia flettendo i gomiti, abbassando il corpo finché le braccia non superano i 90 gradi. Evita di oscillare e mantieni una buona postura durante tutta la discesa. Inverti il movimento estendendo i gomiti e spingendoti verso l''alto fino alla posizione di partenza. Ripeti per il numero di ripetizioni desiderato.', 
  'triceps', 
  'chest', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ring_Dips/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ring_Dips/1.jpg'], 
  NOW()
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_it = EXCLUDED.name_it,
  description = EXCLUDED.description,
  description_it = EXCLUDED.description_it,
  muscle_group = EXCLUDED.muscle_group,
  muscle_group_secondary = EXCLUDED.muscle_group_secondary,
  equipment = EXCLUDED.equipment,
  difficulty_level = EXCLUDED.difficulty_level,
  mechanic = EXCLUDED.mechanic,
  force = EXCLUDED.force,
  images = EXCLUDED.images;