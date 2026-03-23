-- Full population of exercise_library with Italian translations (Batch 1)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  'ee3a4ca4-6f01-4756-86e1-44a0b80c821f', 
  '3/4 Sit-Up', 
  '3/4 Sit-Up', 
  'Lie down on the floor and secure your feet. Your legs should be bent at the knees.
Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.
Flex your hips and spine to raise your torso toward your knees.
At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only ¾ of the way down.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a terra e blocca i piedi. Le ginocchia devono essere piegate. Posiziona le mani dietro la nuca o ai lati della testa. Parti con la schiena a terra; questa è la tua posizione iniziale. Fletti i fianchi e la colonna vertebrale per sollevare il busto verso le ginocchia. Al culmine della contrazione, il busto deve essere perpendicolare al suolo. Inverti il movimento tornando solo per ¾ del percorso. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/3_4_Sit-Up/1.jpg'], 
  NOW()
),
(
  '788b7499-3833-437d-b0b5-ff0392eafea4', 
  '90/90 Hamstring', 
  '90/90 Hamstring', 
  'Lie on your back, with one leg extended straight out.
With the other leg, bend the hip and knee to 90 degrees. You may brace your leg with your hands if necessary. This will be your starting position.
Extend your leg straight into the air, pausing briefly at the top. Return the leg to the starting position.
Repeat for 10-20 repetitions, and then switch to the other leg.', 
  'Sdraiati sulla schiena con una gamba distesa. Con l''altra gamba, fletti l''anca e il ginocchio a 90 gradi. Puoi sostenere la gamba con le mani se necessario. Questa è la tua posizione iniziale. Distendi la gamba verso l''alto, facendo una breve pausa in cima. Ritorna alla posizione iniziale. Ripeti per 10-20 ripetizioni, poi cambia gamba.', 
  'hamstrings', 
  'calves', 
  'body only', 
  'beginner', 
  NULL, 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/90_90_Hamstring/1.jpg'], 
  NOW()
),
(
  '80ef359b-599f-410c-8742-5f3bc55865ea', 
  'Ab Crunch Machine', 
  'Ab Crunch Machine', 
  'Select a light resistance and sit down on the ab machine placing your feet under the pads provided and grabbing the top handles. Your arms should be bent at a 90 degree angle as you rest the triceps on the pads provided. This will be your starting position.
At the same time, begin to lift the legs up as you crunch your upper torso. Breathe out as you perform this movement. Tip: Be sure to use a slow and controlled motion. Concentrate on using your abs to move the weight while relaxing your legs and feet.
After a second pause, slowly return to the starting position as you breathe in.
Repeat the movement for the prescribed amount of repetitions.', 
  'Seleziona una resistenza leggera e siediti sulla macchina posizionando i piedi sotto gli appositi rulli e afferrando le maniglie superiori. Le braccia devono essere piegate a 90 gradi con i tricipiti appoggiati ai cuscinetti. Questa è la tua posizione iniziale. Contemporaneamente, solleva le gambe ed esegui un crunch con il busto, espirando durante il movimento. Consiglio: esegui il movimento in modo lento e controllato. Concentrati sull''utilizzo degli addominali per spostare il carico, rilassando gambe e piedi. Dopo un secondo di pausa, ritorna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni prescritto.', 
  'abdominals', 
  NULL, 
  'machine', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Crunch_Machine/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Crunch_Machine/1.jpg'], 
  NOW()
),
(
  '02d613a8-fbac-4444-925a-0638f60239ff', 
  'Ab Roller', 
  'Ab Roller', 
  'Hold the Ab Roller with both hands and kneel on the floor.
Now place the ab roller on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position.
Slowly roll the ab roller straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement.
After a pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times.', 
  'Impugna l''Ab Roller con entrambe le mani e inginocchiati a terra. Posiziona l''attrezzo davanti a te in modo da essere in quadrupedia (come in una posizione di piegamento in ginocchio). Questa è la tua posizione iniziale. Spingi lentamente l''Ab Roller in avanti, distendendo il corpo fino ad arrivare in posizione orizzontale. Consiglio: scendi il più possibile senza toccare il pavimento con il corpo. Inspira durante questa fase del movimento. Dopo una pausa nella posizione di massima estensione, tirati indietro verso la posizione iniziale espirando. Consiglio: procedi lentamente e mantieni gli addominali sempre contratti.', 
  'abdominals', 
  'shoulders', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Roller/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Roller/1.jpg'], 
  NOW()
),
(
  '95b836f2-c9c9-46cf-b0a0-ef0146243d0e', 
  'Adductor', 
  'Adductor', 
  'Lie face down with one leg on a foam roll.
Rotate the leg so that the foam roll contacts against your inner thigh. Shift as much weight onto the foam roll as can be tolerated.
While trying to relax the muscles if the inner thigh, roll over the foam between your hip and knee, holding points of tension for 10-30 seconds. Repeat with the other leg.', 
  'Sdraiati a pancia in giù con una gamba sopra un foam roller. Ruota la gamba in modo che il foam roller sia a contatto con l''interno coscia. Scarica sul rullo tutto il peso che riesci a tollerare. Cercando di rilassare i muscoli dell''interno coscia, scorri con il rullo tra l''anca e il ginocchio, mantenendo la pressione sui punti di tensione per 10-30 secondi. Ripeti con l''altra gamba.', 
  'adductors', 
  NULL, 
  'foam roll', 
  'intermediate', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor/1.jpg'], 
  NOW()
),
(
  'e26b7b57-c1f3-4de0-89cb-a93b5ddb4444', 
  'Adductor/Groin', 
  'Adductor/Groin', 
  'Lie on your back with your feet raised towards the ceiling.
Have your partner hold your feet or ankles. Abduct your legs as far as you can. This will be your starting position.
Attempt to squeeze your legs together for 10 or more seconds, while your partner prevents you from doing so.
Now, relax the muscles in your legs as your partner pushes your feet apart, stretching as far as is comfortable for you. Be sure to let your partner know when the stretch is adequate to prevent overstretching or injury.', 
  'Sdraiati sulla schiena con le gambe sollevate verso il soffitto. Fatti tenere i piedi o le caviglie da un partner. Divarica le gambe il più possibile. Questa è la tua posizione iniziale. Cerca di chiudere le gambe stringendole per 10 o più secondi, mentre il partner oppone resistenza impedendoti di farlo. Ora, rilassa i muscoli delle gambe mentre il partner spinge i tuoi piedi verso l''esterno, allungandoli fin dove risulta confortevole. Comunica sempre al partner quando lo stretching è sufficiente per evitare sovra-allungamenti o infortuni.', 
  'adductors', 
  NULL, 
  NULL, 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Adductor_Groin/1.jpg'], 
  NOW()
),
(
  '303fc96e-574c-4991-9158-7e95736d05ef', 
  'Advanced Kettlebell Windmill', 
  'Advanced Kettlebell Windmill', 
  'Clean and press a kettlebell overhead with one arm.
Keeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Keep the non-working arm behind your back and turn your feet out at a forty-five degree angle from the arm with the kettlebell.
Lower yourself as far as possible.
Pause for a second and reverse the motion back to the starting position.', 
  'Esegui un Clean e un press per portare il kettlebell sopra la testa con un braccio. Mantenendo il kettlebell bloccato in alto per tutto il tempo, spingi il bacino nella direzione del braccio teso. Tieni il braccio che non lavora dietro la schiena e ruota i piedi a quarantacinque gradi rispetto al braccio che regge il kettlebell. Scendi il più possibile. Fai una pausa di un secondo e inverti il movimento per tornare alla posizione iniziale.', 
  'abdominals', 
  'glutes', 
  'kettlebells', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Advanced_Kettlebell_Windmill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Advanced_Kettlebell_Windmill/1.jpg'], 
  NOW()
),
(
  '2db0a796-20b7-499f-ad3f-5a51f32283df', 
  'Air Bike', 
  'Air Bike', 
  'Lie flat on the floor with your lower back pressed to the ground. For this exercise, you will need to put your hands beside your head. Be careful however to not strain with the neck as you perform it. Now lift your shoulders into the crunch position.
Bring knees up to where they are perpendicular to the floor, with your lower legs parallel to the floor. This will be your starting position.
Now simultaneously, slowly go through a cycle pedal motion kicking forward with the right leg and bringing in the knee of the left leg. Bring your right elbow close to your left knee by crunching to the side, as you breathe out.
Go back to the initial position as you breathe in.
Crunch to the opposite side as you cycle your legs and bring closer your left elbow to your right knee and exhale.
Continue alternating in this manner until all of the recommended repetitions for each side have been completed.', 
  'Sdraiati a terra con la parte bassa della schiena ben aderente al suolo. Metti le mani ai lati della testa, facendo attenzione a non sforzare il collo durante l''esecuzione. Solleva le spalle nella posizione di crunch. Porta le ginocchia a 90 gradi rispetto al pavimento, con la parte inferiore delle gambe parallela al suolo. Questa è la tua posizione iniziale. Ora, simultaneamente, esegui un movimento di pedalata spingendo in avanti la gamba destra e portando il ginocchio sinistro verso il petto. Avvicina il gomito destro al ginocchio sinistro ruotando il busto ed espirando. Torna alla posizione iniziale inspirando. Esegui il crunch sul lato opposto mentre pedali, portando il gomito sinistro verso il ginocchio destro ed espirando. Alterna in questo modo fino al completamento delle ripetizioni raccomandate per ciascun lato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Air_Bike/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Air_Bike/1.jpg'], 
  NOW()
),
(
  '159afd98-2bd4-4247-9b94-0ab9427904eb', 
  'All Fours Quad Stretch', 
  'All Fours Quad Stretch', 
  'Start off on your hands and knees, then lift your leg off the floor and hold the foot with your hand.
Use your hand to hold the foot or ankle, keeping the knee fully flexed, stretching the quadriceps and hip flexors.
Focus on extending your hips, thrusting them towards the floor. Hold for 10-20 seconds and then switch sides.', 
  'Inizia in posizione di quadrupedia, poi solleva una gamba dal pavimento e afferra il piede con la mano. Usa la mano per tenere il piede o la caviglia, mantenendo il ginocchio completamente flesso per allungare quadricipiti e flessori dell''anca. Concentrati sull''estensione delle anche, spingendole verso il pavimento. Mantieni la posizione per 10-20 secondi e poi cambia lato.', 
  'quadriceps', 
  'quadriceps', 
  'body only', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/All_Fours_Quad_Stretch/1.jpg'], 
  NOW()
),
(
  '256de4e8-3307-453e-bb11-5a3cdd9965c9', 
  'Alternate Hammer Curl', 
  'Alternate Hammer Curl', 
  'Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso.
The palms of the hands should be facing your torso. This will be your starting position.
While holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move.
Slowly begin to bring the dumbbells back to starting position as your breathe in.
Repeat the movement with the left hand. This equals one repetition.
Continue alternating in this manner for the recommended amount of repetitions.', 
  'In piedi con il busto eretto, impugna un manubrio in ogni mano lungo i fianchi. I gomiti devono essere vicini al busto e i palmi delle mani rivolti verso il corpo. Questa è la tua posizione iniziale. Tenendo fermo il braccio superiore, fletti il braccio destro verso l''alto contraendo il bicipite ed espirando. Continua il movimento finché il bicipite non è completamente contratto e il manubrio è all''altezza della spalla. Mantieni la contrazione per un secondo strizzando il bicipite. Consiglio: solo gli avambracci devono muoversi. Torna lentamente alla posizione iniziale inspirando. Ripeti con la mano sinistra. Questa è una ripetizione. Continua ad alternare per il numero di ripetizioni consigliato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Hammer_Curl/1.jpg'], 
  NOW()
),
(
  '61540384-094a-47a4-ae68-758de7f565fc', 
  'Alternate Heel Touchers', 
  'Alternate Heel Touchers', 
  'Lie on the floor with the knees bent and the feet on the floor around 18-24 inches apart. Your arms should be extended by your side. This will be your starting position.
Crunch over your torso forward and up about 3-4 inches to the right side and touch your right heel as you hold the contraction for a second. Exhale while performing this movement.
Now go back slowly to the starting position as you inhale.
Now crunch over your torso forward and up around 3-4 inches to the left side and touch your left heel as you hold the contraction for a second. Exhale while performing this movement and then go back to the starting position as you inhale. Now that both heels have been touched, that is considered 1 repetition.
Continue alternating sides in this manner until all prescribed repetitions are done.', 
  'Sdraiati a terra con le ginocchia flesse e i piedi appoggiati al suolo a una distanza di circa 45-60 cm. Tieni le braccia distese lungo i fianchi. Questa è la posizione di partenza. Esegui un crunch sollevando il busto di circa 7-10 cm verso destra e tocca il tallone destro, mantenendo la contrazione per un secondo. Espira durante l''esecuzione del movimento. Torna lentamente alla posizione di partenza inspirando. Esegui quindi un crunch sollevando il busto di 7-10 cm verso sinistra e tocca il tallone sinistro, mantenendo la contrazione per un secondo. Espira durante il movimento e torna alla posizione iniziale inspirando. Il tocco di entrambi i talloni equivale a 1 ripetizione. Continua ad alternare i lati fino al completamento delle ripetizioni previste.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Heel_Touchers/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Heel_Touchers/1.jpg'], 
  NOW()
),
(
  '252a9af2-2e22-4b8b-8ef9-6a5cf902b20e', 
  'Alternate Incline Dumbbell Curl', 
  'Alternate Incline Dumbbell Curl', 
  'Sit down on an incline bench with a dumbbell in each hand being held at arms length. Tip: Keep the elbows close to the torso.This will be your starting position.
While holding the upper arm stationary, curl the right weight forward while contracting the biceps as you breathe out. As you do so, rotate the hand so that the palm is facing up. Continue the movement until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move.
Slowly begin to bring the dumbbell back to starting position as your breathe in.
Repeat the movement with the left hand. This equals one repetition.
Continue alternating in this manner for the recommended amount of repetitions.', 
  'Siediti su una panca inclinata con un manubrio in ciascuna mano, braccia distese. Suggerimento: tieni i gomiti vicini al busto. Questa è la posizione di partenza. Mantenendo la parte superiore del braccio ferma, fletti il braccio destro in avanti contraendo i bicipiti ed espirando. Durante il movimento, ruota la mano in modo che il palmo sia rivolto verso l''alto. Continua finché il bicipite non è completamente contratto e il manubrio è all''altezza della spalla. Mantieni la posizione di contrazione per un secondo strizzando il bicipite. Suggerimento: dovrebbero muoversi solo gli avambracci. Torna lentamente alla posizione iniziale inspirando. Ripeti il movimento con la mano sinistra. Questo equivale a una ripetizione. Continua ad alternare le braccia per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Incline_Dumbbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Incline_Dumbbell_Curl/1.jpg'], 
  NOW()
),
(
  '089c2b3e-ad52-4324-9a37-118157de8d4c', 
  'Alternate Leg Diagonal Bound', 
  'Alternate Leg Diagonal Bound', 
  'Assume a comfortable stance with one foot slightly in front of the other.
Begin by pushing off with the front leg, driving the opposite knee forward and as high as possible before landing. Attempt to cover as much distance to each side with each bound.
It may help to use a line on the ground to guage distance from side to side.
Repeat the sequence with the other leg.', 
  'Assumi una posizione comoda con un piede leggermente più avanti dell''altro. Inizia spingendo con la gamba anteriore, portando il ginocchio opposto in avanti e il più in alto possibile prima dell''atterraggio. Cerca di coprire la massima distanza possibile lateralmente a ogni balzo. Può essere utile utilizzare una linea tracciata a terra come riferimento per la distanza laterale. Ripeti la sequenza con l''altra gamba.', 
  'quadriceps', 
  'abductors', 
  NULL, 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Leg_Diagonal_Bound/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternate_Leg_Diagonal_Bound/1.jpg'], 
  NOW()
),
(
  '4e7c6844-6074-440e-be39-12270a240ae5', 
  'Alternating Cable Shoulder Press', 
  'Alternating Cable Shoulder Press', 
  'Move the cables to the bottom of the tower and select an appropriate weight.
Grasp the cables and hold them at shoulder height, palms facing forward. This will be your starting position.
Keeping your head and chest up, extend through the elbow to press one side directly over head.
After pausing at the top, return to the starting position and repeat on the opposite side.', 
  'Posiziona i cavi nella parte inferiore della torre e seleziona un peso adeguato. Afferra i cavi e tienili all''altezza delle spalle, con i palmi rivolti in avanti. Questa è la posizione di partenza. Mantenendo testa e petto alti, distendi il braccio spingendo un lato direttamente sopra la testa. Dopo una breve pausa in alto, torna alla posizione di partenza e ripeti sul lato opposto.', 
  'shoulders', 
  'triceps', 
  'cable', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Cable_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Cable_Shoulder_Press/1.jpg'], 
  NOW()
),
(
  '822d1d2f-3734-4cba-9ff6-de25f23e97ac', 
  'Alternating Deltoid Raise', 
  'Alternating Deltoid Raise', 
  'In a standing position, hold a pair of dumbbells at your side.
Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating.
Return the weights to your side.
On the next repetition, raise the weights laterally, raising them out to your side to about shoulder height.
Return the weights to the starting position and continue alternating to the front and side.', 
  'In posizione eretta, tieni una coppia di manubri lungo i fianchi. Mantenendo i gomiti leggermente flessi, solleva i pesi direttamente davanti a te fino all''altezza delle spalle, evitando slanci o compensazioni. Riporta i pesi lungo i fianchi. Nella ripetizione successiva, solleva i pesi lateralmente, portandoli verso l''esterno fino all''altezza delle spalle. Riporta i pesi alla posizione di partenza e continua alternando i movimenti frontali e laterali.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Deltoid_Raise/1.jpg'], 
  NOW()
),
(
  '3caacc4c-2e97-4086-9581-67efaee655c4', 
  'Alternating Floor Press', 
  'Alternating Floor Press', 
  'Lie on the floor with two kettlebells next to your shoulders.
Position one in place on your chest and then the other, gripping the kettlebells on the handle with the palms facing forward.
Extend both arms, so that the kettlebells are being held above your chest. Lower one kettlebell, bringing it to your chest and turn the wrist in the direction of the locked out kettlebell.
Raise the kettlebell and repeat on the opposite side.', 
  'Sdraiati a terra con due kettlebell accanto alle spalle. Posiziona il primo sul petto e poi il secondo, afferrando le maniglie con i palmi rivolti in avanti. Distendi entrambe le braccia in modo che i kettlebell siano sollevati sopra il petto. Abbassa un kettlebell portandolo al petto e ruota il polso nella direzione del braccio teso. Solleva il kettlebell e ripeti sul lato opposto.', 
  'chest', 
  'abdominals', 
  'kettlebells', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Floor_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Floor_Press/1.jpg'], 
  NOW()
),
(
  'a748671e-9e97-4eb7-a2c3-2a12c3666186', 
  'Alternating Hang Clean', 
  'Alternating Hang Clean', 
  'Place two kettlebells between your feet. To get in the starting position, push your butt back and look straight ahead.
Clean one kettlebell to your shoulder and hold on to the other kettlebell in a hanging position. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulders. Rotate your wrist as you do so.
Lower the cleaned kettlebell to a hanging position and clean the alternate kettlebell. Repeat.', 
  'Posiziona due kettlebell tra i piedi. Per assumere la posizione di partenza, spingi il bacino all''indietro e guarda dritto davanti a te. Esegui un Clean con un kettlebell portandolo alla spalla, mentre l''altro rimane in posizione di sospensione (hang). Solleva il kettlebell alla spalla estendendo gambe e anche mentre lo tiri verso l''alto; ruota il polso durante il movimento. Abbassa il kettlebell in posizione di sospensione ed esegui il Clean con l''altro. Ripeti.', 
  'hamstrings', 
  'biceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Hang_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Hang_Clean/1.jpg'], 
  NOW()
),
(
  'b65732a9-1448-4f72-9bd3-f7e4b5b05bcc', 
  'Alternating Kettlebell Press', 
  'Alternating Kettlebell Press', 
  'Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so.
Press one directly overhead by extending through the elbow, turning it so the palm faces forward while holding the other kettlebell stationary .
Lower the pressed kettlebell to the starting position and immediately press with your other arm.', 
  'Esegui un Clean con due kettlebell portandoli alle spalle, estendendo gambe e anche mentre li tiri verso l''alto e ruoti i polsi. Spingi un kettlebell direttamente sopra la testa distendendo il gomito, ruotandolo in modo che il palmo sia rivolto in avanti, mentre mantieni l''altro kettlebell fermo alla spalla. Abbassa il kettlebell sollevato alla posizione di partenza e spingi immediatamente con l''altro braccio.', 
  'shoulders', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Press/1.jpg'], 
  NOW()
),
(
  'af68b7bb-96e2-47e6-91c7-ac8ae8556b8b', 
  'Alternating Kettlebell Row', 
  'Alternating Kettlebell Row', 
  'Place two kettlebells in front of your feet. Bend your knees slightly and push your butt out as much as possible. As you bend over to get into the starting position grab both kettlebells by the handles.
Pull one kettlebell off of the floor while holding on to the other kettlebell. Retract the shoulder blade of the working side, as you flex the elbow, drawing the kettlebell towards your stomach or rib cage.
Lower the kettlebell in the working arm and repeat with your other arm.', 
  'Posiziona due kettlebell davanti ai piedi. Fletti leggermente le ginocchia e spingi il bacino il più possibile all''indietro. Piegati in avanti per assumere la posizione di partenza e afferra entrambi i kettlebell per le maniglie. Solleva un kettlebell da terra mantenendo l''altro fermo. Retrai la scapola del lato attivo flettendo il gomito e tirando il kettlebell verso lo stomaco o la cassa toracica. Abbassa il kettlebell e ripeti con l''altro braccio.', 
  'middle back', 
  'biceps', 
  'kettlebells', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Kettlebell_Row/1.jpg'], 
  NOW()
),
(
  'a045f5f7-ef8e-4b01-84b1-77f413b06ea5', 
  'Alternating Renegade Row', 
  'Alternating Renegade Row', 
  'Place two kettlebells on the floor about shoulder width apart. Position yourself on your toes and your hands as though you were doing a pushup, with the body straight and extended. Use the handles of the kettlebells to support your upper body. You may need to position your feet wide for support.
Push one kettlebell into the floor and row the other kettlebell, retracting the shoulder blade of the working side as you flex the elbow, pulling it to your side.
Then lower the kettlebell to the floor and begin the kettlebell in the opposite hand. Repeat for several reps.', 
  'Posiziona due kettlebell a terra alla larghezza delle spalle. Mettiti in posizione di push-up (flessioni) sulle punte dei piedi e sulle mani, con il corpo dritto e teso. Usa le maniglie dei kettlebell come supporto per la parte superiore del corpo; potresti dover tenere i piedi larghi per maggiore stabilità. Spingi un kettlebell contro il pavimento ed esegui il rematore con l''altro, retraendo la scapola del lato attivo mentre fletti il gomito e tiri il peso verso il fianco. Riporta il kettlebell a terra e ripeti con il braccio opposto. Ripeti per diverse ripetizioni.', 
  'middle back', 
  'abdominals', 
  'kettlebells', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Renegade_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Alternating_Renegade_Row/1.jpg'], 
  NOW()
),
(
  '806e0aca-f581-4779-a799-c401ed06013c', 
  'Ankle Circles', 
  'Circonduzioni delle caviglie', 
  'Use a sturdy object like a squat rack to hold yourself.
Lift the right leg in the air (just around 2 inches from the floor) and perform a circular motion with the big toe. Pretend that you are drawing a big circle with it. Tip: One circle equals 1 repetition. Breathe normally as you perform the movement.
When you are done with the right foot, then repeat with the left leg.', 
  'Utilizza un supporto stabile, come un rack, per mantenerti in equilibrio. Solleva la gamba destra da terra (circa 5 cm) ed esegui un movimento circolare con l''alluce, come se stessi disegnando un grande cerchio. Consiglio: un giro completo equivale a una ripetizione. Respira normalmente durante l''esecuzione. Una volta completata la serie con il piede destro, ripeti con la gamba sinistra.', 
  'calves', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_Circles/1.jpg'], 
  NOW()
),
(
  'f719e734-b919-40e8-9a0c-d3c88c0c69eb', 
  'Ankle On The Knee', 
  'Caviglia sul ginocchio', 
  'From a lying position, bend your knees and keep your feet on the floor.
Place your ankle of one foot on your opposite knee.
Grasp the thigh or knee of the bottom leg and pull both of your legs into the chest. Relax your neck and shoulders. Hold for 10-20 seconds and then switch sides.', 
  'Partendo da una posizione distesa, piega le ginocchia mantenendo i piedi appoggiati a terra. Appoggia la caviglia di un piede sul ginocchio opposto. Afferra la coscia o il ginocchio della gamba a terra e tira entrambe le gambe verso il petto. Rilassa collo e spalle. Mantieni la posizione per 10-20 secondi, poi cambia lato.', 
  'glutes', 
  NULL, 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_On_The_Knee/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ankle_On_The_Knee/1.jpg'], 
  NOW()
),
(
  '91adeff5-3ce1-4ac4-b6c2-5d081930c3f0', 
  'Anterior Tibialis-SMR', 
  'SMR Tibiale Anteriore', 
  'Begin seated on the ground with your legs bent and your feet on the floor.
Using a Muscle Roller or a rolling pin, apply pressure to the muscles on the outside of your shins. Work from just below the knee to above the ankle, pausing at points of tension for 10-30 seconds. Repeat on the other leg.', 
  'Siediti a terra con le gambe flesse e i piedi appoggiati al pavimento. Utilizzando un rullo muscolare (Muscle Roller) o un matterello, applica pressione sui muscoli della parte esterna dello stinco. Lavora dall''area appena sotto il ginocchio fino a sopra la caviglia, fermandoti sui punti di tensione per 10-30 secondi. Ripeti sull''altra gamba.', 
  'calves', 
  NULL, 
  'other', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anterior_Tibialis-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anterior_Tibialis-SMR/1.jpg'], 
  NOW()
),
(
  'c4d64664-6881-4085-8b22-5de7343aefca', 
  'Anti-Gravity Press', 
  'Anti-Gravity Press', 
  'Place a bar on the ground behind the head of an incline bench.
Lay on the bench face down. With a pronated grip, pick the barbell up from the floor. Flex the elbows, performing a reverse curl to bring the bar near your chest. This will be your starting position.
To begin, press the barbell out in front of your head by extending your elbows. Keep your arms parallel to the ground throughout the movement.
Return to the starting position and repeat to complete the set.', 
  'Posiziona un bilanciere a terra dietro la parte superiore di una panca inclinata. Sdraiati sulla panca a pancia in giù. Con una presa prona, solleva il bilanciere da terra. Fletti i gomiti eseguendo un curl inverso per portare il bilanciere vicino al petto: questa è la posizione di partenza. Spingi il bilanciere davanti alla testa estendendo i gomiti, mantenendo le braccia parallele al terreno durante tutto il movimento. Torna alla posizione iniziale e ripeti per completare la serie.', 
  'shoulders', 
  'middle back', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Anti-Gravity_Press/1.jpg'], 
  NOW()
),
(
  '8cfa1280-e988-48c2-995f-0dbaeae81cf5', 
  'Arm Circles', 
  'Circonduzioni delle braccia', 
  'Stand up and extend your arms straight out by the sides. The arms should be parallel to the floor and perpendicular (90-degree angle) to your torso. This will be your starting position.
Slowly start to make circles of about 1 foot in diameter with each outstretched arm. Breathe normally as you perform the movement.
Continue the circular motion of the outstretched arms for about ten seconds. Then reverse the movement, going the opposite direction.', 
  'In piedi, estendi le braccia lateralmente. Le braccia devono essere parallele al pavimento e perpendicolari al busto (angolo di 90 gradi): questa è la posizione di partenza. Inizia lentamente a disegnare cerchi di circa 30 cm di diametro con entrambe le braccia tese. Respira normalmente. Continua il movimento circolare per circa dieci secondi, quindi inverte il senso di rotazione.', 
  'shoulders', 
  'traps', 
  NULL, 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arm_Circles/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arm_Circles/1.jpg'], 
  NOW()
),
(
  'e4dbec04-a47a-428a-a1d9-894cbd26107f', 
  'Arnold Dumbbell Press', 
  'Arnold Dumbbell Press', 
  'Sit on an exercise bench with back support and hold two dumbbells in front of you at about upper chest level with your palms facing your body and your elbows bent. Tip: Your arms should be next to your torso. The starting position should look like the contracted portion of a dumbbell curl.
Now to perform the movement, raise the dumbbells as you rotate the palms of your hands until they are facing forward.
Continue lifting the dumbbells until your arms are extended above you in straight arm position. Breathe out as you perform this portion of the movement.
After a second pause at the top, begin to lower the dumbbells to the original position by rotating the palms of your hands towards you. Tip: The left arm will be rotated in a counter clockwise manner while the right one will be rotated clockwise. Breathe in as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Siediti su una panca con schienale e tieni due manubri davanti a te all''altezza della parte alta del petto, con i palmi rivolti verso il corpo e i gomiti piegati. Consiglio: le braccia devono essere vicine al busto. La posizione iniziale deve assomigliare alla fase di contrazione di un curl con manubri. Solleva i manubri ruotando i palmi delle mani finché non sono rivolti in avanti. Continua a sollevare i manubri finché le braccia non sono completamente estese sopra la testa. Espira durante questa fase. Dopo una breve pausa in alto, abbassa i manubri nella posizione originale ruotando i palmi verso di te. Consiglio: il braccio sinistro ruota in senso antiorario, il destro in senso orario. Inspira durante questa fase. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/1.jpg'], 
  NOW()
),
(
  '1d94821a-7cd8-4c8e-b33a-e080d96035db', 
  'Around The Worlds', 
  'Around The Worlds', 
  'Lay down on a flat bench holding a dumbbell in each hand with the palms of the hands facing towards the ceiling. Tip: Your arms should be parallel to the floor and next to your thighs. To avoid injury, make sure that you keep your elbows slightly bent. This will be your starting position.
Now move the dumbbells by creating a semi-circle as you displace them from the initial position to over the head. All of the movement should happen with the arms parallel to the floor at all times. Breathe in as you perform this portion of the movement.
Reverse the movement to return the weight to the starting position as you exhale.', 
  'Sdraiati su una panca piana tenendo un manubrio in ciascuna mano con i palmi rivolti verso il soffitto. Consiglio: le braccia devono essere parallele al pavimento e vicino alle cosce. Per evitare infortuni, mantieni i gomiti leggermente piegati. Questa è la posizione di partenza. Muovi i manubri disegnando un semicerchio dalla posizione iniziale fin sopra la testa. Durante tutto il movimento, le braccia devono rimanere parallele al pavimento. Inspira durante questa fase. Inverte il movimento per riportare il peso alla posizione iniziale mentre espiri.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Around_The_Worlds/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Around_The_Worlds/1.jpg'], 
  NOW()
),
(
  '8a19d3c4-aa3f-46b5-bcc6-3da38171a55a', 
  'Atlas Stone Trainer', 
  'Atlas Stone Trainer', 
  'This trainer is effective for developing Atlas Stone strength for those who don''t have access to stones, and are typically made from bar ends or heavy pipe.
Begin by loading the desired weight onto the bar. Straddle the weight, wrapping your arms around the implement, bending at the hips.
Begin by pulling the weight up past the knees, extending through the hips. As the weight clears the knees, it can be lapped by resting it on your thighs and sitting back, hugging it tightly to your chest.
Finish the movement by extending through your hips and knees to raise the weight as high as possible. The weight can be returned to the lap or to the ground for successive repetitions.', 
  'Questo attrezzo è efficace per sviluppare la forza specifica per le Atlas Stones quando non si dispone di pietre vere; è solitamente realizzato con estremità di bilancieri o tubi pesanti. Carica il peso desiderato sulla barra. Mettiti a cavalcioni dell''attrezzo, avvolgilo con le braccia e fletti le anche. Inizia sollevando il peso oltre le ginocchia, estendendo le anche. Una volta superate le ginocchia, posiziona il peso sulle cosce sedendoti leggermente indietro e stringendolo forte al petto. Completa il movimento estendendo anche e ginocchia per sollevare il peso il più in alto possibile. Il peso può essere riportato sulle cosce o a terra per le ripetizioni successive.', 
  'lower back', 
  'biceps', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Atlas_Stone_Trainer/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Atlas_Stone_Trainer/1.jpg'], 
  NOW()
),
(
  'd3d16d11-4ee5-4aa3-99e4-7ede6737816f', 
  'Atlas Stones', 
  'Atlas Stones', 
  'Begin with the atlas stone between your feet. Bend at the hips to wrap your arms vertically around the Atlas Stone, attempting to get your fingers underneath the stone. Many stones will have a small flat portion on the bottom, which will make the stone easier to hold.
Pulling the stone into your torso, drive through the back half of your feet to pull the stone from the ground.
As the stone passes the knees, lap it by sitting backward, pulling the stone on top of your thighs.
Sit low, getting the stone high onto your chest as you change your grip to reach over the stone. Stand, driving through with your hips. Close distance to the loading platform, and lean back, extending the hips to get the stone as high as possible.', 
  'Posiziona l''Atlas Stone tra i piedi. Fletti le anche per avvolgere verticalmente la pietra con le braccia, cercando di infilare le dita sotto di essa. Molte pietre hanno una piccola parte piatta sul fondo che ne facilita la presa. Tirando la pietra verso il busto, spingi con la parte posteriore dei piedi per sollevare la pietra da terra. Quando la pietra supera le ginocchia, appoggiala sulle cosce sedendoti all''indietro. Siediti in basso, porta la pietra in alto sul petto mentre cambi la presa per abbracciarla meglio. Alzati in piedi spingendo con le anche. Avvicinati alla piattaforma di carico e inclinati all''indietro, estendendo le anche per posizionare la pietra il più in alto possibile.', 
  'lower back', 
  'abdominals', 
  'other', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Atlas_Stones/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Atlas_Stones/1.jpg'], 
  NOW()
),
(
  '5514423e-f86f-4710-aef5-8371c3fb9b4a', 
  'Axle Deadlift', 
  'Axle Deadlift', 
  'Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an over/under grip.
With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward.
After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.
Lower the bar by bending at the hips and guiding it to the floor.', 
  'Avvicinati al bilanciere (axle) in modo che sia centrato sopra i piedi. I piedi devono essere alla larghezza delle anche. Fletti le anche per afferrare la barra alla larghezza delle spalle, consentendo alle scapole di protarsi. Solitamente si utilizza una presa mista (over/under). Con piedi e presa posizionati, fai un respiro profondo, abbassa le anche e fletti le ginocchia finché gli stinchi non toccano la barra. Guarda avanti, mantieni il petto alto e la schiena inarcata, quindi spingi attraverso i talloni per sollevare il carico. Dopo che la barra ha superato le ginocchia, tirala energicamente verso di te, stringendo le scapole mentre spingi le anche in avanti contro la barra. Abbassa la barra flettendo le anche e guidandola verso il pavimento.', 
  'lower back', 
  'forearms', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Axle_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Axle_Deadlift/1.jpg'], 
  NOW()
),
(
  '0b006b19-8230-4f5d-9ffd-da85c7dac626', 
  'Back Flyes - With Bands', 
  'Back Flyes con elastici', 
  'Run a band around a stationary post like that of a squat rack.
Grab the band by the handles and stand back so that the tension in the band rises.
Extend and lift the arms straight in front of you. Tip: Your arms should be straight and parallel to the floor while perpendicular to your torso. Your feet should be firmly planted on the floor spread at shoulder width. This will be your starting position.
As you exhale, move your arms to the sides and back. Keep your arms extended and parallel to the floor. Continue the movement until the arms are extended to your sides.
After a pause, go back to the original position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Fissa un elastico attorno a un supporto stabile, come un rack. Afferra l''elastico dalle maniglie e allontanati per creare tensione. Estendi e solleva le braccia dritte davanti a te. Consiglio: le braccia devono essere tese e parallele al pavimento, perpendicolari al busto. I piedi devono essere ben piantati a terra alla larghezza delle spalle: questa è la posizione di partenza. Espirando, muovi le braccia lateralmente e verso dietro. Mantieni le braccia estese e parallele al pavimento. Continua il movimento finché le braccia non sono completamente aperte ai lati. Dopo una pausa, torna alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'middle back', 
  'bands', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Back_Flyes_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Back_Flyes_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '9c25f4e2-4152-4aa5-925f-c0a36b819b60', 
  'Backward Drag', 
  'Backward Drag (Trascinamento all''indietro)', 
  'Load a sled with the desired weight, attaching a rope or straps to the sled that you can hold onto.
Begin the exercise by moving backwards for a given distance. Leaning back, extend through the legs for short steps to move as quickly as possible.', 
  'Carica una slitta con il peso desiderato, fissando una corda o delle cinghie a cui poterti aggrappare. Inizia l''esercizio muovendoti all''indietro per una distanza prestabilita. Inclinati all''indietro, spingi con le gambe facendo piccoli passi per muoverti il più velocemente possibile.', 
  'quadriceps', 
  'calves', 
  'other', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Backward_Drag/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Backward_Drag/1.jpg'], 
  NOW()
),
(
  'cb064835-2cc7-454f-b618-99d03b7df1d7', 
  'Backward Medicine Ball Throw', 
  'Lancio all''indietro della Medicine Ball', 
  'This exercise is best done with a partner. If you lack a partner, the ball can be thrown and retrieved or thrown against a wall.
Begin standing a few meters in front of your partner, both facing the same direction. Begin holding the ball between your legs.
Squat down and then forcefully reverse direction, coming to full extension and you toss the ball over your head to your partner.
Your partner can then roll the ball back to you. Repeat for the desired number of repetitions.', 
  'Questo esercizio è ideale con un partner. Se non ne hai uno, la palla può essere recuperata dopo il lancio o lanciata contro un muro. Inizia in piedi a pochi metri davanti al partner, entrambi rivolti nella stessa direzione. Tieni la palla tra le gambe. Esegui uno squat e poi inverte la direzione con forza, estendendoti completamente mentre lanci la palla sopra la testa verso il partner. Il partner può poi farti rotolare la palla indietro. Ripeti per il numero di ripetizioni desiderato.', 
  'shoulders', 
  NULL, 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Backward_Medicine_Ball_Throw/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Backward_Medicine_Ball_Throw/1.jpg'], 
  NOW()
),
(
  '0e786b20-ef43-402b-b5b4-823cb0cfbcad', 
  'Balance Board', 
  'Balance Board', 
  'Place a balance board in front of you.
Stand up on it and try to balance yourself.
Hold the balance for as long as desired.', 
  'Posiziona una balance board davanti a te. Salici sopra e cerca di mantenere l''equilibrio. Mantieni la posizione per il tempo desiderato.', 
  'calves', 
  'hamstrings', 
  'other', 
  'beginner', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Balance_Board/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Balance_Board/1.jpg'], 
  NOW()
),
(
  'b5b18b68-caef-422e-b67c-131afd013d84', 
  'Ball Leg Curl', 
  'Ball Leg Curl', 
  'Begin on the floor laying on your back with your feet on top of the ball.
Position the ball so that when your legs are extended your ankles are on top of the ball. This will be your starting position.
Raise your hips off of the ground, keeping your weight on the shoulder blades and your feet.
Flex the knees, pulling the ball as close to you as you can, contracting the hamstrings.
After a brief pause, return to the starting position.', 
  'Inizia sdraiato a terra sulla schiena con i piedi sopra la fitball. Posiziona la palla in modo che, a gambe estese, le caviglie siano sopra di essa. Questa è la posizione di partenza. Solleva i fianchi da terra, mantenendo il peso sulle scapole e sui piedi. Fletti le ginocchia, tirando la palla il più vicino possibile a te, contraendo i muscoli ischiocrurali. Dopo una breve pausa, torna alla posizione iniziale.', 
  'hamstrings', 
  'calves', 
  'exercise ball', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ball_Leg_Curl/1.jpg'], 
  NOW()
),
(
  '7166489d-a1f7-4ac0-8ed0-de7c3258cded', 
  'Band Assisted Pull-Up', 
  'Trazioni assistite con elastico', 
  'Choke the band around the center of the pullup bar. You can use different bands to provide varying levels of assistance.
Pull the end of the band down, and place one bent knee into the loop, ensuring it won''t slip out. Take a medium to wide grip on the bar. This will be your starting position.
Pull yourself upward by contracting the lats as you flex the elbow. The elbow should be driven to your side. Pull to the front, attempting to get your chin over the bar. Avoid swinging or jerking movements.
After a brief pause, return to the starting position.', 
  'Fissa l''elastico attorno al centro della sbarra per trazioni. Puoi usare elastici diversi per variare il livello di assistenza. Tira l''estremità dell''elastico verso il basso e posiziona un ginocchio piegato nell''anello, assicurandoti che non scivoli via. Afferra la sbarra con una presa da media ad ampia. Questa è la posizione di partenza. Sollevati contraendo i dorsali e flettendo i gomiti. Il gomito deve essere guidato verso il fianco. Tira verso l''avanti, cercando di portare il mento sopra la sbarra. Evita movimenti oscillanti o a scatto. Dopo una breve pausa, torna alla posizione iniziale.', 
  'lats', 
  'abdominals', 
  'other', 
  'beginner', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Assisted_Pull-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Assisted_Pull-Up/1.jpg'], 
  NOW()
),
(
  '30e1933a-1596-4fd9-8a95-1ba15d562c15', 
  'Band Good Morning', 
  'Good Morning con elastico', 
  'Using a 41 inch band, stand on one end, spreading your feet a small amount. Bend at the hips to loop the end of the band behind your neck. This will be your starting position.
Keeping your legs straight, extend through the hips to come to a near vertical position.
Ensure that you do not round your back as you go down back to the starting position.', 
  'Usando un elastico da 41 pollici (104 cm), calpestalo con un''estremità e divarica leggermente i piedi. Piega i fianchi per far passare l''altra estremità dell''elastico dietro il collo. Questa è la posizione di partenza. Mantenendo le gambe tese, estendi i fianchi per tornare a una posizione quasi verticale. Assicurati di non incurvare la schiena mentre torni verso la posizione di partenza.', 
  'hamstrings', 
  'glutes', 
  'bands', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Good_Morning/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Good_Morning/1.jpg'], 
  NOW()
),
(
  '34df8e24-00b0-42fe-9e93-02ebb35aafd4', 
  'Band Good Morning (Pull Through)', 
  'Good Morning con elastico (Pull Through)', 
  'Loop the band around a post. Standing a little ways away, loop the opposite end around the neck. Your hands can help hold the band in position.
Begin by bending at the hips, getting your butt back as far as possible. Keep your back flat and bend forward to about 90 degrees. Your knees should be only slightly bent.
Return to the starting position be driving through with the hips to come back to a standing position.', 
  'Aggancia l''elastico a un supporto. Standoti a poca distanza, fai passare l''altra estremità attorno al collo. Le mani possono aiutare a mantenere l''elastico in posizione. Inizia flettendo i fianchi, portando i glutei il più indietro possibile. Mantieni la schiena piatta e piegati in avanti fino a circa 90 gradi. Le ginocchia devono essere solo leggermente flesse. Torna alla posizione iniziale spingendo con i fianchi fino a tornare in piedi.', 
  'hamstrings', 
  'glutes', 
  'bands', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Good_Morning_Pull_Through/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Good_Morning_Pull_Through/1.jpg'], 
  NOW()
),
(
  'db7fbd0f-b50d-47c5-8721-b4c61cf70b51', 
  'Band Hip Adductions', 
  'Adduzioni dell''anca con elastico', 
  'Anchor a band around a solid post or other object.
Stand with your left side to the post, and put your right foot through the band, getting it around the ankle.
Stand up straight and hold onto the post if needed. This will be your starting position.
Keeping the knee straight, raise your right legs out to the side as far as you can.
Return to the starting position and repeat for the desired rep count.
Switch sides.', 
  'Ancora l''elastico a un supporto solido o a un oggetto fisso. Mettiti con il fianco sinistro rispetto al supporto e inserisci il piede destro nell''elastico, posizionandolo attorno alla caviglia. Rimani in piedi dritto e, se necessario, reggiti al supporto. Questa è la posizione di partenza. Mantenendo il ginocchio teso, solleva la gamba destra lateralmente il più possibile. Torna alla posizione iniziale e ripeti per il numero di ripetizioni desiderato. Cambia lato.', 
  'adductors', 
  NULL, 
  'bands', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Hip_Adductions/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Hip_Adductions/1.jpg'], 
  NOW()
),
(
  '7a43f9bf-ebc2-4276-8817-20830b4914bf', 
  'Band Pull Apart', 
  'Band Pull Apart', 
  'Begin with your arms extended straight out in front of you, holding the band with both hands.
Initiate the movement by performing a reverse fly motion, moving your hands out laterally to your sides.
Keep your elbows extended as you perform the movement, bringing the band to your chest. Ensure that you keep your shoulders back during the exercise.
Pause as you complete the movement, returning to the starting position under control.', 
  'Inizia con le braccia tese davanti a te, tenendo l''elastico con entrambe le mani. Avvia il movimento eseguendo un''apertura (reverse fly), portando le mani lateralmente verso l''esterno. Mantieni i gomiti estesi durante il movimento, portando l''elastico verso il petto. Assicurati di mantenere le spalle indietro durante l''esercizio. Fai una pausa al completamento del movimento e torna alla posizione iniziale controllando la tensione.', 
  'shoulders', 
  'middle back', 
  'bands', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Pull_Apart/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Pull_Apart/1.jpg'], 
  NOW()
),
(
  'f9519ea5-73b5-464b-9cb5-f3d40892acc2', 
  'Band Skull Crusher', 
  'Band Skull Crusher', 
  'Secure a band to the base of a rack or the bench. Lay on the bench so that the band is lined up with your head.
Take hold of the band, raising your elbows so that the upper arm is perpendicular to the floor. With the elbow flexed, the band should be above your head. This will be your starting position.
Extend through the elbow to straighten your arm, keeping your upper arm in place. Pause at the top of the motion, and return to the starting position.', 
  'Fissa una banda elastica alla base di un rack o di una panca. Sdraiati sulla panca in modo che la banda sia allineata con la testa. Afferra la banda sollevando i gomiti, in modo che la parte superiore del braccio sia perpendicolare al pavimento. Con il gomito flesso, la banda dovrebbe trovarsi sopra la tua testa. Questa è la posizione di partenza. Estendi il gomito per raddrizzare il braccio, mantenendo ferma la parte superiore del braccio. Fai una pausa al culmine del movimento e torna alla posizione di partenza.', 
  'triceps', 
  NULL, 
  'bands', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Skull_Crusher/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Band_Skull_Crusher/1.jpg'], 
  NOW()
),
(
  '9a7da2f4-c716-4766-963a-cc7629a77dde', 
  'Barbell Ab Rollout', 
  'Barbell Ab Rollout', 
  'For this exercise you will need to get into a pushup position, but instead of having your hands of the floor, you will be grabbing on to an Olympic barbell (loaded with 5-10 lbs on each side) instead. This will be your starting position.
While keeping a slight arch on your back, lift your hips and roll the barbell towards your feet as you exhale. Tip: As you perform the movement, your glutes should be coming up, you should be keeping the abs tight and should maintain your back posture at all times. Also your arms should be staying perpendicular to the floor throughout the movement. If you don''t, you will work out your shoulders and back more than the abs.
After a second contraction at the top, start to roll the barbell back forward to the starting position slowly as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Per questo esercizio devi metterti in posizione di push-up, ma invece di avere le mani a terra, afferrerai un bilanciere olimpionico (caricato con 2,5-4,5 kg per lato). Questa è la posizione di partenza. Mantenendo una leggera curvatura della schiena, solleva i fianchi e fai rotolare il bilanciere verso i piedi espirando. Consiglio: durante il movimento, i glutei dovrebbero salire, gli addominali devono rimanere contratti e la postura della schiena deve essere mantenuta costante. Inoltre, le braccia devono rimanere perpendicolari al pavimento durante tutto il movimento; in caso contrario, lavoreresti più con le spalle e la schiena che con gli addominali. Dopo un secondo di contrazione nel punto più alto, inizia a far rotolare lentamente il bilanciere in avanti verso la posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  'lower back', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Ab_Rollout/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Ab_Rollout/1.jpg'], 
  NOW()
),
(
  'ccaa5f8a-f360-452f-b79d-a648fc12007a', 
  'Barbell Ab Rollout - On Knees', 
  'Barbell Ab Rollout sulle ginocchia', 
  'Hold an Olympic barbell loaded with 5-10lbs on each side and kneel on the floor.
Now place the barbell on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position.
Slowly roll the barbell straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement.
After a second pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times.', 
  'Afferra un bilanciere olimpionico caricato con 2,5-4,5 kg per lato e inginocchiati sul pavimento. Posiziona il bilanciere a terra davanti a te in modo da trovarti in appoggio sulle mani e sulle ginocchia (come in una posizione di push-up sulle ginocchia). Questa è la posizione di partenza. Fai rotolare lentamente il bilanciere in avanti, distendendo il corpo fino a una posizione dritta. Consiglio: scendi il più possibile senza toccare il pavimento con il corpo. Inspira durante questa fase del movimento. Dopo un secondo di pausa nella posizione di massima estensione, inizia a tornare lentamente alla posizione di partenza espirando. Consiglio: muoviti lentamente e mantieni gli addominali sempre contratti.', 
  'abdominals', 
  'lower back', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Ab_Rollout_-_On_Knees/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Ab_Rollout_-_On_Knees/1.jpg'], 
  NOW()
),
(
  '85ce2b70-8a4c-433c-a288-5084f1ccb783', 
  'Barbell Bench Press - Medium Grip', 
  'Barbell Bench Press - Presa media', 
  'Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.
From the starting position, breathe in and begin coming down slowly until the bar touches your middle chest.
After a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position at the top of the motion, hold for a second and then start coming down slowly again. Tip: Ideally, lowering the weight should take about twice as long as raising it.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Sdraiati su una panca piana. Utilizzando una presa di larghezza media (che crei un angolo di 90 gradi tra avambracci e braccia a metà movimento), solleva il bilanciere dal rack e tienilo dritto sopra di te con le braccia distese. Questa è la posizione di partenza. Inspirando, inizia a scendere lentamente finché il bilanciere non tocca la parte centrale del petto. Dopo una breve pausa, spingi il bilanciere verso la posizione iniziale espirando. Concentrati sulla spinta utilizzando i pettorali. Distendi le braccia e contrai i pettorali nel punto di massima contrazione, mantieni per un secondo e poi inizia a scendere lentamente. Consiglio: idealmente, la fase di discesa del peso dovrebbe durare il doppio rispetto a quella di risalita. Ripeti per il numero di ripetizioni prescritto. Al termine, riponi il bilanciere nel rack.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg'], 
  NOW()
),
(
  'aedf8f87-581f-4f56-8e1e-5087b73fed94', 
  'Barbell Curl', 
  'Barbell Curl', 
  'Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position.
While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.
Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.
Slowly begin to bring the bar back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi, busto eretto, impugna un bilanciere con una presa pari alla larghezza delle spalle. I palmi delle mani devono essere rivolti in avanti e i gomiti vicini al busto. Questa è la posizione di partenza. Mantenendo ferme le braccia, fletti il bilanciere verso l''alto contraendo i bicipiti ed espirando. Consiglio: solo gli avambracci dovrebbero muoversi. Continua il movimento finché i bicipiti non sono completamente contratti e il bilanciere si trova all''altezza delle spalle. Mantieni la contrazione per un secondo strizzando bene i bicipiti. Torna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/1.jpg'], 
  NOW()
),
(
  'ce58d817-a476-45f2-9bb0-552908fabdcb', 
  'Barbell Curls Lying Against An Incline', 
  'Barbell Curls su panca inclinata', 
  'Lie against an incline bench, with your arms holding a barbell and hanging down in a horizontal line. This will be your starting position.
While keeping the upper arms stationary, curl the weight up as high as you can while squeezing the biceps. Breathe out as you perform this portion of the movement. Tip: Only the forearms should move. Do not swing the arms.
After a second contraction, slowly go back to the starting position as you inhale. Tip: Make sure that you go all of the way down.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati contro una panca inclinata, con le braccia che tengono un bilanciere distese verso il basso in linea orizzontale. Questa è la posizione di partenza. Mantenendo ferme le braccia, fletti il peso verso l''alto il più possibile contraendo i bicipiti. Espira durante questa fase del movimento. Consiglio: solo gli avambracci devono muoversi. Non dondolare con le braccia. Dopo un secondo di contrazione, torna lentamente alla posizione di partenza inspirando. Consiglio: assicurati di scendere completamente. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curls_Lying_Against_An_Incline/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curls_Lying_Against_An_Incline/1.jpg'], 
  NOW()
),
(
  '5b0deecf-0d49-4001-9dd9-e2648a0ee7da', 
  'Barbell Deadlift', 
  'Barbell Deadlift (Stacco da terra)', 
  'Stand in front of a loaded barbell.
While keeping the back as straight as possible, bend your knees, bend forward and grasp the bar using a medium (shoulder width) overhand grip. This will be the starting position of the exercise. Tip: If it is difficult to hold on to the bar with this grip, alternate your grip or use wrist straps.
While holding the bar, start the lift by pushing with your legs while simultaneously getting your torso to the upright position as you breathe out. In the upright position, stick your chest out and contract the back by bringing the shoulder blades back. Think of how the soldiers in the military look when they are in standing in attention.
Go back to the starting position by bending at the knees while simultaneously leaning the torso forward at the waist while keeping the back straight. When the weights on the bar touch the floor you are back at the starting position and ready to perform another repetition.
Perform the amount of repetitions prescribed in the program.', 
  'Posizionati di fronte a un bilanciere carico. Mantenendo la schiena il più dritta possibile, piega le ginocchia, chinati in avanti e afferra il bilanciere con una presa prona di larghezza media (pari alla larghezza delle spalle). Questa sarà la posizione di partenza. Consiglio: se è difficile mantenere la presa, alterna le mani o usa le cinghie da polso. Tenendo il bilanciere, inizia il sollevamento spingendo con le gambe e portando contemporaneamente il busto in posizione eretta mentre espiri. In posizione eretta, spingi il petto in fuori e contrai la schiena portando le scapole indietro. Immagina la postura dei soldati sull''attenti. Torna alla posizione di partenza flettendo le ginocchia e piegando contemporaneamente il busto in avanti, mantenendo la schiena dritta. Quando il peso tocca terra, sei tornato alla posizione iniziale, pronto per la ripetizione successiva. Esegui il numero di ripetizioni prescritto dal programma.', 
  'lower back', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg'], 
  NOW()
),
(
  'd93075eb-9bf8-4763-a50b-3a7cbabc778d', 
  'Barbell Full Squat', 
  'Barbell Full Squat (Squat completo)', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position.
Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement.
Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Per sicurezza, questo esercizio va eseguito all''interno di un rack. Imposta il bilanciere sul rack appena sopra l''altezza delle spalle. Una volta scelto l''altezza corretta e caricato il bilanciere, posizionati sotto la sbarra appoggiandola sulla parte posteriore delle spalle (appena sotto il collo). Impugna il bilanciere da entrambi i lati e sollevalo dal rack spingendo con le gambe e raddrizzando il busto. Allontanati dal rack e posiziona le gambe a una larghezza media, pari a quella delle spalle, con le punte dei piedi leggermente rivolte verso l''esterno. Mantieni sempre la testa alta e la schiena dritta. Questa è la posizione di partenza. Inizia a scendere lentamente flettendo le ginocchia e spingendo i fianchi all''indietro, mantenendo la postura dritta e la testa alta. Scendi finché i femorali non toccano i polpacci. Inspira durante questa fase. Inizia a risalire espirando, spingendo sul pavimento con il tallone o con la parte centrale del piede, raddrizzando le gambe ed estendendo i fianchi per tornare alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg'], 
  NOW()
),
(
  'ea86a668-626b-48ec-a614-a66353a91572', 
  'Barbell Glute Bridge', 
  'Barbell Glute Bridge', 
  'Begin seated on the ground with a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise. Roll the bar so that it is directly above your hips, and lay down flat on the floor.
Begin the movement by driving through with your heels, extending your hips vertically through the bar. Your weight should be supported by your upper back and the heels of your feet.
Extend as far as possible, then reverse the motion to return to the starting position.', 
  'Inizia seduto a terra con un bilanciere carico sulle gambe. L''utilizzo di un bilanciere spesso o di un cuscinetto protettivo può ridurre notevolmente il fastidio. Fai rotolare il bilanciere finché non si trova direttamente sopra i fianchi, quindi sdraiati sulla schiena. Inizia il movimento spingendo attraverso i talloni ed estendendo i fianchi verticalmente, sollevando il bilanciere. Il peso deve essere sostenuto dalla parte alta della schiena e dai talloni. Estendi il più possibile, quindi inverti il movimento per tornare alla posizione di partenza.', 
  'glutes', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/1.jpg'], 
  NOW()
),
(
  '738cc254-17b3-4789-b855-481410837bf6', 
  'Barbell Guillotine Bench Press', 
  'Barbell Guillotine Bench Press', 
  'Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over your neck with your arms locked. This will be your starting position.
As you breathe in, bring the bar down slowly until it is about 1 inch from your neck.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Utilizzando una presa di larghezza media (che crei un angolo di 90 gradi tra avambracci e braccia a metà movimento), solleva il bilanciere dal rack e tienilo dritto sopra il collo con le braccia distese. Questa è la posizione di partenza. Inspirando, porta il bilanciere lentamente verso il basso fino a circa 2-3 cm dal collo. Dopo un secondo di pausa, riporta il bilanciere alla posizione di partenza espirando e spingendo con i muscoli pettorali. Distendi le braccia e contrai i pettorali nella posizione di massima chiusura, mantieni per un secondo e poi inizia a scendere di nuovo lentamente. La fase di discesa dovrebbe richiedere almeno il doppio del tempo rispetto alla fase di risalita. Ripeti per il numero di ripetizioni prescritto. Al termine, riponi il bilanciere nel rack.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Guillotine_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Guillotine_Bench_Press/1.jpg'], 
  NOW()
),
(
  '0b5ddc47-b629-4bc6-affc-22d2287e244c', 
  'Barbell Hack Squat', 
  'Barbell Hack Squat', 
  'Stand up straight while holding a barbell behind you at arms length and your feet at shoulder width. Tip: A shoulder width grip is best with the palms of your hands facing back. You can use wrist wraps for this exercise for a better grip. This will be your starting position.
While keeping your head and eyes up and back straight, squat until your upper thighs are parallel to the floor. Breathe in as you slowly go down.
Pressing mainly with the heel of the foot and squeezing the thighs, go back up as you breathe out.
Repeat for the recommended amount of repetitions.', 
  'Stai in piedi con la schiena dritta tenendo un bilanciere dietro di te a braccia tese e i piedi alla larghezza delle spalle. Suggerimento: una presa larga quanto le spalle è l''ideale, con i palmi rivolti all''indietro. Puoi usare dei ganci o fasce per i polsi per una presa migliore. Questa è la tua posizione di partenza. Mantenendo la testa alta, lo sguardo in avanti e la schiena dritta, scendi in squat finché le cosce non sono parallele al pavimento. Inspira mentre scendi lentamente. Spingendo principalmente sui talloni e contraendo le cosce, torna verso l''alto espirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hack_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hack_Squat/1.jpg'], 
  NOW()
),
(
  'ff63ac47-d8ef-408e-a6d2-faad0902f7b3', 
  'Barbell Hip Thrust', 
  'Barbell Hip Thrust', 
  'Begin seated on the ground with a bench directly behind you. Have a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise.
Roll the bar so that it is directly above your hips, and lean back against the bench so that your shoulder blades are near the top of it.
Begin the movement by driving through your feet, extending your hips vertically through the bar. Your weight should be supported by your shoulder blades and your feet. Extend as far as possible, then reverse the motion to return to the starting position.', 
  'Siediti a terra con una panca posizionata direttamente dietro di te. Posiziona un bilanciere carico sopra le gambe. L''utilizzo di un bilanciere olimpionico spesso o di un cuscinetto protettivo può ridurre notevolmente il fastidio causato dall''esercizio. Fai rotolare il bilanciere finché non è posizionato sopra le anche e appoggiati con la schiena alla panca, in modo che le scapole siano vicino al bordo superiore. Inizia il movimento spingendo attraverso i piedi ed estendendo le anche verticalmente, sollevando il bilanciere. Il peso deve essere sostenuto dalle scapole e dai piedi. Estendi il più possibile, quindi inverte il movimento per tornare alla posizione di partenza.', 
  'glutes', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg'], 
  NOW()
),
(
  'e7eeddbd-f348-4ef6-a455-87723c6aca08', 
  'Barbell Incline Bench Press - Medium Grip', 
  'Barbell Incline Bench Press - Presa Media', 
  'Lie back on an incline bench. Using a medium-width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on you upper chest.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly again. Tip: it should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Sdraiati su una panca inclinata. Utilizzando una presa di larghezza media (tale da creare un angolo di 90 gradi tra avambracci e braccia a metà movimento), stacca il bilanciere dal rack e tienilo sopra di te con le braccia tese. Questa è la tua posizione di partenza. Inspirando, scendi lentamente finché il bilanciere non sfiora la parte alta del petto. Dopo una pausa di un secondo, riporta il bilanciere nella posizione iniziale espirando e spingendo con i muscoli pettorali. Blocca le braccia nella posizione contratta, contrai il petto, mantieni per un secondo e ricomincia a scendere lentamente. Suggerimento: la fase di discesa dovrebbe durare almeno il doppio di quella di salita. Ripeti per il numero di ripetizioni prescritto. Al termine, riponi il bilanciere nel rack.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg'], 
  NOW()
),
(
  '5495873e-c457-444a-89b6-f132faaa8f90', 
  'Barbell Incline Shoulder Raise', 
  'Barbell Incline Shoulder Raise', 
  'Lie back on an Incline Bench. Using a medium width grip (a grip that is slightly wider than shoulder width), lift the bar from the rack and hold it straight over you with your arms straight. This will be your starting position.
While keeping the arms straight, lift the bar by protracting your shoulder blades, raising the shoulders from the bench as you breathe out.
Bring back the bar to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su una panca inclinata. Con una presa media (leggermente più larga delle spalle), solleva il bilanciere dal rack e tienilo dritto sopra di te con le braccia tese. Questa è la tua posizione di partenza. Mantenendo le braccia tese, solleva il bilanciere protraendo le scapole e staccando le spalle dalla panca mentre espiri. Torna alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'chest', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Shoulder_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Shoulder_Raise/1.jpg'], 
  NOW()
),
(
  'e9b8c1a5-4f5d-4c0c-a541-41f1693933d5', 
  'Barbell Lunge', 
  'Affondi con Bilanciere', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just below shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and step forward with your right leg and squat down through your hips, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: Do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. li>
Using mainly the heel of your foot, push up and go back to the starting position as you exhale.
Repeat the movement for the recommended amount of repetitions and then perform with the left leg.', 
  'Per sicurezza, esegui questo esercizio all''interno di un rack. Posiziona il bilanciere sul rack appena sotto l''altezza delle spalle. Una volta caricato il bilanciere, posizionati sotto di esso e appoggia la parte posteriore delle spalle (appena sotto il collo) sulla barra. Afferra il bilanciere con entrambe le mani ai lati e sollevalo dal rack spingendo con le gambe e raddrizzando il busto. Allontanati dal rack, fai un passo in avanti con la gamba destra e scendi in affondo mantenendo il busto eretto e in equilibrio. Inspira mentre scendi. Nota: non permettere al ginocchio di superare la punta del piede per evitare stress eccessivo all''articolazione. Spingendo principalmente sul tallone, torna alla posizione iniziale espirando. Ripeti per il numero di ripetizioni raccomandato e poi cambia gamba.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lunge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lunge/1.jpg'], 
  NOW()
),
(
  '13ba54d3-69e5-4e6c-8320-b011d9b5b3b6', 
  'Barbell Rear Delt Row', 
  'Barbell Rear Delt Row', 
  'Stand up straight while holding a barbell using a wide (higher than shoulder width) and overhand (palms facing your body) grip.
Bend knees slightly and bend over as you keep the natural arch of your back. Let the arms hang in front of you as they hold the bar. Once your torso is parallel to the floor, flare the elbows out and away from your body. Tip: Your torso and your arms should resemble the letter "T". Now you are ready to begin the exercise.
While keeping the upper arms perpendicular to the torso, pull the barbell up towards your upper chest as you squeeze the rear delts and you breathe out. Tip: When performed correctly, this exercise should resemble a bench press in reverse. Also, refrain from using your biceps to do the work. Focus on targeting the rear delts; the arms should only act as hooks.
Slowly go back to the initial position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi, tieni un bilanciere con una presa larga (più delle spalle) e prona (palmi rivolti verso il corpo). Piega leggermente le ginocchia e inclinati in avanti mantenendo la curvatura naturale della schiena. Lascia che le braccia pendano davanti a te tenendo il bilanciere. Quando il busto è parallelo al pavimento, divarica i gomiti verso l''esterno. Suggerimento: il tuo busto e le braccia dovrebbero formare una lettera "T". Ora sei pronto a iniziare. Mantenendo la parte superiore delle braccia perpendicolare al busto, tira il bilanciere verso la parte alta del petto contraendo i deltoidi posteriori ed espirando. Suggerimento: se eseguito correttamente, questo esercizio dovrebbe somigliare a una panca piana al contrario. Evita di usare i bicipiti; le braccia devono agire solo come ganci. Torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'biceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Rear_Delt_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Rear_Delt_Row/1.jpg'], 
  NOW()
),
(
  'b2025fa8-2fc9-4196-afb6-73076ddbfc0e', 
  'Barbell Rollout from Bench', 
  'Barbell Rollout dalla Panca', 
  'Place a loaded barbell on the ground, near the end of a bench. Kneel with both legs on the bench, and take a medium to narrow grip on the barbell. This will be your starting position.
To begin, extend through the hips to slowly roll the bar forward. As you roll out, flex the shoulder to roll the bar above your head. Ensure that your arms remain extended throughout the movement.
When the bar has been moved as far forward as possible, return to the starting position.', 
  'Posiziona un bilanciere carico a terra vicino all''estremità di una panca. Inginocchiati sulla panca e afferra il bilanciere con una presa da media a stretta. Questa è la tua posizione di partenza. Inizia estendendo le anche per far rotolare lentamente il bilanciere in avanti. Mentre ti allunghi, fletti le spalle per portare il bilanciere sopra la testa. Assicurati che le braccia rimangano tese durante tutto il movimento. Quando il bilanciere è arrivato il più lontano possibile, torna alla posizione di partenza.', 
  'abdominals', 
  'glutes', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Rollout_from_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Rollout_from_Bench/1.jpg'], 
  NOW()
),
(
  '7582f35a-9074-4415-ac56-263a770fbd07', 
  'Barbell Seated Calf Raise', 
  'Calf Raise Seduto con Bilanciere', 
  'Place a block about 12 inches in front of a flat bench.
Sit on the bench and place the ball of your feet on the block.
Have someone place a barbell over your upper thighs about 3 inches above your knees and hold it there. This will be your starting position.
Raise up on your toes as high as possible as you squeeze the calves and as you breathe out.
After a second contraction, slowly go back to the starting position. Tip: To get maximum benefit stretch your calves as far as you can.
Repeat for the recommended amount of repetitions.', 
  'Posiziona un blocco o uno step a circa 30 cm davanti a una panca piana. Siediti sulla panca e appoggia l''avampiede sul blocco. Chiedi a qualcuno di posizionare un bilanciere sopra le cosce, circa 7-8 cm sopra le ginocchia. Questa è la tua posizione di partenza. Sollevati sulle punte dei piedi il più in alto possibile contraendo i polpacci ed espirando. Dopo un secondo di contrazione, torna lentamente alla posizione iniziale. Suggerimento: per il massimo beneficio, stendi i polpacci il più possibile. Ripeti per il numero di ripetizioni raccomandato.', 
  'calves', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Seated_Calf_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Seated_Calf_Raise/1.jpg'], 
  NOW()
),
(
  '2a427684-b5cc-424e-a521-abb590eb2bf9', 
  'Barbell Shoulder Press', 
  'Military Press (Shoulder Press) con Bilanciere', 
  'Sit on a bench with back support in a squat rack. Position a barbell at a height that is just above your head. Grab the barbell with a pronated grip (palms facing forward).
Once you pick up the barbell with the correct grip width, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.
Lower the bar down to the shoulders slowly as you inhale.
Lift the bar back up to the starting position as you exhale.
Repeat for the recommended amount of repetitions.', 
  'Siediti su una panca con schienale all''interno di un rack. Posiziona il bilanciere a un''altezza appena sopra la testa. Afferra il bilanciere con una presa prona (palmi rivolti in avanti). Una volta sollevato il bilanciere, portalo sopra la testa bloccando le braccia. Mantieni la posizione all''altezza delle spalle, leggermente davanti al capo. Questa è la tua posizione di partenza. Abbassa il bilanciere fino alle spalle lentamente mentre inspiri. Riporta il bilanciere alla posizione di partenza espirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shoulder_Press/1.jpg'], 
  NOW()
),
(
  'd0f6f427-fb35-4209-b040-61829a8289a5', 
  'Barbell Shrug', 
  'Shrug con Bilanciere', 
  'Stand up straight with your feet at shoulder width as you hold a barbell with both hands in front of you using a pronated grip (palms facing the thighs). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for a better grip. This will be your starting position.
Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps.
Slowly return to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi, piedi alla larghezza delle spalle, tieni un bilanciere davanti a te con una presa prona (palmi rivolti verso le cosce). Suggerimento: le mani dovrebbero essere leggermente più larghe delle spalle. Puoi usare ganci o fasce per una presa migliore. Questa è la tua posizione di partenza. Solleva le spalle il più in alto possibile espirando e mantieni la contrazione per un secondo. Suggerimento: non cercare di sollevare il bilanciere usando i bicipiti. Torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'traps', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/1.jpg'], 
  NOW()
),
(
  'ca9ffedc-5faf-45e3-a896-38d0708f0eac', 
  'Barbell Shrug Behind The Back', 
  'Scrollate con bilanciere dietro la schiena', 
  'Stand up straight with your feet at shoulder width as you hold a barbell with both hands behind your back using a pronated grip (palms facing back). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for better grip. This will be your starting position.
Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps. The arms should remain stretched out at all times.
Slowly return to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'Stai in piedi con i piedi alla larghezza delle spalle e impugna un bilanciere dietro la schiena con una presa prona (palmi rivolti all''indietro). Consiglio: tieni le mani leggermente più larghe rispetto alla larghezza delle spalle. Puoi usare le fasce per i polsi per una presa migliore. Questa è la posizione di partenza. Solleva le spalle il più in alto possibile espirando e mantieni la contrazione per un secondo. Consiglio: evita di sollevare il bilanciere usando i bicipiti. Le braccia devono rimanere sempre tese. Torna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'traps', 
  'forearms', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug_Behind_The_Back/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug_Behind_The_Back/1.jpg'], 
  NOW()
),
(
  'c2db4e88-24d4-467a-9c1b-6e911ff2fb3b', 
  'Barbell Side Bend', 
  'Flessioni laterali con bilanciere', 
  'Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck). Your feet should be shoulder width apart. This will be your starting position.
While keeping your back straight and your head up, bend only at the waist to the right as far as possible. Breathe in as you bend to the side. Then hold for a second and come back up to the starting position as you exhale. Tip: Keep the rest of the body stationary.
Now repeat the movement but bending to the left instead. Hold for a second and come back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Stai in piedi con un bilanciere posizionato sulla parte alta della schiena (leggermente sotto il collo). I piedi devono essere alla larghezza delle spalle. Questa è la posizione di partenza. Mantenendo la schiena dritta e la testa alta, fletti il busto lateralmente solo verso destra il più possibile. Inspira mentre ti fletti. Mantieni la posizione per un secondo e torna alla posizione eretta espirando. Consiglio: mantieni il resto del corpo immobile. Ripeti il movimento flettendoti verso sinistra. Mantieni per un secondo e torna alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  'lower back', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Side_Bend/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Side_Bend/1.jpg'], 
  NOW()
),
(
  '7127ea83-e8f9-4dd5-b3e5-ad566baf9dce', 
  'Barbell Side Split Squat', 
  'Side Split Squat con bilanciere', 
  'Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck). Your feet should be placed wide apart with the foot of the lead leg angled out to the side. This will be your starting position.
Lower your body towards the side of your angled foot by bending the knee and hip of your lead leg and while keeping the opposite leg only slightly bent. Breathe in as you lower your body.
Return to the starting position by extending the hip and knee of the lead leg. Breathe out as you perform this movement.
After performing the recommended amount of reps, repeat the movement with the opposite leg.', 
  'Stai in piedi con un bilanciere posizionato sulla parte alta della schiena (leggermente sotto il collo). Posiziona i piedi ben distanti tra loro, con il piede della gamba guida rivolto verso l''esterno. Questa è la posizione di partenza. Abbassa il corpo verso il lato del piede angolato flettendo il ginocchio e l''anca della gamba guida, mantenendo l''altra gamba solo leggermente piegata. Inspira durante la discesa. Torna alla posizione di partenza estendendo l''anca e il ginocchio della gamba guida. Espira durante questo movimento. Dopo aver eseguito il numero di ripetizioni consigliato, ripeti con l''altra gamba.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Side_Split_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Side_Split_Squat/1.jpg'], 
  NOW()
),
(
  'efbcdf01-a8a1-4bc8-b7e9-dda8e512df68', 
  'Barbell Squat', 
  'Squat con bilanciere', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack to just below shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).
