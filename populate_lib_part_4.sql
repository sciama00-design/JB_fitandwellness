-- Full population of exercise_library with Italian translations (Batch 4)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  '404e0677-9dec-4f35-8760-00642f17e999', 
  'Glute Kickback', 
  'Glute Kickback', 
  'Kneel on the floor or an exercise mat and bend at the waist with your arms extended in front of you (perpendicular to the torso) in order to get into a kneeling push-up position but with the arms spaced at shoulder width. Your head should be looking forward and the bend of the knees should create a 90-degree angle between the hamstrings and the calves. This will be your starting position.
As you exhale, lift up your right leg until the hamstrings are in line with the back while maintaining the 90-degree angle bend. Contract the glutes throughout this movement and hold the contraction at the top for a second. Tip: At the end of the movement the upper leg should be parallel to the floor while the calf should be perpendicular to it.
Go back to the initial position as you inhale and now repeat with the left leg.
Continue to alternate legs until all of the recommended repetitions have been performed.', 
  'Inginocchiati sul pavimento o su un tappetino da fitness e piegati in avanti con le braccia distese (perpendicolari al busto), assumendo una posizione simile a quella di un piegamento, ma con le mani alla larghezza delle spalle. Lo sguardo deve essere rivolto in avanti e le ginocchia devono formare un angolo di 90 gradi tra cosce e polpacci. Questa è la posizione di partenza. Espirando, solleva la gamba destra fino a quando la coscia è allineata con la schiena, mantenendo l''angolo di 90 gradi. Contrai i glutei durante tutto il movimento e mantieni la contrazione per un secondo nella fase alta. Consiglio: al termine del movimento, la coscia deve essere parallela al pavimento mentre il polpaccio deve essere perpendicolare. Inspira tornando alla posizione iniziale e ripeti con la gamba sinistra. Continua ad alternare le gambe fino al completamento delle ripetizioni previste.', 
  'glutes', 
  'hamstrings', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/1.jpg'], 
  NOW()
),
(
  '9de0ef89-b48f-4f92-8396-103088931b6a', 
  'Goblet Squat', 
  'Goblet Squat', 
  'Stand holding a light kettlebell by the horns close to your chest. This will be your starting position.
Squat down between your legs until your hamstrings are on your calves. Keep your chest and head up and your back straight.
At the bottom position, pause and use your elbows to push your knees out. Return to the starting position, and repeat for 10-20 repetitions.', 
  'In piedi, tieni un kettlebell leggero per le corna vicino al petto. Questa è la posizione di partenza. Esegui uno squat scendendo tra le gambe finché i bicipiti femorali non toccano i polpacci. Mantieni petto e testa alti e la schiena dritta. Nella posizione bassa, fai una pausa e usa i gomiti per spingere le ginocchia verso l''esterno. Torna alla posizione di partenza e ripeti per 10-20 ripetizioni.', 
  'quadriceps', 
  'calves', 
  'kettlebells', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/1.jpg'], 
  NOW()
),
(
  'f0ca32c6-f3f2-49e6-85b1-975a9ba6635c', 
  'Good Morning', 
  'Good Morning', 
  'Begin with a bar on a rack at shoulder height. Rack the bar across the rear of your shoulders as you would a power squat, not on top of your shoulders. Keep your back tight, shoulder blades pinched together, and your knees slightly bent. Step back from the rack.
Begin by bending at the hips, moving them back as you bend over to near parallel. Keep your back arched and your cervical spine in proper alignment.
Reverse the motion by extending through the hips with your glutes and hamstrings. Continue until you have returned to the starting position.', 
  'Inizia con un bilanciere su un rack all''altezza delle spalle. Posiziona il bilanciere sulla parte alta della schiena (non sopra il collo), come in uno squat. Mantieni la schiena contratta, le scapole addotte e le ginocchia leggermente flesse. Fai un passo indietro rispetto al rack. Inizia il movimento flettendo le anche e spingendole all''indietro mentre ti pieghi in avanti fino a raggiungere quasi il parallelo. Mantieni la schiena inarcata (neutra) e la colonna cervicale correttamente allineata. Inverti il movimento estendendo le anche usando glutei e bicipiti femorali. Continua fino a tornare alla posizione eretta iniziale.', 
  'hamstrings', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/1.jpg'], 
  NOW()
),
(
  'dfebe293-a449-4268-a6ac-94ce81a67705', 
  'Good Morning off Pins', 
  'Good Morning off Pins', 
  'Begin with a bar on a rack at about the same height as your stomach. Bend over underneath the bar and rack the bar across the rear of your shoulders as you would a power squat, not on top of your shoulders. At the proper height, you should be near parallel to the floor when bent over. Keep your back tight, shoulder blades pinched together, and your knees slightly bent. Keep your back arched and your cervical spine in proper alignment.
Begin the motion by extending through the hips with your glutes and hamstrings, and you are standing with the weight. Slowly lower the weight back to the pins returning to the starting position.', 
  'Posiziona il bilanciere sui supporti di un rack all''altezza dello stomaco. Infilati sotto il bilanciere e posizionalo sulla parte posteriore delle spalle, come per uno squat. All''altezza corretta, dovresti essere quasi parallelo al pavimento quando sei piegato. Mantieni la schiena contratta, le scapole unite e le ginocchia leggermente flesse. Mantieni la schiena inarcata e il collo correttamente allineato. Inizia il movimento estendendo le anche con glutei e bicipiti femorali, sollevando il carico. Abbassa lentamente il peso fino a riappoggiarlo sui supporti, tornando alla posizione iniziale.', 
  'hamstrings', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning_off_Pins/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning_off_Pins/1.jpg'], 
  NOW()
),
(
  '3c2c1a11-1aa0-4e2c-8c5e-4023f4bea834', 
  'Gorilla Chin/Crunch', 
  'Gorilla Chin/Crunch', 
  'Hang from a chin-up bar using an underhand grip (palms facing you) that is slightly wider than shoulder width.
Now bend your knees at a 90 degree angle so that the calves are parallel to the floor while the thighs remain perpendicular to it. This will be your starting position.
As you exhale, pull yourself up while crunching your knees up at the same time until your knees are at chest level. You will stop going up as soon as your nose is at the same level as the bar. Tip: When you get to this point you should also be finishing the crunch at the same time.
Slowly start to inhale as you return to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Appenditi a una sbarra per trazioni con una presa supina (palmi rivolti verso di te) leggermente più larga delle spalle. Piega le ginocchia a 90 gradi in modo che i polpacci siano paralleli al pavimento e le cosce perpendicolari. Questa è la posizione di partenza. Espirando, esegui una trazione verso l''alto mentre contrai l''addome portando le ginocchia verso il petto. Fermati quando il naso raggiunge il livello della sbarra. Consiglio: in questo punto dovresti completare simultaneamente la trazione e la contrazione addominale. Inspira lentamente tornando alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  'biceps', 
  'body only', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Gorilla_Chin_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Gorilla_Chin_Crunch/1.jpg'], 
  NOW()
),
(
  'e1498f01-2766-4398-9260-a6990898af2e', 
  'Groin and Back Stretch', 
  'Groin and Back Stretch', 
  'Sit on the floor with your knees bent and feet together.
Interlock your fingers behind your head. This will be your starting position.
Curl downwards, bringing your elbows to the inside of your thighs. After a brief pause, return to the starting position with your head up and your back straight. Repeat for 10-20 repetitions.', 
  'Siediti a terra con le ginocchia flesse e le piante dei piedi a contatto. Intreccia le dita dietro la nuca. Questa è la posizione di partenza. Esegui una flessione del busto in avanti, portando i gomiti all''interno delle cosce. Dopo una breve pausa, torna alla posizione iniziale con la testa alta e la schiena dritta. Ripeti per 10-20 ripetizioni.', 
  'adductors', 
  NULL, 
  NULL, 
  'intermediate', 
  'compound', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groin_and_Back_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groin_and_Back_Stretch/1.jpg'], 
  NOW()
),
(
  '07469bdb-3a5d-4eb8-be79-397aeafd79fd', 
  'Groiners', 
  'Groiners', 
  'Begin in a pushup position on the floor. This will be your starting position.
Using both legs, jump forward landing with your feet next to your hands. Keep your head up as you do so.
Return to the starting position and immediately repeat the movement, continuing for 10-20 repetitions.', 
  'Inizia in posizione di piegamento sulle braccia (pushup). Questa è la posizione di partenza. Con un salto, porta i piedi in avanti posizionandoli accanto alle mani. Tieni la testa alta durante il movimento. Torna alla posizione iniziale con un salto e ripeti immediatamente, continuando per 10-20 ripetizioni.', 
  'adductors', 
  NULL, 
  'body only', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groiners/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Groiners/1.jpg'], 
  NOW()
),
(
  '71da64ff-f7fe-469c-b316-8f087545e884', 
  'Hack Squat', 
  'Hack Squat', 
  'Place the back of your torso against the back pad of the machine and hook your shoulders under the shoulder pads provided.
Position your legs in the platform using a shoulder width medium stance with the toes slightly pointed out. Tip: Keep your head up at all times and also maintain the back on the pad at all times.
Place your arms on the side handles of the machine and disengage the safety bars (which on most designs is done by moving the side handles from a facing front position to a diagonal position).
Now straighten your legs without locking the knees. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).
Begin to slowly lower the unit by bending the knees as you maintain a straight posture with the head up (back on the pad at all times). Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the unit as you exhale by pushing the floor with mainly with the heel of your foot as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Appoggia il busto contro lo schienale della macchina e posiziona le spalle sotto gli appositi cuscinetti. Posiziona i piedi sulla pedana alla larghezza delle spalle con le punte leggermente rivolte verso l''esterno. Consiglio: tieni la testa alta e la schiena sempre aderente allo schienale. Impugna le maniglie laterali e sblocca le sicure. Distendi le gambe senza bloccare le ginocchia: questa è la posizione di partenza. Inizia ad abbassare lentamente il carrello flettendo le ginocchia, mantenendo una postura dritta. Scendi finché l''angolo tra cosce e polpacci è leggermente inferiore a 90 gradi (cosce sotto il parallelo). Inspira durante questa fase. Consiglio: se eseguito correttamente, le ginocchia non dovrebbero superare la linea immaginaria perpendicolare alle punte dei piedi per evitare stress articolare. Espirando, spingi con i talloni per tornare alla posizione di partenza. Ripeti per le ripetizioni previste.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hack_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hack_Squat/1.jpg'], 
  NOW()
),
(
  '08dc5e22-cc5c-4fc8-825e-60718604256c', 
  'Hammer Curls', 
  'Hammer Curls', 
  'Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso.
The palms of the hands should be facing your torso. This will be your starting position.
Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm.
After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position.
Repeat for the recommended amount of repetitions.', 
  'In piedi, busto eretto, con un manubrio in ogni mano a braccia distese lungo i fianchi. I palmi devono essere rivolti verso il busto. Questa è la posizione di partenza. Mantenendo la parte superiore del braccio ferma, espira e fletti l''avambraccio verso l''alto contraendo i bicipiti. Solleva il peso finché il bicipite è completamente contratto e il manubrio è all''altezza della spalla. Mantieni la contrazione per un breve istante strizzando il muscolo. Consiglio: concentrati sul tenere il gomito fisso, muovendo solo l''avambraccio. Dopo la pausa, inspira e scendi lentamente verso la posizione iniziale. Ripeti per le ripetizioni previste.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/1.jpg'], 
  NOW()
),
(
  '13e8f631-f1a3-449b-b180-b92d075ffc88', 
  'Hammer Grip Incline DB Bench Press', 
  'Hammer Grip Incline DB Bench Press', 
  'Lie back on an incline bench with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.
By using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them at shoulder width.
Once at shoulder width, keep the palms of your hands with a neutral grip (palms facing each other). Keep your elbows flared out with the upper arms in line with the shoulders (perpendicular to the torso) and the elbows bent creating a 90-degree angle between the upper arm and the forearm. This will be your starting position.
Now bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbells at all times.
As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the dumbbells back in your thighs and then on the floor. This is the safest manner to dispose of the dumbbells.', 
  'Sdraiati su una panca inclinata con un manubrio in ogni mano appoggiato sulle cosce. I palmi sono rivolti l''uno verso l''altro. Usa la spinta delle cosce per portare i manubri all''altezza delle spalle, una alla volta. Mantieni i palmi in posizione neutra (uno di fronte all''altro). Tieni i gomiti leggermente aperti, con le braccia in linea con le spalle (perpendicolari al busto) e piegate a 90 gradi. Questa è la posizione di partenza. Inspira e abbassa lentamente i pesi ai lati, mantenendo il pieno controllo. Espira e spingi i manubri verso l''alto usando i pettorali. Blocca le braccia in posizione di massima contrazione, mantieni per un secondo e torna lentamente verso il basso. Consiglio: la fase di discesa dovrebbe durare almeno il doppio della fase di spinta. Ripeti per le ripetizioni prescritte. Al termine, riporta i manubri sulle cosce e poi a terra.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Grip_Incline_DB_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Grip_Incline_DB_Bench_Press/1.jpg'], 
  NOW()
),
(
  'b09380f2-82a6-40d8-b99b-07f72daded81', 
  'Hamstring-SMR', 
  'Hamstring SMR (Auto-rilascio miofasciale)', 
  'In a seated position, extend your legs over a foam roll so that it is position on the back of the upper legs. Place your hands to the side or behind you to help support your weight. This will be your starting position.
Using your hands, lift your hips off of the floor and shift your weight on the foam roll to one leg. Relax the hamstrings of the leg you are stretching.
Roll over the foam from below the hip to above the back of the knee, pausing at points of tension for 10-30 seconds. Repeat for the other leg.', 
  'In posizione seduta, estendi le gambe sopra un foam roller posizionato sotto la parte posteriore delle cosce. Appoggia le mani ai lati o dietro di te per sostenere il peso. Questa sarà la posizione di partenza. Usando le mani, solleva i fianchi dal pavimento e sposta il peso del corpo su una gamba. Rilassa i muscoli ischiocrurali della gamba che stai trattando. Fai scorrere il foam roller dalla parte inferiore del bacino fino a sopra la parte posteriore del ginocchio, soffermandoti sui punti di tensione per 10-30 secondi. Ripeti per l''altra gamba.', 
  'hamstrings', 
  NULL, 
  'foam roll', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hamstring-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hamstring-SMR/1.jpg'], 
  NOW()
),
(
  '0aa557eb-f26e-4f64-b568-94cf3e7116f6', 
  'Hamstring Stretch', 
  'Stretching per i muscoli ischiocrurali', 
  'Lie on your back with one leg extended above you, with the hip at ninety degrees. Keep the other leg flat on the floor.
Loop a belt, band, or rope over the ball of your foot. This will be your starting position.
Pull on the belt to create tension in the calves and hamstrings. Hold this stretch for 10-30 seconds, and repeat with the other leg.', 
  'Sdraiati sulla schiena con una gamba estesa verso l''alto, mantenendo l''anca a novanta gradi. Tieni l''altra gamba distesa a terra. Fai passare una cintura, una fascia o una corda attorno alla pianta del piede. Questa sarà la posizione di partenza. Tira la cinghia per creare tensione nei polpacci e negli ischiocrurali. Mantieni l''allungamento per 10-30 secondi, quindi ripeti con l''altra gamba.', 
  'hamstrings', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hamstring_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hamstring_Stretch/1.jpg'], 
  NOW()
),
(
  '0544958b-6404-44b0-81a5-ad5f5371bdb3', 
  'Handstand Push-Ups', 
  'Handstand Push-Ups (Piegamenti in verticale)', 
  'With your back to the wall bend at the waist and place both hands on the floor at shoulder width.
Kick yourself up against the wall with your arms straight. Your body should be upside down with the arms and legs fully extended. Keep your whole body as straight as possible. Tip: If doing this for the first time, have a spotter help you. Also, make sure that you keep facing the wall with your head, rather than looking down.
Slowly lower yourself to the ground as you inhale until your head almost touches the floor. Tip: It is of utmost importance that you come down slow in order to avoid head injury.
Push yourself back up slowly as you exhale until your elbows are nearly locked.
Repeat for the recommended amount of repetitions.', 
  'Con la schiena rivolta verso la parete, piegati in avanti e appoggia le mani a terra alla larghezza delle spalle. Slanciati verso l''alto portandoti contro la parete con le braccia distese. Il corpo deve essere capovolto con braccia e gambe completamente estese. Mantieni il corpo il più dritto possibile. Consiglio: se è la prima volta, fatti assistere da uno spotter. Assicurati di mantenere lo sguardo rivolto verso la parete e non verso il basso. Espirando, scendi lentamente verso il suolo finché la testa non sfiora quasi il pavimento. Consiglio: è fondamentale scendere lentamente per evitare traumi alla testa. Spingiti verso l''alto espirando finché i gomiti non sono quasi bloccati. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  'triceps', 
  'body only', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/1.jpg'], 
  NOW()
),
(
  'c491148b-d1ef-4d79-9b78-cc2381e6efe5', 
  'Hang Clean', 
  'Hang Clean', 
  'Begin with a shoulder width, double overhand or hook grip, with the bar hanging at the mid thigh position. Your back should be straight and inclined slightly forward.
Begin by aggressively extending through the hips, knees and ankles, driving the weight upward. As you do so, shrug your shoulders towards your ears.
Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position.', 
  'Inizia con una presa larga quanto le spalle, utilizzando una presa prona doppia o hook grip, con il bilanciere sospeso all''altezza di metà coscia. La schiena deve essere dritta e leggermente inclinata in avanti. Inizia estendendo energicamente anche, ginocchia e caviglie, spingendo il peso verso l''alto. Contemporaneamente, effettua una scrollata di spalle verso le orecchie. Recupera immediatamente facendo forza sui talloni, mantenendo il busto eretto e i gomiti alti. Continua finché non sei in posizione eretta.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Clean/1.jpg'], 
  NOW()
),
(
  'beeef38e-7e62-4e56-abf9-ed4fc883bc15', 
  'Hang Clean - Below the Knees', 
  'Hang Clean - Sotto le ginocchia', 
  'Begin with a shoulder width, double overhand or hook grip, with the bar hanging just below the knees. Your back should be straight and inclined slightly forward.
Begin by aggressively extending through the hips, knees and ankles, driving the weight upward. As you do so, shrug your shoulders towards your ears. As full extension is achieved, transition into the third pull by aggressively shrugging and flexing the arms with the elbows up and out.
At peak extension, aggressively pull yourself down, rotating your elbows under the bar as you do so. Receive the bar in a front squat position, the depth of which is dependent upon the height of the bar at the end of the third pull. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Continue to descend to the bottom squat position, which will help in the recovery.
Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position.', 
  'Inizia con una presa larga quanto le spalle, utilizzando una presa prona doppia o hook grip, con il bilanciere sospeso appena sotto le ginocchia. La schiena deve essere dritta e leggermente inclinata in avanti. Inizia estendendo energicamente anche, ginocchia e caviglie, spingendo il peso verso l''alto. Contemporaneamente, effettua una scrollata di spalle verso le orecchie. Una volta raggiunta la massima estensione, passa alla terza fase della tirata scrollando vigorosamente le spalle e flettendo le braccia con i gomiti verso l''alto e l''esterno. Al culmine dell''estensione, tirati energicamente sotto il bilanciere ruotando i gomiti. Ricevi il bilanciere in posizione di front squat; la profondità dipende dall''altezza raggiunta dal bilanciere. Il bilanciere deve poggiare sulle spalle, toccando leggermente la gola con le mani rilassate. Scendi fino alla posizione di squat completa per facilitare il recupero. Risali immediatamente facendo forza sui talloni, mantenendo il busto eretto e i gomiti alti.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Clean_-_Below_the_Knees/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Clean_-_Below_the_Knees/1.jpg'], 
  NOW()
),
(
  '32402949-f958-48a7-9bd6-cfa76e2c050f', 
  'Hang Snatch', 
  'Hang Snatch', 
  'Begin with a wide grip on the bar, with an overhand or hook grip. The feet should be directly below the hips with the feet turned out. Your knees should be slightly bent, and the torso inclined forward. The spine should be fully extended and the head facing forward. The bar should be at the hips. This will be your starting position.
Aggressively extend through the legs and hips. At peak extension, shrug the shoulders and allow the elbows to flex to the side.
As you move your feet into the receiving position, forcefully pull yourself below the bar as you elevate the bar overhead. Receive the bar with your body as low as possible and the arms fully extended overhead.
Return to a standing position with the weight overhead. Follow by returning the weight to the ground under control.', 
  'Inizia con una presa larga sul bilanciere, utilizzando una presa prona o hook grip. I piedi devono essere sotto le anche, leggermente ruotati verso l''esterno. Le ginocchia devono essere leggermente flesse e il busto inclinato in avanti. La colonna vertebrale deve essere ben estesa e lo sguardo rivolto in avanti. Il bilanciere deve trovarsi all''altezza delle anche. Questa è la posizione di partenza. Estendi energicamente gambe e anche. Al culmine, scrolla le spalle e permetti ai gomiti di flettersi lateralmente. Mentre porti i piedi in posizione di ricezione, tirati con forza sotto il bilanciere mentre lo sollevi sopra la testa. Ricevi il bilanciere con il corpo il più basso possibile e le braccia completamente estese sopra la testa. Torna in posizione eretta mantenendo il peso sopra la testa. Riporta il peso a terra controllando il movimento.', 
  'hamstrings', 
  'abdominals', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Snatch/1.jpg'], 
  NOW()
),
(
  '3157f09e-d874-4c0d-a040-2192b90cde52', 
  'Hang Snatch - Below Knees', 
  'Hang Snatch - Sotto le ginocchia', 
  'Begin with a wide grip on the bar, with an overhand or hook grip. The feet should be directly below the hips with the feet turned out. Your knees should be slightly bent, and the torso inclined forward. The spine should be fully extended and the head facing forward. The bar should be just below the knees. This will be your starting position.
Aggressively extend through the legs and hips. At peak extension, shrug the shoulders and allow the elbows to flex to the side.
As you move your feet into the receiving position, forcefully pull yourself below the bar as you elevate the bar overhead. Receive the bar with your body as low as possible and the arms fully extended overhead.
Return to a standing position with the weight overhead, and then return the weight to the floor under control.', 
  'Inizia con una presa larga sul bilanciere, utilizzando una presa prona o hook grip. I piedi devono essere sotto le anche, leggermente ruotati verso l''esterno. Le ginocchia devono essere leggermente flesse e il busto inclinato in avanti. Il bilanciere deve trovarsi appena sotto le ginocchia. Questa è la posizione di partenza. Estendi energicamente gambe e anche. Al culmine, scrolla le spalle e fletti i gomiti lateralmente. Mentre porti i piedi in posizione di ricezione, tirati con forza sotto il bilanciere elevandolo sopra la testa. Ricevi il bilanciere con il corpo il più basso possibile e le braccia completamente estese sopra la testa. Torna in posizione eretta mantenendo il peso sopra la testa, quindi riponi il bilanciere a terra controllando il movimento.', 
  'hamstrings', 
  'abdominals', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Snatch_-_Below_Knees/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hang_Snatch_-_Below_Knees/1.jpg'], 
  NOW()
),
(
  '0a35eb0c-c7ca-486e-abb0-177995b44ee0', 
  'Hanging Bar Good Morning', 
  'Hanging Bar Good Morning', 
  'Begin with a bar on a rack at about the same height as your stomach. Suspend the bar using chains or suspension straps.
Bend over underneath the bar and rack the bar across the rear of your shoulders as you would a power squat, not on top of your traps. At the proper height, you should be near parallel to the floor when bent over. Keep your back tight, shoulder blades pinched together, and your knees slightly bent. Keep your back arched and your cervical spine in proper alignment.
Begin the motion by extending through the hips with your glutes and hamstrings, and you are standing with the weight.
Slowly lower the weight back to the starting position, where it is supported by the chains.', 
  'Inizia con un bilanciere su un rack posizionato all''altezza dello stomaco. Sospendi il bilanciere usando catene o cinghie. Infilati sotto la barra e posizionala sulla parte posteriore delle spalle, non sopra i trapezi, come in un power squat. Alla giusta altezza, dovresti essere quasi parallelo al pavimento quando sei piegato. Mantieni la schiena contratta, le scapole addotte e le ginocchia leggermente flesse. Mantieni la curvatura naturale della schiena e la colonna cervicale in linea. Inizia il movimento estendendo le anche usando glutei e ischiocrurali, sollevando il peso fino alla posizione eretta. Riabbassa lentamente il peso nella posizione di partenza, dove è sostenuto dalle catene.', 
  'hamstrings', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Bar_Good_Morning/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Bar_Good_Morning/1.jpg'], 
  NOW()
),
(
  '1e463caf-04c3-40fb-bde6-9aeeeb9a3613', 
  'Hanging Leg Raise', 
  'Hanging Leg Raise (Sollevamento gambe alla sbarra)', 
  'Hang from a chin-up bar with both arms extended at arms length in top of you using either a wide grip or a medium grip. The legs should be straight down with the pelvis rolled slightly backwards. This will be your starting position.
Raise your legs until the torso makes a 90-degree angle with the legs. Exhale as you perform this movement and hold the contraction for a second or so.
Go back slowly to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'Appenditi a una sbarra per trazioni con le braccia distese, usando una presa larga o media. Le gambe devono essere tese verso il basso con il bacino leggermente ruotato all''indietro. Questa sarà la posizione di partenza. Solleva le gambe finché il busto non forma un angolo di 90 gradi con le stesse. Espira durante il movimento e mantieni la contrazione per un secondo circa. Torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'expert', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg'], 
  NOW()
),
(
  'af26a133-4ef7-4729-aac1-1475b6296e88', 
  'Hanging Pike', 
  'Hanging Pike', 
  'Hang from a chin-up bar with your legs and feet together using an overhand grip (palms facing away from you) that is slightly wider than shoulder width. Tip: You may use wrist wraps in order to facilitate holding on to the bar.
Now bend your knees at a 90 degree angle and bring the upper legs forward so that the calves are perpendicular to the floor while the thighs remain parallel to it. This will be your starting position.
Pull your legs up as you exhale until you almost touch your shins with the bar above you. Tip: Try to straighten your legs as much as possible while at the top.
Lower your legs as slowly as possible until you reach the starting position. Tip: Avoid swinging and using momentum at all times.
Repeat for the recommended amount of repetitions.', 
  'Appenditi a una sbarra per trazioni con gambe e piedi uniti, usando una presa prona (palmi rivolti lontano da te) leggermente più larga delle spalle. Consiglio: puoi usare delle fasce per i polsi per migliorare la presa. Piega le ginocchia a 90 gradi e porta la parte superiore delle gambe in avanti, in modo che i polpacci siano perpendicolari al pavimento e le cosce parallele ad esso. Questa sarà la posizione di partenza. Espirando, tira le gambe verso l''alto finché gli stinchi non toccano quasi la sbarra sopra di te. Consiglio: cerca di stendere le gambe il più possibile nella fase finale. Abbassa le gambe il più lentamente possibile fino alla posizione di partenza. Consiglio: evita di oscillare o di usare lo slancio. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Pike/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Pike/1.jpg'], 
  NOW()
),
(
  'a1b20bcc-f35f-44b3-8f7c-a5f4665399be', 
  'Heaving Snatch Balance', 
  'Heaving Snatch Balance', 
  'This drill helps you learn the snatch. Begin by holding a light weight across the back of the shoulders. Your feet should be slightly wider than hip width apart with the feet turned out, the same position that you would perform a squat with.
Begin by dipping with the knees slightly, and popping back up to briefly unload the bar. Drive yourself underneath the bar, elevating it overhead as you descend into a full squat.
Return to a standing position.', 
  'Questo esercizio aiuta ad apprendere lo snatch. Inizia tenendo un peso leggero appoggiato sulle spalle. I piedi devono essere leggermente più larghi della larghezza delle anche e ruotati verso l''esterno, nella stessa posizione in cui eseguiresti uno squat. Inizia con un leggero affondo delle ginocchia e spingi verso l''alto per scaricare brevemente il bilanciere. Posizionati rapidamente sotto il bilanciere, portandolo sopra la testa mentre scendi in uno squat completo. Ritorna in posizione eretta.', 
  'quadriceps', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Heaving_Snatch_Balance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Heaving_Snatch_Balance/1.jpg'], 
  NOW()
),
(
  '2b26b08b-40b0-44f8-9cdd-c574dba05687', 
  'Heavy Bag Thrust', 
  'Heavy Bag Thrust', 
  'Utilize a heavy bag for this exercise. Assume an upright stance next to the bag, with your feet staggered, fairly wide apart. Place your hand on the bag at about chest height. This will be your starting position.
Begin by twisting at the waist, pushing the bag forward as hard as possible. Perform this move quickly, pushing the bag away from your body.
Receive the bag as it swings back by reversing these steps.', 
  'Utilizza un sacco pesante per questo esercizio. Assumi una posizione eretta accanto al sacco, con i piedi sfalsati e abbastanza distanziati. Appoggia la mano sul sacco all''altezza del petto: questa sarà la tua posizione di partenza. Inizia ruotando il busto e spingendo il sacco in avanti con quanta più forza possibile. Esegui il movimento rapidamente, allontanando il sacco dal corpo. Accogli il sacco mentre oscilla all''indietro invertendo i passaggi.', 
  'chest', 
  'abdominals', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Heavy_Bag_Thrust/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Heavy_Bag_Thrust/1.jpg'], 
  NOW()
),
(
  'c6836dde-49f3-4ed6-86ee-032f46211272', 
  'High Cable Curls', 
  'High Cable Curls', 
  'Stand between a couple of high pulleys and grab a handle in each arm. Position your upper arms in a way that they are parallel to the floor with the palms of your hands facing you. This will be your starting position.
Curl the handles towards you until they are next to your ears. Make sure that as you do so you flex your biceps and exhale. The upper arms should remain stationary and only the forearms should move. Hold for a second in the contracted position as you squeeze the biceps.
Slowly bring back the arms to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Posizionati tra due carrucole alte e afferra una maniglia con ciascuna mano. Posiziona le braccia in modo che siano parallele al pavimento con i palmi rivolti verso di te. Questa sarà la tua posizione di partenza. Fletti le maniglie verso di te fino a portarle vicino alle orecchie. Assicurati di contrarre i bicipiti ed espirare durante l''esecuzione. La parte superiore delle braccia deve rimanere ferma, muovendo solo gli avambracci. Mantieni la contrazione per un secondo strizzando i bicipiti, quindi riporta lentamente le braccia nella posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'cable', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/High_Cable_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/High_Cable_Curls/1.jpg'], 
  NOW()
),
(
  'd098988a-88ee-44dc-b785-8a87ab1816cb', 
  'Hip Circles (prone)', 
  'Hip Circles (prone)', 
  'Position yourself on your hands and knees on the ground. Maintaining good posture, raise one bent knee off of the ground. This will be your starting position.
Keeping the knee in a bent position, rotate the femur in an arc, attempting to make a big circle with your knee.
Perform this slowly for a number of repetitions, and repeat on the other side.', 
  'Mettiti a terra in quadrupedia (a quattro zampe). Mantenendo una postura corretta, solleva un ginocchio piegato da terra. Questa sarà la posizione di partenza. Mantenendo il ginocchio piegato, ruota il femore tracciando un arco, cercando di disegnare un ampio cerchio con il ginocchio. Esegui il movimento lentamente per un numero prestabilito di ripetizioni, quindi ripeti con l''altra gamba.', 
  'abductors', 
  'adductors', 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Circles_prone/1.jpg'], 
  NOW()
),
(
  '701d8c3f-94c4-4276-8703-02bb4549b55f', 
  'Hip Extension with Bands', 
  'Hip Extension with Bands', 
  'Secure one end of the band to the lower portion of a post and attach the other to one ankle.
Facing the attachment point of the band, hold on to the column to stabilize yourself.
Keeping your head and your chest up, move the resisted leg back as far as you can while keeping the knee straight.
Return the leg to the starting position.', 
  'Fissa un''estremità della banda elastica alla parte inferiore di un supporto e l''altra a una caviglia. Rivolto verso il punto di ancoraggio, appoggiati alla colonna per stabilizzarti. Mantenendo testa e petto alti, spingi la gamba con la resistenza il più indietro possibile, tenendo il ginocchio teso. Ritorna con la gamba nella posizione di partenza.', 
  'glutes', 
  'hamstrings', 
  'bands', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Extension_with_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Extension_with_Bands/1.jpg'], 
  NOW()
),
(
  'd09a4a0e-53e6-468f-b670-43aa48ae2683', 
  'Hip Flexion with Band', 
  'Hip_Flexion_with_Band', 
  'Secure one end of the band to the lower portion of a post and attach the other to one ankle.
Face away from the attachment point of the band.
Keeping your head and your chest up, raise your knee up to 90 degrees and pause.
Return the leg to the starting position.', 
  'Fissa un''estremità della banda elastica alla parte inferiore di un supporto e l''altra a una caviglia. Rivolgi le spalle al punto di ancoraggio della banda. Mantenendo testa e petto alti, solleva il ginocchio fino a 90 gradi e fai una pausa. Ritorna con la gamba nella posizione di partenza.', 
  'quadriceps', 
  NULL, 
  'bands', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Flexion_with_Band/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Flexion_with_Band/1.jpg'], 
  NOW()
),
(
  '58cd8ba3-34ce-472c-8b31-763eea18d923', 
  'Hip Lift with Band', 
  'Hip Lift with Band', 
  'After choosing a suitable band, lay down in the middle of the rack, after securing the band on either side of you. If your rack doesn''t have pegs, the band can be secured using heavy dumbbells or similar objects, just ensure they won''t move.
Adjust your position so that the band is directly over your hips. Bend your knees and place your feet flat on the floor. Your hands can be on the floor or holding the band in position.
Keeping your shoulders on the ground, drive through your heels to raise your hips, pushing into the band as high as you can.
Pause at the top of the motion, and return to the starting position.', 
  'Dopo aver scelto una banda adatta, sdraiati al centro del rack dopo averla fissata su entrambi i lati. Se il rack non ha pioli, la banda può essere fissata con manubri pesanti o oggetti simili, assicurandoti che non si muovano. Regola la posizione in modo che la banda si trovi direttamente sopra i fianchi. Piega le ginocchia e appoggia i piedi a terra. Le mani possono restare a terra o tenere la banda in posizione. Mantenendo le spalle a terra, spingi sui talloni per sollevare i fianchi, opponendoti alla resistenza della banda il più in alto possibile. Fai una pausa nel punto massimo, quindi torna alla posizione iniziale.', 
  'glutes', 
  'calves', 
  'bands', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Lift_with_Band/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hip_Lift_with_Band/1.jpg'], 
  NOW()
),
(
  '196d03ad-5a34-4aab-abb8-40e75afb4e5d', 
  'Hug A Ball', 
  'Hug A Ball', 
  'Seat yourself on the floor.
Straddle an exercise ball between both legs and lower your hips down toward the floor.
Hug your arms around the ball to support your body. Adjust your legs so that your feet are flat on the floor and your knees line up over your ankles. Keep a good grip on the ball so it doesn''t roll away from you and send you back onto your buttocks.', 
  'Siediti sul pavimento. Posiziona una palla da ginnastica tra le gambe e abbassa i fianchi verso il pavimento. Abbraccia la palla con le braccia per sostenere il corpo. Regola le gambe in modo che i piedi siano ben appoggiati a terra e le ginocchia siano allineate sopra le caviglie. Mantieni una presa salda sulla palla in modo che non rotoli via facendoti cadere all''indietro sui glutei.', 
  'lower back', 
  'calves', 
  'exercise ball', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hug_A_Ball/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hug_A_Ball/1.jpg'], 
  NOW()
),
(
  '1c532f47-dcc6-4fb2-a208-5192eb16c6af', 
  'Hug Knees To Chest', 
  'Hug Knees To Chest', 
  'Lie down on your back and pull both knees up to your chest.
Hold your arms under the knees, not over (that would put to much pressure on your knee joints).
Slowly pull the knees toward your shoulders. This also stretches your buttocks muscles.', 
  'Sdraiati sulla schiena e porta entrambe le ginocchia al petto. Tieni le braccia sotto le ginocchia, non sopra (ciò eserciterebbe troppa pressione sulle articolazioni del ginocchio). Tira lentamente le ginocchia verso le spalle. Questo esercizio allunga anche i muscoli dei glutei.', 
  'lower back', 
  'glutes', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hug_Knees_To_Chest/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hug_Knees_To_Chest/1.jpg'], 
  NOW()
),
(
  '0b043bd4-010f-4b05-9fa4-f84b4cb9e6aa', 
  'Hurdle Hops', 
  'Hurdle Hops', 
  'Set up a row of hurdles or other small barriers, placing them a few feet apart.
Stand in front of the first hurdle with your feet shoulder width apart. This will be your starting position.
Begin by jumping with both feet over the first hurdle, swinging both arms as you jump.
Absorb the impact of landing by bending the knees, rebounding out of the first leap by jumping over the next hurdle. Continue until you have jumped over all of the hurdles.', 
  'Posiziona una fila di ostacoli o altre piccole barriere a poca distanza l''una dall''altra. Stai di fronte al primo ostacolo con i piedi alla larghezza delle spalle. Questa è la posizione di partenza. Inizia saltando con entrambi i piedi oltre il primo ostacolo, facendo oscillare le braccia durante il salto. Assorbi l''impatto dell''atterraggio piegando le ginocchia e sfrutta la spinta per saltare immediatamente oltre l''ostacolo successivo. Continua finché non avrai superato tutti gli ostacoli.', 
  'hamstrings', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hurdle_Hops/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hurdle_Hops/1.jpg'], 
  NOW()
),
(
  '00ef1cc6-a891-407f-ad0b-8def2cc46ab9', 
  'Hyperextensions (Back Extensions)', 
  'Hyperextensions (Estensioni della schiena)', 
  'Lie face down on a hyperextension bench, tucking your ankles securely under the footpads.
Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction.
With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms.
Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back.
Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a pancia in giù su una panca per hyperextension, infilando le caviglie saldamente sotto i rulli. Regola il supporto superiore, se possibile, in modo che le cosce poggino piatte sull''imbottitura, lasciando spazio sufficiente per flettere il busto senza restrizioni. Con il corpo dritto, incrocia le braccia davanti al petto (scelta consigliata) o dietro la nuca. Questa è la posizione di partenza. Suggerimento: puoi tenere un disco in mano davanti al petto per una maggiore resistenza. Inizia a fletterti lentamente in avanti partendo dalla vita, fin dove riesci mantenendo la schiena dritta. Inspira durante il movimento. Prosegui fino a sentire una buona tensione sui bicipiti femorali e finché non riesci più a scendere senza curvare la schiena. Suggerimento: non curvare mai la schiena. La chiave è arrivare fin dove il corpo lo permette senza compromettere la postura. Risali lentamente verso la posizione iniziale espirando. Suggerimento: evita di inarcare eccessivamente la schiena oltre la linea retta e non slanciare il busto per evitare infortuni. Ripeti per il numero di ripetizioni raccomandato.', 
  'lower back', 
  'glutes', 
  'other', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/1.jpg'], 
  NOW()
),
(
  '3abfdd36-10ae-4174-aedd-664718a3ec2b', 
  'Hyperextensions With No Hyperextension Bench', 
  'Hyperextensions senza panca specifica', 
  'With someone holding down your legs, slide yourself down to the edge a flat bench until your hips hang off the end of the bench. Tip: Your entire upper body should be hanging down towards the floor. Also, you will be in the same position as if you were on a hyperextension bench but the range of motion will be shorter due to the height of the flat bench vs. that of the hyperextension bench.
With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms.
Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you almost touch the floor or you feel a nice stretch on the hamstrings (whichever comes first). Tip: Never round the back as you perform this exercise.
Slowly raise your torso back to the initial position as you exhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury.
Repeat for the recommended amount of repetitions.', 
  'Fatti bloccare le gambe da qualcuno e scivola verso l''estremità di una panca piana finché le anche non sporgono dal bordo. Suggerimento: tutto il busto deve pendere verso il pavimento. Sarai nella stessa posizione di una panca per hyperextension, ma il range di movimento sarà ridotto a causa dell''altezza della panca piana. Con il corpo dritto, incrocia le braccia davanti al petto o dietro la nuca. Questa è la posizione di partenza. Inizia a fletterti in avanti lentamente, mantenendo la schiena dritta e inspirando. Scendi finché non tocchi quasi il pavimento o senti una buona tensione sui bicipiti femorali. Suggerimento: non curvare mai la schiena. Risali lentamente espirando. Suggerimento: evita di inarcare la schiena oltre la linea retta e non usare slanci. Ripeti per il numero di ripetizioni raccomandato.', 
  'lower back', 
  'glutes', 
  'body only', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_With_No_Hyperextension_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_With_No_Hyperextension_Bench/1.jpg'], 
  NOW()
),
(
  '6570a7d8-0389-4a08-b240-9a501227c49b', 
  'IT Band and Glute Stretch', 
  'Stretching della banda ileotibiale e dei glutei', 
  'Loop a belt, rope, or band around one of your feet, and swing that leg across your body to the opposite side, keeping the leg extended as you lay on the ground. This will be your starting position.
Keeping your foot off of the floor, pull on the belt, using the tension to pull the toes up. Hold for 10-20 seconds, and repeat on the other side.', 
  'Fai passare una cinghia, una corda o una banda elastica attorno a un piede e porta la gamba tesa lateralmente oltre il corpo, mantenendola estesa mentre sei disteso a terra. Questa è la posizione di partenza. Mantenendo il piede sollevato da terra, tira la cinghia usando la tensione per sollevare le punte dei piedi. Mantieni la posizione per 10-20 secondi e ripeti sull''altro lato.', 
  'abductors', 
  NULL, 
  'other', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/IT_Band_and_Glute_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/IT_Band_and_Glute_Stretch/1.jpg'], 
  NOW()
),
(
  '8f6da3bd-6d29-4b95-86ca-6ff86d9927ca', 
  'Iliotibial Tract-SMR', 
  'Rilascio miofasciale (SMR) della fascia ileotibiale', 
  'Lay on your side, with the bottom leg placed onto a foam roller between the hip and the knee. The other leg can be crossed in front of you.
Place as much of your weight as is tolerable onto your bottom leg; there is no need to keep your bottom leg in contact with the ground. Be sure to relax the muscles of the leg you are stretching.
Roll your leg over the foam from you hip to your knee, pausing for 10-30 seconds at points of tension. Repeat with the opposite leg.', 
  'Sdraiati su un fianco con la gamba inferiore posizionata sopra un foam roller, tra l''anca e il ginocchio. L''altra gamba può essere incrociata davanti a te. Scarica sul foam roller quanto più peso possibile; non è necessario che la gamba inferiore tocchi terra. Assicurati di rilassare i muscoli della gamba che stai trattando. Fai rotolare la gamba sul foam roller dall''anca al ginocchio, soffermandoti per 10-30 secondi sui punti di maggiore tensione. Ripeti con la gamba opposta.', 
  'abductors', 
  NULL, 
  'foam roll', 
  'intermediate', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Iliotibial_Tract-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Iliotibial_Tract-SMR/1.jpg'], 
  NOW()
),
(
  '1d5b28b4-a5b0-45f3-8600-a5f7dfdd4e77', 
  'Inchworm', 
  'Inchworm', 
  'Stand with your feet close together. Keeping your legs straight, stretch down and put your hands on the floor directly in front of you. This will be your starting position.
Begin by walking your hands forward slowly, alternating your left and your right. As you do so, bend only at the hip, keeping your legs straight.
Keep going until your body is parallel to the ground in a pushup position.
Now, keep your hands in place and slowly take short steps with your feet, moving only a few inches at a time.
Continue walking until your feet are by hour hands, keeping your legs straight as you do so.', 
  'In piedi con i piedi vicini. Mantenendo le gambe tese, piegati in avanti e appoggia le mani sul pavimento davanti a te. Questa è la posizione di partenza. Inizia a camminare in avanti con le mani, alternando sinistra e destra. Durante il movimento, fletti solo le anche mantenendo le gambe tese. Continua finché il corpo non è parallelo al suolo in posizione di pushup. Ora, mantenendo le mani ferme, fai piccoli passi con i piedi, muovendoti di pochi centimetri alla volta. Continua a camminare finché i piedi non sono vicini alle mani, mantenendo le gambe sempre tese.', 
  'hamstrings', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inchworm/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inchworm/1.jpg'], 
  NOW()
),
(
  '2bf3a791-191c-4fe3-8b6b-f5ac25490ba8', 
  'Incline Barbell Triceps Extension', 
  'Incline Barbell Triceps Extension', 
  'Hold a barbell with an overhand grip (palms down) that is a little closer together than shoulder width.
Lie back on an incline bench set at any angle between 45-75-degrees.
Bring the bar overhead with your arms extended and elbows in. The arms should be in line with the torso above the head. This will be your starting position.
Now lower the bar in a semicircular motion behind your head until your forearms touch your biceps. Inhale as you perform this movement. Tip: Keep your upper arms stationary and close to your head at all times. Only the forearms should move.
Return to the starting position as you breathe out and you contract the triceps. Hold the contraction for a second.
Repeat for the recommended amount of repetitions.', 
  'Afferra un bilanciere con una presa prona (palmi verso il basso) leggermente più stretta della larghezza delle spalle. Sdraiati su una panca inclinata tra i 45 e i 75 gradi. Porta il bilanciere sopra la testa con le braccia tese e i gomiti chiusi. Le braccia devono essere in linea con il busto sopra la testa. Questa è la posizione di partenza. Abbassa il bilanciere con un movimento semicircolare dietro la testa finché gli avambracci non toccano i bicipiti. Inspira durante il movimento. Suggerimento: mantieni la parte superiore delle braccia immobile e vicina alla testa; devono muoversi solo gli avambracci. Torna alla posizione iniziale espirando e contraendo i tricipiti. Mantieni la contrazione per un secondo. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Barbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Barbell_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  'c4426d55-116b-479a-85d0-2d46baff9a96', 
  'Incline Bench Pull', 
  'Incline Bench Pull', 
  'Grab a dumbbell in each hand and lie face down on an incline bench that is set to an incline that is approximately 30 degrees.
Let the arms hang to your sides fully extended as they point to the floor.
Turn the wrists until your hands have a pronated (palms down) grip.
Now flare the elbows out. This will be your starting position.
As you breathe out, start to pull the dumbbells up as if you are doing a reverse bench press. You will do this by bending at the elbows and bringing the upper arms up as you let the forearms hang. Continue this motion until the upper arms are at the same level as your back. Tip: The elbows will come out to the side and your upper arms and torso should make the letter "T" at the top of the movement. Hold the contraction at the top for a second.
Slowly go back down to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'Impugna un manubrio per mano e sdraiati a pancia in giù su una panca inclinata a circa 30 gradi. Lascia le braccia tese verso il pavimento. Ruota i polsi in modo che le mani siano in posizione prona (palmi verso il basso). Apri i gomiti verso l''esterno. Questa è la posizione di partenza. Espirando, solleva i manubri come se eseguissi una panca piana al contrario, flettendo i gomiti e portando la parte superiore delle braccia verso l''alto mentre gli avambracci pendono. Continua finché la parte superiore delle braccia è allineata con la schiena. Suggerimento: i gomiti si aprono lateralmente, formando una "T" con il busto. Mantieni la contrazione per un secondo. Torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'middle back', 
  'lats', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Bench_Pull/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Bench_Pull/1.jpg'], 
  NOW()
),
(
  '735b793f-9885-40b1-8371-0461d7cab313', 
  'Incline Cable Chest Press', 
  'Incline Cable Chest Press', 
  'Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position.
Begin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement.
After pausing at full extension, return to the starting position, keeping tension on the cables.', 
  'Regola il carico e siediti afferrando le maniglie. La parte superiore delle braccia deve formare un angolo di circa 45 gradi rispetto al busto, con testa e petto alti. I gomiti devono essere flessi a circa 90 gradi. Questa è la posizione di partenza. Inizia estendendo i gomiti, spingendo le maniglie in avanti. Mantieni le scapole retratte durante l''esecuzione. Dopo una breve pausa a braccia tese, torna alla posizione iniziale mantenendo i cavi in tensione.', 
  'chest', 
  'shoulders', 
  'cable', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Cable_Chest_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Cable_Chest_Press/1.jpg'], 
  NOW()
),
(
  '7f60e668-710a-4746-a82e-9801f0feb6c7', 
  'Incline Cable Flye', 
  'Incline Cable Flye', 
  'To get yourself into the starting position, set the pulleys at the floor level (lowest level possible on the machine that is below your torso).
Place an incline bench (set at 45 degrees) in between the pulleys, select a weight on each one and grab a pulley on each hand.
With a handle on each hand, lie on the incline bench and bring your hands together at arms length in front of your face. This will be your starting position.
With a slight bend of your elbows (in order to prevent stress at the biceps tendon), lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary. The movement should only occur at the shoulder joint.
Return your arms back to the starting position as you squeeze your chest muscles and exhale. Hold the contracted position for a second. Tip: Make sure to use the same arc of motion used to lower the weights.
Repeat the movement for the prescribed amount of repetitions.', 
  'Posiziona le carrucole al livello più basso possibile. Posiziona una panca inclinata (45 gradi) tra le carrucole, seleziona il carico e afferra le maniglie. Sdraiati sulla panca e unisci le mani a braccia tese davanti al viso. Questa è la posizione di partenza. Con i gomiti leggermente flessi (per non stressare il tendine del bicipite), apri le braccia lateralmente seguendo un arco ampio finché non senti allungare i pettorali. Inspira durante questa fase. Suggerimento: le braccia devono rimanere immobili, il movimento avviene solo nell''articolazione della spalla. Torna alla posizione di partenza espirando e contraendo i pettorali. Mantieni la contrazione per un secondo. Ripeti per il numero di ripetizioni prescritto.', 
  'chest', 
  'shoulders', 
  'cable', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Cable_Flye/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Cable_Flye/1.jpg'], 
  NOW()
),
(
  '3756855b-41db-472c-b3e7-5bc389785944', 
  'Incline Dumbbell Bench With Palms Facing In', 
  'Panca inclinata con manubri (palmi rivolti all''interno)', 
  'Lie back on an incline bench with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.
By using your thighs to help you get the dumbbells up, clean the dumbbells one arm at a time so that you can hold them at shoulder width.
Once at shoulder width, keep the palms of your hands with a neutral grip (palms facing each other). Keep your elbows flared out with the upper arms in line with the shoulders (perpendicular to the torso) and the elbows bent creating a 90-degree angle between the upper arm and the forearm. This will be your starting position.
Now bring down the weights slowly to your side as you breathe in. Keep full control of the dumbbells at all times.
As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the dumbbells back in your thighs and then on the floor. This is the safest manner to dispose of the dumbbells.', 
  'Sdraiati su una panca inclinata con un manubrio per mano appoggiato sulle cosce. I palmi sono rivolti l''uno verso l''altro. Usa le cosce per aiutare a portare i manubri in posizione, uno alla volta, tenendoli all''altezza delle spalle. Con una presa neutra (palmi che si guardano), tieni i gomiti larghi con la parte superiore delle braccia perpendicolare al busto e i gomiti flessi a 90 gradi. Questa è la posizione di partenza. Abbassa lentamente i pesi ai lati inspirando. Mantieni sempre il controllo dei manubri. Espirando, spingi i manubri verso l''alto usando i muscoli pettorali. Blocca le braccia nella posizione contratta, mantieni per un secondo e poi scendi lentamente. Suggerimento: la fase di discesa dovrebbe durare il doppio della fase di risalita. Ripeti per il numero di ripetizioni prescritto. Al termine, appoggia i manubri sulle cosce e poi a terra.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Bench_With_Palms_Facing_In/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Bench_With_Palms_Facing_In/1.jpg'], 
  NOW()
),
(
  '2cd1cd9c-cb8c-42ee-b577-38e7354aa6ff', 
  'Incline Dumbbell Curl', 
  'Curl su panca inclinata con manubri', 
  'Sit back on an incline bench with a dumbbell in each hand held at arms length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position.
While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second.
Slowly begin to bring the dumbbells back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'Siediti su una panca inclinata tenendo un manubrio in ciascuna mano a braccia distese. Mantieni i gomiti vicini al busto e ruota i palmi delle mani finché non sono rivolti in avanti. Questa sarà la tua posizione di partenza. Mantenendo la parte superiore del braccio ferma, solleva i pesi flettendo i bicipiti ed espirando. Solo gli avambracci devono muoversi. Continua il movimento finché i bicipiti non sono completamente contratti e i manubri sono all''altezza delle spalle. Mantieni la contrazione per un secondo. Inizia lentamente a riportare i manubri nella posizione di partenza mentre inspiri. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/1.jpg'], 
  NOW()
),
(
  '2e8ed45e-2b4f-4825-901b-1c572e2aeb8f', 
  'Incline Dumbbell Flyes', 
  'Croci su panca inclinata con manubri', 
  'Hold a dumbbell on each hand and lie on an incline bench that is set to an incline angle of no more than 30 degrees.
Extend your arms above you with a slight bend at the elbows.
Now rotate the wrists so that the palms of your hands are facing you. Tip: The pinky fingers should be next to each other. This will be your starting position.
As you breathe in, start to slowly lower the arms to the side while keeping the arms extended and while rotating the wrists until the palms of the hand are facing each other. Tip: At the end of the movement the arms will be by your side with the palms facing the ceiling.
As you exhale start to bring the dumbbells back up to the starting position by reversing the motion and rotating the hands so that the pinky fingers are next to each other again. Tip: Keep in mind that the movement will only happen at the shoulder joint and at the wrist. There is no motion that happens at the elbow joint.
Repeat for the recommended amount of repetitions.', 
  'Impugna un manubrio in ogni mano e sdraiati su una panca inclinata con un angolo non superiore a 30 gradi. Estendi le braccia sopra di te con una leggera flessione dei gomiti. Ora ruota i polsi in modo che i palmi delle mani siano rivolti verso di te. Suggerimento: i mignoli dovrebbero essere vicini tra loro. Questa sarà la posizione di partenza. Mentre inspiri, inizia ad abbassare lentamente le braccia lateralmente, mantenendole estese e ruotando i polsi finché i palmi delle mani non si guardano. Suggerimento: alla fine del movimento le braccia saranno ai tuoi lati con i palmi rivolti verso il soffitto. Mentre espiri, inizia a riportare i manubri nella posizione di partenza invertendo il movimento e ruotando le mani in modo che i mignoli siano di nuovo vicini. Suggerimento: ricorda che il movimento avviene solo a livello dell''articolazione della spalla e del polso. Non deve esserci alcun movimento nell''articolazione del gomito. Ripeti per il numero di ripetizioni consigliato.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Flyes/1.jpg'], 
  NOW()
),
(
  '6f69476a-005f-407d-84a7-38e5c195724a', 
  'Incline Dumbbell Flyes - With A Twist', 
  'Croci su panca inclinata con manubri - Con rotazione', 
  'Hold a dumbbell in each hand and lie on an incline bench that is set to an incline angle of no more than 30 degrees.
Extend your arms above you with a slight bend at the elbows.
Now rotate the wrists so that the palms of your hands are facing you. Tip: The pinky fingers should be next to each other. This will be your starting position.
As you breathe in, start to slowly lower the arms to the side while keeping the arms extended and while rotating the wrists until the palms of the hand are facing each other. Tip: At the end of the movement the arms will be by your side with the palms facing the ceiling.
As you exhale start to bring the dumbbells back up to the starting position by reversing the motion and rotating the hands so that the pinky fingers are next to each other again. Tip: Keep in mind that the movement will only happen at the shoulder joint and at the wrist. There is no motion that happens at the elbow joint.
Repeat for the recommended amount of repetitions.', 
  'Impugna un manubrio in ogni mano e sdraiati su una panca inclinata con un angolo non superiore a 30 gradi. Estendi le braccia sopra di te con una leggera flessione dei gomiti. Ora ruota i polsi in modo che i palmi delle mani siano rivolti verso di te. Suggerimento: i mignoli dovrebbero essere vicini tra loro. Questa sarà la posizione di partenza. Mentre inspiri, inizia ad abbassare lentamente le braccia lateralmente, mantenendole estese e ruotando i polsi finché i palmi delle mani non si guardano. Suggerimento: alla fine del movimento le braccia saranno ai tuoi lati con i palmi rivolti verso il soffitto. Mentre espiri, inizia a riportare i manubri nella posizione di partenza invertendo il movimento e ruotando le mani in modo che i mignoli siano di nuovo vicini. Suggerimento: ricorda che il movimento avviene solo a livello dell''articolazione della spalla e del polso. Non deve esserci alcun movimento nell''articolazione del gomito. Ripeti per il numero di ripetizioni consigliato.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Flyes_-_With_A_Twist/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Flyes_-_With_A_Twist/1.jpg'], 
  NOW()
),
(
  'c0210402-d7b0-4edd-bc97-daf331c01e5c', 
  'Incline Dumbbell Press', 
  'Distensioni su panca inclinata con manubri', 
  'Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other.
Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width.
Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.
Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest.
Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells.', 
  'Sdraiati su una panca inclinata con un manubrio in ogni mano appoggiato sulle cosce. I palmi delle mani devono essere rivolti l''uno verso l''altro. Utilizzando le cosce per aiutarti a spingere i manubri, sollevali uno alla volta finché non riesci a tenerli all''altezza delle spalle. Una volta sollevati, ruota i polsi in avanti in modo che i palmi siano rivolti lontano da te. Questa sarà la posizione di partenza. Mantieni sempre il pieno controllo dei manubri. Espira e spingi i manubri verso l''alto usando i pettorali. Distendi completamente le braccia in alto, tieni per un secondo e inizia ad abbassare lentamente il peso. Suggerimento: idealmente, la discesa del peso dovrebbe richiedere circa il doppio del tempo rispetto alla salita. Ripeti per il numero di ripetizioni prescritto. Al termine, riponi i manubri sulle cosce e poi a terra. Questo è il modo più sicuro per posare i pesi.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/1.jpg'], 
  NOW()
),
(
  'd7b538ad-f5e5-476d-93d8-99401455a13e', 
  'Incline Hammer Curls', 
  'Hammer curl su panca inclinata', 
  'Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position.
Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary.
Continue to the top of the movement and pause, then slowly return to the start position.', 
  'Siediti su una panca inclinata con un manubrio in ogni mano. Schiena ben appoggiata allo schienale e piedi uniti. Lascia che i manubri pendano lungo i fianchi con una presa neutra. Questa sarà la tua posizione di partenza. Inizia il movimento flettendo il gomito e cercando di mantenere ferma la parte superiore del braccio. Continua fino alla fine del movimento, fai una pausa e torna lentamente alla posizione iniziale.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Hammer_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Hammer_Curls/1.jpg'], 
  NOW()
),
(
  'e073c000-7b39-40df-a24b-83773307b03c', 
  'Incline Inner Biceps Curl', 
  'Curl bicipiti interno su panca inclinata', 
  'Hold a dumbbell in each hand and lie back on an incline bench.
The dumbbells should be at arm''s length hanging at your sides and your palms should be facing out. This will be your starting position.
Now as you exhale curl the weight outward and up while keeping your forearms in line with your side deltoids. Continue the curl until the dumbbells are at shoulder height and to the sides of your deltoids. Tip: The end of the movement should look similar to a double biceps pose.
After a second contraction at the top of the movement, start to inhale and slowly lower the weights back to the starting position using the same path used to bring them up.
Repeat for the recommended amount of repetitions.', 
  'Impugna un manubrio in ogni mano e sdraiati su una panca inclinata. I manubri devono pendere lungo i fianchi a braccia distese e i palmi devono essere rivolti verso l''esterno. Questa sarà la posizione di partenza. Espirando, solleva i pesi verso l''esterno e verso l''alto, mantenendo gli avambracci in linea con i deltoidi laterali. Continua il curl finché i manubri non sono all''altezza delle spalle, ai lati dei deltoidi. Suggerimento: la posizione finale dovrebbe assomigliare a una posa di doppio bicipite. Dopo una contrazione di un secondo nella parte alta, inspira e abbassa lentamente i pesi nella posizione iniziale seguendo lo stesso percorso. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Inner_Biceps_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Inner_Biceps_Curl/1.jpg'], 
  NOW()
),
(
  '57332775-1cbb-40b0-8889-d9c9694ef20e', 
  'Incline Push-Up', 
  'Push-up inclinati', 
  'Stand facing bench or sturdy elevated platform. Place hands on edge of bench or platform, slightly wider than shoulder width.
Position forefoot back from bench or platform with arms and body straight. Arms should be perpendicular to body. Keeping body straight, lower chest to edge of box or platform by bending arms.
Push body up until arms are extended. Repeat.', 
  'Mettiti di fronte a una panca o a una piattaforma elevata e robusta. Appoggia le mani sul bordo della panca, a una larghezza leggermente superiore a quella delle spalle. Posiziona la punta dei piedi indietro rispetto alla panca, mantenendo braccia e corpo dritti. Le braccia devono essere perpendicolari al corpo. Mantenendo il corpo dritto, abbassa il petto verso il bordo della panca flettendo le braccia. Spingi il corpo verso l''alto finché le braccia non sono distese. Ripeti.', 
  'chest', 
  'shoulders', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up/1.jpg'], 
  NOW()
),
(
  'a707be1e-d02a-4e73-b45d-20fe44b62fdc', 
  'Incline Push-Up Close-Grip', 
  'Push-up inclinati a presa stretta', 
  'Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.
Place your hands next to one another on the bar.
Position your feet back from the bar with arms and body straight. This will be your starting position.
Keeping your body straight, lower your chest to the bar by bending the arms.
Return to the starting position by extending the elbows, pressing yourself back up.', 
  'Mettiti di fronte a una sbarra (come quella di una Smith machine) o a una piattaforma elevata di altezza adeguata. Posiziona le mani vicine l''una all''altra sulla sbarra. Posiziona i piedi indietro rispetto alla sbarra, tenendo braccia e corpo dritti. Questa sarà la tua posizione di partenza. Mantenendo il corpo dritto, abbassa il petto verso la sbarra flettendo le braccia. Torna alla posizione di partenza estendendo i gomiti e spingendo il corpo verso l''alto.', 
  'triceps', 
  'chest', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Close-Grip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Close-Grip/1.jpg'], 
  NOW()
),
(
  'da839857-dde0-485d-bb1f-e9a5e9cd714a', 
  'Incline Push-Up Depth Jump', 
  'Push-up inclinati con salto (Depth Jump)', 
  'For this drill you will need a box about 12 inches high, and two thick mats or aerobics steps.
Place the steps just outside of your shoulders, and place your feet on top of the box so that you are in an incline pushup position, your hands just inside the steps. This will be your starting position.
Begin by bending at the elbows to lower your body, quickly reversing position to push your body off of the ground. As you leave the ground, move your hands onto the steps, bending your elbows to absorb the impact.
Repeat the motion to return to the starting position.', 
  'Per questo esercizio avrai bisogno di un box alto circa 30 cm e due tappetini spessi o step aerobici. Posiziona gli step appena fuori dalla larghezza delle spalle e metti i piedi sopra il box in posizione di push-up inclinato, con le mani appena all''interno degli step. Questa sarà la tua posizione di partenza. Inizia flettendo i gomiti per abbassare il corpo, invertendo rapidamente il movimento per spingere il corpo via dal terreno. Mentre ti stacchi da terra, sposta le mani sugli step, flettendo i gomiti per assorbire l''impatto. Ripeti il movimento per tornare alla posizione di partenza.', 
  'chest', 
  'shoulders', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Depth_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Depth_Jump/1.jpg'], 
  NOW()
),
(
  '246ce453-0b26-4278-9513-ace75292e463', 
  'Incline Push-Up Medium', 
  'Push-up inclinati a presa media', 
  'Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.
Place your hands on the bar, with your hands about shoulder width apart.
Position your feet back from the bar with arms and body straight. This will be your starting position.
Keeping your body straight, lower your chest to the bar by bending the arms.
Return to the starting position by extending the elbows, pressing yourself back up.', 
  'Mettiti di fronte a una sbarra (come quella di una Smith machine) o a una piattaforma elevata di altezza adeguata. Appoggia le mani sulla sbarra, a una larghezza pari a quella delle spalle. Posiziona i piedi indietro rispetto alla sbarra, tenendo braccia e corpo dritti. Questa sarà la tua posizione di partenza. Mantenendo il corpo dritto, abbassa il petto verso la sbarra flettendo le braccia. Torna alla posizione di partenza estendendo i gomiti e spingendo il corpo verso l''alto.', 
  'chest', 
  'abdominals', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Medium/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Medium/1.jpg'], 
  NOW()
),
(
  '5aa188d9-377d-430b-a0ea-085d7aa21c33', 
  'Incline Push-Up Reverse Grip', 
  'Incline Push-Up con presa inversa', 
  'Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.
Place your hands on the bar palms up, with your hands about shoulder width apart.
Position your feet back from the bar with arms and body straight. This will be your starting position.
Keeping your body straight, lower your chest to the bar by bending the arms.
Return to the starting position by extending the elbows, pressing yourself back up.', 
  'Posizionati di fronte a una Smith machine o a una piattaforma sollevata robusta all''altezza adeguata. Appoggia le mani sulla barra con i palmi rivolti verso l''alto, a una larghezza pari a quella delle spalle. Distanzia i piedi dalla barra mantenendo braccia e corpo dritti; questa sarà la posizione di partenza. Mantenendo il corpo dritto, abbassa il petto verso la barra flettendo le braccia. Torna alla posizione iniziale estendendo i gomiti e spingendo verso l''alto.', 
  'chest', 
  'abdominals', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Reverse_Grip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Reverse_Grip/1.jpg'], 
  NOW()
),
(
  '84bb5e6c-b1fe-4726-aaa0-4f9cf9084f93', 
  'Incline Push-Up Wide', 
  'Incline Push-Up a presa larga', 
  'Stand facing a Smith machine bar or sturdy elevated platform at an appropriate height.
Place your hands on the bar, with your hands wider than shoulder width.
Position your feet back from the bar with arms and body straight. Your arms should be perpendicular to the body. This will be your starting position.
Keeping your body straight, lower your chest to the bar by bending the arms.
Return to the starting position by extending the elbows, pressing yourself back up.', 
  'Posizionati di fronte a una Smith machine o a una piattaforma sollevata robusta all''altezza adeguata. Appoggia le mani sulla barra a una larghezza superiore a quella delle spalle. Distanzia i piedi dalla barra mantenendo braccia e corpo dritti, con le braccia perpendicolari al busto; questa sarà la posizione di partenza. Mantenendo il corpo dritto, abbassa il petto verso la barra flettendo le braccia. Torna alla posizione iniziale estendendo i gomiti e spingendo verso l''alto.', 
  'chest', 
  'abdominals', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Wide/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Push-Up_Wide/1.jpg'], 
  NOW()
),
(
  '6de94896-4bb5-46b2-99aa-b35fd3401967', 
  'Intermediate Groin Stretch', 
  'Stretching per l''inguine (intermedio)', 
  'Lie on your back with your legs extended. Loop a belt, rope, or band around one of your feet, and swing that leg as far to the side as you can. This will be your starting position.
Pull gently on the belt to create tension in your groin and hamstring muscles. Hold for 10-20 seconds, and repeat on the other side.', 
  'Sdraiati sulla schiena con le gambe distese. Fai passare una cinghia, una corda o una fascia attorno a un piede e sposta quella gamba lateralmente il più lontano possibile; questa sarà la posizione di partenza. Tira delicatamente la cinghia per creare tensione nell''inguine e nei muscoli femorali. Mantieni per 10-20 secondi e ripeti sull''altro lato.', 
  'hamstrings', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Intermediate_Groin_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Intermediate_Groin_Stretch/1.jpg'], 
  NOW()
),
(
  '4380238f-ab00-42aa-b910-0e14d102c26f', 
  'Intermediate Hip Flexor and Quad Stretch', 
  'Stretching per flessori dell''anca e quadricipiti (intermedio)', 
  'Lie face down on the floor, with a rope, belt, or band looped around one foot.
Flex the knee and extend the hip of the leg to be stretched, using both hands to pull on the belt. Your knee and your hip should come off of the floor, creating tension in the hip flexors and quadriceps. Hold the stretch for 10-20 seconds, and repeat on the other leg.', 
  'Sdraiati a pancia in giù sul pavimento con una corda, una cinghia o una fascia attorno a un piede. Fletti il ginocchio ed estendi l''anca della gamba da allungare, usando entrambe le mani per tirare la cinghia. Il ginocchio e l''anca dovrebbero sollevarsi dal pavimento, creando tensione nei flessori dell''anca e nei quadricipiti. Mantieni lo stretching per 10-20 secondi e ripeti sull''altra gamba.', 
  'quadriceps', 
  NULL, 
  'other', 
  'intermediate', 
  'compound', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Intermediate_Hip_Flexor_and_Quad_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Intermediate_Hip_Flexor_and_Quad_Stretch/1.jpg'], 
  NOW()
),
(
  'f7d0e2e7-1ff0-4425-9247-be7157a55225', 
  'Internal Rotation with Band', 
  'Rotazione interna con elastico', 
  'Choke the band around a post. The band should be at the same height as your elbow. Stand with your right side to the band a couple of feet away.
Grasp the end of the band with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position.
With your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching away from your torso. This will be your starting position.
Execute the movement by rotating your arm in a forehand motion, keeping your elbow in place.
Continue as far as you are able, pause, and then return to the starting position.', 
  'Fissa l''elastico attorno a un palo all''altezza del gomito. Posizionati con il fianco destro rivolto verso l''elastico a circa mezzo metro di distanza. Afferra l''estremità dell''elastico con la mano destra e tieni il gomito premuto saldamente contro il fianco (consigliamo di tenere un cuscinetto o un foam roller tra il gomito e il fianco per mantenerlo in posizione). Con il braccio in posizione, il gomito dovrebbe essere flesso a 90 gradi con la mano rivolta verso l''esterno rispetto al busto; questa è la posizione di partenza. Esegui il movimento ruotando il braccio verso l''interno, mantenendo il gomito fermo. Continua finché possibile, fai una pausa e torna alla posizione iniziale.', 
  'shoulders', 
  NULL, 
  'bands', 
  'beginner', 
  'isolation', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Internal_Rotation_with_Band/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Internal_Rotation_with_Band/1.jpg'], 
  NOW()
),
(
  '28d15e61-d7af-4372-a88d-11713ea3bfed', 
  'Inverted Row', 
  'Inverted Row', 
  'Position a bar in a rack to about waist height. You can also use a smith machine.
Take a wider than shoulder width grip on the bar and position yourself hanging underneath the bar. Your body should be straight with your heels on the ground with your arms fully extended. This will be your starting position.
Begin by flexing the elbow, pulling your chest towards the bar. Retract your shoulder blades as you perform the movement.
Pause at the top of the motion, and return yourself to the start position.
Repeat for the desired number of repetitions.', 
  'Posiziona una barra su un rack all''altezza della vita (puoi usare anche una Smith machine). Afferra la barra con una presa più ampia rispetto alle spalle e posizionati sospeso sotto di essa. Il corpo deve essere dritto, i talloni a terra e le braccia completamente estese; questa sarà la posizione di partenza. Inizia flettendo i gomiti per tirare il petto verso la barra, contraendo le scapole durante il movimento. Fai una pausa nella parte alta e torna alla posizione iniziale. Ripeti per il numero di ripetizioni desiderato.', 
  'middle back', 
  'lats', 
  NULL, 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row/1.jpg'], 
  NOW()
),
(
  '6117a92a-a29b-4e71-a1e0-0a4d5ef8f992', 
  'Inverted Row with Straps', 
  'Inverted Row con cinghie', 
  'Hang a rope or suspension straps from a rack or other stable object. Grasp the ends and position yourself in a supine position hanging from the ropes. Your body should be straight with your heels on the ground with your arms fully extended. This will be your starting position.
Begin by flexing the elbow, pulling your chest to your hands. Retract your shoulder blades as you perform the movement.
Pause at the top of the motion, and return yourself to the start position.
Repeat for the desired number of repetitions.', 
  'Appendi una corda o delle cinghie in sospensione a un rack o a un oggetto stabile. Afferra le estremità e posizionati in posizione supina, sospeso dalle cinghie. Il corpo deve essere dritto, i talloni a terra e le braccia completamente estese; questa sarà la posizione di partenza. Inizia flettendo i gomiti per tirare il petto verso le mani, contraendo le scapole durante il movimento. Fai una pausa nella parte alta e torna alla posizione iniziale. Ripeti per il numero di ripetizioni desiderato.', 
  'middle back', 
  'biceps', 
  'other', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row_with_Straps/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Inverted_Row_with_Straps/1.jpg'], 
  NOW()
),
(
  '6e272d85-582b-4d5d-9859-9180afa50caa', 
  'Iron Cross', 
  'Iron Cross', 
  NULL, 
  'Esercizio non specificato.', 
  'shoulders', 
  'chest', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Iron_Cross/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Iron_Cross/1.jpg'], 
  NOW()
),
(
  '4483c976-371d-4784-9d8e-e5978daf0967', 
  'Iron Crosses (stretch)', 
  'Iron Crosses (stretching)', 
  'Lie face down on the floor, with your arms extended out to your side, palms pressed to the floor. This will be your starting position.
To begin, flex one knee and bring that leg across the back of your body, attempting to touch it to the ground near the opposite hand.
Promptly return the leg to the starting postion, and quickly repeat with the other leg. Continue alternating for 10-20 repetitions.', 
  'Sdraiati a pancia in giù sul pavimento con le braccia distese lateralmente e i palmi premuti contro il suolo; questa sarà la posizione di partenza. Per iniziare, fletti un ginocchio e porta quella gamba dietro il corpo, cercando di toccare il suolo vicino alla mano opposta. Torna rapidamente alla posizione iniziale e ripeti velocemente con l''altra gamba. Continua ad alternare per 10-20 ripetizioni.', 
  'quadriceps', 
  NULL, 
  NULL, 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Iron_Crosses_stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Iron_Crosses_stretch/1.jpg'], 
  NOW()
),
(
  '713b16f4-4fad-462e-973b-e5fbb2ac02e5', 
  'Isometric Chest Squeezes', 
  'Isometric Chest Squeezes', 
  'While either seating or standing, bend your arms at a 90-degree angle and place the palms of your hands together in front of your chest. Tip: Your hands should be open with the palms together and fingers facing forward (perpendicular to your torso).
Push both hands against each other as you contract your chest. Start with slow tension and increase slowly. Keep breathing normally as you execute this contraction.
Hold for the recommended number of seconds.
Now release the tension slowly.
Rest for the recommended amount of time and repeat.', 
  'Da seduto o in piedi, fletti le braccia a 90 gradi e unisci i palmi delle mani davanti al petto. Consiglio: le mani devono essere aperte con i palmi uniti e le dita rivolte in avanti (perpendicolari al busto). Spingi le mani l''una contro l''altra mentre contrai i pettorali. Inizia con una tensione leggera e aumenta gradualmente. Continua a respirare normalmente durante la contrazione. Mantieni per il tempo raccomandato, quindi rilascia lentamente la tensione. Riposa per il tempo indicato e ripeti.', 
  'chest', 
  'shoulders', 
  'body only', 
  'beginner', 
  'compound', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Chest_Squeezes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Chest_Squeezes/1.jpg'], 
  NOW()
),
(
  'fa201225-77de-44d8-aef0-00d234bcd5c6', 
  'Isometric Neck Exercise - Front And Back', 
  'Esercizio isometrico per il collo - Frontale e posteriore', 
  'With your head and neck in a neutral position (normal position with head erect facing forward), place both of your hands on the front side of your head.
Now gently push forward as you contract the neck muscles but resisting any movement of your head. Start with slow tension and increase slowly. Keep breathing normally as you execute this contraction.
Hold for the recommended number of seconds.
Now release the tension slowly.
Rest for the recommended amount of time and repeat with your hands placed on the back side of your head.', 
  'Con la testa e il collo in posizione neutra (posizione normale con la testa eretta rivolta in avanti), posiziona entrambe le mani sulla parte frontale della testa. Spingi delicatamente in avanti contraendo i muscoli del collo, ma opponendo resistenza per evitare qualsiasi movimento della testa. Inizia con una tensione leggera e aumenta gradualmente. Continua a respirare normalmente mentre esegui questa contrazione. Mantieni la posizione per il numero di secondi raccomandato. Rilascia lentamente la tensione. Riposa per il tempo indicato e ripeti l''esercizio posizionando le mani sulla nuca.', 
  'neck', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Neck_Exercise_-_Front_And_Back/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Neck_Exercise_-_Front_And_Back/1.jpg'], 
  NOW()
),
(
  '20dc8123-79d1-4267-a4a3-bae6071a0039', 
  'Isometric Neck Exercise - Sides', 
  'Esercizio isometrico per il collo - Laterale', 
  'With your head and neck in a neutral position (normal position with head erect facing forward), place your left hand on the left side of your head.
Now gently push towards the left as you contract the left neck muscles but resisting any movement of your head. Start with slow tension and increase slowly. Keep breathing normally as you execute this contraction.
Hold for the recommended number of seconds.
Now release the tension slowly.
Rest for the recommended amount of time and repeat with your right hand placed on the right side of your head.', 
  'Con la testa e il collo in posizione neutra, posiziona la mano sinistra sul lato sinistro della testa. Spingi delicatamente verso sinistra contraendo i muscoli del collo del lato sinistro, ma opponendo resistenza per evitare qualsiasi movimento della testa. Inizia con una tensione leggera e aumenta gradualmente. Continua a respirare normalmente durante la contrazione. Mantieni la posizione per il numero di secondi raccomandato. Rilascia lentamente la tensione. Riposa per il tempo indicato e ripeti l''esercizio posizionando la mano destra sul lato destro della testa.', 
  'neck', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Neck_Exercise_-_Sides/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Neck_Exercise_-_Sides/1.jpg'], 
  NOW()
),
(
  '5292c5b9-0a2b-489f-9843-14c845a154ec', 
  'Isometric Wipers', 
  'Isometric Wipers', 
  'Assume a push-up position, supporting your weight on your hands and toes while keeping your body straight. Your hands should be just outside of shoulder width. This will be your starting position.
Begin by shifting your body weight as far to one side as possible, allowing the elbow on that side to flex as you lower your body.
Reverse the motion by extending the flexed arm, pushing yourself up and then dropping to the other side.
Repeat for the desired number of repetitions.', 
  'Assumi la posizione di piegamento (push-up), sostenendo il peso sulle mani e sulle punte dei piedi, mantenendo il corpo dritto. Le mani devono essere posizionate appena oltre la larghezza delle spalle. Questa è la posizione di partenza. Inizia spostando il peso del corpo il più possibile verso un lato, permettendo al gomito di quel lato di flettersi mentre abbassi il busto. Inverti il movimento estendendo il braccio flesso, spingendo il corpo verso l''alto e lasciandoti poi ricadere sull''altro lato. Ripeti per il numero di ripetizioni desiderato.', 
  'chest', 
  'abdominals', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Wipers/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Isometric_Wipers/1.jpg'], 
  NOW()
),
(
  'f1eb9f77-adc9-4f27-a57d-d05009608332', 
  'JM Press', 
  'JM Press', 
  'Start the exercise the same way you would a close grip bench press. You will lie on a flat bench while holding a barbell at arms length (fully extended) with the elbows in. However, instead of having the arms perpendicular to the torso, make sure the bar is set in a direct line above the upper chest. This will be your starting position.
Now beginning from a fully extended position lower the bar down as if performing a lying triceps extension. Inhale as you perform this movement. When you reach the half way point, let the bar roll back about one inch by moving the upper arms towards your legs until they are perpendicular to the torso. Tip: Keep the bend at the elbows constant as you bring the upper arms forward.
As you exhale, press the bar back up by using the triceps to perform a close grip bench press.
Now go back to the starting position and start over.
Repeat for the recommended amount of repetitions.', 
  'Inizia l''esercizio come faresti per una panca piana a presa stretta. Sdraiati su una panca piana tenendo un bilanciere a braccia distese (completamente estese) con i gomiti stretti. Assicurati che la sbarra sia posizionata in linea diretta sopra la parte alta del petto: questa sarà la tua posizione di partenza. Dalla posizione di massima estensione, abbassa il bilanciere come se stessi eseguendo un''estensione per tricipiti da sdraiato. Inspira durante il movimento. Quando raggiungi metà percorso, lascia arretrare leggermente il bilanciere (circa 2-3 cm) muovendo la parte alta delle braccia verso le gambe fino a quando non sono perpendicolari al busto. Suggerimento: mantieni costante l''angolo dei gomiti mentre porti in avanti la parte alta delle braccia. Espirando, spingi il bilanciere verso l''alto usando i tricipiti, eseguendo una sorta di panca a presa stretta. Torna alla posizione iniziale e ricomincia. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  'chest', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/JM_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/JM_Press/1.jpg'], 
  NOW()
),
(
  '54223b4d-7849-44f6-b82f-b5b318175299', 
  'Jackknife Sit-Up', 
  'Jackknife Sit-Up', 
  'Lie flat on the floor (or exercise mat) on your back with your arms extended straight back behind your head and your legs extended also. This will be your starting position.
As you exhale, bend at the waist while simultaneously raising your legs and arms to meet in a jackknife position. Tip: The legs should be extended and lifted at approximately a 35-45 degree angle from the floor and the arms should be extended and parallel to your legs. The upper torso should be off the floor.
While inhaling, lower your arms and legs back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati supino sul pavimento (o su un tappetino) con le braccia distese oltre la testa e le gambe ben tese. Questa è la posizione di partenza. Espirando, fletti il busto in avanti sollevando contemporaneamente gambe e braccia per incontrarsi in posizione di ''jackknife'' (a libro). Suggerimento: le gambe devono rimanere tese e sollevate con un angolo di circa 35-45 gradi rispetto al pavimento, mentre le braccia devono essere parallele alle gambe. La parte superiore del busto deve essere sollevata da terra. Inspirando, abbassa braccia e gambe tornando alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jackknife_Sit-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jackknife_Sit-Up/1.jpg'], 
  NOW()
),
(
  'f8b89821-2173-4ad9-9394-2740f7365b9c', 
  'Janda Sit-Up', 
  'Janda Sit-Up', 
  'Position your body on the floor in the basic sit-up position; knees to a ninety degree angle with feet flat on the floor and arms either crossed over your chest or to the sides. This will be your starting position.
As you strongly tighten your glutes and hamstrings, fill your lungs with air and in a slow (three to six second count) ascent, slowly exhale. Tip: It is important to tighten the glutes and hamstrings as this will cause the hip flexors to be inactivated in a process called reciprocal inhibition, which basically means that opposite muscles to the contracted ones will relax.
As you inhale, slowly go back in a controlled manner to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Posizionati sul pavimento in assetto da sit-up classico: ginocchia flesse a 90 gradi con piedi ben piantati a terra e braccia incrociate sul petto o lungo i fianchi. Questa è la posizione di partenza. Contraendo con forza glutei e bicipiti femorali, inspira e sollevati lentamente (in 3-6 secondi) espirando gradualmente. Suggerimento: è fondamentale contrarre glutei e femorali per disattivare i flessori dell''anca tramite un processo chiamato ''inibizione reciproca'', che permette ai muscoli opposti a quelli contratti di rilassarsi. Inspirando, torna lentamente alla posizione iniziale in modo controllato. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Janda_Sit-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Janda_Sit-Up/1.jpg'], 
  NOW()
),
(
  '43905e2d-332d-43d7-a03c-84a9806328d7', 
  'Jefferson Squats', 
  'Jefferson Squats', 
  'Place a barbell on the floor.
Stand in the middle of the bar length wise.
Bend down by bending at the knees and keeping your back straight and grasp the front of the bar with your right hand. Your palm should be in (neutral grip) facing the left side.
Grasp the rear of the bar with your left hand. The palm of your hand should be in neutral grip alignment (palms facing the right side). Tip: Ensure that your grip is even on the bar. Your torso should be positioned right in the middle of the bar and the distance between your torso and your right hand (which should be at the front) should be the same as the distance between your torso and your left hand (which should be to your back).
Now stand straight up with the weight. Tip: Your feet should be shoulder width apart and your toes slightly pointed out.
Squat down by bending at the knees and keeping your back straight until your upper thighs are parallel with the floor. Tip: Keep your back as vertical as possible with the floor and your head up. Also remember to not let your knees go past your toes. Inhale during this portion of the movement.
Now drive yourself back up to the starting position by pushing with the feet . Tip: Keep the bar hanging at arm''s length and your elbows locked with a slight bend. The arms only serve as hooks. Avoid doing any lifting with them. Do the lifting with your thighs; not your arms.', 
  'Posiziona un bilanciere a terra. Mettiti in piedi al centro della barra, orientato longitudinalmente rispetto ad essa. Abbassati flettendo le ginocchia, mantenendo la schiena dritta, e afferra la parte anteriore della barra con la mano destra (palmo rivolto verso sinistra, presa neutra). Afferra la parte posteriore della barra con la mano sinistra (palmo rivolto verso destra, presa neutra). Suggerimento: assicurati che la presa sulla barra sia equilibrata. Il busto deve essere posizionato esattamente al centro della barra. Sollevati in piedi portando il peso con te. Suggerimento: i piedi devono essere alla larghezza delle spalle con le punte leggermente rivolte verso l''esterno. Esegui uno squat flettendo le ginocchia e mantenendo la schiena dritta fino a quando le cosce sono parallele al pavimento. Suggerimento: mantieni la schiena il più verticale possibile e la testa alta. Evita che le ginocchia superino le punte dei piedi. Inspira durante questa fase. Spingendo con i piedi, torna alla posizione di partenza. Suggerimento: tieni il bilanciere sospeso a braccia distese con i gomiti bloccati e una leggera flessione. Le braccia fungono solo da ganci; non sollevare il peso con le braccia, usa la forza delle cosce.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jefferson_Squats/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jefferson_Squats/1.jpg'], 
  NOW()
),
(
  'bc240ffd-5b12-4631-8c33-4761db96067b', 
  'Jerk Balance', 
  'Jerk Balance', 
  'This drill helps you learn to drive yourself low enough during the jerk and corrects those who move backward during the movement. Begin with the bar racked in the jerk position, with the shoulders forward, torso upright, and the feet split slightly apart.
Initiate the movement as you would a normal jerk, dipping at the knees while keeping your torso vertical, and driving back up forcefully, using momentum and not your arms to elevate the weight.
Keep the rear foot in place, using it to drive your body forward into a full split as you jerk the weight. Recover by standing up with the weight overhead.', 
  'Questo esercizio aiuta ad imparare ad affondare correttamente durante il jerk e corregge lo spostamento all''indietro durante il movimento. Inizia con il bilanciere caricato in posizione di rack per il jerk, spalle in avanti, busto verticale e piedi leggermente distanziati (split). Inizia il movimento come per un normale jerk: fletti le ginocchia mantenendo il busto verticale e spingi verso l''alto con forza, sfruttando lo slancio e non le braccia per elevare il peso. Mantieni il piede posteriore in posizione, usandolo per spingere il corpo in avanti in un affondo completo (split) mentre porti il peso sopra la testa. Recupera la posizione eretta con il peso sopra la testa.', 
  'shoulders', 
  'glutes', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jerk_Balance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jerk_Balance/1.jpg'], 
  NOW()
),
(
  '33801813-ec91-4849-afc4-b6adefe320cd', 
  'Jerk Dip Squat', 
  'Jerk Dip Squat', 
  'This movement strengthens the dip portion of the jerk. Begin with the bar racked in the jerk position, with the shoulders forward to create a shelf and the bar lightly contacting the throat. The feet should be directly under the hips, with the feet turned out as is comfortable.
Keeping the torso vertical, dip by flexing the knees, allowing them to travel forward and without moving the hips to the rear. The dip should not be excessive. Return the weight to the starting position by driving forcefully though the feet.', 
  'Questo movimento rafforza la fase di dip (spinta iniziale) del jerk. Inizia con il bilanciere in posizione di rack, con le spalle protese in avanti per creare un appoggio e il bilanciere che tocca leggermente la gola. I piedi devono essere sotto i fianchi, orientati verso l''esterno in modo confortevole. Mantenendo il busto verticale, esegui un dip flettendo le ginocchia, lasciandole viaggiare in avanti senza spostare i fianchi all''indietro. Il dip non deve essere eccessivo. Torna alla posizione di partenza spingendo con forza attraverso i piedi.', 
  'quadriceps', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jerk_Dip_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jerk_Dip_Squat/1.jpg'], 
  NOW()
),
(
  '02e47b91-4dda-4e2e-9fe3-2b8470f2486c', 
  'Jogging, Treadmill', 
  'Jogging su tapis roulant', 
  'To begin, step onto the treadmill and select the desired option from the menu. Most treadmills have a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Elevation can be adjusted to change the intensity of the workout.
Treadmills offer convenience, cardiovascular benefits, and usually have less impact than jogging outside. A 150 lb person will burn almost 250 calories jogging for 30 minutes, compared to more than 450 calories running. Maintain proper posture as you jog, and only hold onto the handles when necessary, such as when dismounting or checking your heart rate.', 
  'Per iniziare, sali sul tapis roulant e seleziona l''opzione desiderata dal menu. La maggior parte dei tapis roulant ha un''impostazione manuale o programmi predefiniti. Solitamente, inserendo età e peso si può stimare il consumo calorico. L''inclinazione può essere regolata per variare l''intensità. I tapis roulant offrono comodità, benefici cardiovascolari e un impatto solitamente inferiore rispetto alla corsa all''aperto. Una persona di circa 68 kg brucia quasi 250 calorie correndo per 30 minuti, rispetto alle oltre 450 calorie della corsa veloce. Mantieni una postura corretta durante l''esercizio e tieni le maniglie solo quando necessario, ad esempio quando scendi o controlli la frequenza cardiaca.', 
  'quadriceps', 
  'glutes', 
  'machine', 
  'beginner', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jogging_Treadmill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jogging_Treadmill/1.jpg'], 
  NOW()
),
(
  'a7dd2051-e503-4223-b781-6bafe8815c23', 
  'Keg Load', 
  'Keg Load', 
  'To load kegs, place the desired number a distance from the loading platform, typically 30-50 feet.
Begin by grabbing the close handle of the first keg, tilting it onto its side to grab the opposite edge of the bottom of the keg. Lift the keg up to your chest.
The higher you can place the keg, the faster you should be able to move to the platform. Shouldering is usually not allowed. Be sure to keep a firm hold on the keg. Move as quickly as possible to the platform, and load it, extending through your hips, knees, and ankles to get it as high as possible.
Return to the starting position to retrieve the next keg, and repeat until the event is completed.', 
  'Per eseguire il caricamento dei fusti (keg), posizionali a una distanza prestabilita dalla piattaforma di carico, solitamente tra i 9 e i 15 metri. Inizia afferrando la maniglia più vicina del primo fusto, inclinalo di lato per afferrare il bordo opposto della base e sollevalo fino al petto. Più in alto riuscirai a posizionare il fusto, più velocemente potrai muoverti verso la piattaforma. Lo ''shouldering'' (appoggio sulla spalla) solitamente non è consentito. Mantieni una presa salda sul fusto. Muoviti il più rapidamente possibile verso la piattaforma e caricalo, estendendo anche, ginocchia e caviglie per posizionarlo il più in alto possibile. Torna alla posizione di partenza per recuperare il fusto successivo e ripeti fino al completamento dell''esercizio.', 
  'lower back', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Keg_Load/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Keg_Load/1.jpg'], 
  NOW()
),
(
  '334b0d5b-c71d-4404-93a0-5ff75f5dea6a', 
  'Kettlebell Arnold Press', 
  'Kettlebell Arnold Press', 
  'Clean a kettlebell to your shoulder. Clean the kettlebell to your shoulder by extending through the legs and hips as you raise the kettlebell towards your shoulder. The palm should be facing inward.
Looking straight ahead, press the kettlebell out and overhead, rotating your wrist so that your palm faces forward at the top of the motion.
Return the kettlebell to the starting position, with the palm facing in.', 
  'Esegui un Clean del kettlebell fino alla spalla, estendendo gambe e anche mentre lo sollevi verso la spalla stessa. Il palmo deve essere rivolto verso l''interno. Guardando dritto davanti a te, spingi il kettlebell verso l''alto sopra la testa, ruotando il polso in modo che il palmo sia rivolto in avanti al culmine del movimento. Riporta il kettlebell nella posizione di partenza con il palmo rivolto verso l''interno.', 
  'shoulders', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Arnold_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Arnold_Press/1.jpg'], 
  NOW()
),
(
  'f41a7389-3f78-44ac-bd8c-6393a05a57f6', 
  'Kettlebell Dead Clean', 
  'Kettlebell Dead Clean', 
  'Place kettlebell between your feet. To get in the starting position, push your butt back and look straight ahead.
Clean the kettlebell to your shoulder. Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so.
Lower the kettlebell, keeping the hamstrings loaded by keeping your back straight and your butt out.', 
  'Posiziona il kettlebell tra i piedi. Per assumere la posizione di partenza, spingi il bacino indietro e guarda dritto davanti a te. Esegui un Clean del kettlebell fino alla spalla, estendendo gambe e anche durante la risalita. Ruota il polso durante il movimento. Abbassa il kettlebell mantenendo gli ischiocrurali in tensione, la schiena dritta e il bacino spinto all''indietro.', 
  'hamstrings', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Dead_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Dead_Clean/1.jpg'], 
  NOW()
),
(
  '42ad06a6-9912-40f5-9bad-4fcab73b0c56', 
  'Kettlebell Figure 8', 
  'Kettlebell Figure 8', 
  'Place one kettlebell between your legs and take a wider than shoulder width stance. Bend over by pushing your butt out and keeping your back flat.
Pick up a kettlebell and pass it to your other hand between your legs. The receiving hand should reach from behind the legs. Go back and forth for several repetitions.', 
  'Posiziona un kettlebell tra le gambe e assumi una posizione dei piedi più larga rispetto alle spalle. Piegati in avanti spingendo il bacino all''indietro e mantenendo la schiena piatta. Afferra il kettlebell e passalo all''altra mano facendolo passare tra le gambe. La mano che riceve deve passare da dietro le gambe. Procedi alternando le mani per diverse ripetizioni.', 
  'abdominals', 
  'hamstrings', 
  'kettlebells', 
  'intermediate', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Figure_8/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Figure_8/1.jpg'], 
  NOW()
),
(
  'd6315253-105d-477e-9274-8c6b69e8cedf', 
  'Kettlebell Hang Clean', 
  'Kettlebell Hang Clean', 
  'Place kettlebell between your feet. To get in the starting position, push your butt back and look straight ahead.
Clean kettlebell to your shoulder. Clean the kettlebell to your shoulders by extending through the legs and hips as you raise the kettlebell towards your shoulder. The wrist should rotate as you do so.
Lower kettlebell to a hanging position between your legs while keeping the hamstrings loaded. Keep your head up at all times.', 
  'Posiziona il kettlebell tra i piedi. Per assumere la posizione di partenza, spingi il bacino indietro e guarda dritto davanti a te. Esegui un Clean del kettlebell fino alla spalla, estendendo gambe e anche durante la risalita. Ruota il polso durante il movimento. Abbassa il kettlebell in una posizione sospesa tra le gambe mantenendo gli ischiocrurali in tensione. Mantieni sempre la testa alta.', 
  'hamstrings', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Hang_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Hang_Clean/1.jpg'], 
  NOW()
),
(
  '1f665757-75fc-4968-832a-99d7fdecae06', 
  'Kettlebell One-Legged Deadlift', 
  'Kettlebell One-Legged Deadlift', 
  'Hold a kettlebell by the handle in one hand. Stand on one leg, on the same side that you hold the kettlebell.
Keeping that knee slightly bent, perform a stiff legged deadlift by bending at the hip, extending your free leg behind you for balance.
Continue lowering the kettlebell until you are parallel to the ground, and then return to the upright position.', 
  'Afferra il manico del kettlebell con una mano. Stai in equilibrio su una gamba sola, quella dello stesso lato della mano che tiene il kettlebell. Mantenendo il ginocchio leggermente flesso, esegui uno stacco a gamba tesa flettendo l''anca ed estendendo la gamba libera dietro di te per mantenere l''equilibrio. Continua ad abbassare il kettlebell finché il busto non è parallelo al terreno, quindi torna alla posizione eretta.', 
  'hamstrings', 
  'glutes', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_One-Legged_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_One-Legged_Deadlift/1.jpg'], 
  NOW()
),
(
  '88e032c7-32ee-40a2-8f14-f52ef0440db5', 
  'Kettlebell Pass Between The Legs', 
  'Kettlebell Pass Between The Legs', 
  'Place one kettlebell between your legs and take a comfortable stance. Bend over by pushing your butt out and keeping your back flat.
Pick up a kettlebell and pass it to your other hand between your legs, in the fashion of a "W". Go back and forth for several repetitions.', 
  'Posiziona un kettlebell tra le gambe e assumi una posizione confortevole. Piegati in avanti spingendo il bacino all''indietro e mantenendo la schiena piatta. Afferra il kettlebell e passalo all''altra mano tra le gambe seguendo un movimento a ''W''. Procedi alternando le mani per diverse ripetizioni.', 
  'abdominals', 
  'glutes', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pass_Between_The_Legs/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pass_Between_The_Legs/1.jpg'], 
  NOW()
),
(
  'db78d155-b288-46e5-bd7e-faedc03f9905', 
  'Kettlebell Pirate Ships', 
  'Kettlebell Pirate Ships', 
  'With a wide stance, hold a kettlebell with both hands. Allow it to hang at waist level with your arms extended. This will be your starting position.
Initiate the movement by turning to one side, swinging the kettlebell to head height. Briefly pause at the top of the motion.
Allow the bell to drop as you rotate to the opposite side, again raising the kettlebell to head height.
Repeat for the desired amount of repetitions.', 
  'Con una posizione dei piedi larga, tieni il kettlebell con entrambe le mani. Lascialo pendere all''altezza della vita con le braccia tese: questa è la posizione di partenza. Inizia il movimento ruotando verso un lato e facendo oscillare il kettlebell fino all''altezza della testa. Fai una breve pausa al culmine del movimento. Lascia scendere il kettlebell mentre ruoti verso il lato opposto, sollevandolo nuovamente fino all''altezza della testa. Ripeti per il numero di ripetizioni desiderato.', 
  'shoulders', 
  'abdominals', 
  'kettlebells', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pirate_Ships/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pirate_Ships/1.jpg'], 
  NOW()
),
(
  '8b1a1201-ec4f-4f8a-943a-2bf4ccb85129', 
  'Kettlebell Pistol Squat', 
  'Kettlebell Pistol Squat', 
  'Pick up a kettlebell with two hands and hold it by the horns. Hold one leg off of the floor and squat down on the other.
Squat down by flexing the knee and sitting back with the hips, holding the kettlebell up in front of you.
Hold the bottom position for a second and then reverse the motion, driving through the heel and keeping your head and chest up.
Lower yourself again and repeat.', 
  'Afferra il kettlebell con due mani tenendolo per le corna. Solleva una gamba dal pavimento ed esegui uno squat sull''altra. Scendi in accosciata flettendo il ginocchio e portando il bacino indietro, mantenendo il kettlebell sollevato davanti a te. Mantieni la posizione di massima accosciata per un secondo, quindi inverti il movimento spingendo attraverso il tallone e mantenendo testa e petto alti. Risali e ripeti.', 
  'quadriceps', 
  'calves', 
  'kettlebells', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pistol_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Pistol_Squat/1.jpg'], 
  NOW()
),
(
  '31807165-8ae1-4e14-9aa8-5298f26be77c', 
  'Kettlebell Seated Press', 
  'Kettlebell Seated Press', 
  'Sit on the floor and spread your legs out comfortably.
Clean one kettlebell to your shoulder.
Press the kettlebell up and out until it is locked out overhead. Return to the starting position.', 
  'Siediti sul pavimento con le gambe divaricate in modo confortevole. Esegui un Clean di un kettlebell fino alla spalla. Spingi il kettlebell verso l''alto finché il braccio non è completamente disteso sopra la testa. Torna alla posizione di partenza.', 
  'shoulders', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Seated_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Seated_Press/1.jpg'], 
  NOW()
),
(
  '83c00abd-5784-4803-a2d4-4f5556b91eef', 
  'Kettlebell Seesaw Press', 
  'Kettlebell Seesaw Press', 
  'Clean two kettlebells two your shoulders.
Press one kettlebell.
Lower the kettlebell and immediately press the other kettlebell. Make sure to do the same amount of reps on both sides.', 
  'Porta due kettlebell alle spalle con un clean. Esegui una press con un kettlebell. Abbassa il kettlebell e spingi immediatamente l''altro. Assicurati di eseguire lo stesso numero di ripetizioni su entrambi i lati.', 
  'shoulders', 
  'triceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Seesaw_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Seesaw_Press/1.jpg'], 
  NOW()
),
(
  '0e2191c1-35a0-4d58-8eb8-50de4efad53f', 
  'Kettlebell Sumo High Pull', 
  'Kettlebell Sumo High Pull', 
  'Place a kettlebell on the ground between your feet. Position your feet in a wide stance, and grasp the kettlebell with two hands. Set your hips back as far as possible, with your knees bent. Keep your chest and head up. This will be your starting position.
Begin by extending the hips and knees, simultaneously pulling the kettlebell to your shoulders, raising your elbows as you do so. Reverse the motion to return to the starting position.', 
  'Posiziona un kettlebell a terra tra i piedi. Assumi una posizione a gambe larghe e afferra il kettlebell con due mani. Spingi i fianchi il più indietro possibile, mantenendo le ginocchia flesse. Tieni petto e testa alti. Questa è la posizione di partenza. Inizia estendendo fianchi e ginocchia, tirando simultaneamente il kettlebell verso le spalle e sollevando i gomiti durante il movimento. Inverti il movimento per tornare alla posizione iniziale.', 
  'traps', 
  'adductors', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Sumo_High_Pull/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Sumo_High_Pull/1.jpg'], 
  NOW()
),
(
  '8fe23484-8b1c-4701-8e08-fa3ffaa31219', 
  'Kettlebell Thruster', 
  'Kettlebell Thruster', 
  'Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so. This will be your starting position.
Begin to squat by flexing your hips and knees, lowering your hips between your legs. Maintain an upright, straight back as you descend as low as you can.
At the bottom, reverse direction and squat by extending your knees and hips, driving through your heels. As you do so, press both kettlebells overhead by extending your arms straight up, using the momentum from the squat to help drive the weights upward.
As you begin the next repetition, return the weights to the shoulders.', 
  'Porta due kettlebell alle spalle con un clean, estendendo gambe e fianchi e ruotando i polsi mentre tiri i pesi verso l''alto. Questa è la posizione di partenza. Inizia lo squat flettendo fianchi e ginocchia e scendendo con il bacino tra le gambe. Mantieni la schiena dritta e il busto eretto durante la discesa. Dalla posizione bassa, inverti il movimento estendendo ginocchia e fianchi, spingendo attraverso i talloni. Mentre risali, spingi entrambi i kettlebell sopra la testa estendendo le braccia, sfruttando lo slancio dello squat. Prima di iniziare la ripetizione successiva, riporta i pesi alle spalle.', 
  'shoulders', 
  'quadriceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Thruster/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Thruster/1.jpg'], 
  NOW()
),
(
  '7a333041-0caa-4c8f-9294-9df782086a77', 
  'Kettlebell Turkish Get-Up (Lunge style)', 
  'Kettlebell Turkish Get-Up (stile affondo)', 
  'Lie on your back on the floor and press a kettlebell to the top position by extending the elbow. Bend the knee on the same side as the kettlebell.
Keeping the kettlebell locked out at all times, pivot to the opposite side and use your non- working arm to assist you in driving forward to the lunge position. Using your free hand, push yourself to a seated position, then progressing to one knee.
While looking up at the kettlebell, slowly stand up. Reverse the motion back to the starting position and repeat.', 
  'Sdraiati sulla schiena e porta un kettlebell sopra la testa distendendo il braccio. Piega il ginocchio sullo stesso lato del kettlebell. Mantenendo il braccio teso, ruota sul lato opposto e usa il braccio libero per aiutarti a spingerti verso la posizione di affondo. Usando la mano libera, spingiti fino a una posizione seduta, quindi passa a una posizione in ginocchio. Guardando sempre il kettlebell, alzati lentamente in piedi. Inverti il movimento per tornare alla posizione iniziale e ripeti.', 
  'shoulders', 
  'abdominals', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Turkish_Get-Up_Lunge_style/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Turkish_Get-Up_Lunge_style/1.jpg'], 
  NOW()
),
(
  '71b666b2-55ff-4b5b-9a4e-25148a48245a', 
  'Kettlebell Turkish Get-Up (Squat style)', 
  'Kettlebell Turkish Get-Up (stile squat)', 
  'Lie on your back on the floor and press a kettlebell to the top position by extending the elbow. Bend the knee on the same side as the kettlebell.
Keeping the kettlebell locked out at all times, pivot to the opposite side and use your non- working arm to assist you in driving forward to the lunge position.
Using your free hand, push yourself to a seated position, then progressing to your feet. While looking up at the kettlebell, slowly stand up. Reverse the motion back to the starting position and repeat.', 
  'Sdraiati sulla schiena e porta un kettlebell sopra la testa distendendo il braccio. Piega il ginocchio sullo stesso lato del kettlebell. Mantenendo il braccio teso, ruota sul lato opposto e usa il braccio libero per aiutarti a spingerti verso la posizione di affondo. Usando la mano libera, spingiti fino a una posizione seduta, quindi passa a una posizione in piedi. Guardando sempre il kettlebell, alzati lentamente in piedi. Inverti il movimento per tornare alla posizione iniziale e ripeti.', 
  'shoulders', 
  'abdominals', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Turkish_Get-Up_Squat_style/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Turkish_Get-Up_Squat_style/1.jpg'], 
  NOW()
),
(
  'cb1e927e-595d-42d1-b25c-1afd6d481992', 
  'Kettlebell Windmill', 
  'Kettlebell Windmill', 
  'Place a kettlebell in front of your lead foot and clean and press it overhead with your opposite arm. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulders. Rotate your wrist as you do so, so that the palm faces forward. Press it overhead by extending the elbow.
Keeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Turn your feet out at a forty-five degree angle from the arm with the locked out kettlebell. Bending at the hip to one side, sticking your butt out, slowly lean until you can touch the floor with your free hand. Keep your eyes on the kettlebell that you hold over your head at all times.
Pause for a second after reaching the ground and reverse the motion back to the starting position.', 
  'Posiziona un kettlebell davanti al piede avanzato, sollevalo con un clean e portalo sopra la testa con il braccio opposto, ruotando il polso in modo che il palmo sia rivolto in avanti. Mantenendo il braccio teso, spingi il bacino verso il lato del braccio che sostiene il carico. Ruota i piedi di quarantacinque gradi rispetto al braccio con il kettlebell. Piegandoti lateralmente all''altezza dei fianchi e spingendo il bacino in fuori, inclinati lentamente finché non riesci a toccare il pavimento con la mano libera. Tieni sempre lo sguardo rivolto al kettlebell. Fermati un secondo dopo aver toccato terra e inverti il movimento per tornare alla posizione iniziale.', 
  'abdominals', 
  'glutes', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Windmill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Windmill/1.jpg'], 
  NOW()
),
(
  '30f36d6f-2744-42fc-b7fc-b83dd1960016', 
  'Kipping Muscle Up', 
  'Kipping Muscle Up', 
  'Grip the rings using a false grip, with the base of your palms on top of the rings.
Begin with a movement swinging your legs backward slightly.
Counter that movement by swinging your legs forward and up, jerking your chin and chest back, pulling yourself up with both arms as you do so. As you reach the top position of the pull-up, pull the rings to your armpits as you roll your shoulders forward, allowing your elbows to move straight back behind you. This puts you into the proper position to continue into the dip portion of the movement.
Maintaining control and stability, extend through the elbow to complete the motion.
Use care when lowering yourself to the ground.', 
  'Afferra gli anelli con una ''false grip'', posizionando la base dei palmi sopra gli anelli. Inizia con un leggero slancio delle gambe all''indietro. Contrasta il movimento oscillando le gambe in avanti e verso l''alto, tirando mento e petto all''indietro e trazionando con entrambe le braccia. Quando raggiungi la posizione alta della trazione, porta gli anelli verso le ascelle ruotando le spalle in avanti e lasciando che i gomiti vadano direttamente dietro di te. Questo ti mette nella posizione corretta per proseguire con la fase di dip. Mantenendo controllo e stabilità, distendi le braccia per completare il movimento. Scendi a terra con attenzione.', 
  'lats', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kipping_Muscle_Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kipping_Muscle_Up/1.jpg'], 
  NOW()
),
(
  'e3bfebd3-ab88-4368-8a5a-2a6899a0641f', 
  'Knee Across The Body', 
  'Knee Across The Body', 
  'Lie down on the floor with your right leg straight. Bend your left leg and lower it across your body, holding the knee down toward the floor with your right hand. (The knee doesn''t need to touch the floor if you''re tight.)
Place your left arm comfortably beside you and turn your head to the left. Imagine you have a weight tied to your tailbone. let your tailbone fall back toward the floor as your chest reaches in the opposite direction to stretch your lower back. Switch sides.', 
  'Sdraiati a terra con la gamba destra distesa. Piega la gamba sinistra e abbassala lateralmente oltre il corpo, tenendo il ginocchio verso il pavimento con la mano destra (non deve necessariamente toccare terra se avverti rigidità). Posiziona il braccio sinistro comodamente accanto a te e gira la testa verso sinistra. Immagina di avere un peso legato al coccige: lascia che il bacino ruoti verso il pavimento mentre il petto si distende nella direzione opposta per allungare la zona lombare. Cambia lato.', 
  'glutes', 
  'abductors', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Across_The_Body/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Across_The_Body/1.jpg'], 
  NOW()
),
(
  'f02e3c8d-d55f-4457-97e5-0609ac16dde4', 
  'Knee Circles', 
  'Circonduzioni delle ginocchia', 
  'Stand with your legs together and hands by your waist.
Now move your knees in a circular motion as you breathe normally.
Repeat for the recommended amount of repetitions.', 
  'In piedi, con le gambe unite e le mani sui fianchi, esegui dei movimenti circolari con le ginocchia respirando regolarmente. Ripeti per il numero di volte consigliato.', 
  'calves', 
  'hamstrings', 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Circles/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Circles/1.jpg'], 
  NOW()
),
(
  'd3c8158b-1074-480a-9b83-246954aba5d0', 
  'Knee/Hip Raise On Parallel Bars', 
  'Sollevamento ginocchia/bacino alle parallele', 
  'Position your body on the vertical leg raise bench so that your forearms are resting on the pads next to the torso and holding on to the handles. Your arms will be bent at a 90 degree angle.
The torso should be straight with the lower back pressed against the pad of the machine and the legs extended pointing towards the floor. This will be your starting position.
Now as you breathe out, lift your legs up as you keep them extended. Continue this movement until your legs are roughly parallel to the floor and then hold the contraction for a second. Tip: Do not use any momentum or swinging as you perform this exercise.
Slowly go back to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'Posizionati sull''attrezzo per il leg raise verticale appoggiando gli avambracci sui cuscinetti e afferrando le maniglie. Le braccia devono essere flesse a 90 gradi. Il busto deve essere dritto, la zona lombare premuta contro lo schienale e le gambe tese verso il basso. Questa è la posizione di partenza. Espirando, solleva le gambe mantenendole tese finché non sono approssimativamente parallele al pavimento, quindi mantieni la contrazione per un secondo. Consiglio: non usare slancio o oscillazioni durante l''esercizio. Inspira e torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'other', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Hip_Raise_On_Parallel_Bars/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Hip_Raise_On_Parallel_Bars/1.jpg'], 
  NOW()
),
(
  'fd54df04-392a-4b20-8312-5aae7ff85ca9', 
  'Knee Tuck Jump', 
  'Knee Tuck Jump', 
  'Begin in a comfortable standing position with your knees slightly bent. Hold your hands in front of you, palms down with your fingertips together at chest height. This will be your starting position.
Rapidly dip down into a quarter squat and immediately explode upward. Drive the knees towards the chest, attempting to touch them to the palms of the hands.
Jump as high as you can, raising your knees up, and then ensure a good land be re-extending your legs, absorbing impact through be allowing the knees to rebend.', 
  'Inizia in una posizione eretta confortevole con le ginocchia leggermente flesse. Tieni le mani davanti a te, palmi rivolti verso il basso e punte delle dita unite all''altezza del petto. Questa sarà la tua posizione di partenza. Esegui rapidamente un mezzo squat e, immediatamente, esplodi verso l''alto. Porta le ginocchia verso il petto, cercando di toccare i palmi delle mani. Salta il più in alto possibile sollevando le ginocchia, quindi assicurati di atterrare correttamente estendendo nuovamente le gambe e assorbendo l''impatto flettendo le ginocchia.', 
  'hamstrings', 
  'abductors', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Tuck_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Knee_Tuck_Jump/1.jpg'], 
  NOW()
),
(
  '2420115a-585a-4029-8a63-640a2a6c61bd', 
  'Kneeling Arm Drill', 
  'Kneeling Arm Drill', 
  'This drill helps increase arm efficiency during the run. Begin kneeling, left foot in front, right knee down. Apply pressure through the front heel to keep your glutes and hamstrings activated.
Begin by blocking the arms in long, pendulum like swings. Close the arm angle, blocking with the arms as you would when jogging, progressing to a run and finally a sprint.
As soon as your hands pass the hip, accelerate them forward during the sprinting motion to move them as quickly as possible.
Switch knees and repeat.', 
  'Questo esercizio aiuta ad aumentare l''efficienza delle braccia durante la corsa. Inizia in ginocchio, con il piede sinistro in avanti e il ginocchio destro a terra. Esercita pressione attraverso il tallone anteriore per mantenere glutei e muscoli posteriori della coscia attivati. Inizia facendo oscillare le braccia con movimenti lunghi, simili a un pendolo. Chiudi l''angolo del braccio, muovendoti come faresti durante il jogging, passando poi a una corsa e infine a uno sprint. Non appena le mani superano l''anca, accelerale in avanti durante il movimento di sprint per muoverle il più velocemente possibile. Cambia ginocchio e ripeti.', 
  'shoulders', 
  'abdominals', 
  NULL, 
  'beginner', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Arm_Drill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Arm_Drill/1.jpg'], 
  NOW()
),
(
  '53b05906-c10d-4370-8cce-d7d3c8f03345', 
  'Kneeling Cable Crunch With Alternating Oblique Twists', 
  'Kneeling Cable Crunch With Alternating Oblique Twists', 
  'Connect a rope attachment to a high pulley cable and position a mat on the floor in front of it.
Grab the rope with both hands and kneel approximately two feet back from the tower.
Position the rope behind your head with your hands by your ears.
Keep your hands in the same place, contract your abs and pull downward on the rope in a crunching movement until your elbows reach your knees.
Pause briefly at the bottom and rise up in a slow and controlled manner until you reach the starting position.
Repeat the same downward movement until you''re halfway down, at which time you''ll begin rotating one of your elbows to the opposite knee.
Again, pause briefly at the bottom and rise up in a slow and controlled manner until you reach the starting position.
Repeat the same movement as before, but alternate the other elbow to the opposite knee.
Continue this series of movements to failure.', 
  'Collega un accessorio a corda a una carrucola alta e posiziona un tappetino sul pavimento davanti ad essa. Afferra la corda con entrambe le mani e inginocchiati a circa 60 cm dalla torre. Posiziona la corda dietro la testa con le mani vicino alle orecchie. Mantenendo le mani ferme, contrai gli addominali e tira la corda verso il basso con un movimento di crunch fino a quando i gomiti raggiungono le ginocchia. Fai una breve pausa in basso e risali in modo lento e controllato fino a tornare alla posizione di partenza. Ripeti lo stesso movimento di discesa fino a metà strada, momento in cui inizierai a ruotare uno dei gomiti verso il ginocchio opposto. Fai di nuovo una breve pausa in basso e risali in modo controllato. Ripeti il movimento alternando l''altro gomito verso il ginocchio opposto. Continua questa serie di movimenti fino al cedimento muscolare.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Cable_Crunch_With_Alternating_Oblique_Twists/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Cable_Crunch_With_Alternating_Oblique_Twists/1.jpg'], 
  NOW()
),
(
  '9ee9a418-961a-4e24-a781-d3d6e5933aff', 
  'Kneeling Cable Triceps Extension', 
  'Kneeling Cable Triceps Extension', 
  'Place a bench sideways in front of a high pulley machine.
Hold a straight bar attachment above your head with your hands about 6 inches apart with your palms facing down.
Face away from the machine and kneel.
Place your head and the back of your upper arms on the bench. Your elbows should be bent with the forearms pointing towards the high pulley. This will be your starting position.
While keeping your upper arms close to your head at all times with the elbows in, press the bar out in a semicircular motion until the elbows are locked and your arms are parallel to the floor. Contract the triceps hard and keep this position for a second. Exhale as you perform this movement.
Slowly return to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'Posiziona una panca lateralmente davanti a una macchina a carrucola alta. Impugna una barra dritta sopra la testa con le mani a circa 15 cm di distanza e i palmi rivolti verso il basso. Dai le spalle alla macchina e inginocchiati. Appoggia la testa e la parte posteriore delle braccia sulla panca. I gomiti devono essere piegati con gli avambracci rivolti verso la carrucola. Questa è la posizione di partenza. Mantenendo sempre la parte superiore delle braccia vicino alla testa e i gomiti stretti, spingi la barra con un movimento semicircolare finché i gomiti non sono bloccati e le braccia risultano parallele al pavimento. Contrai intensamente i tricipiti e mantieni la posizione per un secondo espirando durante il movimento. Ritorna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'cable', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Cable_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Cable_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '9c40209e-df1e-495b-8b75-529b62d2f929', 
  'Kneeling Forearm Stretch', 
  'Kneeling Forearm Stretch', 
  'Start by kneeling on a mat with your palms flat and your fingers pointing back toward your knees.
Slowly lean back keeping your palms flat on the floor until you feel a stretch in your wrists and forearms. Hold for 20-30 seconds.', 
  'Inizia inginocchiandoti su un tappetino con i palmi delle mani piatti a terra e le dita rivolte verso le ginocchia. Lentamente, inclinati all''indietro mantenendo i palmi a contatto con il pavimento finché non senti un allungamento nei polsi e negli avambracci. Mantieni la posizione per 20-30 secondi.', 
  'forearms', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Forearm_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Forearm_Stretch/1.jpg'], 
  NOW()
),
(
  '6b3f843b-6ed4-4d77-b129-9cb9c6060ea5', 
  'Kneeling High Pulley Row', 
  'Kneeling High Pulley Row', 
  'Select the appropriate weight using a pulley that is above your head. Attach a rope to the cable and kneel a couple of feet away, holding the rope out in front of you with both arms extended. This will be your starting position.
Initiate the movement by flexing the elbows and fully retracting your shoulders, pulling the rope toward your upper chest with your elbows out.
After pausing briefly, slowly return to the starting position.', 
  'Seleziona il peso appropriato usando una carrucola posizionata sopra la testa. Collega una corda al cavo e inginocchiati a breve distanza, tenendo la corda davanti a te con entrambe le braccia tese. Questa è la tua posizione di partenza. Inizia il movimento flettendo i gomiti e retrattando completamente le spalle, tirando la corda verso la parte superiore del petto con i gomiti larghi. Dopo una breve pausa, ritorna lentamente alla posizione di partenza.', 
  'lats', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_High_Pulley_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_High_Pulley_Row/1.jpg'], 
  NOW()
),
(
  '977051df-6a88-4494-bc99-624f89ba773a', 
  'Kneeling Hip Flexor', 
  'Kneeling Hip Flexor', 
  'Kneel on a mat and bring your right knee up so the bottom of your foot is on the floor and extend your left leg out behind you so the top of your foot is on the floor.
Shift your weight forward until you feel a stretch in your hip. Hold for 15 seconds, then repeat for your other side.', 
  'Inginocchiati su un tappetino, porta il ginocchio destro in avanti in modo che la pianta del piede sia a terra ed estendi la gamba sinistra all''indietro con il dorso del piede a terra. Sposta il peso in avanti finché non senti un allungamento all''altezza dell''anca. Mantieni per 15 secondi, quindi ripeti sull''altro lato.', 
  'quadriceps', 
  'quadriceps', 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Hip_Flexor/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Hip_Flexor/1.jpg'], 
  NOW()
),
(
  '398edac9-eadf-4e08-b651-0fb2e01cb4e0', 
  'Kneeling Jump Squat', 
  'Kneeling Jump Squat', 
  'Begin kneeling on the floor with a barbell racked across the back of your shoulders, or you can use your body weight for this exercise. This can be done inside of a power rack to make unracking easier.
Sit back with your hips until your glutes touch your feet, keeping your head and chest up.
Explode up with your hips, generating enough power to land with your feet flat on the floor.
Continue with the squat by driving through your heels and extending the knees to come to a standing position.', 
  'Inizia in ginocchio sul pavimento con un bilanciere caricato sulle spalle, oppure usa solo il peso del corpo. Può essere eseguito all''interno di un power rack per facilitare lo stacco del bilanciere. Siediti sui talloni finché i glutei non toccano i piedi, mantenendo testa e petto alti. Esplodi verso l''alto con le anche, generando abbastanza potenza per atterrare con i piedi piatti sul pavimento. Prosegui con lo squat spingendo attraverso i talloni ed estendendo le ginocchia fino a raggiungere una posizione eretta.', 
  'glutes', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Jump_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Jump_Squat/1.jpg'], 
  NOW()
),
(
  'b5da9e11-a7f6-4e2a-acb0-52f8e3e00f73', 
  'Kneeling Single-Arm High Pulley Row', 
  'Kneeling Single-Arm_High_Pulley_Row', 
  'Attach a single handle to a high pulley and make your weight selection.
Kneel in front of the cable tower, taking the cable with one hand with your arm extended. This will be your starting position.
Starting with your palm facing forward, pull the weight down to your torso by flexing the elbow and retract the shoulder blade. As you do so, rotate the wrist so that at the completion of the movement, your palm is now facing you.
After a brief pause, return to the starting position.', 
  'Collega una maniglia singola a una carrucola alta e seleziona il peso. Inginocchiati davanti alla torre, afferrando il cavo con una mano e mantenendo il braccio teso. Questa è la posizione di partenza. Partendo con il palmo rivolto in avanti, tira il peso verso il busto flettendo il gomito e retrattando la scapola. Mentre lo fai, ruota il polso in modo che, al completamento del movimento, il palmo sia rivolto verso di te. Dopo una breve pausa, ritorna alla posizione di partenza.', 
  'lats', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Single-Arm_High_Pulley_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Single-Arm_High_Pulley_Row/1.jpg'], 
  NOW()
),
(
  '5cef9436-1051-4f62-9b84-ed5d6f93dccc', 
  'Kneeling Squat', 
  'Kneeling Squat', 
  'Set the bar to the proper height in a power rack. Kneel behind the bar; it may be beneficial to put a mat down to pad your knees. Slide under the bar, racking it across the back of your shoulders. Your shoulder blades should be retracted and the bar tight across your back. Unrack the weight.
With your head looking forward, sit back with your butt until you touch your calves.
Reverse the motion, returning the torso to an upright position.', 
  'Regola il bilanciere all''altezza corretta in un power rack. Inginocchiati dietro il bilanciere; può essere utile usare un tappetino per proteggere le ginocchia. Posizionati sotto il bilanciere, appoggiandolo sulla parte alta della schiena. Le scapole devono essere retratte e il bilanciere ben saldo sulla schiena. Stacca il carico. Con lo sguardo rivolto in avanti, siediti all''indietro con il bacino fino a toccare i polpacci. Inverti il movimento, tornando con il busto in posizione eretta.', 
  'glutes', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Squat/1.jpg'], 
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