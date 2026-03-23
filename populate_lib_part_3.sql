-- Full population of exercise_library with Italian translations (Batch 3)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  '06772076-8d53-495d-a8f3-823b417f6126', 
  'Decline EZ Bar Triceps Extension', 
  'Estensioni tricipiti con EZ bar su panca declinata', 
  'Secure your legs at the end of the decline bench and slowly lay down on the bench.
Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack.
As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement.
Lift the bar back to the starting position by contracting the triceps and exhaling.
Repeat until the recommended amount of repetitions is performed.', 
  'Assicurati le gambe all''estremità della panca declinata e sdraiati lentamente. Utilizzando una presa stretta (leggermente inferiore alla larghezza delle spalle), solleva il bilanciere EZ dal rack e tienilo dritto sopra di te con le braccia tese e i gomiti chiusi. Le braccia devono essere perpendicolari al pavimento. Questa sarà la posizione di partenza. Suggerimento: per proteggere la cuffia dei rotatori, è preferibile farsi assistere da uno spotter per staccare il bilanciere dal rack. Inspirando e mantenendo le braccia ferme, abbassa lentamente il bilanciere con un movimento semicircolare verso di te finché non sfiora la fronte. Espirando, torna alla posizione di partenza contraendo i tricipiti. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_EZ_Bar_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_EZ_Bar_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '2bca7ac1-60c2-4b72-83c5-6e7f3bd9d08e', 
  'Decline Oblique Crunch', 
  'Crunch obliqui su panca declinata', 
  'Secure your legs at the end of the decline bench and slowly lay down on the bench.
