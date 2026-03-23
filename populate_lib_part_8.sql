-- Full population of exercise_library with Italian translations (Batch 8)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  '8bf4300f-e746-4bc2-88f2-598a5636757b', 
  'Smith Machine Calf Raise', 
  'Calf Raise alla Smith Machine', 
  'Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders.
Take the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position.
Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down.
Return slowly to the starting position as you breathe in while lowering your heels.
Repeat for the recommended amount of repetitions.', 
  'Posiziona un blocco o un disco di peso sotto la sbarra della Smith machine. Regola la sbarra a un''altezza adatta alla tua statura. Una volta scelta l''altezza corretta e caricato il peso, sali sui dischi appoggiando l''avampiede e posiziona la sbarra sulla parte alta della schiena (sulle spalle). Afferra la sbarra con entrambe le mani rivolte in avanti. Ruota la sbarra per sganciarla: questa sarà la tua posizione di partenza. Solleva i talloni il più in alto possibile facendo leva sull''avampiede, contraendo il polpaccio nel punto massimo di contrazione. Le ginocchia devono rimanere estese. Mantieni la posizione di contrazione per un secondo prima di iniziare a scendere. Ritorna lentamente alla posizione di partenza espirando mentre abbassi i talloni. Ripeti per il numero di ripetizioni raccomandato.', 
  'calves', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Calf_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Calf_Raise/1.jpg'], 
  NOW()
),
(
  'afe87816-1bde-4aa5-a71e-d1e5479070c2', 
  'Smith Machine Close-Grip Bench Press', 
  'Close-Grip Bench Press alla Smith Machine', 
  'Place a flat bench underneath the smith machine. Place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the flat bench. Using a close and pronated grip (palms facing forward) that is around shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that as opposed to a regular bench press, you keep the elbows close to the torso at all times in order to maximize triceps involvement.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, lock the bar back in the rack.', 
  'Posiziona una panca piana sotto la Smith machine. Regola il bilanciere a un''altezza raggiungibile quando sei sdraiato e con le braccia quasi completamente estese. Una volta selezionato il peso, sdraiati sulla panca. Usando una presa stretta e prona (palmi rivolti in avanti), larga circa quanto le spalle, sblocca la sbarra e tienila dritta sopra di te con le braccia distese. Questa sarà la tua posizione di partenza. Inspirando, scendi lentamente finché la sbarra non tocca la parte centrale del petto. Suggerimento: a differenza della panca piana tradizionale, mantieni i gomiti vicini al busto per massimizzare il coinvolgimento dei tricipiti. Dopo una pausa di un secondo, riporta la sbarra alla posizione di partenza espirando e spingendo usando i tricipiti. Blocca le braccia nella posizione contratta, tieni per un secondo e ricomincia a scendere lentamente. Suggerimento: la fase di discesa dovrebbe durare almeno il doppio di quella di risalita. Ripeti per il numero di ripetizioni prescritto. Al termine, riaggancia la sbarra.', 
  'triceps', 
  'chest', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Close-Grip_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Close-Grip_Bench_Press/1.jpg'], 
  NOW()
),
(
  '176eb9be-ca09-42a2-91d1-f25a3f011ab3', 
  'Smith Machine Decline Press', 
  'Decline Press alla Smith Machine', 
  'Position a decline bench in the rack so that the bar will be above your chest. Load an appropriate weight and take your place on the bench.
Rotate the bar to unhook it from the rack and fully extend your arms. Your back should be slightly arched and your shoulder blades retracted. This will be your starting position.
Begin the movement by flexing your arms, lowering the bar to your chest.
Pause briefly, and then extend your arms to push the weight back to the starting position.
After completing the desired number of repetitions, rotate the bar to rack the weight.', 
  'Posiziona una panca declinata nel rack in modo che la sbarra si trovi sopra il tuo petto. Carica un peso adeguato e sdraiati sulla panca. Ruota la sbarra per sganciarla e distendi completamente le braccia. La schiena dovrebbe essere leggermente arcuata e le scapole addotte. Questa sarà la posizione di partenza. Inizia il movimento flettendo le braccia e abbassando la sbarra verso il petto. Fermati brevemente, quindi estendi le braccia per spingere il peso verso la posizione di partenza. Dopo aver completato il numero di ripetizioni desiderato, ruota la sbarra per riagganciarla.', 
  'chest', 
  'shoulders', 
  'machine', 
  'beginner', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Decline_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Decline_Press/1.jpg'], 
  NOW()
),
(
  'dc496c14-dd27-41f3-8822-6d650f490feb', 
  'Smith Machine Hang Power Clean', 
  'Hang Power Clean alla Smith Machine', 
  'Position the bar at knee height and load it to an appropriate weight.
Take a pronated grip on the bar outside of shoulder width and unhook the bar from the machine. Your arms should be fully extended with your head and chest up. Your elbows should be pointed out with your shoulders back and down. Your hips should be back, loading the tension into the hamstrings. This will be your starting position.
Initate the movement by forcefully extending the hips and knees, accelerating into the bar. Ensure that you keep your arms straight during this part of the motion.
Upon full extension, rebend the hips and knees to lower your receiving position.
Allow the arms to flex at this point, rotating the elbows around the bar to receive it on your shoulders.
Extend through the hips and knees to come to a standing position with the bar racked on your shoulders to complete the movement.', 
  'Posiziona la sbarra all''altezza delle ginocchia e carica un peso adeguato. Afferra la sbarra con presa prona, leggermente più larga delle spalle, e sganciala dalla macchina. Le braccia devono essere completamente distese con testa e petto alti. I gomiti devono essere rivolti verso l''esterno con le spalle indietro e verso il basso. I fianchi devono essere arretrati, caricando la tensione sui bicipiti femorali. Questa sarà la posizione di partenza. Inizia il movimento estendendo con forza anche e ginocchia, accelerando verso la sbarra. Mantieni le braccia tese durante questa parte del movimento. Al termine dell''estensione, fletti nuovamente anche e ginocchia per abbassare il corpo. Permetti alle braccia di flettersi, ruotando i gomiti attorno alla sbarra per riceverla sulle spalle. Estendi anche e ginocchia per tornare in posizione eretta con la sbarra sulle spalle per completare il movimento.', 
  'hamstrings', 
  'glutes', 
  'machine', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Hang_Power_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Hang_Power_Clean/1.jpg'], 
  NOW()
),
(
  'd8e963d4-a7fb-4969-a7df-ce2ebebb7b7c', 
  'Smith Machine Hip Raise', 
  'Hip Raise alla Smith Machine', 
  'Position a bench in the rack and load the bar to an appropriate weight. Lie down on the bench, placing the bottom of your feet against the bar. Unlock the bar and extend your legs. You may need to use your hands to assist you. For added stability grasp the sides of the Smith Machine. This will be your starting position.
Initiate the movement by rotating your pelvis, flexing your spine to raise your hips off of the bench. Maintain a slight bend in the knees throughout the motion.
After a brief pause, return the hips to the bench.
Repeat for the desired number of repetitions.', 
  'Posiziona una panca nel rack e carica un peso adeguato sulla sbarra. Sdraiati sulla panca appoggiando la pianta dei piedi contro la sbarra. Sblocca la sbarra e distendi le gambe. Potresti aver bisogno di usare le mani come supporto. Per una maggiore stabilità, afferra i lati della Smith machine. Questa sarà la posizione di partenza. Inizia il movimento ruotando il bacino e flettendo la colonna vertebrale per sollevare i fianchi dalla panca. Mantieni una leggera flessione delle ginocchia durante tutto il movimento. Dopo una breve pausa, riporta i fianchi sulla panca. Ripeti per il numero di ripetizioni desiderato.', 
  'abdominals', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Hip_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Hip_Raise/1.jpg'], 
  NOW()
),
(
  '72ef42ae-809d-4c1c-a546-2c54274a237f', 
  'Smith Machine Incline Bench Press', 
  'Incline Bench Press alla Smith Machine', 
  'Place an incline bench underneath the smith machine. Place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Once the weight you need is selected, lie down on the incline bench and make sure your upper chest is aligned with the barbell. Using a pronated grip (palms facing forward) that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on your upper chest.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Posiziona una panca inclinata sotto la Smith machine. Regola il bilanciere a un''altezza raggiungibile da sdraiato con le braccia quasi completamente estese. Una volta selezionato il peso, sdraiati sulla panca assicurandoti che la parte superiore del petto sia allineata con il bilanciere. Con una presa prona (palmi in avanti) più larga delle spalle, sblocca la sbarra e tienila sopra di te con le braccia distese. Questa sarà la posizione di partenza. Inspirando, scendi lentamente finché la sbarra non tocca la parte superiore del petto. Dopo una pausa di un secondo, riporta la sbarra alla posizione di partenza espirando, usando i muscoli del petto. Blocca le braccia nella posizione contratta, tieni per un secondo e ricomincia a scendere. Suggerimento: la fase di discesa dovrebbe durare almeno il doppio di quella di risalita. Ripeti per le ripetizioni prescritte. Al termine, riaggancia la sbarra.', 
  'chest', 
  'shoulders', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Incline_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Incline_Bench_Press/1.jpg'], 
  NOW()
),
(
  'b38e0e1b-7936-408c-9cae-d50d284713ac', 
  'Smith Machine Leg Press', 
  'Leg Press alla Smith Machine', 
  'Position a Smith machine bar a couple feet off of the ground. Ensure that it is resting on the safeties. After loading the bar to an appropriate weight, lie underneath the bar. Place the middle of your feet on the bar, tucking your knees to your chest. This will be your starting position.
Begin the movement by driving through your feet to move the bar upward, extending the hips and knees. Do not lock out your knees.
At the top of the motion, pause briefly before returning to the starting position.', 
  'Posiziona la sbarra della Smith machine a circa 60 cm dal suolo, assicurandoti che poggi sui fermi di sicurezza. Dopo aver caricato un peso adeguato, sdraiati sotto la sbarra. Appoggia la parte centrale dei piedi sulla sbarra e porta le ginocchia al petto. Questa sarà la posizione di partenza. Inizia il movimento spingendo la sbarra verso l''alto con i piedi, estendendo anche e ginocchia. Non bloccare completamente le ginocchia. Al culmine del movimento, fermati brevemente prima di tornare alla posizione di partenza.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Leg_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Leg_Press/1.jpg'], 
  NOW()
),
(
  'df4e9b53-187e-4f47-a148-3e0c42574824', 
  'Smith Machine One-Arm Upright Row', 
  'Upright Row a un braccio alla Smith Machine', 
  'With the bar at thigh level, load an appropriate weight.
Take a wide grip on the bar and unhook the weight, removing your off hand from the bar. Your arm should be extended as you stand up straight with your head and chest up. This will be your starting position.
Begin the movement by flexing the elbow, raising the upper arm with the elbow pointed out. Continue until your upper arm is parallel to the floor.
After a brief pause, return the weight to the starting position.
Repeat for the desired number of repetitions before engaging the hooks to rack the weight.', 
  'Con la sbarra all''altezza delle cosce, carica un peso adeguato. Afferra la sbarra con una presa larga, sgancia il peso e libera l''altra mano. Il braccio deve essere disteso mentre sei in piedi, con testa e petto alti. Questa sarà la posizione di partenza. Inizia il movimento flettendo il gomito e sollevando la parte superiore del braccio, tenendo il gomito verso l''esterno. Continua finché il braccio non è parallelo al pavimento. Dopo una breve pausa, torna alla posizione di partenza. Ripeti per il numero di ripetizioni desiderato prima di riagganciare il peso.', 
  'shoulders', 
  'biceps', 
  'machine', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_One-Arm_Upright_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_One-Arm_Upright_Row/1.jpg'], 
  NOW()
),
(
  '815406ff-04c3-4bdb-829f-c1e2ddfd770c', 
  'Smith Machine Overhead Shoulder Press', 
  'Overhead Shoulder Press alla Smith Machine', 
  'To begin, place a flat bench (or preferably one with back support) underneath a smith machine. Position the barbell at a height so that when seated on the flat bench, the arms must be almost fully extended to reach the barbell.
Once you have the correct height, sit slightly in behind the barbell so that there is an imaginary straight line from the tip of your nose to the barbell. Your feet should be stationary. Grab the barbell with the palms facing forward, unlock it and lift it up so that your arms are fully extended. This is the starting position.
Slowly begin to lower the barbell until it is level with your chin while inhaling.
Then lift the barbell back to the starting position using your shoulders while exhaling.
Repeat for the recommended amount of repetitions.', 
  'Per iniziare, posiziona una panca piana (preferibilmente con supporto per la schiena) sotto la Smith machine. Regola il bilanciere a un''altezza tale che, da seduto, le braccia siano quasi completamente estese per raggiungerlo. Una volta definita l''altezza, siediti leggermente dietro il bilanciere in modo che ci sia una linea retta immaginaria tra la punta del naso e il bilanciere. I piedi devono rimanere fermi. Afferra il bilanciere con i palmi rivolti in avanti, sbloccalo e sollevalo finché le braccia non sono completamente distese. Questa è la posizione di partenza. Abbassa lentamente il bilanciere fino al livello del mento inspirando. Quindi, espirando, solleva nuovamente il bilanciere alla posizione di partenza usando le spalle. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'triceps', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Overhead_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Overhead_Shoulder_Press/1.jpg'], 
  NOW()
),
(
  '7a0a1006-7b8c-4b46-9b4b-8e9df69ac4a3', 
  'Smith Machine Pistol Squat', 
  'Pistol Squat alla Smith Machine', 
  'To begin, first set the bar to a position that best matches your height. Step under it and position the bar across the back of your shoulders.
Take the bar with your hands facing forward, unlock it and lift it off the rack by extending your legs. 3
Move one foot forward about 12 inches in front of the bar. Extend the other leg out in front of you, holding it off the ground. Look forward at all times and maintain a neutral or slightly arched spine. This will be your starting position.
Maintaining good posture, lower yourself by flexing the knee and hip, going down as far as flexibility allows.
Pause briefly at the bottom and then return to the starting position by driving through the heel of your foot, extending the knee and hip.', 
  'Per iniziare, regola la sbarra a un''altezza adatta alla tua statura. Posizionati sotto di essa e appoggia la sbarra sulla parte alta della schiena (sulle spalle). Afferra la sbarra con le mani rivolte in avanti, sbloccala e sollevala dal rack estendendo le gambe. Porta un piede in avanti di circa 30 cm rispetto alla sbarra. Distendi l''altra gamba davanti a te, tenendola sollevata da terra. Guarda sempre avanti e mantieni la colonna vertebrale in posizione neutra o leggermente arcuata. Questa sarà la posizione di partenza. Mantenendo una postura corretta, abbassati flettendo ginocchio e anca, scendendo fin dove la flessibilità lo consente. Fermati brevemente nel punto più basso, quindi torna alla posizione di partenza spingendo sul tallone e estendendo ginocchio e anca.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Pistol_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Pistol_Squat/1.jpg'], 
  NOW()
),
(
  '01a70652-ec7b-47c1-b431-95f3b437497f', 
  'Smith Machine Reverse Calf Raises', 
  'Reverse Calf Raises alla Smith Machine', 
  'Adjust the barbell on the smith machine to fit your height and align a raised platform right under the bar.
Stand on the platform with the heels of your feet secured on top of it with the balls of your feet extending off it. Position your toes facing forward with a shoulder width stance.
Now, place your shoulders under the barbell while maintaining the foot positioning described and push the barbell up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. This will be your starting position. Tip: The barbell on your back is only for balance purposes.
Raise the balls of your feet as you breathe out by extending your toes as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position for a second before you start to go back down.
Slowly go back down to the starting position as you breathe in by lowering the balls of your feet and toes.
Repeat for the recommended amount of repetitions.', 
  'Regola il bilanciere della Smith Machine in base alla tua altezza e posiziona una piattaforma rialzata direttamente sotto la sbarra. Sali sulla piattaforma appoggiando gli avampiedi e lasciando i talloni sospesi. Posiziona le punte dei piedi in avanti con una larghezza pari a quella delle spalle. Posiziona le spalle sotto il bilanciere, mantieni la posizione dei piedi e spingi il bilanciere verso l''alto estendendo anche e ginocchia finché il busto non è eretto. Le ginocchia devono rimanere leggermente flesse, mai bloccate. Questa è la posizione di partenza. Suggerimento: il bilanciere sulla schiena serve solo per l''equilibrio. Espirando, solleva i talloni estendendo al massimo le punte dei piedi e contraendo il polpaccio. Assicurati che le ginocchia rimangano immobili. Non piegarle mai. Mantieni la posizione di contrazione per un secondo prima di scendere. Inspirando, torna lentamente alla posizione di partenza abbassando i talloni. Ripeti per il numero di ripetizioni raccomandato.', 
  'calves', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Reverse_Calf_Raises/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Reverse_Calf_Raises/1.jpg'], 
  NOW()
),
(
  'e95cab4c-bcfb-47ac-b910-bcae7f9a3b97', 
  'Smith Machine Squat', 
  'Squat alla Smith Machine', 
  'To begin, first set the bar on the height that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side (palms facing forward), unlock it and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance which targets overall development; however you can choose any of the three stances discussed in the foot stances section).
Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the heel of your foot as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Per iniziare, imposta la sbarra all''altezza corretta. Una volta caricato il bilanciere, posizionati sotto di esso con la parte posteriore delle spalle (appena sotto il collo) appoggiata alla sbarra. Impugna il bilanciere con entrambe le mani (palmi rivolti in avanti), sbloccalo e sollevalo dal rack spingendo con le gambe e raddrizzando il busto. Posiziona le gambe a una larghezza media, pari a quella delle spalle, con le punte dei piedi leggermente rivolte verso l''esterno. Mantieni la testa alta e la schiena dritta. Questa è la posizione di partenza. Inizia ad abbassare lentamente il bilanciere flettendo le ginocchia e mantenendo la postura dritta. Scendi finché l''angolo tra coscia e polpaccio è leggermente inferiore a 90 gradi (punto in cui le cosce sono sotto il parallelo rispetto al pavimento). Inspira durante questa fase. Suggerimento: se l''esercizio è eseguito correttamente, le ginocchia non devono superare la linea immaginaria perpendicolare alle punte dei piedi. Espirando, spingi sui talloni per sollevare il bilanciere, raddrizzando le gambe fino alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Squat/1.jpg'], 
  NOW()
),
(
  '3ac738d8-2c0d-4005-9b0c-ee8db7914751', 
  'Smith Machine Stiff-Legged Deadlift', 
  'Stiff-Legged Deadlift alla Smith Machine', 
  'To begin, set the bar on the smith machine to a height that is around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grasp the bar using a pronated (palms forward) grip that is shoulder width apart. You may need some wrist wraps if using a significant amount of weight.
Lift the bar up by fully extending your arms while keeping your back straight. Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position.
Keeping the knees stationary, lower the barbell to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Exhale as you perform this movement
Start bringing your torso up straight again as soon as you feel the hamstrings stretch by extending your hips and waist until you are back at the starting position. Inhale as you perform this movement.
Repeat for the recommended amount of repetitions.', 
  'Imposta la sbarra della Smith Machine all''altezza della metà delle cosce. Afferra il bilanciere con una presa prona (palmi in avanti) alla larghezza delle spalle. Potresti aver bisogno di fasce per i polsi se utilizzi un carico elevato. Solleva il bilanciere estendendo completamente le braccia e mantenendo la schiena dritta. Stai con il busto eretto e i piedi alla larghezza delle spalle. Le ginocchia devono essere leggermente flesse. Questa è la posizione di partenza. Mantenendo le ginocchia ferme, abbassa il bilanciere verso i piedi flettendo il busto in avanti, mantenendo la schiena dritta. Spostati come se dovessi raccogliere qualcosa da terra finché non senti allungare i bicipiti femorali. Espira durante il movimento. Non appena senti l''allungamento, risali estendendo anche e busto fino alla posizione di partenza, inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'hamstrings', 
  'glutes', 
  'machine', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Stiff-Legged_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Stiff-Legged_Deadlift/1.jpg'], 
  NOW()
),
(
  '4c543b77-4b60-4429-bcc2-fe7d4625f92c', 
  'Smith Machine Upright Row', 
  'Upright Row alla Smith Machine', 
  'To begin, set the bar on the smith machine to a height that is around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grasp the bar using a pronated (palms forward) grip that is shoulder width apart. You may need some wrist wraps if using a significant amount of weight.
Lift the barbell up and fully extend your arms with your back straight. There should be a slight bend at the elbows. This is the starting position.
Use your side shoulders to lift the bar as you exhale. The bar should be close to the body as you move it up. Continue to lift it until it nearly touches your chin. Tip: Your elbows should drive the motion. As you lift the bar, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.
Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Imposta la sbarra della Smith Machine all''altezza della metà delle cosce. Afferra il bilanciere con una presa prona (palmi in avanti) alla larghezza delle spalle. Solleva il bilanciere estendendo le braccia, mantenendo la schiena dritta e i gomiti leggermente flessi. Questa è la posizione di partenza. Espirando, solleva il bilanciere usando le spalle, mantenendolo vicino al corpo. Continua a sollevare finché la sbarra non sfiora quasi il mento. Suggerimento: i gomiti devono guidare il movimento; mantienili sempre più alti degli avambracci. Mantieni il busto fermo e fai una pausa di un secondo in alto. Inspira mentre torni lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'traps', 
  'biceps', 
  'machine', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Upright_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Upright_Row/1.jpg'], 
  NOW()
),
(
  'e7c720b9-d9d3-40d7-97ee-a4137b99bd98', 
  'Smith Single-Leg Split Squat', 
  'Single-Leg Split Squat alla Smith Machine', 
  'To begin, place a flat bench 2-3 feet behind the smith machine. Then, set the bar on the height that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side (palms facing forward), unlock it and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Position your legs by placing one foot slightly forward under the bar and extending your other leg back and place the top of your foot on the bench. This will be your starting position
Begin to slowly lower the bar by bending the knee as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calf becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knee should make an imaginary straight line with the toes that is perpendicular to the front. If your knee is past that imaginary line (if it is past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the heel of your foot mainly as you straighten your leg again and go back to the starting position.
Repeat for the recommended amount of repetitions.
Switch legs and repeat the movement.', 
  'Posiziona una panca piana a 60-90 cm dietro la Smith Machine. Imposta la sbarra all''altezza corretta, posizionati sotto di essa con la parte posteriore delle spalle appoggiata e sbloccala. Posiziona un piede in avanti sotto la sbarra e appoggia il collo del piede opposto sulla panca. Questa è la posizione di partenza. Abbassa lentamente il bilanciere flettendo il ginocchio della gamba anteriore e mantenendo la schiena dritta e la testa alta. Scendi finché l''angolo tra coscia e polpaccio è leggermente inferiore a 90 gradi. Inspira durante la discesa. Suggerimento: il ginocchio non deve superare la linea immaginaria perpendicolare alla punta del piede. Espirando, spingi sul tallone per tornare alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato e poi cambia gamba.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Single-Leg_Split_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Single-Leg_Split_Squat/1.jpg'], 
  NOW()
),
(
  '7040ab32-95e4-4b9e-9321-cfd7edd8b64d', 
  'Snatch', 
  'Snatch', 
  'Place your feet at a shoulder width stance with the barbell resting right above the connection between the toes and the rest of the foot.
With a palms facing down grip, bend at the knees and keeping the back flat grab the bar using a wider than shoulder width grip. Bring the hips down and make sure that your body drops as if you were going to sit on a chair. This will be your starting position.
Start pushing the floor as if it were a moving platform with your feet and simultaneously start lifting the barbell keeping it close to your legs.
As the bar reaches the middle of your thighs, push the floor with your legs and lift your body to a complete extension in an explosive motion.
Lift your shoulders back in a shrugging movement as you bring the bar up while lifting your elbows out to the side and keeping them above the bar for as long as possible.
Now in a very quick but powerful motion, you have to get your body under the barbell when it has reached a high enough point where it can be controlled and drop while locking your arms and holding the barbell overhead as you assume a squat position.
Finalize the movement by rising up out of the squat position to finish the lift. At the end of the lift both feet should be on line and the arms fully extended holding the barbell overhead.', 
  'Posiziona i piedi alla larghezza delle spalle con il bilanciere sopra l''attaccatura delle dita dei piedi. Con una presa prona, fletti le ginocchia e, mantenendo la schiena piatta, afferra la sbarra con una presa più larga delle spalle. Abbassa il bacino come se dovessi sederti su una sedia. Questa è la posizione di partenza. Spingi con i piedi come se il pavimento fosse una piattaforma mobile, sollevando il bilanciere vicino alle gambe. Quando la sbarra arriva a metà coscia, estendi esplosivamente gambe, anche e busto. Esegui una scrollata di spalle mentre porti la sbarra in alto, tenendo i gomiti verso l''esterno e sopra il bilanciere il più a lungo possibile. Con un movimento rapido, posizionati sotto il bilanciere, bloccando le braccia sopra la testa in posizione di squat. Concludi alzandoti dalla posizione di squat mantenendo il bilanciere sopra la testa, piedi allineati e braccia completamente tese.', 
  'quadriceps', 
  'biceps', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch/1.jpg'], 
  NOW()
),
(
  'edf3ad96-5fe2-41e4-b656-3dca9dc3fad5', 
  'Snatch Balance', 
  'Snatch Balance', 
  'Begin with the feet in the pulling position, the bar racked across the back of the shoulders, and the hands placed in a wide snatch grip.
Pop the bar with an abrupt dip and drive of the knees, and aggressively drive under the bar, transitioning the feet into the receiving position.
Receive the bar locked out overhead near the bottom of the squat. The torso should remain vertical, lowering the hips between the legs.
Continue to descend to full depth, and return to a standing position. Carefully lower the weight.', 
  'Parti con i piedi in posizione di trazione, il bilanciere poggiato sulla parte superiore della schiena e una presa larga da Snatch. Con un rapido affondo e una spinta delle ginocchia, scendi aggressivamente sotto il bilanciere, portando i piedi nella posizione di ricezione. Ricevi il bilanciere a braccia tese sopra la testa nella parte bassa dello squat. Il busto deve rimanere verticale mentre abbassi il bacino tra le gambe. Scendi fino alla massima profondità, poi torna in posizione eretta. Abbassa il carico con cautela.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Balance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Balance/1.jpg'], 
  NOW()
),
(
  'c82d415d-9d4b-400f-81e7-5f4fe14a53e4', 
  'Snatch Deadlift', 
  'Snatch Deadlift', 
  'The snatch deadlift strengthens the first pull of the snatch. Begin with a wide snatch grip with the barbell placed on the platform. The feet should be directly under the hips, with the feet turned out. Squat down to the bar, keeping the back in absolute extension with the head facing forward.
Initiate the movement by driving through the heels, raising the hips. The back angle should remain the same until the bar passes the knees.
At that point, drive your hips through the bar as you lay back. Return the bar to the platform by reversing the motion.', 
  'Lo Snatch Deadlift rafforza la prima fase della trazione dello Snatch. Inizia con una presa larga da Snatch, piedi sotto le anche e leggermente rivolti verso l''esterno. Accovacciati fino alla sbarra mantenendo la schiena in estensione e la testa in avanti. Inizia il movimento spingendo sui talloni e sollevando il bacino. L''angolo della schiena deve rimanere costante finché la sbarra non supera le ginocchia. A quel punto, spingi il bacino in avanti mentre ti inclini leggermente all''indietro. Riporta la sbarra sulla pedana invertendo il movimento.', 
  'hamstrings', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Deadlift/1.jpg'], 
  NOW()
),
(
  '37d0abac-9746-4b79-8432-00f8c3f8d5d0', 
  'Snatch Pull', 
  'Snatch Pull', 
  'With a barbell on the floor close to the shins, take a wide snatch grip. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.
Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight. Move the weight with control as you continue to above the knees.
Next comes the second pull, the main source of acceleration for the pull. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward.
There should be no need to actively pull through the arms to accelerate the weight; at the end of the second pull, the body should be fully extended, leaning slightly back. Full extension should be violent and abrupt, and ensure that you do not prolong the extension for longer than necessary.', 
  'Con il bilanciere a terra vicino alle tibie, impugna con presa larga da Snatch. Abbassa il bacino, peso sui talloni, schiena dritta, petto in fuori e spalle leggermente avanti rispetto alla sbarra. Questa è la posizione di partenza. Esegui la prima trazione spingendo sui talloni ed estendendo le ginocchia, mantenendo l''angolo della schiena e le braccia tese fino a superare le ginocchia. Segue la seconda trazione, fonte principale di accelerazione: quando la sbarra raggiunge la metà coscia, estendi energicamente anche, ginocchia e caviglie in un movimento simile a un salto. Non è necessario tirare attivamente con le braccia; il corpo deve essere completamente esteso e leggermente inclinato all''indietro. L''estensione finale deve essere esplosiva e rapida, evitando di prolungarla inutilmente.', 
  'hamstrings', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Pull/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Pull/1.jpg'], 
  NOW()
),
(
  '0cc91743-08a2-4eb0-ad0b-071ef6b77efd', 
  'Snatch Shrug', 
  'Snatch Shrug', 
  'Begin with a wide grip, with the bar hanging at the mid thigh position. You can use a hook or overhand grip. Your back should be straight and inclined slightly forward.
Shrug your shoulders towards your ears. While this exercise can usually by loaded with heavier weight than a snatch, avoid overloading to the point that the execution slows down.', 
  'Parti con una presa larga e il bilanciere che pende all''altezza della metà coscia. Puoi usare una presa a uncino (hook grip) o prona. La schiena deve essere dritta e leggermente inclinata in avanti. Esegui una scrollata di spalle verso le orecchie. Anche se questo esercizio permette solitamente carichi superiori allo Snatch, evita di sovraccaricare al punto da rallentare l''esecuzione.', 
  'traps', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_Shrug/1.jpg'], 
  NOW()
),
(
  '9a720419-1192-4be3-815f-2b4ee68b7b11', 
  'Snatch from Blocks', 
  'Snatch from Blocks', 
  'Begin with a loaded barbell on boxes or stands of the desired height. A wide grip should be taken on the bar. The feet should be directly below the hips, with the feet turned out as needed. Lower the hips, with the chest up and the head looking forward. The shoulders should be just in front of the bar, with the elbows pointed out. This will be the starting position.
Begin the first pull by driving through the front of the heels, raising the bar from the boxes.
Transition into the second pull by extending through the hips knees and ankles, driving the bar up as quickly as possible. The bar should be close to the body. At peak extension, shrug the shoulders and allow the elbows to flex to the side.
As you move your feet into the receiving position, forcefully pull yourself below the bar as you elevate the bar overhead. The feet should move to just outside the hips, turned out as necessary. Receive the bar with your body as low as possible and the arms fully extended overhead.
Keeping the bar aligned over the front of the heels, your head and chest up, drive through heels of the feet to move to a standing position. Carefully return the weight to the boxes.', 
  'Inizia con un bilanciere carico posizionato su blocchi o supporti all''altezza desiderata. Impugna il bilanciere con una presa larga. I piedi devono essere posizionati sotto le anche, ruotati verso l''esterno secondo necessità. Abbassa le anche mantenendo il petto alto e lo sguardo in avanti. Le spalle devono trovarsi appena davanti al bilanciere, con i gomiti rivolti verso l''esterno. Questa sarà la posizione di partenza. Inizia la prima trazione spingendo attraverso la parte anteriore dei talloni, sollevando il bilanciere dai blocchi. Passa alla seconda trazione estendendo anche, ginocchia e caviglie, spingendo il bilanciere verso l''alto il più velocemente possibile. Il bilanciere deve rimanere vicino al corpo. Alla massima estensione, effettua una scrollata di spalle e permetti ai gomiti di flettersi lateralmente. Mentre porti i piedi nella posizione di ricezione, tirati energicamente sotto il bilanciere sollevandolo sopra la testa. I piedi dovrebbero spostarsi appena oltre la larghezza delle anche, ruotati secondo necessità. Ricevi il bilanciere con il corpo il più in basso possibile e le braccia completamente estese sopra la testa. Mantenendo il bilanciere allineato sopra la parte anteriore dei talloni, la testa e il petto alti, spingi attraverso i talloni per tornare in posizione eretta. Riponi con cura il bilanciere sui blocchi.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_from_Blocks/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Snatch_from_Blocks/1.jpg'], 
  NOW()
),
(
  'f1bb3dd6-3c1e-429a-967f-6f8b46b4dbca', 
  'Speed Band Overhead Triceps', 
  'Speed Band Overhead Triceps', 
  'For this exercise anchor a band to the ground. We used an incline bench and anchored the band to the base, standing over the bench. Alternatively, this could be performed standing on the band.
To begin, pull the band behind your head, holding it with a pronated grip and your elbows up. This will be your starting position.
To perform the movement, extend through the elbow to to straighten your arms, ensuring that you keep your upper arm in place.
Pause, and then return to the starting position.', 
  'Per questo esercizio, ancora una banda elastica al suolo. Si può utilizzare una panca inclinata ancorando la banda alla base e stando in piedi sopra la panca, oppure stando in piedi direttamente sulla banda. Per iniziare, porta la banda dietro la testa tenendola con una presa prona e i gomiti alti. Questa è la posizione di partenza. Per eseguire il movimento, estendi il gomito per raddrizzare le braccia, assicurandoti di mantenere ferma la parte superiore delle braccia. Fai una pausa e torna alla posizione di partenza.', 
  'triceps', 
  NULL, 
  'bands', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Speed_Band_Overhead_Triceps/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Speed_Band_Overhead_Triceps/1.jpg'], 
  NOW()
),
(
  '18c909e0-7351-4ee8-9115-8ed0c1db3e3c', 
  'Speed Box Squat', 
  'Speed Box Squat', 
  'Attach bands to the bar that are securely anchored near the ground. You may need to choke the bands to get adequate tension.
Use a box of an appropriate height for this exercise. Load the bar to a weight that still requires effort, but isn''t so heavy that speed is compromised. Typically, that will be between 50-70% of your one rep max.
Position the bar on your upper back, shoulder blades retracted, back arched and everything tight head to toe. This will be the starting position.
Unrack the bar and position yourself in front of the box. Sit back with your hips until you are seated on the box, ensuring that you descend under control and don''t crash onto the surface.
Pause briefly, and explode off of the box, extending through the hips and knees.', 
  'Attacca al bilanciere delle bande elastiche ancorate saldamente vicino al suolo. Potrebbe essere necessario avvolgerle per ottenere una tensione adeguata. Usa un box di altezza appropriata. Carica il bilanciere con un peso che richieda sforzo, ma che non comprometta la velocità; solitamente tra il 50% e il 70% del tuo massimale. Posiziona il bilanciere sulla parte alta della schiena, scapole addotte, schiena inarcata e corpo in tensione dalla testa ai piedi. Questa è la posizione di partenza. Stacca il bilanciere e posizionati davanti al box. Siediti all''indietro con le anche finché non tocchi il box, assicurandoti di scendere in modo controllato senza crollare sulla superficie. Fai una breve pausa, quindi esplodi verso l''alto estendendo anche e ginocchia.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Speed_Box_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Speed_Box_Squat/1.jpg'], 
  NOW()
),
(
  'd4ceb744-c3d5-49ec-81a1-0f065de7ae0a', 
  'Speed Squats', 
  'Speed Squats', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance which targets overall development; however you can choose any of the three stances discussed in the foot stances section).