Begin to slowly lower the bar by bending the knees and hips as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Per motivi di sicurezza, questo esercizio va eseguito all''interno di un rack. Imposta il bilanciere sul rack appena sotto l''altezza delle spalle. Posizionati sotto la sbarra e appoggiala sulla parte alta della schiena (leggermente sotto il collo). Impugna il bilanciere con entrambe le mani e sollevalo dal rack spingendo con le gambe e raddrizzando contemporaneamente il busto. Allontanati dal rack e posiziona i piedi alla larghezza delle spalle con le punte leggermente rivolte verso l''esterno. Mantieni la testa alta e la schiena dritta. Questa è la posizione di partenza. Inizia ad abbassare lentamente il bilanciere flettendo ginocchia e anche, mantenendo la postura eretta. Scendi finché l''angolo tra cosce e polpacci è leggermente inferiore a 90 gradi. Inspira durante la discesa. Consiglio: se eseguito correttamente, le ginocchia non devono superare la punta dei piedi per evitare stress articolare. Risali espirando, spingendo con i talloni e tornando alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/1.jpg'], 
  NOW()
),
(
  '797d0bef-1993-4892-aaba-d073a327ccd9', 
  'Barbell Squat To A Bench', 
  'Squat con bilanciere su panca', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first place a flat bench or a box behind you. The flat bench is used to teach you to set your hips back and to hit depth.

Then, set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).
Begin to slowly lower the bar by bending the knees and sitting your hips back as you maintain a straight posture with the head up. Continue down until you slightly touch the bench behind you. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs and extend the hips to go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Esercizio da eseguire all''interno di un rack. Posiziona una panca piana dietro di te per imparare a spingere le anche indietro e raggiungere la profondità corretta. Imposta il bilanciere all''altezza delle spalle, posizionati sotto la sbarra e appoggiala sulla parte alta della schiena. Solleva il bilanciere dal rack, allontanati e posiziona i piedi alla larghezza delle spalle. Mantieni la testa alta e la schiena dritta. Inizia a scendere flettendo ginocchia e portando le anche indietro, finché i glutei non toccano leggermente la panca. Inspira durante la discesa. Consiglio: le ginocchia non devono superare la linea immaginaria perpendicolare alla punta dei piedi. Risali espirando, spingendo sui talloni e distendendo le anche fino alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat_To_A_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat_To_A_Bench/1.jpg'], 
  NOW()
),
(
  '61358033-5f9a-46bb-a410-557b7d69e60b', 
  'Barbell Step Ups', 
  'Step-up con bilanciere', 
  'Stand up straight while holding a barbell placed on the back of your shoulders (slightly below the neck) and stand upright behind an elevated platform (such as the one used for spotting behind a flat bench). This is your starting position.
Place the right foot on the elevated platform. Step on the platform by extending the hip and the knee of your right leg. Use the heel mainly to lift the rest of your body up and place the foot of the left leg on the platform as well. Breathe out as you execute the force required to come up.
Step down with the left leg by flexing the hip and knee of the right leg as you inhale. Return to the original standing position by placing the right foot of to next to the left foot on the initial position.
Repeat with the right leg for the recommended amount of repetitions and then perform with the left leg.', 
  'Stai in piedi con un bilanciere posizionato sulla parte alta della schiena e posizionati davanti a una piattaforma rialzata. Questa è la posizione di partenza. Appoggia il piede destro sulla piattaforma. Sali sulla piattaforma estendendo l''anca e il ginocchio della gamba destra. Usa principalmente il tallone per sollevare il corpo e appoggia anche il piede sinistro sulla piattaforma. Espira durante lo sforzo. Scendi con il piede sinistro flettendo anca e ginocchio della gamba destra mentre inspiri. Torna nella posizione di partenza iniziale. Ripeti con la gamba destra per le ripetizioni consigliate, poi passa alla sinistra.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Step_Ups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Step_Ups/1.jpg'], 
  NOW()
),
(
  '8f95c67f-b97a-4b47-9021-8145795f40e6', 
  'Barbell Walking Lunge', 
  'Affondi in camminata con bilanciere', 
  'Begin standing with your feet shoulder width apart and a barbell across your upper back.
Step forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should stay above the front foot.
Drive through the heel of your lead foot and extend both knees to raise yourself back up.
Step forward with your rear foot, repeating the lunge on the opposite leg.', 
  'Inizia in piedi con i piedi alla larghezza delle spalle e un bilanciere sulla parte alta della schiena. Fai un passo avanti con una gamba, flettendo le ginocchia per abbassare il bacino. Scendi finché il ginocchio posteriore tocca quasi terra. Mantieni il busto eretto e il ginocchio anteriore allineato sopra il piede corrispondente. Spingi attraverso il tallone del piede avanzato ed estendi entrambe le ginocchia per risalire. Fai un passo in avanti con la gamba posteriore, ripetendo l''affondo con l''altra gamba.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Walking_Lunge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Walking_Lunge/1.jpg'], 
  NOW()
),
(
  '285a8781-8786-455a-b4ab-5760651a999b', 
  'Battling Ropes', 
  'Battling Ropes', 
  'For this exercise you will need a heavy rope anchored at its center 15-20 feet away. Standing in front of the rope, take an end in each hand with your arms extended at your side. This will be your starting position.
Initiate the movement by rapidly raising one arm to shoulder level as quickly as you can.
As you let that arm drop to the starting position, raise the opposite side.
Continue alternating your left and right arms, whipping the ropes up and down as fast as you can.', 
  'Per questo esercizio avrai bisogno di una corda pesante ancorata al centro a circa 4-6 metri di distanza. In piedi davanti alla corda, afferra un''estremità in ogni mano con le braccia distese lungo i fianchi. Questa è la posizione di partenza. Inizia il movimento sollevando rapidamente un braccio fino all''altezza della spalla. Mentre lasci scendere quel braccio, solleva l''altro. Continua ad alternare braccio destro e sinistro, facendo ondeggiare le corde più velocemente possibile.', 
  'shoulders', 
  'chest', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Battling_Ropes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Battling_Ropes/1.jpg'], 
  NOW()
),
(
  '2b1e5bc1-6f21-40b5-9aff-50398e890a9c', 
  'Bear Crawl Sled Drags', 
  'Bear Crawl con traino della slitta', 
  'Wearing either a harness or a loose weight belt, attach the chain to the back so that you will be facing away from the sled. Bend down so that your hands are on the ground. Your back should be flat and knees bent. This is your starting position.
Begin by driving with legs, alternating left and right. Use your hands to maintain balance and to help pull. Try to keep your back flat as you move over a given distance.', 
  'Indossando un''imbracatura o una cintura da sovraccarico, collega la catena al retro in modo da essere rivolto lontano dalla slitta. Piegati in avanti con le mani a terra. La schiena deve essere piatta e le ginocchia flesse. Questa è la posizione di partenza. Inizia a spingere con le gambe, alternando sinistra e destra. Usa le mani per mantenere l''equilibrio e aiutarti nella trazione. Cerca di mantenere la schiena piatta mentre percorri la distanza stabilita.', 
  'quadriceps', 
  'calves', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bear_Crawl_Sled_Drags/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bear_Crawl_Sled_Drags/1.jpg'], 
  NOW()
),
(
  'fcba6fd7-36d7-4317-8511-a7de41d2c23a', 
  'Behind Head Chest Stretch', 
  'Stretching pettorali dietro la nuca', 
  'Sit upright on the floor with your partner behind you.
Place your hands behind your hand, and push your elbows back as far as you can. Your partner should hold your elbows. This will be your starting position.
Gently attempt to pull your elbows forward with your hands still behind your head for 10 or more seconds. Your partner should prevent your elbows from moving.
Now, relax your muscles and have your partner gently pull the elbows back as far as it comfortable for you. Be sure to let your partner know when the stretch is adequate to prevent overstretching or injury.', 
  'Siediti dritto a terra con un partner dietro di te. Posiziona le mani dietro la nuca e spingi i gomiti indietro il più possibile. Il partner dovrà bloccare i tuoi gomiti. Questa è la posizione di partenza. Prova delicatamente a tirare i gomiti in avanti mantenendo le mani dietro la nuca per almeno 10 secondi, mentre il partner impedisce il movimento. Successivamente, rilassa i muscoli e lascia che il partner tiri delicatamente i gomiti all''indietro fin dove è confortevole per te. Comunica al partner quando lo stretching è sufficiente per evitare infortuni o eccessiva tensione.', 
  'chest', 
  'shoulders', 
  'other', 
  'expert', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Behind_Head_Chest_Stretch/1.jpg'], 
  NOW()
),
(
  'de55379e-d582-4f83-a327-8b34d09e5e41', 
  'Bench Dips', 
  NULL, 
  'For this exercise you will need to place a bench behind your back. With the bench perpendicular to your body, and while looking away from it, hold on to the bench on its edge with the hands fully extended, separated at shoulder width. The legs will be extended forward, bent at the waist and perpendicular to your torso. This will be your starting position.
Slowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down.
Using your triceps to bring your torso up again, lift yourself back to the starting position.
Repeat for the recommended amount of repetitions.', 
  NULL, 
  'triceps', 
  'chest', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/1.jpg'], 
  NOW()
),
(
  '0ca10fcf-bd19-40fd-96fc-fa9080f91033', 
  'Bench Jump', 
  NULL, 
  'Begin with a box or bench 1-2 feet in front of you. Stand with your feet shoulder width apart. This will be your starting position.
Perform a short squat in preparation for the jump; swing your arms behind you.
Rebound out of this position, extending through the hips, knees, and ankles to jump as high as possible. Swing your arms forward and up.
Jump over the bench, landing with the knees bent, absorbing the impact through the legs.
Turn around and face the opposite direction, then jump back over the bench.', 
  NULL, 
  'quadriceps', 
  'calves', 
  'body only', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Jump/1.jpg'], 
  NOW()
),
(
  'd58fd98d-7a87-4c5c-96a7-11bfa044d9f3', 
  'Bench Press - Powerlifting', 
  NULL, 
  'Begin by lying on the bench, getting your head beyond the bar if possible. Tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement.
However wide your grip, it should cover the ring on the bar. Pull the bar out of the rack without protracting your shoulders. Focus on squeezing the bar and trying to pull it apart.
Lower the bar to your lower chest or upper stomach. The bar, wrist, and elbow should stay in line at all times.
Pause when the barbell touches your torso, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.', 
  NULL, 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_-_Powerlifting/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_-_Powerlifting/1.jpg'], 
  NOW()
),
(
  'f8cd10e5-4ce3-4ed2-990b-cba4b7a8bfc2', 
  'Bench Press - With Bands', 
  NULL, 
  'Using a flat bench secure a band under the leg of the bench that is nearest to your head.
Once the band is secure, grab it by both handles and lie down on the bench.
Extend your arms so that you are holding the band handles in front of you at shoulder width.
Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.
Bring down the handles slowly until your elbow forms a 90 degree angle. Keep full control at all times.
As you breathe out, bring the handles up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions of your training program.', 
  NULL, 
  'chest', 
  'shoulders', 
  'bands', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '2d10cdae-3261-4bfc-8934-2b1b42ed4bf8', 
  'Bench Press with Chains', 
  NULL, 
  'Adjust the leader chain, shortening it to the desired length.Place the chains on the sleeves of the bar.
Lying on the bench, get your head beyond the bar if possible. Tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement. However wide your grip, it should cover the ring on the bar.
Pull the bar out of the rack without protracting your shoulders. Focus on squeezing the bar and trying to pull it apart. Lower the bar to your lower chest or upper stomach. The bar, wrist, and elbow should stay in line at all times.
Pause when the barbell touches your torso, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.', 
  NULL, 
  'triceps', 
  'chest', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_with_Chains/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_with_Chains/1.jpg'], 
  NOW()
),
(
  'c60ee6b2-5875-475d-9ea0-e94a7cdcab3a', 
  'Bench Sprint', 
  NULL, 
  'Stand on the ground with one foot resting on a bench or box with your heel close to the edge.
Push off with your foot on top of the bench, extending through the hip and knee.
Land with the opposite foot on top of the box, returning your other foot back to the start position.
Continue alternating from one foot to another to complete the set.', 
  NULL, 
  'quadriceps', 
  'calves', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Sprint/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Sprint/1.jpg'], 
  NOW()
),
(
  'e4e68ca3-a4a2-45ab-aabf-b32678d622d2', 
  'Bent-Arm Barbell Pullover', 
  NULL, 
  'Lie on a flat bench with a barbell using a shoulder grip width.
Hold the bar straight over your chest with a bend in your arms. This will be your starting position.
While keeping your arms in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.
At that point, bring the barbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.
Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.', 
  NULL, 
  'lats', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Barbell_Pullover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Barbell_Pullover/1.jpg'], 
  NOW()
),
(
  'b13b16d3-c927-4b1a-bf88-628b8bf2e264', 
  'Bent-Arm Dumbbell Pullover', 
  NULL, 
  'Place a dumbbell standing up on a flat bench.
Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.
Grasp the dumbbell with both hands and hold it straight over your chest with a bend in your arms. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position. Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.
While keeping your arms locked in the bent arm position, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.
At that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.
Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.', 
  NULL, 
  'chest', 
  'lats', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Dumbbell_Pullover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Arm_Dumbbell_Pullover/1.jpg'], 
  NOW()
),
(
  '9f34dd2a-5fd8-40dc-a93a-81aea2fe1989', 
  'Bent-Knee Hip Raise', 
  NULL, 
  'Lay flat on the floor with your arms next to your sides.
Now bend your knees at around a 75 degree angle and lift your feet off the floor by around 2 inches.
Using your lower abs, bring your knees in towards you as you maintain the 75 degree angle bend in your legs. Continue this movement until you raise your hips off of the floor by rolling your pelvis backward. Breathe out as you perform this portion of the movement. Tip: At the end of the movement your knees will be over your chest.
Squeeze your abs at the top of the movement for a second and then return to the starting position slowly as you breathe in. Tip: Maintain a controlled motion at all times.
Repeat for the recommended amount of repetitions.', 
  NULL, 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent-Knee_Hip_Raise/1.jpg'], 
  NOW()
),
(
  '21c1bc4f-4789-4074-b267-039e10ee0268', 
  'Bent Over Barbell Row', 
  NULL, 
  'Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.
Now, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause.
Then inhale and slowly lower the barbell back to the starting position.
Repeat for the recommended amount of repetitions.', 
  NULL, 
  'middle back', 
  'biceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/1.jpg'], 
  NOW()
),
(
  'b395e3e2-7cee-4f05-b66f-f149a679d3ef', 
  'Bent Over Dumbbell Rear Delt Raise With Head On Bench', 
  'Alzate posteriori con manubri a busto flesso con testa su panca', 
  'Stand up straight while holding a dumbbell in each hand and with an incline bench in front of you.
While keeping your back straight and maintaining the natural arch of your back, lean forward until your forehead touches the bench in front of you. Let the arms hang in front of you perpendicular to the ground. The palms of your hands should be facing each other and your torso should be parallel to the floor. This will be your starting position.
Keeping your torso forward and stationary, and the arms straight with a slight bend at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. Caution: avoid swinging the torso or bringing the arms back as opposed to the side.
After a one second contraction at the top, slowly lower the dumbbells back to the starting position.
Repeat the recommended amount of repetitions.', 
  'In piedi, tieni un manubrio in ogni mano con una panca inclinata davanti a te. Mantenendo la schiena dritta e la sua naturale curvatura, piegati in avanti fino a far toccare la fronte alla panca. Lascia le braccia a penzoloni davanti a te, perpendicolari al suolo. I palmi delle mani devono essere rivolti l''uno verso l''altro e il busto parallelo al pavimento. Questa è la posizione di partenza. Mantenendo il busto fermo e le braccia tese con un leggero piegamento ai gomiti, solleva i manubri lateralmente fino a quando le braccia non saranno parallele al pavimento. Espira durante la salita. Attenzione: evita di oscillare con il busto o di portare le braccia all''indietro invece che lateralmente. Dopo una contrazione di un secondo nel punto massimo, abbassa lentamente i manubri nella posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/1.jpg'], 
  NOW()
),
(
  '5362b119-0b94-404a-9f47-1e2bdad14480', 
  'Bent Over Low-Pulley Side Lateral', 
  'Alzate laterali a busto flesso ai cavi bassi', 
  'Select a weight and hold the handle of the low pulley with your right hand.
Bend at the waist until your torso is nearly parallel to the floor. Your legs should be slightly bent with your left hand placed on your lower left thigh. Your right arm should be hanging from your shoulder in front of you and with a slight bend at the elbow. This will be your starting position.
Raise your right arm, elbow slightly bent, to the side until the arm is parallel to the floor and in line with your right ear. Breathe out as you perform this step.
Slowly lower the weight back to the starting position as you breathe in.
Repeat for the recommended amount of repetitions and repeat the movement with the other arm.', 
  'Seleziona il carico e afferra la maniglia del cavo basso con la mano destra. Piegati in vita fino a portare il busto quasi parallelo al pavimento. Le gambe devono essere leggermente flesse e la mano sinistra appoggiata sulla coscia sinistra. Il braccio destro deve pendere dalla spalla davanti a te con il gomito leggermente flesso. Questa è la posizione di partenza. Solleva il braccio destro, mantenendo il gomito leggermente flesso, lateralmente fino a quando il braccio è parallelo al pavimento e in linea con l''orecchio destro. Espira durante il movimento. Abbassa lentamente il peso nella posizione di partenza inspirando. Ripeti per il numero di ripetizioni consigliato e cambia braccio.', 
  'shoulders', 
  'lower back', 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Low-Pulley_Side_Lateral/1.jpg'], 
  NOW()
),
(
  'ba377af5-c8cb-4349-965a-8dbfb62da5b7', 
  'Bent Over One-Arm Long Bar Row', 
  'Rematore con bilanciere a un braccio (Landmine Row)', 
  'Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward.
Bend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent.
Now grab the bar with one arm just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position.
Pull the bar straight up with your elbow in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Do not allow for any swinging of the torso. Only the arm should move.
Slowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones).
Repeat for the recommended amount of repetitions and switch arms.', 
  'Carica dei dischi su un''estremità di un bilanciere olimpionico. Assicurati che l''altra estremità sia bloccata nell''angolo di due pareti o contro un oggetto pesante affinché non scivoli. Piegati in avanti mantenendo il busto il più possibile parallelo al suolo e le ginocchia leggermente flesse. Afferra il bilanciere con un braccio subito dietro i dischi e appoggia l''altra mano sul ginocchio. Questa è la posizione di partenza. Tira il bilanciere verso l''alto tenendo il gomito vicino al corpo (per massimizzare lo stimolo dorsale) finché i dischi non toccano la parte bassa del petto. Contrai i muscoli della schiena nel punto massimo per un secondo. Espira durante la fase di trazione. Suggerimento: evita oscillazioni del busto. Solo il braccio deve muoversi. Abbassa lentamente il bilanciere nella posizione iniziale per allungare bene i dorsali. Suggerimento: non far toccare i dischi a terra. Per un range di movimento ottimale, si consiglia l''uso di dischi piccoli (da 10-15 kg). Ripeti per il numero di ripetizioni consigliato e cambia braccio.', 
  'middle back', 
  'biceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_One-Arm_Long_Bar_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_One-Arm_Long_Bar_Row/1.jpg'], 
  NOW()
),
(
  '35c9b391-f29f-4a25-87b4-9cac94d5f86e', 
  'Bent Over Two-Arm Long Bar Row', 
  'Rematore con bilanciere a due braccia (Landmine Row)', 
  'Put weight on one of the ends of an Olympic barbell. Make sure that you either place the other end of the barbell in the corner of two walls; or put a heavy object on the ground so the barbell cannot slide backward.
Bend forward until your torso is as close to parallel with the floor as you can and keep your knees slightly bent.
Now grab the bar with both arms just behind the plates on the side where the weight was placed and put your other hand on your knee. This will be your starting position.
Pull the bar straight up with your elbows in (to maximize back stimulation) until the plates touch your lower chest. Squeeze the back muscles as you lift the weight up and hold for a second at the top of the movement. Breathe out as you lift the weight. Tip: Use a stirrup or double handle cable attachment by hooking it under the end of the bar.
Slowly lower the bar to the starting position getting a nice stretch on the lats. Tip: Do not let the plates touch the floor. To ensure the best range of motion, I recommend using small plates (25-lb ones) as opposed to larger plates (like 35-45lb ones).
Repeat for the recommended amount of repetitions.', 
  'Carica dei dischi su un''estremità di un bilanciere olimpionico. Assicurati che l''altra estremità sia bloccata nell''angolo di due pareti o contro un oggetto pesante affinché non scivoli. Piegati in avanti mantenendo il busto il più possibile parallelo al suolo e le ginocchia leggermente flesse. Afferra il bilanciere con entrambe le mani subito dietro i dischi. Questa è la posizione di partenza. Tira il bilanciere verso l''alto tenendo i gomiti vicini al corpo (per massimizzare lo stimolo dorsale) finché i dischi non toccano la parte bassa del petto. Contrai i muscoli della schiena nel punto massimo per un secondo. Espira durante la fase di trazione. Suggerimento: utilizza una maniglia a V o un attacco per cavi inserendolo sotto l''estremità del bilanciere. Abbassa lentamente il bilanciere nella posizione iniziale per allungare bene i dorsali. Suggerimento: non far toccare i dischi a terra. Per un range di movimento ottimale, si consiglia l''uso di dischi piccoli (da 10-15 kg). Ripeti per il numero di ripetizioni consigliato.', 
  'middle back', 
  'biceps', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Arm_Long_Bar_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Arm_Long_Bar_Row/1.jpg'], 
  NOW()
),
(
  'b21660cd-881f-4419-83b6-096493e59048', 
  'Bent Over Two-Dumbbell Row', 
  'Rematore con due manubri a busto flesso', 
  'With a dumbbell in each hand (palms facing your torso), bend your knees slightly and bring your torso forward by bending at the waist; as you bend make sure to keep your back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.
While keeping the torso stationary, lift the dumbbells to your side (as you breathe out), keeping the elbows close to the body (do not exert any force with the forearm other than holding the weights). On the top contracted position, squeeze the back muscles and hold for a second.
Slowly lower the weight again to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Con un manubrio per mano (palmi rivolti verso il busto), fletti leggermente le ginocchia e porta il busto in avanti flettendo la vita; mantieni la schiena dritta finché non è quasi parallela al pavimento. Suggerimento: tieni la testa alta. I pesi devono pendere direttamente davanti a te con le braccia perpendicolari al pavimento. Questa è la posizione di partenza. Mantenendo il busto fermo, solleva i manubri lateralmente (espirando), tenendo i gomiti vicini al corpo (non sforzare gli avambracci, usali solo per la presa). Nel punto di massima contrazione, strizza i muscoli della schiena e tieni per un secondo. Abbassa lentamente il peso nella posizione iniziale inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'middle back', 
  'biceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row/1.jpg'], 
  NOW()
),
(
  'fb51c16d-da50-458f-8c2c-43201504595d', 
  'Bent Over Two-Dumbbell Row With Palms In', 
  'Rematore con due manubri a busto flesso (palmi rivolti all''interno)', 
  'With a dumbbell in each hand (palms facing each other), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.
While keeping the torso stationary, lift the dumbbells to your side as you breathe out, squeezing your shoulder blades together. On the top contracted position, squeeze the back muscles and hold for a second.
Slowly lower the weight again to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Con un manubrio per mano (palmi rivolti l''uno verso l''altro), fletti leggermente le ginocchia e porta il busto in avanti flettendo la vita, mantenendo la schiena dritta finché non è quasi parallela al pavimento. Suggerimento: tieni la testa alta. I pesi devono pendere direttamente davanti a te con le braccia perpendicolari al pavimento. Questa è la posizione di partenza. Mantenendo il busto fermo, solleva i manubri lateralmente espirando, avvicinando le scapole tra loro. Nel punto di massima contrazione, strizza i muscoli della schiena e tieni per un secondo. Abbassa lentamente il peso nella posizione iniziale inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'middle back', 
  'biceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row_With_Palms_In/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Two-Dumbbell_Row_With_Palms_In/1.jpg'], 
  NOW()
),
(
  '7f396fab-9a67-4b4c-87aa-9b44ecf779ee', 
  'Bent Press', 
  'Bent Press', 
  'Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so. This will be your starting position.
Begin my leaning to the side opposite the kettlebell, continuing until you are able to touch the ground with your free hand, keeping your eyes on the kettlebell. As you do so, press the weight vertically be extending through the elbow, keeping your arm perpendicular to the ground.
Return to an upright position, with the kettlebell above your head. Return the kettlebell to the shoulder and repeat for the desired number of repetitions.', 
  'Porta il kettlebell alla spalla (Clean) estendendo gambe e anche mentre lo sollevi. Ruota il polso durante il movimento. Questa è la posizione di partenza. Inizia inclinando il busto sul lato opposto al kettlebell, continuando finché non riesci a toccare terra con la mano libera, tenendo lo sguardo fisso sul kettlebell. Contemporaneamente, spingi il peso verticalmente estendendo il gomito e mantenendo il braccio perpendicolare al suolo. Torna in posizione eretta con il kettlebell sopra la testa. Riporta il kettlebell alla spalla e ripeti per il numero di ripetizioni desiderato.', 
  'abdominals', 
  'glutes', 
  'kettlebells', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Press/1.jpg'], 
  NOW()
),
(
  '11c729bb-47fe-4b60-a306-dedbd796bd69', 
  'Bicycling', 
  'Ciclismo', 
  'To begin, seat yourself on the bike and adjust the seat to your height.', 
  'Per iniziare, siediti sulla bici e regola l''altezza della sella.', 
  'quadriceps', 
  'calves', 
  'other', 
  'beginner', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicycling/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicycling/1.jpg'], 
  NOW()
),
(
  '0b7deacf-9186-42d8-8f3f-04c281ed7edb', 
  'Bicycling, Stationary', 
  'Ciclismo, Cyclette', 
  'To begin, seat yourself on the bike and adjust the seat to your height.
Select the desired option from the menu. You may have to start pedaling to turn it on. You can use the manual setting, or you can select a program to use. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. The level of resistance can be changed throughout the workout. The handles can be used to monitor your heart rate to help you stay at an appropriate intensity.', 
  'Per iniziare, siediti sulla cyclette e regola l''altezza della sella. Seleziona l''opzione desiderata dal menu. Potrebbe essere necessario iniziare a pedalare per accenderla. Puoi utilizzare l''impostazione manuale o selezionare un programma. Generalmente, puoi inserire età e peso per stimare le calorie bruciate durante l''esercizio. Il livello di resistenza può essere modificato durante l''allenamento. Le maniglie possono essere utilizzate per monitorare la frequenza cardiaca e aiutarti a mantenere un''intensità adeguata.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicycling_Stationary/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicycling_Stationary/1.jpg'], 
  NOW()
),
(
  'e1ea2455-1a91-4958-8263-bd8b86c7c917', 
  'Board Press', 
  'Board Press', 
  'Begin by lying on the bench, getting your head beyond the bar if possible. One to five boards, made out of 2x6''s, can be screwed together and held in place by a training partner, bands, or just tucked under your shirt.
Tuck your feet underneath you and arch your back. Using the bar to help support your weight, lift your shoulder off the bench and retract them, squeezing the shoulder blades together. Use your feet to drive your traps into the bench. Maintain this tight body position throughout the movement.
You can take a standard bench grip, or shoulder width to focus on the triceps. Pull the bar out of the rack without protracting your shoulders. The bar, wrist, and elbow should stay in line at all times. Focus on squeezing the bar and trying to pull it apart.
Lower the bar to the boards, and then drive the bar up with as much force as possible. The elbows should be tucked in until lockout.', 
  'Inizia sdraiato sulla panca, portando la testa oltre il bilanciere se possibile. Da uno a cinque listelli di legno (2x6 pollici) possono essere fissati insieme e tenuti in posizione da un compagno, con elastici o infilati sotto la maglietta. Posiziona i piedi sotto di te e inarca la schiena. Usando il bilanciere per supportare il peso, stacca le spalle dalla panca e retraile, strizzando le scapole. Usa i piedi per spingere i trapezi contro la panca. Mantieni questa posizione compatta per tutto il movimento. Puoi usare una presa standard o a larghezza spalle per focalizzarti sui tricipiti. Stacca il bilanciere dal rack senza protrarre le spalle. Bilanciere, polsi e gomiti devono rimanere allineati. Concentrati sullo stringere il bilanciere cercando di ''spezzarlo''. Abbassa il bilanciere sui listelli, quindi spingilo verso l''alto con la massima forza possibile. I gomiti devono rimanere stretti fino alla chiusura del movimento.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Board_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Board_Press/1.jpg'], 
  NOW()
),
(
  '20357626-080f-4a67-81d7-0f47c973ce2c', 
  'Body-Up', 
  'Body-Up', 
  'Assume a plank position on the ground. You should be supporting your bodyweight on your toes and forearms, keeping your torso straight. Your forearms should be shoulder-width apart. This will be your starting position.
Pressing your palms firmly into the ground, extend through the elbows to raise your body from the ground. Keep your torso rigid as you perform the movement.
Slowly lower your forearms back to the ground by allowing the elbows to flex.
Repeat.', 
  'Assumi una posizione di plank a terra. Sostieni il peso del corpo sulle punte dei piedi e sugli avambracci, mantenendo il busto dritto. Gli avambracci devono essere distanziati alla larghezza delle spalle. Questa è la posizione di partenza. Premendo saldamente i palmi delle mani a terra, distendi i gomiti per sollevare il corpo da terra. Mantieni il busto rigido durante l''esecuzione del movimento. Abbassa lentamente gli avambracci verso il pavimento flettendo i gomiti. Ripeti.', 
  'triceps', 
  'abdominals', 
  'body only', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Body-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Body-Up/1.jpg'], 
  NOW()
),
(
  '90ab685c-0715-4b32-ae87-9341acc87fe2', 
  'Body Tricep Press', 
  'Body Tricep Press', 
  'Position a bar in a rack at chest height.
Standing, take a shoulder width grip on the bar and step a yard or two back, feet together and arms extended so that you are leaning on the bar. This will be your starting position.
Begin by flexing the elbow, lowering yourself towards the bar.
Pause, and then reverse the motion by extending the elbows.
Progress from bodyweight by adding chains over your shoulders.', 
  'Posiziona un bilanciere su un rack all''altezza del petto. In posizione eretta, impugna il bilanciere alla larghezza delle spalle e fai un passo o due all''indietro, con i piedi uniti e le braccia distese, in modo da appoggiarti al bilanciere. Questa è la posizione di partenza. Inizia flettendo i gomiti, abbassandoti verso il bilanciere. Fai una pausa, quindi inverti il movimento estendendo i gomiti. Puoi aumentare la difficoltà aggiungendo delle catene sulle spalle.', 
  'triceps', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Body_Tricep_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Body_Tricep_Press/1.jpg'], 
  NOW()
),
(
  '9bb96e38-1deb-478f-ad39-8096523e351f', 
  'Bodyweight Flyes', 
  'Bodyweight Flyes', 
  'Position two equally loaded EZ bars on the ground next to each other. Ensure they are able to roll.
Assume a push-up position over the bars, supporting your weight on your toes and hands with your arms extended and body straight.
Place your hands on the bars. This will be your starting position.
Using a slow and controlled motion, move your hands away from the midline of your body, rolling the bars apart. Inhale during this portion of the motion.
After moving the bars as far apart as you can, return to the starting position by pulling them back together. Exhale as you perform this movement.', 
  'Posiziona due bilancieri EZ caricati in modo uguale a terra, uno accanto all''altro, assicurandoti che possano rotolare. Assumi una posizione di piegamento (push-up) sopra i bilancieri, sostenendo il peso sulle punte dei piedi e sulle mani, con braccia tese e corpo dritto. Appoggia le mani sui bilancieri. Questa è la posizione di partenza. Con un movimento lento e controllato, allontana le mani dalla linea mediana del corpo, facendo rotolare i bilancieri verso l''esterno. Inspira durante questa fase. Dopo aver allontanato i bilancieri il più possibile, torna alla posizione iniziale avvicinandoli nuovamente. Espira durante questo movimento.', 
  'chest', 
  'abdominals', 
  'e-z curl bar', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Flyes/1.jpg'], 
  NOW()
),
(
  '9339c933-7c82-4c3c-bab5-df53fc67a188', 
  'Bodyweight Mid Row', 
  'Bodyweight Mid Row', 
  'Begin by taking a medium to wide grip on a pull-up apparatus with your palms facing away from you. From a hanging position, tuck your knees to your chest, leaning back and getting your legs over your side of the pull-up apparatus. This will be your starting position.
Beginning with your arms straight, flex the elbows and retract the shoulder blades to raise your body up until your legs contact the pull-up apparatus.
After a brief pause, return to the starting position.', 
  'Inizia con un''impugnatura da media a larga su una sbarra per trazioni, con i palmi rivolti lontano da te. Dalla posizione appesa, porta le ginocchia al petto, inclinati all''indietro e fai passare le gambe oltre la sbarra. Questa è la posizione di partenza. Partendo con le braccia tese, fletti i gomiti e contrai le scapole per sollevare il corpo finché le gambe non toccano la sbarra. Dopo una breve pausa, torna alla posizione iniziale.', 
  'middle back', 
  'biceps', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Mid_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Mid_Row/1.jpg'], 
  NOW()
),
(
  'cfdf3682-58c4-4e7a-8853-e7f849c0c725', 
  'Bodyweight Squat', 
  'Bodyweight Squat', 
  'Stand with your feet shoulder width apart. You can place your hands behind your head. This will be your starting position.
Begin the movement by flexing your knees and hips, sitting back with your hips.
Continue down to full depth if you are able,and quickly reverse the motion until you return to the starting position. As you squat, keep your head and chest up and push your knees out.', 
  'In piedi, con i piedi alla larghezza delle spalle. Puoi posizionare le mani dietro la testa. Questa è la posizione di partenza. Inizia il movimento flettendo ginocchia e anche, spingendo il bacino all''indietro. Continua a scendere fino alla massima profondità possibile e inverti rapidamente il movimento fino a tornare alla posizione iniziale. Mentre esegui lo squat, tieni la testa e il petto alti e spingi le ginocchia verso l''esterno.', 
  'quadriceps', 
  'glutes', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/1.jpg'], 
  NOW()
),
(
  'ddf14a68-4977-4e1c-b01a-35075317b8a9', 
  'Bodyweight Walking Lunge', 
  'Bodyweight Walking Lunge', 
  'Begin standing with your feet shoulder width apart and your hands on your hips.
Step forward with one leg, flexing the knees to drop your hips. Descend until your rear knee nearly touches the ground. Your posture should remain upright, and your front knee should stay above the front foot.
Drive through the heel of your lead foot and extend both knees to raise yourself back up.
Step forward with your rear foot, repeating the lunge on the opposite leg.', 
  'Parti in piedi con i piedi alla larghezza delle spalle e le mani sui fianchi. Fai un passo in avanti con una gamba, flettendo le ginocchia per abbassare il bacino. Scendi finché il ginocchio posteriore quasi tocca terra. La postura deve rimanere eretta e il ginocchio anteriore deve rimanere allineato sopra il piede. Spingi attraverso il tallone del piede anteriore ed estendi entrambe le ginocchia per risalire. Fai un passo in avanti con il piede posteriore e ripeti l''affondo con l''altra gamba.', 
  'quadriceps', 
  'calves', 
  NULL, 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/1.jpg'], 
  NOW()
),
(
  '66e606b0-1e14-41f9-89c9-5e96b2cc0110', 
  'Bosu Ball Cable Crunch With Side Bends', 
  'Bosu Ball Cable Crunch With Side Bends', 
  'Connect a standard handle to each arm of a cable machine, and position them in the most downward position.
Grab a Bosu Ball and position it in front and center of the cable machine.
Lie down on the Bosu Ball with the small of your back arched around the ball. Your rear end should be close to the floor without touching it.
With both hands, reach back and grab the handle of each cable.
With your feet positioned in a wide stance, extend your arms straight out in front of you and in between your knees. Your hands should be at knee level.
Keep your arms straight and in-line with the upward angle of the cable. Elevate your torso in a crunching motion without dropping or bending your arms.
Maintain the rigid position with your arms. Slowly descend back to the starting position with your back arched around the Bosu Ball and your abdominals elongated.
Repeat the same series of movements to failure.
Once you reach failure, keep your abs tight and raise your torso into plank position so your back is elevated off the Bosu Ball.
Lower your arms down to your side; keep them straight. Start doing alternating side bends; reach for your heels! This finishing movement will focus on your obliques.', 
  'Collega una maniglia standard a ciascun cavo della macchina, posizionandoli nel punto più basso. Posiziona una Bosu Ball davanti al centro della macchina. Sdraiati sulla Bosu Ball con la parte bassa della schiena arcuata sulla sfera. I glutei devono essere vicini al pavimento senza toccarlo. Con entrambe le mani, afferra le maniglie dei cavi. Con i piedi in una posizione ampia, stendi le braccia dritte davanti a te, tra le ginocchia. Le mani devono essere all''altezza delle ginocchia. Mantieni le braccia tese e allineate con l''angolo del cavo. Solleva il busto con un movimento di crunch senza piegare le braccia. Mantieni le braccia rigide. Scendi lentamente alla posizione iniziale con la schiena arcuata sulla Bosu Ball e gli addominali allungati. Ripeti fino al cedimento. Al cedimento, tieni gli addominali contratti e solleva il busto in posizione di plank, staccando la schiena dalla Bosu Ball. Abbassa le braccia lungo i fianchi, tenendole tese. Inizia a eseguire delle flessioni laterali alternate; cerca di toccare i talloni! Questo movimento finale si concentrerà sugli obliqui.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bosu_Ball_Cable_Crunch_With_Side_Bends/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bosu_Ball_Cable_Crunch_With_Side_Bends/1.jpg'], 
  NOW()
),
(
  'b9bdcac6-e97e-442d-ac8d-b3de82085c07', 
  'Bottoms-Up Clean From The Hang Position', 
  'Bottoms-Up Clean From The Hang Position', 
  'Initiate the exercise by standing upright with a kettlebell in one hand.
Swing the kettlebell back forcefully and then reverse the motion forcefully. Crush the kettlebell handle as hard as possible and raise the kettlebell to your shoulder.', 
  'Inizia l''esercizio in posizione eretta con una kettlebell in una mano. Fai oscillare la kettlebell all''indietro con forza e poi inverti il movimento con decisione. Stringi il manico della kettlebell il più forte possibile e porta la kettlebell alla spalla mantenendola capovolta.', 
  'forearms', 
  'biceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bottoms-Up_Clean_From_The_Hang_Position/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bottoms-Up_Clean_From_The_Hang_Position/1.jpg'], 
  NOW()
),
(
  'baa74b30-d012-420f-84e3-72f0b9f87e6e', 
  'Bottoms Up', 
  'Bottoms Up', 
  'Begin by lying on your back on the ground. Your legs should be straight and your arms at your side. This will be your starting position.
To perform the movement, tuck the knees toward your chest by flexing the hips and knees. Following this, extend your legs directly above you so that they are perpendicular to the ground. Rotate and elevate your pelvis to raise your glutes from the floor.
After a brief pause, return to the starting position.', 
  'Sdraiati a terra sulla schiena. Le gambe devono essere tese e le braccia lungo i fianchi. Questa è la posizione di partenza. Per eseguire il movimento, porta le ginocchia verso il petto flettendo anche e ginocchia. Successivamente, stendi le gambe direttamente sopra di te in modo che siano perpendicolari al suolo. Ruota ed eleva il bacino per sollevare i glutei da terra. Dopo una breve pausa, torna alla posizione iniziale.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bottoms_Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bottoms_Up/1.jpg'], 
  NOW()
),
(
  'f7e49ab7-71fc-403d-962a-8ae5a7d6d923', 
  'Box Jump (Multiple Response)', 
  'Box Jump (Multiple Response)', 
  'Assume a relaxed stance facing the box or platform approximately an arm''s length away. Arms should be down at the sides and legs slightly bent.
Using the arms to aid in the initial burst, jump upward and forward, landing with feet simultaneously on top of the box or platform.
Immediately drop or jump back down to the original starting place; then repeat the sequence.', 
  'Assumi una posizione rilassata di fronte a una scatola o una piattaforma, a circa un braccio di distanza. Le braccia devono essere lungo i fianchi e le gambe leggermente flesse. Usando le braccia per favorire la spinta iniziale, salta verso l''alto e in avanti, atterrando con entrambi i piedi contemporaneamente sopra la scatola o la piattaforma. Scendi o salta immediatamente all''indietro tornando al punto di partenza originale; quindi ripeti la sequenza.', 
  'hamstrings', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Jump_Multiple_Response/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Jump_Multiple_Response/1.jpg'], 
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