Raise your upper body off the bench until your torso is about 35-45 degrees if measured from the floor.
Put one hand beside your head and the other on your thigh. This will be your starting position.
Raise your upper body slowly from the starting position while turning your torso to the left. Continue crunching up as you exhale until your right elbow touches your left knee. Hold this contracted position for a second. Tip: Focus on keeping your abs tight and keeping the movement slow and controlled.
Lower your body back down slowly to the starting position as you inhale.
After completing one set on the right for the recommended amount of repetitions, switch to your left side. Tip: Focus on really twisting your torso and feeling the contraction when you are in the up position.', 
  'Assicurati le gambe all''estremità della panca declinata e sdraiati lentamente. Solleva la parte superiore del corpo finché il busto non forma un angolo di circa 35-45 gradi rispetto al pavimento. Posiziona una mano accanto alla testa e l''altra sulla coscia. Questa è la posizione di partenza. Solleva lentamente il busto ruotandolo verso sinistra. Continua a contrarre l''addome espirando finché il gomito destro non tocca il ginocchio sinistro. Mantieni la contrazione per un secondo. Suggerimento: concentrati sul tenere gli addominali tesi e sul controllare il movimento. Scendi lentamente inspirando. Dopo aver completato la serie su un lato, passa all''altro.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Oblique_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Oblique_Crunch/1.jpg'], 
  NOW()
),
(
  '9f51f99d-0178-447f-ac9d-b1f4a55135d5', 
  'Decline Push-Up', 
  'Piegamenti declinati', 
  'Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Move your feet up to a box or bench. This will be your starting position.
Next, lower yourself downward until your chest almost touches the floor as you inhale.
Now breathe out and press your upper body back up to the starting position while squeezing your chest.
After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.', 
  'Sdraiati a terra a pancia in giù e posiziona le mani a circa 90 cm di distanza, mantenendo il busto sollevato con le braccia tese. Appoggia i piedi su un rialzo o una panca. Questa è la posizione di partenza. Scendi verso il basso inspirando finché il petto non sfiora quasi il pavimento. Espira e spingi il corpo verso l''alto tornando alla posizione iniziale, contraendo i pettorali. Dopo una breve pausa nella posizione di massima contrazione, ripeti l''esercizio.', 
  'chest', 
  'shoulders', 
  NULL, 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Push-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Push-Up/1.jpg'], 
  NOW()
),
(
  'e97c4d57-46d5-4f82-a080-3cba28be546e', 
  'Decline Reverse Crunch', 
  'Crunch inversi su panca declinata', 
  'Lie on your back on a decline bench and hold on to the top of the bench with both hands. Don''t let your body slip down from this position.
Hold your legs parallel to the floor using your abs to hold them there while keeping your knees and feet together. Tip: Your legs should be fully extended with a slight bend on the knee. This will be your starting position.
While exhaling, move your legs towards the torso as you roll your pelvis backwards and you raise your hips off the bench. At the end of this movement your knees will be touching your chest.
Hold the contraction for a second and move your legs back to the starting position while inhaling.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati supino su una panca declinata e afferra la parte alta della panca con entrambe le mani. Mantieni le gambe parallele al pavimento usando gli addominali, tenendo ginocchia e piedi uniti. Suggerimento: le gambe devono essere completamente estese con una leggera flessione delle ginocchia. Questa è la posizione di partenza. Espirando, porta le gambe verso il busto ruotando il bacino all''indietro e sollevando i fianchi dalla panca. Alla fine del movimento le ginocchia toccheranno il petto. Mantieni la contrazione per un secondo e torna lentamente alla posizione iniziale inspirando.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Reverse_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Reverse_Crunch/1.jpg'], 
  NOW()
),
(
  '7fbf4984-269d-4119-8e28-93512e62096b', 
  'Decline Smith Press', 
  'Panca declinata Smith machine', 
  'Place a decline bench underneath the Smith machine. Now place the barbell at a height that you can reach when lying down and your arms are almost fully extended. Using a pronated grip that is wider than shoulder width, unlock the bar from the rack and hold it straight over you with your arms extended. This will be your starting position.
As you inhale, lower the bar under control by allowing the elbows to flex, lightly contacting the torso.
After a brief pause, bring the bar back to the starting position by extending the elbows, exhaling as you do so.
Repeat the movement for the prescribed amount of repetitions.
When the set is complete, lock the bar back in the rack.', 
  'Posiziona una panca declinata sotto la Smith machine. Regola l''altezza del bilanciere in modo da poterlo raggiungere quando sei sdraiato con le braccia quasi completamente estese. Utilizzando una presa prona più ampia delle spalle, sblocca il bilanciere e tienilo sopra di te con le braccia tese. Questa è la posizione di partenza. Inspirando, abbassa il bilanciere in modo controllato piegando i gomiti finché non sfiorano il busto. Dopo una breve pausa, torna alla posizione di partenza estendendo i gomiti ed espirando. Al termine della serie, blocca il bilanciere sul rack.', 
  'chest', 
  'shoulders', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Smith_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Smith_Press/1.jpg'], 
  NOW()
),
(
  '2573f73b-6381-48a2-8a26-0e4519f0cc2f', 
  'Deficit Deadlift', 
  'Deficit Deadlift', 
  'Begin by having a platform or weight plates that you can stand on, usually 1-3 inches in height. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets.
With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.
Lower the bar by bending at the hips and guiding it to the floor.', 
  'Posiziona una piattaforma o dei dischi su cui stare in piedi (altezza 2,5-7,5 cm). Avvicinati al bilanciere in modo che sia centrato sopra i piedi, posizionati alla larghezza delle anche. Fletti le anche per afferrare il bilanciere alla larghezza delle spalle. Usa una presa prona o alternata per carichi pesanti. Con i piedi e la presa ben saldi, fai un respiro profondo, abbassa i fianchi e piega le ginocchia finché le tibie non toccano il bilanciere. Guarda avanti, tieni il petto alto e la schiena inarcata, e spingi attraverso i talloni per sollevare il peso. Dopo che il bilanciere ha superato le ginocchia, tira energicamente indietro, contraendo le scapole e spingendo i fianchi in avanti. Abbassa il bilanciere controllando il movimento fino al pavimento.', 
  'lower back', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Deficit_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Deficit_Deadlift/1.jpg'], 
  NOW()
),
(
  '23d9f4c8-4e6d-4e01-a1f2-9e8dbb4df028', 
  'Depth Jump Leap', 
  'Depth Jump Leap', 
  'For this drill you will need two boxes or benches, one 12 to 16 inches high and the other 22 to 26 inches high.
Stand on one of the two boxes with arms at the sides; feet should be together and slightly off the edge as in the depth jump. Place the other box approximately two or three feet in front of and facing the performer.
Begin by dropping off the initial box, landing and simultaneously taking off with both feet.
Rebound by driving upward and outward as intensely as possible, using the arms and full extension of the body to jump onto the higher box. Again, allow the legs to absorb the impact.', 
  'Per questo esercizio sono necessari due box, uno alto 30-40 cm e l''altro 55-65 cm. Stai sul box più basso con i piedi uniti leggermente oltre il bordo. Posiziona il secondo box a circa 60-90 cm di distanza di fronte a te. Scendi dal primo box e, appena tocchi terra, sfrutta il rimbalzo per saltare immediatamente. Spingi verso l''alto e in avanti con la massima intensità, usando le braccia e l''estensione completa del corpo per saltare sul box più alto. Assorbi l''impatto con le gambe all''atterraggio.', 
  'quadriceps', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Depth_Jump_Leap/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Depth_Jump_Leap/1.jpg'], 
  NOW()
),
(
  'bcaa0e10-7d1b-4f03-96ee-0006237907c4', 
  'Dip Machine', 
  'Dip Machine', 
  'Sit securely in a dip machine, select the weight and firmly grasp the handles.
Now keep your elbows in at your sides in order to place emphasis on the triceps. The elbows should be bent at a 90 degree angle.
As you contract the triceps, extend your arms downwards as you exhale. Tip: At the bottom of the movement, focus on keeping a little bend in your arms to keep tension on the triceps muscle.
Now slowly let your arms come back up to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Siediti sulla dip machine, seleziona il carico e afferra saldamente le impugnature. Tieni i gomiti stretti lungo i fianchi per enfatizzare il lavoro dei tricipiti. I gomiti devono essere piegati a 90 gradi. Contraendo i tricipiti, estendi le braccia verso il basso espirando. Suggerimento: nella parte inferiore del movimento, mantieni una leggera flessione delle braccia per preservare la tensione muscolare. Torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  'chest', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dip_Machine/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dip_Machine/1.jpg'], 
  NOW()
),
(
  '5bbfd6ab-128e-4dd5-a906-90ca44c0817d', 
  'Dips - Chest Version', 
  'Dips - Versione per pettorali', 
  'For this exercise you will need access to parallel bars. To get yourself into the starting position, hold your body at arms length (arms locked) above the bars.
While breathing in, lower yourself slowly with your torso leaning forward around 30 degrees or so and your elbows flared out slightly until you feel a slight stretch in the chest.
Once you feel the stretch, use your chest to bring your body back to the starting position as you breathe out. Tip: Remember to squeeze the chest at the top of the movement for a second.
Repeat the movement for the prescribed amount of repetitions.', 
  'Utilizza le parallele. Per la posizione di partenza, mantieni il corpo sospeso con le braccia tese. Inspirando, scendi lentamente inclinando il busto in avanti di circa 30 gradi e tenendo i gomiti leggermente aperti finché non senti una leggera tensione al petto. Una volta percepito l''allungamento, usa i pettorali per riportare il corpo nella posizione di partenza espirando. Suggerimento: contrai i pettorali per un secondo nella parte alta del movimento. Ripeti per le ripetizioni prescritte.', 
  'chest', 
  'shoulders', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Chest_Version/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Chest_Version/1.jpg'], 
  NOW()
),
(
  '165d6250-1e19-4afc-8590-8df825f71688', 
  'Dips - Triceps Version', 
  'Dips - Versione per tricipiti', 
  'To get into the starting position, hold your body at arm''s length with your arms nearly locked above the bars.
Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm.
Then, exhale and push your torso back up using your triceps to bring your body back to the starting position.
Repeat the movement for the prescribed amount of repetitions.', 
  'Per la posizione di partenza, mantieni il corpo sospeso con le braccia quasi tese sopra le parallele. Inspira e scendi lentamente verso il basso. Il busto deve rimanere verticale e i gomiti vicini al corpo per concentrare lo sforzo sui tricipiti. Scendi finché non si forma un angolo di 90 gradi tra braccio e avambraccio. Espira e spingi il corpo verso l''alto usando la forza dei tricipiti per tornare alla posizione iniziale. Ripeti per le ripetizioni prescritte.', 
  'triceps', 
  'chest', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg'], 
  NOW()
),
(
  '5e76fdc4-8c53-4457-bb94-0bf0a559c322', 
  'Donkey Calf Raises', 
  'Donkey Calf Raises', 
  'For this exercise you will need access to a donkey calf raise machine. Start by positioning your lower back and hips under the padded lever provided. The tailbone area should be the one making contact with the pad.
Place both of your arms on the side handles and place the balls of your feet on the calf block with the heels extending off. Align the toes forward, inward or outward, depending on the area you wish to target, and straighten the knees without locking them. This will be your starting position.
Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.
Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.
Repeat for the recommended amount of repetitions.', 
  'Per questo esercizio è necessaria una macchina per Donkey Calf Raise. Posiziona la parte bassa della schiena e i fianchi sotto la leva imbottita fornita. L''area dell''osso sacro dovrebbe essere quella a contatto con l''imbottitura. Poggia entrambe le braccia sulle maniglie laterali e posiziona l''avampiede sul blocco per polpacci, lasciando i talloni sospesi. Allinea le punte dei piedi in avanti, verso l''interno o verso l''esterno, a seconda della zona che desideri colpire, e distendi le ginocchia senza bloccarle. Questa è la posizione di partenza. Solleva i talloni espirando, estendendo le caviglie il più in alto possibile e contraendo il polpaccio. Assicurati che le ginocchia rimangano immobili per tutto il movimento. Non deve esserci alcuna flessione. Mantieni la posizione di contrazione per un secondo prima di tornare verso il basso. Torna lentamente alla posizione iniziale inspirando, abbassando i talloni e flettendo le caviglie fino a sentire i polpacci allungati. Ripeti per il numero di ripetizioni consigliato.', 
  'calves', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Donkey_Calf_Raises/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Donkey_Calf_Raises/1.jpg'], 
  NOW()
),
(
  '4014dcc6-52b9-472b-8a9e-f8f461da1e4f', 
  'Double Kettlebell Alternating Hang Clean', 
  'Double Kettlebell Alternating Hang Clean', 
  'Place two kettlebells between your feet. To get in the starting position, push your butt back and look straight ahead.
Clean one kettlebell to your shoulder and hold on to the other kettlebell.
With a fluid motion, lower the top kettlebell while driving the bottom kettlebell up.', 
  'Posiziona due kettlebell tra i piedi. Per assumere la posizione di partenza, spingi il bacino all''indietro e guarda dritto davanti a te. Esegui un Clean con un kettlebell portandolo alla spalla, mantenendo la presa sull''altro kettlebell. Con un movimento fluido, abbassa il kettlebell superiore mentre spingi verso l''alto quello inferiore.', 
  'hamstrings', 
  'biceps', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Alternating_Hang_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Alternating_Hang_Clean/1.jpg'], 
  NOW()
),
(
  'fee07800-9cac-4dc1-9509-0a8e89d632f8', 
  'Double Kettlebell Jerk', 
  'Double Kettlebell Jerk', 
  'Hold a kettlebell by the handle in each hand.
Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so, so that the palms face forward. This will be your starting position.
Dip your body by bending the knees, keeping your torso upright.
Immediately reverse direction, driving through the heels, in essence jumping to create momentum.
As you do so, press the kettlebells overhead to lockout by extending the arms, using your body''s momentum to move the weights.
Return your feet to the ground in a split fashion, with one foot forward and one foot back.
Keeping the weights overhead, return to a standing position, bringing your feet together. Lower the weights to perform the next repetition.', 
  'Impugna un kettlebell per il manico in ogni mano. Esegui un Clean portando i kettlebell alle spalle estendendo gambe e anche mentre li tiri verso l''alto. Ruota i polsi durante il movimento in modo che i palmi siano rivolti in avanti. Questa è la tua posizione di partenza. Esegui un leggero squat piegando le ginocchia e mantenendo il busto eretto. Inverti immediatamente la direzione, spingendo sui talloni, come se saltassi, per creare slancio. Contemporaneamente, spingi i kettlebell sopra la testa fino a bloccare i gomiti, usando lo slancio del corpo per sollevare i pesi. Riporta i piedi a terra in posizione affondata (split), con un piede avanti e uno indietro. Mantenendo i pesi sopra la testa, torna in posizione eretta unendo i piedi. Abbassa i pesi per eseguire la ripetizione successiva.', 
  'shoulders', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Jerk/1.jpg'], 
  NOW()
),
(
  '65a70914-ff4e-4809-a3de-ab081bee3c46', 
  'Double Kettlebell Push Press', 
  'Double Kettlebell Push Press', 
  'Clean two kettlebells to your shoulders.
Squat down a few inches and reverse the motion rapidly. Use the momentum from the legs to drive the kettlebells overhead.
Once the kettlebells are locked out, lower the kettlebells to your shoulders and repeat.', 
  'Esegui un Clean con due kettlebell portandoli alle spalle. Esegui un breve squat e inverte il movimento rapidamente. Sfrutta lo slancio delle gambe per spingere i kettlebell sopra la testa. Una volta che le braccia sono completamente distese, abbassa i kettlebell alle spalle e ripeti.', 
  'shoulders', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Push_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Push_Press/1.jpg'], 
  NOW()
),
(
  '32dfc413-1ee7-4f8e-8801-9e0e21a8e953', 
  'Double Kettlebell Snatch', 
  'Double Kettlebell Snatch', 
  'Place two kettlebells behind your feet. Bend your knees and sit back to pick up the kettlebells.
Swing the kettlebells between your legs forcefully and reverse the direction.
Drive through with your hips and lock the ketttlebells overhead in one uninterrupted motion.', 
  'Posiziona due kettlebell dietro i piedi. Piega le ginocchia e spingi il bacino indietro per afferrarli. Fai oscillare i kettlebell tra le gambe con forza e inverte la direzione. Spingi con le anche e porta i kettlebell sopra la testa bloccandoli in un unico movimento ininterrotto.', 
  'shoulders', 
  'glutes', 
  'kettlebells', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Snatch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Snatch/1.jpg'], 
  NOW()
),
(
  'f637a57d-f85b-4f1d-b770-82f7fa235172', 
  'Double Kettlebell Windmill', 
  'Double Kettlebell Windmill', 
  'Place a kettlebell in front of your front foot and clean and press a kettlebell overhead with your opposite arm. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulders. Rotate your wrist as you do so, so that the palm faces forward.
Keeping the kettlebell locked out at all times, push your butt out in the direction of the locked out kettlebell. Turn your feet out at a forty-five degree angle from the arm with the locked out kettlebell.
Bending at the hip to one side, sticking your butt out, slowly lean until you can retrieve the kettlebell from the floor. Keep your eyes on the kettlebell that you hold over your head at all times.
Pause for a second after retrieving the kettlebell from the ground and reverse the motion back to the starting position.', 
  'Posiziona un kettlebell davanti al piede anteriore, quindi esegui un Clean e Press con il braccio opposto per portare l''altro kettlebell sopra la testa. Ruota il polso durante il movimento in modo che il palmo sia rivolto in avanti. Mantenendo il kettlebell bloccato sopra la testa, spingi il bacino verso il lato del kettlebell sollevato. Ruota i piedi di 45 gradi rispetto al braccio che sostiene il peso. Piegandoti lateralmente all''altezza dell''anca e spingendo il bacino in fuori, scendi lentamente finché non riesci a raccogliere il kettlebell da terra. Tieni sempre gli occhi fissi sul kettlebell sopra la testa. Fermati per un secondo dopo aver raccolto il peso e inverte il movimento per tornare alla posizione iniziale.', 
  'abdominals', 
  'glutes', 
  'kettlebells', 
  'intermediate', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Windmill/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Kettlebell_Windmill/1.jpg'], 
  NOW()
),
(
  '0bef726c-7589-4023-8339-82659a56fcaf', 
  'Double Leg Butt Kick', 
  'Double Leg Butt Kick', 
  'Begin standing with your knees slightly bent.
Quickly squat a short distance, flexing the hips and knees, and immediately extend to jump for maximum vertical height.
As you go up, tuck your heels by flexing the knees, attempting to touch the buttocks.
Finish the motion by landing with the knees only partially bent, using your legs to absorb the impact.', 
  'Parti in piedi con le ginocchia leggermente flesse. Esegui un rapido e breve squat, flettendo anche e ginocchia, ed estendi immediatamente le gambe per saltare raggiungendo la massima altezza verticale. Durante la salita, porta i talloni verso i glutei flettendo le ginocchia. Termina il movimento atterrando con le ginocchia leggermente flesse, usando le gambe per assorbire l''impatto.', 
  'quadriceps', 
  'abductors', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Leg_Butt_Kick/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Double_Leg_Butt_Kick/1.jpg'], 
  NOW()
),
(
  '18c53729-de0f-4264-bb6a-6c434b0e4c9d', 
  'Downward Facing Balance', 
  'Downward Facing Balance', 
  'Lie facedown on top of an exercise ball.
While resting on your stomach on the ball, walk your hands forward along the floor and lift your legs, extending your elbows and knees.', 
  'Sdraiati a pancia in giù sopra una palla da fitness (Swiss ball). Mentre sei appoggiato con lo stomaco sulla palla, cammina con le mani in avanti sul pavimento e solleva le gambe, distendendo gomiti e ginocchia.', 
  'glutes', 
  'abdominals', 
  'exercise ball', 
  'intermediate', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Downward_Facing_Balance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Downward_Facing_Balance/1.jpg'], 
  NOW()
),
(
  '400e5ffb-ff07-4d5e-b209-4fbcf48dd763', 
  'Drag Curl', 
  'Drag Curl', 
  'Grab a barbell with a supinated grip (palms facing forward) and get your elbows close to your torso and back. This will be your starting position.
As you exhale, curl the bar up while keeping the elbows to the back as you "Drag" the bar up by keeping it in contact with your torso. Tip: As you can see, you will not be keeping the elbows pinned to your sides, but instead you will be bringing them back. Also, do not lift your shoulders.
Slowly go back to the starting position as you keep the bar in contact with the torso at all times.
Repeat for the recommended amount of repetitions.', 
  'Afferra un bilanciere con una presa supinata (palmi rivolti in avanti) e tieni i gomiti vicini al busto e rivolti all''indietro. Questa è la posizione di partenza. Espirando, solleva il bilanciere mantenendo i gomiti verso l''indietro e trascinando la sbarra a contatto con il torso. Consiglio: non tenere i gomiti bloccati ai fianchi, ma portali leggermente indietro. Inoltre, non sollevare le spalle. Torna lentamente alla posizione di partenza mantenendo sempre il bilanciere a contatto con il torso. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Drag_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Drag_Curl/1.jpg'], 
  NOW()
),
(
  '7ad8cc97-df8c-448d-b8ee-f219bb6fd76e', 
  'Drop Push', 
  'Drop Push', 
  'Position low boxes or other platforms 2-3 feet apart.
Move to a pushup position between them, supporting yourself by placing your hands on the boxes.
With good posture, drop from the platforms by pressing up and moving your hands to shoulder width, cushioning your landing by absorbing the impact through the arm.', 
  'Posiziona dei box bassi o altre piattaforme a una distanza di 60-90 cm l''una dall''altra. Mettiti in posizione di push-up tra di essi, sostenendoti con le mani sui box. Mantenendo una buona postura, lasciati scendere dalle piattaforme spingendo verso l''alto e spostando le mani alla larghezza delle spalle, ammortizzando l''atterraggio attraverso le braccia.', 
  'chest', 
  'shoulders', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Drop_Push/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Drop_Push/1.jpg'], 
  NOW()
),
(
  '67abc4b3-e939-402b-af2b-2f43ae75098a', 
  'Dumbbell Alternate Bicep Curl', 
  'Dumbbell Alternate Bicep Curl', 
  'Stand (torso upright) with a dumbbell in each hand held at arms length. The elbows should be close to the torso and the palms of your hand should be facing your thighs.
While holding the upper arm stationary, curl the right weight as you rotate the palm of the hands until they are facing forward. At this point continue contracting the biceps as you breathe out until your biceps is fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Tip: Only the forearms should move.
Slowly begin to bring the dumbbell back to the starting position as your breathe in. Tip: Remember to twist the palms back to the starting position (facing your thighs) as you come down.
Repeat the movement with the left hand. This equals one repetition.
Continue alternating in this manner for the recommended amount of repetitions.', 
  'In piedi (busto eretto) con un manubrio in ogni mano lungo i fianchi. I gomiti devono essere vicini al busto e i palmi delle mani rivolti verso le cosce. Mantenendo la parte superiore del braccio ferma, solleva il manubrio destro ruotando il palmo finché non è rivolto in avanti. Continua a contrarre il bicipite espirando finché non è completamente contratto e il manubrio è all''altezza della spalla. Mantieni la posizione di contrazione per un secondo strizzando il bicipite. Consiglio: solo gli avambracci devono muoversi. Torna lentamente alla posizione iniziale inspirando, ricordandoti di ruotare i palmi verso le cosce durante la discesa. Ripeti con la mano sinistra per completare una ripetizione. Alterna in questo modo per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Alternate_Bicep_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Alternate_Bicep_Curl/1.jpg'], 
  NOW()
),
(
  'f18f6164-c310-49b2-be43-a24c675d871b', 
  'Dumbbell Bench Press', 
  'Dumbbell Bench Press', 
  'Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other.
Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width.
Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position.
Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it.
Repeat the movement for the prescribed amount of repetitions of your training program.', 
  'Sdraiati su una panca piana con un manubrio in ogni mano poggiato sulle cosce. I palmi sono rivolti l''uno verso l''altro. Usando le cosce come spinta, solleva i manubri uno alla volta fino a tenerli davanti a te alla larghezza delle spalle. Ruota i polsi in avanti in modo che i palmi siano rivolti in avanti. I manubri devono trovarsi ai lati del petto, con braccio e avambraccio a formare un angolo di 90 gradi. Questa è la posizione di partenza. Espirando, spingi i manubri verso l''alto usando i pettorali. Blocca le braccia in alto, contrai il petto, mantieni per un secondo e scendi lentamente. Consiglio: la discesa dovrebbe durare circa il doppio della salita. Ripeti per il numero di ripetizioni prescritto.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/1.jpg'], 
  NOW()
),
(
  '3f310702-7840-4de9-bae4-1772c7437844', 
  'Dumbbell Bench Press with Neutral Grip', 
  'Dumbbell Bench Press con Presa Neutra', 
  'Take a dumbbell in each hand and lay back onto a flat bench. Your feet should be flat on the floor and your shoulder blades retracted.
Maintaining a neutral grip, palms facing each other, begin with your arms extended directly above you, perpendicular to the floor. This will be your starting position.
Begin the movement by flexing the elbow, lowering the upper arms to the side. Descend until the dumbbells are to your torso.
Pause, then extend the elbow and return to the starting position.', 
  'Afferra un manubrio per mano e sdraiati su una panca piana. Piedi ben piantati a terra e scapole addotte. Mantenendo una presa neutra (palmi rivolti l''uno verso l''altro), inizia con le braccia distese sopra di te, perpendicolari al pavimento. Questa è la posizione di partenza. Inizia il movimento flettendo i gomiti e abbassando le braccia lateralmente. Scendi finché i manubri sono all''altezza del busto. Fai una pausa, quindi estendi i gomiti tornando alla posizione di partenza.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press_with_Neutral_Grip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press_with_Neutral_Grip/1.jpg'], 
  NOW()
),
(
  'ae3fcc2b-d3c1-486f-9e0e-671cd01e9c3e', 
  'Dumbbell Bicep Curl', 
  'Dumbbell Bicep Curl', 
  'Stand up straight with a dumbbell in each hand at arm''s length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position.
Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps.
Then, inhale and slowly begin to lower the dumbbells back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'In piedi, schiena dritta, con un manubrio in ogni mano lungo i fianchi. Tieni i gomiti vicini al busto e ruota i palmi in avanti. Questa è la posizione di partenza. Mantenendo ferma la parte superiore del braccio, espira e solleva i pesi contraendo i bicipiti. Continua a sollevare finché i bicipiti sono completamente contratti e i manubri sono all''altezza delle spalle. Mantieni la contrazione per una breve pausa strizzando i muscoli. Quindi, inspira e torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/1.jpg'], 
  NOW()
),
(
  'a0988040-c624-48c9-aa5e-b2f39df9cf04', 
  'Dumbbell Clean', 
  'Dumbbell Clean', 
  'Begin standing with a dumbbell in each hand with your feet shoulder width apart.
Lower the weights to the floor by flexing at the hips and knees, pushing your hips back until the dumbbells reach the floor. This will be your starting position.
To initiate the movement, violently jump upward by extending the hips, knees, and ankles to acclerate the weights upward. Maintaining a neutral grip on the dumbbells, keep the arms straight until full extension is reached.
After full extension, rebend the hips and knees to receive the weight in a squat position. Allow the arms to bend, guiding the dumbbells to your shoulders.
Upon receiving the weight in the squat position, extend the hips and knees to finish in a standing position with the weights on your shoulders.', 
  'In piedi, con un manubrio in ogni mano e piedi alla larghezza delle spalle. Abbassa i pesi verso il pavimento flettendo anche e ginocchia, spingendo il bacino all''indietro. Questa è la posizione di partenza. Per iniziare il movimento, dai una spinta esplosiva verso l''alto estendendo anche, ginocchia e caviglie per accelerare i pesi. Mantieni una presa neutra e le braccia tese finché non raggiungi la massima estensione. Dopo l''estensione, fletti nuovamente anche e ginocchia per ricevere il peso in posizione di squat. Permetti alle braccia di flettersi, guidando i manubri verso le spalle. Dalla posizione di squat, estendi anche e ginocchia per finire in piedi con i pesi sulle spalle.', 
  'hamstrings', 
  'calves', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Clean/1.jpg'], 
  NOW()
),
(
  'e590c2c4-0194-42e2-8bc9-f80664717dc6', 
  'Dumbbell Floor Press', 
  'Dumbbell Floor Press', 
  'Lay on the floor holding dumbbells in your hands. Your knees can be bent. Begin with the weights fully extended above you.
Lower the weights until your upper arm comes in contact with the floor. You can tuck your elbows to emphasize triceps size and strength, or to focus on your chest angle your arms to the side.
Pause at the bottom, and then bring the weight together at the top by extending through the elbows.', 
  'Sdraiati a terra tenendo i manubri in mano. Le ginocchia possono essere piegate. Inizia con i pesi completamente estesi sopra di te. Abbassa i pesi finché la parte superiore del braccio tocca il pavimento. Puoi tenere i gomiti stretti per enfatizzare tricipiti e forza, oppure angolare le braccia verso l''esterno per focalizzarti sul petto. Fai una pausa sul fondo, quindi riporta i pesi verso l''alto estendendo i gomiti.', 
  'triceps', 
  'chest', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Floor_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Floor_Press/1.jpg'], 
  NOW()
),
(
  '5de7b9ab-a9d2-4bca-a374-3c6f6dff97c6', 
  'Dumbbell Flyes', 
  'Dumbbell Flyes', 
  'Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other.
Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you''re pressing them, but stop and hold just before you lock out. This will be your starting position.
With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint.
Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights.
Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati su una panca piana con un manubrio per mano sulle cosce. Solleva i manubri uno alla volta fino a tenerli davanti a te alla larghezza delle spalle, con i palmi rivolti l''uno verso l''altro. Solleva i manubri come se stessi facendo una distensione, ma fermati poco prima del blocco articolare; questa è la posizione di partenza. Con una leggera flessione dei gomiti per proteggere il tendine del bicipite, abbassa le braccia lateralmente descrivendo un arco ampio finché non senti allungare il petto. Inspira durante la discesa. Consiglio: le braccia devono restare ferme, il movimento deve avvenire solo dall''articolazione della spalla. Torna alla posizione iniziale contraendo i pettorali ed espirando. Mantieni la contrazione per un secondo e ripeti.', 
  'chest', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/1.jpg'], 
  NOW()
),
(
  'ea262dd4-60b5-4dab-bcd3-31b7b6839dc1', 
  'Dumbbell Incline Row', 
  'Dumbbell Incline Row', 
  'Using a neutral grip, lean into an incline bench.
Take a dumbbell in each hand with a neutral grip, beginning with the arms straight. This will be your starting position.
Retract the shoulder blades and flex the elbows to row the dumbbells to your side.
Pause at the top of the motion, and then return to the starting position.', 
  'Con una presa neutra, appoggiati a una panca inclinata. Prendi un manubrio in ogni mano con presa neutra, iniziando con le braccia distese. Questa è la posizione di partenza. Retrai le scapole e fletti i gomiti per remare portando i manubri ai lati del busto. Fai una pausa in cima al movimento e torna alla posizione di partenza.', 
  'middle back', 
  'biceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Row/1.jpg'], 
  NOW()
),
(
  '9824156f-d255-4112-bac8-21eb0e5e88c2', 
  'Dumbbell Incline Shoulder Raise', 
  'Dumbbell Incline Shoulder Raise', 
  'Sit on an Incline Bench while holding a dumbbell on each hand on top of your thighs.
Lift your legs up to kick the weights to your shoulders and lean back. Position the dumbbells above your shoulders with your arms extended. The arms should be perpendicular to the floor with your palms facing forward and knuckles pointing towards the ceiling. This will be your starting position.
While keeping the arms straight and locked, lift the dumbbells by raising the shoulders from the bench as you breathe out.
Bring back the dumbbells to the starting position as you breathe in.
Repeat for the recommended amount of repetitions.', 
  'Siediti su una panca inclinata tenendo un manubrio per mano sulle cosce. Solleva le gambe per portare i pesi alle spalle e sdraiati all''indietro. Posiziona i manubri sopra le spalle con le braccia tese, perpendicolari al pavimento, palmi rivolti in avanti e nocche verso il soffitto. Questa è la posizione di partenza. Mantenendo le braccia tese e bloccate, solleva i manubri alzando le spalle dalla panca mentre espiri. Torna alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Shoulder_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Shoulder_Raise/1.jpg'], 
  NOW()
),
(
  '127a9c1f-0452-4022-b38a-e2e5d4573e03', 
  'Dumbbell Lunges', 
  'Dumbbell Lunges', 
  'Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position.
Step forward with your right leg around 2 feet or so from the foot being left stationary behind and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Note: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground.
Using mainly the heel of your foot, push up and go back to the starting position as you exhale.
Repeat the movement for the recommended amount of repetitions and then perform with the left leg.', 
  'In piedi, busto eretto, con due manubri in mano lungo i fianchi. Questa è la posizione di partenza. Fai un passo in avanti con la gamba destra (circa 60 cm) e abbassa il busto mantenendo l''equilibrio e il torso dritto. Inspira durante la discesa. Nota: non permettere al ginocchio di superare la punta del piede per non sovraccaricare l''articolazione. La tibia anteriore deve rimanere perpendicolare al suolo. Spingendo principalmente sul tallone, torna alla posizione iniziale espirando. Ripeti per le ripetizioni consigliate e poi esegui con la gamba sinistra.', 
  'quadriceps', 
  'calves', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/1.jpg'], 
  NOW()
),
(
  'b91968a2-a5c6-4336-bde8-6a03d7db7d67', 
  'Dumbbell Lying One-Arm Rear Lateral Raise', 
  'Alzate laterali posteriori su panca a un braccio', 
  'While holding a dumbbell in one hand, lay with your chest down on a slightly inclined (around 15 degrees when measured from the floor) adjustable bench. The other hand can be used to hold to the leg of the bench for stability.
Position the palm of the hand that is holding the dumbbell in a neutral manner (palms facing your torso) as you keep the arm extended with the elbow slightly bent. This will be your starting position.
Now raise the arm with the dumbbell to the side until your elbow is at shoulder height and your arm is roughly parallel to the floor as you exhale. Tip: Maintain your arm perpendicular to the torso while keeping your arm extended throughout the movement. Also, keep the contraction at the top for a second.
Slowly lower the dumbbell to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Impugnando un manubrio in una mano, sdraiati prono su una panca regolabile leggermente inclinata (circa 15 gradi rispetto al pavimento). L''altra mano può essere utilizzata per fare presa sulla gamba della panca per maggiore stabilità. Posiziona il palmo della mano che impugna il manubrio in posizione neutra (palmi rivolti verso il busto) mantenendo il braccio esteso con il gomito leggermente piegato. Questa sarà la posizione di partenza. Espirando, solleva il braccio con il manubrio lateralmente finché il gomito non è all''altezza della spalla e il braccio risulta approssimativamente parallelo al pavimento. Consiglio: mantieni il braccio perpendicolare al busto e ben esteso durante tutto il movimento. Mantieni la contrazione per un secondo nel punto di massima elevazione. Inspira e abbassa lentamente il manubrio verso la posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'middle back', 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_One-Arm_Rear_Lateral_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_One-Arm_Rear_Lateral_Raise/1.jpg'], 
  NOW()
),
(
  '7841979e-054d-44c8-b8d4-c3830b8065da', 
  'Dumbbell Lying Pronation', 
  'Pronazione con manubrio su panca', 
  'Lie on a flat bench face down with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it.
Bend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm.
Now raise the upper arm so that the forearm is perpendicular to the floor and the upper arm is perpendicular to your torso. Tip: The upper arm should be parallel to the floor and also creating a 90-degree angle with your torso. This will be your starting position.
As you breathe out, externally rotate your forearm so that the dumbbell is lifted forward as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is parallel to the floor. At this point you will hold the contraction for a second.
As you breathe in, slowly go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati prono su una panca piana, con un braccio che impugna un manubrio e l''altra mano piegata sulla panca per appoggiarvi la testa. Piega il gomito del braccio che sostiene il manubrio in modo da creare un angolo di 90 gradi tra braccio e avambraccio. Ora solleva la parte superiore del braccio in modo che l''avambraccio sia perpendicolare al pavimento e la parte superiore del braccio sia perpendicolare al busto. Consiglio: la parte superiore del braccio deve essere parallela al pavimento e formare un angolo di 90 gradi con il busto. Questa è la posizione di partenza. Espirando, ruota esternamente l''avambraccio sollevando il manubrio in avanti, mantenendo l''angolo di 90 gradi tra braccio e avambraccio. Continua la rotazione esterna finché l''avambraccio non è parallelo al pavimento. Mantieni la contrazione per un secondo. Inspira e torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'forearms', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_Pronation/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_Pronation/1.jpg'], 
  NOW()
),
(
  '17fa297b-0712-419f-a940-e9b369e874ed', 
  'Dumbbell Lying Rear Lateral Raise', 
  'Alzate laterali posteriori su panca', 
  'While holding a dumbbell in each hand, lay with your chest down on a slightly inclined (around 15 degrees when measured from the floor) adjustable bench.
Position the palms of the hands in a neutral manner (palms facing your torso) as you keep the arms extended with the elbows slightly bent. This will be your starting position.
Now raise the arms to the side until your elbows are at shoulder height and your arms are roughly parallel to the floor as you exhale. Tip: Maintain your arms perpendicular to the torso while keeping them extended throughout the movement. Also, keep the contraction at the top for a second.
Slowly lower the dumbbells to the starting position as you inhale.
Repeat for the recommended amount of repetitions and then switch to the other arm.', 
  'Impugnando un manubrio per mano, sdraiati prono su una panca regolabile leggermente inclinata (circa 15 gradi rispetto al suolo). Posiziona i palmi delle mani in modo neutro (palmi rivolti verso il busto) e mantieni le braccia estese con i gomiti leggermente piegati. Questa è la posizione di partenza. Espirando, solleva le braccia lateralmente finché i gomiti non sono all''altezza delle spalle e le braccia sono approssimativamente parallele al pavimento. Consiglio: mantieni le braccia perpendicolari al busto ed estese durante tutto il movimento. Mantieni la contrazione per un secondo nel punto di massima elevazione. Inspira e abbassa lentamente i manubri alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato, quindi passa all''altro braccio.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_Rear_Lateral_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_Rear_Lateral_Raise/1.jpg'], 
  NOW()
),
(
  'fcb7703f-80fa-416b-ac05-a71a765ac3da', 
  'Dumbbell Lying Supination', 
  'Supinazione con manubrio su panca', 
  'Lie sideways on a flat bench with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it.
Bend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm.
Now raise the upper arm so that the forearm is parallel to the floor and perpendicular to your torso (Tip: So the forearm will be directly in front of you). The upper arm will be stationary by your torso and should be parallel to the floor (aligned with your torso at all times). This will be your starting position.
As you breathe out, externally rotate your forearm so that the dumbbell is lifted up in a semicircle motion as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is perpendicular to the floor and the torso pointing towards the ceiling. At this point you will hold the contraction for a second.
As you breathe in, slowly go back to the starting position.
Repeat for the recommended amount of repetitions and then switch to the other arm.', 
  'Sdraiati su un fianco su una panca piana, con un braccio che impugna un manubrio e l''altra mano piegata sulla panca per appoggiarvi la testa. Piega il gomito del braccio che sostiene il manubrio per creare un angolo di 90 gradi tra braccio e avambraccio. Ora solleva la parte superiore del braccio in modo che l''avambraccio sia parallelo al pavimento e perpendicolare al busto (Consiglio: l''avambraccio deve trovarsi direttamente davanti a te). La parte superiore del braccio rimane ferma lungo il busto e deve essere parallela al pavimento. Questa è la posizione di partenza. Espirando, ruota esternamente l''avambraccio sollevando il manubrio con un movimento semicircolare, mantenendo l''angolo di 90 gradi. Continua la rotazione esterna finché l''avambraccio non è perpendicolare al pavimento e il busto è rivolto verso il soffitto. Mantieni la contrazione per un secondo. Inspira e torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato e poi cambia braccio.', 
  'forearms', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_Supination/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_Supination/1.jpg'], 
  NOW()
),
(
  '98ab7664-3813-43b6-9a2d-151ba7e94e30', 
  'Dumbbell One-Arm Shoulder Press', 
  'Military press con manubrio a un braccio', 
  'Grab a dumbbell and either sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs or stand up straight.
Clean the dumbbell up to bring it to shoulder height. The other hand can be kept fully extended to the side, by the waist or grabbing a fixed surface.
Rotate the wrist so that the palm of your hand is facing forward. This is your starting position.
As you exhale, push the dumbbell up until your arm is fully extended.
After a second pause, slowly come down back to the starting position as you inhale.
Repeat for the recommended amount of repetitions and then switch arms.', 
  'Afferra un manubrio e siediti su una panca con schienale, oppure resta in piedi con la schiena dritta. Porta il manubrio all''altezza della spalla (Clean). L''altro braccio può essere tenuto esteso lateralmente, lungo il fianco o facendo presa su una superficie fissa. Ruota il polso in modo che il palmo sia rivolto in avanti. Questa è la posizione di partenza. Espirando, spingi il manubrio verso l''alto finché il braccio non è completamente esteso. Dopo una pausa di un secondo, inspira e torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato e cambia braccio.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Shoulder_Press/1.jpg'], 
  NOW()
),
(
  '39f3e802-ee34-4138-ad51-2b41a0703ff6', 
  'Dumbbell One-Arm Triceps Extension', 
  'Estensioni tricipiti sopra la testa a un braccio', 
  'Grab a dumbbell and either sit on a military press bench or a utility bench that has a back support on it as you place the dumbbells upright on top of your thighs or stand up straight.
Clean the dumbbell up to bring it to shoulder height and then extend the arm over your head so that the whole arm is perpendicular to the floor and next to your head. The dumbbell should be on top of you. The other hand can be kept fully extended to the side, by the waist, supporting the upper arm that has the dumbbell or grabbing a fixed surface.
Rotate the wrist so that the palm of your hand is facing forward and the pinkie is facing the ceiling. This will be your starting position.
Slowly lower the dumbbell behind your head as you hold the upper arm stationary. Inhale as you perform this movement and pause when your triceps are fully stretched.
Return to the starting position by flexing your triceps as you breathe out. Tip: It is imperative that only the forearm moves. The upper arm should remain at all times stationary next to your head.
Repeat for the recommended amount of repetitions and switch arms.', 
  'Afferra un manubrio da seduto o in piedi. Porta il manubrio all''altezza della spalla e distendi il braccio sopra la testa in modo che sia perpendicolare al pavimento e vicino alla testa. L''altra mano può sostenere il braccio che lavora, essere tenuta lungo il fianco o fare presa su un supporto. Ruota il polso in modo che il palmo sia rivolto in avanti e il mignolo verso il soffitto. Questa è la posizione di partenza. Inspira e abbassa lentamente il manubrio dietro la testa mantenendo fermo il braccio. Fermati quando i tricipiti sono completamente distesi. Espirando, torna alla posizione iniziale contraendo i tricipiti. Consiglio: solo l''avambraccio deve muoversi; la parte superiore del braccio deve restare immobile accanto alla testa. Ripeti per le ripetizioni previste e cambia braccio.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '88086c72-fe53-401b-b498-364d313b99d4', 
  'Dumbbell One-Arm Upright Row', 
  'Tirate al mento a un braccio con manubrio', 
  'Grab a dumbbell and stand up straight with your arm extended in front of you with a slight bend at the elbows and your back straight. This will be your starting position. Tip: The dumbbell should be resting on top of your thigh with the palm of your hands facing your thighs.
Keep the other hand can be kept fully extended to the side, by the waist or grabbing a fixed surface. This will be your starting position.
Use your side shoulders to lift the dumbbell as you exhale. The dumbbell should be close to the body as you move it up. Continue to lift it until the dumbbell is nearly in line with your chin. Tip: Your elbows should drive the motion. As you lift the dumbbell, your elbow should always be higher than your forearm. Also, keep your torso stationary and pause for a second at the top of the movement.
Lower the dumbbell back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions and switch arms.', 
  'In piedi, schiena dritta, impugna un manubrio con il braccio esteso davanti a te, gomito leggermente flesso. Il manubrio deve poggiare sulla coscia con il palmo rivolto verso di essa. Questa è la posizione di partenza. L''altra mano può essere tenuta lungo il fianco o su un supporto. Espirando, utilizza la spalla laterale per sollevare il manubrio, mantenendolo vicino al corpo, finché non è quasi allineato con il mento. Consiglio: il movimento deve essere guidato dal gomito, che deve rimanere sempre più in alto dell''avambraccio. Tieni il busto fermo e fai una pausa di un secondo nel punto più alto. Inspira e abbassa lentamente il manubrio alla posizione iniziale. Ripeti per le ripetizioni previste e cambia braccio.', 
  'shoulders', 
  'biceps', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Upright_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Upright_Row/1.jpg'], 
  NOW()
),
(
  '5e11b2c8-ccda-40e1-96ac-b2bc59dcbd01', 
  'Dumbbell Prone Incline Curl', 
  'Curl su panca inclinata (prono)', 
  'Grab a dumbbell on each hand and lie face down on an incline bench with your shoulders near top of the incline. Your knees can rest on the seat or your legs can be straddled to the sides (my preferred way).
Let your arms extend and hang naturally in front of you so that they are perpendicular to the floor.
Now keep your elbows in by your side and face the palms forward. This will be your starting position.
Raise the dumbbells by contracting the biceps until your arms are fully flexed. Exhale as you perform this portion of the movement and ensure that only the forearms move. The upper arms should remain stationary at all times.
Lower the dumbbells until your arms are fully extended.
Repeat for the recommended amount of times.', 
  'Afferra un manubrio per mano e sdraiati prono su una panca inclinata con le spalle vicino alla parte superiore. Le ginocchia possono poggiare sulla seduta o le gambe possono stare divaricate ai lati. Lascia che le braccia pendano naturalmente verso il basso, perpendicolari al pavimento. Mantieni i gomiti stretti lungo i fianchi e rivolgi i palmi in avanti. Questa è la posizione di partenza. Solleva i manubri contraendo i bicipiti finché le braccia non sono completamente flesse. Espira durante il movimento e assicurati che si muovano solo gli avambracci; la parte superiore delle braccia deve rimanere ferma. Abbassa i manubri fino alla completa estensione. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Prone_Incline_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Prone_Incline_Curl/1.jpg'], 
  NOW()
),
(
  'cbd8b400-d565-4082-9234-603feda323b9', 
  'Dumbbell Raise', 
  'Alzate laterali con manubri', 
  'Grab a dumbbell in each arm and stand up straight with your arms extended by your sides with a slight bend at the elbows and your back straight. This will be your starting position. Tip: The dumbbell should be next to your thighs with the palm of your hands facing back.
Use your side shoulders to lift the dumbbells as you exhale. The dumbbells should be to the side of the body as you move them up. Continue to lift it until the dumbbells are nearly in line with your chin. Tip: Your elbows should drive the motion. As you lift the dumbbell, your elbow should always be higher than your forearm. Also, keep your torso stationary and pause for a second at the top of the movement.
Lower the dumbbells back down slowly to the starting position. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'In piedi, schiena dritta, impugna un manubrio per mano con le braccia distese lungo i fianchi e i gomiti leggermente piegati. Il manubrio deve trovarsi vicino alle cosce con i palmi rivolti all''indietro. Questa è la posizione di partenza. Espirando, utilizza le spalle laterali per sollevare i manubri lateralmente finché non sono quasi allineati con il mento. Consiglio: il movimento deve essere guidato dai gomiti, che devono rimanere sempre più in alto degli avambracci. Mantieni il busto fermo e fai una pausa di un secondo nel punto più alto. Inspira e abbassa lentamente i manubri alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'biceps', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Raise/1.jpg'], 
  NOW()
),
(
  '83896735-6ebb-4231-8b19-3c1af34f55e6', 
  'Dumbbell Rear Lunge', 
  'Affondi posteriori con manubri', 
  'Stand with your torso upright holding two dumbbells in your hands by your sides. This will be your starting position.
Step backward with your right leg around two feet or so from the left foot and lower your upper body down, while keeping the torso upright and maintaining balance. Inhale as you go down. Tip: As in the other exercises, do not allow your knee to go forward beyond your toes as you come down, as this will put undue stress on the knee joint. Make sure that you keep your front shin perpendicular to the ground. Keep the torso upright during the lunge; flexible hip flexors are important. A long lunge emphasizes the Gluteus Maximus; a short lunge emphasizes Quadriceps.
Push up and go back to the starting position as you exhale. Tip: Use the ball of your feet to push in order to accentuate the quadriceps. To focus on the glutes, press with your heels.
Now repeat with the opposite leg.', 
  'In piedi, busto eretto, impugna due manubri lungo i fianchi. Questa è la posizione di partenza. Fai un passo indietro con la gamba destra per circa 60 cm e abbassa il corpo, mantenendo il busto verticale ed equilibrato. Inspira durante la discesa. Consiglio: non superare la punta del piede con il ginocchio anteriore per evitare stress articolare. Mantieni la tibia anteriore perpendicolare al suolo. Un affondo lungo enfatizza il grande gluteo, un affondo breve i quadricipiti. Espirando, spingi e torna alla posizione iniziale. Consiglio: spingi sull''avampiede per enfatizzare i quadricipiti, usa i talloni per focalizzarti sui glutei. Ripeti con la gamba opposta.', 
  'quadriceps', 
  'calves', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Lunge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Rear_Lunge/1.jpg'], 
  NOW()
),
(
  '129e1676-eb83-462d-b33c-1d902690d2b0', 
  'Dumbbell Scaption', 
  'Dumbbell Scaption', 
  'This corrective exercise strengthens the muscles that stabilize your shoulder blade. Hold a light weight in each hand, hanging at your sides. Your thumbs should pointing up.
Begin the movement raising your arms out in front of you, about 30 degrees off center. Your arms should be fully extended as you perform the movement.
Continue until your arms are parallel to the ground, and then return to the starting position.', 
  'Questo esercizio correttivo rinforza i muscoli stabilizzatori della scapola. Impugna un peso leggero in ogni mano, lasciando le braccia distese lungo i fianchi con i pollici rivolti verso l''alto. Inizia il movimento sollevando le braccia frontalmente, inclinate di circa 30 gradi rispetto al centro. Mantieni le braccia completamente distese durante l''esecuzione. Continua fino a quando le braccia sono parallele al suolo, quindi torna alla posizione iniziale.', 
  'shoulders', 
  'traps', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Scaption/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Scaption/1.jpg'], 
  NOW()
),
(
  '3e427016-72c3-459e-8615-106f6b85cb73', 
  'Dumbbell Seated Box Jump', 
  'Dumbbell Seated Box Jump', 
  'Position a box a couple feet to the side of a bench. Hold a dumbbell to your chest with both hands and seat yourself on the bench facing the box. This will be your starting position.
Plant your feet firmly on the ground as you lean forward, extending through the hips and knees to jump up and forward.
Land on the box with both feet, absorbing the impact by allowing the hips and knees to bend.
Step down and return to the starting position.', 
  'Posiziona un box a poca distanza da una panca. Impugna un manubrio al petto con entrambe le mani e siediti sulla panca rivolto verso il box; questa è la posizione di partenza. Appoggia saldamente i piedi a terra, inclinati in avanti ed estendi anche e ginocchia per saltare verso l''alto e in avanti. Atterra sul box con entrambi i piedi, ammortizzando l''impatto flettendo anche e ginocchia. Scendi e torna nella posizione iniziale.', 
  'quadriceps', 
  'calves', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_Box_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_Box_Jump/1.jpg'], 
  NOW()
),
(
  'ca10b4e7-4001-4c03-8297-653e998c4dd8', 
  'Dumbbell Seated One-Leg Calf Raise', 
  'Dumbbell Seated One-Leg Calf Raise', 
  'Place a block on the floor about 12 inches from a flat bench.
Sit on a flat bench and place a dumbbell on your upper left thigh about 3 inches above your knee.
Now place the ball of your left foot on the block. This will be your starting position.
Raise your toes up as high as possible as you exhale and you contract your calf muscle. Hold the contraction for a second.
Slowly return to the starting position, stretching as far down as possible.
Repeat for your prescribed number of repetitions and then repeat with the right leg.', 
  'Posiziona un blocco o rialzo a circa 30 cm da una panca piana. Siediti sulla panca e posiziona un manubrio sulla parte superiore della coscia sinistra, circa 7-8 cm sopra il ginocchio. Appoggia l''avampiede sinistro sul blocco: questa è la posizione di partenza. Espirando, solleva il tallone il più in alto possibile contraendo il polpaccio. Mantieni la contrazione per un secondo. Torna lentamente alla posizione iniziale, allungando il muscolo il più possibile. Ripeti per il numero di ripetizioni prescritte, quindi cambia gamba.', 
  'calves', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_One-Leg_Calf_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_One-Leg_Calf_Raise/1.jpg'], 
  NOW()
),
(
  '7b1d423c-8b56-47a3-bc68-b5c1a3f37d08', 
  'Dumbbell Shoulder Press', 
  'Dumbbell Shoulder Press', 
  'While holding a dumbbell in each hand, sit on a military press bench or utility bench that has back support. Place the dumbbells upright on top of your thighs.
Now raise the dumbbells to shoulder height one at a time using your thighs to help propel them up into position.
Make sure to rotate your wrists so that the palms of your hands are facing forward. This is your starting position.
Now, exhale and push the dumbbells upward until they touch at the top.
Then, after a brief pause at the top contracted position, slowly lower the weights back down to the starting position while inhaling.
Repeat for the recommended amount of repetitions.', 
  'Seduto su una panca con schienale (o panca per military press) e un manubrio in ogni mano, appoggia i manubri sulle cosce. Portali all''altezza delle spalle uno alla volta, usando la spinta delle cosce per facilitare il movimento. Ruota i polsi in modo che i palmi siano rivolti in avanti: questa è la posizione di partenza. Espira e spingi i manubri verso l''alto fino a farli toccare. Dopo una breve pausa in contrazione, scendi lentamente espirando fino alla posizione iniziale. Ripeti per le ripetizioni consigliate.', 
  'shoulders', 
  'triceps', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/1.jpg'], 
  NOW()
),
(
  '03bed35b-0551-4d71-bd30-d08c49c16001', 
  'Dumbbell Shrug', 
  'Dumbbell Shrug', 
  'Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides.
Lift the dumbbells by elevating the shoulders as high as possible while you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down.
Lower the dumbbells back to the original position.
Repeat for the recommended amount of repetitions.', 
  'In piedi, con la schiena dritta e un manubrio per mano (palmi rivolti verso il busto), braccia distese lungo i fianchi. Espirando, solleva i manubri elevando le spalle il più in alto possibile. Mantieni la contrazione per un secondo. Nota: le braccia devono rimanere sempre tese; evita di usare i bicipiti per sollevare il peso. Solo le spalle devono muoversi verticalmente. Abbassa i manubri nella posizione originale e ripeti.', 
  'traps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/1.jpg'], 
  NOW()
),
(
  '0c008743-4a33-4e77-82aa-1608282d6ae3', 
  'Dumbbell Side Bend', 
  'Dumbbell Side Bend', 
  'Stand up straight while holding a dumbbell on the left hand (palms facing the torso) as you have the right hand holding your waist. Your feet should be placed at shoulder width. This will be your starting position.
While keeping your back straight and your head up, bend only at the waist to the right as far as possible. Breathe in as you bend to the side. Then hold for a second and come back up to the starting position as you exhale. Tip: Keep the rest of the body stationary.
Now repeat the movement but bending to the left instead. Hold for a second and come back to the starting position.
Repeat for the recommended amount of repetitions and then change hands.', 
  'In piedi, con i piedi alla larghezza delle spalle, tieni un manubrio nella mano sinistra (palmo rivolto verso il busto) e la mano destra appoggiata sul fianco. Questa è la posizione di partenza. Mantenendo la schiena dritta e lo sguardo in avanti, fletti il busto verso destra il più possibile, inspirando durante il movimento. Mantieni la posizione per un secondo e torna su espirando. Nota: mantieni il resto del corpo immobile. Ripeti il movimento piegandoti a sinistra. Esegui il numero di ripetizioni consigliato e poi cambia mano.', 
  'abdominals', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Side_Bend/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Side_Bend/1.jpg'], 
  NOW()
),
(
  'e303f74e-bc2f-432c-898a-f6afd3f9aab0', 
  'Dumbbell Squat', 
  'Dumbbell Squat', 
  'Stand up straight while holding a dumbbell on each hand (palms facing the side of your legs).
Position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section.
Begin to slowly lower your torso by bending the knees as you maintain a straight posture with the head up. Continue down until your thighs are parallel to the floor. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise your torso as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'In piedi, con un manubrio in ogni mano (palmi rivolti verso le gambe). Posiziona i piedi alla larghezza delle spalle con le punte leggermente extra-ruotate. Mantieni la testa alta e la schiena dritta. Inizia a scendere lentamente flettendo le ginocchia, mantenendo il busto eretto. Scendi finché le cosce sono parallele al suolo. Nota: le ginocchia non devono superare la linea immaginaria perpendicolare alle punte dei piedi per evitare stress articolare. Risali espirando, spingendo principalmente sui talloni, fino alla posizione iniziale.', 
  'quadriceps', 
  'calves', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat/1.jpg'], 
  NOW()
),
(
  'fe37b4ca-0f37-4922-bf56-8fa2bf121b37', 
  'Dumbbell Squat To A Bench', 
  'Dumbbell Squat To A Bench', 
  'Stand up straight with a flat bench behind you while holding a dumbbell on each hand (palms facing the side of your legs).
Position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances discussed in the foot stances section.
Begin to slowly lower your torso by bending the knees as you maintain a straight posture with the head up. Continue down until you slightly touch the bench behind you. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor with the heel of your foot mainly as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'In piedi davanti a una panca, impugnando un manubrio per mano lungo i fianchi. Posiziona i piedi alla larghezza delle spalle con le punte leggermente extra-ruotate. Mantieni la testa alta e la schiena dritta. Scendi lentamente flettendo le ginocchia, mantenendo la postura eretta, finché non tocchi leggermente la panca dietro di te; inspira durante la discesa. Nota: le ginocchia non devono superare la linea delle punte dei piedi. Risali espirando, spingendo sui talloni, fino alla posizione iniziale.', 
  'quadriceps', 
  'calves', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat_To_A_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Squat_To_A_Bench/1.jpg'], 
  NOW()
),
(
  'a5b58782-32e8-41f2-b2db-002d94a89a50', 
  'Dumbbell Step Ups', 
  'Dumbbell Step Ups', 
  'Stand up straight while holding a dumbbell on each hand (palms facing the side of your legs).
Place the right foot on the elevated platform. Step on the platform by extending the hip and the knee of your right leg. Use the heel mainly to lift the rest of your body up and place the foot of the left leg on the platform as well. Breathe out as you execute the force required to come up.
Step down with the left leg by flexing the hip and knee of the right leg as you inhale. Return to the original standing position by placing the right foot of to next to the left foot on the initial position.
Repeat with the right leg for the recommended amount of repetitions and then perform with the left leg.', 
  'In piedi, impugnando un manubrio per mano lungo i fianchi. Appoggia il piede destro sulla piattaforma rialzata. Sali sulla piattaforma estendendo anca e ginocchio della gamba destra, usando la forza del tallone per sollevare il corpo e portare anche il piede sinistro sulla piattaforma. Espira durante lo sforzo. Scendi con il piede sinistro flettendo anca e ginocchio destro mentre inspiri. Torna nella posizione di partenza con entrambi i piedi a terra. Ripeti con la gamba destra per le ripetizioni consigliate, poi esegui con la sinistra.', 
  'quadriceps', 
  'calves', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/1.jpg'], 
  NOW()
),
(
  'de16b530-6d70-4eaa-9e42-9df62c8b491d', 
  'Dumbbell Tricep Extension -Pronated Grip', 
  'Dumbbell Tricep Extension - Pronated Grip', 
  'Lie down on a flat bench holding two dumbbells directly above your shoulders. Your arms should be fully extended and form a 90 degree angle from your torso and the floor.
The palms of your hands should be facing forward, and your elbows should be tucked in. This will be your starting position.
Now, inhale and slowly lower the dumbbells until they are near your ears. Be sure to keep your upper arms stationary and your elbows tucked in.
Then, exhale and use your triceps to return the weight to the starting position.', 
  'Sdraiato su una panca piana, tieni due manubri direttamente sopra le spalle. Le braccia devono essere completamente distese e formare un angolo di 90 gradi rispetto al busto e al pavimento. I palmi devono essere rivolti in avanti e i gomiti chiusi verso l''interno; questa è la posizione di partenza. Inspira e abbassa lentamente i manubri finché non sono vicini alle orecchie, mantenendo le braccia ferme e i gomiti stretti. Espira e usa i tricipiti per riportare i pesi nella posizione iniziale.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Tricep_Extension_-Pronated_Grip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Tricep_Extension_-Pronated_Grip/1.jpg'], 
  NOW()
),
(
  '6a751abb-f6bf-433a-b80e-3e2675d6c8c8', 
  'Dynamic Back Stretch', 
  'Stretching dinamico per la schiena', 
  'Stand with your feet shoulder width apart. This will be your starting position.
Keeping your arms straight, swing them straight up in front of you 5-10 times, increasing the range of motion each time until your arms are above your head.', 
  'In piedi, con i piedi alla larghezza delle spalle. Questa è la posizione di partenza. Tenendo le braccia tese, falle oscillare verso l''alto davanti a te per 5-10 volte, aumentando ogni volta l''ampiezza del movimento finché le braccia non arrivano sopra la testa.', 
  'lats', 
  NULL, 
  NULL, 
  'beginner', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dynamic_Back_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dynamic_Back_Stretch/1.jpg'], 
  NOW()
),
(
  '450ed420-bef1-4389-be30-c5318c4763d9', 
  'Dynamic Chest Stretch', 
  'Stretching dinamico per il petto', 
  'Stand with your hands together, arms extended directly in front of you. This will be your starting position.
Keeping your arms straight, quickly move your arms back as far as possible and back in again, similar to an exaggerated clapping motion. Repeat 5-10 times, increasing speed as you do so.', 
  'In piedi, con le mani unite e le braccia distese direttamente davanti a te. Questa è la posizione di partenza. Tenendo le braccia tese, muovile rapidamente all''indietro il più possibile e riportale nella posizione iniziale, come in un movimento di battito di mani esagerato. Ripeti 5-10 volte, aumentando la velocità durante l''esecuzione.', 
  'chest', 
  'middle back', 
  NULL, 
  'beginner', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dynamic_Chest_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dynamic_Chest_Stretch/1.jpg'], 
  NOW()
),
(
  '1dd58d27-55bd-4ddc-b252-587e24b6ea7d', 
  'EZ-Bar Curl', 
  'Curl con bilanciere EZ', 
  'Stand up straight while holding an EZ curl bar at the wide outer handle. The palms of your hands should be facing forward and slightly tilted inward due to the shape of the bar. Keep your elbows close to your torso. This will be your starting position.
Now, while keeping your upper arms stationary, exhale and curl the weights forward while contracting the biceps. Focus on only moving your forearms.
Continue to raise the weight until your biceps are fully contracted and the bar is at shoulder level. Hold the top contracted position for a moment and squeeze the biceps.
Then inhale and slowly lower the bar back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'In piedi, impugna un bilanciere EZ sulla parte esterna più larga. I palmi delle mani devono essere rivolti in avanti e leggermente inclinati verso l''interno a causa della forma del bilanciere. Tieni i gomiti vicini al busto. Questa è la posizione di partenza. Ora, mantenendo le braccia ferme, espira e solleva il bilanciere flettendo i bicipiti. Concentrati sul muovere solo gli avambracci. Continua a sollevare il peso finché i bicipiti non sono completamente contratti e il bilanciere è all''altezza delle spalle. Mantieni la posizione di massima contrazione per un istante, strizzando i bicipiti. Quindi inspira e abbassa lentamente il bilanciere fino alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  NULL, 
  'e-z curl bar', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/EZ-Bar_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/EZ-Bar_Curl/1.jpg'], 
  NOW()
),
(
  '4f342ac2-a427-45ff-a139-86599d11f3b9', 
  'EZ-Bar Skullcrusher', 
  'Skullcrusher con bilanciere EZ', 
  'Using a close grip, lift the EZ bar and hold it with your elbows in as you lie on the bench. Your arms should be perpendicular to the floor. This will be your starting position.
Keeping the upper arms stationary, lower the bar by allowing the elbows to flex. Inhale as you perform this portion of the movement. Pause once the bar is directly above the forehead.
Lift the bar back to the starting position by extending the elbow and exhaling.
Repeat.', 
  'Utilizzando un''impugnatura stretta, solleva il bilanciere EZ e tienilo con i gomiti stretti mentre sei sdraiato su una panca. Le braccia devono essere perpendicolari al pavimento. Questa è la posizione di partenza. Mantenendo la parte superiore delle braccia ferma, abbassa il bilanciere flettendo i gomiti. Inspira durante questa fase del movimento. Fermati quando il bilanciere è direttamente sopra la fronte. Solleva nuovamente il bilanciere nella posizione di partenza estendendo il gomito ed espirando. Ripeti.', 
  'triceps', 
  'forearms', 
  'e-z curl bar', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/EZ-Bar_Skullcrusher/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/EZ-Bar_Skullcrusher/1.jpg'], 
  NOW()
),
(
  'f69063b2-f48d-46ae-94ee-1f045616c2c9', 
  'Elbow Circles', 
  'Circonduzioni dei gomiti', 
  'Sit or stand with your feet slightly apart.
Place your hands on your shoulders with your elbows at shoulder level and pointing out.
Slowly make a circle with your elbows. Breathe out as you start the circle and breathe in as you complete the circle.', 
  'Seduto o in piedi con i piedi leggermente separati. Posiziona le mani sulle spalle con i gomiti all''altezza delle spalle e rivolti verso l''esterno. Disegna lentamente un cerchio con i gomiti. Espira all''inizio del cerchio e inspira mentre lo completi.', 
  'shoulders', 
  'traps', 
  NULL, 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elbow_Circles/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elbow_Circles/1.jpg'], 
  NOW()
),
(
  'e651c70d-5204-475e-a959-11c44e290816', 
  'Elbow to Knee', 
  'Gomito al ginocchio', 
  'Lie on the floor, crossing your right leg across your bent left knee. Clasp your hands behind your head, beginning with your shoulder blades on the ground. This will be your starting position.
Perform the motion by flexing the spine and rotating your torso to bring the left elbow to the right knee.
Return to the starting position and repeat the movement for the desired number of repetitions before switching sides.', 
  'Sdraiato sul pavimento, incrocia la gamba destra sopra il ginocchio sinistro piegato. Incrocia le mani dietro la nuca, partendo con le scapole a contatto con il suolo. Questa è la posizione di partenza. Esegui il movimento flettendo la colonna vertebrale e ruotando il busto per portare il gomito sinistro verso il ginocchio destro. Torna alla posizione di partenza e ripeti il movimento per il numero di ripetizioni desiderato prima di cambiare lato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elbow_to_Knee/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elbow_to_Knee/1.jpg'], 
  NOW()
),
(
  '91b61acd-62d2-4e1b-bbb7-92d9b831aa74', 
  'Elbows Back', 
  'Gomiti all''indietro', 
  'Stand up straight.
Place both hands on your lower back, fingers pointing downward and elbows out.
Then gently pull your elbows back aiming to touch them together.', 
  'In piedi, in posizione eretta. Metti entrambe le mani sulla parte bassa della schiena, con le dita rivolte verso il basso e i gomiti verso l''esterno. Quindi, tira delicatamente i gomiti all''indietro cercando di farli toccare tra loro.', 
  'chest', 
  'shoulders', 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elbows_Back/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elbows_Back/1.jpg'], 
  NOW()
),
(
  '7f682af0-21ac-428c-91bd-33d2c299ac35', 
  'Elevated Back Lunge', 
  'Affondo posteriore rialzato', 
  'Position a bar onto a rack at shoulder height loaded to an appropriate weight. Place a short, raised platform behind you.
Rack the bar onto your upper back, keeping your back arched and tight. Step onto your raised platform with both feet. This will be your starting position.
Begin by stepping backwards with one leg. Descend by flexing your hips and knees until your knee touches the floor.
Pause, and extend through the hips and knees to rise up, returning all the way to the starting position before alternating.', 
  'Posiziona un bilanciere su un rack all''altezza delle spalle caricato con un peso adeguato. Posiziona una pedana bassa e rialzata dietro di te. Carica il bilanciere sulla parte alta della schiena, mantenendo la schiena arcuata e contratta. Sali sulla pedana con entrambi i piedi. Questa è la posizione di partenza. Inizia facendo un passo indietro con una gamba. Scendi flettendo fianchi e ginocchia finché il ginocchio non tocca il pavimento. Fermati, quindi estendi fianchi e ginocchia per risalire, tornando completamente alla posizione di partenza prima di alternare le gambe.', 
  'quadriceps', 
  'glutes', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Back_Lunge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Back_Lunge/1.jpg'], 
  NOW()
),
(
  '48cbe4dc-5ea8-4e2e-a018-1abbdbf78357', 
  'Elevated Cable Rows', 
  'Rematore al cavo rialzato', 
  'Get a platform of some sort (it can be an aerobics or calf raise platform) that is around 4-6 inches in height.
Place it on the seat of the cable row machine.
Sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked.
Lean over as you keep the natural alignment of your back and grab the V-bar handles.
With your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise.
Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in.
Repeat for the recommended amount of repetitions.', 
  'Procurati una pedana (può essere uno step per aerobica o un rialzo per polpacci) alta circa 10-15 cm. Posizionala sul sedile della macchina per il rematore (cable row). Siediti sulla macchina e appoggia i piedi sulla pedana anteriore o sulla barra di supporto, assicurandoti che le ginocchia siano leggermente flesse e non bloccate. Inclinati in avanti mantenendo l''allineamento naturale della schiena e afferra la maniglia a V. Con le braccia tese, tira indietro finché il busto non forma un angolo di 90 gradi con le gambe. La schiena dovrebbe essere leggermente arcuata e il petto in fuori. Dovresti sentire un buon allungamento dei dorsali mentre tieni la barra davanti a te. Questa è la posizione di partenza. Mantenendo il busto fermo, tira le maniglie verso il busto tenendo le braccia vicine al corpo finché non tocchi gli addominali. Espira durante il movimento. In quel punto dovresti contrarre intensamente i muscoli della schiena. Mantieni la contrazione per un secondo e torna lentamente alla posizione originale espirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'lats', 
  'middle back', 
  'cable', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Cable_Rows/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Cable_Rows/1.jpg'], 
  NOW()
),
(
  'c7de8e80-d1d0-49c3-992b-ec667c37f9f7', 
  'Elliptical Trainer', 
  'Ellittica', 
  'To begin, step onto the elliptical and select the desired option from the menu. Most ellipticals have a manual setting, or you can select a program to run. Typically, you can enter your age and weight to estimate the amount of calories burned during exercise. Elevation can be adjusted to change the intensity of the workout.
The handles can be used to monitor your heart rate to help you stay at an appropriate intensity.', 
  'Per iniziare, sali sull''ellittica e seleziona l''opzione desiderata dal menu. La maggior parte delle ellittiche ha un''impostazione manuale, oppure è possibile selezionare un programma preimpostato. In genere, è possibile inserire età e peso per stimare le calorie bruciate durante l''esercizio. L''elevazione può essere regolata per modificare l''intensità dell''allenamento. Le maniglie possono essere utilizzate per monitorare la frequenza cardiaca e aiutarti a mantenere l''intensità corretta.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'intermediate', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elliptical_Trainer/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elliptical_Trainer/1.jpg'], 
  NOW()
),
(
  '2d54f928-2469-4f20-b8cc-06bc53c18146', 
  'Exercise Ball Crunch', 
  'Crunch su palla fitness', 
  'Lie on an exercise ball with your lower back curvature pressed against the spherical surface of the ball. Your feet should be bent at the knee and pressed firmly against the floor. The upper torso should be hanging off the top of the ball. The arms should either be kept alongside the body or crossed on top of your chest as these positions avoid neck strains (as opposed to the hands behind the back of the head position).
Lower your torso into a stretch position keeping the neck stationary at all times. This will be your starting position.
With the hips stationary, flex the waist by contracting the abdominals and curl the shoulders and trunk upward until you feel a nice contraction on your abdominals. The arms should simply slide up the side of your legs if you have them at the side or just stay on top of your chest if you have them crossed. The lower back should always stay in contact with the ball. Exhale as you perform this movement and hold the contraction for a second.
As you inhale, go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su una palla fitness appoggiando la zona lombare alla superficie sferica. I piedi devono essere ben saldi a terra con le ginocchia flesse. La parte superiore del busto deve sporgere oltre la sommità della palla. Tieni le braccia lungo i fianchi o incrociate sul petto per evitare tensioni al collo (evita di mettere le mani dietro la nuca). Abbassa il busto in posizione di allungamento, mantenendo il collo fermo: questa è la posizione di partenza. Con le anche ferme, fletti la vita contraendo gli addominali e solleva spalle e busto finché non senti una contrazione efficace. Se le braccia sono lungo i fianchi, falle scivolare verso le gambe; se sono incrociate, tienile sul petto. La zona lombare deve rimanere sempre in contatto con la palla. Espira durante il movimento e mantieni la contrazione per un secondo. Inspira tornando nella posizione iniziale. Ripeti per il numero di volte raccomandato.', 
  'abdominals', 
  NULL, 
  'exercise ball', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Exercise_Ball_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Exercise_Ball_Crunch/1.jpg'], 
  NOW()
),
(
  '83837999-ebfc-43f4-bf9c-c539c31b0514', 
  'Exercise Ball Pull-In', 
  'Pull-In su palla fitness', 
  'Place an exercise ball nearby and lay on the floor in front of it with your hands on the floor shoulder width apart in a push-up position.
Now place your lower shins on top of an exercise ball. Tip: At this point your legs should be fully extended with the shins on top of the ball and the upper body should be in a push-up type of position being supported by your two extended arms in front of you. This will be your starting position.
While keeping your back completely straight and the upper body stationary, pull your knees in towards your chest as you exhale, allowing the ball to roll forward under your ankles. Squeeze your abs and hold that position for a second.
Now slowly straighten your legs, rolling the ball back to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Posiziona una palla fitness davanti a te e mettiti in posizione di piegamento (push-up) con le mani a terra alla larghezza delle spalle. Appoggia la parte inferiore degli stinchi sulla palla. Suggerimento: le gambe devono essere completamente distese e il corpo deve essere sostenuto dalle braccia tese in avanti. Questa è la posizione di partenza. Mantenendo la schiena dritta e il busto immobile, espira e porta le ginocchia verso il petto, lasciando che la palla rotoli in avanti sotto le caviglie. Contrai gli addominali e tieni la posizione per un secondo. Inspira e distendi lentamente le gambe, facendo rotolare la palla indietro verso la posizione iniziale. Ripeti per il numero di volte raccomandato.', 
  'abdominals', 
  NULL, 
  'exercise ball', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Exercise_Ball_Pull-In/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Exercise_Ball_Pull-In/1.jpg'], 
  NOW()
),
(
  '8be56006-5791-4065-962a-3d467554f94d', 
  'Extended Range One-Arm Kettlebell Floor Press', 
  'Extended Range One-Arm Kettlebell Floor Press', 
  'Lie on the floor and position a kettlebell for one arm to press. The kettlebell should be held by the handle. The leg on the same side that you are pressing should be bent, with the knee crossing over the midline of the body.
Press the kettlebell by extending the elbow and adducting the arm, pressing it above your body. Return to the starting position.', 
  'Sdraiati a terra e posiziona una kettlebell in modo da poterla spingere con un braccio. Afferra la kettlebell per l''impugnatura. La gamba sullo stesso lato del braccio che lavora deve essere flessa, con il ginocchio incrociato oltre la linea mediana del corpo. Spingi la kettlebell estendendo il gomito e adducendo il braccio verso l''alto, sopra il corpo. Torna alla posizione di partenza.', 
  'chest', 
  'shoulders', 
  'kettlebells', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Extended_Range_One-Arm_Kettlebell_Floor_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Extended_Range_One-Arm_Kettlebell_Floor_Press/1.jpg'], 
  NOW()
),
(
  '63e92c5b-745f-49b8-944c-a5a502fee790', 
  'External Rotation', 
  'Rotazione esterna', 
  'Lie sideways on a flat bench with one arm holding a dumbbell and the other hand on top of the bench folded so that you can rest your head on it.
Bend the elbows of the arm holding the dumbbell so that it creates a 90-degree angle between the upper arm and the forearm. Tip: Keep the arm parallel to your torso.
Now bend the elbow while keeping the upper arm stationary. In this manner, the forearm will be parallel to the floor and perpendicular to your torso (Tip: So the forearm will be directly in front of you). The upper arm will be stationary by your torso and should be parallel to the floor (aligned with your torso at all times). This will be your starting position.
As you breathe out, externally rotate your forearm so that the dumbbell is lifted up in a semicircle motion as you maintain the 90 degree angle bend between the upper arms and the forearm. You will continue this external rotation until the forearm is perpendicular to the floor and the torso pointing towards the ceiling. At this point you will hold the contraction for a second.
As you breathe in, slowly go back to the starting position.
Repeat for the recommended amount of repetitions and then switch to the other arm.', 
  'Sdraiati di fianco su una panca piana, tenendo un manubrio in una mano; appoggia la testa sull''altra mano piegata sulla panca. Piega il gomito del braccio che regge il manubrio creando un angolo di 90 gradi tra braccio e avambraccio. Suggerimento: tieni il braccio parallelo al busto. Mantenendo il braccio fermo, l''avambraccio deve essere parallelo al pavimento e perpendicolare al busto (puntato davanti a te). Questa è la posizione di partenza. Espirando, ruota esternamente l''avambraccio sollevando il manubrio in un movimento semicircolare, mantenendo l''angolo di 90 gradi. Continua la rotazione fino a quando l''avambraccio è perpendicolare al pavimento e rivolto verso il soffitto. Mantieni la contrazione per un secondo. Inspira tornando lentamente alla posizione iniziale. Ripeti per le ripetizioni previste, poi cambia braccio.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation/1.jpg'], 
  NOW()
),
(
  '590c4aa2-0a5c-4667-aa6a-845515b85716', 
  'External Rotation with Band', 
  'Rotazione esterna con elastico', 
  'Choke the band around a post. The band should be at the same height as your elbow. Stand with your left side to the band a couple of feet away.
Grasp the end of the band with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position.
With your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching across the front of your torso. This will be your starting position.
Execute the movement by rotating your arm in a backhand motion, keeping your elbow in place.
Continue as far as you are able, pause, and then return to the starting position.', 
  'Fissa l''elastico a un supporto all''altezza del gomito. Stai in piedi con il fianco sinistro rivolto verso il punto di ancoraggio, a breve distanza. Afferra l''estremità dell''elastico con la mano destra e tieni il gomito premuto saldamente contro il fianco. Consigliamo di tenere un cuscinetto o un rullo di gommapiuma tra il gomito e il fianco per mantenerlo in posizione. Con il braccio in posizione, piega il gomito a 90 gradi in modo che la mano passi davanti al busto. Questa è la posizione di partenza. Esegui il movimento ruotando il braccio verso l''esterno, mantenendo il gomito fermo. Continua finché possibile, fai una pausa e torna alla posizione iniziale.', 
  'shoulders', 
  NULL, 
  'bands', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Band/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Band/1.jpg'], 
  NOW()
),
(
  '945ce753-d67c-4a4d-8404-c7ff17aac6de', 
  'External Rotation with Cable', 
  'Rotazione esterna ai cavi', 
  'Adjust the cable to the same height as your elbow. Stand with your left side to the band a couple of feet away.
Grasp the handle with your right hand, and keep your elbow pressed firmly to your side. We recommend you hold a pad or foam roll in place with your elbow to keep it firmly in position.
With your upper arm in position, your elbow should be flexed to 90 degrees with your hand reaching across the front of your torso. This will be your starting position.
Execute the movement by rotating your arm in a backhand motion, keeping your elbow in place.', 
  'Regola il cavo all''altezza del gomito. Stai in piedi con il fianco rivolto verso la macchina a breve distanza. Afferra la maniglia con la mano opposta e tieni il gomito premuto saldamente contro il fianco. Suggeriamo di utilizzare un cuscinetto o un rullo per mantenere il gomito in posizione. Con il braccio fermo, il gomito deve essere flesso a 90 gradi con la mano davanti al torso. Questa è la posizione di partenza. Esegui il movimento ruotando il braccio verso l''esterno, mantenendo il gomito fisso.', 
  'shoulders', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Cable/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/External_Rotation_with_Cable/1.jpg'], 
  NOW()
),
(
  '81662871-ad0e-4569-9592-ffa4c373a218', 
  'Face Pull', 
  'Face Pull', 
  'Facing a high pulley with a rope or dual handles attached, pull the weight directly towards your face, separating your hands as you do so. Keep your upper arms parallel to the ground.', 
  'Di fronte a una carrucola alta dotata di corda o doppia maniglia, tira il peso direttamente verso il viso, separando le mani durante il movimento. Mantieni le braccia parallele al suolo.', 
  'shoulders', 
  'middle back', 
  'cable', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/1.jpg'], 
  NOW()
),
(
  '5861033f-29e2-475e-8ff7-14aad0439101', 
  'Farmer''s Walk', 
  'Farmer''s Walk (Camminata del contadino)', 
  'There are various implements that can be used for the farmers walk. These can also be performed with heavy dumbbells or short bars if these implements aren''t available. Begin by standing between the implements.
After gripping the handles, lift them up by driving through your heels, keeping your back straight and your head up.
Walk taking short, quick steps, and don''t forget to breathe. Move for a given distance, typically 50-100 feet, as fast as possible.', 
  'Esistono vari attrezzi specifici per la Farmer''s Walk, ma in alternativa si possono usare manubri pesanti o bilancieri corti. Inizia posizionandoti tra gli attrezzi. Afferra le impugnature, sollevale facendo forza sui talloni, mantenendo la schiena dritta e la testa alta. Cammina facendo passi brevi e veloci, senza dimenticare di respirare. Percorri la distanza stabilita, tipicamente 15-30 metri, il più velocemente possibile.', 
  'forearms', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Farmers_Walk/1.jpg'], 
  NOW()
),
(
  'd38ebefc-21a8-4b73-a8be-0145ca8237c8', 
  'Fast Skipping', 
  'Skip veloce', 
  'Start in a relaxed position with one leg slightly forward. This will be your starting position.
Skip by executing a step-hop pattern of right-right-step to left-left-step, and so on, alternating back and forth.
Perform fast skips by maintaining close contact with the ground and reduce air time, moving as quickly as possible.', 
  'Inizia in una posizione rilassata con una gamba leggermente avanzata. Esegui il movimento combinando un passo e un saltello alternando: destra-destra-passo, sinistra-sinistra-passo. Esegui lo skip mantenendo un contatto rapido con il terreno, riducendo il tempo di sospensione e muovendoti il più velocemente possibile.', 
  'quadriceps', 
  'abductors', 
  'body only', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Fast_Skipping/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Fast_Skipping/1.jpg'], 
  NOW()
),
(
  'b55d75a2-1e1d-46ef-a960-a6efc28a8aee', 
  'Finger Curls', 
  'Finger Curls (Flessioni delle dita)', 
  'Hold a barbell with both hands and your palms facing up; hands spaced about shoulder width.
Place your feet flat on the floor, at a distance that is slightly wider than shoulder width apart. This will be your starting position.
Lower the bar as far as possible by extending the fingers. Allowing the bar to roll down the hands, catch the bar with the final joint in the fingers.
Now curl bar up as high as possible by closing your hands while exhaling. Hold the contraction at the top.', 
  'Afferra un bilanciere con entrambe le mani, palmi rivolti verso l''alto; le mani devono essere distanziate quanto la larghezza delle spalle. I piedi devono essere ben piantati a terra, leggermente più larghi delle spalle. Questa è la posizione di partenza. Abbassa il bilanciere il più possibile estendendo le dita. Lascia che la sbarra rotoli verso le punte delle dita, quindi bloccala con l''ultima falange. Ora fletti le dita verso l''alto il più possibile chiudendo le mani mentre espiri. Mantieni la contrazione nella parte alta.', 
  'forearms', 
  NULL, 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Finger_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Finger_Curls/1.jpg'], 
  NOW()
),
(
  '7d14e384-65ea-4306-9ff0-95fddf8b2050', 
  'Flat Bench Cable Flyes', 
  'Croci ai cavi su panca piana', 
  'Position a flat bench between two low pulleys so that when you are laying on it, your chest will be lined up with the cable pulleys.
Lay flat on the bench and keep your feet on the ground.
Have someone hand you the handles on each hand. You will grab each single handle attachment with a palms up grip.
Extend your arms by your side with a slight bend on your elbows. Tip: You will keep this bend constant through the whole movement. Your arms should be parallel to the floor. This is your starting position.
Now start lifting the arms in a semi-circle motion directly in front of you by pulling the cables together until both hands meet at the top of the movement. Squeeze your chest as you perform this motion and breathe out during this movement. Also, hold the contraction for a second at the top. Tip: When performed correctly, at the top position of this movement, your arms should be perpendicular to your torso and the floor touching above your chest.
Slowly come back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Posiziona una panca piana tra due carrucole basse in modo che, sdraiandoti, il petto sia allineato con i cavi. Sdraiati sulla panca con i piedi ben piantati a terra. Fatti passare le maniglie, una per mano. Afferra ogni maniglia con il palmo rivolto verso l''alto. Estendi le braccia lateralmente con una leggera flessione dei gomiti. Consiglio: mantieni questa flessione costante per tutto il movimento. Le braccia devono essere parallele al pavimento: questa è la posizione di partenza. Inizia a sollevare le braccia con un movimento a semicerchio direttamente davanti a te, tirando i cavi fino a far incontrare le mani al centro. Contrai i pettorali durante il movimento ed espira. Mantieni la contrazione per un secondo nella posizione di massima chiusura. Consiglio: se eseguito correttamente, nella posizione finale le braccia devono essere perpendicolari al busto e al pavimento, convergendo sopra il petto. Torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'chest', 
  NULL, 
  'cable', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Cable_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Cable_Flyes/1.jpg'], 
  NOW()
),
(
  'c950bc13-b526-48b6-a3ba-5b2933ad12c1', 
  'Flat Bench Leg Pull-In', 
  'Leg pull-in su panca piana', 
  'Lie on an exercise mat or a flat bench with your legs off the end.
Place your hands either under your glutes with your palms down or by the sides holding on to the bench (or with palms down by the side on an exercise mat). Also extend your legs straight out. This will be your starting position.
Bend your knees and pull your upper thighs into your midsection as you breathe out. Continue this movement until your knees are near your chest. Hold the contracted position for a second.
As you breathe in, slowly return to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su un tappetino o su una panca piana con le gambe oltre il bordo. Posiziona le mani sotto i glutei con i palmi rivolti verso il basso oppure ai lati della panca (o del tappetino) per fare presa. Estendi le gambe in avanti: questa è la posizione di partenza. Fletti le ginocchia e tira le cosce verso l''addome espirando. Continua il movimento finché le ginocchia non sono vicine al petto. Mantieni la posizione di contrazione per un secondo. Inspirando, torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Leg_Pull-In/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Leg_Pull-In/1.jpg'], 
  NOW()
),
(
  '14be412f-dd50-465b-bd2c-89b26f45491a', 
  'Flat Bench Lying Leg Raise', 
  'Leg raise sdraiato su panca piana', 
  'Lie with your back flat on a bench and your legs extended in front of you off the end.
Place your hands either under your glutes with your palms down or by the sides holding on to the bench. This will be your starting position.
As you keep your legs extended, straight as possible with your knees slightly bent but locked raise your legs until they make a 90-degree angle with the floor. Exhale as you perform this portion of the movement and hold the contraction at the top for a second.
Now, as you inhale, slowly lower your legs back down to the starting position.', 
  'Sdraiati su una panca piana con le gambe estese oltre il bordo. Posiziona le mani sotto i glutei con i palmi verso il basso oppure afferra i bordi della panca. Questa è la posizione di partenza. Mantieni le gambe tese, con le ginocchia leggermente flesse ma bloccate, e sollevale finché non formano un angolo di 90 gradi con il pavimento. Espira durante questa fase del movimento e mantieni la contrazione nel punto più alto per un secondo. Inspirando, abbassa lentamente le gambe fino a tornare alla posizione di partenza.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/1.jpg'], 
  NOW()
),
(
  'a49ac857-9a7e-4be3-afa1-f898d914b247', 
  'Flexor Incline Dumbbell Curls', 
  'Curl con manubri su panca inclinata', 
  'Hold the dumbbell towards the side farther from you so that you have more weight on the side closest to you. (This can be done for a good effect on all bicep dumbbell exercises). Now do a normal incline dumbbell curl, but keep your wrists as far back as possible so as to neutralize any stress that is placed on them.
Sit on an incline bench that is angled at 45-degrees while holding a dumbbell on each hand.
Let your arms hang down on your sides, with the elbows in, and turn the palms of your hands forward with the thumbs pointing away from the body. Tip: You will keep this hand position throughout the movement as there should not be any twisting of the hands as they come up. This will be your starting position.
Curl up the two dumbbells at the same time until your biceps are fully contracted and exhale. Tip: Do not swing the arms or use momentum. Keep a controlled motion at all times. Hold the contracted position for a second at the top.
As you inhale, slowly go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Impugna il manubrio verso l''estremità esterna per spostare il carico sulla parte più vicina al corpo (tecnica efficace per tutti i curl con manubri). Esegui un normale curl su panca inclinata, mantenendo i polsi il più possibile estesi all''indietro per neutralizzare lo stress articolare. Siediti su una panca inclinata a 45 gradi con un manubrio per mano. Lascia le braccia distese lungo i fianchi, con i gomiti stretti e i palmi rivolti in avanti, pollici verso l''esterno. Consiglio: mantieni questa posizione delle mani per tutta l''esecuzione, senza ruotare i polsi durante la salita. Questa è la posizione di partenza. Solleva entrambi i manubri simultaneamente fino alla massima contrazione dei bicipiti ed espira. Consiglio: non slanciare le braccia né usare lo slancio. Mantieni un movimento controllato in ogni fase. Trattieni la posizione di contrazione per un secondo in alto. Inspira mentre torni lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flexor_Incline_Dumbbell_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flexor_Incline_Dumbbell_Curls/1.jpg'], 
  NOW()
),
(
  '26f140ee-d006-4983-ba4f-d562f53f09b8', 
  'Floor Glute-Ham Raise', 
  'Floor Glute-Ham Raise', 
  'You can use a partner for this exercise or brace your feet under something stable.
Begin on your knees with your upper legs and torso upright. If using a partner, they will firmly hold your feet to keep you in position. This will be your starting position.
Lower yourself by extending at the knee, taking care to NOT flex the hips as you go forward.
Place your hands in front of you as you reach the floor. This movement is very difficult and you may be unable to do it unaided. Use your arms to lightly push off the floor to aid your return to the starting position.', 
  'Puoi farti assistere da un partner o bloccare i piedi sotto un supporto stabile. Inizia in ginocchio con il busto eretto. Se ti assiste un partner, questi dovrà tenere saldamente i tuoi piedi. Questa è la posizione di partenza. Abbassati estendendo le ginocchia, facendo attenzione a NON flettere le anche mentre ti sposti in avanti. Poggia le mani a terra quando le raggiungi. Questo esercizio è molto impegnativo e potresti non riuscire a eseguirlo senza aiuto. Usa le braccia per spingere leggermente sul pavimento e facilitare il ritorno alla posizione iniziale.', 
  'hamstrings', 
  'calves', 
  NULL, 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Glute-Ham_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Glute-Ham_Raise/1.jpg'], 
  NOW()
),
(
  'e0718009-ca85-4b56-a515-1f404dbfbaed', 
  'Floor Press', 
  'Floor Press', 
  'Adjust the j-hooks so they are at the appropriate height to rack the bar. Begin lying on the floor with your head near the end of a power rack. Keeping your shoulder blades pulled together; pull the bar off of the hooks.
Lower the bar towards the bottom of your chest or upper stomach, squeezing the bar and attempting to pull it apart as you do so. Ensure that you tuck your elbows throughout the movement. Lower the bar until your upper arm contacts the ground and pause, preventing any slamming or bouncing of the weight.
Press the bar back up as fast as you can, keeping the bar, your wrists, and elbows in line as you do so.', 
  'Regola i ganci del rack all''altezza corretta. Sdraiati sul pavimento con la testa vicino all''estremità di un power rack. Con le scapole addotte, stacca il bilanciere dai ganci. Abbassa il bilanciere verso la parte bassa del petto o la parte alta dell''addome, stringendo la sbarra come se volessi spezzarla. Assicurati di tenere i gomiti vicini al busto durante il movimento. Abbassa il bilanciere fino a quando le braccia toccano terra e fai una pausa, evitando di far rimbalzare o sbattere il peso. Spingi il bilanciere verso l''alto il più velocemente possibile, mantenendo allineati bilanciere, polsi e gomiti.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Press/1.jpg'], 
  NOW()
),
(
  '676ebfbf-d308-47c5-b7c8-5a3c9cb293ea', 
  'Floor Press with Chains', 
  'Floor Press con catene', 
  'Adjust the j-hooks so they are at the appropriate height to rack the bar. For this exercise, drape the chains directly over the end of the bar, trying to keep the ends away from the plates.
Begin lying on the floor with your head near the end of a power rack. Keeping your shoulder blades pulled together, pull the bar off of the hooks.
Lower the bar towards the bottom of your chest or upper stomach, squeezing the bar and attempting to pull it apart as you do so. Ensure that you tuck your elbows throughout the movement. Lower the bar until your upper arm contacts the ground and pause, preventing any slamming or bouncing of the weight.
Press the bar back up as fast as you can, keeping the bar, your wrists, and elbows in line as you do so.', 
  'Regola i ganci del rack all''altezza corretta. Per questo esercizio, fai passare le catene direttamente sulle estremità del bilanciere, evitando che le estremità tocchino i dischi. Sdraiati sul pavimento con la testa vicino all''estremità di un power rack. Con le scapole addotte, stacca il bilanciere dai ganci. Abbassa il bilanciere verso la parte bassa del petto o la parte alta dell''addome, stringendo la sbarra come se volessi spezzarla. Assicurati di tenere i gomiti vicini al busto. Abbassa il bilanciere fino a quando le braccia toccano terra e fai una pausa, evitando di far rimbalzare il peso. Spingi il bilanciere verso l''alto il più velocemente possibile, mantenendo allineati bilanciere, polsi e gomiti.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Press_with_Chains/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Floor_Press_with_Chains/1.jpg'], 
  NOW()
),
(
  '024384d4-b201-49db-b5f2-a2a99ee2fa3a', 
  'Flutter Kicks', 
  'Flutter Kicks (su panca)', 
  'On a flat bench lie facedown with the hips on the edge of the bench, the legs straight with toes high off the floor and with the arms on top of the bench holding on to the front edge.
Squeeze your glutes and hamstrings and straighten the legs until they are level with the hips. This will be your starting position.
Start the movement by lifting the left leg higher than the right leg.
Then lower the left leg as you lift the right leg.
Continue alternating in this manner (as though you are doing a flutter kick in water) until you have done the recommended amount of repetitions for each leg. Make sure that you keep a controlled movement at all times. Tip: You will breathe normally as you perform this movement.', 
  'Sdraiati a pancia in giù su una panca piana con le anche sul bordo; le gambe devono essere dritte, sollevate dal pavimento, e le braccia devono afferrare il bordo anteriore della panca. Contrai glutei e femorali e allinea le gambe con il bacino: questa è la posizione di partenza. Inizia il movimento sollevando la gamba sinistra più in alto della destra. Quindi abbassa la sinistra e solleva la destra. Continua ad alternare (come nel movimento delle gambe nel nuoto) fino a completare le ripetizioni consigliate per gamba. Mantieni un movimento controllato. Consiglio: respira normalmente durante l''esecuzione.', 
  'glutes', 
  'hamstrings', 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flutter_Kicks/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flutter_Kicks/1.jpg'], 
  NOW()
),
(
  '05300ce9-61c8-479d-94e6-2644b95ea870', 
  'Foot-SMR', 
  'Rilascio miofasciale (SMR) del piede', 
  'This exercise stretches the fascia of the muscles in the feet. Start off seated with your shoes removed. Using a foot roller or a similar object, such as a small section of pvc pipe, place your foot against the roller across the arch of your foot. This will be your starting position.
Press down firmly, rolling across the arch of your foot. Hold for 10-30 seconds, and then switch feet.', 
  'Questo esercizio distende la fascia plantare. Siediti e togliti le scarpe. Utilizzando un rullo per piedi o un oggetto simile, come un piccolo pezzo di tubo in PVC, posiziona la pianta del piede sopra il rullo, in corrispondenza dell''arco plantare. Questa è la posizione di partenza. Esercita una pressione decisa facendolo rotolare lungo l''arco del piede. Mantieni la posizione per 10-30 secondi, poi cambia piede.', 
  'calves', 
  NULL, 
  'other', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Foot-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Foot-SMR/1.jpg'], 
  NOW()
),
(
  'bb0d22db-579e-43c2-bc6a-4187dce38498', 
  'Forward Drag with Press', 
  'Forward Drag con distensione', 
  'Attach a dual handled chain or rope attachment to the sled. You should be facing away from the sled, holding a handle in each hand.
Begin the movement by moving forward for one step. Leaning forward, extend through the legs and hips to move, pausing with each step to extend through the elbows, pressing your hands forward. Step forward until you return to the start position prepared to press.', 
  'Aggancia una catena a due maniglie o una fune alla slitta. Rivolgi le spalle alla slitta e impugna le maniglie. Inizia il movimento facendo un passo in avanti. Inclinandoti in avanti, spingi con gambe e anche per avanzare, facendo una pausa a ogni passo per estendere i gomiti, spingendo le mani in avanti. Continua a camminare in avanti fino a tornare alla posizione di partenza, pronto per una nuova distensione.', 
  'chest', 
  'calves', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Forward_Drag_with_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Forward_Drag_with_Press/1.jpg'], 
  NOW()
),
(
  '5f8bad35-89e9-47be-bc6a-1f2f4a2d5fb0', 
  'Frankenstein Squat', 
  'Frankenstein Squat', 
  'This drill teaches you the proper positioning of both the bar and your body during the clean and front squat.
Place the barbell on the front of the shoulders, releasing your grip and extending your arms out in front of you. The shoulders should be pushed forward to create a shelf, and the bar should be in contact with the throat. Ensure that you only move your shoulder blades forward; don''t round the thoracic spine.
Squat by flexing the knees and hips, sitting in between your legs. Keep the torso upright, the arms up, and the shoulders forward, and the bar should stay in place. Go to the bottom of the squat, until your hamstrings contact your calves.
Return to the upright position by driving through the front of the heel and extending the knees and hips.', 
  'Questo esercizio insegna il corretto posizionamento del bilanciere e del corpo durante il clean e il front squat. Posiziona il bilanciere sulla parte anteriore delle spalle, rilasciando la presa e distendendo le braccia davanti a te. Le spalle devono essere spinte in avanti per creare un appoggio e il bilanciere deve essere a contatto con la gola. Assicurati di muovere in avanti solo le scapole; non incurvare la colonna vertebrale toracica. Esegui lo squat flettendo ginocchia e anche, scendendo tra le gambe. Mantieni il busto eretto, le braccia sollevate e le spalle in avanti; il bilanciere dovrebbe rimanere in posizione. Scendi fino a quando la parte posteriore delle cosce tocca i polpacci. Torna alla posizione eretta spingendo attraverso la parte anteriore del tallone ed estendendo ginocchia e anche.', 
  'quadriceps', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Frankenstein_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Frankenstein_Squat/1.jpg'], 
  NOW()
),
(
  '9a5a57f7-bf55-4e71-b538-1c3d4dd9aa1f', 
  'Freehand Jump Squat', 
  'Freehand Jump Squat', 
  'Cross your arms over your chest.
With your head up and your back straight, position your feet at shoulder width.
Keeping your back straight and chest up, squat down as you inhale until your upper thighs are parallel, or lower, to the floor.
Now pressing mainly with the ball of your feet, jump straight up in the air as high as possible, using the thighs like springs. Exhale during this portion of the movement.
When you touch the floor again, immediately squat down and jump again.
Repeat for the recommended amount of repetitions.', 
  'Incrocia le braccia sul petto. Con la testa alta e la schiena dritta, posiziona i piedi alla larghezza delle spalle. Mantenendo la schiena dritta e il petto in fuori, inspira ed esegui uno squat finché le cosce non sono parallele al pavimento o più in basso. Ora, spingendo principalmente con l''avampiede, salta verticalmente il più in alto possibile, usando le cosce come molle. Espira durante questa fase del movimento. Quando tocchi nuovamente il pavimento, esegui immediatamente un altro squat e salta di nuovo. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'calves', 
  'body only', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/1.jpg'], 
  NOW()
),
(
  'df5c90b5-8915-4d8f-9d52-421b7913a7d0', 
  'Frog Hops', 
  'Frog Hops', 
  'Stand with your hands behind your head, and squat down keeping your torso upright and your head up. This will be your starting position.
Jump forward several feet, avoiding jumping unnecessarily high. As your feet contact the ground, absorb the impact through your legs, and jump again. Repeat this action 5-10 times.', 
  'In piedi con le mani dietro la testa, esegui uno squat mantenendo il busto eretto e la testa alta. Questa sarà la posizione di partenza. Salta in avanti per circa un metro, evitando di saltare inutilmente in alto. Quando i piedi toccano terra, assorbi l''impatto con le gambe e salta di nuovo. Ripeti questa azione per 5-10 volte.', 
  'quadriceps', 
  'calves', 
  NULL, 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Frog_Hops/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Frog_Hops/1.jpg'], 
  NOW()
),
(
  '55b6195c-2107-4744-8edc-dfc752027e94', 
  'Frog Sit-Ups', 
  'Frog Sit-Ups', 
  'Lie with your back flat on the floor (or exercise mat) and your legs extended in front of you.
Now bend at the knees and place your outer thighs by the floor (or mat) as you make the soles of your feet touch each other.
Now try pushing both soles and bringing them up as near you as possible while you keep the outer thighs on the floor (or at least almost touching it). Tip: In this position your legs should create a diamond shape.
Now, cross your arms in front of you by touching the opposite shoulders. This will be your starting position.
As you exhale flatten your lower back to the floor while curling the torso upwards. Tip: This will be like performing the first 1/4 movement of a sit up. Hold at the top position for a second.
As you inhale, slowly lower back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati con la schiena piatta a terra (o sul tappetino) e le gambe distese davanti a te. Piega le ginocchia e appoggia l''esterno delle cosce a terra facendo toccare le piante dei piedi l''una con l''altra. Spingi entrambe le piante dei piedi avvicinandole il più possibile al bacino, mantenendo l''esterno delle cosce a terra (o quasi). Consiglio: in questa posizione le gambe dovrebbero formare un diamante. Incrocia le braccia davanti al petto toccando le spalle opposte. Questa è la posizione di partenza. Espirando, appiattisci la parte bassa della schiena contro il pavimento mentre sollevi il busto. Consiglio: questo equivale a eseguire il primo quarto di un normale sit-up. Mantieni la posizione di picco per un secondo. Inspira e torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Frog_Sit-Ups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Frog_Sit-Ups/1.jpg'], 
  NOW()
),
(
  '718f45dc-d057-4aa9-88dc-3dc1f7c59f10', 
  'Front Barbell Squat', 
  'Front Barbell Squat', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, bring your arms up under the bar while keeping the elbows high and the upper arm slightly above parallel to the floor. Rest the bar on top of the deltoids and cross your arms while grasping the bar for total control.
Lift the bar off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).
Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper leg and the calves becomes slightly less than 90-degrees (which is the point in which the upper legs are below parallel to the floor). Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor mainly with the middle of your foot as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Per sicurezza, questo esercizio va eseguito all''interno di un rack. Imposta il bilanciere su un rack all''altezza giusta. Una volta caricato il bilanciere, porta le braccia sotto la sbarra tenendo i gomiti alti e la parte superiore delle braccia leggermente sopra il parallelo al pavimento. Appoggia il bilanciere sopra i deltoidi e incrocia le braccia afferrando la sbarra per un controllo totale. Stacca il bilanciere dal rack spingendo con le gambe e raddrizzando contemporaneamente il busto. Allontanati dal rack e posiziona i piedi alla larghezza delle spalle con le punte leggermente rivolte verso l''esterno. Tieni sempre la testa alta e la schiena dritta. Inizia a scendere lentamente piegando le ginocchia. Continua fino a quando l''angolo tra cosce e polpacci è leggermente inferiore a 90 gradi (cosce sotto il parallelo). Inspira durante la discesa. Consiglio: se eseguito correttamente, le ginocchia dovrebbero essere allineate con le punte dei piedi; se superano le punte, stai sovraccaricando le articolazioni. Risali espirando, spingendo principalmente con la parte centrale del piede, fino alla posizione iniziale.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat/1.jpg'], 
  NOW()
),
(
  '766b1402-4ad4-4f19-b031-217755b0dcdd', 
  'Front Barbell Squat To A Bench', 
  'Front Barbell Squat To A Bench', 
  'This exercise is best performed inside a squat rack for safety purposes. To begin, first set a flat bench behind you and set the bar on a rack that best matches your height. Once the correct height is chosen and the bar is loaded, bring your arms up under the bar while keeping the elbows high and the upper arm slightly above parallel to the floor. Rest the bar on top of the deltoids and cross your arms while grasping the bar for total control.
Lift the bar off the rack by first pushing with your legs and at the same time straightening your torso.
Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head up at all times as looking down will get you off balance and also maintain a straight back. This will be your starting position. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section).
Begin to slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until you touch the bench with your glutes. Inhale as you perform this portion of the movement. Tip: If you performed the exercise correctly, the front of the knees should make an imaginary straight line with the toes that is perpendicular to the front. If your knees are past that imaginary line (if they are past your toes) then you are placing undue stress on the knee and the exercise has been performed incorrectly.
Begin to raise the bar as you exhale by pushing the floor mainly with the heel of your foot as you straighten the legs again and go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Esercizio da eseguire in un rack. Posiziona una panca piana dietro di te e imposta il bilanciere alla giusta altezza. Porta le braccia sotto la sbarra, tenendo i gomiti alti. Appoggia il bilanciere sui deltoidi e incrocia le braccia per controllarlo. Stacca il bilanciere dal rack spingendo con le gambe e raddrizzando il busto. Allontanati dal rack con i piedi alla larghezza delle spalle e le punte leggermente verso l''esterno. Mantieni testa alta e schiena dritta. Scendi lentamente piegando le ginocchia finché i glutei non toccano la panca. Inspira durante la discesa. Consiglio: le ginocchia devono rimanere allineate con le punte dei piedi per evitare stress eccessivi. Risali espirando, spingendo principalmente con i talloni fino alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat_To_A_Bench/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Barbell_Squat_To_A_Bench/1.jpg'], 
  NOW()
),
(
  '2283d932-493c-4cb0-b35d-955d8b145040', 
  'Front Box Jump', 
  'Front Box Jump', 
  'Begin with a box of an appropriate height 1-2 feet in front of you. Stand with your feet should width apart. This will be your starting position.
Perform a short squat in preparation for jumping, swinging your arms behind you.
Rebound out of this position, extending through the hips, knees, and ankles to jump as high as possible. Swing your arms forward and up.
Land on the box with the knees bent, absorbing the impact through the legs. You can jump from the box back to the ground, or preferably step down one leg at a time.', 
  'Posiziona una scatola (box) di altezza adeguata a 30-60 cm davanti a te. In piedi con i piedi alla larghezza delle spalle. Esegui un mezzo squat preparatorio oscillando le braccia all''indietro. Esegui il salto esplosivo estendendo anche, ginocchia e caviglie. Oscilla le braccia in avanti e verso l''alto. Atterra sulla scatola con le ginocchia leggermente flesse per assorbire l''impatto. Puoi saltare indietro per tornare a terra o, preferibilmente, scendere una gamba alla volta.', 
  'hamstrings', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Box_Jump/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Box_Jump/1.jpg'], 
  NOW()
),
(
  '4764691e-86c6-4dec-8e28-8b8ea4de5d14', 
  'Front Cable Raise', 
  'Front Cable Raise', 
  'Select the weight on a low pulley machine and grasp the single hand cable attachment that is attached to the low pulley with your left hand.
Face away from the pulley and put your arm straight down with the hand cable attachment in front of your thighs at arms'' length with the palms of the hand facing your thighs. This will be your starting position.
While maintaining the torso stationary (no swinging), lift the left arm to the front with a slight bend on the elbow and the palms of the hand always faces down. Continue to go up until you arm is slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top.
Now as you inhale lower the arm back down slowly to the starting position.
Once all of the recommended amount of repetitions have been performed for this arm, switch arms and perform the exercise with the right one.', 
  'Seleziona il carico su un macchinario ai cavi bassi e afferra l''impugnatura singola con la mano sinistra. Datti di schiena rispetto alla puleggia con il braccio disteso davanti alle cosce, palmi verso l''interno. Mantieni il busto fermo e solleva il braccio sinistro in avanti con il gomito leggermente flesso e il palmo rivolto verso il basso. Continua finché il braccio non è leggermente sopra il parallelo al pavimento. Espira durante la salita e mantieni la posizione un secondo. Inspira e abbassa lentamente il braccio fino alla posizione iniziale. Ripeti per le ripetizioni previste, poi cambia braccio.', 
  'shoulders', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Cable_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Cable_Raise/1.jpg'], 
  NOW()
),
(
  '9e3dba5a-0e30-4f71-a5ae-9f07fd2a858c', 
  'Front Cone Hops (or hurdle hops)', 
  'Front Cone Hops (o hurdle hops)', 
  'Set up a row of cones or other small barriers, placing them a few feet apart.
Stand in front of the first cone with your feet shoulder width apart. This will be your starting position.
Begin by jumping with both feet over the first cone, swinging both arms as you jump.
Absorb the impact of landing by bending the knees, rebounding out of the first leap by jumping over the next cone.
Continue until you have jumped over all of the cones.', 
  'Disponi una fila di coni o piccoli ostacoli a breve distanza l''uno dall''altro. In piedi davanti al primo cono, piedi alla larghezza delle spalle. Inizia saltando con entrambi i piedi sopra il primo cono, oscillando le braccia. Assorbi l''impatto all''atterraggio flettendo le ginocchia e rimbalza immediatamente verso il salto successivo. Continua finché non hai superato tutti i coni.', 
  'quadriceps', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Cone_Hops_or_hurdle_hops/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Cone_Hops_or_hurdle_hops/1.jpg'], 
  NOW()
),
(
  '107b8774-32d5-47f1-b46f-441bcf7c93e8', 
  'Front Dumbbell Raise', 
  'Front Dumbbell Raise', 
  'Pick a couple of dumbbells and stand with a straight torso and the dumbbells on front of your thighs at arms length with the palms of the hand facing your thighs. This will be your starting position.
While maintaining the torso stationary (no swinging), lift the left dumbbell to the front with a slight bend on the elbow and the palms of the hands always facing down. Continue to go up until you arm is slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top. Inhale after the second pause.
Now lower the dumbbell back down slowly to the starting position as you simultaneously lift the right dumbbell.
Continue alternating in this fashion until all of the recommended amount of repetitions have been performed for each arm.', 
  'Afferra due manubri in piedi, busto dritto, braccia distese davanti alle cosce con i palmi rivolti verso di esse. Mantenendo il busto fermo, solleva il manubrio sinistro in avanti con il gomito leggermente flesso e il palmo rivolto verso il basso. Continua a salire finché il braccio non è leggermente sopra il parallelo al pavimento. Espira durante il sollevamento e fai una pausa di un secondo in cima. Inspira dopo la pausa. Abbassa lentamente il manubrio verso la posizione iniziale mentre sollevi contemporaneamente il destro. Alterna le braccia fino al completamento delle ripetizioni previste.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/1.jpg'], 
  NOW()
),
(
  '3f355528-406b-40cf-b48e-9127641311d4', 
  'Front Incline Dumbbell Raise', 
  'Alzate frontali con manubri su panca inclinata', 
  'Sit down on an incline bench with the incline set anywhere between 30 to 60 degrees while holding a dumbbell on each hand. Tip: You can change the angle to hit the muscle a little differently each time.
Extend your arms straight in front of you and have your palms facing down with the dumbbells raised about 1 inch above your thighs. This will be your starting position.
Slowly raise the dumbbells straight up until they are slightly above your shoulders, while keeping your elbows locked. Squeeze at the top for a second and make sure you breathe out during this portion of the movement. Tip: Keep your head resting down against the bench and your legs on the floor at all times.
Lower the arms back to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Siediti su una panca inclinata regolata tra i 30 e i 60 gradi, tenendo un manubrio in ciascuna mano. Consiglio: puoi modificare l''inclinazione per colpire il muscolo in modo leggermente diverso ogni volta. Estendi le braccia dritto davanti a te con i palmi rivolti verso il basso e i manubri sollevati di circa 2-3 cm sopra le cosce; questa è la posizione di partenza. Solleva lentamente i manubri finché non sono leggermente sopra le spalle, mantenendo i gomiti bloccati. Contrai i muscoli per un secondo nel punto di massima elevazione ed espira durante questa fase del movimento. Consiglio: tieni la testa appoggiata alla panca e i piedi ben saldi a terra per tutta la durata dell''esercizio. Riporta le braccia nella posizione iniziale mentre inspiri. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Incline_Dumbbell_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Incline_Dumbbell_Raise/1.jpg'], 
  NOW()
),
(
  '7b51c8ce-51b6-4337-b848-d408eba25ad9', 
  'Front Leg Raises', 
  'Slanci frontali della gamba', 
  'Stand next to a chair or other support, holding on with one hand.
Swing your leg forward, keeping the leg straight. Continue with a downward swing, bringing the leg as far back as your flexibility allows. Repeat 5-10 times, and then switch legs.', 
  'Stai in piedi accanto a una sedia o un supporto, tenendoti con una mano. Slancia la gamba in avanti mantenendola dritta. Prosegui con un movimento all''indietro, portando la gamba il più lontano possibile in base alla tua flessibilità. Ripeti 5-10 volte, quindi cambia gamba.', 
  'hamstrings', 
  NULL, 
  'body only', 
  'beginner', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Leg_Raises/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Leg_Raises/1.jpg'], 
  NOW()
),
(
  'd621258f-b860-4460-87d6-41fa219bcaa4', 
  'Front Plate Raise', 
  'Alzate frontali con disco', 
  'While standing straight, hold a barbell plate in both hands at the 3 and 9 o''clock positions. Your palms should be facing each other and your arms should be extended and locked with a slight bend at the elbows and the plate should be down near your waist in front of you as far as you can go. Tip: The arms will remain in this position throughout the exercise. This will be your starting position.
Slowly raise the plate as you exhale until it is a little above shoulder level. Hold the contraction for a second. Tip: make sure that you do not swing the weight or bend at the elbows. Your torso should remain stationary throughout the movement as well.
As you inhale, slowly lower the plate back down to the starting position.
Repeat for the recommended amount of repetitions.', 
  'In posizione eretta, impugna un disco con entrambe le mani nelle posizioni delle ore 3 e 9. I palmi devono essere rivolti l''uno verso l''altro, le braccia tese e bloccate con una leggera flessione dei gomiti; il disco deve trovarsi vicino alla vita. Consiglio: le braccia devono rimanere in questa posizione per tutto l''esercizio. Questa è la posizione di partenza. Espirando, solleva lentamente il disco finché non è leggermente sopra il livello delle spalle. Mantieni la contrazione per un secondo. Consiglio: evita di dondolare con il peso o di piegare i gomiti; il busto deve rimanere immobile per tutto il movimento. Inspira mentre riporti lentamente il disco alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Plate_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Plate_Raise/1.jpg'], 
  NOW()
),
(
  '83e8816a-74f1-449d-bb25-68c4be519069', 
  'Front Raise And Pullover', 
  'Alzate frontali e pullover', 
  'Lie on a flat bench while holding a barbell using a palms down grip that is about 15 inches apart.
Place the bar on your upper thighs, extend your arms and lock them while keeping a slight bend on the elbows. This will be your starting position.
Now raise the weight using a semicircular motion and keeping your arms straight as you inhale. Continue the same movement until the bar is on the other side above your head . (Tip: the bar will travel approximately 180-degrees). At this point your arms should be parallel to the floor with the palms of your hands facing the ceiling.
Now return the barbell to the starting position by reversing the motion as you exhale.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su una panca piana tenendo un bilanciere con una presa prona (palmi verso il basso) a una larghezza di circa 40 cm. Appoggia il bilanciere sulle cosce, estendi le braccia bloccandole ma mantenendo una leggera flessione ai gomiti; questa è la posizione di partenza. Solleva il peso con un movimento semicircolare mantenendo le braccia tese mentre inspiri. Continua il movimento finché il bilanciere non si trova oltre la testa. (Consiglio: il bilanciere percorrerà circa 180 gradi). A questo punto, le braccia dovrebbero essere parallele al pavimento con i palmi rivolti verso il soffitto. Torna alla posizione di partenza invertendo il movimento ed espirando. Ripeti per il numero di ripetizioni consigliato.', 
  'chest', 
  'lats', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Raise_And_Pullover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Raise_And_Pullover/1.jpg'], 
  NOW()
),
(
  '1465f1cd-c17c-4948-86e9-2f2d8c5479a4', 
  'Front Squat (Clean Grip)', 
  'Front Squat (Clean Grip)', 
  'To begin, first set the bar in a rack slightly below shoulder level. Rest the bar on top of the deltoids, pushing into the clavicles, and lightly touching the throat. Your hands should be in a clean grip, touching the bar only with your fingers to help keep it in position.
Lift the bar off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder width medium stance with the toes slightly pointed out. Keep your head and elbows up at all times. This will be your starting position.
Bend at the knees, sitting down between your legs. Continue down until your hamstrings are on your calves. Keep your knees aligned with your feet by consciously using your abductors to push your knees out as you squat.
Begin to raise the bar as you exhale by pushing the floor mainly with the heel or middle of your foot as you straighten the legs again and return to the starting position.', 
  'Posiziona il bilanciere su un rack leggermente sotto l''altezza delle spalle. Appoggia il bilanciere sopra i deltoidi, spingendo contro le clavicole e sfiorando la gola. Le mani devono essere in presa ''clean'', toccando il bilanciere solo con le dita per mantenerlo in posizione. Solleva il bilanciere dal rack spingendo con le gambe e raddrizzando contemporaneamente il busto. Allontanati dal rack e posiziona le gambe con una larghezza media pari a quella delle spalle e le punte dei piedi leggermente verso l''esterno. Mantieni la testa e i gomiti alti in ogni momento. Questa è la posizione di partenza. Piega le ginocchia scendendo tra le gambe finché i bicipiti femorali non toccano i polpacci. Mantieni le ginocchia allineate con i piedi usando gli abduttori per spingere le ginocchia verso l''esterno durante lo squat. Espirando, risali spingendo il pavimento principalmente con il tallone o la parte centrale del piede, raddrizzando le gambe e tornando alla posizione iniziale.', 
  'quadriceps', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squat_Clean_Grip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squat_Clean_Grip/1.jpg'], 
  NOW()
),
(
  '473ee34e-9ea2-4797-bfca-1ce9d824f5b4', 
  'Front Squats With Two Kettlebells', 
  'Front Squat con due Kettlebell', 
  'Clean two kettlebells to your shoulders. Clean the kettlebells to your shoulders by extending through the legs and hips as you pull the kettlebells towards your shoulders. Rotate your wrists as you do so.
Looking straight ahead at all times, squat as low as you can and pause at the bottom. As you squat down, push your knees out. You should squat between your legs, keeping an upright torso, with your head and chest up.
Rise back up by driving through your heels and repeat.', 
  'Esegui un ''clean'' con due kettlebell portandole alle spalle, estendendo gambe e anche mentre le tiri verso l''alto e ruoti i polsi. Guardando sempre dritto in avanti, scendi in squat il più in basso possibile e fai una pausa nel punto inferiore. Durante la discesa, spingi le ginocchia verso l''esterno. Scendi tra le gambe mantenendo il busto eretto, la testa e il petto alti. Risali spingendo sui talloni e ripeti.', 
  'quadriceps', 
  'calves', 
  'kettlebells', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squats_With_Two_Kettlebells/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squats_With_Two_Kettlebells/1.jpg'], 
  NOW()
),
(
  '7711602e-a435-4bc1-aeb1-c243697b246e', 
  'Front Two-Dumbbell Raise', 
  'Alzate frontali con due manubri', 
  'Pick a couple of dumbbells and stand with a straight torso and the dumbbells on front of your thighs at arms length with the palms of the hand facing your thighs. This will be your starting position.
While maintaining the torso stationary (no swinging), lift the dumbbells to the front with a slight bend on the elbow and the palms of the hands always facing down. Continue to go up until you arms are slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top.
As you inhale, lower the dumbbells back down slowly to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Prendi due manubri e mettiti in piedi con il busto dritto; tieni i pesi davanti alle cosce, braccia tese e palmi rivolti verso le cosce. Questa è la posizione di partenza. Mantenendo il busto immobile (senza oscillare), solleva i manubri frontalmente con una leggera flessione dei gomiti e i palmi sempre rivolti verso il basso. Continua a salire finché le braccia non sono leggermente sopra il parallelo rispetto al pavimento. Espira durante questa fase e fai una pausa di un secondo nel punto più alto. Inspira mentre abbassi lentamente i manubri alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Two-Dumbbell_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Two-Dumbbell_Raise/1.jpg'], 
  NOW()
),
(
  'a1772744-de17-44e5-9bec-a2b361292826', 
  'Full Range-Of-Motion Lat Pulldown', 
  'Lat Pulldown a range di movimento completo', 
  'Either standing or seated on a high bench, grasp two stirrup cables that are attached to the high pulleys. Grab with the opposing hand so your arms are crisscrossed about you and your palms are facing forward.
Keeping your chest up and maintaining a slight arch in your lower back, pull the handles down as if you were doing a regular pulldown. The range of motion will be more of an arc. During the movement, rotate your hands so that in the bottom position your palms face each other rather than forward. Return slowly to the starting position and repeat.', 
  'In piedi o seduto su una panca alta, impugna due maniglie collegate alle carrucole alte. Usa le mani opposte in modo che le braccia siano incrociate davanti a te e i palmi rivolti in avanti. Mantieni il petto alto e una leggera curvatura nella zona lombare, quindi tira le maniglie verso il basso come in un classico pulldown; il movimento seguirà un arco. Durante l''esecuzione, ruota le mani in modo che nella posizione finale i palmi siano rivolti l''uno verso l''altro anziché in avanti. Torna lentamente alla posizione iniziale e ripeti.', 
  'lats', 
  'biceps', 
  'cable', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Full_Range-Of-Motion_Lat_Pulldown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Full_Range-Of-Motion_Lat_Pulldown/1.jpg'], 
  NOW()
),
(
  '61e3d7a6-7002-44a7-b303-b9ddcbaefb3e', 
  'Gironda Sternum Chins', 
  'Gironda Sternum Chins', 
  'Grasp the pull-up bar with a shoulder width underhand grip.
Now hang with your arms fully extended and stick your chest out and lean back. Tip: You will be leaning back throughout the entire movement. This will be your starting position.
Start pulling yourself towards the bar with your spine arched throughout the movement and your head leaning back as far away from the bar as possible. Exhale as you perform this portion of the movement. Tip: At the upper end of the movement, your hips and legs will be at about a 45-degree angle to the floor.
Keep pulling until your collarbone passes the bar and your lower chest or sternum area touches it. Hold that contraction for a second. Tip: By the time you''ve completed this portion of the movement; your head will be parallel to the floor.
Slowly start going back to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Afferra la sbarra per le trazioni con una presa supina (palmi verso il viso) alla larghezza delle spalle. Rimani appeso con le braccia completamente estese, spingi il petto in fuori e inclinati all''indietro. Consiglio: dovrai mantenere questa inclinazione per tutto il movimento. Questa è la posizione di partenza. Inizia a tirarti verso la sbarra mantenendo la colonna vertebrale inarcata e la testa inclinata all''indietro il più lontano possibile dalla sbarra. Espira durante questa fase. Consiglio: nella parte alta del movimento, i fianchi e le gambe formeranno un angolo di circa 45 gradi rispetto al pavimento. Continua a tirare finché la clavicola non supera la sbarra e la parte bassa del petto (sterno) la tocca. Mantieni la contrazione per un secondo. Consiglio: al completamento di questa fase, la testa sarà parallela al pavimento. Inspira mentre torni lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'lats', 
  'biceps', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Gironda_Sternum_Chins/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Gironda_Sternum_Chins/1.jpg'], 
  NOW()
),
(
  'f2c10e7f-1f79-4685-8cdf-7904a41dfd41', 
  'Glute Ham Raise', 
  'Glute Ham Raise', 
  'Begin by adjusting the equipment to fit your body. Place your feet against the footplate in between the rollers as you lie facedown. Your knees should be just behind the pad.
Start from the bottom of the movement. Keep your back arched as you begin the movement by flexing the knees. Drive your toes into the foot plate as you do so. Keep your upper body straight, and continue until your body is upright.
Return to the starting position, keeping your descent under control.', 
  'Regola l''attrezzo in base alla tua corporatura. Posiziona i piedi contro la pedana tra i rulli mentre sei sdraiato a faccia in giù; le ginocchia devono trovarsi appena dietro il cuscinetto. Inizia dalla parte inferiore del movimento. Mantieni la schiena inarcata e inizia flettendo le ginocchia. Spingi le punte dei piedi contro la pedana durante il movimento. Mantieni la parte superiore del corpo dritta e continua finché il busto non è in posizione verticale. Ritorna alla posizione iniziale, mantenendo il controllo durante la discesa.', 
  'hamstrings', 
  'calves', 
  'machine', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Ham_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Ham_Raise/1.jpg'], 
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