Begin to lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as fast as possible without involving momentum as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position. Note: You should perform these exercises as fast as possible but without breaking perfect form and without involving momentum.
Repeat for the recommended amount of repetitions.', 
  'Questo esercizio va eseguito preferibilmente all''interno di un rack per motivi di sicurezza. Imposta il bilanciere all''altezza corretta, posizionati sotto di esso e appoggialo sulla parte posteriore delle spalle (appena sotto il collo). Impugna il bilanciere con entrambe le mani e sollevalo dal rack spingendo con le gambe e raddrizzando contemporaneamente il busto. Allontanati dal rack e posiziona le gambe a una larghezza media (larghezza spalle) con le punte dei piedi leggermente rivolte verso l''esterno. Mantieni lo sguardo alto e la schiena dritta. Questa è la posizione di partenza. Inizia ad abbassare il bilanciere flettendo le ginocchia e mantenendo la postura dritta. Scendi finché l''angolo tra cosce e polpacci è leggermente inferiore a 90 gradi (cosce sotto il parallelo). Inspira durante la discesa. Suggerimento: le ginocchia non devono superare la linea immaginaria che parte dalle punte dei piedi per evitare stress eccessivo. Inizia la risalita il più velocemente possibile, senza usare lo slancio, espirando e spingendo sui talloni per tornare alla posizione eretta. Esegui il movimento alla massima velocità consentita da una forma perfetta.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Speed_Squats/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Speed_Squats/1.jpg'], 
  NOW()
),
(
  '619f3814-1f4c-42e8-bcd7-03e9e26fecc5', 
  'Spell Caster', 
  'Spell Caster', 
  'Hold a dumbbell in each hand with a pronated grip. Your feet should be wide with your hips and knees extended. This will be your starting position.
Begin the movement by pulling both of the dumbbells to one side next to your hip, rotating your torso.
Keeping your arms straight and the dumbbells parallel to the ground, rotate your torso to swing the weights to your opposite side.
Continue alternating, rotating from one side to the other until the set is complete.', 
  'Impugna un manubrio in ogni mano con una presa prona. Tieni i piedi ben distanziati con anche e ginocchia estese. Questa è la posizione di partenza. Inizia il movimento tirando entrambi i manubri verso un fianco, ruotando il busto. Mantenendo le braccia dritte e i manubri paralleli al suolo, ruota il busto per far oscillare i pesi verso il lato opposto. Continua ad alternare, ruotando da un lato all''altro fino al completamento della serie.', 
  'abdominals', 
  'glutes', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spell_Caster/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spell_Caster/1.jpg'], 
  NOW()
),
(
  '8f50e2cd-17a8-4f54-939d-7dbf53f7da5a', 
  'Spider Crawl', 
  'Spider Crawl', 
  'Begin in a prone position on the floor. Support your weight on your hands and toes, with your feet together and your body straight. Your arms should be bent to 90 degrees. This will be your starting position.
Initiate the movement by raising one foot off of the ground. Externally rotate the leg and bring the knee toward your elbow, as far forward as possible.
Return this leg to the starting position and repeat on the opposite side.', 
  'Inizia in posizione prona a terra. Sostieni il peso su mani e punte dei piedi, con i piedi uniti e il corpo dritto. Le braccia devono essere flesse a 90 gradi. Questa è la posizione di partenza. Inizia il movimento sollevando un piede da terra. Ruota esternamente la gamba e porta il ginocchio verso il gomito il più in avanti possibile. Torna alla posizione di partenza e ripeti dal lato opposto.', 
  'abdominals', 
  'chest', 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spider_Crawl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spider_Crawl/1.jpg'], 
  NOW()
),
(
  'e4ed88c9-5503-4b29-a535-018d1bbe5bc7', 
  'Spider Curl', 
  'Spider Curl', 
  'Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off.
Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench.
Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench.
Use your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other.
Slowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps.
Slowly begin to bring the barbell back to the starting position as your breathe in. .
Repeat for the recommended amount of repetitions.', 
  'Posiziona il bilanciere sulla parte della panca Scott dove solitamente ci si siede, assicurandoti che sia bilanciato. Spostati sul lato anteriore della panca (quello dove solitamente si appoggiano le braccia) e posizionati con il busto e lo stomaco appoggiati contro lo schienale inclinato a 45 gradi. Assicurati che i piedi siano ben piantati a terra e appoggia le braccia sulla parte superiore del cuscinetto. Afferra il bilanciere con una presa supina (palmi verso l''alto), larghezza spalle o leggermente più stretta. Solleva lentamente il bilanciere espirando. Mantieni la posizione di contrazione per un secondo strizzando i bicipiti. Torna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'e-z curl bar', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spider_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spider_Curl/1.jpg'], 
  NOW()
),
(
  '74526e0f-724b-445f-8f1e-306438990dd5', 
  'Spinal Stretch', 
  'Spinal Stretch', 
  'Sit in a chair so your back is straight and your feet planted on the floor.
Interlace your fingers behind your head, elbows out and your chin down.
Twist your upper body to one side about 3 times as far as you can. Then lean forward and twist your torso to reach your elbow to the floor on the inside of your knee.
Return to upright position and then repeat for your other side.', 
  'Siediti su una sedia con la schiena dritta e i piedi appoggiati a terra. Intreccia le dita dietro la testa, con i gomiti rivolti verso l''esterno e il mento basso. Ruota la parte superiore del corpo verso un lato per circa 3 volte fin dove possibile. Quindi, piegati in avanti e ruota il busto per portare il gomito verso il pavimento all''interno del ginocchio. Torna in posizione eretta e ripeti dall''altro lato.', 
  'middle back', 
  'lats', 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spinal_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Spinal_Stretch/1.jpg'], 
  NOW()
),
(
  'ef475c4f-87c0-4eb8-ac0c-7dfa4afbe003', 
  'Split Clean', 
  'Split Clean', 
  'With a barbell on the floor close to the shins, take an overhand grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.
Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight. Move the weight with control as you continue to above the knees.
Next comes the second pull, the main source of acceleration for the clean. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight; at the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended.
As full extension is achieved, transition into the third pull by aggressively shrugging and flexing the arms with the elbows up and out. At peak extension, aggressively pull yourself down, rotating your elbows under the bar as you do so.
Receive the bar with the feet split, aggressively moving one foot forward and one foot back. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Continue to descend to the bottom position, which will help in the recovery.
Immediately recover by driving through the heels, keeping the torso upright and elbows up. Bring the feet together as you stand up.', 
  'Con il bilanciere a terra vicino alle tibie, impugnalo con una presa prona appena oltre le gambe. Abbassa le anche con il peso sui talloni, schiena dritta, sguardo avanti, petto alto e spalle appena davanti al bilanciere. Questa è la posizione di partenza. Inizia la prima trazione spingendo sui talloni ed estendendo le ginocchia. L''angolo della schiena deve rimanere invariato e le braccia distese. Muovi il peso con controllo fin sopra le ginocchia. Passa alla seconda trazione: quando il bilanciere raggiunge la metà coscia, estendi le anche. Con un movimento simile a un salto, accelera estendendo anche, ginocchia e caviglie. Non c''è bisogno di tirare attivamente con le braccia; alla fine della seconda trazione, il corpo deve essere completamente esteso. Passa alla terza trazione scrollando energicamente le spalle e flettendo le braccia con i gomiti rivolti verso l''alto e l''esterno. Tirati rapidamente sotto il bilanciere ruotando i gomiti. Ricevi il bilanciere in posizione di affondo (split), portando un piede avanti e uno indietro. Il bilanciere deve poggiare sulle spalle, toccando leggermente la gola. Recupera subito spingendo sui talloni, mantenendo il busto eretto, e unisci i piedi.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Clean/1.jpg'], 
  NOW()
),
(
  '89f7aa19-d736-437c-8c6e-3729a0c97502', 
  'Split Jerk', 
  'Split Jerk', 
  'Standing with the weight racked on the front of the shoulders, begin with the dip. With your feet directly under your hips, flex the knees without moving the hips backward.
Go down only slightly, and reverse direction as powerfully as possible. Drive through the heels create as much speed and force as possible, and be sure to move your head out of the way as the bar leaves the shoulders. At this moment as the feet leave the floor, the feet must be placed into the receiving position as quickly as possible.
In the brief moment the feet are not actively driving against the platform, the athlete''s effort to push the bar up will drive them down. The feet should be moved to a split stance, one foot forward, one foot back, with the knees partially bent. Receive the bar with the arms locked out overhead.
Return to a standing position, bringing the feet together.', 
  'Partendo con il bilanciere poggiato sulla parte anteriore delle spalle, inizia il dip (fase di spinta). Con i piedi sotto le anche, fletti le ginocchia senza spostare le anche all''indietro. Scendi leggermente e inverte la direzione il più potentemente possibile. Spingi sui talloni per creare velocità e forza, assicurandoti di spostare la testa all''indietro mentre il bilanciere si stacca dalle spalle. Nel momento in cui i piedi si staccano da terra, portali nella posizione di ricezione il più velocemente possibile. Nel breve momento in cui i piedi non spingono contro il suolo, lo sforzo di spingere il bilanciere ti farà scendere sotto di esso. I piedi devono trovarsi in una posizione di affondo (split), uno avanti e uno indietro, con le ginocchia parzialmente flesse. Ricevi il bilanciere con le braccia bloccate sopra la testa. Torna in posizione eretta unendo i piedi.', 
  'quadriceps', 
  'glutes', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Jerk/1.jpg'], 
  NOW()
),
(
  'b8b0b88d-4706-4a85-a2c0-346e6ae3b60b', 
  'Split Jump', 
  'Split Jump', 
  'Assume a lunge stance position with one foot forward with the knee bent, and the rear knee nearly touching the ground.
Ensure that the front knee is over the midline of the foot.
Extending through both legs, jump as high as possible, swinging your arms to gain lift.
As you jump, bring your feet together, and move them back to their initial positions as you land.
Absorb the impact by reverting back to the starting position.', 
  'Assumi una posizione di affondo con un piede avanti e il ginocchio piegato, con il ginocchio posteriore quasi a contatto con il suolo. Assicurati che il ginocchio anteriore sia allineato con la linea mediana del piede. Spingendo con entrambe le gambe, salta il più in alto possibile, facendo oscillare le braccia per slanciarti. Durante il salto, unisci i piedi e riportali nella posizione iniziale mentre atterri. Ammortizza l''impatto tornando nella posizione di partenza.', 
  'quadriceps', 
  'calves', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Jump/1.jpg'], 
  NOW()
),
(
  '4993b82d-b651-4703-9d63-d6662aa1e6dc', 
  'Split Snatch', 
  'Split Snatch', 
  'Begin with a loaded barbell on the floor. The bar should be close to or touching the shins, and a wide grip should be taken on the bar. The feet should be directly below the hips, with the feet turned out as needed. Lower the hips, with the chest up and the head looking forward. The shoulders should be just in front of the bar. This will be the starting position.
Begin the first pull by driving through the front of the heels, raising the bar from the ground. The back angle should stay the same until the bar passes the knees.
Transition into the second pull by extending through the hips knees and ankles, driving the bar up as quickly as possible. The bar should be close to the body. At peak extension, shrug the shoulders and allow the elbows to flex to the side.
As you move your feet into the receiving position, forcefully pull yourself below the bar as you elevate the bar overhead. The feet should move forcefully to a split position, one foot forward one foot back. Receive the bar with your body as low as possible and the arms fully extended overhead.
Keeping the bar aligned over the front of the heels, your head and chest up, drive through heels of the feet to move to a standing position, bringing your feet together.
Carefully return the weight to floor.', 
  'Inizia con un bilanciere caricato a terra. La sbarra deve essere vicina o a contatto con le tibie; utilizza una presa larga. I piedi devono essere sotto le anche, leggermente ruotati verso l''esterno se necessario. Abbassa le anche mantenendo il petto alto e lo sguardo in avanti. Le spalle devono essere leggermente davanti alla sbarra. Questa è la posizione di partenza. Inizia il primo strappo spingendo attraverso l''avampiede per sollevare il bilanciere. L''angolo della schiena deve rimanere costante finché il bilanciere non supera le ginocchia. Passa al secondo strappo estendendo anche, ginocchia e caviglie, spingendo la sbarra verso l''alto il più velocemente possibile. Il bilanciere deve rimanere vicino al corpo. Alla massima estensione, solleva le spalle (shrug) e fletti i gomiti lateralmente. Mentre porti i piedi nella posizione di ricezione, tirati energicamente sotto la sbarra mentre la porti sopra la testa. I piedi devono scattare in posizione split, un piede avanti e uno indietro. Ricevi il bilanciere col corpo il più in basso possibile e le braccia completamente estese sopra la testa. Mantenendo il bilanciere allineato sopra i talloni, la testa e il petto alti, spingi attraverso i talloni per tornare in posizione eretta, unendo i piedi. Riporta il peso a terra con cura.', 
  'hamstrings', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Snatch/1.jpg'], 
  NOW()
),
(
  '992c2fc5-4a44-4e0d-8fcc-e6a54e7f91ee', 
  'Split Squat with Dumbbells', 
  'Split Squat con manubri', 
  'Position yourself into a staggered stance with the rear foot elevated and front foot forward.
Hold a dumbbell in each hand, letting them hang at the sides. This will be your starting position.
Begin by descending, flexing your knee and hip to lower your body down. Maintain good posture througout the movement. Keep the front knee in line with the foot as you perform the exercise.
At the bottom of the movement, drive through the heel to extend the knee and hip to return to the starting position.', 
  'Posizionati in uno stance sfalsato con il piede posteriore sollevato e quello anteriore avanti. Tieni un manubrio in ciascuna mano, lasciandoli pendere lungo i fianchi. Questa è la posizione di partenza. Inizia la discesa flettendo ginocchio e anca per abbassare il corpo. Mantieni una postura corretta durante tutto il movimento. Tieni il ginocchio anteriore in linea con il piede durante l''esecuzione. Al punto più basso, spingi sul tallone per estendere ginocchio e anca e tornare alla posizione iniziale.', 
  'quadriceps', 
  'glutes', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squat_with_Dumbbells/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squat_with_Dumbbells/1.jpg'], 
  NOW()
),
(
  '09086a39-aa08-4504-9abf-067d0bc87289', 
  'Split Squats', 
  'Split Squat (Jumping)', 
  'Being in a standing position. Jump into a split leg position, with one leg forward and one leg back, flexing the knees and lowering your hips slightly as you do so.
As you descend, immediately reverse direction, standing back up and jumping, reversing the position of your legs. Repeat 5-10 times on each leg.', 
  'Inizia in posizione eretta. Salta portandoti in una posizione a gambe divise, con una gamba avanti e una indietro, flettendo le ginocchia e abbassando leggermente le anche. Durante la discesa, inverte immediatamente la direzione, saltando e invertendo la posizione delle gambe. Ripeti 5-10 volte per gamba.', 
  'hamstrings', 
  'calves', 
  NULL, 
  'intermediate', 
  NULL, 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squats/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squats/1.jpg'], 
  NOW()
),
(
  'ab4efae5-4c7b-4258-96f6-d99d70ecfac2', 
  'Squat Jerk', 
  'Squat Jerk', 
  'Standing with the weight racked on the front of the shoulders, begin with the dip. With your feet directly under your hips, flex the knees without moving the hips backward. Go down only slightly, and reverse direction as powerfully as possible. Drive through the heels create as much speed and force as possible, and be sure to move your head out of the way as the bar leaves the shoulders.
At this moment as the feet leave the floor, the feet must be placed into the receiving position as quickly as possible. In the brief moment the feet are not actively driving against the platform, the athlete''s effort to push the bar up will drive them down. The feet should move forcefully to just outside the hips, turned out as necessary. Receive the bar with your body in a full squat and the arms fully extended overhead.
Keeping the bar aligned over the front of the heels, your head and chest up, drive throught heels of the feet to move to a standing position. Carefully return the weight to floor.', 
  'In piedi con il bilanciere appoggiato sulla parte anteriore delle spalle, inizia con il dip. Con i piedi sotto le anche, fletti le ginocchia senza spostare le anche all''indietro. Scendi solo leggermente e inverte il movimento con la massima potenza. Spingi sui talloni per generare velocità e forza, assicurandoti di spostare la testa all''indietro mentre il bilanciere lascia le spalle. Nel momento in cui i piedi lasciano il suolo, devono posizionarsi nella posizione di ricezione il più velocemente possibile. Nel breve istante in cui i piedi non spingono contro la pedana, lo sforzo per spingere il bilanciere verso l''alto spingerà l''atleta verso il basso. I piedi devono posizionarsi energicamente appena fuori dalle anche, ruotati verso l''esterno se necessario. Ricevi il bilanciere in uno squat completo con le braccia tese sopra la testa. Mantenendo il bilanciere allineato sopra i talloni, testa e petto alti, spingi sui talloni per tornare in piedi. Riporta il peso a terra con cura.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_Jerk/1.jpg'], 
  NOW()
),
(
  '36e0ebbe-2bcb-4395-aa57-a49408bee319', 
  'Squat with Bands', 
  'Squat con elastici', 
  'Set up the bands on the sleeves, secured to either band pegs, the rack, or dumbbells so that there is appropriate tension.
Begin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wide for more emphasis on the back, glutes, adductors, and hamstrings. Keep your head facing forward.
With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips as much as possible. Ideally, your shins should be perpendicular to the ground. Lower bar position necessitates a greater torso lean to keep the bar over the heels. Continue until you break parallel, which is defined as the crease of the hip being in line with the top of the knee.
Keeping the weight on your heels and pushing your feet and knees out, drive upward as you lead the movement with your head. Continue upward, maintaining tightness head to toe, until you have returned to the starting position.', 
  'Fissa gli elastici alle estremità del bilanciere, assicurandoli a perni, al rack o a manubri in modo da ottenere la tensione desiderata. Inizia posizionandoti sotto il bilanciere sulla parte alta della schiena. Stringi le scapole e ruota i gomiti in avanti, cercando di flettere il bilanciere sulle spalle. Stacca il bilanciere dal rack, crea un arco teso nella zona lombare e fai un passo indietro. Tieni i piedi larghi per enfatizzare il lavoro su schiena, glutei, adduttori e femorali. Guarda dritto davanti a te. Con schiena, spalle e core contratti, spingi le ginocchia e i glutei verso l''esterno iniziando la discesa. Spingi le anche il più indietro possibile. Idealmente, le tibie dovrebbero essere perpendicolari al terreno. Una posizione più bassa del bilanciere richiede una maggiore inclinazione del busto per mantenerlo sopra i talloni. Continua fino a superare il parallelo, definito come il punto in cui la piega dell''anca è in linea con la parte superiore del ginocchio. Mantenendo il peso sui talloni e spingendo piedi e ginocchia verso l''esterno, spingi verso l''alto guidando il movimento con la testa. Continua fino a tornare nella posizione iniziale, mantenendo tutto il corpo in tensione.', 
  'quadriceps', 
  'adductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_with_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_with_Bands/1.jpg'], 
  NOW()
),
(
  '88b68bbb-4803-4019-bf18-1206b817af7b', 
  'Squat with Chains', 
  'Squat con catene', 
  'To set up the chains, begin by looping the leader chain over the sleeves of the bar. The heavy chain should be attached using a snap hook. Adjust the length of the lead chain so that a few links are still on the floor at the top of the movement.
Begin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wide for more emphasis on the back, glutes, adductors, and hamstrings. Keep your head facing forward.
With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips as much as possible. Ideally, your shins should be perpendicular to the ground. Lower bar position necessitates a greater torso lean to keep the bar over the heels. Continue until you break parallel, which is defined as the crease of the hip being in line with the top of the knee.
Keeping the weight on your heels and pushing your feet and knees out, drive upward as you lead the movement with your head. Continue upward, maintaining tightness head to toe, until you have returned to the starting position.', 
  'Per montare le catene, fai passare la catena guida sulle estremità del bilanciere. La catena pesante deve essere fissata con un moschettone. Regola la lunghezza in modo che alcune maglie tocchino ancora il suolo nella parte alta del movimento. Inizia posizionandoti sotto il bilanciere sulla schiena. Stringi le scapole e ruota i gomiti in avanti, cercando di flettere il bilanciere. Stacca il bilanciere dal rack, crea un arco teso nella zona lombare e fai un passo indietro. Tieni i piedi larghi per enfatizzare il lavoro su schiena, glutei, adduttori e femorali. Guarda dritto davanti a te. Con schiena, spalle e core contratti, spingi ginocchia e glutei verso l''esterno e inizia la discesa. Spingi le anche il più indietro possibile. Idealmente, le tibie dovrebbero essere perpendicolari al terreno. Una posizione più bassa del bilanciere richiede una maggiore inclinazione del busto per mantenerlo sopra i talloni. Continua fino a superare il parallelo, definito come il punto in cui la piega dell''anca è in linea con la parte superiore del ginocchio. Mantenendo il peso sui talloni e spingendo piedi e ginocchia verso l''esterno, spingi verso l''alto guidando il movimento con la testa. Continua fino a tornare nella posizione iniziale, mantenendo tutto il corpo in tensione.', 
  'quadriceps', 
  'adductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_with_Chains/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_with_Chains/1.jpg'], 
  NOW()
),
(
  '78e9a773-549d-4638-8607-b16d7466734e', 
  'Squat with Plate Movers', 
  'Squat con spostamento dischi', 
  'To begin, first set the bar on a rack to just below shoulder level. Position a weight plate on the ground a couple feet back from the rack. Once the bar is loaded, step under it and place the back of your shoulders across it.
Hold on to the bar with both hands and lift it off the rack by first pushing with your legs and at the same time straighten your torso.
Step away from the rack and adopt a wide stance with the toes slightly pointed out, with one foot on the weight plate. Keep your head up at all times. This will be your starting position.
Begin to slowly lower the bar by bending the knees and hips. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees.
Raise the bar as you exhale by pushing the floor with the heels of your feet as you extend the hips and knees.
At the top of the movement, side step, bringing your feet together on the opposite side of the plate.
Using your inside foot, push the weight plate, sliding it across the floor to where you were just standing.
Place your inside foot on the weight plate, adopting a wide stance for the next repetition.', 
  'Posiziona il bilanciere sul rack appena sotto l''altezza delle spalle. Metti un disco a terra un paio di passi dietro il rack. Dopo aver caricato il bilanciere, posizionati sotto di esso e appoggialo sulla parte posteriore delle spalle. Afferra il bilanciere con entrambe le mani e sollevalo dal rack spingendo con le gambe e raddrizzando contemporaneamente il busto. Allontanati dal rack e adotta uno stance largo con le punte dei piedi leggermente rivolte verso l''esterno, posizionando un piede sul disco a terra. Tieni la testa alta. Questa è la posizione di partenza. Inizia ad abbassare lentamente il bilanciere flettendo ginocchia e anche. Continua fino a quando l''angolo tra coscia e polpaccio diventa leggermente inferiore a 90 gradi. Risali espirando e spingendo sul pavimento con i talloni mentre estendi anche e ginocchia. Al vertice del movimento, fai un passo laterale unendo i piedi sul lato opposto del disco. Usando il piede interno, spingi il disco facendolo scivolare sul pavimento dove ti trovavi prima. Posiziona il piede interno sul disco e adotta nuovamente uno stance largo per la ripetizione successiva.', 
  'quadriceps', 
  'abductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_with_Plate_Movers/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squat_with_Plate_Movers/1.jpg'], 
  NOW()
),
(
  '1ccfb20e-abbb-49d6-ac56-78572885ea52', 
  'Squats - With Bands', 
  'Squat con elastici (banda sotto i piedi)', 
  'To start out, make sure that the exercise band is at an even split between both the left and right side of the body. To do this, use your hands to grab both sides of the band and place both feet in the middle of the band. Your feet should be shoulder width apart from each other.
When holding the bands, they should be the same height on each side. You should be using a pronated grip (palms facing forward) and have the handles of the bands next to your face for this exercise. This is the starting position.
Slowly start to bend the knees and lower the legs so that your thighs are parallel to the floor while exhaling.
Use the heel of your feet to push your body up to the starting position as you exhale.
Repeat for the recommended amount of repetitions.', 
  'Assicurati che l''elastico sia equamente distribuito tra il lato destro e sinistro del corpo. Afferra entrambe le estremità dell''elastico e posiziona entrambi i piedi al centro di esso. I piedi devono essere alla larghezza delle spalle. Tenendo gli elastici, dovrebbero trovarsi alla stessa altezza su entrambi i lati. Usa una presa prona (palmi rivolti in avanti) e tieni le maniglie vicino al viso. Questa è la posizione di partenza. Inizia a flettere le ginocchia e ad abbassare le gambe finché le cosce non sono parallele al pavimento, espirando. Spingi attraverso i talloni per tornare nella posizione di partenza mentre espiri. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'calves', 
  'bands', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squats_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Squats_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '18f98dd4-bb56-43d6-951e-fa6d5322f542', 
  'Stairmaster', 
  'Stairmaster', 
  'To begin, step onto the stairmaster and select the desired option from the menu. You can choose a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise.
Pump your legs up and down in an established rhythm, driving the pedals down but not all the way to the floor. It is recommended that you maintain your grip on the handles so that you don''t fall. The handles can be used to monitor your heart rate to help you stay at an appropriate intensity.
Stairmasters offer convenience, cardiovascular benefits, and usually have less impact than running outside. They are typically much harder than other cardio equipment. A 150 lb person will typically burn over 300 calories in 30 minutes, compared to about 175 calories walking.', 
  'Sali sullo Stairmaster e seleziona l''opzione desiderata dal menu. Puoi scegliere un''impostazione manuale o selezionare un programma predefinito. Solitamente, puoi inserire età e peso per stimare le calorie bruciate durante l''esercizio. Muovi le gambe su e giù seguendo un ritmo costante, spingendo i pedali verso il basso senza arrivare a toccare il pavimento. Si raccomanda di mantenere la presa sui manubri per non perdere l''equilibrio. I manubri possono essere utilizzati per monitorare la frequenza cardiaca e mantenere un''intensità adeguata. Lo Stairmaster offre comodità, benefici cardiovascolari e generalmente un impatto minore rispetto alla corsa all''aperto. È tipicamente molto più impegnativo di altre macchine cardio.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stairmaster/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stairmaster/1.jpg'], 
  NOW()
),
(
  '89bab17e-98c7-4080-ba16-a4b7ae99cd58', 
  'Standing Alternating Dumbbell Press', 
  'Standing Alternating Dumbbell Press', 
  'Stand with a dumbbell in each hand. Raise the dumbbells to your shoulders with your palms facing forward and your elbows pointed out. This will be your starting position.
Extend one arm to press the dumbbell straight up, keeping your off hand in place. Do not lean or jerk the weight during the movement.
After a brief pause, return the weight to the starting position.
Repeat for the opposite side, continuing to alternate between arms.', 
  'In piedi, impugna un manubrio per mano. Porta i manubri all''altezza delle spalle con i palmi rivolti in avanti e i gomiti rivolti verso l''esterno. Questa è la posizione di partenza.
Distendi un braccio per spingere il manubrio verso l''alto, mantenendo l''altro braccio fermo. Evita di inclinare il busto o dare strattoni durante il movimento.
Dopo una breve pausa, riporta il peso nella posizione di partenza.
Ripeti con il lato opposto, continuando ad alternare le braccia.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Alternating_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Alternating_Dumbbell_Press/1.jpg'], 
  NOW()
),
(
  'a1e7b44a-f381-4b9b-89fb-f897d3c6df97', 
  'Standing Barbell Calf Raise', 
  'Standing Barbell Calf Raise', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the bar on the back of your shoulders (slightly below the neck).
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. The knees should be kept with a slight bend; never locked. This will be your starting position. Tip: For better range of motion you may also place the ball of your feet on a wooden block but be careful as this option requires more balance and a sturdy block.
Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.
Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.
Repeat for the recommended amount of repetitions.', 
  'Per sicurezza, questo esercizio va eseguito all''interno di un rack. Regola il bilanciere su un rack all''altezza delle tue spalle. Una volta caricato, posizionati sotto la sbarra e appoggiala sulla parte posteriore delle spalle (appena sotto il collo).
Impugna il bilanciere con entrambe le mani e sollevalo dal rack spingendo con le gambe e raddrizzando contemporaneamente il busto.
Allontanati dal rack e posiziona i piedi alla larghezza delle spalle con le punte leggermente rivolte verso l''esterno. Tieni la testa alta e la schiena dritta. Le ginocchia devono rimanere leggermente flesse, mai bloccate. Questa è la posizione di partenza. Suggerimento: per un maggiore range di movimento, puoi posizionare l''avampiede su un rialzo, prestando attenzione all''equilibrio.
Espirando, solleva i talloni estendendo le caviglie il più possibile e contraendo i polpacci. Assicurati che le ginocchia rimangano immobili. Mantieni la posizione di contrazione per un secondo prima di scendere.
Inspira e torna lentamente alla posizione di partenza abbassando i talloni fino ad avvertire l''allungamento dei polpacci.
Ripeti per il numero di ripetizioni raccomandato.', 
  'calves', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Barbell_Calf_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Barbell_Calf_Raise/1.jpg'], 
  NOW()
),
(
  '9bb227a0-06da-4fcb-a8ef-826071aa6cbb', 
  'Standing Barbell Press Behind Neck', 
  'Standing Barbell Press Behind Neck', 
  'This exercise is best performed inside a squat rack for easier pick up of the bar. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Your back should be kept straight while performing this exercise. This will be your starting position.
Elevate the barbell overhead by fully extending your arms while breathing out.
Hold the contraction for a second and lower the barbell back down to the starting position by inhaling.
Repeat for the recommended amount of repetitions.', 
  'Esegui l''esercizio all''interno di un rack. Regola il bilanciere su un rack all''altezza delle spalle, posizionati sotto di esso e appoggialo sulla parte posteriore delle spalle (appena sotto il collo).
Impugna la sbarra con entrambe le mani e sollevala dal rack spingendo con le gambe e raddrizzando il busto.
Allontanati dal rack, posiziona i piedi alla larghezza delle spalle con le punte leggermente rivolte verso l''esterno e mantieni la schiena dritta. Questa è la posizione di partenza.
Espirando, solleva il bilanciere sopra la testa distendendo completamente le braccia.
Mantieni la contrazione per un secondo, quindi inspira e abbassa il bilanciere fino alla posizione di partenza.
Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'triceps', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Barbell_Press_Behind_Neck/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Barbell_Press_Behind_Neck/1.jpg'], 
  NOW()
),
(
  '6c57e209-e269-402c-be25-239bb8320615', 
  'Standing Bent-Over One-Arm Dumbbell Triceps Extension', 
  'Standing Bent-Over One-Arm Dumbbell Triceps Extension', 
  'With a dumbbell in one hand and the palm facing your torso, bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up.
The upper arm should be close to the torso and parallel to the floor while the forearm is pointing towards the floor as the hand holds the weight. Tip: There should be a 90-degree angle between the forearm and the upper arm. This is your starting position.
Keeping the upper arms stationary, use the triceps to lift the weights as you exhale until the forearms are parallel to the floor and the whole arm is extended. Like many other arm exercises, only the forearm moves.
After a second contraction at the top, slowly lower the dumbbell back to the starting position as you inhale.
Repeat the movement for the prescribed amount of repetitions.
Switch arms and repeat the exercise.', 
  'Con un manubrio in una mano e il palmo rivolto verso il busto, fletti leggermente le ginocchia e inclinati in avanti piegandoti dal bacino, mantenendo la schiena dritta finché non è quasi parallela al pavimento. Tieni la testa alta.
Il braccio deve rimanere vicino al busto e parallelo al pavimento, mentre l''avambraccio punta verso il suolo. Suggerimento: tra avambraccio e braccio deve esserci un angolo di 90 gradi. Questa è la posizione di partenza.
Mantenendo fermo il braccio, espira ed estendi l''avambraccio usando i tricipiti finché l''intero braccio è teso e parallelo al pavimento. Solo l''avambraccio deve muoversi.
Dopo un secondo di contrazione, inspira e torna lentamente alla posizione di partenza.
Ripeti per le ripetizioni prescritte, quindi cambia braccio.', 
  'triceps', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Bent-Over_One-Arm_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Bent-Over_One-Arm_Dumbbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  'e3ba1873-af33-47e6-b2ad-bedf05f612d6', 
  'Standing Bent-Over Two-Arm Dumbbell Triceps Extension', 
  'Standing Bent-Over Two-Arm Dumbbell Triceps Extension', 
  'With a dumbbell in each hand and the palms facing your torso, bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Make sure that you keep the head up. The upper arms should be close to the torso and parallel to the floor while the forearms are pointing towards the floor as the hands hold the weights. Tip: There should be a 90-degree angle between the forearms and the upper arm. This is your starting position.
Keeping the upper arms stationary, use the triceps to lift the weights as you exhale until the forearms are parallel to the floor and the whole arms are extended. Like many other arm exercises, only the forearm moves.
After a second contraction at the top, slowly lower the dumbbells back to their starting position as you inhale.
Repeat the movement for the prescribed amount of repetitions.', 
  'Con un manubrio per mano e i palmi rivolti verso il busto, fletti leggermente le ginocchia e piegati in avanti dal bacino mantenendo la schiena dritta, quasi parallela al suolo. Tieni la testa alta. Le braccia devono essere vicine al busto e parallele al pavimento, con gli avambracci rivolti verso il suolo. Suggerimento: tra avambraccio e braccio deve esserci un angolo di 90 gradi. Questa è la posizione di partenza.
Mantenendo le braccia ferme, espira ed estendi gli avambracci usando i tricipiti fino a quando le braccia sono completamente distese e parallele al pavimento. Solo gli avambracci devono muoversi.
Dopo un secondo di contrazione, inspira e torna lentamente alla posizione di partenza.
Ripeti per il numero di ripetizioni prescritte.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Bent-Over_Two-Arm_Dumbbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '7767e06d-40e5-44b3-bd28-87faa9a586ab', 
  'Standing Biceps Cable Curl', 
  'Standing Biceps Cable Curl', 
  'Stand up with your torso upright while holding a cable curl bar that is attached to a low pulley. Grab the cable bar at shoulder width and keep the elbows close to the torso. The palm of your hands should be facing up (supinated grip). This will be your starting position.
While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second as you squeeze the muscle.
Slowly begin to bring the curl bar back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi, con il busto eretto, impugna la sbarra collegata a una carrucola bassa. Afferrala alla larghezza delle spalle, tieni i gomiti vicini al busto e i palmi rivolti verso l''alto (presa supinata). Questa è la posizione di partenza.
Mantenendo le braccia ferme, espira e fletti le braccia contraendo i bicipiti. Solo gli avambracci devono muoversi. Continua finché i bicipiti sono completamente contratti e la sbarra è all''altezza delle spalle. Mantieni la posizione per un secondo contraendo il muscolo.
Inspira e torna lentamente alla posizione di partenza.
Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Biceps_Cable_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Biceps_Cable_Curl/1.jpg'], 
  NOW()
),
(
  '06fdd746-c893-4ec0-9dc6-3b1eb344822c', 
  'Standing Biceps Stretch', 
  'Standing Biceps Stretch', 
  'Clasp your hands behind your back with your palms together, straighten arms and then rotate them so your palms face downward.
Raise your arms up and hold until you feel a stretch in your biceps.', 
  'Unisci le mani dietro la schiena con i palmi a contatto, distendi le braccia e ruotale in modo che i palmi siano rivolti verso il basso.
Solleva le braccia finché non avverti una tensione di allungamento nei bicipiti.', 
  'biceps', 
  'chest', 
  'other', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Biceps_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Biceps_Stretch/1.jpg'], 
  NOW()
),
(
  '03b0b974-58eb-4676-9c76-7ad0f85afd54', 
  'Standing Bradford Press', 
  'Standing Bradford Press', 
  'Place a loaded bar at shoulder level in a rack. With a pronated grip at shoulder width, begin with the bar racked across the front of your shoulders. This is your starting position.
Initiate the lift by extending the elbows to press the bar overhead. Avoid locking out the elbow as you move the weight behind your head.
Lower the bar down to the back of the head until your elbow forms a right angle.
Lift the bar back over your head by extending the elbows
Lower the bar down to the starting position.
Alternate in this manner until you complete the recommended amount of repetitions.', 
  'Posiziona un bilanciere caricato su un rack all''altezza delle spalle. Con una presa prona alla larghezza delle spalle, inizia con il bilanciere appoggiato sulla parte anteriore delle spalle. Questa è la posizione di partenza.
Inizia il sollevamento distendendo i gomiti per portare il bilanciere sopra la testa. Evita di bloccare i gomiti mentre porti il peso dietro la nuca.
Abbassa il bilanciere dietro la testa finché i gomiti non formano un angolo retto.
Solleva nuovamente il bilanciere sopra la testa distendendo i gomiti.
Abbassa il bilanciere fino alla posizione di partenza.
Continua ad alternare fino a completare il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'triceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Bradford_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Bradford_Press/1.jpg'], 
  NOW()
),
(
  '047fc975-d51e-4d10-b4c5-78dab721637e', 
  'Standing Cable Chest Press', 
  'Standing Cable Chest Press', 
  'Position dual pulleys to chest height and select an appropriate weight. Stand a foot or two in front of the cables, holding one in each hand. You can stagger your stance for better stability.
Position the upper arm at a 90 degree angle with the shoulder blades together. This will be your starting position.
Keeping the rest of the body stationary, extend through the elbows to press the handles forward, drawing them together in front of you.
Pause at the top of the motion, and return to the starting position.', 
  'Posiziona le due carrucole all''altezza del petto e seleziona il carico. In piedi, a circa 30-60 cm davanti ai cavi, impugna un cavo per mano. Puoi tenere una posizione sfalsata dei piedi per una maggiore stabilità.
Posiziona le braccia con un angolo di 90 gradi e le scapole addotte. Questa è la posizione di partenza.
Mantenendo il resto del corpo immobile, distendi i gomiti per spingere le maniglie in avanti, avvicinandole l''una all''altra.
Fai una pausa al culmine del movimento e torna alla posizione di partenza.', 
  'chest', 
  'shoulders', 
  'cable', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Cable_Chest_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Cable_Chest_Press/1.jpg'], 
  NOW()
),
(
  'fc36e11e-08eb-4b4d-afa0-89758486e333', 
  'Standing Cable Lift', 
  'Standing Cable Lift', 
  'Connect a standard handle on a tower, and move the cable to the lowest pulley position.
With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately arm''s length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable.
With your feet positioned shoulder width apart, squat down and grab the handle with both hands. Your arms should still be fully extended.
In one motion, pull the handle up and across your body until your arms are in a fully-extended position above your head.
Keep your back straight and your arms close to your body as you pivot your back foot and straighten your legs to get a full range of motion.
Retract your arms and then your body. Return to the neutral position in a slow and controlled manner.
Repeat to failure.
Then, reposition and repeat the same series of movements on the opposite side.', 
  'Collega una maniglia a una torre e sposta il cavo sulla posizione di carrucola più bassa.
Posizionati di fianco alla torre, afferra la maniglia con una mano e allontanati fino a sentire la tensione del cavo; il braccio teso deve essere allineato con il cavo.
Con i piedi alla larghezza delle spalle, accovacciati e afferra la maniglia con entrambe le mani, mantenendo le braccia completamente distese.
In un unico movimento fluido, tira la maniglia verso l''alto e attraverso il corpo finché le braccia non sono completamente distese sopra la testa.
Mantieni la schiena dritta e le braccia vicine al corpo mentre ruoti il piede posteriore e distendi le gambe per ottenere un range di movimento completo.
Riporta le braccia e il corpo nella posizione neutra in modo lento e controllato.
Ripeti fino ad esaurimento.
Cambia posizione e ripeti la serie di movimenti sul lato opposto.', 
  'abdominals', 
  'shoulders', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Cable_Lift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Cable_Lift/1.jpg'], 
  NOW()
),
(
  '13024480-347c-4d16-827e-176775c99b91', 
  'Standing Cable Wood Chop', 
  'Standing Cable Wood Chop', 
  'Connect a standard handle to a tower, and move the cable to the highest pulley position.
With your side to the cable, grab the handle with one hand and step away from the tower. You should be approximately arm''s length away from the pulley, with the tension of the weight on the cable. Your outstretched arm should be aligned with the cable.
With your feet positioned shoulder width apart, reach upward with your other hand and grab the handle with both hands. Your arms should still be fully extended.
In one motion, pull the handle down and across your body to your front knee while rotating your torso.
Keep your back and arms straight and core tight while you pivot your back foot and bend your knees to get a full range of motion.
Maintain your stance and straight arms. Return to the neutral position in a slow and controlled manner.
Repeat to failure.
Then, reposition and repeat the same series of movements on the opposite side.', 
  'Collega una maniglia standard a una torretta per cavi, posizionando la carrucola all''altezza massima. Mettiti di lato rispetto alla torretta, afferra la maniglia con una mano e allontanati fino a tendere il cavo; dovresti essere a circa una lunghezza di braccio dalla carrucola. Il braccio teso deve essere allineato con il cavo. Con i piedi alla larghezza delle spalle, afferra la maniglia con l''altra mano, mantenendo entrambe le braccia completamente estese. In un unico movimento fluido, tira la maniglia verso il basso e diagonalmente verso il ginocchio opposto, ruotando il busto. Mantieni schiena e braccia dritte e il core contratto, facendo perno sul piede posteriore e piegando le ginocchia per un range di movimento completo. Mantieni la postura e le braccia tese, quindi torna lentamente alla posizione neutra in modo controllato. Ripeti fino al cedimento, poi cambia lato e ripeti la serie.', 
  'abdominals', 
  'shoulders', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Cable_Wood_Chop/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Cable_Wood_Chop/1.jpg'], 
  NOW()
),
(
  '170bfe78-e981-4355-a7c0-d9b8a3c8c802', 
  'Standing Calf Raises', 
  'Standing Calf Raises (Calf Raise alla macchina)', 
  'Adjust the padded lever of the calf raise machine to fit your height.
Place your shoulders under the pads provided and position your toes facing forward (or using any of the two other positions described at the beginning of the chapter). The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position.
Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.
Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.
Repeat for the recommended amount of repetitions.', 
  'Regola il cuscinetto della macchina in base alla tua altezza. Posiziona le spalle sotto i cuscinetti e le punte dei piedi in avanti (o nelle altre posizioni descritte nel capitolo). L''avampiede deve poggiare sull''apposito rialzo, con i talloni nel vuoto. Spingi la leva verso l''alto estendendo anche e ginocchia finché il busto non è eretto. Mantieni le ginocchia leggermente flesse, mai bloccate. Questa è la posizione di partenza. Espirando, solleva i talloni estendendo al massimo le caviglie e contraendo i polpacci. Assicurati che le ginocchia rimangano ferme e non si pieghino. Mantieni la contrazione per un secondo prima di scendere. Inspirando, torna lentamente alla posizione iniziale abbassando i talloni finché i polpacci non sono allungati. Ripeti per il numero di ripetizioni consigliato.', 
  'calves', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/1.jpg'], 
  NOW()
),
(
  '1503a071-60c8-4cc2-ac3a-078f5a7ee8c8', 
  'Standing Concentration Curl', 
  'Standing Concentration Curl', 
  'Taking a dumbbell in your working hand, lean forward. Allow your working arm to hang perpendicular to the ground with the elbow pointing out. This will be your starting position.
Flex the elbow to curl the weight, keeping the upper arm stationary. At the top of the repetition, flex the biceps and pause.
Lower the dumbbell back to the starting position.
Repeat the movement for the prescribed amount of repetitions.', 
  'Impugna un manubrio e chinati in avanti. Lascia che il braccio che lavora penda perpendicolare al suolo con il gomito rivolto verso l''esterno. Questa è la posizione di partenza. Fletti il gomito per sollevare il peso, mantenendo la parte superiore del braccio ferma. Al culmine della ripetizione, contrai il bicipite e fai una pausa. Abbassa il manubrio tornando alla posizione di partenza. Ripeti per il numero di ripetizioni prescritto.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Concentration_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Concentration_Curl/1.jpg'], 
  NOW()
),
(
  '6db70b55-dd56-41aa-877a-26774f8f7713', 
  'Standing Dumbbell Calf Raise', 
  'Standing Dumbbell Calf Raise', 
  'Stand with your torso upright holding two dumbbells in your hands by your sides. Place the ball of the foot on a sturdy and stable wooden board (that is around 2-3 inches tall) while your heels extend off and touch the floor. This will be your starting position.
With the toes pointing either straight (to hit all parts equally), inwards (for emphasis on the outer head) or outwards (for emphasis on the inner head), raise the heels off the floor as you exhale by contracting the calves. Hold the top contraction for a second.
As you inhale, go back to the starting position by slowly lowering the heels.
Repeat for the recommended amount of times.', 
  'In piedi, con il busto eretto, impugna due manubri lungo i fianchi. Posiziona l''avampiede su un supporto stabile (alto circa 5-7 cm) lasciando i talloni sospesi. Questa è la posizione di partenza. Con le punte dei piedi dritte, verso l''interno o verso l''esterno, espira e solleva i talloni contraendo i polpacci. Mantieni la contrazione per un secondo. Inspirando, torna lentamente alla posizione iniziale abbassando i talloni. Ripeti per il numero di ripetizioni consigliato.', 
  'calves', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Calf_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Calf_Raise/1.jpg'], 
  NOW()
),
(
  '12a2473c-8e5f-4f1f-a39d-d09cbd069052', 
  'Standing Dumbbell Press', 
  'Standing Dumbbell Press', 
  'Standing with your feet shoulder width apart, take a dumbbell in each hand. Raise the dumbbells to head height, the elbows out and about 90 degrees. This will be your starting position.
Maintaining strict technique with no leg drive or leaning back, extend through the elbow to raise the weights together directly above your head.
Pause, and slowly return the weight to the starting position.', 
  'In piedi con i piedi alla larghezza delle spalle, impugna un manubrio per mano. Porta i manubri all''altezza della testa con i gomiti piegati a circa 90 gradi. Questa è la posizione di partenza. Mantenendo una tecnica rigorosa, senza spinta delle gambe o oscillazioni del busto, estendi i gomiti per sollevare i pesi contemporaneamente fin sopra la testa. Fai una pausa e torna lentamente alla posizione iniziale.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Press/1.jpg'], 
  NOW()
),
(
  'adf6be08-0b88-4cda-9acb-5de17a7a1b89', 
  'Standing Dumbbell Reverse Curl', 
  'Standing Dumbbell Reverse Curl', 
  'To begin, stand straight with a dumbbell in each hand using a pronated grip (palms facing down). Your arms should be fully extended while your feet are shoulder width apart from each other. This is the starting position.
While holding the upper arms stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the muscle.
Slowly begin to bring the dumbbells back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'In piedi, impugna un manubrio in ogni mano con una presa prona (palmi rivolti verso il basso). Le braccia devono essere completamente distese e i piedi alla larghezza delle spalle. Questa è la posizione di partenza. Mantenendo la parte superiore del braccio ferma, espira e fletti i gomiti contraendo i bicipiti. Solo gli avambracci devono muoversi. Continua finché i bicipiti non sono contratti e i manubri sono all''altezza delle spalle. Mantieni la contrazione per un secondo, contraendo il muscolo. Inspirando, torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Reverse_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Reverse_Curl/1.jpg'], 
  NOW()
),
(
  'bead9ae6-4698-4cb4-ad10-ac45986e1fd6', 
  'Standing Dumbbell Straight-Arm Front Delt Raise Above Head', 
  'Standing Dumbbell Straight-Arm Front Delt Raise Above Head', 
  'Hold the dumbbells in front of your thighs, palms facing your thighs.
Keep your arms straight with a slight bend at the elbows but keep them locked. This will be your starting position.
Raise the dumbbells in a semicircular motion to arm''s length overhead as you exhale.
Slowly return to the starting position using the same path as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Impugna i manubri davanti alle cosce, con i palmi rivolti verso le gambe. Mantieni le braccia tese con una leggera flessione dei gomiti (bloccati in quella posizione). Questa è la posizione di partenza. Espirando, solleva i manubri con un movimento semicircolare fino sopra la testa. Inspirando, torna lentamente alla posizione iniziale seguendo lo stesso percorso. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Straight-Arm_Front_Delt_Raise_Above_Head/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Straight-Arm_Front_Delt_Raise_Above_Head/1.jpg'], 
  NOW()
),
(
  'bad10bb9-7256-458a-835f-f82c207ae20d', 
  'Standing Dumbbell Triceps Extension', 
  'Standing Dumbbell Triceps Extension', 
  'To begin, stand up with a dumbbell held by both hands. Your feet should be about shoulder width apart from each other. Slowly use both hands to grab the dumbbell and lift it over your head until both arms are fully extended.
The resistance should be resting in the palms of your hands with your thumbs around it. The palm of the hands should be facing up towards the ceiling. This will be your starting position.
Keeping your upper arms close to your head with elbows in and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.
Go back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step.
Repeat for the recommended amount of repetitions.', 
  'In piedi, afferra un manubrio con entrambe le mani. Sollevalo sopra la testa finché le braccia non sono completamente estese. Il peso deve poggiare sui palmi con i pollici che lo avvolgono, rivolti verso il soffitto. Questa è la posizione di partenza. Mantenendo la parte superiore delle braccia vicino alla testa e i gomiti perpendicolari al suolo, abbassa il manubrio dietro la testa con un movimento semicircolare finché gli avambracci non toccano i bicipiti. Suggerimento: la parte superiore delle braccia deve restare ferma. Inspira durante la discesa. Usa i tricipiti per sollevare il peso tornando alla posizione iniziale ed espira durante lo sforzo. Ripeti per il numero di ripetizioni consigliato.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '65201fc6-6e9f-4ffe-bdc5-a9117016a595', 
  'Standing Dumbbell Upright Row', 
  'Standing Dumbbell Upright Row', 
  'Grasp a dumbbell in each hand with a pronated (palms forward) grip that is slightly less than shoulder width. The dumbbells should be resting on top of your thighs. Your arms should be extended with a slight bend at the elbows and your back should be straight. This will be your starting position.
Use your side shoulders to lift the dumbbells as you exhale. The dumbbells should be close to the body as you move it up and the elbows should drive the motion. Continue to lift them until they nearly touch your chin. Tip: Your elbows should drive the motion. As you lift the dumbbells, your elbows should always be higher than your forearms. Also, keep your torso stationary and pause for a second at the top of the movement.
Lower the dumbbells back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Impugna un manubrio per mano con presa prona (palmi verso il corpo) leggermente più stretta della larghezza delle spalle. I manubri poggiano sulle cosce, le braccia sono tese con i gomiti leggermente piegati e la schiena dritta. Questa è la posizione di partenza. Espirando, solleva i manubri usando i deltoidi laterali; mantieni i manubri vicini al corpo e guida il movimento con i gomiti. Solleva finché i manubri quasi toccano il mento. Suggerimento: i gomiti devono rimanere sempre più alti degli avambracci. Mantieni il busto fermo e fai una pausa al culmine del movimento. Inspirando, abbassa lentamente i manubri alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'traps', 
  'biceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Upright_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Upright_Row/1.jpg'], 
  NOW()
),
(
  'b092e42c-11e3-40f8-87e2-34b61bd11848', 
  'Standing Elevated Quad Stretch', 
  'Standing Elevated Quad Stretch', 
  'Start by standing with your back about two to three feet away from a bench or step.
Lift one leg behind you and rest your foot on the step,either on your instep or the ball of your foot, whichever you find most comfortable.
Keep your supporting knee slightly bent and avoid letting that knee extend out beyond your toes. Switch sides.', 
  'In piedi, posizionati a circa 60-90 cm da una panca o uno step. Solleva una gamba all''indietro e poggia il piede sullo step (sul collo del piede o sull''avampiede, in base alla comodità). Mantieni il ginocchio della gamba di supporto leggermente piegato, evitando che superi la punta del piede. Cambia gamba.', 
  'quadriceps', 
  NULL, 
  'other', 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Elevated_Quad_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Elevated_Quad_Stretch/1.jpg'], 
  NOW()
),
(
  '65763170-cd02-4482-b2da-6c8146d2fcb1', 
  'Standing Front Barbell Raise Over Head', 
  'Sollevamento frontale del bilanciere sopra la testa in piedi', 
  'To begin, stand straight with a barbell in your hands. You should grip the bar with palms facing down and a closer than shoulder width grip apart from each other.
Your feet should be shoulder width apart from each other. Your elbows should be slightly bent. This is the starting position.
Lift the barbell up until it is directly over your head while exhaling. Make sure to keep your elbows slightly bent when performing each repetition.
Once you feel the contraction, begin to lower the barbell back down to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Per iniziare, mettiti in piedi con un bilanciere tra le mani. Impugna la sbarra con i palmi rivolti verso il basso e una presa leggermente più stretta della larghezza delle spalle. I piedi devono essere alla larghezza delle spalle. Tieni i gomiti leggermente flessi. Questa è la posizione di partenza. Espirando, solleva il bilanciere fino a portarlo direttamente sopra la testa. Assicurati di mantenere i gomiti leggermente flessi durante l''esecuzione di ogni ripetizione. Una volta avvertita la contrazione, inspira e inizia ad abbassare il bilanciere fino alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  NULL, 
  'barbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Front_Barbell_Raise_Over_Head/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Front_Barbell_Raise_Over_Head/1.jpg'], 
  NOW()
),
(
  'c315765d-d7e8-403b-b6f0-ebdd8c2e4553', 
  'Standing Gastrocnemius Calf Stretch', 
  'Stretching del gastrocnemio in piedi', 
  'Place your right heel on a step with your knee extended and lean forward to grab your right toe with your right hand. Your left knee should be slightly bent and your back should be straight.
Support your weight on your left leg and place your left hand on your left thigh.
Pull your right toes toward your knee until you feel a stretch in your calf.', 
  'Posiziona il tallone destro su un gradino con il ginocchio teso e chinati in avanti per afferrare la punta del piede destro con la mano destra. Il ginocchio sinistro deve essere leggermente flesso e la schiena dritta. Scarica il peso sulla gamba sinistra e appoggia la mano sinistra sulla coscia sinistra. Tira le dita del piede destro verso il ginocchio finché non senti allungare il polpaccio.', 
  'calves', 
  'hamstrings', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Gastrocnemius_Calf_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Gastrocnemius_Calf_Stretch/1.jpg'], 
  NOW()
),
(
  '4ef32f27-a19f-4e16-9584-e2cca4455d23', 
  'Standing Hamstring and Calf Stretch', 
  'Stretching di ischiocrurali e polpacci in piedi', 
  'Being by looping a belt, band, or rope around one foot. While standing, place that foot forward.
Bend your back leg, while keeping the front one straight. Now raise the toes of your front foot off of the ground and lean forward.
Using the belt, pull on the top of the foot to increase the stretch in the calf. Hold for 10-20 seconds and repeat with the other foot.', 
  'Inizia facendo passare una fascia, una corda o un asciugamano attorno a un piede. In piedi, porta avanti il piede interessato. Fletti la gamba posteriore mantenendo tesa quella anteriore. Ora solleva la punta del piede anteriore da terra e chinati in avanti. Usando la fascia, tira la parte superiore del piede per aumentare l''allungamento del polpaccio. Mantieni la posizione per 10-20 secondi e ripeti con l''altro piede.', 
  'hamstrings', 
  NULL, 
  'other', 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hamstring_and_Calf_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hamstring_and_Calf_Stretch/1.jpg'], 
  NOW()
),
(
  'efcac6c6-269a-4158-ace5-c3da0a2de383', 
  'Standing Hip Circles', 
  'Circonduzioni dell''anca in piedi', 
  'Begin standing on one leg, holding to a vertical support.
Raise the unsupported knee to 90 degrees. This will be your starting position.
Open the hip as far as possible, attempting to make a big circle with your knee.
Perform this movement slowly for a number of repetitions, and repeat on the other side.', 
  'Inizia in piedi su una gamba, tenendoti a un supporto verticale. Solleva il ginocchio della gamba libera a 90 gradi. Questa è la posizione di partenza. Apri l''anca il più possibile, cercando di disegnare un ampio cerchio con il ginocchio. Esegui il movimento lentamente per il numero di ripetizioni indicato, quindi ripeti sull''altro lato.', 
  'abductors', 
  'adductors', 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hip_Circles/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hip_Circles/1.jpg'], 
  NOW()
),
(
  'b26fa5cb-dcee-41d8-ae99-632f1e032011', 
  'Standing Hip Flexors', 
  'Stretching dei flessori dell''anca in piedi', 
  'Stand up straight with the spine vertical, the left foot slightly in front of the right.
Bend both knees and lift the back heel off the floor as you press the right hip forward. You can''t get a thorough, deep stretch in this position, however, because it''s hard to relax the hip flexor and stand on it at the same time. Switch sides.', 
  'Stai in piedi con la colonna vertebrale in verticale e il piede sinistro leggermente più avanti del destro. Piega entrambe le ginocchia e solleva il tallone posteriore da terra spingendo l''anca destra in avanti. Nota: in questa posizione è difficile ottenere uno stretching profondo e completo, poiché è complicato rilassare il flessore dell''anca mentre ci si poggia sopra. Cambia lato.', 
  'quadriceps', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hip_Flexors/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Hip_Flexors/1.jpg'], 
  NOW()
),
(
  'f46066f3-7fd0-4b6c-9dee-2c78f3fcd9ff', 
  'Standing Inner-Biceps Curl', 
  'Inner Biceps Curl in piedi', 
  'Stand up with a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Your legs should be at about shoulder''s width apart from each other.
Rotate the palms of the hands so that they are facing inward in a neutral position. This will be your starting position.
While holding the upper arms stationary, curl the weights out while contracting the biceps as you breathe out. Your wrist should turn so that when the weights are fully elevated you have supinated grip (palms facing up).
Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: Keep the forearms aligned with your outer deltoids.
Hold the contracted position for a second as you squeeze the biceps.
Slowly begin to bring the dumbbells back to the starting position as your breathe in. Remember to rotate the wrists as you lower the weight in order to switch back to a neutral grip.
Repeat for the recommended amount of repetitions.', 
  'In piedi, tieni un manubrio per mano lungo i fianchi. I gomiti devono essere vicini al busto e le gambe divaricate alla larghezza delle spalle. Ruota i palmi delle mani in una posizione neutra. Questa è la posizione di partenza. Mantenendo la parte superiore delle braccia ferma, espira ed esegui un curl verso l''esterno contraendo i bicipiti. Ruota il polso in modo che, a sollevamento completo, la presa sia supinata (palmi rivolti verso l''alto). Solo gli avambracci devono muoversi. Continua finché i bicipiti non sono completamente contratti e i manubri sono all''altezza delle spalle. Suggerimento: tieni gli avambracci allineati con i deltoidi esterni. Mantieni la contrazione per un secondo, strizzando i bicipiti. Inspira e abbassa lentamente i manubri fino alla posizione iniziale. Ricorda di ruotare i polsi durante la discesa per tornare alla presa neutra. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Inner-Biceps_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Inner-Biceps_Curl/1.jpg'], 
  NOW()
),
(
  'c054f7b8-774a-42cb-b67d-9b0fb0977889', 
  'Standing Lateral Stretch', 
  'Stretching laterale in piedi', 
  'Take a slightly wider than hip distance stance with your knees slightly bent.
Place your right hand on your right hip to support the spine.
Raise your left arm in a vertical line and place your left hand behind your head. Keep it there as you incline your torso to the right.
Keep your weight evenly distributed between both legs (don''t lean into your left hip). Switch sides.', 
  'Divarica i piedi leggermente più delle anche e mantieni le ginocchia leggermente flesse. Appoggia la mano destra sul fianco destro per sostenere la colonna. Solleva il braccio sinistro in verticale e porta la mano dietro la testa. Mantieni la posizione mentre inclini il busto verso destra. Distribuisci il peso uniformemente tra le due gambe (non spostarlo sul fianco sinistro). Cambia lato.', 
  'abdominals', 
  NULL, 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Lateral_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Lateral_Stretch/1.jpg'], 
  NOW()
),
(
  'b3e8b70b-d4c5-4025-bbe6-5f7eb928abe4', 
  'Standing Leg Curl', 
  'Leg Curl in piedi', 
  'Adjust the machine lever to fit your height and lie with your torso bent at the waist facing forward around 30-45 degrees (since an angled position is more favorable for hamstrings recruitment) with the pad of the lever on the back of your right leg (just a few inches under the calves) and the front of the right leg on top of the machine pad.
Keeping the torso bent forward, ensure your leg is fully stretched and grab the side handles of the machine. Position your toes straight. This will be your starting position.
As you exhale, curl your right leg up as far as possible without lifting the upper leg from the pad. Once you hit the fully contracted position, hold it for a second.
As you inhale, bring the legs back to the initial position. Repeat for the recommended amount of repetitions.
Perform the same exercise now for the left leg.', 
  'Regola la leva del macchinario in base alla tua altezza. Inclinati in avanti con il busto di circa 30-45 gradi (una posizione angolata favorisce il reclutamento degli ischiocrurali) con l''imbottitura della leva dietro la gamba destra (appena sotto il polpaccio) e la parte anteriore della gamba appoggiata sull''imbottitura della macchina. Mantenendo il busto inclinato, assicurati che la gamba sia completamente tesa e afferra le maniglie laterali. Punta le dita dei piedi in avanti. Questa è la posizione di partenza. Espirando, fletti la gamba destra il più possibile senza sollevare la coscia dall''imbottitura. Una volta raggiunta la massima contrazione, mantieni la posizione per un secondo. Inspira e riporta la gamba nella posizione iniziale. Ripeti per il numero di ripetizioni raccomandato. Esegui lo stesso esercizio con la gamba sinistra.', 
  'hamstrings', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Leg_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Leg_Curl/1.jpg'], 
  NOW()
),
(
  '2d9b5aa7-e5d5-4948-b66d-4cc40e8b756a', 
  'Standing Long Jump', 
  'Salto in lungo da fermo', 
  'This drill is best done in sand or other soft landing surface. Ensure that you are able to measure distance. Stand in a partial squat stance with feet shoulder width apart.
Utilizing a big arm swing and a countermovement of the legs, jump forward as far as you can.
Attempt to land with your feet out in front you, reaching as far as possible with your legs.
Measure the distance from your landing point to the starting point and track results.', 
  'Questo esercizio è ideale se eseguito sulla sabbia o su una superficie morbida. Assicurati di poter misurare la distanza. Mettiti in posizione di semi-squat con i piedi alla larghezza delle spalle. Sfruttando un ampio slancio delle braccia e una contro-oscillazione delle gambe, salta in avanti il più lontano possibile. Cerca di atterrare con i piedi ben distesi in avanti. Misura la distanza dal punto di atterraggio al punto di partenza e registra i risultati.', 
  'quadriceps', 
  'calves', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Long_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Long_Jump/1.jpg'], 
  NOW()
),
(
  '35b0c0fe-6d9f-4808-860e-f9708cb7c829', 
  'Standing Low-Pulley Deltoid Raise', 
  'Sollevamento laterale ai cavi bassi', 
  'Start by standing to the right side of a low pulley row. Use your left hand to come across the body and grab a single handle attached to the low pulley with a pronated grip (palms facing down). Rest your arm in front of you. Your right hand should grab the machine for better support and balance.
Make sure that your back is erect and your feet are shoulder width apart from each other. This is the starting position.
Begin to use the left hand and come across your body out until it is elevated to shoulder height while exhaling.
Feel the contraction at the top for a second and begin to slowly lower the handle back down to the original starting position while inhaling.
Repeat for the recommended amount of repetitions.
Switch arms and repeat the exercise.', 
  'Mettiti in piedi sul lato destro rispetto a una carrucola bassa. Con la mano sinistra, incrocia il corpo e afferra la maniglia singola con una presa prona (palmi verso il basso). Tieni il braccio davanti a te. La mano destra può afferrare la struttura per supporto ed equilibrio. Mantieni la schiena eretta e i piedi alla larghezza delle spalle. Questa è la posizione di partenza. Espirando, solleva la mano sinistra diagonalmente davanti al corpo fino all''altezza della spalla. Senti la contrazione per un secondo in cima, poi inspira e abbassa lentamente la maniglia fino alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato. Cambia braccio e ripeti l''esercizio.', 
  'shoulders', 
  'forearms', 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Low-Pulley_Deltoid_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Low-Pulley_Deltoid_Raise/1.jpg'], 
  NOW()
),
(
  'cf90ff4b-feec-4935-be79-16d06383b152', 
  'Standing Low-Pulley One-Arm Triceps Extension', 
  'Estensioni tricipiti a un braccio ai cavi bassi in piedi', 
  'Grab a single handle with your left arm next to the low pulley machine. Turn away from the machine keeping the handle to the side of your body with your arm fully extended. Now use both hands to elevate the single handle directly above the head with the palm facing forward. Keep your upper arm completely vertical (perpendicular to the floor) and put your right hand on your left elbow to help keep it steady. This is the starting position.
Keeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.
Go back to the starting position by using the triceps to raise the single handle. Breathe out as you perform this step.
Repeat for the recommended amount of repetitions.
Switch arms and repeat the exercise.', 
  'Afferra una maniglia singola con la mano sinistra vicino alla macchina a cavi bassi. Voltati dando le spalle alla macchina, tenendo la maniglia al fianco con il braccio completamente esteso. Ora usa entrambe le mani per portare la maniglia direttamente sopra la testa con il palmo rivolto in avanti. Mantieni la parte superiore del braccio completamente verticale (perpendicolare al pavimento) e appoggia la mano destra sul gomito sinistro per tenerlo fermo. Questa è la posizione di partenza. Tenendo le braccia vicine alla testa (gomiti chiusi) e perpendicolari al pavimento, abbassa il carico con un movimento semicircolare dietro la testa finché gli avambracci non toccano i bicipiti. Suggerimento: la parte superiore delle braccia deve rimanere ferma e solo gli avambracci devono muoversi. Inspira durante questa fase. Torna alla posizione di partenza usando i tricipiti per sollevare la maniglia. Espira durante questa fase. Ripeti per il numero di ripetizioni raccomandato. Cambia braccio e ripeti l''esercizio.', 
  'triceps', 
  'chest', 
  'cable', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Low-Pulley_One-Arm_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Low-Pulley_One-Arm_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  'd2d131e3-0252-4356-a1c6-abf156e69673', 
  'Standing Military Press', 
  'Military Press in piedi', 
  'Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other.
Slightly bend the knees and place the barbell on your collar bone. Lift the barbell up keeping it lying on your chest. Take a step back and position your feet shoulder width apart from each other.
Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.
Lower the bar down to the collarbone slowly as you inhale.
Lift the bar back up to the starting position as you exhale.
Repeat for the recommended amount of repetitions.', 
  'Inizia posizionando un bilanciere all''altezza del petto su un rack per squat. Dopo aver caricato i pesi, afferra il bilanciere con una presa prona (palmi rivolti in avanti). Assicurati che la presa sia più larga della larghezza delle spalle. Piega leggermente le ginocchia e appoggia il bilanciere sulle clavicole. Solleva il bilanciere tenendolo aderente al petto. Fai un passo indietro e posiziona i piedi alla larghezza delle spalle. Una volta presa la giusta impugnatura, spingi il bilanciere sopra la testa bloccando le braccia. Fermati all''altezza delle spalle, leggermente davanti alla testa. Questa è la posizione di partenza. Abbassa lentamente il bilanciere fino alle clavicole mentre inspiri. Riporta il bilanciere alla posizione di partenza mentre espiri. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'triceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/1.jpg'], 
  NOW()
),
(
  '8d9c6bf8-507e-42a7-8e4a-03b5f4b6fd95', 
  'Standing Olympic Plate Hand Squeeze', 
  'Squeeze con dischi olimpionici in piedi', 
  'To begin, stand straight while holding a weight plate by the ridge at arm''s length in each hand using a neutral grip (palms facing in). You feet should be shoulder width apart from each other. This will be your starting position.
Lower the plates until the fingers are nearly extended but can still hold weights. Inhale as you lower the plates.
Now raise the plates back to the starting position as you exhale by closing your hands.
Repeat for the recommended amount of repetitions prescribed in your program.', 
  'Per iniziare, resta in piedi con la schiena dritta e tieni un disco per pesi con una mano, afferrandolo dal bordo con una presa neutra (palmi rivolti verso l''interno). I piedi devono essere alla larghezza delle spalle. Questa sarà la posizione di partenza. Abbassa i dischi finché le dita non sono quasi estese ma riescono ancora a reggere il peso. Inspira mentre abbassi i dischi. Ora solleva i dischi fino alla posizione di partenza espirando e chiudendo le mani. Ripeti per il numero di ripetizioni prescritte dal tuo programma.', 
  'forearms', 
  'biceps', 
  'other', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Olympic_Plate_Hand_Squeeze/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Olympic_Plate_Hand_Squeeze/1.jpg'], 
  NOW()
),
(
  '9c4a288b-4b8c-4b5a-a1a5-d9100bf47f85', 
  'Standing One-Arm Cable Curl', 
  'Curl ai cavi a un braccio in piedi', 
  'Start out by grabbing single handle next to the low pulley machine. Make sure you are far enough from the machine so that your arm is supporting the weight.
Make sure that your upper arm is stationary, perpendicular to the floor with elbows in and palms facing forward. Your non lifting arm should be grabbing your waist. This will allow you to keep your balance.
Slowly begin to curl the single handle upwards while keeping the upper arm stationary until your forearm touches your bicep while exhaling. Tip: Only the forearm should move.
Hold the contraction position as you squeeze the bicep and then lower the single handle back down to the starting position as you inhale.
Repeat for the recommended amount of repetitions.
Switch arms while performing this exercise.', 
  'Inizia afferrando una maniglia singola collegata alla puleggia bassa. Assicurati di essere abbastanza lontano dalla macchina in modo che il braccio sostenga il peso. Mantieni la parte superiore del braccio ferma, perpendicolare al pavimento, con il gomito vicino al corpo e il palmo rivolto in avanti. Il braccio che non lavora può essere appoggiato sulla vita per mantenere l''equilibrio. Inizia lentamente a flettere il braccio portando la maniglia verso l''alto, mantenendo la parte superiore del braccio ferma, finché l''avambraccio non tocca il bicipite, espirando. Suggerimento: solo l''avambraccio deve muoversi. Mantieni la contrazione strizzando il bicipite, quindi abbassa la maniglia alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato. Cambia braccio ed esegui l''esercizio.', 
  'biceps', 
  NULL, 
  'cable', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_One-Arm_Cable_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_One-Arm_Cable_Curl/1.jpg'], 
  NOW()
),
(
  'a9d074f8-4fcd-4cf0-958c-e895f43e0432', 
  'Standing One-Arm Dumbbell Curl Over Incline Bench', 
  'Curl con manubrio a un braccio su panca inclinata', 
  'Stand on the back side of an incline bench as if you were going to be a spotter for someone. Have a dumbbell in one hand and rest it across the incline bench with a supinated (palms up) grip.
Position your non lifting hand at the corner or side of the incline bench. The chest should be pressed against the top part of the incline and your feet should be pressed against the floor at a wide stance. This is the starting position.
While holding the upper arm stationary, curl the dumbbell upward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a second.
Slowly begin to bring the dumbbells back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.
Switch arms while performing this exercise.', 
  'Mettiti dietro una panca inclinata come se dovessi fare da spotter. Tieni un manubrio in una mano e appoggia il braccio sulla panca inclinata con una presa supinata (palmo rivolto verso l''alto). Posiziona l''altra mano sull''angolo o sul lato della panca inclinata. Il petto deve essere premuto contro la parte superiore della panca e i piedi ben piantati a terra con una posizione ampia. Questa è la posizione di partenza. Mantenendo la parte superiore del braccio ferma, fletti il manubrio verso l''alto contraendo il bicipite ed espirando. Solo l''avambraccio deve muoversi. Continua il movimento finché il bicipite non è completamente contratto e il manubrio è all''altezza della spalla. Mantieni la contrazione per un secondo. Ritorna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato. Cambia braccio ed esegui l''esercizio.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_One-Arm_Dumbbell_Curl_Over_Incline_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_One-Arm_Dumbbell_Curl_Over_Incline_Bench/1.jpg'], 
  NOW()
),
(
  '6ca2a340-b1a3-4ee1-9d81-8bcfd5f665db', 
  'Standing One-Arm Dumbbell Triceps Extension', 
  'Estensioni tricipiti a un braccio con manubrio in piedi', 
  'To begin, stand up with a dumbbell held in one hand. Your feet should be about shoulder width apart from each other. Now fully extend the arm with the dumbbell over your head. Tip: The small finger of your hand should be facing the ceiling and the palm of your hand should be facing forward. The dumbbell should be above your head.
This will be your starting position.
Keeping your upper arm close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearm touch your bicep. Tip: The upper arm should remain stationary and only the forearm should move. Breathe in as you perform this step.
Go back to the starting position by using the triceps to raise the dumbbell. Breathe out as you perform this step.
Repeat for the recommended amount of repetitions.
Switch arms and repeat the exercise.', 
  'Inizia in piedi con un manubrio in una mano. I piedi devono essere alla larghezza delle spalle. Distendi completamente il braccio con il manubrio sopra la testa. Suggerimento: il mignolo della mano deve essere rivolto verso il soffitto e il palmo rivolto in avanti. Questa è la posizione di partenza. Tenendo la parte superiore del braccio vicina alla testa (gomito chiuso) e perpendicolare al pavimento, abbassa il carico con un movimento semicircolare dietro la testa finché l''avambraccio non tocca il bicipite. Suggerimento: la parte superiore del braccio deve rimanere ferma. Inspira durante questa fase. Torna alla posizione di partenza usando i tricipiti per sollevare il manubrio. Espira durante questa fase. Ripeti per il numero di ripetizioni raccomandato. Cambia braccio e ripeti l''esercizio.', 
  'triceps', 
  'chest', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_One-Arm_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_One-Arm_Dumbbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  'e2108379-7853-4a5b-9c9c-47ed1afd6ee9', 
  'Standing Overhead Barbell Triceps Extension', 
  'Estensioni tricipiti sopra la testa con bilanciere in piedi', 
  'To begin, stand up holding a barbell or e-z bar using a pronated grip (palms facing forward) with your hands closer than shoulder width apart from each other. Your feet should be about shoulder width apart.
Now elevate the barbell above your head until your arms are fully extended. Keep your elbows in. This will be your starting position.
Keeping your upper arms close to your head and elbows in, perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.
Go back to the starting position by using the triceps to raise the barbell. Breathe out as you perform this step.
Repeat for the recommended amount of repetitions.', 
  'Inizia in piedi, tenendo un bilanciere (o un bilanciere EZ) con una presa prona (palmi rivolti in avanti) e le mani più strette della larghezza delle spalle. I piedi devono essere alla larghezza delle spalle. Solleva il bilanciere sopra la testa finché le braccia non sono completamente distese. Mantieni i gomiti chiusi. Questa è la posizione di partenza. Tenendo le braccia vicine alla testa e perpendicolari al pavimento, abbassa il carico con un movimento semicircolare dietro la testa finché gli avambracci non toccano i bicipiti. Suggerimento: la parte superiore delle braccia deve rimanere ferma e solo gli avambracci devono muoversi. Inspira durante questa fase. Torna alla posizione di partenza usando i tricipiti per sollevare il bilanciere. Espira durante questa fase. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  'shoulders', 
  'barbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Overhead_Barbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Overhead_Barbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  'ebef3de5-58b2-4610-a8d0-316db3e2f1cf', 
  'Standing Palm-In One-Arm Dumbbell Press', 
  'Press a un braccio con manubrio (presa neutra) in piedi', 
  'Start by having a dumbbell in one hand with your arm fully extended to the side using a neutral grip. Use your other arm to hold on to an incline bench to keep your balance.
Your feet should be shoulder width apart from each other. Now slowly lift the dumbbell up until you create a 90 degree angle with your arm. Note: Your forearm should be perpendicular to the floor. Continue to maintain a neutral grip throughout the entire exercise.
Slowly lift the dumbbell up until your arm is fully extended. This the starting position.
While inhaling lower the weight down until your arm is at a 90 degree angle again.
Feel the contraction for a second and then lift the weight back up towards the starting position while exhaling. Remember to hold on to the incline bench and keep your feet positioned to keep balance during the exercise.
Repeat for the recommended amount of repetitions.
Switch arms and repeat the exercise.', 
  'Inizia con un manubrio in una mano, braccio completamente esteso lateralmente con una presa neutra. Usa l''altro braccio per tenerti a una panca inclinata e mantenere l''equilibrio. I piedi devono essere alla larghezza delle spalle. Solleva lentamente il manubrio fino a creare un angolo di 90 gradi con il braccio. Nota: l''avambraccio deve essere perpendicolare al pavimento. Mantieni sempre una presa neutra. Solleva lentamente il manubrio finché il braccio non è completamente esteso. Questa è la posizione di partenza. Inspira mentre abbassi il peso finché il braccio non forma di nuovo un angolo di 90 gradi. Senti la contrazione per un secondo, poi solleva il peso verso la posizione di partenza espirando. Ricorda di sostenerti alla panca e mantenere i piedi ben posizionati per l''equilibrio. Ripeti per il numero di ripetizioni raccomandato. Cambia braccio e ripeti l''esercizio.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Palm-In_One-Arm_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Palm-In_One-Arm_Dumbbell_Press/1.jpg'], 
  NOW()
),
(
  '577c0b4a-068e-4b50-8c34-ade8143c5a14', 
  'Standing Palms-In Dumbbell Press', 
  'Press con manubri (presa neutra) in piedi', 
  'Start by having a dumbbell in each hand with your arm fully extended to the side using a neutral grip. Your feet should be shoulder width apart from each other. Now slowly lift the dumbbells up until you create a 90 degree angle with your arms. Note: Your forearms should be perpendicular to the floor. This the starting position.
Continue to maintain a neutral grip throughout the entire exercise. Slowly lift the dumbbells up until your arms are fully extended.
While inhaling lower the weights down until your arm is at a 90 degree angle again.
Repeat for the recommended amount of repetitions.', 
  'Inizia con un manubrio in ogni mano, braccia completamente estese lateralmente con una presa neutra. I piedi devono essere alla larghezza delle spalle. Solleva lentamente i manubri fino a creare un angolo di 90 gradi con le braccia. Nota: gli avambracci devono essere perpendicolari al pavimento. Questa è la posizione di partenza. Mantieni la presa neutra per tutto l''esercizio. Solleva lentamente i manubri finché le braccia non sono completamente estese. Inspira mentre abbassi i pesi fino a tornare a un angolo di 90 gradi. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Palms-In_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Palms-In_Dumbbell_Press/1.jpg'], 
  NOW()
),
(
  'e47144ac-d46b-4021-b765-906404a5d9af', 
  'Standing Palms-Up Barbell Behind The Back Wrist Curl', 
  'Wrist curl dietro la schiena con bilanciere in piedi', 
  'Start by standing straight and holding a barbell behind your glutes at arm''s length while using a pronated grip (palms will be facing back away from the glutes) and having your hands shoulder width apart from each other.
You should be looking straight forward while your feet are shoulder width apart from each other. This is the starting position.
While exhaling, slowly elevate the barbell up by curling your wrist in a semi-circular motion towards the ceiling. Note: Your wrist should be the only body part moving for this exercise.
Hold the contraction for a second and lower the barbell back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions.
When finished, lower the barbell down to the squat rack or the floor by bending the knees. Tip: It is easiest to either pick it up from a squat rack or have a partner hand it to you.', 
  'Inizia in piedi, tenendo un bilanciere dietro i glutei a braccia tese con una presa prona (palmi rivolti indietro, lontano dai glutei) e le mani alla larghezza delle spalle. Guarda dritto davanti a te con i piedi alla larghezza delle spalle. Questa è la posizione di partenza. Espirando, solleva lentamente il bilanciere flettendo i polsi con un movimento semicircolare verso il soffitto. Nota: il polso deve essere l''unica parte del corpo a muoversi durante l''esercizio. Mantieni la contrazione per un secondo e abbassa il bilanciere alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato. Una volta finito, abbassa il bilanciere sul rack o a terra piegando le ginocchia. Suggerimento: è più facile prenderlo da un rack o farsi aiutare da un compagno.', 
  'forearms', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Palms-Up_Barbell_Behind_The_Back_Wrist_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Palms-Up_Barbell_Behind_The_Back_Wrist_Curl/1.jpg'], 
  NOW()
),
(
  '34ddf17b-0e06-46fb-a769-a264c000565f', 
  'Standing Pelvic Tilt', 
  'Basculamento del bacino in piedi', 
  'Start off with your feet hip-distance apart.
Bend your knees slightly to keep them soft and springy.
You may want to move your pelvis forward and backward and back few times before holding the tailbone forward in this stretch.', 
  'Inizia con i piedi alla larghezza delle anche. Piega leggermente le ginocchia per mantenerle morbide e flessibili. Puoi muovere il bacino in avanti e indietro alcune volte prima di mantenere il coccige ruotato in avanti in questo allungamento.', 
  'lower back', 
  'glutes', 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Pelvic_Tilt/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Pelvic_Tilt/1.jpg'], 
  NOW()
),
(
  '2cbbf98c-b175-4823-bc95-c5f7fad7dea3', 
  'Standing Rope Crunch', 
  'Standing Rope Crunch', 
  'Attach a rope to a high pulley and select an appropriate weight.
Stand with your back to the cable tower. Take the rope with both hands over your shoulders, holding it to your upper chest. This will be your starting position.
Perform the movement by flexing the spine, crunching the weight down as far as you can.
Hold the peak contraction for a moment before returning to the starting position.', 
  'Aggancia una corda a una carrucola alta e seleziona un peso adeguato. Mettiti in piedi dando le spalle alla torre dei cavi. Impugna la corda con entrambe le mani sopra le spalle, tenendola vicino alla parte superiore del petto. Questa è la posizione di partenza. Esegui il movimento flettendo la colonna vertebrale, contraendo l''addome per portare il peso verso il basso il più possibile. Mantieni la massima contrazione per un istante prima di tornare alla posizione di partenza.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Rope_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Rope_Crunch/1.jpg'], 
  NOW()
),
(
  'c0a410d7-5fdf-4e32-a846-30598edf8bb5', 
  'Standing Soleus And Achilles Stretch', 
  'Stretching del soleo e del tendine d''Achille in piedi', 
  'Stand with your feet hip-distance apart, one foot slightly in front of the other.
Bend both knees, keeping your back heel on the floor. Switch sides.', 
  'In piedi con i piedi alla larghezza delle anche, un piede leggermente davanti all''altro. Piega entrambe le ginocchia, mantenendo il tallone posteriore a terra. Cambia lato.', 
  'calves', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Soleus_And_Achilles_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Soleus_And_Achilles_Stretch/1.jpg'], 
  NOW()
),
(
  '4cbea245-41dd-4bb1-94e1-f871d008270c', 
  'Standing Toe Touches', 
  'Toccate delle punte in piedi', 
  'Stand with some space in front and behind you.
Bend at the waist, keeping your legs straight, until you can relax and let your upper body hang down in front of you. Let your arms and hands hang down naturally. Hold for 10 to 20 seconds.', 
  'Mettiti in piedi con spazio sufficiente davanti e dietro di te. Piegati in vita, mantenendo le gambe tese, finché non riesci a rilassarti lasciando che la parte superiore del corpo penda in avanti. Lascia cadere le braccia e le mani naturalmente. Mantieni la posizione per 10-20 secondi.', 
  'hamstrings', 
  'calves', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Toe_Touches/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Toe_Touches/1.jpg'], 
  NOW()
),
(
  '36a6d816-529b-4bd9-8155-db4d79633361', 
  'Standing Towel Triceps Extension', 
  'Estensioni tricipiti con asciugamano in piedi', 
  'To begin, stand up with both arms fully extended above the head holding one end of a towel with both hands. Your elbows should be in and the arms perpendicular to the floor with the palms facing each other while your feet should be shoulder width apart from each other. This is the starting position.
Now communicate with your partner so that he/she can grip the other side of the towel to apply resistance. Keeping your upper arms close to your head (elbows in) and perpendicular to the floor, lower the resistance in a semicircular motion behind your head until your forearms touch your biceps. Tip: The upper arms should remain stationary and only the forearms should move. Breathe in as you perform this step.
Go back to the starting position by using the triceps to raise the towel. Breathe out as you perform this step.
Repeat for the recommended amount of repetitions.', 
  'Inizia in piedi con entrambe le braccia completamente distese sopra la testa, impugnando un''estremità di un asciugamano con entrambe le mani. I gomiti devono essere chiusi e le braccia perpendicolari al pavimento, con i palmi rivolti l''uno verso l''altro; i piedi devono essere alla larghezza delle spalle. Questa è la posizione di partenza. Chiedi al tuo partner di afferrare l''altra estremità dell''asciugamano per applicare resistenza. Mantenendo la parte superiore delle braccia vicina alla testa (gomiti chiusi) e perpendicolare al pavimento, abbassa la resistenza con un movimento semicircolare dietro la testa finché gli avambracci non toccano i bicipiti. Consiglio: la parte superiore delle braccia deve rimanere ferma e devono muoversi solo gli avambracci. Inspira durante questa fase. Torna alla posizione di partenza usando i tricipiti per sollevare l''asciugamano. Espira durante questa fase. Ripeti per il numero di ripetizioni consigliato.', 
  'triceps', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Towel_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Towel_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '206e8fbd-8a2c-4e79-bed2-a1873e22cf2e', 
  'Standing Two-Arm Overhead Throw', 
  'Lancio della palla medica sopra la testa in piedi', 
  'Stand with your feet shoulder width apart holding a medicine ball in both hands. To begin, reach the medicine ball deep behind your head as you bend the knees slightly and lean back.
Violently throw the ball forward, flexing at the hip and using your whole body to complete the movement.
The medicine ball can be thrown to a partner or to a wall, receiving it as it bounces back.', 
  'In piedi con i piedi alla larghezza delle spalle, tieni una palla medica con entrambe le mani. Per iniziare, porta la palla medica profondamente dietro la testa piegando leggermente le ginocchia e inclinando il busto all''indietro. Lancia con forza la palla in avanti, flettendo le anche e utilizzando tutto il corpo per completare il movimento. La palla medica può essere lanciata a un partner o contro una parete, ricevendola al rimbalzo.', 
  'shoulders', 
  'chest', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Two-Arm_Overhead_Throw/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Two-Arm_Overhead_Throw/1.jpg'], 
  NOW()
),
(
  '6078ab9f-02a9-4688-ab47-f4c385045cea', 
  'Star Jump', 
  'Star Jump', 
  'Begin in a relaxed stance with your feet shoulder width apart and hold your arms close to the body.
To initiate the move, squat down halfway and explode back up as high as possible. Fully extend your entire body, spreading your legs and arms away from the body.
As you land, bring your limbs back in and absorb your impact through the legs.', 
  'Inizia in una posizione rilassata con i piedi alla larghezza delle spalle e le braccia vicine al corpo. Per iniziare il movimento, esegui mezzo squat ed esplodi verso l''alto il più in alto possibile. Estendi completamente tutto il corpo, allargando gambe e braccia verso l''esterno. Durante l''atterraggio, riporta gli arti verso il centro e ammortizza l''impatto attraverso le gambe.', 
  'quadriceps', 
  'calves', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Star_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Star_Jump/1.jpg'], 
  NOW()
),
(
  'd198b43b-df87-4277-be21-568d37019573', 
  'Step-up with Knee Raise', 
  'Step-up con sollevamento ginocchio', 
  'Stand facing a box or bench of an appropriate height with your feet together. This will be your starting position.
Begin the movement by stepping up, putting your left foot on the top of the bench. Extend through the hip and knee of your front leg to stand up on the box. As you stand on the box with your left leg, flex your right knee and hip, bringing your knee as high as you can.
Reverse this motion to step down off the box, and then repeat the sequence on the opposite leg.', 
  'In piedi di fronte a un box o una panca di altezza adeguata con i piedi uniti. Questa è la posizione di partenza. Inizia il movimento salendo sul box con il piede sinistro. Estendi l''anca e il ginocchio della gamba anteriore per portarti in posizione eretta sul box. Mentre sei in piedi sul box con la gamba sinistra, fletti il ginocchio e l''anca destra, portando il ginocchio il più in alto possibile. Inverti il movimento per scendere dal box e ripeti la sequenza con la gamba opposta.', 
  'glutes', 
  'hamstrings', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Step-up_with_Knee_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Step-up_with_Knee_Raise/1.jpg'], 
  NOW()
),
(
  'cbbb8073-d8da-494a-964f-f420d33717ba', 
  'Step Mill', 
  'Step Mill', 
  'To begin, step onto the stepmill and select the desired option from the menu. You can choose a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Use caution so that you don''t trip as you climb the stairs. It is recommended that you maintain your grip on the handles so that you don''t fall.
Stepmills offer convenience, cardiovascular benefits, and usually have less impact than running outside while offering a similar rate of calories burned. They are typically much harder than other cardio equipment. A 150 lb person will typically burn over 300 calories in 30 minutes, compared to about 175 calories walking.', 
  'Per iniziare, sali sullo step mill e seleziona l''opzione desiderata dal menu. Puoi scegliere un''impostazione manuale o selezionare un programma preimpostato. Solitamente puoi inserire età e peso per stimare le calorie bruciate durante l''esercizio. Fai attenzione a non inciampare mentre sali le scale. Si raccomanda di mantenere la presa sui manubri per evitare di cadere. Lo step mill offre comodità, benefici cardiovascolari e solitamente ha un impatto minore rispetto alla corsa all''aperto, offrendo un tasso di consumo calorico simile. È solitamente molto più intenso di altri attrezzi cardio. Una persona di 68 kg brucerà in media oltre 300 calorie in 30 minuti, rispetto alle circa 175 calorie della camminata.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Step_Mill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Step_Mill/1.jpg'], 
  NOW()
),
(
  'b85090be-11a5-46ee-b8c6-207dc12e3144', 
  'Stiff-Legged Barbell Deadlift', 
  'Stacco a gambe tese con bilanciere', 
  'Grasp a bar using an overhand grip (palms facing down). You may need some wrist wraps if using a significant amount of weight.
Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position.
Keeping the knees stationary, lower the barbell to over the top of your feet by bending at the hips while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Inhale as you perform this movement.
Start bringing your torso up straight again by extending your hips until you are back at the starting position. Exhale as you perform this movement.
Repeat for the recommended amount of repetitions.', 
  'Afferra un bilanciere con una presa prona (palmi rivolti verso il basso). Potresti aver bisogno di fasce da polso se utilizzi un peso significativo. In piedi con il busto dritto e i piedi alla larghezza delle spalle o più stretti. Le ginocchia devono essere leggermente flesse. Questa è la posizione di partenza. Mantenendo le ginocchia ferme, abbassa il bilanciere verso la parte superiore dei piedi flettendoti dalle anche e mantenendo la schiena dritta. Continua a muoverti in avanti come se volessi raccogliere qualcosa da terra finché non senti allungare i muscoli posteriori della coscia. Inspira durante l''esecuzione di questo movimento. Riporta il busto in posizione eretta estendendo le anche finché non torni nella posizione iniziale. Espira durante l''esecuzione del movimento. Ripeti per il numero di ripetizioni consigliato.', 
  'hamstrings', 
  'glutes', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Barbell_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Barbell_Deadlift/1.jpg'], 
  NOW()
),
(
  '11f70261-6936-49d8-a21e-721283541cbc', 
  'Stiff-Legged Dumbbell Deadlift', 
  'Stacco a gambe tese con manubri', 
  'Grasp a couple of dumbbells holding them by your side at arm''s length.
Stand with your torso straight and your legs spaced using a shoulder width or narrower stance. The knees should be slightly bent. This is your starting position.
Keeping the knees stationary, lower the dumbbells to over the top of your feet by bending at the waist while keeping your back straight. Keep moving forward as if you were going to pick something from the floor until you feel a stretch on the hamstrings. Exhale as you perform this movement
Start bringing your torso up straight again by extending your hips and waist until you are back at the starting position. Inhale as you perform this movement.
Repeat for the recommended amount of repetitions.', 
  'Afferra due manubri tenendoli lungo i fianchi a braccia tese. Stai in piedi con il busto dritto e i piedi a una larghezza pari o inferiore a quella delle spalle. Le ginocchia devono essere leggermente flesse. Questa è la tua posizione di partenza. Mantenendo le ginocchia ferme, abbassa i manubri oltre la punta dei piedi piegandoti in vita e tenendo la schiena dritta. Continua il movimento in avanti come se dovessi raccogliere qualcosa da terra, finché non senti allungare i muscoli femorali. Espira durante questa fase. Torna nella posizione di partenza estendendo fianchi e busto fino a raddrizzarti. Inspira durante il movimento. Ripeti per il numero di ripetizioni consigliato.', 
  'hamstrings', 
  'glutes', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Dumbbell_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff-Legged_Dumbbell_Deadlift/1.jpg'], 
  NOW()
),
(
  '0ec372e0-4807-467c-bc1d-865732dd68c3', 
  'Stiff Leg Barbell Good Morning', 
  'Good Morning a gambe tese con bilanciere', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.
Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position.
Keeping your legs stationary, move your torso forward by bending at the hips while inhaling. Lower your torso until it is parallel with the floor.
Begin to raise the bar as you exhale by elevating your torso back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Questo esercizio va eseguito preferibilmente all''interno di un rack per motivi di sicurezza. Imposta il bilanciere su un rack all''altezza appropriata. Una volta caricato il bilanciere, posizionati sotto di esso e appoggialo sulla parte posteriore delle spalle (appena sotto il collo). Afferra il bilanciere con entrambe le mani e sollevalo dal rack spingendo con le gambe e raddrizzando contemporaneamente il busto. Allontanati dal rack e posiziona le gambe a una larghezza media, pari a quella delle spalle. Tieni sempre la testa alta e la schiena dritta; guardare verso il basso compromette l''equilibrio. Questa è la posizione di partenza. Mantenendo le gambe ferme, piegati in avanti all''altezza delle anche espirando. Abbassa il busto finché non è parallelo al pavimento. Risali nella posizione di partenza mentre espiri. Ripeti per il numero di ripetizioni consigliato.', 
  'lower back', 
  'glutes', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff_Leg_Barbell_Good_Morning/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff_Leg_Barbell_Good_Morning/1.jpg'], 
  NOW()
),
(
  'b63257a1-4bbf-4039-8e6e-2124e840ba5c', 
  'Stomach Vacuum', 
  'Stomach Vacuum', 
  'To begin, stand straight with your feet shoulder width apart from each other. Place your hands on your hips. This is the starting position.
Now slowly inhale as much air as possible and then start to exhale as much as possible while bringing your stomach in as much as possible and hold this position. Try to visualize your navel touching your backbone.
One isometric contraction is around 20 seconds. During the 20 second hold, try to breathe normally. Then inhale and bring your stomach back to the starting position.
Once you have practiced this exercise, try to perform this exercise for longer than 20 seconds. Tip: You can work your way up to 40-60 seconds.
Repeat for the recommended amount of sets.', 
  'Inizia stando in piedi con i piedi alla larghezza delle spalle. Appoggia le mani sui fianchi. Questa è la posizione di partenza. Ora inspira lentamente quanta più aria possibile e poi inizia a espirare completamente, tirando l''addome verso l''interno il più possibile e mantieni la posizione. Cerca di visualizzare l''ombelico che tocca la colonna vertebrale. Una contrazione isometrica dura circa 20 secondi. Durante il mantenimento, cerca di respirare normalmente. Quindi inspira e riporta lo stomaco nella posizione iniziale. Una volta acquisita pratica, cerca di eseguire l''esercizio per più di 20 secondi. Consiglio: puoi arrivare progressivamente a 40-60 secondi. Ripeti per il numero di serie consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stomach_Vacuum/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stomach_Vacuum/1.jpg'], 
  NOW()
),
(
  '7a27790c-ba55-4f9b-9d56-aa4c1cc21935', 
  'Straight-Arm Dumbbell Pullover', 
  'Pullover con manubrio a braccia tese', 
  'Place a dumbbell standing up on a flat bench.
Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench as well.
Grasp the dumbbell with both hands and hold it straight over your chest at arms length. Both palms should be pressing against the underside one of the sides of the dumbbell. This will be your starting position.
Caution: Always ensure that the dumbbell used for this exercise is secure. Using a dumbbell with loose plates can result in the dumbbell falling apart and falling on your face.
While keeping your arms straight, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest.
At that point, bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement.
Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions.', 
  'Posiziona un manubrio in verticale su una panca piana. Assicurati che sia stabile, quindi sdraiati perpendicolarmente alla panca (con il busto di traverso), appoggiando solo le scapole sulla superficie. I fianchi devono essere più bassi della panca e le gambe piegate con i piedi ben piantati a terra. Anche la testa rimarrà fuori dalla panca. Afferra il manubrio con entrambe le mani e tienilo dritto sopra il petto a braccia tese. Entrambi i palmi devono spingere contro la parte inferiore di uno dei dischi del manubrio. Questa è la tua posizione di partenza. Attenzione: assicurati sempre che il manubrio sia ben serrato per evitare che i dischi cadano. Mantenendo le braccia tese, abbassa lentamente il peso descrivendo un arco dietro la testa, inspirando finché non senti allungare il torace. A quel punto, riporta il manubrio nella posizione iniziale seguendo lo stesso arco ed espirando. Trattieni il peso nella posizione iniziale per un secondo e ripeti.', 
  'chest', 
  'lats', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Dumbbell_Pullover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Dumbbell_Pullover/1.jpg'], 
  NOW()
),
(
  '759d9a61-d6d3-4239-b5be-2b6ddd9add9b', 
  'Straight-Arm Pulldown', 
  'Pulldown a braccia tese', 
  'You will start by grabbing the wide bar from the top pulley of a pulldown machine and using a wider than shoulder-width pronated (palms down) grip. Step backwards two feet or so.
Bend your torso forward at the waist by around 30-degrees with your arms fully extended in front of you and a slight bend at the elbows. If your arms are not fully extended then you need to step a bit more backwards until they are. Once your arms are fully extended and your torso is slightly bent at the waist, tighten the lats and then you are ready to begin.
While keeping the arms straight, pull the bar down by contracting the lats until your hands are next to the side of the thighs. Breathe out as you perform this step.
While keeping the arms straight, go back to the starting position while breathing in.
Repeat for the recommended amount of repetitions.', 
  'Inizia afferrando la barra lunga fissata alla carrucola alta di una macchina per lat machine, utilizzando una presa prona (palmi verso il basso) più larga delle spalle. Fai un paio di passi indietro. Piega il busto in avanti di circa 30 gradi tenendo le braccia completamente distese davanti a te con i gomiti leggermente flessi. Se le braccia non sono completamente tese, fai un altro passo indietro. Una volta in posizione, contrai i dorsali. Mantenendo le braccia tese, tira la barra verso il basso fino a portare le mani vicino alle cosce, espirando durante il movimento. Torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'lats', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Pulldown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Pulldown/1.jpg'], 
  NOW()
),
(
  '65ffb67b-b1fc-4acf-813a-41216f32b412', 
  'Straight Bar Bench Mid Rows', 
  'Rematore con bilanciere su panca', 
  'Place a loaded barbell on the end of a bench. Standing on the bench behind the bar, take a medium, pronated grip. Stand with your hips back and chest up, maintaining a neutral spine. This will be your starting position.
Row the bar to your torso by retracting the shoulder blades and flexing the elbows. Use a controlled movement with no jerking.
After a brief pause, slowly return the bar to the starting position, ensuring to go all the way down.', 
  'Posiziona un bilanciere carico su un''estremità della panca. Stando in piedi sulla panca dietro la barra, afferrala con una presa prona di media larghezza. Tieni i fianchi indietro e il petto in fuori, mantenendo la colonna vertebrale in posizione neutra. Questa è la posizione di partenza. Tira la barra verso il busto retrando le scapole e flettendo i gomiti. Usa un movimento controllato senza strattoni. Dopo una breve pausa, riporta lentamente la barra nella posizione iniziale, assicurandoti di scendere completamente.', 
  'middle back', 
  'biceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight_Bar_Bench_Mid_Rows/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight_Bar_Bench_Mid_Rows/1.jpg'], 
  NOW()
),
(
  '1f20f1d0-0996-4896-87fa-d8ecb2c2d1f5', 
  'Straight Raises on Incline Bench', 
  'Alzate a braccia tese su panca inclinata', 
  'Place a bar on the ground behind the head of an incline bench.
Lay on the bench face down. With a pronated grip, pick the barbell up from the floor, keeping your arms straight. Allow the bar to hang straight down. This will be your starting position.
To begin, raise the barbell out in front of your head while keeping your arms extended.
Return to the starting position.', 
  'Posiziona un bilanciere a terra dietro la parte superiore di una panca inclinata. Sdraiati sulla panca a faccia in giù. Con una presa prona, solleva il bilanciere da terra mantenendo le braccia tese. Lascia che la barra penda verso il basso. Questa è la posizione di partenza. Solleva il bilanciere davanti alla testa mantenendo le braccia estese. Torna alla posizione di partenza.', 
  'shoulders', 
  'traps', 
  'barbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight_Raises_on_Incline_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight_Raises_on_Incline_Bench/1.jpg'], 
  NOW()
),
(
  '13864521-2b1e-451f-b070-2cac35bda205', 
  'Stride Jump Crossover', 
  'Stride Jump Crossover', 
  'Stand to the side of a box with your inside foot on top of it, close to the edge.
Begin by swinging the arms upward as you push through the top leg, jumping upward as high as possible. Attempt to drive the opposite knee upward.
Land in the opposite position that you started, on the opposite side of the box. The foot that was initially on the box will now be on the ground, with the opposite foot now on the box.
Repeat the movement, crossing back over to the other side.', 
  'Mettiti di lato rispetto a un box con il piede interno appoggiato sopra di esso, vicino al bordo. Inizia oscillando le braccia verso l''alto mentre spingi con la gamba sul box, saltando il più in alto possibile. Cerca di portare il ginocchio opposto verso l''alto. Atterra nella posizione opposta a quella di partenza, sull''altro lato del box. Il piede che inizialmente era sul box si troverà ora a terra, mentre l''altro sarà sopra il box. Ripeti il movimento tornando al lato di partenza.', 
  'quadriceps', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stride_Jump_Crossover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stride_Jump_Crossover/1.jpg'], 
  NOW()
),
(
  '811994c8-174a-43d5-b40c-5c3fa11e028c', 
  'Sumo Deadlift', 
  'Stacco Sumo', 
  'Begin with a bar loaded on the ground. Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip. Relax the shoulders, which in effect lengthens your arms.
Take a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.
As the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.
Return the weight to the ground by bending at the hips and controlling the weight on the way down.', 
  'Inizia con un bilanciere a terra. Avvicinati alla barra in modo che questa intersechi il centro dei piedi. I piedi devono essere molto larghi, vicino ai collari. Piega i fianchi per afferrare la barra. Le braccia devono essere direttamente sotto le spalle, all''interno delle gambe; puoi usare una presa prona, mista o a uncino (hook grip). Rilassa le spalle per allungare le braccia. Inspira, abbassa i fianchi, guarda dritto davanti a te e tieni il petto alto. Spingi attraverso il pavimento allargando i piedi, con il peso sulla parte posteriore dei piedi. Estendi fianchi e ginocchia. Quando la barra supera le ginocchia, sposta le anche in avanti verso il bilanciere e unisci le scapole. Riporta il peso a terra piegandoti sui fianchi e controllando il carico durante la discesa.', 
  'hamstrings', 
  'adductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/1.jpg'], 
  NOW()
),
(
  'c5450d96-743a-489d-b79a-41c7de5b6bca', 
  'Sumo Deadlift with Bands', 
  'Stacco Sumo con elastici', 
  'To deadlift with short bands, simply loop them over the bar before you start, and step into them to set up. Ensure that they under the back half of your foot, directly where you are driving into the floor.
Begin with a bar loaded on the ground. Approach the bar so that the bar intersects the middle of the feet. The feet should be set very wide, near the collars. Bend at the hips to grip the bar. The arms should be directly below the shoulders, inside the legs, and you can use a pronated grip, a mixed grip, or hook grip.
Take a breath, and then lower your hips, looking forward with your head with your chest up. Drive through the floor, spreading your feet apart, with your weight on the back half of your feet. Extend through the hips and knees.
As the bar passes through the knees, lean back and drive the hips into the bar, pulling your shoulder blades together.
Return the weight to the ground by bending at the hips and controlling the weight on the way down.', 
  'Per eseguire lo stacco con elastici corti, avvolgili semplicemente attorno al bilanciere prima di iniziare e posiziona i piedi all''interno. Assicurati che gli elastici siano sotto la parte posteriore del piede, esattamente nel punto in cui spingi verso il pavimento. Inizia con un bilanciere a terra. Avvicinati alla barra in modo che questa intersechi il centro dei piedi. I piedi devono essere molto larghi, vicino ai collari. Piega i fianchi per afferrare la barra. Le braccia devono essere direttamente sotto le spalle, all''interno delle gambe. Inspira, abbassa i fianchi, guarda dritto davanti a te e tieni il petto alto. Spingi attraverso il pavimento allargando i piedi. Estendi fianchi e ginocchia. Quando la barra supera le ginocchia, sposta le anche in avanti verso il bilanciere e unisci le scapole. Riporta il peso a terra piegandoti sui fianchi e controllando il carico durante la discesa.', 
  'hamstrings', 
  'adductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift_with_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift_with_Bands/1.jpg'], 
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