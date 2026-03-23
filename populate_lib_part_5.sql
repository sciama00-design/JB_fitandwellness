-- Full population of exercise_library with Italian translations (Batch 5)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  '109dcf25-1222-4dff-a815-e9920b4fed1c', 
  'Landmine 180''s', 
  'Landmine 180''s', 
  'Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight.
Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position.
Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise.
Reverse the motion to swing the weight all the way to the opposite side.
Continue alternating the movement until the set is complete.', 
  'Posiziona un bilanciere in un supporto landmine o fissalo saldamente in un angolo. Carica il bilanciere con un peso adeguato. Solleva il bilanciere da terra portandolo all''altezza delle spalle con entrambe le mani e braccia tese davanti a te. Adotta una posizione dei piedi larga. Questa sarà la posizione di partenza. Esegui il movimento ruotando il busto e le anche mentre fai oscillare il peso lateralmente fino in basso. Mantieni le braccia tese durante tutto l''esercizio. Inverti il movimento per far oscillare il peso verso il lato opposto. Continua ad alternare il movimento fino al completamento della serie.', 
  'abdominals', 
  'glutes', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Landmine_180s/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Landmine_180s/1.jpg'], 
  NOW()
),
(
  '9293d69d-4b83-44b7-ba80-eba5499d04db', 
  'Landmine Linear Jammer', 
  'Landmine Linear Jammer', 
  'Position a bar into landmine or, lacking one, securely anchor it in a corner. Load the bar to an appropriate weight and position the handle attachment on the bar.
Raise the bar from the floor, taking the handles to your shoulders. This will be your starting position.
In an athletic stance, squat by flexing your hips and setting your hips back, keeping your arms flexed.
Reverse the motion by powerfully extending through the hips, knees, and ankles, while also extending the elbows to straighten the arms. This movement should be done explosively, coming out of the squat to full extension as powerfully as possible.
Return to the starting position.', 
  'Posiziona un bilanciere in un supporto landmine o, in mancanza, fissalo saldamente in un angolo. Carica il bilanciere con un peso adeguato e inserisci l''impugnatura. Solleva il bilanciere da terra portando le impugnature alle spalle. Questa sarà la posizione di partenza. In posizione atletica, esegui uno squat flettendo le anche e portandole indietro, mantenendo le braccia flesse. Inverti il movimento estendendo con forza anche, ginocchia e caviglie, mentre estendi contemporaneamente i gomiti per distendere le braccia. Questo movimento deve essere esplosivo, risalendo dallo squat fino alla completa estensione con la massima potenza possibile. Torna alla posizione di partenza.', 
  'shoulders', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Landmine_Linear_Jammer/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Landmine_Linear_Jammer/1.jpg'], 
  NOW()
),
(
  'fc8b3218-98f6-4fcc-81f5-d1c4db1ff0b0', 
  'Lateral Bound', 
  'Lateral Bound', 
  'Assume a half squat position facing 90 degrees from your direction of travel. This will be your starting position.
Allow your lead leg to do a countermovement inward as you shift your weight to the outside leg.
Immediately push off and extend, attempting to bound to the side as far as possible.
Upon landing, immediately push off in the opposite direction, returning to your original start position.
Continue back and forth for several repetitions.', 
  'Assumi una posizione di mezzo squat orientato a 90 gradi rispetto alla direzione di spostamento. Questa sarà la posizione di partenza. Esegui un contro-movimento verso l''interno con la gamba di spinta mentre sposti il peso sulla gamba esterna. Spingi immediatamente ed estendi, cercando di saltare lateralmente il più lontano possibile. All''atterraggio, spingi immediatamente nella direzione opposta, tornando alla posizione di partenza iniziale. Continua alternando il movimento per diverse ripetizioni.', 
  'adductors', 
  'abductors', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Bound/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Bound/1.jpg'], 
  NOW()
),
(
  'a1e88449-0ff2-4c60-8f39-2c395b1bc1e0', 
  'Lateral Box Jump', 
  'Lateral Box Jump', 
  'Assume a comfortable standing position, with a short box positioned next to you. This will be your starting position.
Quickly dip into a quarter squat to initiate the stretch reflex, and immediately reverse direction to jump up and to the side.
Bring your knees high enough to ensure your feet have good clearance over the box.
Land on the center of the box, using your legs to absorb the impact.
Carefully jump down to the other side of the box, and continue going back and forth for several repetitions.', 
  'Assumi una comoda posizione eretta con un box basso posizionato lateralmente rispetto a te. Questa sarà la posizione di partenza. Esegui rapidamente un quarto di squat per attivare il riflesso miotatico e inverti immediatamente la direzione per saltare verso l''alto e di lato. Porta le ginocchia abbastanza in alto da garantire che i piedi superino chiaramente il box. Atterra al centro del box, utilizzando le gambe per assorbire l''impatto. Salta con attenzione verso l''altro lato del box e continua alternando il movimento per diverse ripetizioni.', 
  'adductors', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Box_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Box_Jump/1.jpg'], 
  NOW()
),
(
  '700d8963-7237-401f-9222-344095fef690', 
  'Lateral Cone Hops', 
  'Lateral Cone Hops', 
  'Position a number of cones in a row several feet apart.
Stand next to the end of the cones, facing 90 degrees to the direction of travel. This will be your starting position.
Begin the jump by dipping with the knees to initiate a stretch reflex, and immediately reverse direction to push off the ground, jumping up and sideways over the cone.
Use your legs to absorb impact upon landing, and rebound into the next jump, continuing down the row of cones.', 
  'Posiziona una serie di coni in fila a diversi centimetri di distanza l''uno dall''altro. Stai accanto all''estremità della fila di coni, rivolto a 90 gradi rispetto alla direzione di avanzamento. Questa sarà la posizione di partenza. Inizia il salto flettendo le ginocchia per attivare il riflesso miotatico e inverti immediatamente la direzione per spingerti dal suolo, saltando verso l''alto e lateralmente sopra il cono. Usa le gambe per assorbire l''impatto all''atterraggio e sfrutta il rimbalzo per il salto successivo, proseguendo lungo la fila di coni.', 
  'adductors', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Cone_Hops/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Cone_Hops/1.jpg'], 
  NOW()
),
(
  'cedd9c2c-e3b6-4dd8-9ff0-a167580505f6', 
  'Lateral Raise - With Bands', 
  'Alzate Laterali con Bande Elastiche', 
  'To begin, stand on an exercise band so that tension begins at arm''s length. Grasp the handles using a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The handles should be resting on the sides of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.
Use your side shoulders to lift the handles to the sides as you exhale. Continue to lift the handles until they are slightly above parallel. Tip: As you lift the handles, slightly tilt the hand as if you were pouring water and keep your arms extended. Also, keep your torso stationary and pause for a second at the top of the movement.
Lower the handles back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Inizia posizionandoti in piedi sopra una banda elastica in modo che la tensione inizi fin da subito a braccia distese. Afferra le maniglie con una presa prona (palmi rivolti verso le cosce) leggermente più stretta della larghezza delle spalle. Le maniglie devono poggiare ai lati delle cosce. Le braccia devono essere tese con una leggera flessione dei gomiti e la schiena dritta. Questa sarà la posizione di partenza. Utilizza i muscoli delle spalle per sollevare le maniglie lateralmente espirando. Continua a sollevare le maniglie finché non sono leggermente al di sopra della linea parallela. Consiglio: mentre sollevi, ruota leggermente le mani come se stessi versando dell''acqua e tieni le braccia tese. Mantieni il busto immobile e fai una pausa di un secondo nel punto massimo del movimento. Abbassa lentamente le maniglie verso la posizione di partenza. Inspira durante questa fase del movimento. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  NULL, 
  'bands', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Raise_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lateral_Raise_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '363a38a8-a620-410e-904b-60075d0a4379', 
  'Latissimus Dorsi-SMR', 
  'SMR Gran Dorsale', 
  'While lying on the floor, place a foam roll under your back and to one side, just behind your arm pit. This will be your starting position.
Keep the arm of the side being stretched behind and to the side of you as you shift your weight onto your lats, keeping your upper body off of the ground. Hold for 10-30 seconds, and switch sides.', 
  'Sdraiato a terra, posiziona un foam roller sotto la schiena lateralmente, appena dietro l''ascella. Questa sarà la posizione di partenza. Mantieni il braccio del lato che stai trattando dietro e lateralmente a te mentre sposti il peso sui dorsali, mantenendo la parte superiore del corpo sollevata da terra. Mantieni la posizione per 10-30 secondi, quindi cambia lato.', 
  'lats', 
  NULL, 
  'foam roll', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Latissimus_Dorsi-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Latissimus_Dorsi-SMR/1.jpg'], 
  NOW()
),
(
  '97dcaa35-a3ab-471f-9871-c0c625dd8ad6', 
  'Leg-Over Floor Press', 
  'Leg-Over Floor Press', 
  'Lie on the floor with one kettlebell in place on your chest, holding it by the handle. Extend leg on working side over leg on non-working side.Your free arm can be extended out to your side for support.
Press the kettlebll into a locked out position.
Lower the weight until the elbow touches the ground, keeping the kettlebell above the elbow. Repeat for the desired number of repetitions.', 
  'Sdraiati a terra con un kettlebell sul petto, afferrandolo per l''impugnatura. Estendi la gamba del lato di lavoro sopra la gamba del lato non lavorativo. Il braccio libero può essere disteso lateralmente per supporto. Spingi il kettlebell verso l''alto fino a completa estensione. Abbassa il peso finché il gomito tocca terra, mantenendo il kettlebell sopra il gomito. Ripeti per il numero di ripetizioni desiderato.', 
  'chest', 
  'shoulders', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg-Over_Floor_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg-Over_Floor_Press/1.jpg'], 
  NOW()
),
(
  '29f19f33-fe7a-4da9-a2b9-ccde3bc8ea8b', 
  'Leg-Up Hamstring Stretch', 
  'Stretching Ischiocrurali con Gamba Sollevata', 
  'Lie flat on your back, bend one knee, and put that foot flat on the floor to stabilize your spine.
Extend the other leg in the air. If you''re tight, you wont be able to straighten it. That''s okay. Extend the knee so that the sole of the lifted foot faces the ceiling (or as close as you can get it).
Slowly straighten the legs as much as possible and then pull the leg toward your nose. Switch sides.', 
  'Sdraiati supino, fletti un ginocchio e appoggia il piede a terra per stabilizzare la colonna vertebrale. Estendi l''altra gamba verso l''alto. Se senti tensione, potresti non riuscire a stenderla completamente, va bene così. Estendi il ginocchio in modo che la pianta del piede rivolto verso l''alto sia parallela al soffitto (o il più possibile). Raddrizza lentamente le gambe quanto più possibile e poi tira la gamba verso il naso. Cambia gamba.', 
  'hamstrings', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg-Up_Hamstring_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg-Up_Hamstring_Stretch/1.jpg'], 
  NOW()
),
(
  '61c4827e-f3c5-4889-8d24-9478751e4138', 
  'Leg Extensions', 
  'Leg Extension', 
  'For this exercise you will need to use a leg extension machine. First choose your weight and sit on the machine with your legs under the pad (feet pointed forward) and the hands holding the side bars. This will be your starting position. Tip: You will need to adjust the pad so that it falls on top of your lower leg (just above your feet). Also, make sure that your legs form a 90-degree angle between the lower and upper leg. If the angle is less than 90-degrees then that means the knee is over the toes which in turn creates undue stress at the knee joint. If the machine is designed that way, either look for another machine or just make sure that when you start executing the exercise you stop going down once you hit the 90-degree angle.
Using your quadriceps, extend your legs to the maximum as you exhale. Ensure that the rest of the body remains stationary on the seat. Pause a second on the contracted position.
Slowly lower the weight back to the original position as you inhale, ensuring that you do not go past the 90-degree angle limit.
Repeat for the recommended amount of times.', 
  'Per questo esercizio è necessario utilizzare una macchina per leg extension. Seleziona il carico, siediti sulla macchina con le gambe sotto il cuscinetto (piedi rivolti in avanti) e le mani che afferrano le maniglie laterali. Questa sarà la posizione di partenza. Consiglio: regola il cuscinetto in modo che poggi sulla parte inferiore della gamba (appena sopra i piedi). Assicurati che le gambe formino un angolo di 90 gradi tra la parte inferiore e superiore. Se l''angolo è inferiore a 90 gradi, il ginocchio supererà la punta dei piedi, creando uno stress eccessivo sull''articolazione. Se la macchina è progettata in questo modo, cerca un''altra attrezzatura o assicurati di fermare il movimento verso il basso una volta raggiunto l''angolo di 90 gradi. Utilizzando i quadricipiti, estendi le gambe al massimo mentre espiri. Assicurati che il resto del corpo rimanga immobile sul sedile. Fai una pausa di un secondo nella posizione di contrazione. Abbassa lentamente il peso alla posizione originale inspirando, assicurandoti di non superare il limite di 90 gradi. Ripeti per il numero di volte consigliato.', 
  'quadriceps', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/1.jpg'], 
  NOW()
),
(
  'c06f66ab-ec94-4458-8a19-c151c599f885', 
  'Leg Lift', 
  'Leg Lift', 
  'While standing up straight with both feet next to each other at around shoulder width, grab a sturdy surface such as the sides of a squat rack or the top of a chair to brace yourself and keep balance.
With or without an ankle weight, lift one leg behind you as if performing a leg curl but standing up while keeping the other leg straight. Breathe out as you perform this movement.
Slowly bring the raised leg back to the floor as you breathe in.
Repeat for the recommended amount of repetitions.
Repeat the movement with the opposite leg.', 
  'In piedi, con i piedi alla larghezza delle spalle, afferra una superficie stabile (come i montanti di un rack o lo schienale di una sedia) per mantenere l''equilibrio. Con o senza cavigliere, solleva una gamba all''indietro come se stessi eseguendo un leg curl, mantenendo l''altra gamba tesa. Espira durante il movimento. Inspira mentre riporti lentamente la gamba a terra. Ripeti per il numero di ripetizioni consigliato e poi cambia gamba.', 
  'glutes', 
  'hamstrings', 
  'body only', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Lift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Lift/1.jpg'], 
  NOW()
),
(
  '7beaba32-d02a-47f2-939d-df0964f3bbe7', 
  'Leg Press', 
  'Leg Press', 
  'Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).
Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you. Tip: Make sure that you do not lock your knees. Your torso and the legs should make a perfect 90-degree angle. This will be your starting position.
As you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle.
Pushing mainly with the heels of your feet and using the quadriceps go back to the starting position as you exhale.
Repeat for the recommended amount of repetitions and ensure to lock the safety pins properly once you are done. You do not want that platform falling on you fully loaded.', 
  'Siediti sulla leg press e posiziona i piedi sulla piattaforma alla larghezza delle spalle. Abbassa le barre di sicurezza e spingi la piattaforma fino a distendere le gambe (senza bloccare le ginocchia). Il busto e le gambe dovrebbero formare un angolo di 90 gradi: questa è la posizione di partenza. Inspira e abbassa lentamente la piattaforma finché le cosce e le gambe formano un angolo di 90 gradi. Spingendo principalmente con i talloni e usando i quadricipiti, torna alla posizione iniziale espirando. Al termine, assicurati di bloccare le sicure.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/1.jpg'], 
  NOW()
),
(
  'f1ea89fe-8784-45e5-8f74-858f6555635d', 
  'Leg Pull-In', 
  'Leg Pull-In', 
  'Lie on an exercise mat with your legs extended and your hands either palms facing down next to you or under your glutes. Tip: My preference is with the hands next to me. This will be your starting position.
Bend your knees and pull your upper thighs into your midsection as you breathe out. Continue the motion until your knees are around chest level. Contract your abs as you execute this movement and hold for a second at the top. Tip: As you perform the motion, the lower legs (calves) should always remain parallel to the floor.
Return to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su un tappetino con le gambe tese e le mani lungo i fianchi o sotto i glutei. Questa è la posizione di partenza. Espirando, fletti le ginocchia e porta le cosce verso l''addome finché le ginocchia non sono all''altezza del petto. Contrai gli addominali e mantieni la posizione per un secondo. I polpacci devono rimanere paralleli al pavimento durante il movimento. Inspira tornando alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Pull-In/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Pull-In/1.jpg'], 
  NOW()
),
(
  '213b2c4d-acd8-4160-aaec-9ad70462b2a3', 
  'Leverage Chest Press', 
  'Leverage Chest Press', 
  'Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the bottom or middle of the pectorals at the beginning of the motion.
Your chest and head should be up and your shoulder blades retracted. This will be your starting position.
Press the handles forward by extending through the elbow.
After a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.', 
  'Carica il peso appropriato e regola il sedile in base alla tua altezza; all''inizio del movimento, le maniglie devono trovarsi vicino alla parte inferiore o centrale dei pettorali. Mantieni petto in fuori, testa alta e scapole addotte. Spingi le maniglie in avanti distendendo i gomiti. Dopo una breve pausa, riporta il peso appena sopra la posizione di partenza, mantenendo la tensione muscolare e senza appoggiare i pesi sui fermi fino al termine della serie.', 
  'chest', 
  'shoulders', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Chest_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Chest_Press/1.jpg'], 
  NOW()
),
(
  '20703dc6-83cb-469a-bc22-ed516e3158f7', 
  'Leverage Deadlift', 
  'Leverage Deadlift', 
  'Load the pins to an appropriate weight. Position yourself directly between the handles. Grasp the bottom handles with a comfortable grip, and then lower your hips as you take a breath. Look forward with your head and keep your chest up. This will be your starting position.
Return the weight to the starting position.', 
  'Carica il peso appropriato e posizionati tra le maniglie. Afferrale con una presa comoda, abbassa i fianchi e inspira. Tieni la testa alta guardando in avanti e il petto in fuori. Questa è la posizione di partenza. Solleva il peso distendendo le gambe e il busto, quindi riportalo alla posizione di partenza.', 
  'quadriceps', 
  'glutes', 
  'machine', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Deadlift/1.jpg'], 
  NOW()
),
(
  '4766c4ca-de1b-4966-af1d-4f82ac7e6db8', 
  'Leverage Decline Chest Press', 
  'Leverage Decline Chest Press', 
  'Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the bottom of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position.
Press the handles forward by extending through the elbow.
After a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.', 
  'Carica il peso appropriato e regola il sedile; all''inizio del movimento le maniglie devono trovarsi vicino alla parte inferiore dei pettorali. Mantieni petto in fuori, testa alta e scapole addotte. Questa è la posizione di partenza. Spingi le maniglie in avanti distendendo i gomiti. Dopo una breve pausa, riporta il peso appena sopra la posizione di partenza, mantenendo la tensione muscolare e senza appoggiare i pesi sui fermi fino al termine della serie.', 
  'chest', 
  'shoulders', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Decline_Chest_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Decline_Chest_Press/1.jpg'], 
  NOW()
),
(
  'a61b9aa8-0f5f-4c35-ae52-3958112d1112', 
  'Leverage High Row', 
  'Leverage High Row', 
  'Load an appropriate weight onto the pins and adjust the seat height so that you can just reach the handles above you. Adjust the knee pad to help keep you down. Grasp the handles with a pronated grip. This will be your starting position.
Pull the handles towards your torso, retracting your shoulder blades as you flex the elbow.
Pause at the bottom of the motion, and then slowly return the handles to the starting position.
For multiple repetitions, avoid completely returning the weight to the stops to keep tension on the muscles being worked.', 
  'Carica il peso e regola il sedile in modo da raggiungere le maniglie poste in alto. Regola il cuscino per le ginocchia per rimanere stabile. Afferra le maniglie con una presa prona: questa è la posizione di partenza. Tira le maniglie verso il busto, adducendo le scapole e flettendo i gomiti. Fai una pausa alla fine del movimento e torna lentamente alla posizione iniziale. Per le serie multiple, evita di appoggiare completamente il peso sui fermi per mantenere la tensione muscolare.', 
  'middle back', 
  'lats', 
  'machine', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_High_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_High_Row/1.jpg'], 
  NOW()
),
(
  '6d2e5671-082f-4598-b16a-260d7d1de3b7', 
  'Leverage Incline Chest Press', 
  'Leverage Incline Chest Press', 
  'Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the top of the pectorals at the beginning of the motion. Your chest and head should be up and your shoulder blades retracted. This will be your starting position.
Press the handles forward by extending through the elbow.
After a brief pause at the top, return the weight just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.', 
  'Carica il peso appropriato e regola il sedile; all''inizio del movimento le maniglie devono trovarsi vicino alla parte superiore dei pettorali. Mantieni petto in fuori, testa alta e scapole addotte. Questa è la posizione di partenza. Spingi le maniglie in avanti distendendo i gomiti. Dopo una breve pausa, riporta il peso appena sopra la posizione di partenza, mantenendo la tensione muscolare e senza appoggiare i pesi sui fermi fino al termine della serie.', 
  'chest', 
  'shoulders', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Incline_Chest_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Incline_Chest_Press/1.jpg'], 
  NOW()
),
(
  '0522646e-c05c-435c-98e8-a19674b3ab58', 
  'Leverage Iso Row', 
  'Leverage Iso Row', 
  'Load an appropriate weight onto the pins and adjust the seat height so that the handles are at chest level. Grasp the handles with either a neutral or pronated grip. This will be your starting position.
Pull the handles towards your torso, retracting your shoulder blades as you flex the elbow.
Pause at the bottom of the motion, and then slowly return the handles to the starting position. For multiple repetitions, avoid completely returning the weight to the stops to keep tension on the muscles being worked.', 
  'Carica il peso e regola il sedile in modo che le maniglie siano all''altezza del petto. Afferrale con una presa neutra o prona: questa è la posizione di partenza. Tira le maniglie verso il busto, adducendo le scapole e flettendo i gomiti. Fai una pausa alla fine del movimento e torna lentamente alla posizione iniziale. Evita di appoggiare completamente il peso sui fermi tra una ripetizione e l''altra per mantenere la tensione muscolare.', 
  'lats', 
  'biceps', 
  'machine', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Iso_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Iso_Row/1.jpg'], 
  NOW()
),
(
  '4eef0be3-94ba-4787-9e66-969eaefea056', 
  'Leverage Shoulder Press', 
  'Leverage Shoulder Press', 
  'Load an appropriate weight onto the pins and adjust the seat for your height. The handles should be near the top of the shoulders at the beginning of the motion. Your chest and head should be up and handles held with a pronated grip. This will be your starting position.
Press the handles upward by extending through the elbow.
After a brief pause at the top, return the weight to just above the start position, keeping tension on the muscles by not returning the weight to the stops until the set is complete.', 
  'Carica il peso appropriato e regola il sedile; all''inizio del movimento le maniglie devono trovarsi vicino alla parte superiore delle spalle. Mantieni petto in fuori, testa alta e afferra le maniglie con presa prona. Questa è la posizione di partenza. Spingi le maniglie verso l''alto distendendo i gomiti. Dopo una breve pausa, riporta il peso appena sopra la posizione di partenza, mantenendo la tensione muscolare e senza appoggiare i pesi sui fermi fino al termine della serie.', 
  'shoulders', 
  'triceps', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shoulder_Press/1.jpg'], 
  NOW()
),
(
  '38c7b09a-270c-47d0-993b-19377617bd6d', 
  'Leverage Shrug', 
  'Leverage Shrug', 
  'Load the pins to an appropriate weight. Position yourself directly between the handles.
Grasp the top handles with a comfortable grip, and then lower your hips as you take a breath. Look forward with your head and keep your chest up.
Drive through the floor with your heels, extending your hips and knees as you rise to a standing position. Keep your arms straight throughout the movement, finishing with your shoulders back. This will be your starting position.
Raise the weight by shrugging the shoulders towards your ears, moving straight up and down.
Pause at the top of the motion, and then return the weight to the starting position.', 
  'Carica i perni con un peso adeguato. Posizionati esattamente tra le maniglie. Afferra le maniglie superiori con una presa comoda, quindi abbassa i fianchi mentre inspiri. Guarda in avanti tenendo la testa alta e il petto in fuori. Spingi attraverso il pavimento con i talloni, estendendo fianchi e ginocchia fino a raggiungere la posizione eretta. Mantieni le braccia tese durante tutto il movimento, terminando con le spalle portate indietro. Questa sarà la tua posizione di partenza. Solleva il peso effettuando una scrollata di spalle verso le orecchie, muovendoti verticalmente. Fai una pausa nel punto massimo del movimento, quindi riporta il peso nella posizione iniziale.', 
  'traps', 
  'forearms', 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Shrug/1.jpg'], 
  NOW()
),
(
  '6b7130e1-3da2-4e31-96c6-ef7079b1c834', 
  'Linear 3-Part Start Technique', 
  'Linear 3-Part Start Technique', 
  'This drill helps you accelerate as quickly as possible into a sprint from a dead stop. It helps to use a line to start from. Begin with two feet on the line. Place your left foot with the toe next to your right ankle. Place your right foot 4-6 inches behind the left.
Place your right hand onto the line, and thing bring your nose close to your left knee.
Squat down as you lean foward, your head being lower than your hips and your weight loaded onto the left leg. This will be your starting position.
Take your left hand up so that it is parallel to the ground, pointing behind you, and explode out when ready.', 
  'Questo esercizio ti aiuta ad accelerare il più rapidamente possibile nello sprint partendo da fermo. È utile utilizzare una linea di partenza. Inizia con entrambi i piedi sulla linea. Posiziona il piede sinistro con la punta vicino alla caviglia destra. Posiziona il piede destro a 10-15 cm dietro il sinistro. Poggia la mano destra sulla linea e porta il naso vicino al ginocchio sinistro. Accovacciati sporgendoti in avanti, con la testa più bassa dei fianchi e il peso caricato sulla gamba sinistra. Questa sarà la tua posizione di partenza. Porta la mano sinistra all''indietro, parallela al terreno, ed esplodi in avanti quando sei pronto.', 
  'hamstrings', 
  'calves', 
  NULL, 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Linear_3-Part_Start_Technique/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Linear_3-Part_Start_Technique/1.jpg'], 
  NOW()
),
(
  'bb7d01e4-ad4b-4b4d-a11b-04faaa19e3a7', 
  'Linear Acceleration Wall Drill', 
  'Linear Acceleration Wall Drill', 
  'Lean at around 45 degrees against a wall. Your feet should be together, glutes contracted.
Begin by lifting your right knee quickly, pausing, and then driving it straight down into the ground.
Switch legs, raising the opposite knee, and then attacking the ground straight down.
Repeat once more with your right leg, and as soon as the right foot strikes the ground hammer them out rapidly, alternating left and right as fast as you can.', 
  'Appoggiati a una parete inclinandoti di circa 45 gradi. I piedi devono essere uniti e i glutei contratti. Inizia sollevando rapidamente il ginocchio destro, fai una pausa, quindi spingilo con forza verso il suolo. Cambia gamba, sollevando il ginocchio opposto e colpendo il terreno con decisione. Ripeti ancora una volta con la gamba destra e, non appena il piede tocca terra, aumenta rapidamente la frequenza alternando gamba destra e sinistra il più velocemente possibile.', 
  'hamstrings', 
  'calves', 
  NULL, 
  'beginner', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Linear_Acceleration_Wall_Drill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Linear_Acceleration_Wall_Drill/1.jpg'], 
  NOW()
),
(
  '8ed443c0-669c-46ec-8119-0529ce3b4035', 
  'Linear Depth Jump', 
  'Linear Depth Jump', 
  'You will need two boxes or benches spaced a few feet away from each other. Begin by standing on one box facing towards the other platform.
To initiate the movement, gently drop down to the ground between your platforms, allowing the knees and hips to flex.
Reverse the motion by exploding, extending through the hips, knees, and ankles to jump onto the other platform.
Land softly, asborbing the impact through the legs.', 
  'Avrai bisogno di due box o panche distanziati di qualche decina di centimetri. Inizia stando in piedi su un box rivolto verso l''altra piattaforma. Per iniziare il movimento, scendi delicatamente a terra tra le due piattaforme, lasciando che ginocchia e fianchi si flettano. Inverti il movimento con un salto esplosivo, estendendo fianchi, ginocchia e caviglie per balzare sull''altra piattaforma. Atterra dolcemente, assorbendo l''impatto con le gambe.', 
  'quadriceps', 
  'calves', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Linear_Depth_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Linear_Depth_Jump/1.jpg'], 
  NOW()
),
(
  '0a737f13-b5ae-458f-90cb-cfb0f6ae66e2', 
  'Log Lift', 
  'Log Lift', 
  'Begin standing with the log in front of you. Grasp the handles, and begin to clean the log. As you are bent over to start the clean, attempt to get the log as high as possible, pulling it into your chest. Extend through the hips and knees to bring it up to complete the clean.
Push your head back and look up, creating a shelf on your chest to rest the log. Begin the press by dipping, flexing slightly through the knees and reversing the motion. This push press will generate momentum to start the log moving vertically. Continue by extending through the elbows to press the log above your head. There are no strict rules on form, so use whatever techniques you are most efficient with. As the log is pressed, ensure that you push your head through on each repetition, looking forward.
Repeat as many times as possible. Attempt to control the descent of the log as it is returned to the ground.', 
  'Inizia in piedi con il log davanti a te. Afferra le maniglie e inizia la fase di clean. Mentre sei piegato per iniziare, cerca di sollevare il log il più in alto possibile, tirandolo verso il petto. Estendi fianchi e ginocchia per completare il clean. Spingi la testa all''indietro e guarda verso l''alto, creando un appoggio sul petto per far riposare il log. Inizia la spinta piegando leggermente le ginocchia e invertendo il movimento (push press); questo genererà lo slancio per avviare il movimento verticale del log. Continua estendendo i gomiti per spingere il log sopra la testa. Non ci sono regole rigide sulla forma, quindi usa la tecnica che trovi più efficace. Mentre spingi il log, assicurati di far passare la testa in avanti a ogni ripetizione, guardando avanti. Ripeti il maggior numero di volte possibile. Cerca di controllare la discesa del log mentre lo riporti a terra.', 
  'shoulders', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Log_Lift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Log_Lift/1.jpg'], 
  NOW()
),
(
  '99be7e75-00d6-4dc1-8561-a839851f67cb', 
  'London Bridges', 
  'London Bridges', 
  'Attach a climbing rope to a high beam or cross member. Below it, ensure that the smith machine bar is locked in place with the safeties and cannot move. Alternatively, a secure box could also be utilized.
Stand on the bar, using the rope to balance yourself. This will be your starting position.
Keeping your body straight, lean back and lower your body by slowly going hand over hand with the rope. Continue until you are perpendicular to the ground.
Keeping your body straight, reverse the motion, going hand over hand back to the starting position.', 
  'Attacca una corda da arrampicata a una trave alta o a un supporto trasversale. Sotto di essa, assicurati che la barra della smith machine sia bloccata in posizione con le sicure in modo che non possa muoversi. In alternativa, si può utilizzare un box sicuro. Sali sulla barra, usando la corda per bilanciarti. Questa sarà la posizione di partenza. Mantenendo il corpo dritto, inclinati all''indietro e abbassa il corpo muovendoti lentamente lungo la corda, mano dopo mano. Continua finché non sei perpendicolare al suolo. Mantenendo il corpo dritto, inverti il movimento tornando, mano dopo mano, alla posizione di partenza.', 
  'lats', 
  'biceps', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/London_Bridges/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/London_Bridges/1.jpg'], 
  NOW()
),
(
  '1d0399ab-45c3-4ceb-a24b-67cdd3270009', 
  'Looking At Ceiling', 
  'Looking At Ceiling', 
  'Kneel on the floor, holding your heels with both hands.
Lift your buttocks up and forward while bringing your head back to look up at the ceiling, to give an arch in your back.', 
  'Inginocchiati sul pavimento, afferrando i talloni con entrambe le mani. Solleva i glutei verso l''alto e in avanti, portando contemporaneamente la testa all''indietro per guardare il soffitto, creando un arco con la schiena.', 
  'quadriceps', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Looking_At_Ceiling/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Looking_At_Ceiling/1.jpg'], 
  NOW()
),
(
  '0065d4f1-0d6e-4f3b-b109-2fd7914486d0', 
  'Low Cable Crossover', 
  'Low Cable Crossover', 
  'To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand.
Step forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position.
With a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up.
Return your arms back to the starting position after a brief pause.', 
  'Per la posizione di partenza, posiziona le carrucole in basso, seleziona il peso e afferra una maniglia con ogni mano. Fai un passo avanti per mettere in tensione i cavi. I palmi devono essere rivolti in avanti, le mani sotto la vita e le braccia tese. Questa sarà la posizione di partenza. Con una leggera flessione delle braccia, porta le mani verso l''alto e verso la linea mediana del corpo. Le mani dovrebbero incontrarsi davanti al petto con i palmi rivolti verso l''alto. Dopo una breve pausa, riporta le braccia nella posizione iniziale.', 
  'chest', 
  'shoulders', 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Low_Cable_Crossover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Low_Cable_Crossover/1.jpg'], 
  NOW()
),
(
  'ba4233a6-535e-415f-b7e7-556a041acd84', 
  'Low Cable Triceps Extension', 
  'Low Cable Triceps Extension', 
  'Select the desired weight and lay down face up on the bench of a seated row machine that has a rope attached to it. Your head should be pointing towards the attachment.
Grab the outside of the rope ends with your palms facing each other (neutral grip).
Position your elbows so that they are bent at a 90 degree angle and your upper arms are perpendicular (90 degree angle) to your torso. Tip: Keep the elbows in and make sure that the upper arms point to the ceiling while your forearms point towards the pulley above your head. This will be your starting position.
As you breathe out, extend your lower arms until they are straight and vertical. The upper arms and elbows remain stationary throughout the movement. Only the forearms should move. Contract the triceps hard for a second.
As you breathe in slowly return to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Seleziona il peso desiderato e sdraiati supino sulla panca di una macchina per il rematore seduto a cui è attaccata una corda. La testa deve essere rivolta verso il punto di attacco. Afferra le estremità della corda con i palmi rivolti l''uno verso l''altro (presa neutra). Posiziona i gomiti in modo che siano piegati a 90 gradi e la parte superiore delle braccia sia perpendicolare al busto. Consiglio: tieni i gomiti stretti e assicurati che la parte superiore delle braccia punti verso il soffitto mentre gli avambracci puntano verso la carrucola sopra la testa. Questa sarà la posizione di partenza. Mentre espiri, estendi gli avambracci finché non sono dritti e verticali. La parte superiore delle braccia e i gomiti rimangono fermi durante il movimento. Solo gli avambracci devono muoversi. Contrai intensamente i tricipiti per un secondo. Mentre inspiri, torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Low_Cable_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Low_Cable_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  'a8d696e4-5e6c-4b45-9fe2-25b7c7d2b0d5', 
  'Low Pulley Row To Neck', 
  'Low Pulley Row To Neck', 
  'Sit on a low pulley row machine with a rope attachment.
Grab the ends of the rope using a palms-down grip and sit with your back straight and your knees slightly bent. Tip: Keep your back almost completely vertical and your arms fully extended in front of you. This will be your starting position.
While keeping your torso stationary, lift your elbows and start bending them as you pull the rope towards your neck while exhaling. Throughout the movement your upper arms should remain parallel to the floor. Tip: Continue this motion until your hands are almost next to your ears (the forearms will not be parallel to the floor at the end of the movement as they will be angled a bit upwards) and your elbows are out away from your sides.
After holding for a second or so at the contracted position, come back slowly to the starting position as you inhale. Tip: Again, during no part of the movement should the torso move.
Repeat for the recommended amount of repetitions.', 
  'Siediti su una macchina per il rematore ai cavi bassi con una corda attaccata. Afferra le estremità della corda con una presa a palmi rivolti verso il basso e siediti con la schiena dritta e le ginocchia leggermente flesse. Consiglio: mantieni la schiena quasi completamente verticale e le braccia completamente tese davanti a te. Questa sarà la posizione di partenza. Mantenendo il busto fermo, solleva i gomiti e inizia a piegarli tirando la corda verso il collo mentre espiri. Durante tutto il movimento, la parte superiore delle braccia deve rimanere parallela al pavimento. Consiglio: continua il movimento finché le mani non sono quasi all''altezza delle orecchie (gli avambracci non saranno paralleli al pavimento alla fine del movimento, poiché saranno angolati leggermente verso l''alto) e i gomiti sono distanziati dai fianchi. Dopo aver mantenuto la posizione di contrazione per un secondo circa, torna lentamente alla posizione iniziale mentre inspiri. Consiglio: in nessuna fase del movimento il busto deve muoversi. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Low_Pulley_Row_To_Neck/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Low_Pulley_Row_To_Neck/1.jpg'], 
  NOW()
),
(
  'cea7c3ca-f034-43b1-b296-7ed58853e074', 
  'Lower Back-SMR', 
  'SMR Lombare', 
  'In a seated position, place a foam roll under your lower back. Cross your arms in front of you and protract your shoulders. This will be your starting position.
Raise your hips off of the floor and lean back, keeping your weight on your lower back. Now shift your weight slightly to one side, keeping your weight off of the spine and on the muscles to the side of it. Roll over your lower back, holding points of tension for 10-30 seconds. Repeat on the other side.', 
  'In posizione seduta, posiziona un foam roller sotto la zona lombare. Incrocia le braccia davanti a te e protrai le spalle. Questa sarà la tua posizione di partenza. Solleva i fianchi da terra e inclinati all''indietro, mantenendo il peso sulla zona lombare. Ora sposta leggermente il peso su un lato, mantenendolo lontano dalla colonna vertebrale e concentrandolo sui muscoli laterali. Rotola sulla zona lombare, mantenendo i punti di tensione per 10-30 secondi. Ripeti sull''altro lato.', 
  'lower back', 
  NULL, 
  'foam roll', 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back-SMR/1.jpg'], 
  NOW()
),
(
  '168c3e3e-6455-45b7-8866-61974bd58746', 
  'Lower Back Curl', 
  'Lower Back Curl', 
  'Lie on your stomach with your arms out to your sides. This will be your starting position.
Using your lower back muscles, extend your spine lifting your chest off of the ground. Do not use your arms to push yourself up. Keep your head up during the movement. Repeat for 10-20 repetitions.', 
  'Sdraiati a pancia in giù con le braccia distese lungo i fianchi. Questa sarà la tua posizione di partenza. Utilizzando i muscoli lombari, estendi la colonna vertebrale sollevando il petto da terra. Non usare le braccia per spingerti verso l''alto. Tieni la testa alta durante il movimento. Ripeti per 10-20 ripetizioni.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lower_Back_Curl/1.jpg'], 
  NOW()
),
(
  'e4a9ca88-2835-465d-b683-4f0a5cb12e19', 
  'Lunge Pass Through', 
  'Lunge Pass Through', 
  'Stand with your torso upright holding a kettlebell in your right hand. This will be your starting position.
Step forward with your left foot and lower your upper body down by flexing the hip and the knee, keeping the torso upright. Lower your back knee until it nearly touches the ground.
As you lunge, pass the kettlebell under your front leg to your opposite hand.
Pressing through the heel of your foot, return to the starting position.
Repeat the movement for the recommended amount of repetitions, alternating legs.', 
  'In piedi con il busto eretto, impugna un kettlebell nella mano destra. Questa sarà la tua posizione di partenza. Fai un passo in avanti con il piede sinistro e abbassa il busto flettendo l''anca e il ginocchio, mantenendo il busto verticale. Abbassa il ginocchio posteriore fin quasi a toccare terra. Durante l''affondo, passa il kettlebell sotto la gamba anteriore verso la mano opposta. Spingendo sul tallone del piede, torna alla posizione di partenza. Ripeti il movimento per il numero di ripetizioni raccomandato, alternando le gambe.', 
  'hamstrings', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lunge_Pass_Through/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lunge_Pass_Through/1.jpg'], 
  NOW()
),
(
  'c23b8c04-f488-47d7-bc53-2e5501add6d9', 
  'Lunge Sprint', 
  'Lunge Sprint', 
  'Adjust a bar in a Smith machine to an appropriate height. Position yourself under the bar, racking it across the back of your shoulders. Unrack the bar, and then split your feet, moving one foot forward and one foot back. This will be your starting position.
Lower your back knee nearly to the ground, flexing the knees and lowering your hips as you do so.
At the bottom of the descent, immediately reverse direction. Explosively drive through the heel of your front foot with light pressure from your back foot. Jump up and reverse the position of your legs.
Repeat for the recommended amount of repetitions.', 
  'Regola il bilanciere di una Smith machine a un''altezza adeguata. Posizionati sotto il bilanciere, facendolo poggiare sulla parte alta delle spalle. Sgancia il bilanciere e posiziona i piedi in posizione sfalsata, uno avanti e uno indietro. Questa sarà la tua posizione di partenza. Abbassa il ginocchio posteriore quasi fino a terra, flettendo le ginocchia e abbassando i fianchi. Al termine della discesa, inverte immediatamente il movimento. Spingi in modo esplosivo sul tallone del piede anteriore con una leggera spinta del piede posteriore. Salta e inverte la posizione delle gambe. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lunge_Sprint/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lunge_Sprint/1.jpg'], 
  NOW()
),
(
  '8b83ce12-c300-48f0-accc-4fd8665066e9', 
  'Lying Bent Leg Groin', 
  'Lying Bent Leg Groin (Stretch)', 
  'Lie on your back with your knees bent and the soles of the feet pressed together. Have your partner hold your knees. This will be your starting position.
Attempt to squeeze your knees together, while your partner prevents any movement from occurring.
After 10-20 seconds, relax your muscles as your partner gently pushes your knees towards the floor. Be sure to inform your helper when the stretch is adequate to prevent injury or overstretching.', 
  'Sdraiati sulla schiena con le ginocchia flesse e le piante dei piedi unite. Chiedi al tuo partner di tenere ferme le tue ginocchia. Questa sarà la tua posizione di partenza. Tenta di avvicinare le ginocchia tra loro, mentre il partner impedisce il movimento. Dopo 10-20 secondi, rilassa i muscoli mentre il partner spinge delicatamente le ginocchia verso il pavimento. Comunica al partner quando l''allungamento è sufficiente per evitare infortuni o stiramenti eccessivi.', 
  'adductors', 
  NULL, 
  'other', 
  'expert', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Bent_Leg_Groin/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Bent_Leg_Groin/1.jpg'], 
  NOW()
),
(
  'ca7e0892-1ef1-43db-86a0-42b659b81842', 
  'Lying Cable Curl', 
  'Lying Cable Curl', 
  'Grab a straight bar or E-Z bar attachment that is attached to the low pulley with both hands, using an underhand (palms facing up) shoulder-width grip.
Lie flat on your back on top of an exercise mat in front of the weight stack with your feet flat against the frame of the pulley machine and your legs straight.
With your arms extended and your elbows close to your body slightly bend your arms. This will be your starting position.
While keeping your upper arms stationary and the elbows close to your body, curl the bar up slowly toward your chest as you breathe out and you squeeze the biceps.
After a second squeeze at the top of the movement, slowly return to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Afferra una barra dritta o un accessorio E-Z bar collegato alla carrucola bassa con entrambe le mani, usando una presa supina (palmi rivolti verso l''alto) alla larghezza delle spalle. Sdraiati supino su un tappetino davanti al pacco pesi con i piedi contro la struttura della macchina e le gambe distese. Con le braccia estese e i gomiti vicini al corpo, fletti leggermente le braccia. Questa sarà la tua posizione di partenza. Mantenendo le braccia ferme e i gomiti vicini al corpo, fletti la barra verso il petto espirando e contraendo i bicipiti. Dopo un secondo di contrazione in alto, torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'cable', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Cable_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Cable_Curl/1.jpg'], 
  NOW()
),
(
  'e2bf1e00-5e56-4de6-a28d-b790e7b2bc5e', 
  'Lying Cambered Barbell Row', 
  'Lying Cambered Barbell Row', 
  'Place a cambered bar underneath an exercise bench.
Lie face down on the exercise bench and grab the bar using a palms down (pronated grip) that is wider than shoulder width. This will be your starting position.
As you exhale row the bar up as you keep the elbows close to your body to either your chest, in order to target the upper mid back, or to your stomach if targeting the lats is your goal.
After a second hold at the top, lower back down to the starting position slowly as you inhale.', 
  'Posiziona un bilanciere curvo (cambered bar) sotto una panca. Sdraiati a pancia in giù sulla panca e afferra la barra con una presa prona (palmi verso il basso) più larga delle spalle. Questa sarà la tua posizione di partenza. Espirando, tira la barra verso l''alto mantenendo i gomiti vicini al corpo; verso il petto per colpire la parte alta/centrale della schiena, o verso lo stomaco per mirare ai dorsali. Dopo un secondo di tenuta in alto, scendi lentamente alla posizione di partenza inspirando.', 
  'middle back', 
  'biceps', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Cambered_Barbell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Cambered_Barbell_Row/1.jpg'], 
  NOW()
),
(
  '5f3c211d-7b5a-47a4-bc7e-380d1ee22e0f', 
  'Lying Close-Grip Bar Curl On High Pulley', 
  'Lying Close-Grip Bar Curl su Carrucola Alta', 
  'Place a flat bench in front of a high pulley or lat pulldown machine.
Hold the straight bar attachment using an underhand grip (palms up) that is about shoulder width.
Lie on your back with your head over the end of the bench.
Now extend your arms straight above your shoulders. Your torso and your arms should make a 90-degree angle and the elbows should be in. This will be your starting position.
As you breathe out, curl the bar down in a semicircular motion until it touches your chin. Squeeze the biceps for a second at the top contracted position. Tip: As you execute this motion only the forearms should move. At no time should the upper arms be moving at all. They are to remain perpendicular throughout the movement.
Return to starting position slowly.
Repeat for the recommended amount of repetitions.', 
  'Posiziona una panca piana davanti a una carrucola alta. Afferra la barra dritta con una presa supina (palmi verso l''alto) larga quanto le spalle. Sdraiati sulla schiena con la testa oltre il bordo della panca. Estendi le braccia sopra le spalle. Il busto e le braccia devono formare un angolo di 90 gradi con i gomiti stretti. Questa sarà la tua posizione di partenza. Espirando, fletti la barra con un movimento semicircolare fino a toccare il mento. Contrai i bicipiti per un secondo in posizione di contrazione massima. Consiglio: durante il movimento si devono muovere solo gli avambracci; le braccia devono rimanere perpendicolari. Torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Close-Grip_Bar_Curl_On_High_Pulley/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Close-Grip_Bar_Curl_On_High_Pulley/1.jpg'], 
  NOW()
),
(
  '7dc1b96c-16f0-41ab-a637-4af6b38877c7', 
  'Lying Close-Grip Barbell Triceps Extension Behind The Head', 
  'Lying Close-Grip Barbell Triceps Extension dietro la nuca', 
  'While holding a barbell or EZ Curl bar with a pronated grip (palms facing forward), lie on your back on a flat bench with your head close to the end of the bench. Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles.
Extend your arms in front of you and slowly bring the bar back in a semi circular motion (while keeping the arms extended) to a position over your head. At the end of this step your arms should be overhead and parallel to the floor. This will be your starting position. Tip: Keep your elbows in at all times.
As you inhale, lower the bar by bending at the elbows and while keeping the upper arm stationary. Keep lowering the bar until your forearms are perpendicular to the floor.
As you exhale bring the bar back up to the starting position by pushing the bar up in a semi-circular motion until the lower arms are also parallel to the floor. Contract the triceps hard at the top of the movement for a second. Tip: Again, only the forearms should move. The upper arms should remain stationary at all times.
Repeat for the recommended amount of repetitions.', 
  'Impugnando un bilanciere o un E-Z bar con presa prona (palmi in avanti), sdraiati su una panca piana con la testa vicino al bordo. Estendi le braccia davanti a te e porta lentamente la barra con un movimento semicircolare (tenendo le braccia tese) in una posizione sopra la testa. Al termine, le braccia devono essere parallele al pavimento. Questa sarà la posizione di partenza. Consiglio: tieni sempre i gomiti stretti. Inspirando, abbassa la barra flettendo i gomiti e mantenendo la parte superiore del braccio ferma, finché gli avambracci non sono perpendicolari al pavimento. Espirando, riporta la barra alla posizione iniziale con un movimento semicircolare. Contrai intensamente i tricipiti per un secondo. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'barbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Close-Grip_Barbell_Triceps_Extension_Behind_The_Head/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Close-Grip_Barbell_Triceps_Extension_Behind_The_Head/1.jpg'], 
  NOW()
),
(
  '01615132-6a69-4ce6-9723-cbd29862afcf', 
  'Lying Close-Grip Barbell Triceps Press To Chin', 
  'Lying Close-Grip Barbell Triceps Press verso il mento', 
  'While holding a barbell or EZ Curl bar with a pronated grip (palms facing forward), lie on your back on a flat bench with your head off the end of the bench. Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles.
Extend your arms in front of you as you hold the barbell over your chest. The arms should be perpendicular to your torso (90-degree angle). This will be your starting position.
As you inhale, lower the bar in a semi-circular motion by bending at the elbows and while keeping the upper arm stationary and elbows in. Keep lowering the bar until it lightly touches your chin.
As you exhale bring the bar back up to the starting position by pushing the bar up in a semi-circular motion. Contract the triceps hard at the top of the movement for a second. Tip: Again, only the forearms should move. The upper arms should remain stationary at all times.
Repeat for the recommended amount of repetitions.', 
  'Impugnando un bilanciere o un E-Z bar con presa prona (palmi in avanti), sdraiati su una panca piana con la testa fuori dal bordo. Estendi le braccia davanti a te tenendo il bilanciere sopra il petto. Le braccia devono essere perpendicolari al busto (90 gradi). Questa sarà la tua posizione di partenza. Inspirando, abbassa la barra con un movimento semicircolare flettendo i gomiti e mantenendoli stretti e fermi. Continua ad abbassare finché la barra non tocca leggermente il mento. Espirando, riporta la barra alla posizione iniziale con un movimento semicircolare, contraendo i tricipiti per un secondo in alto. Consiglio: solo gli avambracci devono muoversi. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'e-z curl bar', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Close-Grip_Barbell_Triceps_Press_To_Chin/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Close-Grip_Barbell_Triceps_Press_To_Chin/1.jpg'], 
  NOW()
),
(
  '625ae2f3-6a71-4fd1-88dc-7fddc612c9da', 
  'Lying Crossover', 
  'Lying Crossover', 
  'Lie on your back with your legs extended.
Cross one leg over your body with the knee bent, attempting to touch the knee to the ground. Your partner should kneel beside you, holding your shoulder down with one hand and controlling the crossed leg with the other. this will be your starting position.
Attempt to raise the bent knee off of the ground as your partner prevents any actual movement.
After 10-20 seconds, relax the leg as your partner gently presses the knee towards the floor. Repeat with the other side.', 
  'Sdraiati sulla schiena con le gambe distese. Incrocia una gamba sopra il corpo con il ginocchio piegato, cercando di toccare il suolo con il ginocchio. Il tuo partner deve inginocchiarsi accanto a te, tenendo ferma la tua spalla con una mano e controllando la gamba incrociata con l''altra. Questa è la posizione di partenza. Cerca di sollevare il ginocchio piegato da terra mentre il partner oppone resistenza impedendo il movimento. Dopo 10-20 secondi, rilassa la gamba mentre il partner spinge delicatamente il ginocchio verso il pavimento. Ripeti con l''altro lato.', 
  'abductors', 
  NULL, 
  'body only', 
  'expert', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Crossover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Crossover/1.jpg'], 
  NOW()
),
(
  '261ba7f2-1f18-4ff2-817c-829c1a8200e9', 
  'Lying Dumbbell Tricep Extension', 
  'Lying Dumbbell Tricep Extension', 
  'Lie on a flat bench while holding two dumbbells directly in front of you. Your arms should be fully extended at a 90-degree angle from your torso and the floor. The palms should be facing in and the elbows should be tucked in. This is the starting position.
As you breathe in and you keep the upper arms stationary with the elbows in, slowly lower the weight until the dumbbells are near your ears.
At that point, while keeping the elbows in and the upper arms stationary, use the triceps to bring the weight back up to the starting position as you breathe out.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su una panca piana tenendo due manubri direttamente davanti a te. Le braccia devono essere completamente distese a un angolo di 90 gradi rispetto al busto e al pavimento. I palmi devono essere rivolti verso l''interno e i gomiti devono rimanere stretti. Questa è la posizione di partenza. Espirando e mantenendo le braccia ferme con i gomiti in posizione, abbassa lentamente il peso finché i manubri non sono vicini alle orecchie. A quel punto, mantenendo sempre i gomiti e la parte superiore delle braccia ferme, usa i tricipiti per riportare il peso nella posizione di partenza mentre espiri. Ripeti per il numero di ripetizioni consigliato.', 
  'triceps', 
  'chest', 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Dumbbell_Tricep_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Dumbbell_Tricep_Extension/1.jpg'], 
  NOW()
),
(
  'ace047d6-7474-4d9d-ad10-ee617eb170aa', 
  'Lying Face Down Plate Neck Resistance', 
  'Lying Face Down Plate Neck Resistance', 
  'Lie face down with your whole body straight on a flat bench while holding a weight plate behind your head. Tip: You will need to position yourself so that your shoulders are slightly above the end of a flat bench in order for the upper chest, neck and face to be off the bench. This will be your starting position.
While keeping the plate secure on the back of your head slowly lower your head (as in saying "yes") as you breathe in.
Raise your head back up to the starting position in a semi-circular motion as you breathe out. Hold the contraction for a second.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a pancia in giù su una panca piana, con tutto il corpo disteso, tenendo un disco di ghisa dietro la testa. Consiglio: posizionati in modo che le spalle siano leggermente oltre l''estremità della panca, così da lasciare la parte superiore del petto, il collo e il viso fuori dalla panca. Questa è la posizione di partenza. Mantenendo il disco saldo sulla nuca, abbassa lentamente la testa (come per dire ''sì'') mentre inspiri. Riporta la testa nella posizione di partenza con un movimento semicircolare mentre espiri. Mantieni la contrazione per un secondo. Ripeti per il numero di ripetizioni consigliato.', 
  'neck', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Face_Down_Plate_Neck_Resistance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Face_Down_Plate_Neck_Resistance/1.jpg'], 
  NOW()
),
(
  '29e9119b-b5a5-4be1-98a9-b2f9cb421ff9', 
  'Lying Face Up Plate Neck Resistance', 
  'Lying Face Up Plate Neck Resistance', 
  'Lie face up with your whole body straight on a flat bench while holding a weight plate on top of your forehead. Tip: You will need to position yourself so that your shoulders are slightly above the end of a flat bench in order for the traps, neck and head to be off the bench. This will be your starting position.
While keeping the plate secure on your forehead slowly lower your head back in a semi-circular motion as you breathe in.
Raise your head back up to the starting position in a semi-circular motion as you breathe out. Hold the contraction for a second.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati supino su una panca piana, con tutto il corpo disteso, tenendo un disco di ghisa sopra la fronte. Consiglio: posizionati in modo che le spalle siano leggermente oltre l''estremità della panca, così da lasciare trapezi, collo e testa fuori dalla panca. Questa è la posizione di partenza. Mantenendo il disco saldo sulla fronte, abbassa lentamente la testa all''indietro con un movimento semicircolare mentre inspiri. Riporta la testa nella posizione di partenza con un movimento semicircolare mentre espiri. Mantieni la contrazione per un secondo. Ripeti per il numero di ripetizioni consigliato.', 
  'neck', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Face_Up_Plate_Neck_Resistance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Face_Up_Plate_Neck_Resistance/1.jpg'], 
  NOW()
),
(
  '49c9e428-17a6-4740-ae98-a51c4bc30cd9', 
  'Lying Glute', 
  'Lying Glute', 
  'Lie on your back with your partner kneeling beside you.
Flex the hip of one leg, raising it off of the floor. Rotate the leg so the foot is over the opposite hip, the lower leg perpendicular to your body. Your partner should hold the knee and ankle in place. This will be your starting position.
Attempt to push your leg towards your partner, who should be preventing any actual movement of the leg.
After 10-20 seconds, completely relax as your partner gently pushes the ankle and knee towards your chest. Be sure to inform your helper when the stretch is adequate to prevent injury or overstretching.', 
  'Sdraiati sulla schiena con il partner inginocchiato accanto a te. Fletti l''anca di una gamba, sollevandola dal pavimento. Ruota la gamba in modo che il piede si trovi sopra l''anca opposta e la parte inferiore della gamba sia perpendicolare al corpo. Il partner deve tenere fermi ginocchio e caviglia. Questa è la posizione di partenza. Cerca di spingere la gamba verso il partner, che dovrà impedire qualsiasi movimento effettivo. Dopo 10-20 secondi, rilassati completamente mentre il partner spinge delicatamente la caviglia e il ginocchio verso il tuo petto. Comunica al tuo partner quando l''allungamento è sufficiente per evitare infortuni o eccessivo stretching.', 
  'glutes', 
  'abductors', 
  'body only', 
  'expert', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Glute/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Glute/1.jpg'], 
  NOW()
),
(
  '92a1955d-6dc9-4672-ac6d-6477a974f83f', 
  'Lying Hamstring', 
  'Lying Hamstring', 
  'Lie on your back with your legs extended. Your partner should be kneeling beside you. Raise one leg up towards the ceiling and have your partner hold the ankle. Your partner can use their shoulder to brace your leg if necessary. This will be your starting position.
With your partner holding your leg in place, attempt to flex the knee, contracting the hamstrings for 10-20 seconds.
Then relax your leg, allowing your partner to gently push the leg towards your head. Be sure to inform your helper when the stretch is adequate to prevent injury or overstretching. Switch sides once complete.', 
  'Sdraiati sulla schiena con le gambe distese. Il partner deve essere inginocchiato accanto a te. Solleva una gamba verso il soffitto e fai in modo che il partner ne tenga la caviglia. Il partner può usare la spalla per sostenere la tua gamba, se necessario. Questa è la posizione di partenza. Con il partner che tiene la gamba ferma, cerca di flettere il ginocchio, contraendo i muscoli ischiocrurali per 10-20 secondi. Poi rilassa la gamba, permettendo al partner di spingerla delicatamente verso la testa. Comunica al tuo partner quando l''allungamento è sufficiente per evitare infortuni. Cambia lato una volta completato.', 
  'hamstrings', 
  'calves', 
  'other', 
  'expert', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Hamstring/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Hamstring/1.jpg'], 
  NOW()
),
(
  '9864dabc-9385-4e9f-998c-c04d95a5ffa7', 
  'Lying High Bench Barbell Curl', 
  'Lying High Bench Barbell Curl', 
  'Lie face forward on a tall flat bench while holding a barbell with a supinated grip (palms facing up). Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles. Your upper body should be positioned in a way that the upper chest is over the end of the bench and the barbell is hanging in front of you with the arms extended and perpendicular to the floor. This will be your starting position.
While keeping the elbows in and the upper arms stationary, curl the weight up in a semi-circular motion as you contract the biceps and exhale. Hold at the top of the movement for a second.
As you inhale, slowly go back to the starting position. Tip: Maintain full control of the weight at all times and avoid any swinging. Remember, only the forearms should move throughout the movement.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a pancia in giù su una panca piana alta, tenendo un bilanciere con una presa supinata (palmi rivolti verso l''alto). Consiglio: se usi un bilanciere dritto, afferralo alla larghezza delle spalle; se usi una barra EZ, afferrala sulle impugnature interne. Il busto deve essere posizionato in modo che la parte superiore del petto sia oltre l''estremità della panca e il bilanciere penda davanti a te con le braccia distese e perpendicolari al pavimento. Questa è la posizione di partenza. Mantenendo i gomiti stretti e le braccia ferme, solleva il peso con un movimento semicircolare contraendo i bicipiti ed espirando. Mantieni la posizione di massima contrazione per un secondo. Mentre inspiri, torna lentamente alla posizione di partenza. Consiglio: mantieni sempre il controllo del peso ed evita di dondolare. Ricorda, solo gli avambracci devono muoversi durante l''esercizio. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'barbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_High_Bench_Barbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_High_Bench_Barbell_Curl/1.jpg'], 
  NOW()
),
(
  '0a8d2fcb-5cf4-43c8-8a98-bc4ad17c1b20', 
  'Lying Leg Curls', 
  'Lying Leg Curls', 
  'Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad of the lever on the back of your legs (just a few inches under the calves). Tip: Preferably use a leg curl machine that is angled as opposed to flat since an angled position is more favorable for hamstrings recruitment.
Keeping the torso flat on the bench, ensure your legs are fully stretched and grab the side handles of the machine. Position your toes straight (or you can also use any of the other two stances described on the foot positioning section). This will be your starting position.
As you exhale, curl your legs up as far as possible without lifting the upper legs from the pad. Once you hit the fully contracted position, hold it for a second.
As you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions.', 
  'Regola la leva della macchina in base alla tua altezza e sdraiati a pancia in giù sulla leg curl machine, con il cuscinetto della leva sulla parte posteriore delle gambe (pochi centimetri sotto i polpacci). Consiglio: preferibilmente usa una macchina angolata invece di una piatta, poiché la posizione angolata favorisce il reclutamento degli ischiocrurali. Mantenendo il busto aderente alla panca, assicurati che le gambe siano completamente distese e afferra le maniglie laterali della macchina. Posiziona le punte dei piedi dritte. Questa è la posizione di partenza. Mentre espiri, fletti le gambe il più possibile senza sollevare le cosce dal cuscinetto. Una volta raggiunta la posizione di massima contrazione, mantienila per un secondo. Mentre inspiri, riporta le gambe nella posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'hamstrings', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/1.jpg'], 
  NOW()
),
(
  'f8616d44-72f4-4ed3-abc5-05c6353eb22b', 
  'Lying Machine Squat', 
  'Lying Machine Squat', 
  'Adjust the leg machine to a height that will allow you to get inside it with your knees bent and the thighs slightly below parallel.
Once you select the weight, position yourself inside the machine face up with the knees bent and thighs slightly below parallel to the platform. Make sure that the knees do not go past the toes. The angle created between the hamstrings and the calves should be one that is slightly less than 90 degrees (since your starting position requires you to start slightly below parallel). Your back and your head should be resting on the machine while your shoulders are pressed under the shoulder pads.
Place your hands by the handles and position your feet slightly pointing out at a shoulder width position. This will be your starting position.
While pressing with the balls of the feet as you breathe out, make your whole body erect as you squeeze the quads. Hold the contracted position for a second. Tip: Since you are starting below parallel, you can opt to use your hands to help you up by pressing on your thighs only on the first repetition.
Slowly squat down as you inhale but instead of going all the way down to the starting position, just stop once your thighs are parallel to the platform. The angle between your hamstrings and calves should be a 90-degree angle.
Repeat for the recommended amount of repetitions.', 
  'Regola la macchina in modo da poterti posizionare all''interno con le ginocchia piegate e le cosce leggermente sotto il parallelo. Dopo aver selezionato il peso, posizionati all''interno della macchina supino, con le ginocchia piegate e le cosce leggermente sotto il parallelo rispetto alla piattaforma. Assicurati che le ginocchia non superino la punta dei piedi. L''angolo tra ischiocrurali e polpacci deve essere leggermente inferiore a 90 gradi. La schiena e la testa devono essere ben appoggiate alla macchina, mentre le spalle sono spinte sotto i supporti imbottiti. Afferra le maniglie e posiziona i piedi leggermente verso l''esterno alla larghezza delle spalle. Questa è la posizione di partenza. Spingendo con l''avampiede ed espirando, estendi tutto il corpo contraendo i quadricipiti. Mantieni la posizione contratta per un secondo. Consiglio: poiché parti da sotto il parallelo, puoi scegliere di aiutarti con le mani facendo leva sulle cosce solo durante la prima ripetizione. Accosciati lentamente mentre inspiri, ma invece di scendere completamente, fermati quando le cosce sono parallele alla piattaforma (angolo di 90 gradi tra ischiocrurali e polpacci). Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Machine_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Machine_Squat/1.jpg'], 
  NOW()
),
(
  'da5a405f-12da-4aa3-ba6f-b1dda912a1df', 
  'Lying One-Arm Lateral Raise', 
  'Lying One-Arm Lateral Raise', 
  'While holding a dumbbell in one hand, lay with your chest down on a flat bench. The other hand can be used to hold to the leg of the bench for stability.
Position the palm of the hand that is holding the dumbbell in a neutral manner (palms facing your torso) as you keep the arm extended with the elbow slightly bent. This will be your starting position.
Now raise the arm with the dumbbell to the side until your elbow is at shoulder height and your arm is roughly parallel to the floor as you exhale. Tip: Maintain your arm perpendicular to the torso while keeping your arm extended throughout the movement. Also, keep the contraction at the top for a second.
Slowly lower the dumbbell to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Tenendo un manubrio in una mano, sdraiati con il petto su una panca piana. L''altra mano può essere usata per afferrare la gamba della panca per maggiore stabilità. Posiziona il palmo della mano che regge il manubrio in posizione neutra (palmi rivolti verso il busto) mantenendo il braccio disteso con il gomito leggermente flesso. Questa è la posizione di partenza. Ora solleva il braccio con il manubrio lateralmente finché il gomito non è all''altezza della spalla e il braccio è approssimativamente parallelo al pavimento mentre espiri. Consiglio: mantieni il braccio perpendicolare al busto e disteso durante tutto il movimento. Mantieni la contrazione nel punto più alto per un secondo. Abbassa lentamente il manubrio nella posizione di partenza mentre inspiri. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_One-Arm_Lateral_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_One-Arm_Lateral_Raise/1.jpg'], 
  NOW()
),
(
  '6e476cdb-7d44-4d86-84b3-9a33e6d953e3', 
  'Lying Prone Quadriceps', 
  'Stretching Quadricipiti Prono', 
  'Lay face down on the floor with your partner kneeling beside you. Flex one knee and raise that leg off the ground, attempting to touch your glutes with your foot. Your partner should hold the knee and ankle. This will be your starting position.
Attempt to extend your knee while your partner prevents any actual movement.
After 10-20 seconds, relax your muscles as your partner gently pushes the foot towards your glutes, further stretching the quadriceps and hip flexors.
After 10-20 seconds, switch sides.', 
  'Sdraiati a pancia in giù sul pavimento con il tuo partner in ginocchio accanto a te. Fletti un ginocchio e solleva la gamba da terra, cercando di toccare i glutei con il tallone. Il partner dovrà bloccare il ginocchio e la caviglia. Questa sarà la posizione di partenza. Cerca di estendere il ginocchio mentre il partner impedisce qualsiasi movimento reale. Dopo 10-20 secondi, rilassa i muscoli mentre il partner spinge delicatamente il piede verso i glutei, allungando ulteriormente i quadricipiti e i flessori dell''anca. Dopo 10-20 secondi, cambia lato.', 
  'quadriceps', 
  NULL, 
  'body only', 
  'expert', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Prone_Quadriceps/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Prone_Quadriceps/1.jpg'], 
  NOW()
),
(
  '5a168cdb-1832-43cb-adb0-467de11e568e', 
  'Lying Rear Delt Raise', 
  'Alzate Laterali a 90° su Panca', 
  'While holding a dumbbell in each hand, lay with your chest down on a flat bench.
Position the palms of the hands in a neutral manner (palms facing your torso) as you keep the arms extended with the elbows slightly bent. This will be your starting position.
Now raise the arms to the side until your elbows are at shoulder height and your arms are roughly parallel to the floor as you exhale. Tip: Maintain your arms perpendicular to the torso while keeping them extended throughout the movement. Also, keep the contraction at the top for a second.
Slowly lower the dumbbells to the starting position as you inhale.
Repeat for the recommended amount of repetitions and then switch to the other arm.', 
  'Impugnando un manubrio per mano, sdraiati con il petto appoggiato su una panca piana. Posiziona i palmi delle mani in modo neutro (rivolti verso il busto), mantenendo le braccia tese con i gomiti leggermente flessi. Questa sarà la posizione di partenza. Ora solleva le braccia lateralmente fino a quando i gomiti sono all''altezza delle spalle e le braccia sono all''incirca parallele al pavimento, espirando. Consiglio: mantieni le braccia perpendicolari al busto restando in estensione per tutto il movimento. Mantieni la contrazione nel punto massimo per un secondo. Abbassa lentamente i manubri nella posizione di partenza mentre inspiri. Ripeti per il numero di ripetizioni consigliato e poi cambia braccio.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Rear_Delt_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Rear_Delt_Raise/1.jpg'], 
  NOW()
),
(
  '91c485c4-0179-4e52-a253-eb236c09e4a9', 
  'Lying Supine Dumbbell Curl', 
  'Curl con Manubri Supino', 
  'Lie down on a flat bench face up while holding a dumbbell in each arm on top of your thighs.
Bring the dumbbells to the sides with the arms extended and the palms of the hands facing your thighs (neutral grip).
While keeping the arms close to your torso and elbows in, slowly lower your arms (as you keep them extended with a slight bend at the elbows) as far down towards the floor as you can go. Once you cannot go down any further, lock your upper arms in that position and that will be your starting position.
As you breathe out, slowly begin to curl the weights up as you simultaneously rotate your wrists so that the palms of the hands face up. Continue curling the weight until your biceps are fully contracted and squeeze hard at the top position for a second. Tip: Only the forearms should move. Upper arms should remain stationary and elbows should stay in throughout the movement.
Return back to the starting position very slowly.', 
  'Sdraiati su una panca piana a pancia in su, tenendo un manubrio in ogni mano sopra le cosce. Porta i manubri ai lati con le braccia distese e i palmi rivolti verso le cosce (presa neutra). Mantenendo le braccia vicino al busto e i gomiti bloccati, abbassa lentamente le braccia (tenendole tese con una leggera flessione del gomito) il più possibile verso il pavimento. Una volta raggiunto il limite, blocca la parte superiore delle braccia: questa sarà la posizione di partenza. Espirando, inizia lentamente a flettere i pesi verso l''alto ruotando contemporaneamente i polsi in modo che i palmi guardino verso l''alto. Continua il movimento finché i bicipiti sono completamente contratti e strizza forte nella posizione finale per un secondo. Consiglio: solo gli avambracci devono muoversi. La parte superiore delle braccia deve rimanere ferma e i gomiti devono restare stretti per tutto il movimento. Torna alla posizione di partenza molto lentamente.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Supine_Dumbbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Supine_Dumbbell_Curl/1.jpg'], 
  NOW()
),
(
  'a69d9c4d-29e7-4370-9451-51a354505945', 
  'Lying T-Bar Row', 
  'Rematore T-Bar su Panca', 
  'Load up the T-bar Row Machine with the desired weight and adjust the leg height so that your upper chest is at the top of the pad. Tip: In some machines all you can do is stand on the appropriate step that allows you to be at a height that has the upper chest at the top of the pad.
Lay face down on the pad and grab the handles. You can either use a palms down, palms up, or palms in position depending on what part of your back you want to emphasize.
Lift the bar off the rack and extend your arms in front of you. This will be your starting position.
As you exhale slowly pull the weight up and squeeze your back at the top of the movement. Tip: Keep the upper arms as close to the torso as possible throughout the movement in order to better engage the back muscles. Also, do not lift your body off of the pad at any time and refrain from using the biceps to lift the weight.
After a second contraction at the top of the movement, as you inhale, slowly go back down to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Carica il T-Bar Row Machine con il peso desiderato e regola l''altezza in modo che la parte alta del torace sia sul bordo del cuscinetto. Sdraiati a pancia in giù sul cuscinetto e afferra le maniglie. Puoi usare una presa prona, supina o neutra a seconda della zona della schiena che vuoi enfatizzare. Solleva la barra dal supporto e stendi le braccia davanti a te. Questa sarà la posizione di partenza. Espirando, tira lentamente il peso verso l''alto e contrai i muscoli della schiena al termine del movimento. Consiglio: mantieni la parte superiore delle braccia il più vicino possibile al busto per coinvolgere meglio i dorsali. Non sollevare il corpo dal cuscinetto e non usare i bicipiti per sollevare il peso. Dopo una contrazione di un secondo nel punto massimo, inspira e torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'middle back', 
  'biceps', 
  'machine', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_T-Bar_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_T-Bar_Row/1.jpg'], 
  NOW()
),
(
  '4997b7a0-787a-4891-8e3b-1caf40767294', 
  'Lying Triceps Press', 
  'French Press su Panca', 
  'Lie on a flat bench with either an e-z bar (my preference) or a straight bar placed on the floor behind your head and your feet on the floor.
Grab the bar behind you, using a medium overhand (pronated) grip, and raise the bar in front of you at arms length. Tip: The arms should be perpendicular to the torso and the floor. The elbows should be tucked in. This is the starting position.
As you breathe in, slowly lower the weight until the bar lightly touches your forehead while keeping the upper arms and elbows stationary.
At that point, use the triceps to bring the weight back up to the starting position as you breathe out.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su una panca piana con un bilanciere EZ o dritto posizionato sul pavimento dietro la testa e i piedi ben saldi a terra. Afferra la barra dietro di te con una presa media prona e sollevala davanti a te, a braccia tese. Consiglio: le braccia devono essere perpendicolari al busto e al pavimento. I gomiti devono essere stretti. Questa è la posizione di partenza. Inspirando, abbassa lentamente il peso finché la barra tocca leggermente la fronte, mantenendo la parte superiore delle braccia e i gomiti fermi. A quel punto, usa i tricipiti per riportare il peso nella posizione di partenza espirando. Ripeti per il numero di ripetizioni consigliato.', 
  'triceps', 
  NULL, 
  'e-z curl bar', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/1.jpg'], 
  NOW()
),
(
  'fe850339-a859-412e-81f3-ca9578fa67e0', 
  'Machine Bench Press', 
  'Chest Press Machine', 
  'Sit down on the Chest Press Machine and select the weight.
Step on the lever provided by the machine since it will help you to bring the handles forward so that you can grab the handles and fully extend the arms.
Grab the handles with a palms-down grip and lift your elbows so that your upper arms are parallel to the floor to the sides of your torso. Tip: Your forearms will be pointing forward since you are grabbing the handles. Once you bring the handles forward and extend the arms you will be at the starting position.
Now bring the handles back towards you as you breathe in.
Push the handles away from you as you flex your pecs and you breathe out. Hold the contraction for a second before going back to the starting position.
Repeat for the recommended amount of reps.
When finished step on the lever again and slowly get the handles back to their original place.', 
  'Siediti sulla Chest Press Machine e seleziona il peso. Usa la leva fornita dalla macchina per portare le maniglie in avanti, in modo da poterle afferrare e distendere completamente le braccia. Afferra le maniglie con una presa prona e solleva i gomiti in modo che la parte superiore delle braccia sia parallela al pavimento, ai lati del busto. Consiglio: gli avambracci punteranno in avanti. Una volta portate le maniglie in avanti e distese le braccia, sarai nella posizione di partenza. Ora riporta le maniglie verso di te inspirando. Spingi le maniglie lontano da te mentre fletti i pettorali ed espiri. Mantieni la contrazione per un secondo prima di tornare alla posizione di partenza. Ripeti per il numero di ripetizioni desiderato. Una volta terminato, usa nuovamente la leva per riportare lentamente le maniglie nella posizione originale.', 
  'chest', 
  'shoulders', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bench_Press/1.jpg'], 
  NOW()
),
(
  'e88a3b96-6b26-47b9-b414-8d00718ccbfd', 
  'Machine Bicep Curl', 
  'Curl Bicipiti alla Macchina', 
  'Adjust the seat to the appropriate height and make your weight selection. Place your upper arms against the pads and grasp the handles. This will be your starting position.
Perform the movement by flexing the elbow, pulling your lower arm towards your upper arm.
Pause at the top of the movement, and then slowly return the weight to the starting position.
Avoid returning the weight all the way to the stops until the set is complete to keep tension on the muscles being worked.', 
  'Regola il sedile all''altezza appropriata e seleziona il peso. Appoggia la parte superiore delle braccia contro i cuscinetti e afferra le maniglie. Questa sarà la posizione di partenza. Esegui il movimento flettendo il gomito e portando l''avambraccio verso la parte superiore del braccio. Fai una pausa nel punto massimo, quindi torna lentamente alla posizione di partenza. Evita di far tornare il peso sui blocchi di arresto fino al completamento della serie per mantenere la tensione muscolare.', 
  'biceps', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bicep_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Bicep_Curl/1.jpg'], 
  NOW()
),
(
  '1a6d5ed5-f954-4325-989b-27dbd596254d', 
  'Machine Preacher Curls', 
  'Curl ai Cavi o Macchina Preacher', 
  'Sit down on the Preacher Curl Machine and select the weight.
Place the back of your upper arms (your triceps) on the preacher pad provided and grab the handles using an underhand grip (palms facing up). Tip: Make sure that when you place the arms on the pad you keep the elbows in. This will be your starting position.
Now lift the handles as you exhale and you contract the biceps. At the top of the position make sure that you hold the contraction for a second. Tip: Only the forearms should move. The upper arms should remain stationary and on the pad at all times.
Lower the handles slowly back to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Siediti sulla macchina Preacher Curl e seleziona il peso. Posiziona la parte posteriore delle braccia (tricipiti) sull''imbottitura e afferra le maniglie con una presa supina (palmi rivolti verso l''alto). Consiglio: assicurati di mantenere i gomiti stretti durante l''appoggio. Questa sarà la posizione di partenza. Ora solleva le maniglie espirando e contraendo i bicipiti. Nel punto massimo, assicurati di mantenere la contrazione per un secondo. Consiglio: solo gli avambracci devono muoversi. La parte superiore delle braccia deve rimanere ferma e a contatto con l''imbottitura per tutto il tempo. Abbassa lentamente le maniglie nella posizione iniziale inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Preacher_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Preacher_Curls/1.jpg'], 
  NOW()
),
(
  'c7b1a455-f9e5-42f9-9f0c-9ccee03a2e8e', 
  'Machine Shoulder (Military) Press', 
  'Shoulder Press Machine', 
  'Sit down on the Shoulder Press Machine and select the weight.
Grab the handles to your sides as you keep the elbows bent and in line with your torso. This will be your starting position.
Now lift the handles as you exhale and you extend the arms fully. At the top of the position make sure that you hold the contraction for a second.
Lower the handles slowly back to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Siediti sulla Shoulder Press Machine e seleziona il peso. Afferra le maniglie ai tuoi lati mantenendo i gomiti flessi e in linea con il busto. Questa sarà la posizione di partenza. Ora solleva le maniglie espirando e distendi completamente le braccia. Nel punto massimo, mantieni la contrazione per un secondo. Abbassa lentamente le maniglie alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  'triceps', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Shoulder_Military_Press/1.jpg'], 
  NOW()
),
(
  '1d212cfb-fd8e-4777-81b7-510bd298f4fb', 
  'Machine Triceps Extension', 
  'Estensioni Tricipiti alla Macchina', 
  'Adjust the seat to the appropriate height and make your weight selection. Place your upper arms against the pads and grasp the handles. This will be your starting position.
Perform the movement by extending the elbow, pulling your lower arm away from your upper arm.
Pause at the completion of the movement, and then slowly return the weight to the starting position.
Avoid returning the weight all the way to the stops until the set is complete to keep tension on the muscles being worked.', 
  'Regola il sedile all''altezza appropriata e seleziona il peso. Appoggia la parte superiore delle braccia contro i cuscinetti e afferra le maniglie. Questa sarà la posizione di partenza. Esegui il movimento estendendo il gomito e allontanando l''avambraccio dalla parte superiore del braccio. Fai una pausa al completamento del movimento e torna lentamente alla posizione di partenza. Evita di far tornare il peso sui blocchi di arresto fino al termine della serie per mantenere la tensione sui muscoli coinvolti.', 
  'triceps', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '6f34d3ae-f2bf-43e7-b5d3-8210f32d40a9', 
  'Medicine Ball Chest Pass', 
  'Medicine Ball Chest Pass', 
  'You will need a partner for this exercise. Lacking one, this movement can be performed against a wall.
Begin facing your partner holding the medicine ball at your torso with both hands.
Pull the ball to your chest, and reverse the motion by extending through the elbows. For sports applications, you can take a step as you throw.
Your partner should catch the ball, and throw it back to you.
Receive the throw with both hands at chest height.', 
  'Per questo esercizio è necessario un partner. In mancanza di esso, il movimento può essere eseguito contro una parete. Inizia posizionandoti di fronte al partner, tenendo la palla medica all''altezza del busto con entrambe le mani. Porta la palla al petto e inverte il movimento estendendo i gomiti. Per applicazioni sportive, è possibile fare un passo in avanti mentre si lancia. Il partner dovrebbe ricevere la palla e rilanciarla verso di te. Ricevi il lancio con entrambe le mani all''altezza del petto.', 
  'chest', 
  'shoulders', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Medicine_Ball_Chest_Pass/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Medicine_Ball_Chest_Pass/1.jpg'], 
  NOW()
),
(
  '755ed4e6-44c0-46e7-b262-e33a8f054060', 
  'Medicine Ball Full Twist', 
  'Medicine Ball Full Twist', 
  'For this exercise you will need a medicine ball and a partner. Stand back to back with your partner, spaced 2-3 feet apart. This will be your starting position.
Hold the ball in front of the trunk. Open the hips and turn the shoulders at the same time as your partner.
For full rotation, you and your partner should twist in the same direction, i.e. counter-clockwise.
Pass the ball to your partner, and both of you can now twist in the opposite direction to repeat the procedure.', 
  'Per questo esercizio sono necessari una palla medica e un partner. Posizionatevi schiena contro schiena a una distanza di 60-90 cm l''uno dall''altro. Questa sarà la posizione di partenza. Tenete la palla davanti al busto. Aprite le anche e ruotate le spalle contemporaneamente al vostro partner. Per una rotazione completa, tu e il tuo partner dovreste ruotare nella stessa direzione (es. in senso antiorario). Passate la palla al partner; ora entrambi potete ruotare nella direzione opposta per ripetere la procedura.', 
  'abdominals', 
  'shoulders', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Medicine_Ball_Full_Twist/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Medicine_Ball_Full_Twist/1.jpg'], 
  NOW()
),
(
  '7fc49512-5b27-412c-a875-4bc6b6a9a4ea', 
  'Medicine Ball Scoop Throw', 
  'Medicine Ball Scoop Throw', 
  'Assume a semisquat stance with a medicine ball in your hands. Your arms should hang so the ball is near your feet.
Begin by thrusting the hips forward as you extend through the legs, jumping up.
As you do, swing your arms up and over your head, keeping them extended, releasing the ball at the peak of your movement. The goal is to throw the ball the greatest distance behind you.', 
  'Assumi una posizione di mezzo squat con una palla medica tra le mani. Le braccia devono essere distese verso il basso, con la palla vicina ai piedi. Inizia spingendo le anche in avanti mentre estendi le gambe, eseguendo un salto. Contemporaneamente, slancia le braccia verso l''alto e sopra la testa, mantenendole distese, e rilascia la palla nel punto massimo del movimento. L''obiettivo è lanciare la palla il più lontano possibile dietro di te.', 
  'shoulders', 
  'abdominals', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Medicine_Ball_Scoop_Throw/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Medicine_Ball_Scoop_Throw/1.jpg'], 
  NOW()
),
(
  '3e0d0c42-0280-4abb-83de-43dd59411290', 
  'Middle Back Shrug', 
  'Middle Back Shrug', 
  'Lie facedown on an incline bench while holding a dumbbell in each hand. Your arms should be fully extended hanging down and pointing towards the floor. The palms of your hands should be facing each other. This will be your starting position.
As you exhale, squeeze your shoulder blades together and hold the contraction for a full second. Tip: This movement is just like the reverse action of a hug, or trying to perform rear laterals as if you had no arms.
As you inhale go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a pancia in giù su una panca inclinata, tenendo un manubrio in ogni mano. Le braccia devono essere completamente distese verso il pavimento. I palmi delle mani devono essere rivolti l''uno verso l''altro. Questa sarà la posizione di partenza. Espirando, contrai le scapole avvicinandole tra loro e mantieni la contrazione per un secondo completo. Suggerimento: questo movimento è simile all''azione inversa di un abbraccio, o a tentare di eseguire delle alzate laterali posteriori come se non avessi le braccia. Inspirando, torna alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'middle back', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Middle_Back_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Middle_Back_Shrug/1.jpg'], 
  NOW()
),
(
  'b7017e47-a423-44a1-8a57-2a9175b23b3d', 
  'Middle Back Stretch', 
  'Middle Back Stretch', 
  'Stand so your feet are shoulder width apart and your hands are on your hips.
Twist at your waist until you feel a stretch. Hold for 10 to 15 seconds, then twist to the other side.', 
  'In piedi, con i piedi alla larghezza delle spalle e le mani sui fianchi. Ruota il busto finché non avverti un allungamento. Mantieni la posizione per 10-15 secondi, quindi ruota verso il lato opposto.', 
  'middle back', 
  'abdominals', 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Middle_Back_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Middle_Back_Stretch/1.jpg'], 
  NOW()
),
(
  'bb7dbf2b-0cff-4008-8396-8e3fa24f6678', 
  'Mixed Grip Chin', 
  'Mixed Grip Chin', 
  'Using a spacing that is just about 1 inch wider than shoulder width, grab a pull-up bar with the palms of one hand facing forward and the palms of the other hand facing towards you. This will be your starting position.
Now start to pull yourself up as you exhale. Tip: With the arm that has the palms facing up concentrate on using the back muscles in order to perform the movement. The elbow of that arm should remain close to the torso. With the other arm that has the palms facing forward, the elbows will be away but in line with the torso. You will concentrate on using the lats to pull your body up.
After a second contraction at the top, start to slowly come down as you inhale.
Repeat for the recommended amount of repetitions.
On the following set, switch grips; so if you had the right hand with the palms facing you and the left one with the palms facing forward, on the next set you will have the palms facing forward for the right hand and facing you for the left.', 
  'Afferra una sbarra per trazioni con una presa di circa 2-3 cm più larga delle spalle, tenendo il palmo di una mano rivolto in avanti e quello dell''altra rivolto verso di te. Questa è la posizione di partenza. Inizia a sollevarti espirando. Suggerimento: con il braccio che ha il palmo rivolto verso di te, concentrati sull''uso dei muscoli dorsali per eseguire il movimento, mantenendo il gomito vicino al busto. Con l''altro braccio, con il palmo rivolto in avanti, i gomiti rimarranno distanziati ma in linea con il busto, concentrandoti sull''uso dei gran dorsali per sollevare il corpo. Dopo un secondo di contrazione in alto, scendi lentamente inspirando. Ripeti per il numero di ripetizioni consigliato. Nella serie successiva, inverti la presa.', 
  'middle back', 
  'biceps', 
  'other', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mixed_Grip_Chin/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mixed_Grip_Chin/1.jpg'], 
  NOW()
),
(
  'c81b0c23-3cab-4618-ad70-f4579d359334', 
  'Monster Walk', 
  'Monster Walk', 
  'Place a band around both ankles and another around both knees. There should be enough tension that they are tight when your feet are shoulder width apart.
To begin, take short steps forward alternating your left and right foot.
After several steps, do just the opposite and walk backward to where you started.', 
  'Posiziona una fascia elastica attorno alle caviglie e un''altra attorno alle ginocchia. Deve esserci abbastanza tensione da risultare strette quando i piedi sono alla larghezza delle spalle. Per iniziare, fai dei piccoli passi in avanti alternando il piede sinistro e quello destro. Dopo diversi passi, esegui il movimento opposto camminando all''indietro fino al punto di partenza.', 
  'abductors', 
  NULL, 
  'bands', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Monster_Walk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Monster_Walk/1.jpg'], 
  NOW()
),
(
  '1bbe38aa-a89f-4e79-9ba5-85c6420bb4f7', 
  'Mountain Climbers', 
  'Mountain Climbers', 
  'Begin in a pushup position, with your weight supported by your hands and toes. Flexing the knee and hip, bring one leg until the knee is approximately under the hip. This will be your starting position.
Explosively reverse the positions of your legs, extending the bent leg until the leg is straight and supported by the toe, and bringing the other foot up with the hip and knee flexed. Repeat in an alternating fashion for 20-30 seconds.', 
  'Inizia in posizione di piegamento (pushup), con il peso sostenuto da mani e punte dei piedi. Flettendo ginocchio e anca, porta una gamba in avanti finché il ginocchio non si trova circa sotto l''anca. Questa sarà la posizione di partenza. Inverti in modo esplosivo la posizione delle gambe, estendendo la gamba piegata finché non è dritta e sostenuta dalla punta del piede, e portando l''altro piede in avanti con anca e ginocchio flessi. Ripeti in modo alternato per 20-30 secondi.', 
  'quadriceps', 
  'chest', 
  NULL, 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/1.jpg'], 
  NOW()
),
(
  '76c552c8-0d6e-427d-a547-54cb944080ce', 
  'Moving Claw Series', 
  'Moving Claw Series', 
  'This move helps prepare your running form to help you excel at sprinting. As you run, be sure to flex the knee, aiming to kick your glutes as the hip extends.
Reload the quad as the leg moves back forward, attacking the ground on the next step.
Ensure that as you run, you block with the arms, punching through in a rapid 1-2 motion.', 
  'Questo esercizio prepara la forma di corsa per migliorare nello sprint. Durante la corsa, assicurati di flettere il ginocchio, puntando a calciare i glutei mentre l''anca si estende. Ricarica il quadricipite mentre la gamba torna in avanti, attaccando il terreno al passo successivo. Assicurati che durante la corsa le braccia facciano da blocco, muovendole rapidamente con un movimento 1-2.', 
  'hamstrings', 
  'calves', 
  NULL, 
  'beginner', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Moving_Claw_Series/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Moving_Claw_Series/1.jpg'], 
  NOW()
),
(
  '009b7313-98ea-4ffa-bb9b-cbf6533719a7', 
  'Muscle Snatch', 
  'Muscle Snatch', 
  'Begin with a loaded barbell held at the mid thigh position with a wide grip. The feet should be directly below the hips, with the feet turned out as needed. Lower the hips, with the chest up and the head looking forward. The shoulders should be just in front of the bar. This will be the starting position.
Begin the pull by driving through the front of the heels, raising the bar. Transition into the second pull by extending through the hips knees and ankles, driving the bar up as quickly as possible. The bar should be close to the body.
Continue raising the bar to the overhead position, without rebending the knees.', 
  'Inizia con un bilanciere carico all''altezza della metà coscia, con una presa larga. I piedi devono essere posizionati sotto le anche, leggermente ruotati verso l''esterno se necessario. Abbassa le anche, tenendo il petto alto e la testa rivolta in avanti. Le spalle devono essere leggermente avanti rispetto al bilanciere. Questa sarà la posizione di partenza. Inizia la tirata spingendo attraverso la parte anteriore dei talloni, sollevando il bilanciere. Transita nella seconda tirata estendendo anche, ginocchia e caviglie, spingendo il bilanciere verso l''alto il più rapidamente possibile. Il bilanciere deve rimanere vicino al corpo. Continua a sollevare il bilanciere fino alla posizione sopra la testa, senza flettere nuovamente le ginocchia.', 
  'hamstrings', 
  'glutes', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Muscle_Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Muscle_Snatch/1.jpg'], 
  NOW()
),
(
  '7b9e06a9-c4fb-4c10-b4e8-69159b4b1ec8', 
  'Muscle Up', 
  'Muscle Up', 
  'Grip the rings using a false grip, with the base of your palms on top of the rings. Initiate a pull up by pulling the elbows down to your side, flexing the elbows.
As you reach the top position of the pull-up, pull the rings to your armpits as you roll your shoulders forward, allowing your elbows to move straight back behind you. This puts you into the proper position to continue into the dip portion of the movement.
Maintaining control and stability, extend through the elbow to complete the motion.
Use care when lowering yourself to the ground.', 
  'Afferra gli anelli utilizzando una ''false grip'', con la base dei palmi sopra gli anelli. Inizia una trazione portando i gomiti verso il basso e flettendoli. Quando raggiungi la posizione alta della trazione, porta gli anelli verso le ascelle ruotando le spalle in avanti e permettendo ai gomiti di muoversi direttamente dietro di te. Questo ti posiziona correttamente per passare alla fase di dip del movimento. Mantenendo controllo e stabilità, distendi le braccia per completare l''esercizio. Fai attenzione durante la discesa a terra.', 
  'lats', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Muscle_Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Muscle_Up/1.jpg'], 
  NOW()
),
(
  '9355c358-54fa-4f46-8618-566701b37937', 
  'Narrow Stance Hack Squats', 
  'Hack Squat a piedi stretti', 
  'Place the back of your torso against the back pad of the machine and hook your shoulders under the shoulder pads provided.
Position your legs in the platform using a less than shoulder width narrow stance with the toes slightly pointed out. Your feet should be around 3 inches or less apart. Tip: Keep your head up at all times and also maintain the back on the pad at all times.
Place your arms on the side handles of the machine and disengage the safety bars (which on most designs is done by moving the side handles from a facing front position to a diagonal position).
Now straighten your legs without locking the knees. This will be your starting position.
Begin to slowly lower the unit by bending the knees as you maintain a straight posture with the head up (back on the pad at all times). Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement.
Begin to raise the unit as you exhale by pushing the floor with mainly with the heels of your feet as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Appoggia la schiena contro lo schienale della macchina e posiziona le spalle sotto gli appositi supporti. Posiziona le gambe sulla pedana con una stance stretta, inferiore alla larghezza delle spalle, con le punte dei piedi leggermente rivolte verso l''esterno. I piedi dovrebbero distare circa 7-8 cm l''uno dall''altro. Consiglio: mantieni sempre la testa alta e la schiena a contatto con lo schienale. Afferra le maniglie laterali e sgancia le barre di sicurezza. Distendi le gambe senza bloccare le ginocchia: questa è la posizione di partenza. Scendi lentamente flettendo le ginocchia e mantenendo la postura dritta. Scendi finché l''angolo tra cosce e polpacci è leggermente inferiore a 90 gradi (cosce sotto il parallelo). Inspira durante la discesa. Espirando, spingi principalmente sui talloni per tornare alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Narrow_Stance_Hack_Squats/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Narrow_Stance_Hack_Squats/1.jpg'], 
  NOW()
),
(
  'cfdf25a9-1c11-4fac-8035-cbf62bf7b1d7', 
  'Narrow Stance Leg Press', 
  'Leg Press a piedi stretti', 
  'Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a less-than-shoulder-width narrow stance with the toes slightly pointed out. Your feet should be around 3 inches or less apart. Tip: Keep your head up at all times and also maintain the back on the pad at all times.
Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you. Tip: Make sure that you do not lock your knees. Your torso and the legs should make a perfect 90-degree angle. This will be your starting position.
As you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle.
Pushing mainly with the heels of your feet and using the quadriceps go back to the starting position as you exhale.
Repeat for the recommended amount of repetitions and ensure to lock the safety pins properly once you are done. You do not want that platform falling on you fully loaded.', 
  'Siediti sulla pressa e posiziona i piedi sulla pedana davanti a te con una stance stretta (meno della larghezza delle spalle) e punte leggermente verso l''esterno. I piedi dovrebbero distare circa 7-8 cm. Consiglio: mantieni la testa alta e la schiena ben appoggiata. Abbassa le sicure e spingi la pedana finché le gambe sono quasi completamente distese, senza bloccare le ginocchia; il busto e le gambe dovrebbero formare un angolo di 90 gradi. Questa è la posizione di partenza. Inspira e scendi lentamente finché cosce e polpacci formano un angolo di 90 gradi. Espirando, spingi principalmente con i talloni usando i quadricipiti per tornare alla posizione iniziale. Ripeti e blocca sempre le sicure a fine esercizio.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Narrow_Stance_Leg_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Narrow_Stance_Leg_Press/1.jpg'], 
  NOW()
),
(
  '874c4dc2-1da5-4910-9a45-9bd705c3722c', 
  'Narrow Stance Squats', 
  'Squat a piedi stretti', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a less-than-shoulder-width narrow stance with the toes slightly pointed out. Feet should be around 3-6 inches apart. Keep your head up at all times (looking down will get you off balance) and maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).
Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Esercizio da eseguire preferibilmente in un rack. Regola il bilanciere all''altezza corretta, posizionati sotto di esso e appoggialo sulla parte alta delle spalle (appena sotto il collo). Solleva il bilanciere dal rack, allontanati e posiziona i piedi con una stance stretta (circa 8-15 cm) e punte leggermente verso l''esterno. Mantieni la testa alta e la schiena dritta. Scendi lentamente flettendo le ginocchia finché l''angolo tra cosce e polpacci è leggermente inferiore a 90 gradi. Inspira durante la discesa. Assicurati che le ginocchia non superino la linea immaginaria perpendicolare alla punta dei piedi. Espirando, spingi sui talloni per tornare alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Narrow_Stance_Squats/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Narrow_Stance_Squats/1.jpg'], 
  NOW()
),
(
  '3e14ba4e-9fb8-4795-a0dc-46f559db89df', 
  'Natural Glute Ham Raise', 
  'Natural Glute Ham Raise', 
  'Using the leg pad of a lat pulldown machine or a preacher bench, position yourself so that your ankles are under the pads, knees on the seat, and you are facing away from the machine. You should be upright and maintaining good posture.
This will be your starting position. Lower yourself under control until your knees are almost completely straight.
Remaining in control, raise yourself back up to the starting position.
If you are unable to complete a rep, use a band, a partner, or push off of a box to aid in completing a repetition.', 
  'Utilizzando l''imbottitura di una lat machine o una panca scott, posiziona le caviglie sotto i rulli e le ginocchia sul sedile, rivolto in direzione opposta alla macchina. Mantieni una postura eretta. Questa è la posizione di partenza. Scendi controllando il movimento finché le ginocchia sono quasi completamente distese. Mantenendo il controllo, torna alla posizione iniziale. Se non riesci a completare la ripetizione, utilizza una banda elastica, l''aiuto di un partner o spingi su un box per facilitare il movimento.', 
  'hamstrings', 
  'calves', 
  'body only', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Natural_Glute_Ham_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Natural_Glute_Ham_Raise/1.jpg'], 
  NOW()
),
(
  'c4429ed3-c54a-4b7f-be8b-70d4c32eab2c', 
  'Neck-SMR', 
  'SMR Collo', 
  'Using a muscle roller or a rolling pin, place the roller behind your head and against your neck. Make sure that you do not place the roller directly against the spine, but turned slightly so that the roller is pressed against the muscles to either side of the spine. This will be your starting position.
Starting at the top of your neck, slowly roll down the muscles of your neck, pausing at points of tension for 10-30 seconds.', 
  'Utilizzando un rullo per massaggi o un matterello, posizionalo dietro la testa contro il collo. Assicurati di non posizionarlo direttamente sulla colonna vertebrale, ma leggermente di lato in modo che prema contro i muscoli paravertebrali. Partendo dalla parte alta del collo, rulla lentamente verso il basso lungo i muscoli, sostando sui punti di tensione per 10-30 secondi.', 
  'neck', 
  NULL, 
  'other', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Neck-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Neck-SMR/1.jpg'], 
  NOW()
),
(
  '30ac1d77-e47a-44a4-862c-0e2efd592922', 
  'Neck Press', 
  'Neck Press', 
  'Lie back on a flat bench. Using a medium-width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over your neck with your arms locked. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on your neck.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up).
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Sdraiati su una panca piana. Con una presa media (che crea un angolo di 90 gradi tra avambracci e braccia a metà movimento), stacca il bilanciere e tienilo sopra il collo con le braccia distese. Inspira e scendi lentamente fino a sentire il bilanciere sul collo. Dopo una breve pausa, spingi il bilanciere verso l''alto espirando e contraendo i pettorali. Distendi le braccia, contrai per un secondo e ricomincia a scendere. Consiglio: la fase di discesa dovrebbe durare il doppio di quella di risalita. Ripeti per le ripetizioni prescritte, poi riponi il bilanciere nel rack.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Neck_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Neck_Press/1.jpg'], 
  NOW()
),
(
  '039eed75-80f4-41ae-9b3d-843f1fcb2cfa', 
  'Oblique Crunches', 
  'Crunch Obliqui', 
  'Lie flat on the floor with your lower back pressed to the ground. For this exercise, you will need to put one hand beside your head and the other to the side against the floor.
Make sure your feet are elevated and resting on a flat surface.
Now lift the shoulder in which your hand is touching your head.
Simply elevate your shoulder and body upward until you touch your knee. For example, if you have your right hand besides your head, then you want to elevate your body upwards until your right elbow touches your left knee. The same variation can be applied doing the inverse and using your left elbow to touch your right knee.
After your knee touches your elbow, lower your body until you have reached the starting position.
Remember to breathe in during the eccentric (lowering) part of the exercise and to breathe out during the concentric (upward) part of the exercise.
Continue alternating in this manner until all of the recommended repetitions for each side have been completed.', 
  'Sdraiati a terra con la zona lombare aderente al suolo. Metti una mano dietro la testa e l''altra a terra di lato. Tieni i piedi sollevati e appoggiati su una superficie piana. Solleva la spalla corrispondente alla mano dietro la testa verso il ginocchio opposto (es. gomito destro verso ginocchio sinistro). Dopo il contatto tra gomito e ginocchio, torna lentamente alla posizione di partenza. Inspira durante la fase eccentrica (discesa) ed espira durante quella concentrica (salita). Alterna i lati fino a completare le ripetizioni previste.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Oblique_Crunches/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Oblique_Crunches/1.jpg'], 
  NOW()
),
(
  'a3f76ce5-571c-4199-83c5-ee35f46e72e4', 
  'Oblique Crunches - On The Floor', 
  'Crunch Obliqui a terra', 
  'Start out by lying on your right side with your legs lying on top of each other. Make sure your knees are bent a little bit.
Place your left hand behind your head.
Once you are in this set position, begin by moving your left elbow up as you would perform a normal crunch except this time the main emphasis is on your obliques.
Crunch as high as you can, hold the contraction for a second and then slowly drop back down into the starting position.
Remember to breathe in during the eccentric (lowering) part of the exercise and to breathe out during the concentric (elevation) part of the exercise.', 
  'Sdraiati sul fianco destro con le gambe una sopra l''altra e le ginocchia leggermente flesse. Metti la mano sinistra dietro la testa. Esegui un crunch sollevando il gomito sinistro verso l''alto, focalizzandoti sulla contrazione degli obliqui. Sollevati il più possibile, mantieni la contrazione per un secondo e torna lentamente alla posizione di partenza. Inspira durante la discesa ed espira durante la fase di sollevamento.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Oblique_Crunches_-_On_The_Floor/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Oblique_Crunches_-_On_The_Floor/1.jpg'], 
  NOW()
),
(
  '90fa13f3-6e28-43b2-8239-cb51d060e456', 
  'Olympic Squat', 
  'Olympic Squat', 
  'Begin with a barbell supported on top of the traps. The chest should be up, and the head facing forward. Adopt a hip width stance with the feet turned out as needed.
Descend by flexing the knees, refraining from moving the hips back as much as possible. This requires that the knees travel forward; ensure that they stay aligned with the feet. The goal is to keep the torso as upright as possible. Continue all the way down, keeping the weight on the front of the heel.
At the moment the upper legs contact the lower, reverse the motion, driving the weight upward.', 
  'Posiziona il bilanciere sulla parte alta dei trapezi. Mantieni il petto alto e la testa in avanti. Adotta una stance pari alla larghezza dei fianchi con le punte dei piedi leggermente verso l''esterno. Scendi flettendo le ginocchia, evitando il più possibile di portare i fianchi indietro. Le ginocchia devono avanzare rimanendo allineate ai piedi. L''obiettivo è mantenere il busto il più verticale possibile. Scendi completamente mantenendo il peso sulla parte anteriore del tallone. Quando le cosce toccano i polpacci, inverte il movimento spingendo verso l''alto.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Olympic_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Olympic_Squat/1.jpg'], 
  NOW()
),
(
  'ae1ee26b-8a59-4e08-abce-0587fae84728', 
  'On-Your-Back Quad Stretch', 
  'Stretching Quadricipiti Supino', 
  'Lie on a flat bench or step, and hang one leg and arm over the side.
Bend the knee and hold the top of the foot. As you do this, be careful not to arch your lower back.
Pull the belly button to the spine to stay in neutral. Press your foot down and into your hand. To add the hip stretch, lift the hip of the leg you''re holding up toward the ceiling.
Switch sides.', 
  'Sdraiati su una panca piana o uno step, lasciando cadere una gamba e un braccio lateralmente. Piega il ginocchio e afferra la parte superiore del piede. Durante l''esecuzione, fai attenzione a non inarcare la zona lombare. Porta l''ombelico verso la colonna vertebrale per mantenere una posizione neutra. Spingi il piede verso il basso contro la mano. Per enfatizzare lo stretching dell''anca, solleva l''anca della gamba che stai tenendo verso il soffitto. Cambia lato.', 
  'quadriceps', 
  NULL, 
  'other', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/On-Your-Back_Quad_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/On-Your-Back_Quad_Stretch/1.jpg'], 
  NOW()
),
(
  '50216775-60fd-4345-a81a-df2f1594b98d', 
  'On Your Side Quad Stretch', 
  'Stretching Quadricipiti Laterale', 
  'Start off by lying on your right side, with your right knee bent at a 90-degree angle resting on the floor in front of you (this stabilizes the torso).
Bend your left knee behind you and hold your left foot with your left hand. To stretch your hip flexor, press your left hip forward as you push your left foot back into your hand. Switch sides.', 
  'Inizia sdraiandoti sul fianco destro, con il ginocchio destro piegato a 90 gradi appoggiato sul pavimento davanti a te (questo stabilizza il busto). Piega il ginocchio sinistro dietro di te e afferra il piede sinistro con la mano sinistra. Per allungare il flessore dell''anca, spingi l''anca sinistra in avanti mentre spingi il piede sinistro all''indietro contro la mano. Cambia lato.', 
  'quadriceps', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/On_Your_Side_Quad_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/On_Your_Side_Quad_Stretch/1.jpg'], 
  NOW()
),
(
  'e2cdc65f-8757-4c4c-8f01-64e203a7dbf3', 
  'One-Arm Dumbbell Row', 
  'Rematore con manubrio a un braccio', 
  'Choose a flat bench and place a dumbbell on each side of it.
Place the right leg on top of the end of the bench, bend your torso forward from the waist until your upper body is parallel to the floor, and place your right hand on the other end of the bench for support.
Use the left hand to pick up the dumbbell on the floor and hold the weight while keeping your lower back straight. The palm of the hand should be facing your torso. This will be your starting position.
Pull the resistance straight up to the side of your chest, keeping your upper arm close to your side and keeping the torso stationary. Breathe out as you perform this step. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. Also, make sure that the force is performed with the back muscles and not the arms. Finally, the upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the dumbbell; therefore do not try to pull the dumbbell up using the forearms.
Lower the resistance straight down to the starting position. Breathe in as you perform this step.
Repeat the movement for the specified amount of repetitions.
Switch sides and repeat again with the other arm.', 
  'Usa una panca piana e posiziona un manubrio su ciascun lato. Appoggia la gamba destra sull''estremità della panca, piega il busto in avanti partendo dai fianchi finché la parte superiore del corpo non è parallela al pavimento e appoggia la mano destra sull''altra estremità della panca per supporto. Usa la mano sinistra per afferrare il manubrio a terra mantenendo la zona lombare dritta. Il palmo della mano deve essere rivolto verso il busto. Questa è la posizione di partenza. Tira il peso verso l''alto lateralmente rispetto al torace, mantenendo il braccio vicino al fianco e il busto immobile. Espira durante questa fase. Consiglio: concentrati sulla contrazione dei muscoli della schiena una volta raggiunta la posizione di massima contrazione. Assicurati che lo sforzo sia effettuato dai muscoli della schiena e non dalle braccia. Infine, il busto deve rimanere fermo; solo le braccia devono muoversi. Gli avambracci devono servire solo a reggere il manubrio; non cercare di tirare il manubrio usando gli avambracci. Riporta il peso verso il basso nella posizione di partenza. Inspira durante questa fase. Ripeti per il numero di ripetizioni indicato. Cambia braccio e ripeti.', 
  'middle back', 
  'biceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/1.jpg'], 
  NOW()
),
(
  '13b88b6e-1359-4ce5-a407-843abc681edc', 
  'One-Arm Flat Bench Dumbbell Flye', 
  'Croci con manubrio a un braccio su panca piana', 
  'Lie down on a flat bench with a dumbbell in one hand resting on top of your thigh. The palm of your hand with the dumbbell in it should be at a neutral grip.
By using your thighs to help you get the dumbbell up, clean the dumbbell so that you can hold it in front of you with your lifting arm being fully extended. Remember to maintain a neutral grip with this exercise. Your non lifting hand should be to the side holding the flat bench for better support. This will be your starting position.
Your arm with the weight should have a slight bend on your elbow in order to prevent stress at the biceps tendon. Begin by lowering your arm with the weight in it out in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, your lifting arm should remain stationary; the movement should only occur at the shoulder joint.
Return your lifting arm back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights.
Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.
Switch arms and repeat the exercise.', 
  'Sdraiati su una panca piana con un manubrio in una mano appoggiato sulla coscia. Il palmo della mano deve avere una presa neutra. Usando la spinta della coscia, esegui un Clean per portare il manubrio davanti a te, tenendo il braccio completamente esteso. Mantieni la presa neutra. La mano che non lavora deve stare a lato, afferrando la panca per supporto. Questa è la posizione di partenza. Il braccio con il peso deve avere una leggera flessione del gomito per evitare stress al tendine del bicipite. Inizia abbassando il braccio lateralmente in un arco ampio finché non senti lo stretching nel torace. Inspira durante questa fase. Consiglio: mantieni il braccio fermo durante tutto il movimento; la rotazione deve avvenire solo a livello dell''articolazione della spalla. Riporta il braccio nella posizione di partenza contraendo i muscoli pettorali ed espirando. Consiglio: utilizza lo stesso arco di movimento usato per la discesa. Mantieni per un secondo la posizione di contrazione e ripeti per il numero di ripetizioni prescritto. Cambia braccio e ripeti.', 
  'chest', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Flat_Bench_Dumbbell_Flye/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Flat_Bench_Dumbbell_Flye/1.jpg'], 
  NOW()
),
(
  'd8ca7ea8-e2b0-455e-88d1-45e15bbf2bee', 
  'One-Arm High-Pulley Cable Side Bends', 
  'Flessioni laterali ai cavi alti a un braccio', 
  'Connect a standard handle to a tower. Move cable to highest pulley position.
Stand with side to cable. With one hand, reach up and grab handle with underhand grip.
Pull down cable until elbow touches your side and the handle is by your shoulder.
Position feet hip-width apart. Place free hand on hip to help gauge pivot point.
Keep arm in static position. Contract oblique to bring the weight down in a side crunch.
Once you reach maximum contraction, slowly release the weight to the starting position. The weight stack should never be unloaded in a resting position. The aim is constant tension during the set.
Repeat to failure.
Then, reposition and repeat the same series of movements on the opposite side.', 
  'Collega una maniglia standard a una torre, posizionando la carrucola nella posizione più alta. Posizionati lateralmente rispetto al cavo. Con una mano, afferra la maniglia con una presa inversa (palmo rivolto verso l''alto). Tira il cavo verso il basso finché il gomito tocca il fianco e la maniglia si trova all''altezza della spalla. Posiziona i piedi alla larghezza delle spalle. Metti la mano libera sul fianco per guidare il punto di rotazione. Mantieni il braccio in posizione statica. Contrai l''obliquo per abbassare il peso eseguendo un crunch laterale. Una volta raggiunta la massima contrazione, rilascia lentamente il peso verso la posizione iniziale. Il pacco pesi non deve mai toccare terra durante la serie; l''obiettivo è mantenere una tensione costante. Ripeti fino al cedimento. Successivamente, cambia posizione e ripeti la stessa serie di movimenti sul lato opposto.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_High-Pulley_Cable_Side_Bends/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_High-Pulley_Cable_Side_Bends/1.jpg'], 
  NOW()
),
(
  'f0b0330f-797d-49b0-8bbc-3ef9959b6f0c', 
  'One-Arm Incline Lateral Raise', 
  'Alzate laterali a un braccio su panca inclinata', 
  'Lie down sideways on an incline bench press with a dumbbell in the hand. Make sure the shoulder is pressing against the incline bench and the arm is lying across your body with the palm around your navel.
Hold a dumbbell in your uppermost arm while keeping it extended in front of you parallel to the floor. This is your starting position.
While keeping the dumbbell parallel to the floor at all times, perform a lateral raise. Your arm should travel straight up until it is pointing at the ceiling. Tip: Exhale as you perform this movement. Hold the dumbbell in the position and feel the contraction in the shoulders for a second.
While inhaling lower the weight across your body back into the starting position.
Repeat the movement for the prescribed amount of repetitions.
Switch arms and repeat the movement.', 
  'Sdraiati lateralmente su una panca inclinata con un manubrio in mano. Assicurati che la spalla sia premuta contro la panca e che il braccio sia disteso attraverso il corpo con il palmo vicino all''ombelico. Afferra il manubrio con il braccio superiore mantenendolo esteso davanti a te, parallelo al pavimento. Questa è la posizione di partenza. Mantenendo sempre il manubrio parallelo al pavimento, esegui un''alzata laterale. Il braccio deve salire dritto fino a puntare verso il soffitto. Consiglio: espira durante il movimento. Mantieni la posizione per un secondo per sentire la contrazione nelle spalle. Inspirando, abbassa il peso riportandolo nella posizione iniziale. Ripeti per il numero di ripetizioni prescritto. Cambia braccio e ripeti.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Incline_Lateral_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Incline_Lateral_Raise/1.jpg'], 
  NOW()
),
(
  '967c9b45-bc1b-4a0c-8b56-dbf829462f4d', 
  'One-Arm Kettlebell Clean', 
  'Clean con Kettlebell a un braccio', 
  'Place a kettlebell between your feet. As you bend down to grab the kettlebell, push your butt back and keep your eyes looking forward.
Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so.
Return the weight to the starting position.', 
  'Posiziona una kettlebell tra i piedi. Mentre ti pieghi per afferrarla, spingi il bacino all''indietro e guarda in avanti. Esegui il Clean portando la kettlebell verso la spalla estendendo gambe e anche mentre sollevi il peso. Ruota il polso durante il movimento. Riporta il peso nella posizione di partenza.', 
  'hamstrings', 
  'glutes', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean/1.jpg'], 
  NOW()
),
(
  '343a602d-c119-4481-85dc-b62e6e057fd7', 
  'One-Arm Kettlebell Clean and Jerk', 
  'Clean and Jerk con Kettlebell a un braccio', 
  'Hold a kettlebell by the handle.
Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward.
Dip your body by bending the knees, keeping your torso upright.
Immediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body''s momentum to move the weight.
Receive the weight overhead by returning to a squat position underneath the weight.
Keeping the weight overhead, return to a standing position. Lower the weight to the floor to perform the next repetition.', 
  'Afferra una kettlebell per l''impugnatura. Esegui il Clean verso la spalla estendendo gambe e anche. Ruota il polso in modo che il palmo sia rivolto in avanti. Fletti leggermente le ginocchia mantenendo il busto eretto. Inverti immediatamente la direzione spingendo con i talloni, come per un piccolo salto per creare slancio. Contemporaneamente, spingi la kettlebell sopra la testa estendendo il braccio, sfruttando l''inerzia del corpo per sollevare il peso. Ricevi il peso sopra la testa tornando in una posizione di squat sotto di esso. Mantenendo il peso in alto, torna in posizione eretta. Riporta il peso a terra per eseguire la ripetizione successiva.', 
  'shoulders', 
  NULL, 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean_and_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Clean_and_Jerk/1.jpg'], 
  NOW()
),
(
  '56833fac-41a2-4151-89b2-839a4fd9a922', 
  'One-Arm Kettlebell Floor Press', 
  'Floor Press con Kettlebell a un braccio', 
  'Lie on the floor holding a kettlebell with one hand, with your upper arm supported by the floor. The palm should be facing in.
Press the kettlebell straight up toward the ceiling, rotating your wrist.
Lower the kettlebell back to the starting position and repeat.', 
  'Sdraiati a terra tenendo una kettlebell con una mano, con la parte superiore del braccio appoggiata al pavimento. Il palmo deve essere rivolto verso l''interno. Spingi la kettlebell verso il soffitto ruotando il polso. Riporta la kettlebell alla posizione di partenza e ripeti.', 
  'chest', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Floor_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Floor_Press/1.jpg'], 
  NOW()
),
(
  'f795004b-6021-462c-b78b-8c0537a88e34', 
  'One-Arm Kettlebell Jerk', 
  'Jerk con Kettlebell a un braccio', 
  'Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.
Dip your body by bending the knees, keeping your torso upright.
Immediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body''s momentum to move the weight. Receive the weight overhead by returning to a squat position underneath the weight. Keeping the weight overhead, return to a standing position.
Lower the weight to perform the next repetition.', 
  'Afferra una kettlebell per l''impugnatura. Esegui il Clean verso la spalla estendendo gambe e anche. Ruota il polso in modo che il palmo sia rivolto in avanti. Questa è la posizione di partenza. Fletti leggermente le ginocchia mantenendo il busto eretto. Inverti immediatamente la direzione spingendo con i talloni, creando slancio. Spingi la kettlebell sopra la testa estendendo il braccio, usando l''inerzia del corpo. Ricevi il peso sopra la testa tornando in una posizione di squat sotto di esso. Mantenendo il peso in alto, torna in posizione eretta. Riporta il peso verso il basso per eseguire la ripetizione successiva.', 
  'shoulders', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Jerk/1.jpg'], 
  NOW()
),
(
  '61116214-3d45-4beb-a571-a13cc7954d5a', 
  'One-Arm Kettlebell Military Press To The Side', 
  'One-Arm Kettlebell Military Press laterale', 
  'Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces inward. This will be your starting position.
Look at the kettlebell and press it up and out until it is locked out overhead.
Lower the kettlebell back to your shoulder under control and repeat. Make sure to contract your lat, butt, and stomach forcefully for added stability and strength.', 
  'Esegui un Clean del kettlebell portandolo alla spalla, estendendo gambe e anche mentre tiri il kettlebell verso di te. Durante il movimento, ruota il polso in modo che il palmo sia rivolto verso l''interno; questa è la posizione di partenza. Guarda il kettlebell e spingilo verso l''alto e verso l''esterno fino a completa estensione sopra la testa. Riporta il kettlebell alla spalla in modo controllato e ripeti. Contrai con forza dorsali, glutei e addome per maggiore stabilità e potenza.', 
  'shoulders', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Military_Press_To_The_Side/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Military_Press_To_The_Side/1.jpg'], 
  NOW()
),
(
  'dc4e245c-72e3-41a9-a18a-9297e91f1fb1', 
  'One-Arm Kettlebell Para Press', 
  'One-Arm Kettlebell Para Press', 
  'Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.
Hold the kettlebell with the elbow out to the side, and press it up and out until it is locked out overhead.
Lower the kettlebell back to your shoulder under control and repeat. Make sure to contract your lat, butt, and stomach forcefully for added stability and strength.', 
  'Esegui un Clean del kettlebell portandolo alla spalla, estendendo gambe e anche mentre tiri il kettlebell verso di te. Ruota il polso in modo che il palmo sia rivolto in avanti; questa è la posizione di partenza. Mantieni il gomito rivolto verso l''esterno e spingi il kettlebell verso l''alto e l''esterno fino a completa estensione sopra la testa. Riporta il kettlebell alla spalla in modo controllato e ripeti. Contrai con forza dorsali, glutei e addome per maggiore stabilità e potenza.', 
  'shoulders', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Para_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Para_Press/1.jpg'], 
  NOW()
),
(
  '16c2fc5f-926c-4590-9cac-5e21b47c33a2', 
  'One-Arm Kettlebell Push Press', 
  'One-Arm Kettlebell Push Press', 
  'Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.
Dip your body by bending the knees, keeping your torso upright.
Immediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body''s momentum to move the weight. Lower the weight to perform the next repetition.', 
  'Afferra il kettlebell per l''impugnatura ed esegui un Clean portandolo alla spalla, ruotando il polso in modo che il palmo sia rivolto in avanti; questa è la posizione di partenza. Esegui un leggero piegamento sulle ginocchia mantenendo il busto eretto. Inverti immediatamente il movimento spingendo energicamente sui talloni, come per un salto, per creare slancio. Contemporaneamente, spingi il kettlebell sopra la testa fino alla completa estensione del braccio, sfruttando l''inerzia del corpo. Abbassa il peso per eseguire la ripetizione successiva.', 
  'shoulders', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Push_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Push_Press/1.jpg'], 
  NOW()
),
(
  '2d339fae-8753-4a4d-b595-ab7cdafd1e64', 
  'One-Arm Kettlebell Row', 
  'One-Arm Kettlebell Row', 
  'Place a kettlebell in front of your feet. Bend your knees slightly and then push your butt out as much as possible as you bend over to get in the starting position. Grab the kettlebell and pull it to your stomach, retracting your shoulder blade and flexing the elbow. Keep your back straight. Lower and repeat.', 
  'Posiziona un kettlebell davanti ai piedi. Piega leggermente le ginocchia, spingi il bacino all''indietro e fletti il busto per raggiungere la posizione di partenza. Afferra il kettlebell e tiralo verso l''addome, retrando la scapola e flettendo il gomito. Mantieni la schiena dritta. Abbassa il peso e ripeti.', 
  'middle back', 
  'biceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Row/1.jpg'], 
  NOW()
),
(
  'b3c91bf7-e052-472e-8ee7-19be0f3526d1', 
  'One-Arm Kettlebell Snatch', 
  'One-Arm Kettlebell Snatch', 
  'Place a kettlebell between your feet. Bend your knees and push your butt back to get in the proper starting position.
Look straight ahead and swing the kettlebell back between your legs.
Immediately reverse the direction and drive through with your hips and knees, accelerating the kettlebell upward. As the kettlebell rises to your shoulder rotate your hand and punch straight up, using momentum to receive the weight locked out overhead.', 
  'Posiziona un kettlebell tra i piedi. Piega le ginocchia e spingi il bacino all''indietro per assumere la corretta posizione di partenza. Guarda dritto davanti a te e fai oscillare il kettlebell tra le gambe. Inverti immediatamente il movimento, spingendo con forza di anche e ginocchia per accelerare il kettlebell verso l''alto. Mentre il kettlebell sale verso la spalla, ruota la mano e spingi verso l''alto, sfruttando l''inerzia per ricevere il peso con il braccio completamente esteso sopra la testa.', 
  'shoulders', 
  'calves', 
  'kettlebells', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Snatch/1.jpg'], 
  NOW()
),
(
  '3430370b-870d-4972-94bd-a93e86c4c1a3', 
  'One-Arm Kettlebell Split Jerk', 
  'One-Arm Kettlebell Split Jerk', 
  'Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position.
Dip your body by bending the knees, keeping your torso upright.
Immediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body''s momentum to move the weight.
Receive the weight overhead by returning to a squat position underneath the weight, positioning one leg in front of you and one leg behind you.
Keeping the weight overhead, return to a standing position and bring your feet together. Lower the weight to perform the next repetition.', 
  'Afferra il kettlebell ed esegui un Clean portandolo alla spalla con il palmo rivolto in avanti; questa è la posizione di partenza. Esegui un leggero piegamento sulle ginocchia mantenendo il busto eretto. Inverti immediatamente il movimento spingendo sui talloni per creare slancio. Contemporaneamente, spingi il kettlebell sopra la testa e, contemporaneamente, portati in posizione di affondo con una gamba avanti e una dietro per ricevere il peso. Mantenendo il peso sopra la testa, torna in posizione eretta unendo i piedi. Abbassa il peso per la ripetizione successiva.', 
  'shoulders', 
  'glutes', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Split_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Split_Jerk/1.jpg'], 
  NOW()
),
(
  'd00fbe09-b2c6-4342-aee0-7204f0226f58', 
  'One-Arm Kettlebell Split Snatch', 
  'One-Arm Kettlebell Split Snatch', 
  'Hold a kettlebell in one hand by the handle.
Squat towards the floor, and then reverse the motion, extending the hips, knees, and finally the ankles, to raise the kettlebell overhead.
After fully extending the body, descend into a lunge position to receive the weights overhead, one leg forward and one leg back. Ensure you drive through with your hips and lock the ketttlebells overhead in one uninterrupted motion.
Return to a standing position, holding the weight overhead, and bring the feet together. Lower the weight to return to the starting position.', 
  'Afferra il kettlebell per l''impugnatura con una mano. Esegui uno squat, quindi inverte il movimento estendendo anche, ginocchia e caviglie per sollevare il kettlebell sopra la testa. Dopo la completa estensione del corpo, scendi in posizione di affondo (una gamba avanti e una indietro) per ricevere il peso sopra la testa. Assicurati di spingere con le anche e bloccare il peso con il braccio teso in un unico movimento fluido. Torna in posizione eretta mantenendo il peso in alto, unisci i piedi e abbassa il peso per tornare alla posizione di partenza.', 
  'shoulders', 
  'hamstrings', 
  'kettlebells', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Split_Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Split_Snatch/1.jpg'], 
  NOW()
),
(
  'e245615b-cac1-4c78-a88f-5a61428e730f', 
  'One-Arm Kettlebell Swings', 
  'One-Arm Kettlebell Swings', 
  NULL, 
  'Esegui uno swing con il kettlebell utilizzando una sola mano, sfruttando la spinta esplosiva delle anche per far oscillare il peso, mantenendo la schiena neutra e il core contratto durante tutto l''arco del movimento.', 
  'hamstrings', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/1.jpg'], 
  NOW()
),
(
  'd1750da5-72ca-44ff-b101-39e50d8457a7', 
  'One-Arm Long Bar Row', 
  'One-Arm Long Bar Row', 
  'Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end.
Stand next to the bar, and take a grip with one hand close to the collar. Using your hips and legs, rise to a standing position.
Assume a bent-knee stance with your hips back and your chest up. Your arm should be extended. This will be your starting position.
Pull the weight to your side by retracting the shoulder and flexing the elbow. Do not jerk the weight or cheat during the movement.
After a brief pause, return to the starting position.', 
  'Posiziona un bilanciere in un supporto (landmine) o in un angolo per fissarlo. Carica un peso adeguato all''estremità. Stai di fianco al bilanciere, afferralo con una mano vicino al collare e, usando gambe e anche, portati in posizione eretta. Assumi una posizione a ginocchia flesse con il bacino all''indietro e il petto alto; il braccio deve essere teso verso il basso. Questa è la posizione di partenza. Tira il peso verso il fianco retrando la spalla e flettendo il gomito, senza strattonare. Dopo una breve pausa, torna alla posizione di partenza.', 
  'middle back', 
  'biceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Long_Bar_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Long_Bar_Row/1.jpg'], 
  NOW()
),
(
  '48894754-a901-4fa8-a93a-9ed0b1cd7c34', 
  'One-Arm Medicine Ball Slam', 
  'One-Arm Medicine Ball Slam', 
  'Start in a standing position with a staggered, athletic stance. Hold a medicine ball in one hand, on the same side as your back leg. This will be your starting position.
Begin by winding the arm, raising the medicine ball above your head. As you do so, extend through the hips, knees, and ankles to load up for the slam.
At peak extension, flex the shoulders, spine, and hips to throw the ball hard into the ground directly in front of you.
Catch the ball on the bounce and continue for the desired number of repetitions.', 
  'Inizia in posizione eretta con una postura atletica sfalsata. Tieni una palla medica in una mano, dallo stesso lato della gamba arretrata. Solleva la palla medica sopra la testa, estendendo anche, ginocchia e caviglie per prepararti al lancio. Alla massima estensione, fletti spalle, colonna vertebrale e anche per scagliare con forza la palla a terra direttamente davanti a te. Afferra la palla al rimbalzo e continua per il numero di ripetizioni desiderato.', 
  'abdominals', 
  'lats', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Medicine_Ball_Slam/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Medicine_Ball_Slam/1.jpg'], 
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