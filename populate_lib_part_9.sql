-- Full population of exercise_library with Italian translations (Batch 9)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  '20d1a8e1-4ac1-453a-9f7f-d79ff2c529b8', 
  'Sumo Deadlift with Chains', 
  'Sumo Deadlift con catene', 
  'You can attach the chains to the sleeves of the bar, or just drape the middle over the bar so there is a greater weight increase as you lift. Attempt to keep the ends of the chains away from the plates so you don''t hit them when you lower the weight.
Begin with a bar loaded on the ground. Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip. Relax the shoulders, which in effect lengthens your arms.
Take a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.
As the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.
Return the weight to the ground by bending at the hips and controlling the weight on the way down.', 
  'Puoi fissare le catene ai manicotti del bilanciere o semplicemente farle passare sopra di esso, in modo da ottenere un aumento di carico maggiore durante la fase di sollevamento. Cerca di tenere le estremità delle catene lontane dai dischi per evitare che vi urtino durante la discesa. Inizia con un bilanciere caricato a terra. Posizionati in modo che il bilanciere intersechi la metà dei piedi. I piedi devono essere molto distanti, vicino ai collari. Fletti le anche per afferrare il bilanciere. Le braccia devono trovarsi direttamente sotto le spalle, all''interno delle gambe; puoi utilizzare una presa prona, una presa mista o una presa a gancio (hook grip). Rilassa le spalle, il che allungherà le braccia. Inspira, quindi abbassa le anche, guardando avanti con la testa e tenendo il petto alto. Spingi attraverso il pavimento, divaricando i piedi e mantenendo il peso sulla parte posteriore dei piedi. Estendi anche e ginocchia. Quando il bilanciere supera le ginocchia, sposta leggermente il busto all''indietro e spingi le anche verso il bilanciere, contraendo le scapole. Riporta il peso a terra flettendo le anche e controllando il movimento durante la discesa.', 
  'hamstrings', 
  'abductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift_with_Chains/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift_with_Chains/1.jpg'], 
  NOW()
),
(
  '8b1c54b9-3349-43df-b019-7c6fa393388f', 
  'Superman', 
  'Superman', 
  'To begin, lie straight and face down on the floor or exercise mat. Your arms should be fully extended in front of you. This is the starting position.
Simultaneously raise your arms, legs, and chest off of the floor and hold this contraction for 2 seconds. Tip: Squeeze your lower back to get the best results from this exercise. Remember to exhale during this movement. Note: When holding the contracted position, you should look like superman when he is flying.
Slowly begin to lower your arms, legs and chest back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions prescribed in your program.', 
  'Per iniziare, sdraiati a pancia in giù sul pavimento o su un tappetino. Le braccia devono essere completamente distese davanti a te. Questa è la posizione di partenza. Solleva simultaneamente braccia, gambe e petto dal pavimento e mantieni la contrazione per 2 secondi. Consiglio: contrai la zona lombare per ottenere i migliori risultati. Ricordati di espirare durante il movimento. Nota: quando mantieni la posizione contratta, dovresti ricordare Superman in volo. Torna lentamente alla posizione di partenza abbassando braccia, gambe e petto mentre inspiri. Ripeti per il numero di ripetizioni prescritto nel tuo programma.', 
  'lower back', 
  'glutes', 
  'body only', 
  'beginner', 
  'compound', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/1.jpg'], 
  NOW()
),
(
  '0cc7ba60-163a-4d9d-b983-8a5e2eed9ca1', 
  'Supine Chest Throw', 
  'Supine Chest Throw', 
  'This drill is great for chest passes when you lack a partner or a wall of sufficient strength. Lay on the ground on your back with your knees bent.
Begin with the ball on your chest, held with both hands on the bottom.
Explode up, extending through the elbow to throw the ball directly above you as high as possible.
Catch the ball with both hands as it comes down.', 
  'Questo esercizio è ottimo per i passaggi al petto quando non hai un partner o una parete sufficientemente resistente. Sdraiati a terra sulla schiena con le ginocchia flesse. Inizia con la palla sul petto, tenendola con entrambe le mani nella parte inferiore. Esplodi verso l''alto, distendendo i gomiti per lanciare la palla direttamente sopra di te il più in alto possibile. Afferra la palla con entrambe le mani mentre ricade.', 
  'triceps', 
  'chest', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Supine_Chest_Throw/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Supine_Chest_Throw/1.jpg'], 
  NOW()
),
(
  '187a8870-0533-4933-a6eb-128097b5e308', 
  'Supine One-Arm Overhead Throw', 
  'Supine One-Arm Overhead Throw', 
  'Lay on the ground on your back with your knees bent. Hold the ball with one hand, extending the arm fully behind your head. This will be your starting position.
Initiate the movement at the shoulder, throwing the ball directly forward of you as you sit up, attempting to go for maximum distance.
The ball can be thrown to a partner or bounced off of a wall.', 
  'Sdraiati a terra sulla schiena con le ginocchia flesse. Tieni la palla con una mano, distendendo completamente il braccio dietro la testa. Questa sarà la tua posizione di partenza. Inizia il movimento dalla spalla, lanciando la palla direttamente davanti a te mentre ti sollevi, cercando di ottenere la massima distanza. La palla può essere lanciata a un partner o fatta rimbalzare contro una parete.', 
  'abdominals', 
  'chest', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Supine_One-Arm_Overhead_Throw/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Supine_One-Arm_Overhead_Throw/1.jpg'], 
  NOW()
),
(
  'd12fb33c-3f5a-47cf-848c-63e35010078c', 
  'Supine Two-Arm Overhead Throw', 
  'Supine Two-Arm Overhead Throw', 
  'Lay on the ground on your back with your knees bent.
Hold the ball with both hands, extending the arms fully behind your head. This will be your starting position.
Initiate the movement at the shoulder, throwing the ball directly forward of you as you sit up, attempting to go for maximum distance.
The ball can be thrown to a partner or bounced off of a wall.', 
  'Sdraiati a terra sulla schiena con le ginocchia flesse. Tieni la palla con entrambe le mani, distendendo completamente le braccia dietro la testa. Questa sarà la tua posizione di partenza. Inizia il movimento dalla spalla, lanciando la palla direttamente davanti a te mentre ti sollevi, cercando di ottenere la massima distanza. La palla può essere lanciata a un partner o fatta rimbalzare contro una parete.', 
  'abdominals', 
  'chest', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Supine_Two-Arm_Overhead_Throw/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Supine_Two-Arm_Overhead_Throw/1.jpg'], 
  NOW()
),
(
  '7bb02135-a5b6-4636-95fb-d5e2b5d1e125', 
  'Suspended Fallout', 
  'Suspended Fallout', 
  'Adjust the straps so the handles are at an appropriate height, below waist level.
Begin standing and grasping the handles. Lean into the straps, moving to an incline push-up position. This will be your starting position.
Keeping your arms straight, lean further into the suspension straps, bringing your body closer to the ground, allowing your shoulders to extend, raising your arms up and over your head.
Maintain a neutral spine and keep the rest of your body straight, your shoulders being the only joints allowed to move.
Pause during the peak contraction, and then return to the starting position.', 
  'Regola le cinghie in modo che le maniglie siano a un''altezza appropriata, sotto il livello della vita. Inizia in piedi afferrando le maniglie. Inclinati verso le cinghie, portandoti in una posizione di piegamento inclinato. Questa sarà la tua posizione di partenza. Mantenendo le braccia tese, inclinati ulteriormente verso le cinghie, avvicinando il corpo al suolo e permettendo alle spalle di estendersi, sollevando le braccia sopra la testa. Mantieni la colonna vertebrale in posizione neutra e il corpo dritto; le spalle devono essere le uniche articolazioni a muoversi. Fai una pausa al picco della contrazione, quindi torna alla posizione di partenza.', 
  'abdominals', 
  'chest', 
  'other', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Fallout/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Fallout/1.jpg'], 
  NOW()
),
(
  '55660379-3487-435f-89f6-e15d99630180', 
  'Suspended Push-Up', 
  'Suspended Push-Up', 
  'Anchor your suspension straps securely to the top of a rack or other object.
Leaning into the straps, take a handle in each hand and move into a push-up plank position. You should be as close to parallel to the ground as you can manage with your arms fully extended, maintaining good posture.
Maintaining a straight, rigid torso, descend slowly by allowing the elbows to flex.
Continue until your elbows break 90 degrees, pausing before you extend to return to the starting position.', 
  'Ancora le cinghie in sospensione saldamente alla parte superiore di un rack o di un altro supporto. Inclinandoti verso le cinghie, prendi una maniglia in ogni mano e mettiti in posizione di plank per piegamenti. Dovresti essere il più parallelo possibile al suolo con le braccia completamente estese, mantenendo una buona postura. Mantenendo il busto dritto e rigido, scendi lentamente flettendo i gomiti. Continua finché i gomiti superano i 90 gradi, facendo una pausa prima di estenderli per tornare alla posizione di partenza.', 
  'chest', 
  'shoulders', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Push-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Push-Up/1.jpg'], 
  NOW()
),
(
  '6a7c8d41-5de9-4717-a0ac-0bb1ebfddd24', 
  'Suspended Reverse Crunch', 
  'Suspended Reverse Crunch', 
  'Secure a set of suspension straps with the handles hanging about a foot off of the ground. Move yourself into a pushup plank position facing away from the rack.
Place your feet into the handles. You should maintain a straight posture, not allowing the hips to sag. This will be your starting position.
Begin the movement by flexing the knees and hips, drawing the knees to your torso. As you do so, anteriorly tilt your pelvis, allowing your spine to flex.
At the top of the controlled motion, return to the starting position.', 
  'Fissa un set di cinghie in sospensione con le maniglie a circa 30 cm da terra. Mettiti in posizione di plank per piegamenti dando le spalle al rack. Inserisci i piedi nelle maniglie. Mantieni una postura dritta, evitando che i fianchi cedano. Questa sarà la posizione di partenza. Inizia il movimento flettendo ginocchia e anche, portando le ginocchia verso il busto. Mentre lo fai, inclina il bacino in avanti, permettendo alla colonna vertebrale di flettersi. Al termine del movimento controllato, torna alla posizione di partenza.', 
  'abdominals', 
  NULL, 
  'other', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Reverse_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Reverse_Crunch/1.jpg'], 
  NOW()
),
(
  'bf4311eb-048c-46ed-8edc-acc1feca1330', 
  'Suspended Row', 
  'Suspended Row', 
  'Suspend your straps at around chest height. Take a handle in each hand and lean back. Keep your body erect and your head and chest up. Your arms should be fully extended. This will be your starting position.
Begin by flexing the elbow to initiate the movement. Protract your shoulder blades as you do so.
At the completion of the motion pause, and then return to the starting position.', 
  'Sospendi le cinghie all''altezza del petto. Prendi una maniglia per mano e inclinati all''indietro. Mantieni il corpo eretto, con testa e petto alti. Le braccia devono essere completamente distese. Questa sarà la posizione di partenza. Inizia flettendo i gomiti per avviare il movimento. Durante il movimento, protrai le scapole. Al completamento del gesto, fai una pausa e torna alla posizione di partenza.', 
  'middle back', 
  'biceps', 
  'other', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Row/1.jpg'], 
  NOW()
),
(
  'a4f1c940-519c-45f9-b02b-a6f2ea2cb970', 
  'Suspended Split Squat', 
  'Suspended Split Squat', 
  'Suspend your straps so the handles are 18-30 inches from the floor.
Facing away from the setup, place your rear foot into the handle behind you. Keep your head looking forward and your chest up, with your knee slightly bent. This will be your starting position.
Descend by flexing the knee and hips, lowering yourself to the ground. Keep your weight on the heel of your foot and maintain your posture throughout the exercise.
At the bottom of the movement, reverse the motion, extending through the hip and knee to return to the starting position.', 
  'Sospendi le cinghie in modo che le maniglie siano a 45-75 cm dal pavimento. Dando le spalle al punto di ancoraggio, posiziona il piede posteriore nella maniglia dietro di te. Mantieni lo sguardo in avanti e il petto alto, con il ginocchio leggermente flesso. Questa sarà la posizione di partenza. Scendi flettendo ginocchio e anche, avvicinandoti al suolo. Mantieni il peso sul tallone del piede a terra e mantieni la postura corretta durante tutto l''esercizio. Al punto più basso, inverte il movimento, estendendo anca e ginocchio per tornare alla posizione di partenza.', 
  'quadriceps', 
  'abductors', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Split_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Suspended_Split_Squat/1.jpg'], 
  NOW()
),
(
  '4c63d991-2666-4099-94af-3bc7122722da', 
  'Svend Press', 
  'Svend Press', 
  'Begin in a standing position.
Press two lightweight plates together with your hands. Hold the plates together close to your chest to create an isometric contraction in your chest muscles. Your fingers should be pointed forward. This is your starting position.
Squeeze the plates between your palms and extend your arms directly out in front of you in a controlled motion.
Pause at the top of the motion, and then slowly return to the starting position.', 
  'Parti in posizione eretta. Premi due dischi leggeri l''uno contro l''altro con le mani. Tieni i dischi uniti vicino al petto per creare una contrazione isometrica dei muscoli pettorali. Le dita devono essere rivolte in avanti. Questa è la posizione di partenza. Stringi i dischi tra i palmi ed estendi le braccia direttamente davanti a te con un movimento controllato. Fai una pausa al culmine del movimento e torna lentamente alla posizione iniziale.', 
  'chest', 
  'forearms', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Svend_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Svend_Press/1.jpg'], 
  NOW()
),
(
  'd4c337d1-1faa-4110-bfa2-a9e079b15992', 
  'T-Bar Row with Handle', 
  'T-Bar Row con maniglia', 
  'Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end.
Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position.
Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position.
Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement.
After a brief pause, return to the starting position.', 
  'Posiziona un bilanciere in un supporto landmine o in un angolo per evitare che si sposti. Carica un peso adeguato all''estremità. Posizionati sopra il bilanciere e aggancia una maniglia Double D vicino al collare. Usando gambe e anche, sollevati in posizione eretta. Assumi una posizione con piedi larghi, anche spinte all''indietro e petto in fuori. Le braccia devono essere tese. Questa è la posizione di partenza. Tira il peso verso la parte superiore dell''addome retrattando le scapole e flettendo i gomiti. Non strattonare il peso e non eseguire il movimento con slanci scorretti. Dopo una breve pausa, torna alla posizione iniziale.', 
  'middle back', 
  'biceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/T-Bar_Row_with_Handle/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/T-Bar_Row_with_Handle/1.jpg'], 
  NOW()
),
(
  'eccd52fe-f85e-4ef1-85fc-cc24dad4f6ef', 
  'Tate Press', 
  'Tate Press', 
  'Lie down on a flat bench with a dumbbell in each hand on top of your thighs. The palms of your hand will be facing each other.
By using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them in front of you at shoulder width. Note: when holding the dumbbells in front of you, make sure your arms are wider than shoulder width apart from each other using a pronated (palms forward) grip. Allow your elbows to point out. This is your starting position.
Keeping the upper arms stationary, slowly move the dumbbells in and down in a semi circular motion until they touch the upper chest while inhaling. Keep full control of the dumbbells at all times and do not move the upper arms nor rest the dumbbells on the chest.
As you breathe out, move the dumbbells up using your triceps and the same semi-circular motion but in reverse. Attempt to keep the dumbbells together as they move up. Lock your arms in the contracted position, hold for a second and then start coming down again slowly again. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions of your training program.', 
  'Sdraiati su una panca piana con un manubrio in ogni mano appoggiato sulle cosce. I palmi delle mani devono essere rivolti l''uno verso l''altro. Usando le cosce per aiutare il sollevamento, porta i manubri nella posizione iniziale davanti a te, all''altezza delle spalle. Nota: le braccia devono essere più larghe delle spalle con una presa prona (palmi in avanti) e i gomiti devono puntare verso l''esterno. Mantenendo la parte superiore delle braccia ferma, sposta lentamente i manubri verso l''interno e verso il basso con un movimento semicircolare finché non toccano la parte alta del petto, inspirando durante la fase. Mantieni il controllo totale e non appoggiare i manubri sul petto. Espirando, spingi i manubri verso l''alto usando i tricipiti con lo stesso movimento semicircolare inverso. Cerca di tenere i manubri uniti mentre salgono. Distendi le braccia nella posizione contratta, mantieni per un secondo e riparti lentamente. Consiglio: la fase di discesa dovrebbe durare almeno il doppio di quella di salita. Ripeti per il numero di ripetizioni previsto.', 
  'triceps', 
  'chest', 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tate_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tate_Press/1.jpg'], 
  NOW()
),
(
  'c416819d-6edc-4dc2-8e35-c5fcafb3f83b', 
  'The Straddle', 
  'The Straddle', 
  'Begin in a seated, upright position. Start by extending your legs in front of you in a V.
With your hands on the floor, lean forward as far as possible. Hold for 10 to 20 seconds.', 
  'Inizia in posizione seduta, con la schiena dritta. Allarga le gambe davanti a te formando una V. Con le mani a terra, inclinati in avanti il più possibile. Mantieni la posizione per 10-20 secondi.', 
  'hamstrings', 
  'adductors', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/The_Straddle/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/The_Straddle/1.jpg'], 
  NOW()
),
(
  '0ac7e5ea-a3dd-4238-85c9-9e2bfbe38561', 
  'Thigh Abductor', 
  'Abductor Machine', 
  'To begin, sit down on the abductor machine and select a weight you are comfortable with. When your legs are positioned properly, grip the handles on each side. Your entire upper body (from the waist up) should be stationary. This is the starting position.
Slowly press against the machine with your legs to move them away from each other while exhaling.
Feel the contraction for a second and begin to move your legs back to the starting position while breathing in. Note: Remember to keep your upper body stationary to prevent any injuries from occurring.
Repeat for the recommended amount of repetitions.', 
  'Siediti sulla macchina abductor e seleziona un peso confortevole. Una volta posizionate correttamente le gambe, impugna le maniglie laterali. L''intera parte superiore del corpo (dalla vita in su) deve rimanere ferma. Questa è la posizione di partenza. Espirando, spingi lentamente contro la macchina per allontanare le gambe l''una dall''altra. Senti la contrazione per un secondo e torna lentamente alla posizione iniziale inspirando. Nota: mantieni il busto fermo per evitare infortuni. Ripeti per il numero di ripetizioni raccomandato.', 
  'abductors', 
  'glutes', 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Abductor/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Abductor/1.jpg'], 
  NOW()
),
(
  'eab47ab6-0929-4d26-b5e9-c76592180b44', 
  'Thigh Adductor', 
  'Adductor Machine', 
  'To begin, sit down on the adductor machine and select a weight you are comfortable with. When your legs are positioned properly on the leg pads of the machine, grip the handles on each side. Your entire upper body (from the waist up) should be stationary. This is the starting position.
Slowly press against the machine with your legs to move them towards each other while exhaling.
Feel the contraction for a second and begin to move your legs back to the starting position while breathing in. Note: Remember to keep your upper body stationary and avoid fast jerking motions in order to prevent any injuries from occurring.
Repeat for the recommended amount of repetitions.', 
  'Siediti sulla macchina adductor e seleziona un peso confortevole. Posiziona le gambe sugli appositi cuscinetti e impugna le maniglie laterali. L''intera parte superiore del corpo (dalla vita in su) deve rimanere ferma. Questa è la posizione di partenza. Espirando, spingi lentamente contro la macchina per avvicinare le gambe tra loro. Senti la contrazione per un secondo e torna lentamente alla posizione iniziale inspirando. Nota: mantieni il busto fermo ed evita movimenti bruschi per prevenire infortuni. Ripeti per il numero di ripetizioni raccomandato.', 
  'adductors', 
  'glutes', 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Adductor/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Adductor/1.jpg'], 
  NOW()
),
(
  '7be01d99-709d-4a1c-b52a-f310df059c1f', 
  'Tire Flip', 
  'Tire Flip (Ribaltamento pneumatico)', 
  'Begin by gripping the bottom of the tire on the tread, and position your feet back a bit. Your chest should be driving into the tire.
To lift the tire, extend through the hips, knees, and ankles, driving into the tire and up.
As the tire reaches a 45 degree angle, step forward and drive a knee into the tire. As you do so adjust your grip to the upper portion of the tire and push it forward as hard as possible to complete the turn. Repeat as necessary.', 
  'Afferra la parte inferiore dello pneumatico sul battistrada e posiziona i piedi leggermente all''indietro. Il petto deve spingere contro lo pneumatico. Per sollevare, distendi anche, ginocchia e caviglie, spingendo in avanti e verso l''alto. Quando lo pneumatico raggiunge un angolo di 45 gradi, fai un passo avanti e spingi con un ginocchio contro lo pneumatico. Contemporaneamente, sposta la presa sulla parte superiore e spingi in avanti con la massima forza per completare il ribaltamento. Ripeti se necessario.', 
  'quadriceps', 
  'calves', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tire_Flip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tire_Flip/1.jpg'], 
  NOW()
),
(
  '3d34347e-cf49-46f3-90d4-2dcd8e813834', 
  'Toe Touchers', 
  'Toe Touchers', 
  'To begin, lie down on the floor or an exercise mat with your back pressed against the floor. Your arms should be lying across your sides with the palms facing down.
Your legs should be touching each other. Slowly elevate your legs up in the air until they are almost perpendicular to the floor with a slight bend at the knees. Your feet should be parallel to the floor.
Move your arms so that they are fully extended at a 45 degree angle from the floor. This is the starting position.
While keeping your lower back pressed against the floor, slowly lift your torso and use your hands to try and touch your toes. Remember to exhale while perform this part of the exercise.
Slowly begin to lower your torso and arms back down to the starting position while inhaling. Remember to keep your arms straight out pointing towards your toes.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a terra o su un tappetino con la schiena ben premuta al suolo. Le braccia devono essere lungo i fianchi con i palmi rivolti verso il basso. Le gambe devono essere unite. Solleva lentamente le gambe finché non sono quasi perpendicolari al pavimento, mantenendo una leggera flessione alle ginocchia. I piedi devono essere paralleli al soffitto. Porta le braccia in avanti, distese a un angolo di 45 gradi rispetto al pavimento. Questa è la posizione di partenza. Mantenendo la zona lombare premuta a terra, solleva lentamente il busto e cerca di toccare le punte dei piedi con le mani, espirando durante il movimento. Torna lentamente alla posizione iniziale inspirando, mantenendo le braccia tese verso le punte dei piedi. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Toe_Touchers/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Toe_Touchers/1.jpg'], 
  NOW()
),
(
  '6b33d46a-841a-4229-8c7c-667cae0014c6', 
  'Torso Rotation', 
  'Rotazione del busto', 
  'Stand upright holding an exercise ball with both hands. Extend your arms so the ball is straight out in front of you. This will be your starting position.
Rotate your torso to one side, keeping your eyes on the ball as you move. Now, rotate back to the opposite direction. Repeat for 10-20 repetitions.', 
  'In piedi, tieni una palla fitness con entrambe le mani. Estendi le braccia davanti a te. Questa è la posizione di partenza. Ruota il busto di lato, seguendo la palla con lo sguardo mentre ti muovi. Ora ruota verso la direzione opposta. Ripeti per 10-20 ripetizioni.', 
  'abdominals', 
  NULL, 
  'exercise ball', 
  'beginner', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Torso_Rotation/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Torso_Rotation/1.jpg'], 
  NOW()
),
(
  'da479445-79fe-496e-9bbb-f64e8baec81b', 
  'Trail Running/Walking', 
  'Trail Running/Walking', 
  'Running or hiking on trails will get the blood pumping and heart beating almost immediately. Make sure you have good shoes. While you use the muscles in your calves and buttocks to pull yourself up a hill, the knees, joints and ankles absorb the bulk of the pounding coming back down. Take smaller steps as you walk downhill, keep your knees bent to reduce the impact and slow down to avoid falling.
A 150 lb person can burn over 200 calories for 30 minutes walking uphill, compared to 175 on a flat surface. If running the trail, a 150 lb person can burn well over 500 calories in 30 minutes.', 
  'Correre o camminare sui sentieri stimola immediatamente la circolazione e il battito cardiaco. Assicurati di indossare calzature adatte. Mentre usi i muscoli dei polpacci e dei glutei per salire, ginocchia, articolazioni e caviglie assorbono gran parte dell''impatto in discesa. Fai passi più brevi durante la discesa, mantieni le ginocchia flesse per ridurre l''impatto e rallenta per evitare cadute. Una persona di 68 kg (150 libbre) può bruciare oltre 200 calorie in 30 minuti di camminata in salita, rispetto alle 175 su superficie piana. Se si corre sul sentiero, la stessa persona può bruciare ben oltre 500 calorie in 30 minuti.', 
  'quadriceps', 
  'calves', 
  NULL, 
  'beginner', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trail_Running_Walking/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trail_Running_Walking/1.jpg'], 
  NOW()
),
(
  '51cc984b-01c5-491c-a2e0-00a2089d05f0', 
  'Trap Bar Deadlift', 
  'Stacco con Trap Bar', 
  'For this exercise load a trap bar, also known as a hex bar, to an appropriate weight resting on the ground. Stand in the center of the apparatus and grasp both handles.
Lower your hips, look forward with your head and keep your chest up.
Begin the movement by driving through the heels and extend your hips and knees. Avoid rounding your back at all times.
At the completion of the movement, lower the weight back to the ground under control.', 
  'Carica una trap bar (nota anche come hex bar) con un peso adeguato poggiato a terra. Posizionati al centro dell''attrezzo e afferra entrambe le impugnature. Abbassa il bacino, guarda in avanti tenendo la testa alta e mantieni il petto in fuori. Inizia il movimento spingendo attraverso i talloni ed estendendo anche e ginocchia. Evita in ogni momento di inarcare la schiena. Al termine del movimento, riporta il peso a terra mantenendo il controllo.', 
  'quadriceps', 
  'glutes', 
  'other', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trap_Bar_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Trap_Bar_Deadlift/1.jpg'], 
  NOW()
),
(
  '9d9e424b-db2d-403c-aa4c-c37cd4f097ce', 
  'Tricep Dumbbell Kickback', 
  'Kickback con manubri per tricipiti', 
  'Start with a dumbbell in each hand and your palms facing your torso. Keep your back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep your head up. Your upper arms should be close to your torso and parallel to the floor. Your forearms should be pointed towards the floor as you hold the weights. There should be a 90-degree angle formed between your forearm and upper arm. This is your starting position.
Now, while keeping your upper arms stationary, exhale and use your triceps to lift the weights until the arm is fully extended. Focus on moving the forearm.
After a brief pause at the top contraction, inhale and slowly lower the dumbbells back down to the starting position.
Repeat the movement for the prescribed amount of repetitions.', 
  'Inizia con un manubrio in ogni mano e i palmi rivolti verso il busto. Mantieni la schiena dritta con una leggera flessione delle ginocchia e inclinati in avanti con il busto, che dovrebbe risultare quasi parallelo al pavimento. Tieni la testa alta. Le braccia devono restare vicine al busto e parallele al pavimento, mentre gli avambracci devono puntare verso il basso, formando un angolo di 90 gradi con le braccia. Questa è la posizione di partenza. Espira e, mantenendo le braccia ferme, utilizza i tricipiti per sollevare i pesi fino a completa estensione. Concentrati sul movimento dell''avambraccio. Dopo una breve pausa in fase di massima contrazione, inspira e abbassa lentamente i manubri fino alla posizione iniziale. Ripeti per il numero di ripetizioni prescritto.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Dumbbell_Kickback/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Dumbbell_Kickback/1.jpg'], 
  NOW()
),
(
  '30ecea2d-a434-4e64-a417-9b121edccca7', 
  'Tricep Side Stretch', 
  'Stretching laterale per tricipiti', 
  'Bring right arm across your body and over your left shoulder, holding your elbow with your left hand, until you feel a stretch in your tricep. Then repeat for your other arm.', 
  'Porta il braccio destro davanti al corpo verso la spalla sinistra, afferrando il gomito con la mano sinistra fino a sentire un allungamento del tricipite. Ripeti poi con l''altro braccio.', 
  'triceps', 
  'shoulders', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Side_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Side_Stretch/1.jpg'], 
  NOW()
),
(
  'a672d7b1-4ccb-411f-a1c0-c59e157d1101', 
  'Triceps Overhead Extension with Rope', 
  'Estensioni sopra la testa con corda', 
  'Attach a rope to a low pulley. After selecting an appropriate weight, grasp the rope with both hands and face away from the cable.
Position your hands behind your head with your elbows point straight up. Your elbows should start out flexed, and you can stagger your stance and lean gently away from the machine to create greater stability. This will be your starting position.
To perform the movement, extend through the elbow while keeping the upper arm in position, raising your hands above your head.
Squeeze your triceps at the top of the movement, and slowly lower the weight back to the start position.', 
  'Collega una corda a una carrucola bassa. Dopo aver selezionato un peso adeguato, afferra la corda con entrambe le mani e dai le spalle alla macchina. Posiziona le mani dietro la testa con i gomiti rivolti verso l''alto. I gomiti devono essere inizialmente flessi; puoi sfalsare la posizione dei piedi e inclinarti leggermente in avanti per una maggiore stabilità. Questa è la posizione di partenza. Esegui il movimento estendendo i gomiti verso l''alto, mantenendo la parte superiore delle braccia fissa. Contrai i tricipiti al culmine del movimento e torna lentamente alla posizione iniziale.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Overhead_Extension_with_Rope/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Overhead_Extension_with_Rope/1.jpg'], 
  NOW()
),
(
  '914012e7-d9c6-49f0-a4bb-f5813cfb3b74', 
  'Triceps Pushdown', 
  'Pushdown per tricipiti', 
  'Attach a straight or angled bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width.
Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. This is your starting position.
Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.
After a second hold at the contracted position, bring the bar slowly up to the starting point. Breathe in as you perform this step.
Repeat for the recommended amount of repetitions.', 
  'Collega una sbarra dritta o angolata a una carrucola alta e afferrala con una presa prona (palmi rivolti verso il basso) a larghezza spalle. In posizione eretta con il busto dritto e una leggera inclinazione in avanti, tieni le braccia vicine al corpo e perpendicolari al pavimento. Gli avambracci puntano verso la carrucola. Questa è la posizione di partenza. Spingi la sbarra verso il basso usando i tricipiti finché le braccia non sono completamente estese perpendicolarmente al pavimento. Le braccia devono restare ferme lungo i fianchi, muovendo solo gli avambracci. Espira durante il movimento. Dopo una breve pausa in contrazione, risali lentamente verso il punto di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown/1.jpg'], 
  NOW()
),
(
  'ffd0ce5d-459c-49da-bd62-466429c42f67', 
  'Triceps Pushdown - Rope Attachment', 
  'Pushdown per tricipiti con corda', 
  'Attach a rope attachment to a high pulley and grab with a neutral grip (palms facing each other).
Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the rope with the palms facing each other. This is your starting position.
Using the triceps, bring the rope down as you bring each side of the rope to the side of your thighs. At the end of the movement the arms are fully extended and perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.
After holding for a second, at the contracted position, bring the rope slowly up to the starting point. Breathe in as you perform this step.
Repeat for the recommended amount of repetitions.', 
  'Collega una corda a una carrucola alta e afferrala con una presa neutra (palmi rivolti l''uno verso l''altro). In posizione eretta con il busto dritto e una leggera inclinazione in avanti, tieni le braccia vicine al corpo e perpendicolari al pavimento. Gli avambracci puntano verso la carrucola. Questa è la posizione di partenza. Usa i tricipiti per spingere la corda verso il basso, portando le estremità ai lati delle cosce. Al termine del movimento, le braccia sono completamente estese. Le braccia devono restare ferme lungo i fianchi, muovendo solo gli avambracci. Espira durante il movimento. Dopo una breve pausa in contrazione, risali lentamente verso il punto di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_Rope_Attachment/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_Rope_Attachment/1.jpg'], 
  NOW()
),
(
  '2e7620a9-3de8-43dd-bf4d-659e1a65c192', 
  'Triceps Pushdown - V-Bar Attachment', 
  'Pushdown per tricipiti con V-Bar', 
  'Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width.
Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position.
Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement.
After a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step.
Repeat for the recommended amount of repetitions.', 
  'Collega una V-Bar a una carrucola alta e afferrala con presa prona a larghezza spalle. In posizione eretta, busto dritto e leggera inclinazione in avanti, tieni le braccia vicine al corpo e perpendicolari al pavimento. Gli avambracci puntano verso la carrucola. I pollici devono trovarsi più in alto rispetto ai mignoli. Questa è la posizione di partenza. Usando i tricipiti, spingi la barra verso il basso fino a toccare la parte anteriore delle cosce, estendendo completamente le braccia. Le braccia devono restare ferme lungo i fianchi, muovendo solo gli avambracci. Espira durante il movimento. Dopo una breve pausa in contrazione, risali lentamente verso il punto di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_V-Bar_Attachment/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_V-Bar_Attachment/1.jpg'], 
  NOW()
),
(
  '7c5fc561-421f-4e42-a88b-e91af6f8d313', 
  'Triceps Stretch', 
  'Stretching per tricipiti', 
  'Reach your hand behind your head, grasp your elbow and gently pull. Hold for 10 to 20 seconds, then switch sides.', 
  'Porta la mano dietro la testa, afferra il gomito e tira delicatamente. Mantieni la posizione per 10-20 secondi, poi cambia lato.', 
  'triceps', 
  'lats', 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Stretch/1.jpg'], 
  NOW()
),
(
  'bd2c63ba-e3b7-416e-a97f-8a8d3d256058', 
  'Tuck Crunch', 
  'Tuck Crunch', 
  'To begin, lie down on the floor or an exercise mat with your back pressed against the floor. Your arms should be lying across your sides with the palms facing down.
Your legs should be crossed by wrapping one ankle around the other. Slowly elevate your legs up in the air until your thighs are perpendicular to the floor with a slight bend at the knees. Note: Your knees and toes should be parallel to the floor as opposed to the thighs.
Move your arms from the floor and cross them so they are resting on your chest. This is the starting position.
While keeping your lower back pressed against the floor, slowly lift your torso. Remember to exhale while perform this part of the exercise.
Slowly begin to lower your torso back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a terra con la schiena ben appoggiata. Braccia distese lungo i fianchi con i palmi rivolti verso il basso. Incrocia una caviglia sull''altra. Solleva lentamente le gambe finché le cosce non sono perpendicolari al pavimento, con le ginocchia leggermente flesse. Porta le braccia incrociate sul petto. Questa è la posizione di partenza. Mantenendo la parte bassa della schiena a contatto col suolo, solleva lentamente il busto espirando. Inizia a scendere lentamente verso la posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tuck_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tuck_Crunch/1.jpg'], 
  NOW()
),
(
  'a7522167-eba5-4cf2-8a46-888f803d269f', 
  'Two-Arm Dumbbell Preacher Curl', 
  'Preacher Curl con due manubri', 
  'Grab a dumbbell with each arm and place the upper arms on top of the preacher bench or the incline bench. The dumbbell should be held at shoulder length. This will be your starting position.
As you breathe in, slowly lower the dumbbells until your upper arm is extended and the biceps is fully stretched.
As you exhale, use the biceps to curl the weights up until your biceps is fully contracted and the dumbbells are at shoulder height.
Squeeze the biceps hard for a second at the contracted position and repeat for the recommended amount of repetitions.', 
  'Afferra un manubrio per mano e appoggia la parte superiore delle braccia su una panca Scott (preacher bench) o una panca inclinata. I manubri devono trovarsi all''altezza delle spalle. Questa è la posizione di partenza. Inspira e abbassa lentamente i manubri fino a estendere completamente le braccia e allungare i bicipiti. Espira e usa i bicipiti per sollevare i pesi fino a quando i bicipiti non sono completamente contratti e i manubri all''altezza delle spalle. Stringi i bicipiti con forza per un secondo in fase di contrazione e ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Dumbbell_Preacher_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Dumbbell_Preacher_Curl/1.jpg'], 
  NOW()
),
(
  'bb65a333-cf3f-47c7-a703-f3ada579831c', 
  'Two-Arm Kettlebell Clean', 
  'Two-Arm Kettlebell Clean', 
  'Place two kettlebells between your feet. To get in the starting position, push your butt back and look straight ahead.
Clean the kettlebells to your shoulders by extending through the legs and hips as you raise the kettlebells towards your shoulders. Rotate your wrists as you do so.
Lower the kettlebells back to the starting position and repeat.', 
  'Posiziona due kettlebell tra i piedi. Per assumere la posizione di partenza, spingi il bacino all''indietro e guarda dritto davanti a te. Esegui il clean dei kettlebell verso le spalle estendendo gambe e anche mentre sollevi i pesi verso l''alto. Ruota i polsi durante il movimento. Riporta i kettlebell nella posizione di partenza e ripeti.', 
  'shoulders', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Clean/1.jpg'], 
  NOW()
),
(
  'eb601d5b-ab59-49eb-bb18-53d6a76fa06f', 
  'Two-Arm Kettlebell Jerk', 
  'Two-Arm Kettlebell Jerk', 
  'Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you swing the kettlebells towards your shoulders. Rotate your wrists as you do so, so that the palms face forward. Squat down a few inches and reverse the motion rapidly driving both kettlebells overhead. Immediately after the initial push, squat down again and get under the kettlebells. Once the kettlebells are locked out, stand upright to complete the exercise.', 
  'Esegui un clean con due kettlebell portandoli alle spalle, estendendo gambe e anche e ruotando i polsi in modo che i palmi siano rivolti in avanti. Fletti leggermente le ginocchia e inverte rapidamente il movimento spingendo entrambi i pesi sopra la testa. Subito dopo la spinta iniziale, fletti nuovamente le ginocchia per posizionarti sotto i kettlebell. Una volta che le braccia sono completamente distese, torna in posizione eretta per completare l''esercizio.', 
  'shoulders', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Jerk/1.jpg'], 
  NOW()
),
(
  '9e8bf787-34b3-404d-8791-0bee6caee552', 
  'Two-Arm Kettlebell Military Press', 
  'Two-Arm Kettlebell Military Press', 
  'Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you swing the kettlebells towards your shoulders. Rotate your wrists as you do so, so that the palms face forward.
Press the kettlebells up and out. As the kettlebells pass your head, lean into the weights so that the kettlebells are racked behind your head. Make sure to contract your lats, butt, and stomach for added stability.', 
  'Esegui un clean con due kettlebell portandoli alle spalle, estendendo gambe e anche e ruotando i polsi in modo che i palmi siano rivolti in avanti. Spingi i kettlebell verso l''alto e verso l''esterno. Quando i pesi superano la testa, inclina leggermente il busto in avanti in modo che i kettlebell si trovino dietro la nuca. Assicurati di contrarre i dorsali, i glutei e l''addome per una maggiore stabilità.', 
  'shoulders', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Military_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Military_Press/1.jpg'], 
  NOW()
),
(
  '36ee3ce2-3dcc-4536-8fe8-db3be94f2463', 
  'Two-Arm Kettlebell Row', 
  'Two-Arm Kettlebell Row', 
  'Place two kettlebells in front of your feet. Bend your knees slightly and then push your butt out as much as possible as you bend over to get in the starting position.
Grab both kettlebells and pull them to your stomach, retracting your shoulder blades and flexing the elbows. Keep your back straight. Lower and repeat.', 
  'Posiziona due kettlebell davanti ai piedi. Fletti leggermente le ginocchia e spingi il bacino all''indietro il più possibile mentre ti inclini in avanti per assumere la posizione di partenza. Afferra entrambi i kettlebell e portali verso l''addome, retrattando le scapole e flettendo i gomiti. Mantieni la schiena dritta. Scendi e ripeti.', 
  'middle back', 
  'biceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Two-Arm_Kettlebell_Row/1.jpg'], 
  NOW()
),
(
  '835cb210-b1f2-4f6e-9e66-9c3ab37fb4b0', 
  'Underhand Cable Pulldowns', 
  'Underhand Cable Pulldowns', 
  'Sit down on a pull-down machine with a wide bar attached to the top pulley. Adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.
Grab the pull-down bar with the palms facing your torso (a supinated grip). Make sure that the hands are placed closer than the shoulder width.
As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.
As you breathe out, pull the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the fully contracted position and keep the elbows close to your body. The upper torso should remain stationary as your bring the bar to you and only the arms should move. The forearms should do no other work other than hold the bar.
After a second on the contracted position, while breathing in, slowly bring the bar back to the starting position when your arms are fully extended and the lats are fully stretched.
Repeat this motion for the prescribed amount of repetitions.', 
  'Siediti alla lat machine con una barra larga collegata alla carrucola superiore. Regola i cuscinetti per le ginocchia in base alla tua altezza per evitare che il corpo venga sollevato dalla resistenza. Afferra la barra con i palmi rivolti verso il busto (presa suina) e le mani a una larghezza inferiore a quella delle spalle. Con le braccia tese, inclina il busto indietro di circa 30 gradi, creando una leggera curvatura nella parte bassa della schiena e spingendo il petto in fuori. Espirando, tira la barra verso la parte superiore del petto, portando spalle e braccia verso il basso e all''indietro. Suggerimento: concentrati sulla contrazione dei muscoli della schiena e mantieni i gomiti vicini al corpo. Il busto deve rimanere immobile. Dopo un secondo di contrazione, inspira e torna lentamente alla posizione di partenza con le braccia completamente distese. Ripeti per il numero di ripetizioni prescritto.', 
  'lats', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Underhand_Cable_Pulldowns/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Underhand_Cable_Pulldowns/1.jpg'], 
  NOW()
),
(
  '7617c1e4-b891-4985-8092-1e5c3af009bf', 
  'Upper Back-Leg Grab', 
  'Upper Back-Leg Grab', 
  'While seated, bend forward to hug your thighs from underneath with both arms.
Keep your knees together and your legs extended out as you bring your chest down to your knees. You can also stretch your middle back by pulling your back away from your knees as your hugging them.', 
  'Da seduto, piegati in avanti e abbraccia le cosce dal basso con entrambe le braccia. Mantieni le ginocchia unite e le gambe distese mentre porti il petto verso le ginocchia. Puoi allungare ulteriormente la parte centrale della schiena tirandola lontano dalle ginocchia mentre le tieni abbracciate.', 
  'hamstrings', 
  'lower back', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upper_Back-Leg_Grab/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upper_Back-Leg_Grab/1.jpg'], 
  NOW()
),
(
  'b76efb9d-4eec-4c91-9e21-06ecd049fc01', 
  'Upper Back Stretch', 
  'Upper Back Stretch', 
  'Clasp fingers together with your thumbs pointing down, round your shoulders as you reach your hands forward.', 
  'Intreccia le dita con i pollici rivolti verso il basso, incurva le spalle e spingi le mani in avanti.', 
  'middle back', 
  'middle back', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upper_Back_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upper_Back_Stretch/1.jpg'], 
  NOW()
),
(
  'c873aa84-3071-448b-8707-b122d29abe5d', 
  'Upright Barbell Row', 
  'Upright Barbell Row', 
  'Grasp a barbell with an overhand grip that is slightly less than shoulder width. The bar should be resting on the top of your thighs with your arms extended and a slight bend in your elbows. Your back should also be straight. This will be your starting position.
Now exhale and use the sides of your shoulders to lift the bar, raising your elbows up and to the side. Keep the bar close to your body as you raise it. Continue to lift the bar until it nearly touches your chin. Tip: Your elbows should drive the motion, and should always be higher than your forearms. Remember to keep your torso stationary and pause for a second at the top of the movement.
Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Afferra un bilanciere con una presa prona leggermente inferiore alla larghezza delle spalle. Il bilanciere deve poggiare sulla parte superiore delle cosce con le braccia tese e i gomiti leggermente flessi. Mantieni la schiena dritta. Espirando, usa i deltoidi laterali per sollevare il bilanciere, portando i gomiti verso l''alto e verso l''esterno. Mantieni il bilanciere vicino al corpo fino a sfiorare quasi il mento. Suggerimento: sono i gomiti a guidare il movimento e devono sempre rimanere più alti degli avambracci. Mantieni il busto fermo e fai una pausa di un secondo nella parte alta. Scendi lentamente espirando e ripeti.', 
  'shoulders', 
  'traps', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Barbell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Barbell_Row/1.jpg'], 
  NOW()
),
(
  '5f991947-be6b-433d-a8e3-c507baa5c1fd', 
  'Upright Cable Row', 
  'Upright Cable Row', 
  'Grasp a straight bar cable attachment that is attached to a low pulley with a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The bar should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.
Use your side shoulders to lift the cable bar as you exhale. The bar should be close to the body as you move it up. Continue to lift it until it nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the bar, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.
Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Afferra una barra dritta collegata a una carrucola bassa con una presa prona (palmi verso le cosce) leggermente inferiore alla larghezza delle spalle. Il bilanciere poggia sulle cosce, braccia tese con gomiti leggermente flessi e schiena dritta. Espirando, usa i deltoidi laterali per sollevare la barra, mantenendola vicina al corpo fino a sfiorare il mento. Suggerimento: i gomiti devono guidare il movimento e rimanere più alti degli avambracci. Mantieni il busto fermo e fai una pausa di un secondo in alto. Scendi lentamente in fase di inspirazione e ripeti.', 
  'traps', 
  'shoulders', 
  'cable', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Cable_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Cable_Row/1.jpg'], 
  NOW()
),
(
  'a8d4df3d-8438-4cae-b75d-9102fe1971b4', 
  'Upright Row - With Bands', 
  'Upright Row - With Bands', 
  'To begin, stand on an exercise band so that tension begins at arm''s length. Grasp the handles using a pronated (palms facing your thighs) grip that is slightly less than shoulder width. The handles should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.
Use your side shoulders to lift the handles as you exhale. The handles should be close to the body as you move them up. Continue to lift the handles until they nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the handles, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.
Lower the handles back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Mettiti in piedi sopra una fascia elastica in modo che la tensione inizi a braccia distese. Afferra le maniglie con una presa prona (palmi verso le cosce) leggermente inferiore alla larghezza delle spalle, con le maniglie che poggiano sulle cosce. Braccia tese, gomiti leggermente flessi e schiena dritta. Espirando, solleva le maniglie usando i deltoidi laterali, mantenendole vicine al corpo fino a sfiorare il mento. Suggerimento: sono i gomiti a guidare il movimento, restando sempre più alti degli avambracci. Mantieni il busto fermo e fai una pausa di un secondo in alto. Scendi lentamente inspirando e ripeti.', 
  'traps', 
  'shoulders', 
  'bands', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Row_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Row_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '56b8b949-0e75-4af5-b50c-470152e8d711', 
  'Upward Stretch', 
  'Allungamento verso l''alto', 
  'Extend both hands straight above your head, palms touching.
Slowly push your hands up and back, keeping your back straight.', 
  'Estendi entrambe le mani direttamente sopra la testa, con i palmi che si toccano. Spingi lentamente le mani verso l''alto e all''indietro, mantenendo la schiena dritta.', 
  'shoulders', 
  'chest', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upward_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upward_Stretch/1.jpg'], 
  NOW()
),
(
  '9665c4a3-1bc2-4628-9010-3c8b752dcff3', 
  'V-Bar Pulldown', 
  'V-Bar Pulldown', 
  'Sit down on a pull-down machine with a V-Bar attached to the top pulley.
Adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.
Grab the V-bar with the palms facing each other (a neutral grip). Stick your chest out and lean yourself back slightly (around 30-degrees) in order to better engage the lats. This will be your starting position.
Using your lats, pull the bar down as you squeeze your shoulder blades. Continue until your chest nearly touches the V-bar. Exhale as you execute this motion. Tip: Keep the torso stationary throughout the movement.
After a second hold on the contracted position, slowly bring the bar back to the starting position as you breathe in.
Repeat for the prescribed number of repetitions.', 
  'Siediti alla lat machine con una V-Bar collegata alla carrucola superiore. Regola il cuscinetto per le ginocchia in base alla tua altezza; questo impedirà al corpo di sollevarsi a causa della resistenza. Afferra la V-Bar con i palmi rivolti l''uno verso l''altro (presa neutra). Spingi il petto in fuori e inclinati leggermente all''indietro (circa 30 gradi) per attivare meglio i dorsali. Questa è la posizione di partenza. Usando i dorsali, tira la barra verso il basso contraendo le scapole. Continua finché il petto non sfiora la V-Bar, espirando durante il movimento. Suggerimento: mantieni il busto fermo per tutta l''esecuzione. Dopo una breve pausa di un secondo nella posizione di massima contrazione, torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni prescritto.', 
  'lats', 
  'biceps', 
  'cable', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/V-Bar_Pulldown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/V-Bar_Pulldown/1.jpg'], 
  NOW()
),
(
  'cf31baa7-83b5-4e91-bb77-698c3c4cd093', 
  'V-Bar Pullup', 
  'V-Bar Pullup', 
  'Start by placing the middle of the V-bar in the middle of the pull-up bar (assuming that the pull-up station you are using does not have neutral grip handles). The V-Bar handles will be facing down so that you can hang from the pull-up bar through the use of the handles.
Once you securely place the V-bar, take a hold of the bar from each side and hang from it. Stick your chest out and lean yourself back slightly in order to better engage the lats. This will be your starting position.
Using your lats, pull your torso up while leaning your head back slightly so that you do not hit yourself with the chin-up bar. Continue until your chest nearly touches the V-bar. Exhale as you execute this motion.
After a second hold on the contracted position, slowly lower your body back to the starting position as you breathe in.
Repeat for the prescribed number of repetitions.', 
  'Posiziona il centro della V-Bar al centro della sbarra per trazioni (assumendo che la postazione non disponga già di prese neutre). Le impugnature della V-Bar devono essere rivolte verso il basso per permetterti di appenderti. Una volta fissata, afferra la sbarra da entrambi i lati e sospenditi. Spingi il petto in fuori e inclinati leggermente all''indietro per coinvolgere meglio i dorsali. Questa è la posizione di partenza. Usando i dorsali, solleva il busto inclinando leggermente la testa all''indietro per non urtare la sbarra. Continua finché il petto non sfiora la V-Bar, espirando durante il movimento. Dopo una pausa di un secondo in contrazione, abbassati lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni prescritto.', 
  'lats', 
  'biceps', 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/V-Bar_Pullup/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/V-Bar_Pullup/1.jpg'], 
  NOW()
),
(
  'ea6a073b-7338-4e42-95d2-5f46006c09cd', 
  'Vertical Swing', 
  'Vertical Swing', 
  'Allow the dumbbell to hang at arms length between your legs, holding it with both hands. Keep your back straight and your head up.
Swing the dumbbell between your legs, flexing at the hips and bending the knees slightly.
Powerfully reverse the motion by extending at the hips, knees, and ankles to propel yourself upward, swinging the dumbell over your head.
As you land, absorb the impact through your legs and draw the dumbbell to your torso before the next repetition.', 
  'Lascia che il manubrio penda a braccia tese tra le gambe, impugnandolo con entrambe le mani. Mantieni la schiena dritta e la testa alta. Oscilla il manubrio tra le gambe flettendo le anche e piegando leggermente le ginocchia. Inverti il movimento con potenza estendendo anche, ginocchia e caviglie per slanciare il manubrio sopra la testa. All''atterraggio, assorbi l''impatto con le gambe e riporta il manubrio verso il busto prima della ripetizione successiva.', 
  'hamstrings', 
  'glutes', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Vertical_Swing/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Vertical_Swing/1.jpg'], 
  NOW()
),
(
  '4cc6695e-c2a5-4bde-aced-5188d7e51307', 
  'Walking, Treadmill', 
  'Camminata su tapis roulant', 
  'To begin, step onto the treadmill and select the desired option from the menu. Most treadmills have a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Elevation can be adjusted to change the intensity of the workout.
Treadmills offer convenience, cardiovascular benefits, and usually have less impact than walking outside. When walking, you should move at a moderate to fast pace, not a leisurely one. Being an activity of lower intensity, walking doesn''t burn as many calories as some other activities, but still provides great benefit. A 150 lb person will burn about 175 calories walking 4 miles per hour for 30 minutes, compared to 450 calories running twice as fast. Maintain proper posture as you walk, and only hold onto the handles when necessary, such as when dismounting or checking your heart rate.', 
  'Per iniziare, sali sul tapis roulant e seleziona l''opzione desiderata dal menu. La maggior parte dei tapis roulant ha un''impostazione manuale o programmi preimpostati. Solitamente puoi inserire età e peso per stimare le calorie bruciate. L''inclinazione può essere regolata per variare l''intensità. Il tapis roulant offre comodità e benefici cardiovascolari, solitamente con un impatto minore rispetto alla camminata all''aperto. Mantieni un ritmo da moderato a veloce, non una passeggiata rilassata. Sebbene sia un''attività a bassa intensità, offre ottimi benefici. Una persona di circa 68 kg brucerà circa 175 calorie camminando a 6,4 km/h per 30 minuti, contro le 450 calorie della corsa a velocità doppia. Mantieni una postura corretta e usa i manubri solo se necessario, come per scendere o controllare la frequenza cardiaca.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Walking_Treadmill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Walking_Treadmill/1.jpg'], 
  NOW()
),
(
  '6da6f7ac-2da1-48ec-ad48-2a0e79678b57', 
  'Weighted Ball Hyperextension', 
  'Iperestensioni su fitball con sovraccarico', 
  'To begin, lie down on an exercise ball with your torso pressing against the ball and parallel to the floor. The ball of your feet should be pressed against the floor to help keep you balanced. Place a weighted plate under your chin or behind your neck. This is the starting position.
Slowly raise your torso up by bending at the waist and lower back. Remember to exhale during this movement.
Hold the contraction on your lower back for a second and lower your torso back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions prescribed in your program.', 
  'Sdraiati sulla fitball con il busto appoggiato alla palla e parallelo al pavimento. La punta dei piedi deve poggiare a terra per mantenere l''equilibrio. Tieni un disco di peso sotto il mento o dietro la nuca. Questa è la posizione di partenza. Solleva lentamente il busto flettendo la vita e la parte bassa della schiena, espirando durante il movimento. Mantieni la contrazione per un secondo, quindi torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni consigliato nel tuo programma.', 
  'lower back', 
  'glutes', 
  'exercise ball', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Ball_Hyperextension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Ball_Hyperextension/1.jpg'], 
  NOW()
),
(
  '10f7a0ee-ab83-4501-add5-3f90790df687', 
  'Weighted Ball Side Bend', 
  'Side bend su fitball con sovraccarico', 
  'To begin, lie down on an exercise ball with your left side of the torso (waist, hips and shoulder) pressed against the ball.
Your feet should be on the floor while your legs are crossed and hanging from the ball. Hold a weighted plate with your right hand directly to the right side of your head. Tip: Make sure the smooth side of the plate is resting against your head.
Place your left arm across your torso so that your palm is on your obliques. There should be a right angle between your left forearm and upper arm. This is the starting position.
Raise the side of your torso up by laterally flexing at the waist while exhaling.
Hold the contraction for a second and slowly lower yourself back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions.
Switch sides and repeat the exercise.', 
  'Sdraiati su una fitball con il fianco sinistro (vita, anca e spalla) premuto contro la palla. I piedi devono essere a terra con le gambe incrociate. Tieni un disco di peso con la mano destra vicino alla testa. Suggerimento: assicurati che la parte liscia del disco sia a contatto con la testa. Metti il braccio sinistro sul busto con il palmo sugli obliqui; il gomito sinistro deve formare un angolo retto. Questa è la posizione di partenza. Solleva il fianco eseguendo una flessione laterale della vita ed espirando. Mantieni la contrazione per un secondo, quindi scendi lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato, poi cambia lato.', 
  'abdominals', 
  NULL, 
  'exercise ball', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Ball_Side_Bend/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Ball_Side_Bend/1.jpg'], 
  NOW()
),
(
  '4052ed72-12e9-4207-b2af-4acfee15e47d', 
  'Weighted Bench Dip', 
  'Dip su panca con sovraccarico', 
  'For this exercise you will need to place a bench behind your back and another one in front of you. With the benches perpendicular to your body, hold on to one bench on its edge with the hands close to your body, separated at shoulder width. Your arms should be fully extended.
The legs will be extended forward on top of the other bench. Your legs should be parallel to the floor while your torso is to be perpendicular to the floor. Have your partner place the dumbbell on your lap. Note: This exercise is best performed with a partner as placing the weight on your lap can be challenging and cause injury without assistance. This will be your starting position.
Slowly lower your body as you inhale by bending at the elbows until you lower yourself far enough to where there is an angle slightly smaller than 90 degrees between the upper arm and the forearm. Tip: Keep the elbows as close as possible throughout the movement. Forearms should always be pointing down.
Using your triceps to bring your torso up again, lift yourself back to the starting position while exhaling.
Repeat for the recommended amount of repetitions.', 
  'Posiziona una panca dietro di te e una davanti. Con le panche perpendicolari al corpo, afferra il bordo di una panca con le mani larghe quanto le spalle, braccia tese. Le gambe devono essere distese sulla panca davanti, parallele al pavimento, mentre il busto rimane perpendicolare. Fatti assistere da un partner per posizionare un manubrio sulle tue cosce. Nota: l''esercizio va eseguito con un partner per evitare infortuni. Questa è la posizione di partenza. Scendi lentamente inspirando, piegando i gomiti finché non formano un angolo leggermente inferiore a 90 gradi. Suggerimento: tieni i gomiti il più vicino possibile al corpo e gli avambracci sempre rivolti verso il basso. Usa i tricipiti per spingerti verso l''alto ed espirare. Ripeti per le ripetizioni consigliate.', 
  'triceps', 
  'chest', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Bench_Dip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Bench_Dip/1.jpg'], 
  NOW()
),
(
  '62166b03-b5d1-42b5-ba47-462e54f60ece', 
  'Weighted Crunches', 
  'Crunch con sovraccarico', 
  'Lie flat on your back with your feet flat on the ground or resting on a bench with your knees bent at a 90 degree angle.
Hold a weight to your chest, or you may hold it extended above your torso. This will be your starting position.
Now, exhale and slowly begin to roll your shoulders off the floor. Your shoulders should come up off the floor about 4 inches while your lower back remains on the floor.
At the top of the movement, flex your abdominals and hold for a brief pause.
Then inhale and slowly lower yourself back down to the starting position.', 
  'Sdraiati sulla schiena con i piedi appoggiati a terra o su una panca, ginocchia piegate a 90 gradi. Tieni un peso contro il petto o esteso sopra il busto. Questa è la posizione di partenza. Espira e solleva lentamente le spalle da terra di circa 10 cm, mantenendo la parte bassa della schiena a contatto col suolo. Al culmine, contrai gli addominali e tieni per una breve pausa. Inspira e torna lentamente alla posizione di partenza.', 
  'abdominals', 
  NULL, 
  'medicine ball', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Crunches/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Crunches/1.jpg'], 
  NOW()
),
(
  '48090db8-947b-4d5b-863d-04ab8826516c', 
  'Weighted Jump Squat', 
  'Jump squat con sovraccarico', 
  'Position a lightly loaded barbell across the back of your shoulders. You could also use a weighted vest, sandbag, or other type of resistance for this exercise.
The weight should be light enough that it doesn''t slow you down significantly. Your feet should be just outside of shoulder width with your head and chest up. This will be your starting position.
Using a countermovement, squat partially down and immediately reverse your direction to explode off of the ground, extending through your hips, knees, and ankles. Maintain good posture throughout the jump.
As you return to the ground, absorb the impact through your legs.', 
  'Posiziona un bilanciere leggermente caricato sulle spalle, oppure usa un giubbotto zavorrato, una sandbag o altra resistenza. Il peso deve essere abbastanza leggero da non rallentare significativamente il movimento. Piedi appena oltre la larghezza delle spalle, testa e petto alti. Questa è la posizione di partenza. Esegui un mezzo squat e inverti immediatamente il movimento esplodendo verso l''alto, estendendo anche, ginocchia e caviglie. Mantieni una buona postura durante il salto. All''atterraggio, assorbi l''impatto con le gambe.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Jump_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Jump_Squat/1.jpg'], 
  NOW()
),
(
  '2cdd2229-6d4e-4b6c-85e9-4f8c727d1f1e', 
  'Weighted Pull Ups', 
  'Trazioni alla sbarra con sovraccarico', 
  'Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip.
You''ll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position.
Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing yourshoulder blades back and down as you reach the top contracted position.
After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched.', 
  'Aggancia un peso a una cintura da dip e fissalo in vita. Afferra la sbarra per le trazioni con i palmi rivolti in avanti. Per una presa media, le mani devono essere posizionate alla larghezza delle spalle. Entrambe le braccia devono essere tese davanti a te mentre impugni la sbarra. Inclina il busto all''indietro di circa 30 gradi, crea una curvatura nella zona lombare e spingi il petto in fuori. Questa è la posizione di partenza. Espira e solleva il busto finché la testa non supera l''altezza delle mani. Concentrati sulla contrazione delle scapole verso il basso e all''indietro nel punto di massima chiusura. Dopo una breve pausa in contrazione, inspira e abbassa lentamente il busto fino alla posizione iniziale, con le braccia distese e i dorsali completamente allungati.', 
  'lats', 
  'biceps', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Pull_Ups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Pull_Ups/1.jpg'], 
  NOW()
),
(
  'bd9c389b-3d7e-4991-9f98-c1671595f195', 
  'Weighted Sissy Squat', 
  'Sissy Squat con sovraccarico', 
  'Standing upright, with feet at shoulder width and toes raised, use one hand to hold onto the beams of a squat rack and the opposite arm to hold a plate on top of your chest. This is your starting position.
As you use one arm to hold yourself, bend at the knees and slowly lower your torso toward the ground by bringing your pelvis and knees forward. Inhale as you go down and stop when your upper and lower legs almost create a 90-degree angle. Hold the stretch position for a second.
After your one second hold, use your thigh muscles to bring your torso back up to the starting position. Exhale as you move up.
Repeat for the recommended amount of times.', 
  'In piedi, con i piedi alla larghezza delle spalle e le punte sollevate, usa una mano per sorreggerti alla struttura del rack e l''altra per tenere un disco contro il petto. Questa è la posizione di partenza. Mentre ti sorreggi con un braccio, fletti le ginocchia e abbassa lentamente il busto verso terra, portando bacino e ginocchia in avanti. Inspira durante la discesa e fermati quando le gambe formano un angolo di circa 90 gradi. Mantieni la posizione di allungamento per un secondo. Dopo la pausa, usa i muscoli delle cosce per riportare il busto alla posizione iniziale espirando. Ripeti per il numero di volte consigliato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Sissy_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Sissy_Squat/1.jpg'], 
  NOW()
),
(
  'ba0f23ab-ffd5-4fbd-b807-552b2a102fee', 
  'Weighted Sit-Ups - With Bands', 
  'Sit-up con sovraccarico (con elastici)', 
  'Start out by strapping the bands around the base of the decline bench. Place the handles towards the inside of the decline bench so that when lying down, you can reach for both of them.
Position your legs through the decline machine until they are secured. Now reach for the exercise bands with both hands. Use a pronated (palms forward) grip to grasp the handles. Position them near your collar bone and rotate your wrist to a neutral grip (palms facing the torso). Note: Your arms should remain stationary throughout the exercise. This is the starting position.
Move your torso upward until your upper body is perpendicular to the floor while exhaling. Hold the contraction for a second and lower your upper body back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions.', 
  'Fissa gli elastici alla base della panca inclinata. Posiziona le maniglie verso l''interno della panca in modo da poterle afferrare una volta sdraiato. Inserisci le gambe nell''apposito supporto della panca finché non sono bloccate. Afferra le maniglie degli elastici con una presa prona (palmi in avanti). Portale vicino alle clavicole e ruota i polsi in una presa neutra (palmi rivolti verso il busto). Nota: le braccia devono rimanere ferme durante tutto l''esercizio. Questa è la posizione di partenza. Espirando, solleva il busto finché non è perpendicolare al pavimento. Mantieni la contrazione per un secondo, quindi inspira e torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Sit-Ups_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Sit-Ups_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '93314cd7-5819-42c0-94f8-7c61586f98c5', 
  'Weighted Squat', 
  'Squat con sovraccarico', 
  'Start by positioning two flat benches shoulder width apart from each other. Stand on top of them and wrap the weighted belt around your waist with the amount of weight you feel comfortable with. Make sure your toes are facing out.
Once you are standing straight up with the weight hanging in between your legs, position your arms so that they are fully extended to the side of your body. This is the starting position.
Begin by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that are perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to move the body back up by pushing the floor of the flat bench with the ball of your foot mainly as you straighten the legs again and go back to the starting position. Exhale as you perform this portion of the exercise.
Repeat for the recommended amount of repetitions.', 
  'Posiziona due panche piane alla larghezza delle spalle. Sali sopra di esse e allaccia la cintura con sovraccarico in vita, utilizzando il peso desiderato. Assicurati che le punte dei piedi siano rivolte verso l''esterno. In posizione eretta, con il peso che pende tra le gambe, tieni le braccia completamente distese lungo i fianchi. Questa è la posizione di partenza. Inizia a flettere le ginocchia mantenendo la postura dritta e lo sguardo alto. Scendi finché l''angolo tra coscia e polpaccio è leggermente inferiore a 90 gradi (le cosce devono essere sotto il parallelo rispetto al pavimento). Inspira durante questa fase. Consiglio: se eseguito correttamente, la parte anteriore delle ginocchia deve formare una linea immaginaria retta con le punte dei piedi. Se le ginocchia superano questa linea, stai sovraccaricando l''articolazione in modo errato. Spingi sulla parte anteriore del piede per risalire, estendendo le gambe fino alla posizione iniziale ed espirando. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Squat/1.jpg'], 
  NOW()
),
(
  '7056dc36-84a0-479d-a08d-5b2471fb0603', 
  'Wide-Grip Barbell Bench Press', 
  'Panca piana bilanciere presa larga', 
  'Lie back on a flat bench with feet firm on the floor. Using a wide, pronated (palms forward) grip that is around 3 inches away from shoulder width (for each hand), lift the bar from the rack and hold it straight over you with your arms locked. The bar will be perpendicular to the torso and the floor. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on your middle chest.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati su una panca piana con i piedi ben saldi a terra. Utilizza una presa prona larga (circa 7-8 cm oltre la larghezza delle spalle per lato), stacca il bilanciere e tienilo sopra di te a braccia tese. Il bilanciere deve essere perpendicolare al busto e al pavimento. Questa è la posizione di partenza. Inspira e scendi lentamente finché il bilanciere tocca la parte centrale del petto. Dopo un secondo di pausa, espira e spingi il bilanciere verso l''alto usando i pettorali. Blocca le braccia, contrai i pettorali per un secondo, poi ricomincia a scendere lentamente. Consiglio: la fase di discesa dovrebbe durare il doppio di quella di salita. Ripeti per le ripetizioni prescritte.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Barbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Barbell_Bench_Press/1.jpg'], 
  NOW()
),
(
  '8ec5472b-2dbf-484d-a605-d98e8d965194', 
  'Wide-Grip Decline Barbell Bench Press', 
  'Panca declinata bilanciere presa larga', 
  'Lie back on a decline bench with the feet securely locked at the front of the bench. Using a wide, pronated (palms forward) grip that is around 3 inches away from shoulder width (for each hand), lift the bar from the rack and hold it straight over you with your arms locked. The bar will be perpendicular to the torso and the floor. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on your lower chest.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati su una panca declinata con i piedi bloccati nell''apposito supporto. Utilizza una presa prona larga (circa 7-8 cm oltre la larghezza delle spalle per lato), stacca il bilanciere e tienilo sopra di te a braccia tese. Il bilanciere deve essere perpendicolare al busto e al pavimento. Questa è la posizione di partenza. Inspira e scendi lentamente finché il bilanciere tocca la parte bassa del petto. Dopo un secondo di pausa, espira e spingi il bilanciere verso l''alto usando i pettorali. Blocca le braccia, contrai i pettorali per un secondo, poi ricomincia a scendere lentamente. Consiglio: la fase di discesa dovrebbe durare il doppio di quella di salita. Ripeti per le ripetizioni prescritte.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Decline_Barbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Decline_Barbell_Bench_Press/1.jpg'], 
  NOW()
),
(
  'a33a0be3-428c-4edd-93a6-7c9192af2f72', 
  'Wide-Grip Decline Barbell Pullover', 
  'Pullover con bilanciere su panca declinata presa larga', 
  'Lie down on a decline bench with both legs securely locked in position. Reach for the barbell behind the head using a pronated grip (palms facing out). Make sure to grab the barbell wider than shoulder width apart for this exercise. Slowly lift the barbell up from the floor by using your arms.
When positioned properly, your arms should be fully extended and perpendicular to the floor. This is the starting position.
Begin by moving the barbell back down in a semicircular motion as if you were going to place it on the floor, but instead, stop when the arms are parallel to the floor. Tip: Keep the arms fully extended at all times. The movement should only happen at the shoulder joint. Inhale as you perform this portion of the movement.
Now bring the barbell up while exhaling until you are back at the starting position. Remember to keep full control of the barbell at all times.
Repeat the movement for the prescribed amount of repetitions of your training program.
When finished with your set, slowly lower the barbell back down until it is level with your head and release it.', 
  'Sdraiati su una panca declinata con le gambe ben bloccate. Afferra il bilanciere dietro la testa con una presa prona larga (più ampia delle spalle). Solleva lentamente il bilanciere da terra usando le braccia. Una volta posizionato correttamente, le braccia devono essere tese e perpendicolari al pavimento. Questa è la posizione di partenza. Abbassa il bilanciere con un movimento semicircolare come se volessi portarlo a terra, ma fermati quando le braccia sono parallele al pavimento. Consiglio: mantieni le braccia completamente tese per tutto il movimento, che deve avvenire solo dall''articolazione della spalla. Inspira durante la discesa. Espirando, riporta il bilanciere alla posizione iniziale mantenendo il pieno controllo. Ripeti per il numero di ripetizioni prescritte. Al termine della serie, abbassa lentamente il bilanciere fino all''altezza della testa e riponilo.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Decline_Barbell_Pullover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Decline_Barbell_Pullover/1.jpg'], 
  NOW()
),
(
  '9063524c-404a-4a20-8024-3654d19d4153', 
  'Wide-Grip Lat Pulldown', 
  'Lat machine presa larga', 
  'Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.
Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.
As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.
As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the bar; therefore do not try to pull down the bar using the forearms.
After a second at the contracted position squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.
Repeat this motion for the prescribed amount of repetitions.', 
  'Siediti alla lat machine con la barra larga fissata alla carrucola. Regola il bloccaggio per le ginocchia in base alla tua altezza per evitare di essere sollevato dal carico. Afferra la barra con i palmi rivolti in avanti usando la presa prescritta (larga significa oltre la larghezza delle spalle). Con le braccia tese davanti a te, inclina il busto all''indietro di circa 30 gradi, inarca leggermente la zona lombare e spingi il petto in fuori. Questa è la posizione di partenza. Espira e tira la barra verso la parte alta del petto portando spalle e braccia verso il basso e indietro. Consiglio: concentrati sulla contrazione dei muscoli della schiena nel punto di massima chiusura. Il busto deve rimanere fermo e solo le braccia devono muoversi. Non tirare usando gli avambracci. Dopo un secondo di contrazione, torna lentamente alla posizione iniziale espandendo i dorsali. Inspira durante questa fase. Ripeti per le ripetizioni prescritte.', 
  'lats', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/1.jpg'], 
  NOW()
),
(
  '339fdf34-b2cc-418e-ab68-c0e48af17983', 
  'Wide-Grip Pulldown Behind The Neck', 
  'Lat machine dietro la nuca presa larga', 
  'Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.
Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.
As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso and head forward. Think of an imaginary line from the center of the bar down to the back of your neck. This is your starting position.
As you breathe out, bring the bar down until it touches the back of your neck by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the bar; therefore do not try to pull down the bar using the forearms.
After a second on the contracted position squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.
Repeat this motion for the prescribed amount of repetitions.', 
  'Siediti alla lat machine e regola il bloccaggio per le ginocchia. Afferra la barra con presa prona larga (più ampia delle spalle). Con le braccia tese, inclina leggermente busto e testa in avanti, immaginando una linea retta dal centro della barra alla base del collo. Questa è la posizione di partenza. Espira e tira la barra verso la nuca portando spalle e braccia verso il basso e indietro. Consiglio: contrai i muscoli della schiena nel punto di massima chiusura. Il busto deve rimanere fermo e solo le braccia devono muoversi; gli avambracci devono solo sostenere la presa. Dopo un secondo di contrazione, risali lentamente fino alla posizione iniziale, estendendo completamente i dorsali. Inspira durante la risalita. Ripeti per le ripetizioni prescritte.', 
  'lats', 
  'biceps', 
  'cable', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Pulldown_Behind_The_Neck/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Pulldown_Behind_The_Neck/1.jpg'], 
  NOW()
),
(
  '9e19b9f1-00ad-4951-9e33-b62cae9a4f18', 
  'Wide-Grip Rear Pull-Up', 
  'Trazioni dietro la nuca presa larga', 
  'Grab the pull-up bar with the palms facing forward using a wide grip.
As you have both arms extended in front of you holding the bar, bring your torso forward and head so that there is an imaginary line from the pull-up bar to the back of your neck. This is your starting position.
Pull your torso up until the bar is near the back of your neck. To do this, draw the shoulders and upper arms down and back while slightly leaning your head forward. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.
After a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.
Repeat this motion for the prescribed amount of repetitions.', 
  'Afferra la sbarra per le trazioni con una presa prona larga. Con le braccia tese, inclina busto e testa in avanti in modo da creare una linea immaginaria dalla sbarra alla base del collo. Questa è la posizione di partenza. Tira il busto verso l''alto finché la sbarra non è vicino alla nuca, portando spalle e braccia verso il basso e indietro e inclinando leggermente la testa in avanti. Espira durante questa fase. Consiglio: concentrati sulla contrazione dei muscoli della schiena nel punto di massima chiusura. Il busto deve rimanere fermo durante il movimento, che deve essere guidato solo dalle braccia. Dopo un secondo di contrazione, inspira e scendi lentamente fino alla posizione iniziale, estendendo completamente i dorsali. Ripeti per le ripetizioni prescritte.', 
  'lats', 
  'biceps', 
  'body only', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Rear_Pull-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Rear_Pull-Up/1.jpg'], 
  NOW()
),
(
  'd50d03a8-b74b-4e99-aa8b-7ec336f2e627', 
  'Wide-Grip Standing Barbell Curl', 
  'Curl con Bilanciere in Piedi Presa Larga', 
  'Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position.
While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.
Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.
Slowly begin to bring the bar back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi, con il busto eretto, impugna un bilanciere con una presa larga. I palmi delle mani devono essere rivolti in avanti e i gomiti vicini al busto. Questa è la posizione di partenza. Tenendo le braccia ferme, fletti i pesi in avanti contraendo i bicipiti ed espirando. Consiglio: solo gli avambracci devono muoversi. Continua il movimento finché i bicipiti non sono completamente contratti e il bilanciere è all''altezza delle spalle. Mantieni la posizione di contrazione per un secondo contraendo intensamente i bicipiti. Torna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Standing_Barbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Standing_Barbell_Curl/1.jpg'], 
  NOW()
),
(
  '4c535b6d-d98f-42f9-9536-ecc20c2eec06', 
  'Wide Stance Barbell Squat', 
  'Squat con Bilanciere a Gambe Larghe', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a wider-than-shoulder-width stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance, and also maintain a straight back. This will be your starting position.
Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Questo esercizio va eseguito preferibilmente all''interno di un rack per motivi di sicurezza. Regola il bilanciere su un''altezza adeguata. Posizionati sotto il bilanciere e appoggialo sulla parte posteriore delle spalle (appena sotto il collo). Impugna il bilanciere con entrambe le mani e sollevalo dal rack spingendo con le gambe e raddrizzando il busto. Allontanati dal rack e posiziona le gambe con un''apertura superiore alla larghezza delle spalle, con le punte dei piedi leggermente rivolte verso l''esterno. Mantieni lo sguardo fisso in avanti e la schiena dritta. Questa è la posizione di partenza. Scendi lentamente flettendo le ginocchia, mantenendo il busto dritto. Continua fino a quando l''angolo tra le cosce e i polpacci è leggermente inferiore a 90 gradi (le cosce scendono sotto il parallelo rispetto al pavimento). Inspira durante la discesa. Consiglio: le ginocchia devono allinearsi verticalmente con le punte dei piedi; se le ginocchia superano questa linea, l''esercizio è eseguito in modo errato e sovraccarica l''articolazione. Risali espirando, spingendo con i talloni fino alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide_Stance_Barbell_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide_Stance_Barbell_Squat/1.jpg'], 
  NOW()
),
(
  '5fd4808d-356f-4e8e-bfb6-9c3253d0c662', 
  'Wide Stance Stiff Legs', 
  'Stacchi a Gambe Tese con Posizione Larga', 
  'Begin with a barbell loaded on the floor. Adopt a wide stance, and then bend at the hips to grab the bar. Your hips should be as far back as possible, and your legs nearly straight. Keep your back straight, and your head and chest up. This will be your starting position.
Begin the movement be engaging the hips, driving them forward as you allow the arms to hang straight. Continue until you are standing straight up, and then slowly return the weight to the starting position. For successive reps, the weight need not touch the floor.', 
  'Parti con un bilanciere a terra. Assumi una posizione larga delle gambe e flettiti sui fianchi per afferrare il bilanciere. Porta i fianchi il più indietro possibile mantenendo le gambe quasi tese. Mantieni la schiena dritta e testa e petto alti. Questa è la posizione di partenza. Esegui il movimento spingendo i fianchi in avanti e lasciando le braccia distese. Continua finché non sei completamente in piedi, poi torna lentamente alla posizione iniziale. Per le ripetizioni successive, non è necessario che il peso tocchi il pavimento.', 
  'hamstrings', 
  'adductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide_Stance_Stiff_Legs/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide_Stance_Stiff_Legs/1.jpg'], 
  NOW()
),
(
  'bd7ac11d-cb37-4068-becd-91757d6e561a', 
  'Wind Sprints', 
  'Wind Sprints (Corsa sul posto alla sbarra)', 
  'Hang from a pull-up bar using a pronated grip. Your arms and legs should be extended. This will be your starting position.
Begin by quickly raising one knee as high as you can. Do not swing your body or your legs. 3
Immediately reverse the motion, returning that leg to the starting position. Simultaneously raise the opposite knee as high as possible.
Continue alternating between legs until the set is complete.', 
  'Appenditi a una sbarra per trazioni con una presa prona. Braccia e gambe devono essere distese. Questa è la posizione di partenza. Solleva rapidamente un ginocchio il più in alto possibile, evitando di oscillare con il corpo o con le gambe. Inverti immediatamente il movimento, riportando la gamba nella posizione iniziale e sollevando contemporaneamente l''altro ginocchio il più in alto possibile. Continua ad alternare le gambe finché la serie non è completata.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wind_Sprints/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wind_Sprints/1.jpg'], 
  NOW()
),
(
  'c6cd8b9a-d560-4a75-8d3a-6b3cf130a0e7', 
  'Windmills', 
  'Windmills (a terra)', 
  'Lie on your back with your arms extended out to the sides and your legs straight. This will be your starting position.
Lift one leg and quickly cross it over your body, attempting to touch the ground near the opposite hand.
Return to the starting position, and repeat with the opposite leg. Continue to alternate for 10-20 repetitions.', 
  'Sdraiati sulla schiena con le braccia distese lateralmente e le gambe dritte. Questa è la posizione di partenza. Solleva una gamba e portala rapidamente oltre il corpo, cercando di toccare il suolo vicino alla mano opposta. Torna alla posizione di partenza e ripeti con l''altra gamba. Continua ad alternare per 10-20 ripetizioni.', 
  'abductors', 
  'glutes', 
  NULL, 
  'intermediate', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Windmills/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Windmills/1.jpg'], 
  NOW()
),
(
  '77246f71-59ed-4018-a42d-833adb584ac1', 
  'World''s Greatest Stretch', 
  'World''s Greatest Stretch', 
  'This is a three-part stretch. Begin by lunging forward, with your front foot flat on the ground and on the toes of your back foot. With your knees bent, squat down until your knee is almost touching the ground. Keep your torso erect, and hold this position for 10-20 seconds.
Now, place the arm on the same side as your front leg on the ground, with the elbow next to the foot. Your other hand should be placed on the ground, parallel to your lead leg, to help support you during this portion of the stretch.
After 10-20 seconds, place your hands on either side of your front foot. Raise the toes of the front foot off of the ground, and straighten your leg. You may need to reposition your rear leg to do so. Hold for 10-20 seconds, and then repeat the entire sequence for the other side.', 
  'Questo è uno stretching in tre fasi. Inizia facendo un affondo in avanti, con il piede anteriore ben appoggiato a terra e le dita del piede posteriore in appoggio. Con le ginocchia flesse, scendi finché il ginocchio posteriore quasi tocca terra. Mantieni il busto eretto per 10-20 secondi. Ora, appoggia a terra il braccio dello stesso lato della gamba anteriore, posizionando il gomito vicino al piede. L''altra mano deve essere appoggiata a terra, parallela al piede anteriore, per dare supporto. Dopo 10-20 secondi, posiziona le mani ai lati del piede anteriore, solleva le dita del piede anteriore da terra e distendi la gamba. Potrebbe essere necessario riposizionare la gamba posteriore. Mantieni per 10-20 secondi, quindi ripeti l''intera sequenza sull''altro lato.', 
  'hamstrings', 
  'calves', 
  NULL, 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Worlds_Greatest_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Worlds_Greatest_Stretch/1.jpg'], 
  NOW()
),
(
  'cf98cfe3-d49c-437a-8e8f-b2e67199fd4d', 
  'Wrist Circles', 
  'Circonduzioni dei Polsi', 
  'Start by standing straight with your feet being shoulder width apart from each other. Elevate your arms to the side of you until they are fully extended and parallel to the floor at a height that is evenly aligned with your shoulders. Tip: Your torso and arms should form the letter "T: Your palms should be facing down. This is the starting position.
Keeping your entire body stationary except for the wrists, begin to rotate both wrists forward in a circular motion. Tip: Pretend that you are trying to draw circles by using your hands as the brush. Breathe normally as you perform this exercise.
Repeat for the recommended amount of repetitions.', 
  'In piedi con i piedi alla larghezza delle spalle. Solleva le braccia lateralmente finché non sono completamente distese e parallele al pavimento, allineate con le spalle. Consiglio: il corpo deve formare una "T". I palmi devono essere rivolti verso il basso. Questa è la posizione di partenza. Mantenendo il corpo immobile ad eccezione dei polsi, ruota entrambi i polsi in avanti eseguendo un movimento circolare. Consiglio: immagina di disegnare dei cerchi usando le mani come se fossero pennelli. Respira normalmente durante l''esecuzione. Ripeti per il numero di ripetizioni consigliato.', 
  'forearms', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Circles/1.jpg'], 
  NOW()
),
(
  'b15671f1-46c4-40fb-85ff-9a3b378c159d', 
  'Wrist Roller', 
  'Wrist Roller', 
  'To begin, stand straight up grabbing a wrist roller using a pronated grip (palms facing down). Your feet should be shoulder width apart.
Slowly lift both arms until they are fully extended and parallel to the floor in front of you. Note: Make sure the rope is not wrapped around the roller. Your entire body should be stationary except for the forearms. This is the starting position.
Rotate one wrist at a time in an upward motion to bring the weight up to the bar by rolling the rope around the roller.
Once the weight has reached the bar, slowly begin to lower the weight back down by rotating the wrist in a downward motion until the weight reaches the starting position.
Repeat for the prescribed amount of repetitions in your program.', 
  'In piedi, con i piedi alla larghezza delle spalle, afferra un wrist roller con una presa prona (palmi rivolti verso il basso). Solleva lentamente le braccia finché non sono completamente distese e parallele al pavimento davanti a te. Nota: assicurati che la corda non sia avvolta attorno al rullo. Il corpo deve restare fermo, muovi solo gli avambracci. Questa è la posizione di partenza. Ruota un polso alla volta verso l''alto per avvolgere la corda attorno al rullo e sollevare il peso. Una volta che il peso ha raggiunto la sbarra, scendilo lentamente ruotando i polsi nel verso opposto finché il peso torna al punto di partenza. Ripeti per il numero di ripetizioni prescritto.', 
  'forearms', 
  'shoulders', 
  'other', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Roller/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Roller/1.jpg'], 
  NOW()
),
(
  '203de8ff-5472-47b8-b7ae-c05b23b6e684', 
  'Wrist Rotations with Straight Bar', 
  'Rotazioni dei Polsi con Bilanciere', 
  'Hold a barbell with both hands and your palms facing down; hands spaced about shoulder width. This will be your starting position.
Alternating between each of your hands, perform the movement by extending the wrist as though you were rolling up a newspaper. Continue alternating back and forth until failure.
Reverse the motion by flexing the wrist, rolling the opposite direction. Continue the alternating motion until failure.', 
  'Impugna un bilanciere con entrambe le mani, palmi rivolti verso il basso, mani alla larghezza delle spalle. Questa è la posizione di partenza. Alternando le mani, esegui il movimento estendendo il polso come se stessi arrotolando un giornale. Continua ad alternare fino ad esaurimento. Inverti il movimento flettendo i polsi e ruotando nella direzione opposta. Continua ad alternare fino ad esaurimento.', 
  'forearms', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Rotations_with_Straight_Bar/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wrist_Rotations_with_Straight_Bar/1.jpg'], 
  NOW()
),
(
  '7fa86a15-6107-4bb9-bd3e-cbe124f5581c', 
  'Yoke Walk', 
  'Yoke Walk', 
  'The yoke is usually done with a yoke apparatus, but is sometimes seen with refrigerators or other heavy objects.
Begin by racking the apparatus across the back of the shoulders. With your head looking forward and back arched, lift the yoke by driving through the heels.
Begin walking as quickly as possible using short, quick steps. You may hold the side posts of the yoke to help steady it and hold it in position. Continue for the given distance as fast as possible, usually 75-100 feet.', 
  'Il Yoke Walk si esegue solitamente con l''apposito telaio (yoke), ma può essere svolto anche con altri oggetti pesanti. Inizia posizionando l''attrezzo sulla parte posteriore delle spalle. Con lo sguardo rivolto in avanti e la schiena inarcata, solleva lo yoke spingendo con i talloni. Inizia a camminare il più velocemente possibile facendo passi brevi e rapidi. Puoi afferrare i montanti laterali per stabilizzare l''attrezzo. Prosegui per la distanza indicata (solitamente 20-30 metri) il più velocemente possibile.', 
  'quadriceps', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Yoke_Walk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Yoke_Walk/1.jpg'], 
  NOW()
),
(
  '2e39205e-a1da-4b55-b4dc-72e4c8d0838d', 
  'Zercher Squats', 
  'Zercher Squats', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. The correct height should be anywhere above the waist but below the chest. Once the correct height is chosen and the bar is loaded, lock your hands together and place the bar on top of your arms in between the forearm and upper arm.
Lift the bar up so that it is resting on top of your forearms. If you are holding the bar properly, it should look as if you have your arms crossed but with a bar running across them.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section).
Begin to lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the ball of your foot mainly as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Per ragioni di sicurezza, questo esercizio va eseguito preferibilmente all''interno di un rack. Inizia posizionando il bilanciere su un rack a un''altezza adeguata, compresa tra la vita e il petto. Una volta caricato il bilanciere, incrocia le mani e posiziona la sbarra tra l''avambraccio e il braccio. Solleva il bilanciere in modo che poggi stabilmente sull''incavo dei gomiti; se la posizione è corretta, sembrerà che tu abbia le braccia incrociate con il bilanciere che le attraversa. Allontanati dal rack e posiziona i piedi a una larghezza media, pari a quella delle spalle, con le punte leggermente rivolte verso l''esterno. Mantieni la testa alta e la schiena dritta durante tutto il movimento per evitare di perdere l''equilibrio. Questa è la posizione di partenza. Inizia ad abbassarti flettendo le ginocchia, mantenendo la postura eretta e lo sguardo in avanti. Scendi finché l''angolo tra coscia e polpaccio è leggermente inferiore a 90 gradi (ovvero quando le cosce sono sotto la linea parallela al pavimento). Inspira durante questa fase. Consiglio: se l''esercizio è eseguito correttamente, le ginocchia non dovrebbero superare la linea immaginaria perpendicolare alla punta dei piedi; se le superano, stai sovraccaricando l''articolazione in modo errato. Risali espirando, facendo pressione sulla parte anteriore del piede mentre distendi le gambe per tornare alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zercher_Squats/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zercher_Squats/1.jpg'], 
  NOW()
),
(
  '94ebb5b0-fb72-4a34-a29a-69041f75546b', 
  'Zottman Curl', 
  'Zottman Curl', 
  'Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso.
Make sure the palms of the hands are facing each other. This will be your starting position.
While holding the upper arm stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Your wrist should rotate so that you have a supinated (palms up) grip. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level.
Hold the contracted position for a second as you squeeze the biceps.
Now during the contracted position, rotate your wrist until you now have a pronated (palms facing down) grip with the thumb at a higher position than the pinky.
Slowly begin to bring the dumbbells back down using the pronated grip.
As the dumbbells close your thighs, start rotating the wrist so that you go back to a neutral (palms facing your body) grip.
Repeat for the recommended amount of repetitions.', 
  'In piedi, busto eretto e un manubrio in ciascuna mano lungo i fianchi. I gomiti devono essere vicini al busto e i palmi delle mani rivolti l''uno verso l''altro. Questa è la posizione di partenza. Mantenendo fermi i gomiti, solleva i manubri contraendo i bicipiti ed espirando. Durante il movimento, ruota i polsi in posizione suinata (palmi rivolti verso l''alto). Continua finché i bicipiti non sono completamente contratti e i manubri all''altezza delle spalle. Mantieni la contrazione per un secondo, strizzando i bicipiti. A questo punto, ruota i polsi in posizione pronata (palmi rivolti verso il basso), con il pollice più in alto rispetto al mignolo. Abbassa lentamente i manubri mantenendo la presa pronata. Quando i manubri arrivano vicino alle cosce, ruota nuovamente i polsi per tornare alla presa neutra (palmi rivolti verso il corpo). Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zottman_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zottman_Curl/1.jpg'], 
  NOW()
),
(
  '1a0e72e2-ee6d-425b-93fd-cb05f025b59c', 
  'Zottman Preacher Curl', 
  'Zottman Preacher Curl', 
  'Grab a dumbbell in each hand and place your upper arms on top of the preacher bench or the incline bench. The dumbbells should be held at shoulder height and the elbows should be flexed. Hold the dumbbells with the palms of your hands facing down. This will be your starting position.
As you breathe in, slowly lower the dumbbells keeping the palms down until your upper arm is extended and your biceps are fully stretched.
Now rotate your wrists once you are at the bottom of the movement so that the palms of the hands are facing up.
As you exhale, use your biceps to curl the weights up until they are fully contracted and the dumbbells are at shoulder height. Again, remember that to ensure full contraction you need to bring that small finger higher than the thumb.
Squeeze the biceps hard for a second at the contracted position and rotate your wrists so that the palms are facing down again.
Repeat for the recommended amount of repetitions.', 
  'Afferra un manubrio per mano e appoggia le braccia sulla panca Scott (preacher bench) o su una panca inclinata. I manubri devono essere tenuti all''altezza delle spalle con i gomiti flessi e i palmi rivolti verso il basso. Questa è la posizione di partenza. Inspirando, abbassa lentamente i manubri mantenendo i palmi rivolti verso il basso, finché le braccia non sono estese e i bicipiti completamente allungati. A questo punto, ruota i polsi affinché i palmi siano rivolti verso l''alto. Espirando, usa i bicipiti per sollevare i pesi fino a completa contrazione, portando i manubri all''altezza delle spalle; assicurati di tenere il mignolo più in alto del pollice per una contrazione ottimale. Strizza i bicipiti per un secondo e ruota nuovamente i polsi verso il basso. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zottman_Preacher_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zottman_Preacher_Curl/1.jpg'], 
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