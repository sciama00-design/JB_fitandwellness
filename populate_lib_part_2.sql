-- Full population of exercise_library with Italian translations (Batch 2)

INSERT INTO public.exercise_library (
  id, name, name_it, description, description_it, 
  muscle_group, muscle_group_secondary, equipment, difficulty_level, 
  mechanic, force, images, created_at
) VALUES
(
  'e93a509b-25ea-438d-abd1-b5e36e0f173f', 
  'Box Skip', 
  'Box Skip', 
  'You will need several boxes lined up about 8 feet apart.
Begin facing the first box with one leg slightly behind the other.
Drive off the back leg, attempting to gain as much height with the hips as possible.
Immediately upon landing on the box, drive the other leg forward and upward to gain height and distance, leaping from the box. Land between the first two boxes with the same leg that landed on the first box.
Then, step to the next box and repeat.', 
  'Avrai bisogno di diversi box allineati a circa 2,5 metri di distanza l''uno dall''altro. Inizia di fronte al primo box con una gamba leggermente dietro l''altra. Spingi con la gamba posteriore, cercando di ottenere la massima altezza possibile con i fianchi. Non appena atterri sul box, spingi l''altra gamba in avanti e verso l''alto per guadagnare altezza e distanza, saltando via dal box. Atterra tra i primi due box con la stessa gamba che è atterrata sul primo box. Successivamente, spostati al box successivo e ripeti.', 
  'hamstrings', 
  'abductors', 
  'other', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Skip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Skip/1.jpg'], 
  NOW()
),
(
  'e0d109f9-f139-4c07-a3bd-8e97e85282a8', 
  'Box Squat', 
  'Box Squat', 
  'The box squat allows you to squat to desired depth and develop explosive strength in the squat movement. Begin in a power rack with a box at the appropriate height behind you. Typically, you would aim for a box height that brings you to a parallel squat, but you can train higher or lower if desired.
Begin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.
With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.
Keeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe.', 
  'Il box squat permette di eseguire lo squat alla profondità desiderata e di sviluppare forza esplosiva nel movimento. Inizia in un power rack con un box dell''altezza appropriata dietro di te. In genere, l''obiettivo è un''altezza che porti a uno squat parallelo, ma è possibile allenarsi più in alto o più in basso se desiderato. Posizionati sotto il bilanciere e appoggialo sulla parte alta della schiena. Avvicina le scapole e ruota i gomiti in avanti, cercando di flettere il bilanciere sulle spalle. Stacca il bilanciere, crea un leggero arco lombare e fai un passo indietro per posizionarti. Posiziona i piedi più larghi per enfatizzare schiena, glutei, adduttori e femorali, o più stretti per uno sviluppo maggiore dei quadricipiti. Mantieni la testa rivolta in avanti. Con schiena, spalle e core contratti, spingi ginocchia e sedere verso l''esterno e inizia la discesa. Siediti all''indietro con i fianchi finché non sei seduto sul box. Idealmente, le tibie dovrebbero essere perpendicolari al suolo. Fai una pausa sul box e rilassa i flessori dell''anca. Non rimbalzare mai sul box. Mantenendo il peso sui talloni e spingendo piedi e ginocchia verso l''esterno, spingi verso l''alto partendo dal box, guidando il movimento con la testa. Continua la risalita mantenendo tutto il corpo in tensione.', 
  'quadriceps', 
  'adductors', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Squat/1.jpg'], 
  NOW()
),
(
  'f1ed9b31-bdf7-414b-a950-02c0692bfbf3', 
  'Box Squat with Bands', 
  'Box Squat con elastici (Bands)', 
  'Begin in a power rack with a box at the appropriate height behind you. Set up the bands on the sleeves, secured to either band pegs, the rack, or dumbbells so that there is appropriate tension. If dumbbells are used, secure them so that they don''t move. Also, ensure that the dumbbells you are using are heavy enough for the bands that you are using. Additional plates can be used to hold the dumbbells down. If more tension is needed, you can either widen the base on the floor or choke the bands. Typically, you would aim for a box height that brings you to a parallel squat, but you can train higher or lower if desired.
Begin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.
With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.
Keeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe. Use care to return the barbell to the rack.', 
  'Inizia in un power rack con un box di altezza appropriata dietro di te. Monta gli elastici sulle estremità del bilanciere, fissandoli a pioli, al rack o a manubri in modo che vi sia la tensione adeguata. Se utilizzi dei manubri, assicurati che siano fissati saldamente e che siano abbastanza pesanti da gestire la tensione degli elastici; in caso, usa dei dischi aggiuntivi per tenerli fermi. Se serve più tensione, puoi allargare la base a terra o avvolgere ulteriormente gli elastici. Segui le indicazioni tecniche del Box Squat tradizionale per la posizione e l''esecuzione. Fai attenzione nel riporre il bilanciere sul rack.', 
  'quadriceps', 
  'abductors', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Squat_with_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Squat_with_Bands/1.jpg'], 
  NOW()
),
(
  '09dbc759-b191-4c58-abac-16bb1eca4146', 
  'Box Squat with Chains', 
  'Box Squat con catene (Chains)', 
  'Begin in a power rack with a box at the appropriate height behind you. Typically, you would aim for a box height that brings you to a parallel squat, but you can train higher or lower if desired.
To set up the chains, begin by looping the leader chain over the sleeves of the bar. The heavy chain should be attached using a snap hook. Adjust the length of the lead chain so that a few links are still on the floor at the top of the movement.
Begin by stepping under the bar and placing it across the back of the shoulders. Squeeze your shoulder blades together and rotate your elbows forward, attempting to bend the bar across your shoulders. Remove the bar from the rack, creating a tight arch in your lower back, and step back into position. Place your feet wider for more emphasis on the back, glutes, adductors, and hamstrings, or closer together for more quad development. Keep your head facing forward.
With your back, shoulders, and core tight, push your knees and butt out and you begin your descent. Sit back with your hips until you are seated on the box. Ideally, your shins should be perpendicular to the ground. Pause when you reach the box, and relax the hip flexors. Never bounce off of a box.
Keeping the weight on your heels and pushing your feet and knees out, drive upward off of the box as you lead the movement with your head. Continue upward, maintaining tightness head to toe.', 
  'Inizia in un power rack con un box di altezza appropriata dietro di te. Per preparare le catene, fai passare la catena guida sulle estremità del bilanciere. La catena pesante deve essere agganciata con un moschettone. Regola la lunghezza della catena guida in modo che alcune maglie tocchino ancora il suolo nella parte superiore del movimento. Segui le indicazioni tecniche del Box Squat tradizionale per la posizione e l''esecuzione, beneficiando della resistenza variabile fornita dalle catene.', 
  'quadriceps', 
  'abductors', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Squat_with_Chains/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Squat_with_Chains/1.jpg'], 
  NOW()
),
(
  '1e99e88e-7a77-440b-a474-0de8edca9ef0', 
  'Brachialis-SMR', 
  'Brachialis-SMR', 
  'Lie on your side, with your upper arm against the foam roller. The upper arm should be more or less aligned with your body, with the outside of the bicep pressed against the foam roller.
Raise your hips off of the floor, supporting your weight on your arm and on your feet. Hold for 10-30 seconds, and then switch sides.', 
  'Sdraiati su un fianco con la parte superiore del braccio contro il foam roller. Il braccio dovrebbe essere più o meno allineato con il corpo, con la parte esterna del bicipite premuta contro il rullo. Solleva i fianchi da terra, sostenendo il peso sul braccio e sui piedi. Mantieni la posizione per 10-30 secondi, poi cambia lato.', 
  'biceps', 
  NULL, 
  'foam roll', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Brachialis-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Brachialis-SMR/1.jpg'], 
  NOW()
),
(
  'b6c10dea-4613-418f-9e3c-057f380422a8', 
  'Bradford/Rocky Presses', 
  'Bradford/Rocky Press', 
  'Sit on a Military Press Bench with a bar at shoulder level with a pronated grip (palms facing forward). Tip: Your grip should be wider than shoulder width and it should create a 90-degree angle between the forearm and the upper arm as the barbell goes down. This is your starting position.
Once you pick up the barbell with the correct grip, lift the bar up over your head by locking your arms.
Now lower the bar down to the back of the head slowly as you inhale.
Lift the bar back up to the starting position as you exhale.
Lower the bar down to the starting position slowly as you inhale. This is one repetition.
Alternate in this manner until you complete the recommended amount of repetitions.', 
  'Siediti su una panca per Military Press con il bilanciere all''altezza delle spalle e una presa prona (palmi rivolti in avanti). Consiglio: la presa dovrebbe essere più larga delle spalle e formare un angolo di 90 gradi tra avambraccio e braccio mentre il bilanciere scende. Questa è la posizione iniziale. Solleva il bilanciere sopra la testa bloccando le braccia. Abbassa lentamente il bilanciere dietro la nuca espirando. Solleva nuovamente il bilanciere nella posizione iniziale espirando, quindi abbassalo davanti fino alla posizione di partenza inspirando. Questa è una ripetizione. Alterna in questo modo fino al completamento delle ripetizioni raccomandate.', 
  'shoulders', 
  'triceps', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bradford_Rocky_Presses/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bradford_Rocky_Presses/1.jpg'], 
  NOW()
),
(
  'c01f0dbf-890d-4449-b69b-1326d0ac3eb5', 
  'Butt-Ups', 
  'Butt-Ups', 
  'Begin a pushup position but with your elbows on the ground and resting on your forearms. Your arms should be bent at a 90 degree angle.
Arch your back slightly out rather than keeping your back completely straight.
Raise your glutes toward the ceiling, squeezing your abs tightly to close the distance between your ribcage and hips. The end result will be that you''ll end up in a high bridge position. Exhale as you perform this portion of the movement.
Lower back down slowly to your starting position as you breathe in. Tip: Don''t let your back sag downwards.
Repeat for the recommended amount of repetitions.', 
  'Inizia in posizione di push-up ma con i gomiti a terra e appoggiato sugli avambracci. Le braccia devono essere piegate a 90 gradi. Inarca leggermente la schiena anziché mantenerla completamente dritta. Solleva i glutei verso il soffitto, contraendo intensamente gli addominali per ridurre la distanza tra cassa toracica e fianchi. Il risultato finale sarà una posizione a ponte alto. Espira durante questa fase del movimento. Torna lentamente alla posizione iniziale inspirando. Consiglio: non lasciare che la schiena si inarchi verso il basso. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt-Ups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt-Ups/1.jpg'], 
  NOW()
),
(
  '1ae55f7b-b209-496a-be89-6b6c10e55533', 
  'Butt Lift (Bridge)', 
  'Butt Lift (Ponte)', 
  'Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position.
Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second.
Slowly go back to the starting position as you breathe in.', 
  'Sdraiati sulla schiena con le mani lungo i fianchi e le ginocchia piegate. I piedi devono essere posizionati a circa la larghezza delle spalle. Questa è la posizione iniziale. Spingendo principalmente sui talloni, solleva i fianchi da terra mantenendo la schiena dritta. Espira durante questa fase e mantieni la contrazione in alto per un secondo. Torna lentamente alla posizione iniziale inspirando.', 
  'glutes', 
  'hamstrings', 
  'body only', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/1.jpg'], 
  NOW()
),
(
  '9659663a-c1c1-40e6-88ce-9c3409374d74', 
  'Butterfly', 
  'Butterfly', 
  'Sit on the machine with your back flat on the pad.
Take hold of the handles. Tip: Your upper arms should be positioned parallel to the floor; adjust the machine accordingly. This will be your starting position.
Push the handles together slowly as you squeeze your chest in the middle. Breathe out during this part of the motion and hold the contraction for a second.
Return back to the starting position slowly as you inhale until your chest muscles are fully stretched.
Repeat for the recommended amount of repetitions.', 
  'Siediti sulla macchina con la schiena ben aderente allo schienale. Afferra le maniglie. Consiglio: le braccia dovrebbero essere parallele al pavimento; regola la macchina di conseguenza. Questa è la posizione iniziale. Spingi le maniglie l''una verso l''altra lentamente mentre contrai i pettorali al centro. Espira durante questa fase e mantieni la contrazione per un secondo. Torna lentamente alla posizione iniziale inspirando, finché i muscoli pettorali non sono completamente allungati. Ripeti per il numero di ripetizioni raccomandato.', 
  'chest', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butterfly/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butterfly/1.jpg'], 
  NOW()
),
(
  '4d003946-a9fc-4aa4-8938-c40acfcb5997', 
  'Cable Chest Press', 
  'Cable Chest Press', 
  'Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position.
Begin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement.
After pausing at full extension, return to th starting position, keeping tension on the cables.
You can also execute this movement with your back off the pad, at an incline or decline, or alternate hands.', 
  'Regola il peso a un livello appropriato, siediti e afferra le maniglie. Le braccia dovrebbero formare un angolo di circa 45 gradi rispetto al corpo, con testa e petto alti. I gomiti dovrebbero essere piegati a circa 90 gradi. Questa è la posizione iniziale. Estendi i gomiti spingendo le maniglie in avanti. Mantieni le scapole retratte durante l''esecuzione. Dopo una breve pausa in estensione completa, torna alla posizione iniziale mantenendo la tensione sui cavi. Puoi eseguire questo movimento anche con la schiena staccata dallo schienale, su panca inclinata o declinata, o alternando le braccia.', 
  'chest', 
  'shoulders', 
  'cable', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/1.jpg'], 
  NOW()
),
(
  '265469ee-eafe-42e3-8d70-f3bacc3b543b', 
  'Cable Crossover', 
  'Cable Crossover', 
  'To get yourself into the starting position, place the pulleys on a high position (above your head), select the resistance to be used and hold the pulleys in each hand.
Step forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you. Your torso should have a small forward bend from the waist. This will be your starting position.
With a slight bend on your elbows in order to prevent stress at the biceps tendon, extend your arms to the side (straight out at both sides) in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms and torso should remain stationary; the movement should only occur at the shoulder joint.
Return your arms back to the starting position as you breathe out. Make sure to use the same arc of motion used to lower the weights.
Hold for a second at the starting position and repeat the movement for the prescribed amount of repetitions.', 
  'Per la posizione di partenza, posiziona le carrucole in alto (sopra la testa), seleziona la resistenza desiderata e impugna le maniglie. Fai un passo in avanti rispetto alla linea immaginaria tra le due carrucole, portando le braccia davanti a te. Il busto deve essere leggermente inclinato in avanti partendo dai fianchi. Con i gomiti leggermente flessi per evitare stress al tendine del bicipite, estendi le braccia lateralmente seguendo un arco ampio finché non senti un allungamento nel petto. Inspira durante questa fase. Suggerimento: mantieni braccia e busto fermi durante il movimento; l''azione deve avvenire solo a livello dell''articolazione della spalla. Torna alla posizione iniziale espirando, seguendo lo stesso arco di movimento. Mantieni la posizione per un secondo e ripeti per il numero di ripetizioni prescritto.', 
  'chest', 
  'shoulders', 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/1.jpg'], 
  NOW()
),
(
  '9d721ff4-3d0e-467c-9f3f-a00c1410a12f', 
  'Cable Crunch', 
  'Cable Crunch', 
  'Kneel below a high pulley that contains a rope attachment.
Grasp cable rope attachment and lower the rope until your hands are placed next to your face.
Flex your hips slightly and allow the weight to hyperextend the lower back. This will be your starting position.
With the hips stationary, flex the waist as you contract the abs so that the elbows travel towards the middle of the thighs. Exhale as you perform this portion of the movement and hold the contraction for a second.
Slowly return to the starting position as you inhale. Tip: Make sure that you keep constant tension on the abs throughout the movement. Also, do not choose a weight so heavy that the lower back handles the brunt of the work.
Repeat for the recommended amount of repetitions.', 
  'Inginocchiati sotto una carrucola alta dotata di corda. Impugna la corda e abbassala finché le mani non si trovano vicino al viso. Fletti leggermente i fianchi e lascia che il peso iper-estenda la parte bassa della schiena: questa è la posizione di partenza. Mantenendo i fianchi fermi, fletti il busto contraendo gli addominali in modo che i gomiti si muovano verso la metà delle cosce. Espira durante questa fase e mantieni la contrazione per un secondo. Torna lentamente alla posizione iniziale inspirando. Suggerimento: mantieni una tensione costante sugli addominali. Non scegliere un peso eccessivo che costringa la parte bassa della schiena a compiere lo sforzo principale. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crunch/1.jpg'], 
  NOW()
),
(
  '8e4f4303-4fed-4137-ad4f-c70b24bac299', 
  'Cable Deadlifts', 
  'Cable Deadlifts', 
  'Move the cables to the bottom of the towers and select an appropriate weight. Stand directly in between the uprights.
To begin, squat down be flexing your hips and knees until you can reach the handles.
After grasping them, begin your ascent. Driving through your heels extend your hips and knees keeping your hands hanging at your side. Keep your head and chest up throughout the movement.
After reaching a full standing position, Return to the starting position and repeat.', 
  'Posiziona i cavi nella parte inferiore delle torri e seleziona un peso adeguato. Posizionati esattamente tra le torri. Per iniziare, esegui uno squat flettendo fianchi e ginocchia finché non riesci ad afferrare le maniglie. Dopo averle afferrate, inizia la risalita. Spingendo sui talloni, estendi fianchi e ginocchia mantenendo le mani lungo i fianchi. Tieni la testa alta e il petto in fuori durante tutto il movimento. Dopo aver raggiunto la posizione eretta, torna alla posizione iniziale e ripeti.', 
  'quadriceps', 
  'forearms', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Deadlifts/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Deadlifts/1.jpg'], 
  NOW()
),
(
  'ec5b15ab-56cc-48d9-a0f9-9e3a25c0db6b', 
  'Cable Hammer Curls - Rope Attachment', 
  'Cable Hammer Curls - con corda', 
  'Attach a rope attachment to a low pulley and stand facing the machine about 12 inches away from it.
Grasp the rope with a neutral (palms-in) grip and stand straight up keeping the natural arch of the back and your torso stationary.
Put your elbows in by your side and keep them there stationary during the entire movement. Tip: Only the forearms should move; not your upper arms. This will be your starting position.
Using your biceps, pull your arms up as you exhale until your biceps touch your forearms. Tip: Remember to keep the elbows in and your upper arms stationary.
After a 1 second contraction where you squeeze your biceps, slowly start to bring the weight back to the original position.
Repeat for the recommended amount of repetitions.', 
  'Aggancia una corda a una carrucola bassa e posizionati di fronte alla macchina a circa 30 cm di distanza. Impugna la corda con una presa neutra (palmi rivolti verso l''interno) e mantieni la schiena con la sua naturale curvatura e il busto fermo. Tieni i gomiti aderenti ai fianchi per tutta la durata del movimento. Suggerimento: solo gli avambracci devono muoversi, non la parte superiore delle braccia. Questa è la posizione di partenza. Usando i bicipiti, tira le braccia verso l''alto espirando finché i bicipiti non toccano gli avambracci. Dopo una contrazione di 1 secondo, torna lentamente alla posizione originale. Ripeti per il numero di ripetizioni consigliato.', 
  'biceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hammer_Curls_-_Rope_Attachment/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hammer_Curls_-_Rope_Attachment/1.jpg'], 
  NOW()
),
(
  '10599322-fde0-4f32-b848-9c802fb3faab', 
  'Cable Hip Adduction', 
  'Cable Hip Adduction', 
  'Stand in front of a low pulley facing forward with one leg next to the pulley and the other one away.
Attach the ankle cuff to the cable and also to the ankle of the leg that is next to the pulley.
Now step out and away from the stack with a wide stance and grasp the bar of the pulley system.
Stand on the foot that does not have the ankle cuff (the far foot) and allow the leg with the cuff to be pulled towards the low pulley. This will be your starting position.
Now perform the movement by moving the leg with the ankle cuff in front of the far leg by using the inner thighs to abduct the hip. Breathe out during this portion of the movement.
Slowly return to the starting position as you breathe in.
Repeat for the recommended amount of repetitions and then repeat the same movement with the opposite leg.', 
  'Posizionati di fronte a una carrucola bassa con una gamba vicina alla torre e l''altra lontana. Aggancia la cavigliera al cavo e alla caviglia della gamba vicina alla torre. Allontanati dalla torre assumendo una posizione ampia e afferra la barra del sistema a carrucola. Poggia il peso sul piede che non ha la cavigliera (il piede lontano) e lascia che la gamba con la cavigliera venga tirata verso la carrucola: questa è la posizione di partenza. Esegui il movimento portando la gamba con la cavigliera davanti alla gamba d''appoggio, usando l''interno coscia per addurre l''anca. Espira durante questa fase. Torna lentamente alla posizione iniziale inspirando. Ripeti per il numero di ripetizioni consigliato, poi cambia gamba.', 
  'quadriceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hip_Adduction/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hip_Adduction/1.jpg'], 
  NOW()
),
(
  'f2ce8a8d-6f85-48d7-a997-e0d352c60ac9', 
  'Cable Incline Pushdown', 
  'Cable Incline Pushdown', 
  'Lie on incline an bench facing away from a high pulley machine that has a straight bar attachment on it.
Grasp the straight bar attachment overhead with a pronated (overhand; palms down) shoulder width grip and extend your arms in front of you. The bar should be around 2 inches away from your upper thighs. This will be your starting position.
Keeping the upper arms stationary, lift your arms back in a semi circle until the bar is straight over your head. Breathe in during this portion of the movement.
Slowly go back to the starting position using your lats and hold the contraction once you reach the starting position. Breathe out during the execution of this movement.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su una panca inclinata rivolto in direzione opposta rispetto a una carrucola alta dotata di barra dritta. Afferra la barra sopra la testa con una presa prona (palmi verso il basso) alla larghezza delle spalle ed estendi le braccia davanti a te. La barra dovrebbe trovarsi a circa 5 cm dalle cosce: questa è la posizione di partenza. Mantenendo la parte superiore delle braccia ferma, solleva le braccia descrivendo un semicerchio finché la barra non è direttamente sopra la testa. Inspira durante questa fase. Torna lentamente alla posizione iniziale usando i dorsali e mantieni la contrazione una volta raggiunta la posizione di partenza. Espira durante l''esecuzione. Ripeti per il numero di ripetizioni consigliato.', 
  'lats', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Pushdown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Pushdown/1.jpg'], 
  NOW()
),
(
  '2f137de3-24bb-4f54-bcbe-b83216ca2164', 
  'Cable Incline Triceps Extension', 
  'Cable Incline Triceps Extension', 
  'Lie on incline an bench facing away from a high pulley machine that has a straight bar attachment on it.
Grasp the straight bar attachment overhead with a pronated (overhand; palms down) narrow grip (less than shoulder width) and keep your elbows tucked in to your sides. Your upper arms should create around a 25 degree angle when measured from the floor.
Keeping the upper arms stationary, extend the arms as you flex the triceps. Breathe out during this portion of the movement and hold the contraction for a second.
Slowly go back to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati su una panca inclinata rivolto in direzione opposta rispetto a una carrucola alta dotata di barra dritta. Afferra la barra sopra la testa con una presa prona stretta (meno della larghezza delle spalle) e tieni i gomiti vicini ai fianchi. La parte superiore delle braccia dovrebbe formare un angolo di circa 25 gradi rispetto al pavimento. Mantenendo la parte superiore delle braccia ferma, estendi gli avambracci contraendo i tricipiti. Espira durante questa fase e mantieni la contrazione per un secondo. Torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni consigliato.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '5e4af376-23dc-4e80-a41d-cb9db7b63b7d', 
  'Cable Internal Rotation', 
  'Cable Internal Rotation', 
  'Sit next to a low pulley sideways (with legs stretched in front of you or crossed) and grasp the single hand cable attachment with the arm nearest to the cable. Tip: If you can adjust the pulley''s height, you can use a flat bench to sit on instead.
Position the elbow against your side with the elbow bent at 90° and the arm pointing towards the pulley. This will be your starting position.
Pull the single hand cable attachment toward your body by internally rotating your shoulder until your forearm is across your abs. You will be creating an imaginary semi-circle. Tip: The forearm should be perpendicular to your torso at all times.
Slowly go back to the initial position.
Repeat for the recommended amount of repetitions and then repeat the movement with the next arm.', 
  'Siediti di lato rispetto a una carrucola bassa (con le gambe distese o incrociate) e afferra la maniglia singola con il braccio più vicino al cavo. Suggerimento: se puoi regolare l''altezza della carrucola, puoi sederti su una panca. Posiziona il gomito contro il fianco, piegato a 90°, con l''avambraccio rivolto verso la carrucola. Questa è la posizione di partenza. Tira la maniglia verso il corpo ruotando internamente la spalla finché l''avambraccio non è davanti all''addome, creando un semicerchio immaginario. Suggerimento: l''avambraccio deve rimanere perpendicolare al busto. Torna lentamente alla posizione iniziale e ripeti per il numero di ripetizioni consigliato, poi cambia braccio.', 
  'shoulders', 
  NULL, 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Internal_Rotation/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Internal_Rotation/1.jpg'], 
  NOW()
),
(
  'a92ea050-8941-4d8e-895c-0ef9942f9b6a', 
  'Cable Iron Cross', 
  'Cable Iron Cross', 
  'Begin by moving the pulleys to the high position, select the resistance to be used, and take a handle in each hand.
Stand directly between both pulleys with your arms extended out to your sides. Your head and chest should be up while your arms form a "T". This will be your starting position.
Keeping the elbows extended, pull your arms straight to your sides.
Return your arms back to the starting position after a pause at the peak contraction.
Continue the movement for the prescribed number of repetitions.', 
  'Porta le carrucole in posizione alta, seleziona il peso e impugna le maniglie. Stai in piedi esattamente tra le due torri con le braccia estese lateralmente. Testa alta, petto in fuori e braccia a formare una "T". Questa è la posizione di partenza. Mantenendo i gomiti estesi, tira le braccia dritte verso i fianchi. Torna alla posizione iniziale dopo una pausa nel picco di contrazione. Ripeti per il numero di ripetizioni prescritto.', 
  'chest', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Iron_Cross/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Iron_Cross/1.jpg'], 
  NOW()
),
(
  '584c0c3c-c9b9-4a20-a7e3-9870680fbc24', 
  'Cable Judo Flip', 
  'Cable Judo Flip', 
  'Connect a rope attachment to a tower, and move the cable to the lowest pulley position. Stand with your side to the cable with a wide stance, and grab the rope with both hands.
Twist your body away from the pulley as you bring the rope over your shoulder like you''re performing a judo flip.
Shift your weight between your feet as you twist and crunch forward, pulling the cable downward.
Return to the starting position and repeat until failure.
Then, reposition and repeat the same series of movements on the opposite side.', 
  'Collega una corda a una torre e posiziona la carrucola nella posizione più bassa. Stai di lato rispetto alla torre con una posizione dei piedi ampia e afferra la corda con entrambe le mani. Ruota il corpo lontano dalla carrucola portando la corda sopra la spalla come se stessi eseguendo un judo flip. Sposta il peso tra i piedi mentre ruoti e fletti il busto in avanti, tirando il cavo verso il basso. Torna alla posizione di partenza e ripeti fino a esaurimento. Successivamente, cambia lato e ripeti la sequenza.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Judo_Flip/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Judo_Flip/1.jpg'], 
  NOW()
),
(
  '635e6136-a77d-435b-90e0-a9cc7311ad5d', 
  'Cable Lying Triceps Extension', 
  'Cable Lying Triceps Extension', 
  'Lie on a flat bench and grasp the straight bar attachment of a low pulley with a narrow overhand grip. Tip: The easiest way to do this is to have someone hand you the bar as you lay down.
With your arms extended, position the bar over your torso. Your arms and your torso should create a 90-degree angle. This will be your starting position.
Lower the bar by bending at the elbow while keeping the upper arms stationary and elbows in. Go down until the bar lightly touches your forehead. Breathe in as you perform this portion of the movement.
Flex the triceps as you lift the bar back to its starting position. Exhale as you perform this portion of the movement.
Hold for a second at the contracted position and repeat for the recommended amount of repetitions.', 
  'Sdraiati su una panca piana e afferra l''accessorio a barra dritta collegato a una carrucola bassa con una presa prona stretta. Suggerimento: il modo più semplice è farsi passare la barra da qualcuno mentre ci si sdraia. Con le braccia tese, posiziona la barra sopra il torace. Le braccia e il torace dovrebbero formare un angolo di 90 gradi. Questa sarà la posizione di partenza. Abbassa la barra flettendo i gomiti, mantenendo la parte superiore delle braccia ferma e i gomiti chiusi. Scendi fino a quando la barra tocca leggermente la fronte. Inspira durante questa fase del movimento. Contrai i tricipiti mentre riporti la barra nella posizione iniziale. Espira durante questa fase del movimento. Mantieni la contrazione per un secondo nella posizione finale e ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lying_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lying_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '988597b6-9f88-4e69-9bf7-8472d6343062', 
  'Cable One Arm Tricep Extension', 
  'Cable One Arm Tricep Extension', 
  'With your right hand, grasp a single handle attached to the high-cable pulley using a supinated (underhand; palms facing up) grip. You should be standing directly in front of the weight stack.
Now pull the handle down so that your upper arm and elbow are locked in to the side of your body. Your upper arm and forearm should form an acute angle (less than 90-degrees). You can keep the other arm by the waist and you can have one leg in front of you and the other one back for better balance. This will be your starting position.
As you contract the triceps, move the single handle attachment down to your side until your arm is straight. Breathe out as you perform this movement. Tip: Only the forearms should move. Your upper arms should remain stationary at all times.
Squeeze the triceps and hold for a second in this contracted position.
Slowly return the handle to the starting position.
Repeat for the recommended amount of repetitions and then perform the same movement with the other arm.', 
  'Con la mano destra, afferra una maniglia singola collegata alla carrucola alta utilizzando una presa supina (palmi rivolti verso l''alto). Posizionati direttamente di fronte al pacco pesi. Tira la maniglia verso il basso in modo che la parte superiore del braccio e il gomito siano bloccati lungo il fianco. Il braccio e l''avambraccio devono formare un angolo acuto (meno di 90 gradi). Puoi tenere l''altro braccio lungo il fianco e posizionare una gamba avanti e l''altra indietro per un migliore equilibrio. Questa sarà la posizione di partenza. Mentre contrai il tricipite, porta la maniglia verso il basso finché il braccio non è teso. Espira durante il movimento. Suggerimento: solo gli avambracci devono muoversi; la parte superiore delle braccia deve rimanere ferma in ogni momento. Contrai il tricipite e mantieni per un secondo la posizione. Torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato e poi esegui lo stesso movimento con l''altro braccio.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_One_Arm_Tricep_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_One_Arm_Tricep_Extension/1.jpg'], 
  NOW()
),
(
  '949fd777-d388-4823-8fc4-70a11917dc52', 
  'Cable Preacher Curl', 
  'Cable Preacher Curl', 
  'Place a preacher bench about 2 feet in front of a pulley machine.
Attach a straight bar to the low pulley.
Sit at the preacher bench with your elbow and upper arms firmly on top of the bench pad and have someone hand you the bar from the low pulley.
Grab the bar and fully extend your arms on top of the preacher bench pad. This will be your starting position.
Now start pilling the weight up towards your shoulders and squeeze the biceps hard at the top of the movement. Exhale as you perform this motion. Also, hold for a second at the top.
Now slowly lower the weight to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Posiziona una panca Scott (preacher bench) a circa 60 cm da una macchina a carrucole. Collega una barra dritta alla carrucola bassa. Siediti sulla panca con i gomiti e la parte superiore delle braccia ben poggiati sul cuscinetto e fatti passare la barra dalla carrucola bassa. Afferra la barra e distendi completamente le braccia sul cuscinetto della panca. Questa sarà la posizione di partenza. Inizia a sollevare il peso verso le spalle e contrai intensamente i bicipiti nella parte superiore del movimento. Espira durante l''esecuzione e mantieni la contrazione per un secondo. Torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Preacher_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Preacher_Curl/1.jpg'], 
  NOW()
),
(
  'ac9fa529-0e64-4ddb-a267-0367235f745c', 
  'Cable Rear Delt Fly', 
  'Cable Rear Delt Fly', 
  'Adjust the pulleys to the appropriate height and adjust the weight. The pulleys should be above your head.
Grab the left pulley with your right hand and the right pulley with your left hand, crossing them in front of you. This will be your starting position.
Initiate the movement by moving your arms back and outward, keeping your arms straight as you execute the movement.
Pause at the end of the motion before returning the handles to the start position.', 
  'Regola le carrucole all''altezza appropriata, sopra la testa, e seleziona il peso. Afferra la carrucola sinistra con la mano destra e quella destra con la mano sinistra, incrociandole davanti a te. Questa sarà la posizione di partenza. Inizia il movimento portando le braccia verso l''esterno e all''indietro, mantenendole tese durante l''esecuzione. Fermati alla fine del movimento prima di riportare le maniglie alla posizione di partenza.', 
  'shoulders', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rear_Delt_Fly/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rear_Delt_Fly/1.jpg'], 
  NOW()
),
(
  '32588148-c2e0-4fbd-9c0d-4f15e053ca4f', 
  'Cable Reverse Crunch', 
  'Cable Reverse Crunch', 
  'Connect an ankle strap attachment to a low pulley cable and position a mat on the floor in front of it.
Sit down with your feet toward the pulley and attach the cable to your ankles.
Lie down, elevate your legs and bend your knees at a 90-degree angle. Your legs and the cable should be aligned. If not, adjust the pulley up or down until they are.
With your hands behind your head, bring your knees inward to your torso and elevate your hips off the floor.
Pause for a moment and in a slow and controlled manner drop your hips and bring your legs back to the starting 90-degree angle. You should still have tension on your abs in the resting position.
Repeat the same movement to failure.', 
  'Collega un cinturino per caviglia a una carrucola bassa e posiziona un tappetino sul pavimento di fronte ad essa. Siediti con i piedi verso la carrucola e fissa il cavo alle caviglie. Sdraiati, solleva le gambe e piega le ginocchia a 90 gradi. Le gambe e il cavo devono essere allineati; in caso contrario, regola l''altezza della carrucola. Con le mani dietro la testa, porta le ginocchia verso il torace e solleva i fianchi dal pavimento. Fermati un istante, quindi in modo lento e controllato abbassa i fianchi e riporta le gambe nella posizione iniziale a 90 gradi. Mantieni sempre in tensione gli addominali. Ripeti fino al cedimento muscolare.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Reverse_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Reverse_Crunch/1.jpg'], 
  NOW()
),
(
  'b840eacc-6a8a-43a6-825c-68853f79a3b7', 
  'Cable Rope Overhead Triceps Extension', 
  'Cable Rope Overhead Triceps Extension', 
  'Attach a rope to the bottom pulley of the pulley machine.
Grasping the rope with both hands, extend your arms with your hands directly above your head using a neutral grip (palms facing each other). Your elbows should be in close to your head and the arms should be perpendicular to the floor with the knuckles aimed at the ceiling. This will be your starting position.
Slowly lower the rope behind your head as you hold the upper arms stationary. Inhale as you perform this movement and pause when your triceps are fully stretched.
Return to the starting position by flexing your triceps as you breathe out.
Repeat for the recommended amount of repetitions.', 
  'Collega una corda alla carrucola bassa. Afferrando la corda con entrambe le mani, estendi le braccia sopra la testa con una presa neutra (palmi rivolti l''uno verso l''altro). I gomiti devono essere vicini alla testa e le braccia perpendicolari al pavimento, con le nocche rivolte verso il soffitto. Questa sarà la posizione di partenza. Abbassa lentamente la corda dietro la testa mantenendo ferme le braccia. Inspira durante il movimento e fermati quando i tricipiti sono completamente allungati. Torna alla posizione di partenza flettendo i tricipiti ed espirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rope_Overhead_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rope_Overhead_Triceps_Extension/1.jpg'], 
  NOW()
),
(
  '9d65b596-39c8-4b20-94f2-63dabb4d2df9', 
  'Cable Rope Rear-Delt Rows', 
  'Cable Rope Rear-Delt Rows', 
  'Sit in the same position on a low pulley row station as you would if you were doing seated cable rows for the back.
Attach a rope to the pulley and grasp it with an overhand grip. Your arms should be extended and parallel to the floor with the elbows flared out.
Keep your lower back upright and slide your hips back so that your knees are slightly bent. This will be your starting position.
Pull the cable attachment towards your upper chest, just below the neck, as you keep your elbows up and out to the sides. Continue this motion as you exhale until the elbows travel slightly behind the back. Tip: Keep your upper arms horizontal, perpendicular to the torso and parallel to the floor throughout the motion.
Go back to the initial position where the arms are extended and the shoulders are stretched forward. Inhale as you perform this portion of the movement.
Repeat for the recommended amount of repetitions.', 
  'Siediti in posizione di rematore basso, come faresti per un normale row ai cavi. Collega una corda alla carrucola e afferrala con una presa prona. Le braccia devono essere tese e parallele al pavimento con i gomiti rivolti verso l''esterno. Mantieni la parte bassa della schiena dritta e sposta i fianchi all''indietro con le ginocchia leggermente flesse. Questa sarà la posizione di partenza. Tira la corda verso la parte superiore del petto, appena sotto il collo, mantenendo i gomiti alti e verso l''esterno. Continua il movimento espirando finché i gomiti non superano leggermente la schiena. Suggerimento: mantieni le braccia orizzontali, perpendicolari al busto e parallele al pavimento per tutto il movimento. Torna alla posizione iniziale in cui le braccia sono tese e le spalle allungate in avanti. Inspira durante questa fase. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rope_Rear-Delt_Rows/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Rope_Rear-Delt_Rows/1.jpg'], 
  NOW()
),
(
  '61168b21-d6b2-4caf-81eb-86a9551cba97', 
  'Cable Russian Twists', 
  'Cable Russian Twists', 
  'Connect a standard handle attachment, and position the cable to a middle pulley position.
Lie on a stability ball perpendicular to the cable and grab the handle with one hand. You should be approximately arm''s length away from the pulley, with the tension of the weight on the cable.
Grab the handle with both hands and fully extend your arms above your chest. You hands should be directly in-line with the pulley. If not, adjust the pulley up or down until they are.
Keep your hips elevated and abs engaged. Rotate your torso away from the pulley for a full-quarter rotation. Your body should be flat from head to knees.
Pause for a moment and in a slow and controlled manner reset to the starting position. You should still have side tension on the cable in the resting position.
Repeat the same movement to failure.
Then, reposition and repeat the same series of movements on the opposite side.', 
  'Collega una maniglia standard e posiziona la carrucola a un''altezza media. Sdraiati su una fitball perpendicolarmente al cavo e afferra la maniglia con una mano. Dovresti essere a circa una lunghezza di braccio dalla carrucola, con il peso del cavo in tensione. Afferra la maniglia con entrambe le mani e distendi completamente le braccia sopra il petto. Le mani devono essere in linea con la carrucola; in caso contrario, regola l''altezza. Mantieni i fianchi sollevati e gli addominali contratti. Ruota il busto allontanandoti dalla carrucola per una rotazione completa di un quarto. Il corpo deve formare una linea retta dalla testa alle ginocchia. Fermati un istante e torna lentamente alla posizione iniziale in modo controllato. Mantieni la tensione sul cavo anche nella posizione di riposo. Ripeti fino al cedimento, poi cambia lato e ripeti la serie.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Russian_Twists/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Russian_Twists/1.jpg'], 
  NOW()
),
(
  'de80846d-3986-46ad-a06a-c04feca982c6', 
  'Cable Seated Crunch', 
  'Cable Seated Crunch', 
  'Seat on a flat bench with your back facing a high pulley.
Grasp the cable rope attachment with both hands (with the palms of the hands facing each other) and place your hands securely over both shoulders. Tip: Allow the weight to hyperextend the lower back slightly. This will be your starting position.
With the hips stationary, flex the waist so the elbows travel toward the hips. Breathe out as you perform this step.
As you inhale, go back to the initial position slowly.
Repeat for the recommended amount of repetitions.', 
  'Siediti su una panca piana con la schiena rivolta a una carrucola alta. Afferra la corda con entrambe le mani (palmi rivolti l''uno verso l''altro) e posiziona le mani saldamente sopra le spalle. Suggerimento: permetti al peso di iperestendere leggermente la parte bassa della schiena. Questa sarà la posizione di partenza. Con i fianchi fermi, fletti la vita in modo che i gomiti si muovano verso i fianchi. Espira durante questa fase. Mentre inspiri, torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Seated_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Seated_Crunch/1.jpg'], 
  NOW()
),
(
  'f23e3e9a-b03c-4d75-9978-afe2e20d6b61', 
  'Cable Seated Lateral Raise', 
  'Cable Seated Lateral Raise', 
  'Stand in the middle of two low pulleys that are opposite to each other and place a flat bench right behind you (in perpendicular fashion to you; the narrow edge of the bench should be the one behind you). Select the weight to be used on each pulley.
Now sit at the edge of the flat bench behind you with your feet placed in front of your knees.
Bend forward while keeping your back flat and rest your torso on the thighs.
Have someone give you the single handles attached to the pulleys. Grasp the left pulley with the right hand and the right pulley with the left after you select your weight. The pulleys should run under your knees and your arms will be extended with palms facing each other and a slight bend at the elbows. This will be the starting position.
While keeping the arms stationary, raise the upper arms to the sides until they are parallel to the floor and at shoulder height. Exhale during the execution of this movement and hold the contraction for a second.
Slowly lower your arms to the starting position as you inhale.
Repeat for the recommended amount of repetitions. Tip: Maintain upper arms perpendicular to torso and a fixed elbow position (10 degree to 30 degree angle) throughout exercise.', 
  'Mettiti tra due carrucole basse opposte e posiziona una panca piana dietro di te (perpendicolare alla tua posizione; il lato stretto della panca deve essere dietro di te). Seleziona il peso. Siediti sul bordo della panca con i piedi ben piantati davanti alle ginocchia. Piegati in avanti mantenendo la schiena piatta e appoggia il busto sulle cosce. Fatti passare le maniglie collegate alle carrucole: afferra la carrucola sinistra con la mano destra e quella destra con la mano sinistra. I cavi passeranno sotto le ginocchia; le braccia saranno tese con i palmi rivolti l''uno verso l''altro e un leggero piegamento dei gomiti. Questa sarà la posizione di partenza. Mantenendo le braccia ferme, solleva le braccia verso i lati finché non sono parallele al pavimento e all''altezza delle spalle. Espira durante l''esecuzione e mantieni la contrazione per un secondo. Abbassa lentamente le braccia nella posizione iniziale mentre inspiri. Ripeti per il numero di ripetizioni raccomandato. Suggerimento: mantieni la parte superiore delle braccia perpendicolare al busto e i gomiti a un angolo fisso (10-30 gradi) durante tutto l''esercizio.', 
  'shoulders', 
  'middle back', 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Seated_Lateral_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Seated_Lateral_Raise/1.jpg'], 
  NOW()
),
(
  'cd45565b-37f5-4758-bb38-ca320ae5b8c7', 
  'Cable Shoulder Press', 
  'Cable Shoulder Press', 
  'Move the cables to the bottom of the towers and select an appropriate weight.
Stand directly in between the uprights. Grasp the cables and hold them at shoulder height, palms facing forward. This will be your starting position.
Keeping your head and chest up, extend through the elbow to press the handles directly over head.
After pausing at the top, return to the starting position and repeat.', 
  'Posiziona i cavi nella parte bassa delle torri e seleziona un peso adeguato. Mettiti in piedi esattamente tra i montanti. Afferra i cavi e tienili all''altezza delle spalle, con i palmi rivolti in avanti. Questa sarà la tua posizione di partenza. Mantenendo la testa e il petto alti, distendi i gomiti per spingere le maniglie direttamente sopra la testa. Dopo una breve pausa in alto, ritorna alla posizione di partenza e ripeti.', 
  'shoulders', 
  'triceps', 
  'cable', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Shoulder_Press/1.jpg'], 
  NOW()
),
(
  '5ca9aa46-c464-451f-ac35-a9c9e59a1dd3', 
  'Cable Shrugs', 
  'Cable Shrugs', 
  'Grasp a cable bar attachment that is attached to a low pulley with a shoulder width or slightly wider overhand (palms facing down) grip.
Stand erect close to the pulley with your arms extended in front of you holding the bar. This will be your starting position.
Lift the bar by elevating the shoulders as high as possible as you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the bar. Only the shoulders should be moving up and down.
Lower the bar back to the original position.
Repeat for the recommended amount of repetitions.', 
  'Afferra una barra collegata a una puleggia bassa con una presa prona (palmi rivolti verso il basso) di larghezza pari o leggermente superiore a quella delle spalle. Stai in piedi in posizione eretta vicino alla puleggia con le braccia distese davanti a te che tengono la barra. Questa sarà la tua posizione di partenza. Solleva la barra elevando le spalle il più possibile mentre espiri. Mantieni la contrazione nella parte alta per un secondo. Consiglio: le braccia devono rimanere sempre tese. Evita di usare i bicipiti per aiutare il sollevamento; solo le spalle devono muoversi verso l''alto e verso il basso. Abbassa la barra fino alla posizione originale e ripeti per il numero di ripetizioni raccomandato.', 
  'traps', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Shrugs/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Shrugs/1.jpg'], 
  NOW()
),
(
  'e7f767ad-fbeb-4307-8d52-3b8fa5e81bb9', 
  'Cable Wrist Curl', 
  'Cable Wrist Curl', 
  'Start out by placing a flat bench in front of a low pulley cable that has a straight bar attachment.
Use your arms to grab the cable bar with a narrow to shoulder width supinated grip (palms up) and bring them up so that your forearms are resting against the top of your thighs. Your wrists should be hanging just beyond your knees.
Start out by curling your wrist upwards and exhaling. Keep the contraction for a second.
Slowly lower your wrists back down to the starting position while inhaling.
Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.
Repeat for the recommended amount of repetitions.', 
  'Posiziona una panca piana davanti a una puleggia bassa dotata di un''asta dritta. Afferra l''asta con una presa supina (palmi rivolti verso l''alto) di larghezza pari o inferiore a quella delle spalle e appoggia gli avambracci sopra le cosce. I polsi dovrebbero sporgere oltre le ginocchia. Inizia flettendo i polsi verso l''alto ed espirando. Mantieni la contrazione per un secondo. Abbassa lentamente i polsi alla posizione di partenza mentre inspiri. Gli avambracci devono rimanere fermi; il movimento deve coinvolgere esclusivamente i polsi. Ripeti per il numero di ripetizioni raccomandato.', 
  'forearms', 
  NULL, 
  'cable', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Wrist_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Wrist_Curl/1.jpg'], 
  NOW()
),
(
  'e4984531-48f3-40ee-800f-0a398ed951b8', 
  'Calf-Machine Shoulder Shrug', 
  'Calf-Machine Shoulder Shrug', 
  'Position yourself on the calf machine so that the shoulder pads are above your shoulders. Your torso should be straight with the arms extended normally by your side. This will be your starting position.
Raise your shoulders up towards your ears as you exhale and hold the contraction for a full second.
Slowly return to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Posizionati sulla macchina per polpacci in modo che i cuscinetti per le spalle siano sopra di esse. Il busto deve essere dritto con le braccia distese lungo i fianchi. Questa sarà la tua posizione di partenza. Solleva le spalle verso le orecchie mentre espiri e mantieni la contrazione per un secondo pieno. Ritorna lentamente alla posizione di partenza mentre inspiri. Ripeti per il numero di ripetizioni raccomandato.', 
  'traps', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf-Machine_Shoulder_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf-Machine_Shoulder_Shrug/1.jpg'], 
  NOW()
),
(
  'b1f4a5d1-6a2e-48cd-b36c-fe511dcaa3c0', 
  'Calf Press', 
  'Calf Press', 
  'Adjust the seat so that your legs are only slightly bent in the start position. The balls of your feet should be firmly on the platform.
Select an appropriate weight, and grasp the handles. This will be your starting position.
Straighten the legs by extending the knees, just barely lifting the weight from the stack. Your ankle should be fully flexed, toes pointing up. Execute the movement by pressing downward through the balls of your feet as far as possible.
After a brief pause, reverse the motion and repeat.', 
  'Regola il sedile in modo che le gambe siano solo leggermente flesse nella posizione iniziale. L''avampiede deve essere saldamente sulla piattaforma. Seleziona un peso appropriato e afferra le maniglie. Questa sarà la tua posizione di partenza. Distendi le gambe estendendo le ginocchia, sollevando appena il peso dal pacco. Le caviglie devono essere completamente flesse, con le dita dei piedi rivolte verso l''alto. Esegui il movimento spingendo verso il basso con l''avampiede il più lontano possibile. Dopo una breve pausa, inverte il movimento e ripeti.', 
  'calves', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Press/1.jpg'], 
  NOW()
),
(
  '33513df3-aa8a-4cae-a3d8-764da91e2ce9', 
  'Calf Press On The Leg Press Machine', 
  'Calf Press su Leg Press', 
  'Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance.
Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you without locking your knees. (Note: In some leg press units you can leave the safety bars on for increased safety. If your leg press unit allows for this, then this is the preferred method of performing the exercise.) Your torso and the legs should make perfect 90-degree angle. Now carefully place your toes and balls of your feet on the lower portion of the platform with the heels extending off. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position.
Press on the platform by raising your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down.
Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched.
Repeat for the recommended amount of repetitions.', 
  'Seduto sulla leg press, posiziona i piedi sulla piattaforma davanti a te con una larghezza pari a quella delle spalle. Abbassa le barre di sicurezza e spingi la piattaforma fino a distendere le gambe senza bloccare le ginocchia (nota: se la macchina lo consente, mantenere le barre di sicurezza è preferibile). Il busto e le gambe devono formare un angolo di 90 gradi. Posiziona accuratamente l''avampiede sulla parte inferiore della piattaforma, lasciando i talloni nel vuoto. Questa sarà la tua posizione di partenza. Spingi sulla piattaforma sollevando i talloni mentre espiri, estendendo le caviglie il più possibile e contraendo i polpacci. Assicurati che le ginocchia restino ferme e non flesse. Mantieni la contrazione per un secondo, quindi torna lentamente alla posizione iniziale mentre inspiri, abbassando i talloni finché i polpacci non sono allungati. Ripeti.', 
  'calves', 
  NULL, 
  'machine', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Press_On_The_Leg_Press_Machine/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Press_On_The_Leg_Press_Machine/1.jpg'], 
  NOW()
),
(
  'bde71a4a-2ade-4b4e-9603-67c6bd9d876a', 
  'Calf Raise On A Dumbbell', 
  'Calf Raise su Manubrio', 
  'Hang on to a sturdy object for balance and stand on a dumbbell handle, preferably one with round plates so that it rolls as in this manner you have to work harder to stabilize yourself; thus increasing the effectiveness of the exercise.
Now roll your foot slightly forward so that you can get a nice stretch of the calf. This will be your starting position.
Lift the calf as you roll your foot over the top of the handle so that you get a full extension. Exhale during the execution of this movement. Contract the calf hard at the top and hold for a second. Tip: As you come up, roll the dumbbell slightly backward.
Now inhale as you roll the dumbbell slightly forward as you come down to get a better stretch.
Repeat for the recommended amount of repetitions.', 
  'Aggrappati a un oggetto stabile per l''equilibrio e posizionati sopra il manico di un manubrio (preferibilmente con dischi tondi per renderlo instabile e aumentare l''efficacia). Fai rotolare il piede leggermente in avanti per allungare il polpaccio. Questa è la posizione di partenza. Solleva il tallone facendo rotolare il piede sopra il manico per ottenere una completa estensione. Espira durante il movimento, contrai intensamente il polpaccio in alto e mantieni per un secondo. Consiglio: durante la risalita, fai rotolare leggermente il manubrio all''indietro. Inspira mentre fai rotolare il manubrio in avanti durante la discesa per un migliore allungamento. Ripeti.', 
  'calves', 
  NULL, 
  'dumbbell', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raise_On_A_Dumbbell/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raise_On_A_Dumbbell/1.jpg'], 
  NOW()
),
(
  'c4853ab0-9176-4964-b263-4519ee076e0e', 
  'Calf Raises - With Bands', 
  'Calf Raises con Bande Elastiche', 
  'Grab an exercise band and stand on it with your toes making sure that the length of the band between the foot and the arms is the same for both sides.
While holding the handles of the band, raise the arms to the side of your head as if you were getting ready to perform a shoulder press. The palms should be facing forward with the elbows bent and to the sides. This movement will create tension on the band. This will be your starting position.
Keeping the hands by your shoulder, stand up on your toes as you exhale and contract the calves hard at the top of the movement.
After a one second contraction, slowly go back down to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Mettiti in piedi sopra una banda elastica con la punta dei piedi, assicurandoti che la lunghezza della banda sia uguale su entrambi i lati. Afferra le maniglie della banda e solleva le braccia ai lati della testa come se dovessi eseguire un lento avanti. I palmi devono essere rivolti in avanti, con i gomiti piegati verso l''esterno. Questo movimento creerà tensione sulla banda. Questa è la posizione di partenza. Mantenendo le mani all''altezza delle spalle, sollevati sulle punte dei piedi mentre espiri, contraendo i polpacci intensamente. Dopo un secondo di contrazione, torna lentamente alla posizione iniziale. Ripeti.', 
  'calves', 
  NULL, 
  'bands', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '0913e1c5-c5a7-477e-8e4f-74fd20ee4c88', 
  'Calf Stretch Elbows Against Wall', 
  'Stretching Polpacci con Gomiti al Muro', 
  'Stand facing a wall from a couple feet away.
Lean against the wall, placing your weight on your forearms.
Attempt to keep your heels on the ground. Hold for 10-20 seconds. You may move further or closer the wall, making it more or less difficult, respectively.', 
  'Mettiti di fronte a una parete a circa 60 cm di distanza. Appoggiati al muro scaricando il peso sugli avambracci. Cerca di mantenere i talloni a terra. Mantieni la posizione per 10-20 secondi. Puoi regolare la difficoltà avvicinandoti o allontanandoti dalla parete.', 
  'calves', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Elbows_Against_Wall/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Elbows_Against_Wall/1.jpg'], 
  NOW()
),
(
  '7653034a-3a53-43db-b190-ef0c26d81a7c', 
  'Calf Stretch Hands Against Wall', 
  'Stretching Polpacci con Mani al Muro', 
  'Stand facing a wall from several feet away. Stagger your stance, placing one foot forward.
Lean forward and rest your hands on the wall, keeping your heel, hip and head in a straight line.
Attempt to keep your heel on the ground. Hold for 10-20 seconds and then switch sides.', 
  'Mettiti di fronte a una parete a una certa distanza. Assumi una posizione sfalsata con un piede in avanti. Inclinati in avanti appoggiando le mani al muro, mantenendo tallone, anca e testa allineati. Cerca di mantenere il tallone a terra. Mantieni per 10-20 secondi e poi cambia gamba.', 
  'calves', 
  NULL, 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Hands_Against_Wall/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Stretch_Hands_Against_Wall/1.jpg'], 
  NOW()
),
(
  '358bb43c-9276-4982-bd50-0809de764a4c', 
  'Calves-SMR', 
  'SMR Polpacci', 
  'Begin seated on the floor. Place a foam roller underneath your lower leg. Your other leg can either be crossed over the opposite or be placed on the floor, supporting some of your weight. This will be your starting position.
Place your hands to your side or just behind you, and press down to raise your hips off of the floor, placing much of your weight against your calf muscle. Roll from below the knee to above the ankle, pausing at points of tension for 10-30 seconds. Repeat for the other leg.', 
  'Inizia seduto sul pavimento. Posiziona un foam roller sotto la parte inferiore della gamba. L''altra gamba può essere incrociata sopra quella opposta o appoggiata a terra per sostenere parte del peso. Questa sarà la posizione di partenza. Posiziona le mani ai fianchi o appena dietro di te, quindi fai pressione per sollevare i fianchi da terra, scaricando gran parte del peso sul muscolo del polpaccio. Rotola dalla zona sotto il ginocchio fino a sopra la caviglia, fermandoti sui punti di tensione per 10-30 secondi. Ripeti con l''altra gamba.', 
  'calves', 
  NULL, 
  'foam roll', 
  'intermediate', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calves-SMR/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calves-SMR/1.jpg'], 
  NOW()
),
(
  'd049e24b-8620-4d44-a349-66adaf7d7a4d', 
  'Car Deadlift', 
  'Car Deadlift', 
  'This event apparatus typically has neutral grip handles, however some have a straight bar that you can approach like a normal deadlift. The apparatus can be loaded with a vehicle or other heavy objects such as tractor tires or kegs.
Center yourself between the handles if you are a strong squatter, or back a couple inches if you are a strong deadlifter. You feet should be about hip width apart. Bend at the hip to grip the handles. With your feet and your grip set, take a big breath and then lower your hips and flex the knees.
Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. As the weight comes up, pull your shoulder blades together as you drive your hips forward.
Lower the weight by bending at the hips and guiding it to the floor.', 
  'Questo attrezzo dispone solitamente di maniglie con presa neutra, sebbene alcuni modelli presentino una barra dritta utilizzabile come un normale stacco da terra. L''attrezzo può essere caricato con un veicolo o altri oggetti pesanti come pneumatici da trattore o barili. Centrati tra le maniglie se preferisci uno squat potente, o arretra di alcuni centimetri se hai una tecnica di stacco più efficace. I piedi dovrebbero essere larghi quanto le anche. Piegati a livello delle anche per afferrare le maniglie. Con piedi e presa posizionati, fai un respiro profondo, abbassa i fianchi e fletti le ginocchia. Guarda avanti, tieni il petto alto e la schiena inarcata, e inizia a spingere attraverso i talloni per sollevare il peso. Mentre il peso sale, stringi le scapole tra loro spingendo i fianchi in avanti. Abbassa il peso flettendo le anche e guidandolo verso il pavimento.', 
  'quadriceps', 
  'forearms', 
  'other', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Car_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Car_Deadlift/1.jpg'], 
  NOW()
),
(
  '8019afc0-6bdf-4f93-ab96-83283f0425c6', 
  'Car Drivers', 
  'Car Drivers', 
  'While standing upright, hold a barbell plate in both hands at the 3 and 9 o''clock positions. Your palms should be facing each other and your arms should be extended straight out in front of you. This will be your starting position.
Initiate the movement by rotating the plate as far to one side as possible. Use the same type of movement you would use to turn a steering wheel to one side.
Reverse the motion, turning it all the way to the opposite side.
Repeat for the recommended amount of repetitions.', 
  'In posizione eretta, impugna un disco da bilanciere con entrambe le mani nelle posizioni delle ore 3 e 9. I palmi devono essere rivolti l''uno verso l''altro e le braccia tese in avanti. Questa sarà la posizione di partenza. Inizia il movimento ruotando il disco il più possibile verso un lato, utilizzando lo stesso movimento che useresti per girare il volante di un''auto. Inverti il movimento, ruotando il disco fino al lato opposto. Ripeti per il numero di ripetizioni raccomandato.', 
  'shoulders', 
  'forearms', 
  'barbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Car_Drivers/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Car_Drivers/1.jpg'], 
  NOW()
),
(
  '04786657-3fba-4304-85f7-d41b5dacd07d', 
  'Carioca Quick Step', 
  'Carioca Quick Step', 
  'Begin with your feet a few inches apart and your left arm up in a relaxed, athletic position.
With your right foot, quick step behind and pull the knee up.
Fire your arms back up when you pull the right knee, being sure that your knee goes straight up and down. Avoid turning your feet as you move and continue to look forward as you move to the side.', 
  'Inizia con i piedi a pochi centimetri di distanza e il braccio sinistro sollevato in una posizione atletica rilassata. Con il piede destro, esegui un passo veloce dietro e tira il ginocchio verso l''alto. Riporta le braccia verso l''alto quando sollevi il ginocchio destro, assicurandoti che il movimento del ginocchio sia verticale. Evita di ruotare i piedi mentre ti muovi e continua a guardare avanti durante lo spostamento laterale.', 
  'adductors', 
  'abdominals', 
  NULL, 
  'beginner', 
  NULL, 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Carioca_Quick_Step/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Carioca_Quick_Step/1.jpg'], 
  NOW()
),
(
  'e60dce4a-23b6-42d6-8591-574a968841c7', 
  'Cat Stretch', 
  'Cat Stretch (Posizione del gatto)', 
  'Position yourself on the floor on your hands and knees.
Pull your belly in and round your spine, lower back, shoulders, and neck, letting your head drop.
Hold for 15 seconds.', 
  'Mettiti a terra carponi, appoggiandoti su mani e ginocchia. Risucchia l''addome verso l''interno e incurva la colonna vertebrale, la parte bassa della schiena, le spalle e il collo, lasciando cadere la testa. Mantieni la posizione per 15 secondi.', 
  'lower back', 
  'middle back', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cat_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cat_Stretch/1.jpg'], 
  NOW()
),
(
  '55173001-f060-451d-b270-0921405e0b6c', 
  'Catch and Overhead Throw', 
  'Catch and Overhead Throw', 
  'Begin standing while facing a wall or a partner.
Using both hands, position the ball behind your head, stretching as much as possible, and forcefully throw the ball forward.
Ensure that you follow your throw through, being prepared to receive your rebound from your throw. If you are throwing against the wall, make sure that you stand close enough to the wall to receive the rebound, and aim a little higher than you would with a partner.', 
  'Inizia in piedi di fronte a una parete o a un partner. Usando entrambe le mani, posiziona la palla dietro la testa, allungandoti il più possibile, e lancia la palla in avanti con forza. Assicurati di seguire il movimento del lancio, preparandoti a ricevere il rimbalzo. Se ti stai allenando contro una parete, assicurati di stare abbastanza vicino per ricevere il rimbalzo e mira leggermente più in alto rispetto a quanto faresti con un partner.', 
  'lats', 
  'abdominals', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Catch_and_Overhead_Throw/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Catch_and_Overhead_Throw/1.jpg'], 
  NOW()
),
(
  '2be0d91c-84ab-4d75-8e1d-44eac0691f0a', 
  'Chain Handle Extension', 
  'Chain Handle Extension', 
  'You will need two cable handle attachments and a flat bench, as well as chains, for this exercise. Clip the middle of the chains to the handles, and position yourself on the flat bench. Your elbows should be pointing straight up.
Begin by extending through the elbow, keeping your upper arm still, with your wrists pronated.
Pause at the lockout, and reverse the motion to return to the starting position.', 
  'Per questo esercizio sono necessari due attacchi a maniglia per cavi, una panca piana e delle catene. Aggancia il centro delle catene alle maniglie e posizionati sulla panca piana. I gomiti dovrebbero essere rivolti verso l''alto. Inizia estendendo i gomiti, mantenendo le braccia ferme e i polsi in pronazione. Fermati al punto di blocco e inverti il movimento per tornare alla posizione di partenza.', 
  'triceps', 
  NULL, 
  'other', 
  'intermediate', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chain_Handle_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chain_Handle_Extension/1.jpg'], 
  NOW()
),
(
  '4012cb81-1d20-4bb8-92b3-9c2792d0473d', 
  'Chain Press', 
  'Chain Press', 
  'Begin by connecting the chains to the cable handle attachments. Position yourself on the flat bench in the same position as for a dumbbell press. Your wrists should be pronated and arms perpendicular to the floor. This will be your starting position.
Lower the chains by flexing the elbows, unloading some of the chain onto the floor.
Continue until your elbow forms a 90 degree angle, and then reverse the motion by extending through the elbow to lockout.', 
  'Inizia collegando le catene agli attacchi a maniglia dei cavi. Posizionati sulla panca piana nella stessa posizione prevista per le distensioni con manubri. I polsi devono essere in pronazione e le braccia perpendicolari al pavimento. Questa sarà la posizione di partenza. Abbassa le catene flettendo i gomiti, scaricando parte del peso delle catene sul pavimento. Continua finché il gomito non forma un angolo di 90 gradi, quindi inverti il movimento estendendo il braccio fino al blocco.', 
  'chest', 
  'shoulders', 
  'other', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chain_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chain_Press/1.jpg'], 
  NOW()
),
(
  '0238535d-df05-4134-821a-078cdb806c7d', 
  'Chair Leg Extended Stretch', 
  'Chair Leg Extended Stretch', 
  'Sit upright in a chair and grip the seat on the sides.
Raise one leg, extending the knee, flexing the ankle as you do so.
Slowly move that leg outward as far as you can, and then back to the center and down.
Repeat for your other leg.', 
  'Siediti dritto su una sedia e afferra i lati della seduta. Solleva una gamba, estendendo il ginocchio e flettendo la caviglia durante il movimento. Sposta lentamente la gamba verso l''esterno il più possibile, poi riportala al centro e abbassala. Ripeti con l''altra gamba.', 
  'hamstrings', 
  'adductors', 
  'other', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Leg_Extended_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Leg_Extended_Stretch/1.jpg'], 
  NOW()
),
(
  '6554dfd3-8876-41d2-bd4f-0d7b8eeee386', 
  'Chair Lower Back Stretch', 
  'Chair Lower Back Stretch', 
  'Sit upright on a chair.
Bend to one side with your arm over your head. You can hold onto the chair with your free hand.
Hold for 10 seconds, and repeat for your other side.', 
  'Siediti dritto su una sedia. Piegati su un lato portando il braccio sopra la testa. Puoi tenerti alla sedia con la mano libera. Mantieni la posizione per 10 secondi e ripeti sull''altro lato.', 
  'lats', 
  'lower back', 
  NULL, 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Lower_Back_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Lower_Back_Stretch/1.jpg'], 
  NOW()
),
(
  '4d47173e-c9ba-4e09-aa00-be9b9c46504a', 
  'Chair Squat', 
  'Chair Squat', 
  'To begin, first set the bar to a position that best matches your height. Once the bar is loaded, step under it and position it across the back of your shoulders.
Take the bar with your hands facing forward, unlock it and lift it off the rack by extending your legs.
Move your feet forward about 18 inches in front of the bar. Position your legs using a shoulder width stance with the toes slightly pointed out. Look forward at all times and maintain a neutral or slightly arched spine. This will be your starting position.
Slowly lower the bar by bending the knees as you maintain a straight posture with the head up. Continue down until the angle between the upper and lower leg breaks 90 degrees.
Begin to raise the bar as you exhale by pushing the floor with the heels of your feet, extending the knees and returning to the starting position.
Repeat for the recommended amount of repetitions.', 
  'Per iniziare, regola il bilanciere a un''altezza adeguata. Posizionati sotto il bilanciere e appoggialo sulla parte alta della schiena. Afferralo con le mani rivolte in avanti, sgancialo dal rack ed estendi le gambe per sollevarlo. Porta i piedi circa 45 cm avanti rispetto al bilanciere. Posiziona le gambe a una larghezza pari a quella delle spalle con le punte dei piedi leggermente verso l''esterno. Guarda sempre in avanti e mantieni la colonna vertebrale neutra o leggermente arcuata: questa è la posizione di partenza. Abbassa lentamente il bilanciere piegando le ginocchia e mantenendo la postura eretta e la testa alta. Scendi finché l''angolo tra coscia e polpaccio supera i 90 gradi. Inizia la risalita espirando, spingendo sui talloni, estendendo le ginocchia e tornando alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'quadriceps', 
  'calves', 
  'machine', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Squat/1.jpg'], 
  NOW()
),
(
  'abf9b35e-12c5-43cd-b667-60c9b2bea97c', 
  'Chair Upper Body Stretch', 
  'Stretching parte superiore del corpo su sedia', 
  'Sit on the edge of a chair, gripping the back of it.
Straighten your arms, keeping your back straight, and pull your upper body forward so you feel a stretch. Hold for 20-30 seconds.', 
  'Siediti sul bordo di una sedia, afferrandone lo schienale. Distendi le braccia, mantieni la schiena dritta e tira il busto in avanti finché non avverti l''allungamento. Mantieni la posizione per 20-30 secondi.', 
  'shoulders', 
  'biceps', 
  'other', 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Upper_Body_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chair_Upper_Body_Stretch/1.jpg'], 
  NOW()
),
(
  'e65be084-06a9-4191-a747-315312b933b7', 
  'Chest And Front Of Shoulder Stretch', 
  'Stretching pettorali e parte anteriore delle spalle', 
  'Start off by standing with your legs together, holding a bodybar or a broomstick.
Take a slightly wider than shoulder width grip on the pole and hold it in front of you with your palms facing down.
Carefully lift the pole up and behind your head.', 
  'Inizia in posizione eretta con le gambe unite, tenendo un bastone ginnico o il manico di una scopa. Afferra il bastone con una presa leggermente più larga delle spalle e tienilo davanti a te con i palmi rivolti verso il basso. Solleva con cautela il bastone sopra la testa e portalo dietro la schiena.', 
  'chest', 
  'shoulders', 
  'other', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_And_Front_Of_Shoulder_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_And_Front_Of_Shoulder_Stretch/1.jpg'], 
  NOW()
),
(
  '2062e2d4-6d6e-4adc-b44c-90be9c252b54', 
  'Chest Push from 3 point stance', 
  'Chest Push (3 punti di appoggio)', 
  'Begin in a three point stance, squatted down with your back flat and one hand on the ground. Place the medicine ball directly in front of you.
To begin, take your first step as you pull the ball to your chest, positioning both hands to prepare for the throw.
As you execute the second step, explosively release the ball forward as hard as possible.', 
  'Inizia in posizione a tre punti di appoggio: accovacciato, schiena piatta e una mano a terra. Posiziona la palla medica direttamente davanti a te. Per iniziare, fai il primo passo mentre porti la palla al petto, posizionando entrambe le mani in preparazione al lancio. Durante il secondo passo, rilascia la palla in avanti con la massima esplosività possibile.', 
  'chest', 
  'abdominals', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_from_3_point_stance/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_from_3_point_stance/1.jpg'], 
  NOW()
),
(
  'f7f17ed5-8673-4503-a6e8-f9a66f99bfde', 
  'Chest Push (multiple response)', 
  'Chest Push (risposta multipla)', 
  'Begin in a kneeling position facing a wall or utilize a partner. Hold the ball with both hands tight into the chest.
Execute the pass by exploding forward and outward with the hips while pushing the ball as hard as possible.
Follow through by falling forward, catching yourself with your hands.
Immediately return to an upright position. Repeat for the desired number of repetitions.', 
  'Inizia in posizione inginocchiata di fronte a una parete o a un partner. Tieni la palla stretta al petto con entrambe le mani. Esegui il passaggio esplodendo in avanti e verso l''esterno con le anche mentre spingi la palla con la massima forza. Accompagna il movimento cadendo in avanti e attutendo il colpo con le mani. Torna immediatamente in posizione eretta. Ripeti per il numero di volte desiderato.', 
  'chest', 
  'abdominals', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_multiple_response/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_multiple_response/1.jpg'], 
  NOW()
),
(
  '2aa3e836-6a62-40cb-be3d-b319d9bbfece', 
  'Chest Push (single response)', 
  'Chest Push (risposta singola)', 
  'Begin in a kneeling position holding the medicine ball with both hands tightly into the chest.
Execute the pass by exploding forward and outward with the hips while pushing the ball as far as possible.
Follow through by falling forward, catching yourself with your hands.', 
  'Inizia in posizione inginocchiata tenendo la palla medica ben stretta al petto con entrambe le mani. Esegui il passaggio esplodendo in avanti e verso l''esterno con le anche mentre spingi la palla il più lontano possibile. Accompagna il movimento cadendo in avanti e attutendo il colpo con le mani.', 
  'chest', 
  'abdominals', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_single_response/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_single_response/1.jpg'], 
  NOW()
),
(
  '7bdc341a-caa4-4965-9249-b50d27184338', 
  'Chest Push with Run Release', 
  'Chest Push con rilascio in corsa', 
  'Begin in an athletic stance with the knees bent, hips back, and back flat. Hold the medicine ball near your legs. This will be your starting position.
While taking your first step draw the medicine ball into your chest.
As you take the second step, explosively push the ball forward, immediately sprinting for 10 yards after the release. If you are really fast, you can catch your own pass!', 
  'Inizia in posizione atletica con le ginocchia flesse, anche indietro e schiena piatta. Tieni la palla medica vicino alle gambe: questa è la posizione di partenza. Durante il primo passo, porta la palla medica al petto. Al secondo passo, spingi la palla in avanti in modo esplosivo e scatta immediatamente per 10 metri dopo il rilascio. Se sei abbastanza veloce, puoi persino recuperare il tuo lancio!', 
  'chest', 
  'abdominals', 
  'medicine ball', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_with_Run_Release/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Push_with_Run_Release/1.jpg'], 
  NOW()
),
(
  '4a8b4208-1962-4d1a-a9d6-4921bedd3ce7', 
  'Chest Stretch on Stability Ball', 
  'Stretching pettorali su Stability Ball', 
  'Get on your hands and knees next to an exercise ball.
Place your elbows on top of the ball, keeping your arm out to your side. This will be your starting position.
Lower your torso towards the floor, keeping your elbow on top of the ball. Hold the stretch for 20-30 seconds, and repeat with the other arm.', 
  'Mettiti in ginocchio a terra accanto a una fitball. Appoggia i gomiti sulla parte superiore della palla, tenendo le braccia di lato. Questa è la posizione di partenza. Abbassa il busto verso il pavimento mantenendo i gomiti sulla palla. Mantieni lo stretching per 20-30 secondi, quindi ripeti con l''altro braccio.', 
  'chest', 
  NULL, 
  'exercise ball', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Stretch_on_Stability_Ball/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Stretch_on_Stability_Ball/1.jpg'], 
  NOW()
),
(
  'ac99e7fc-a165-433c-8044-80414c490009', 
  'Child''s Pose', 
  'Child''s Pose (posizione del bambino)', 
  'Get on your hands and knees, walk your hands in front of you.
Lower your buttocks down to sit on your heels. Let your arms drag along the floor as you sit back to stretch your entire spine.
Once you settle onto your heels, bring your hands next to your feet and relax. "breathe" into your back. Rest your forehead on the floor. Avoid this position if you have knee problems.', 
  'Mettiti in ginocchio e allunga le mani davanti a te sul pavimento. Abbassa i glutei fino a sederti sui talloni. Lascia scivolare le braccia sul pavimento mentre ti siedi per allungare l''intera colonna vertebrale. Una volta seduto sui talloni, porta le mani accanto ai piedi e rilassati. "Respira" nella schiena. Appoggia la fronte a terra. Evita questa posizione in caso di problemi alle ginocchia.', 
  'lower back', 
  'glutes', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Childs_Pose/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Childs_Pose/1.jpg'], 
  NOW()
),
(
  'fc76b2df-f0ec-42c1-b6fa-e042b15b3215', 
  'Chin-Up', 
  'Chin-Up', 
  'Grab the pull-up bar with the palms facing your torso and a grip closer than the shoulder width.
As you have both arms extended in front of you holding the bar at the chosen grip width, keep your torso as straight as possible while creating a curvature on your lower back and sticking your chest out. This is your starting position. Tip: Keeping the torso as straight as possible maximizes biceps stimulation while minimizing back involvement.
As you breathe out, pull your torso up until your head is around the level of the pull-up bar. Concentrate on using the biceps muscles in order to perform the movement. Keep the elbows close to your body. Tip: The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar.
After a second of squeezing the biceps in the contracted position, slowly lower your torso back to the starting position; when your arms are fully extended. Breathe in as you perform this portion of the movement.
Repeat this motion for the prescribed amount of repetitions.', 
  'Afferra la sbarra per trazioni con i palmi rivolti verso il torso e una presa più stretta della larghezza delle spalle. Con le braccia distese e la sbarra in mano, tieni il busto il più dritto possibile, inarcando leggermente la parte bassa della schiena e spingendo il petto in fuori. Questa è la posizione di partenza. Consiglio: mantenere il busto dritto massimizza il lavoro sui bicipiti minimizzando il coinvolgimento della schiena. Espirando, solleva il busto finché la testa non supera il livello della sbarra. Concentrati sull''uso dei bicipiti per eseguire il movimento. Tieni i gomiti vicini al corpo. Consiglio: il busto deve rimanere fermo nello spazio e solo le braccia devono muoversi. Gli avambracci devono solo mantenere la presa. Dopo un secondo di contrazione massima dei bicipiti, abbassa lentamente il busto fino alla posizione iniziale, tornando a braccia completamente distese. Inspira durante questa fase. Ripeti per il numero di ripetizioni prescritto.', 
  'lats', 
  'biceps', 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/1.jpg'], 
  NOW()
),
(
  '31290e44-0286-4574-9cc0-4e693c87b390', 
  'Chin To Chest Stretch', 
  'Stretching mento al petto', 
  'Get into a seated position on the floor.
Place both hands at the rear of your head, fingers interlocked, thumbs pointing down and elbows pointing straight ahead. Slowly pull your head down to your chest. Hold for 20-30 seconds.', 
  'Siediti a terra. Posiziona entrambe le mani dietro la nuca con le dita intrecciate, i pollici rivolti verso il basso e i gomiti che puntano dritto in avanti. Porta lentamente la testa verso il petto. Mantieni la posizione per 20-30 secondi.', 
  'neck', 
  'traps', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin_To_Chest_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin_To_Chest_Stretch/1.jpg'], 
  NOW()
),
(
  '0e53372d-b2ea-42e2-a52c-30ceae7f42ee', 
  'Circus Bell', 
  'Circus Bell', 
  'The circus bell is an oversized dumbbell with a thick handle. Begin with the dumbbell between your feet, and grip the handle with both hands.
Clean the dumbbell by extending through your hips and knees to deliver the implement to the desired shoulder, letting go with the extra hand.
Ensure that you get one of the dumbbell heads behind the shoulder to keep from being thrown off balance. To raise it overhead, dip by flexing the knees, and the drive upwards as you extend the dumbbell overhead, leaning slightly away from it as you do so.
Carefully guide the bell back to the floor, keeping it under control as much as possible. It is best to perform this event on a thick rubber mat to prevent damage to the floor.', 
  'La circus bell è un manubrio sovradimensionato con un''impugnatura spessa. Inizia con il manubrio tra i piedi e afferra l''impugnatura con entrambe le mani. Esegui il ''clean'' del manubrio estendendo fianchi e ginocchia per portare l''attrezzo alla spalla desiderata, lasciando la presa con la mano libera. Assicurati che una delle teste del manubrio sia posizionata dietro la spalla per evitare di perdere l''equilibrio. Per sollevarlo sopra la testa, fletti le ginocchia (dip) e spingi verso l''alto estendendoti, inclinandoti leggermente lontano dal manubrio durante l''esecuzione. Riporta il manubrio a terra con cura, mantenendolo il più possibile sotto controllo. È consigliabile eseguire questo esercizio su un tappeto di gomma spesso per evitare danni al pavimento.', 
  'shoulders', 
  'forearms', 
  'other', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Circus_Bell/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Circus_Bell/1.jpg'], 
  NOW()
),
(
  '4fb1aeb6-b77a-4fbd-b420-8e9128792d46', 
  'Clean', 
  'Clean (Girata)', 
  'With a barbell on the floor close to the shins, take an overhand (or hook) grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.

Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight. Move the weight with control as you continue to above the knees.
Next comes the second pull, the main source of acceleration for the clean. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight; at the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended.
As full extension is achieved, transition into the third pull by aggressively shrugging and flexing the arms with the elbows up and out. At peak extension, aggressively pull yourself down, rotating your elbows under the bar as you do so. Receive the bar in a front squat position, the depth of which is dependent upon the height of the bar at the end of the third pull. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Continue to descend to the bottom squat position, which will help in the recovery.
Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position.', 
  'Con un bilanciere a terra vicino agli stinchi, utilizza una presa prona (o hook grip) appena all''esterno delle gambe. Abbassa i fianchi caricando il peso sui talloni, schiena dritta, testa rivolta in avanti, petto in fuori e spalle leggermente davanti al bilanciere. Questa è la posizione di partenza. Inizia la prima trazione spingendo sui talloni ed estendendo le ginocchia. L''angolo della schiena deve rimanere costante e le braccia distese. Muovi il peso con controllo finché non supera le ginocchia. Segue la seconda trazione, la principale fonte di accelerazione: quando il bilanciere raggiunge la metà coscia, inizia l''estensione dei fianchi. Con un movimento simile a un salto, accelera estendendo fianchi, ginocchia e caviglie. Non è necessario tirare attivamente con le braccia; al termine della seconda trazione, il corpo deve essere completamente esteso, inclinato leggermente all''indietro, con le braccia ancora distese. Raggiunta la massima estensione, passa alla terza trazione scrollando energicamente le spalle e flettendo le braccia con i gomiti verso l''alto e l''esterno. Al culmine, scendi rapidamente sotto il bilanciere ruotando i gomiti. Ricevi il bilanciere in posizione di front squat; il bilanciere deve poggiare sulle spalle protratte, sfiorando la gola con le mani rilassate. Scendi fino in fondo allo squat per favorire il recupero. Risali immediatamente spingendo sui talloni, mantenendo il busto eretto e i gomiti alti, fino alla posizione eretta.', 
  'hamstrings', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean/1.jpg'], 
  NOW()
),
(
  '2e02407e-ef04-4fd5-8f00-28026943236f', 
  'Clean Deadlift', 
  'Clean Deadlift', 
  'Begin standing with a barbell close to your shins. Your feet should be directly under your hips with your feet turned out slightly. Grip the bar with a double overhand grip or hook grip, about shoulder width apart. Squat down to the bar. Your spine should be in full extension, with a back angle that places your shoulders in front of the bar and your back as vertical as possible.
Begin by driving through the floor through the front of your heels. As the bar travels upward, maintain a constant back angle. Flare your knees out to the side to help keep them out of the bar''s path.
After the bar crosses the knees, complete the lift by driving the hips into the bar until your hips and knees are extended.', 
  'Inizia in piedi con un bilanciere vicino agli stinchi. I piedi devono essere sotto i fianchi e leggermente ruotati verso l''esterno. Afferra il bilanciere con una presa doppia prona o hook grip, alla larghezza delle spalle. Scendi in squat fino al bilanciere. La colonna vertebrale deve essere in estensione completa, con un angolo della schiena che posizioni le spalle davanti al bilanciere e la schiena il più verticale possibile. Inizia spingendo con la parte anteriore dei talloni. Mentre il bilanciere sale, mantieni costante l''angolo della schiena. Sposta le ginocchia verso l''esterno per evitare che ostacolino il percorso del bilanciere. Dopo che il bilanciere ha superato le ginocchia, completa l''alzata spingendo i fianchi verso il bilanciere fino alla completa estensione di fianchi e ginocchia.', 
  'hamstrings', 
  'forearms', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Deadlift/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Deadlift/1.jpg'], 
  NOW()
),
(
  '069eeba3-98c3-4290-a717-49ac47ae6e96', 
  'Clean Pull', 
  'Clean Pull', 
  'With a barbell on the floor close to the shins, take an overhand or hook grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.
Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight and elbows out. Move the weight with control as you continue to above the knees.
Next comes the second pull, the main source of acceleration for the clean. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight; at the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended. Full extension should be violent and abrupt, and ensure that you do not prolong the extension for longer than necessary.', 
  'Con un bilanciere a terra vicino agli stinchi, impugna il bilanciere appena fuori dalle gambe (presa prona o hook grip). Abbassa i fianchi, peso sui talloni, schiena dritta, petto in fuori e spalle leggermente davanti al bilanciere. Inizia la prima trazione spingendo sui talloni ed estendendo le ginocchia. Mantieni l''angolo della schiena costante e le braccia distese con i gomiti verso l''esterno. Superate le ginocchia, passa alla seconda trazione: quando il bilanciere arriva a metà coscia, estendi i fianchi con un movimento esplosivo simile a un salto, estendendo fianchi, ginocchia e caviglie per accelerare il bilanciere. Le braccia non devono tirare attivamente; alla fine della seconda trazione il corpo deve essere completamente esteso, leggermente inclinato all''indietro, con le braccia ancora tese. L''estensione finale deve essere violenta e rapida, evitando di prolungarla oltre il necessario.', 
  'quadriceps', 
  'forearms', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Pull/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Pull/1.jpg'], 
  NOW()
),
(
  'e8930baf-a660-4781-ba99-e317362cbee2', 
  'Clean Shrug', 
  'Clean Shrug', 
  'Begin with a shoulder width, double overhand or hook grip, with the bar hanging at the mid thigh position. Your back should be straight and inclined slightly forward.
Shrug your shoulders towards your ears. While this exercise can usually by loaded with heavier weight than a clean, avoid overloading to the point that the execution slows down.', 
  'Inizia con una presa doppia prona o hook grip alla larghezza delle spalle, bilanciere sospeso a metà coscia. Schiena dritta e leggermente inclinata in avanti. Esegui una scrollata delle spalle verso le orecchie. Anche se questo esercizio solitamente permette carichi superiori a un clean, evita sovraccarichi eccessivi che rallenterebbero l''esecuzione.', 
  'traps', 
  'forearms', 
  'barbell', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_Shrug/1.jpg'], 
  NOW()
),
(
  '97cb9cd2-0e96-4c3f-a731-c2806fdc3ca6', 
  'Clean and Jerk', 
  'Clean and Jerk (Slancio)', 
  'With a barbell on the floor close to the shins, take an overhand or hook grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.
Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight. Move the weight with control as you continue to above the knees.
Next comes the second pull, the main source of acceleration for the clean. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight; at the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended.
As full extension is achieved, transition into the third pull by aggressively shrugging and flexing the arms with the elbows up and out. At peak extension, aggressively pull yourself down, rotating your elbows under the bar as you do so. Receive the bar in a front squat position, the depth of which is dependent upon the height of the bar at the end of the third pull. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Continue to descend to the bottom squat position, which will help in the recovery.
Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position.
The second phase is the jerk, which raises the weight overhead. Standing with the weight racked on the front of the shoulders, begin with the dip. With your feet directly under your hips, flex the knees without moving the hips backward. Go down only slightly, and reverse direction as powerfully as possible.
Drive through the heels create as much speed and force as possible, and be sure to move your head out of the way as the bar leaves the shoulders.
At this moment as the feet leave the floor, the feet must be placed into the receiving position as quickly as possible. In the brief moment the feet are not actively driving against the platform, the athletes effort to push the bar up will drive them down. The feet should be split, with one foot forward, and one foot back. Receive the bar with the arms locked out overhead. Return to a standing position.', 
  'Esegui la fase di Clean come descritto nell''esercizio ''Clean''. La seconda fase è il Jerk, per sollevare il peso sopra la testa. Con il peso sulle spalle, esegui il ''dip'': con i piedi sotto i fianchi, fletti le ginocchia senza portare i fianchi all''indietro. Scendi leggermente e inverti il movimento con la massima potenza. Spingi sui talloni per generare velocità e forza, assicurandoti di spostare la testa quando il bilanciere lascia le spalle. Nel momento in cui i piedi si staccano da terra, posizionali rapidamente nella posizione di ricezione (split jerk), con un piede avanti e uno indietro. Ricevi il bilanciere con le braccia completamente bloccate sopra la testa, quindi torna in posizione eretta.', 
  'shoulders', 
  'abdominals', 
  'barbell', 
  'expert', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Jerk/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Jerk/1.jpg'], 
  NOW()
),
(
  'e3b9d725-c6c9-4721-8ae6-dd5612ace512', 
  'Clean and Press', 
  'Clean and Press', 
  'Assume a shoulder-width stance, with knees inside the arms. Now while keeping the back flat, bend at the knees and hips so that you can grab the bar with the arms fully extended and a pronated grip that is slightly wider than shoulder width. Point the elbows out to sides. The bar should be close to the shins. Position the shoulders over or slightly ahead of the bar. Establish a flat back posture. This will be your starting position.
Begin to pull the bar by extending the knees. Move your hips forward and raise the shoulders at the same rate while keeping the angle of the back constant; continue to lift the bar straight up while keeping it close to your body.
As the bar passes the knee, extend at the ankles, knees, and hips forcefully, similar to a jumping motion. As you do so, continue to guide the bar with your hands, shrugging your shoulders and using the momentum from your movement to pull the bar as high as possible. The bar should travel close to your body, and you should keep your elbows out.
At maximum elevation, your feet should clear the floor and you should start to pull yourself under the bar. The mechanics of this could change slightly, depending on the weight used. You should descend into a squatting position as you pull yourself under the bar.
As the bar hits terminal height, rotate your elbows around and under the bar. Rack the bar across the front of the shoulders while keeping the torso erect and flexing the hips and knees to absorb the weight of the bar.
Stand to full height, holding the bar in the clean position.
Without moving your feet, press the bar overhead as you exhale. Lower the bar under control .', 
  'Assumi una posizione con piedi alla larghezza delle spalle e ginocchia all''interno delle braccia. Con la schiena piatta, fletti ginocchia e fianchi per afferrare il bilanciere (presa prona leggermente più larga delle spalle). Gomiti rivolti verso l''esterno, bilanciere vicino agli stinchi, spalle sopra o leggermente davanti al bilanciere. Inizia a tirare estendendo le ginocchia; muovi i fianchi in avanti e solleva le spalle mantenendo l''angolo della schiena costante. Superate le ginocchia, estendi con forza caviglie, ginocchia e fianchi (movimento simile a un salto). Guida il bilanciere verso l''alto scrollando le spalle. Al culmine dell''elevazione, i piedi dovrebbero staccarsi da terra mentre ti posizioni sotto il bilanciere in uno squat. Ruota i gomiti attorno al bilanciere e ricevilo sulle spalle anteriori. In piedi, spingi il bilanciere sopra la testa espirando. Abbassa il bilanciere sotto controllo.', 
  'shoulders', 
  'abdominals', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_and_Press/1.jpg'], 
  NOW()
),
(
  '4c89686a-932a-47c3-b67f-7056a4e71573', 
  'Clean from Blocks', 
  'Clean from Blocks', 
  'With a barbell on boxes or stands of the desired height, take an overhand or hook grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position.
Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight with the elbows pointed out.
As full extension is achieved, transition into the receiving position by aggressively shrugging and flexing the arms with the elbows up and out. Aggressively pull yourself down, rotating your elbows under the bar as you do so. Receive the bar in a front squat position, the depth of which is dependent upon the height of the bar at the end of the third pull. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Continue to descend to the bottom squat position, which will help in the recovery.
Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position. Return the weight to the boxes for the next rep.', 
  'Con il bilanciere posizionato su blocchi o supporti all''altezza desiderata, esegui una presa prona o hook grip appena fuori dalle gambe. Abbassa i fianchi, peso sui talloni, schiena dritta e spalle davanti al bilanciere. Inizia la trazione spingendo sui talloni ed estendendo le ginocchia, mantenendo l''angolo della schiena costante e le braccia distese. Al raggiungimento della massima estensione, passa rapidamente alla ricezione: scrolla le spalle, fletti le braccia portando i gomiti in alto e all''esterno, e scendi sotto il bilanciere ruotando i gomiti. Ricevi il bilanciere in posizione di front squat e scendi fino in fondo per facilitare il recupero. Risali fino alla posizione eretta e riponi il bilanciere sui blocchi.', 
  'quadriceps', 
  'calves', 
  'barbell', 
  'intermediate', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_from_Blocks/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clean_from_Blocks/1.jpg'], 
  NOW()
),
(
  'df0d2f47-bc61-40cc-9330-16cc0b4296b2', 
  'Clock Push-Up', 
  'Clock Push-Up', 
  'Move into a prone position on the floor, supporting your weight on your hands and toes.
Your arms should be fully extended with the hands around shoulder width. Keep your body straight throughout the movement. This will be your starting position.
Descend by flexing at the elbow, lowering your chest toward the ground.
At the bottom, reverse the motion by pushing yourself up through elbow extension as quickly as possible until you are air borne. Aim to "jump" 12-18 inches to one side.
As you accelerate up, move your outside foot away from your direction of travel. Leaving the ground, shift your body about 30 degrees for the next repetition.
Return to the starting position and repeat the exercise, working all the way around until you are back where you started.', 
  'Posizionati in plank a terra, supportando il peso su mani e punte dei piedi. Braccia distese alla larghezza delle spalle, corpo in linea. Fletti i gomiti per scendere verso terra. Alla base, spingi il più rapidamente possibile per sollevarti da terra in un piccolo ''salto'' laterale di 30-45 cm. Durante la spinta, sposta il piede esterno nella direzione del movimento. Una volta a terra, ruota il corpo di circa 30 gradi per la ripetizione successiva. Ripeti il ciclo completo finché non torni alla posizione di partenza.', 
  'chest', 
  'shoulders', 
  'body only', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/1.jpg'], 
  NOW()
),
(
  '45888b3d-e0e9-413f-ae28-ee21e6645fdf', 
  'Close-Grip Barbell Bench Press', 
  'Panca piana a presa stretta con bilanciere', 
  'Lie back on a flat bench. Using a close grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.
As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that - as opposed to a regular bench press - you keep the elbows close to the torso at all times in order to maximize triceps involvement.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up.
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Sdraiati su una panca piana. Con una presa stretta (circa la larghezza delle spalle), solleva il bilanciere dal rack e tienilo teso sopra di te con le braccia distese. Questa sarà la tua posizione di partenza. Inspirando, scendi lentamente finché non senti il bilanciere toccare il centro del petto. Suggerimento: a differenza della panca piana classica, mantieni i gomiti vicini al busto per massimizzare il coinvolgimento dei tricipiti. Dopo una pausa di un secondo, riporta il bilanciere nella posizione di partenza espirando e spingendo con i tricipiti. Distendi le braccia nella posizione contratta, mantieni per un secondo e ricomincia a scendere lentamente. Suggerimento: la fase di discesa dovrebbe durare almeno il doppio di quella di salita. Ripeti per il numero di ripetizioni prescritto. Al termine, riponi il bilanciere nel rack.', 
  'triceps', 
  'chest', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Barbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Barbell_Bench_Press/1.jpg'], 
  NOW()
),
(
  '40437eed-f02f-4d0d-9e07-a005b9da9df8', 
  'Close-Grip Dumbbell Press', 
  'Press con manubrio a presa stretta', 
  'Place a dumbbell standing up on a flat bench.
Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench with only your shoulders lying on the surface. Hips should be below the bench and your legs bent with your feet firmly on the floor.
Grasp the dumbbell with both hands and hold it straight over your chest at arm''s length. Both palms should be pressing against the underside of the sides of the dumbbell. This will be your starting position.
Initiate the movement by lowering the dumbbell to your chest.
Return to the starting position by extending the elbows.', 
  'Posiziona un manubrio in verticale su una panca piana. Assicurandoti che il manubrio sia ben saldo all''estremità della panca, sdraiati perpendicolarmente ad essa con le sole spalle appoggiate alla superficie. I fianchi devono trovarsi sotto la panca e le gambe piegate con i piedi ben saldi a terra. Afferra il manubrio con entrambe le mani e tienilo dritto sopra il petto a braccia tese. Entrambi i palmi devono premere contro la parte inferiore dei dischi del manubrio. Questa è la posizione di partenza. Inizia il movimento abbassando il manubrio verso il petto. Ritorna alla posizione di partenza estendendo i gomiti.', 
  'triceps', 
  'chest', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Dumbbell_Press/1.jpg'], 
  NOW()
),
(
  '6b3a671c-42b3-49e2-bc6c-2a173c0db637', 
  'Close-Grip EZ-Bar Curl with Band', 
  'Curl con bilanciere EZ e banda elastica (presa stretta)', 
  'Attach a band to each end of the bar. Take the bar, placing a foot on the middle of the band. Stand upright with a narrow, supinated grip on the EZ bar. The elbows should be close to the torso. This will be your starting position.
While keeping the upper arms in place, flex the elbows to execute the curl. Exhale as the weight is lifted.
Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.
Slowly begin to bring the bar back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'Fissa una banda elastica a ciascuna estremità del bilanciere. Afferra il bilanciere posizionando un piede al centro della banda. Stai in piedi con una presa stretta e suinata sul bilanciere EZ. I gomiti devono essere vicini al busto. Questa è la posizione di partenza. Mantenendo la parte superiore delle braccia ferma, fletti i gomiti per eseguire il curl. Espira mentre sollevi il peso. Continua il movimento finché i bicipiti non sono completamente contratti e il bilanciere è all''altezza delle spalle. Mantieni la posizione contratta per un secondo contraendo intensamente i bicipiti. Inizia a riportare lentamente il bilanciere alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'e-z curl bar', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Curl_with_Band/1.jpg'], 
  NOW()
),
(
  'ebbacd16-2622-41ae-b298-53b4568c85f6', 
  'Close-Grip EZ-Bar Press', 
  'Press con bilanciere EZ a presa stretta', 
  'Lie on a flat bench with an EZ bar loaded to an appropriate weight.
Using a narrow grip lift the bar and hold it straight over your torso with your elbows in. The arms should be perpendicular to the floor. This will be your starting position.
Now lower the bar down to your lower chest as you breathe in. Keep the elbows in as you perform this movement.
Using the triceps to push the bar back up, press it back to the starting position by extending the elbows as you exhale.
Repeat.', 
  'Sdraiati su una panca piana con un bilanciere EZ caricato con un peso appropriato. Usando una presa stretta, solleva il bilanciere e tienilo dritto sopra il busto con i gomiti chiusi. Le braccia devono essere perpendicolari al pavimento. Questa è la posizione di partenza. Ora abbassa il bilanciere verso la parte bassa del petto inspirando. Mantieni i gomiti stretti durante l''esecuzione. Utilizzando i tricipiti, spingi il bilanciere verso l''alto tornando alla posizione di partenza ed espirando mentre distendi i gomiti. Ripeti.', 
  'triceps', 
  'chest', 
  'e-z curl bar', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ-Bar_Press/1.jpg'], 
  NOW()
),
(
  '6db8ccb8-a1b2-496b-b948-1279746c5291', 
  'Close-Grip EZ Bar Curl', 
  'Curl con bilanciere EZ a presa stretta', 
  'Stand up with your torso upright while holding an E-Z Curl Bar at the closer inner handle. The palm of your hands should be facing forward and they should be slightly tilted inwards due to the shape of the bar. The elbows should be close to the torso. This will be your starting position.
While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move.
Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard.
Slowly begin to bring the bar back to starting position as your breathe in.
Repeat for the recommended amount of repetitions.', 
  'Stai in piedi con il busto eretto mentre impugni un bilanciere EZ sull''impugnatura interna più stretta. I palmi delle mani devono essere rivolti in avanti e leggermente inclinati verso l''interno a causa della forma del bilanciere. I gomiti devono rimanere vicini al busto. Questa è la posizione di partenza. Mantenendo la parte superiore delle braccia ferma, solleva il bilanciere flettendo i gomiti e contraendo i bicipiti mentre espiri. Suggerimento: solo gli avambracci devono muoversi. Continua il movimento finché i bicipiti non sono completamente contratti e il bilanciere è all''altezza delle spalle. Mantieni la posizione contratta per un secondo contraendo intensamente i bicipiti. Inizia a riportare lentamente il bilanciere alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ_Bar_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ_Bar_Curl/1.jpg'], 
  NOW()
),
(
  '0ed65e36-92f2-4560-b177-e111ade5254b', 
  'Close-Grip Front Lat Pulldown', 
  'Lat machine avanti a presa stretta', 
  'Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar.
Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width.
As you have both arms extended in front of you - while holding the bar at the chosen grip width - bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position.
As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary (only the arms should move). The forearms should do no other work except for holding the bar; therefore do not try to pull the bar down using the forearms.
After a second in the contracted position, while squeezing your shoulder blades together, slowly raise the bar back to the starting position when your arms are fully extended and the lats are fully stretched. Inhale during this portion of the movement.
6. Repeat this motion for the prescribed amount of repetitions.', 
  'Siediti su una lat machine con una barra lunga agganciata alla carrucola superiore. Regola il blocco per le ginocchia in base alla tua altezza per evitare che il corpo si sollevi a causa della resistenza. Afferra la barra con i palmi rivolti in avanti usando la presa prescritta. Nota sulle prese: per una presa larga le mani devono essere più larghe delle spalle; per una presa media la distanza è pari alla larghezza delle spalle; per una presa stretta la distanza è inferiore alla larghezza delle spalle. Con le braccia estese davanti a te, porta il busto indietro di circa 30 gradi inarcando leggermente la parte bassa della schiena e spingendo il petto in fuori. Questa è la posizione di partenza. Espirando, porta la barra verso il petto alto tirando le spalle e i gomiti verso il basso e indietro. Suggerimento: concentrati sulla contrazione dei muscoli della schiena una volta raggiunta la posizione di massima contrazione. Il busto deve rimanere fermo (solo le braccia si muovono). Gli avambracci devono solo reggere la barra; non cercare di tirare usando le braccia. Dopo un secondo di contrazione, stringendo le scapole, risali lentamente verso la posizione di partenza finché le braccia non sono completamente distese e i dorsali allungati. Inspira durante questa fase. Ripeti per il numero di ripetizioni prescritto.', 
  'lats', 
  'biceps', 
  'cable', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Front_Lat_Pulldown/1.jpg'], 
  NOW()
),
(
  '13c183ff-8273-44ae-9e67-7143a98ef852', 
  'Close-Grip Push-Up off of a Dumbbell', 
  'Piegamenti a presa stretta su manubrio', 
  'Lie on the floor and place your hands on an upright dumbbell. Supporting your weight on your toes and hands, keep your torso rigid and your elbows in with your arms straight. This will be your starting position.
Lower your body, allowing the elbows to flex while you inhale. Keep your body straight, not allowing your hips to rise or sag.
Press yourself back up to the starting position by extending the elbows. Breathe out as you perform this step.
After a pause at the contracted position, repeat the movement for the prescribed amount of repetitions.', 
  'Sdraiati a terra e posiziona le mani su un manubrio posto verticalmente. Sostenendo il peso sulle punte dei piedi e sulle mani, mantieni il busto rigido, i gomiti stretti e le braccia distese. Questa è la posizione di partenza. Abbassa il corpo flettendo i gomiti mentre inspiri. Mantieni il corpo dritto, senza far scendere o salire i fianchi. Spingiti verso l''alto tornando alla posizione di partenza estendendo i gomiti. Espira durante questa fase. Dopo una pausa nella posizione contratta, ripeti per il numero di ripetizioni prescritto.', 
  'triceps', 
  'abdominals', 
  'body only', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Push-Up_off_of_a_Dumbbell/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Push-Up_off_of_a_Dumbbell/1.jpg'], 
  NOW()
),
(
  '73f2a334-de68-46ec-8c5e-3cf46bc1c808', 
  'Close-Grip Standing Barbell Curl', 
  'Curl in piedi con bilanciere a presa stretta', 
  'Hold a barbell with both hands, palms up and a few inches apart.
Stand with your torso straight and your head up. Your feet should be about shoulder width and your elbows close to your torso. This will be your starting position. Tip: You will keep your upper arms and elbows stationary throughout the movement.
Curl the bar up in a semicircular motion until the forearms touch your biceps. Exhale as you perform this portion of the movement and contract your biceps hard for a second at the top. Tip: Avoid bending the back or using swinging motions as you lift the weight. Only the forearms should move.
Slowly go back down to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Afferra un bilanciere con entrambe le mani, palmi rivolti verso l''alto e a pochi centimetri di distanza. Stai in piedi con il busto dritto e la testa alta. I piedi devono essere alla larghezza delle spalle e i gomiti vicini al busto. Questa è la posizione di partenza. Suggerimento: mantieni la parte superiore delle braccia e i gomiti fermi per tutto il movimento. Solleva il bilanciere con un movimento semicircolare finché gli avambracci non toccano i bicipiti. Espira durante questa fase e contrai i bicipiti con forza per un secondo in cima. Suggerimento: evita di inarcare la schiena o di oscillare per sollevare il peso. Solo gli avambracci devono muoversi. Torna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni raccomandato.', 
  'biceps', 
  'forearms', 
  'barbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Standing_Barbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Standing_Barbell_Curl/1.jpg'], 
  NOW()
),
(
  '40a6bd06-e227-49c1-8a50-a1a205e41d34', 
  'Cocoons', 
  'Cocoons (Addominali a bozzolo)', 
  'Begin by lying on your back on the ground. Your legs should be straight and your arms extended behind your head. This will be your starting position.
To perform the movement, tuck the knees toward your chest, rotating your pelvis to lift your glutes from the floor. As you do so, flex the spine, bringing your arms back over your head to perform a simultaneous crunch motion.
After a brief pause, return to the starting position.', 
  'Inizia sdraiato sulla schiena a terra. Le gambe devono essere distese e le braccia tese dietro la testa. Questa è la posizione di partenza. Per eseguire il movimento, porta le ginocchia verso il petto, ruotando il bacino per sollevare i glutei da terra. Contemporaneamente, fletti la colonna vertebrale portando le braccia sopra la testa in un movimento di crunch simultaneo. Dopo una breve pausa, ritorna alla posizione di partenza.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cocoons/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cocoons/1.jpg'], 
  NOW()
),
(
  '36f1ecc6-30b0-4a17-afa6-f6d1cb219d75', 
  'Conan''s Wheel', 
  'Conan''s Wheel', 
  'With the weight loaded, take a zurcher hold on the end of the implement. Place the bar in the crook of the elbow and hold onto your wrist. Try to keep the weight off of the forearms.
Begin by lifting the weight from the ground. Keep a tight, upright posture as you being to walk, taking short, fast steps. Look up and away as you turn in a circle. Do not hold your breath during the event. Continue walking until you complete one or more complete turns.', 
  'Con il peso caricato, esegui una presa tipo ''Zurcher'' sull''estremità dell''attrezzo. Posiziona la barra nell''incavo del gomito e afferra i tuoi polsi. Cerca di non far gravare il peso sugli avambracci. Inizia sollevando il peso da terra. Mantieni una postura eretta e contratta mentre inizi a camminare, facendo passi brevi e veloci. Guarda avanti e leggermente verso l''alto mentre ruoti in cerchio. Non trattenere il respiro durante l''esercizio. Continua a camminare finché non completi uno o più giri.', 
  'quadriceps', 
  'abdominals', 
  'other', 
  'intermediate', 
  'compound', 
  NULL, 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Conans_Wheel/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Conans_Wheel/1.jpg'], 
  NOW()
),
(
  '9d38dd6d-3f68-45f3-954f-3631e6032f3f', 
  'Concentration Curls', 
  'Concentration Curls', 
  'Sit down on a flat bench with one dumbbell in front of you between your legs. Your legs should be spread with your knees bent and feet on the floor.
Use your right arm to pick the dumbbell up. Place the back of your right upper arm on the top of your inner right thigh. Rotate the palm of your hand until it is facing forward away from your thigh. Tip: Your arm should be extended and the dumbbell should be above the floor. This will be your starting position.
While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: At the top of the movement make sure that the little finger of your arm is higher than your thumb. This guarantees a good contraction. Hold the contracted position for a second as you squeeze the biceps.
Slowly begin to bring the dumbbells back to starting position as your breathe in. Caution: Avoid swinging motions at any time.
Repeat for the recommended amount of repetitions. Then repeat the movement with the left arm.', 
  'Siediti su una panca piana con un manubrio davanti a te, tra le gambe. Le gambe devono essere divaricate, le ginocchia flesse e i piedi ben appoggiati a terra. Afferra il manubrio con il braccio destro. Posiziona la parte posteriore del braccio destro contro la parte superiore dell''interno coscia destro. Ruota il palmo della mano verso l''esterno. Suggerimento: il braccio deve essere esteso e il manubrio sospeso da terra; questa è la posizione di partenza. Mantenendo la parte superiore del braccio ferma, fletti l''avambraccio verso l''alto contraendo il bicipite ed espirando. Solo l''avambraccio deve muoversi. Continua il movimento finché il bicipite non è completamente contratto e il manubrio si trova all''altezza della spalla. Suggerimento: nella parte alta del movimento, assicurati che il mignolo sia più in alto del pollice per una contrazione ottimale. Mantieni la contrazione per un secondo stringendo il bicipite. Inspira e torna lentamente alla posizione di partenza. Attenzione: evita movimenti oscillatori. Ripeti per il numero di ripetizioni consigliato, poi passa al braccio sinistro.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/1.jpg'], 
  NOW()
),
(
  '24c4b23f-8b17-442d-8538-dae6faf43ede', 
  'Cross-Body Crunch', 
  'Cross-Body Crunch', 
  'Lie flat on your back and bend your knees about 60 degrees.
Keep your feet flat on the floor and place your hands loosely behind your head. This will be your starting position.
Now curl up and bring your right elbow and shoulder across your body while bring your left knee in toward your left shoulder at the same time. Reach with your elbow and try to touch your knee. Exhale as you perform this movement. Tip: Try to bring your shoulder up towards your knee rather than just your elbow and remember that the key is to contract the abs as you perform the movement; not just to move the elbow.
Now go back down to the starting position as you inhale and repeat with the left elbow and the right knee.
Continue alternating in this manner until all prescribed repetitions are done.', 
  'Sdraiati sulla schiena e piega le ginocchia a circa 60 gradi. Tieni i piedi piatti a terra e posiziona le mani leggermente dietro la testa; questa è la posizione di partenza. Esegui un crunch portando il gomito e la spalla destra verso l''interno, mentre contemporaneamente porti il ginocchio sinistro verso la spalla sinistra. Cerca di toccare il ginocchio con il gomito ed espira durante il movimento. Suggerimento: cerca di sollevare la spalla verso il ginocchio piuttosto che muovere solo il gomito, concentrandoti sulla contrazione degli addominali. Inspira mentre torni alla posizione di partenza e ripeti con il gomito sinistro e il ginocchio destro. Alterna fino al completamento delle ripetizioni previste.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross-Body_Crunch/1.jpg'], 
  NOW()
),
(
  '248ef17c-d8dc-41e0-91fd-a9758b77cde8', 
  'Cross Body Hammer Curl', 
  'Cross Body Hammer Curl', 
  'Stand up straight with a dumbbell in each hand. Your hands should be down at your side with your palms facing in.
While keeping your palms facing in and without twisting your arm, curl the dumbbell of the right arm up towards your left shoulder as you exhale. Touch the top of the dumbbell to your shoulder and hold the contraction for a second.
Slowly lower the dumbbell along the same path as you inhale and then repeat the same movement for the left arm.
Continue alternating in this fashion until the recommended amount of repetitions is performed for each arm.', 
  'In piedi, con la schiena dritta e un manubrio in ogni mano, tieni le braccia lungo i fianchi con i palmi rivolti verso l''interno. Mantenendo i palmi rivolti verso l''interno e senza ruotare il braccio, fletti il manubrio destro verso la spalla sinistra ed espira. Tocca la spalla con il manubrio e mantieni la contrazione per un secondo. Inspira e abbassa lentamente il manubrio lungo lo stesso percorso. Ripeti con il braccio sinistro. Alterna i movimenti fino a completare il numero di ripetizioni consigliato per ogni braccio.', 
  'biceps', 
  'forearms', 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross_Body_Hammer_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross_Body_Hammer_Curl/1.jpg'], 
  NOW()
),
(
  '0fde25ea-2a28-4d63-ac12-f98d8b94b0a7', 
  'Cross Over - With Bands', 
  'Cross Over - Con Elastici', 
  'Secure an exercise band around a stationary post.
While facing away from the post, grab the handles on both ends of the band and step forward enough to create tension on the band.
Raise your arms to the sides, parallel to the floor, perpendicular to your torso (your torso and the arms should resemble the letter "T") and with the palms facing forward. Have them extended with a slight bend at the elbows. This will be your starting position.
While keeping your arms straight, bring them across your chest in a semicircular motion to the front as you exhale and flex your pecs. Hold the contraction for a second.
Slowly return to the starting position as you inhale.
Perform for the recommended amount of repetitions.', 
  'Fissa un elastico da fitness a un supporto stabile. Dai le spalle al supporto, afferra le maniglie alle estremità dell''elastico e fai un passo in avanti per creare tensione. Solleva le braccia lateralmente, parallelamente al pavimento e perpendicolari al busto (le braccia e il busto devono formare una "T"), con i palmi rivolti in avanti. Le braccia devono essere tese con una leggera flessione dei gomiti; questa è la posizione di partenza. Mantenendo le braccia tese, portale davanti al petto con un movimento semicircolare ed espira, contraendo i pettorali. Mantieni la contrazione per un secondo. Inspira e torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'chest', 
  'biceps', 
  'bands', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross_Over_-_With_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cross_Over_-_With_Bands/1.jpg'], 
  NOW()
),
(
  '00c41eab-7ef8-4fb6-a4da-2f5c401ad01a', 
  'Crossover Reverse Lunge', 
  'Crossover Reverse Lunge', 
  'Stand with your feet shoulder width apart. This will be your starting position.
Perform a rear lunge by stepping back with one foot and flexing the hips and front knee. As you do so, rotate your torso across the front leg.
After a brief pause, return to the starting position and repeat on the other side, continuing in an alternating fashion.', 
  'In piedi, con i piedi alla larghezza delle spalle; questa è la posizione di partenza. Esegui un affondo all''indietro facendo un passo indietro con un piede e flettendo le anche e il ginocchio della gamba anteriore. Contemporaneamente, ruota il busto sopra la gamba anteriore. Dopo una breve pausa, torna alla posizione di partenza e ripeti dall''altro lato, alternando.', 
  'lower back', 
  'abdominals', 
  NULL, 
  'intermediate', 
  NULL, 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crossover_Reverse_Lunge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crossover_Reverse_Lunge/1.jpg'], 
  NOW()
),
(
  'ff13d9fd-234f-4e0f-91f0-f4f6f5c53c61', 
  'Crucifix', 
  'Crucifix', 
  'In the crucifix, you statically hold weights out to the side for time. While the event can be practiced using dumbbells, it is best to practice with one of the various implements used, such as axes and hammers, as it feels different.
Begin standing, and raise your arms out to the side holding the implements. Your arms should be parallel to the ground. In competition, judges or sensors are used to let you know when you break parallel. Hold for as long as you can. Typically, the weights should be heavy enough that you fail in 30-60 seconds.', 
  'Il crucifix consiste nel mantenere pesi lateralmente in posizione statica per un tempo prolungato. Sebbene si possa praticare con manubri, è preferibile usare attrezzi specifici come asce o martelli per una sensazione diversa. In piedi, solleva le braccia lateralmente tenendo gli attrezzi. Le braccia devono essere parallele al suolo. In gara, giudici o sensori segnalano quando il braccio scende sotto la linea parallela. Mantieni la posizione il più a lungo possibile. Solitamente, il carico dovrebbe essere tale da causare il cedimento entro 30-60 secondi.', 
  'shoulders', 
  'forearms', 
  'other', 
  'beginner', 
  'isolation', 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crucifix/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crucifix/1.jpg'], 
  NOW()
),
(
  'eb4cf441-f84f-4445-84bc-5d8f49daff08', 
  'Crunch - Hands Overhead', 
  'Crunch - Mani Oltre il Capo', 
  'Lie on the floor with your back flat and knees bent with around a 60-degree angle between the hamstrings and the calves.
Keep your feet flat on the floor and stretch your arms overhead with your palms crossed. This will be your starting position.
Curl your upper body forward and bring your shoulder blades just off the floor. At all times, keep your arms aligned with your head, neck and shoulder. Don''t move them forward from that position. Exhale as you perform this portion of the movement and hold the contraction for a second.
Slowly lower down to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati a terra con la schiena piatta e le ginocchia flesse a un angolo di circa 60 gradi tra femorali e polpacci. Tieni i piedi piatti a terra e distendi le braccia oltre la testa con i palmi incrociati; questa è la posizione di partenza. Solleva la parte superiore del corpo in avanti portando le scapole appena fuori dal pavimento. Mantieni le braccia sempre allineate con testa, collo e spalle, senza spingerle in avanti. Espira durante questa fase del movimento e mantieni la contrazione per un secondo. Inspira e torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunch_-_Hands_Overhead/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunch_-_Hands_Overhead/1.jpg'], 
  NOW()
),
(
  '042aa015-9261-4ce9-997c-e3416039b5e0', 
  'Crunch - Legs On Exercise Ball', 
  'Crunch - Gambe su Fitball', 
  'Lie flat on your back with your feet resting on an exercise ball and your knees bent at a 90 degree angle.
Place your feet three to four inches apart and point your toes inward so they touch.
Place your hands lightly on either side of your head keeping your elbows in. Tip: Don''t lock your fingers behind your head.
Push the small of your back down in the floor in order to better isolate your abdominal muscles. This will be your starting position.
Begin to roll your shoulders off the floor and continue to push down as hard as you can with your lower back. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. Breathe out as you execute this portion of the movement. Squeeze your abdominals hard at the top of the contraction and hold for a second. Tip: Focus on a slow, controlled movement. Refrain from using momentum at any time.
Slowly go back down to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati sulla schiena con i piedi appoggiati su una fitball e le ginocchia flesse a 90 gradi. Tieni i piedi distanti 7-10 cm e punta le dita verso l''interno finché si toccano. Posiziona le mani leggermente ai lati della testa tenendo i gomiti chiusi. Suggerimento: non intrecciare le dita dietro la nuca. Spingi la parte bassa della schiena contro il pavimento per isolare meglio gli addominali; questa è la posizione di partenza. Solleva le spalle da terra e continua a spingere con la parte bassa della schiena. Le spalle dovrebbero staccarsi solo di circa 10 cm, mentre la parte bassa della schiena deve rimanere a terra. Espira durante il movimento. Contrai intensamente gli addominali nella parte alta e mantieni per un secondo. Suggerimento: concentrati su un movimento lento e controllato, evitando l''uso di slancio. Inspira e torna lentamente alla posizione di partenza. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunch_-_Legs_On_Exercise_Ball/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunch_-_Legs_On_Exercise_Ball/1.jpg'], 
  NOW()
),
(
  '4048f846-050c-4794-9c7f-24bfb625dd74', 
  'Crunches', 
  'Crunches', 
  'Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch.
Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don''t lock your fingers behind your head.
While pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor.
Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don''t cheat yourself by using momentum.
After the one second contraction, begin to come down slowly again to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Sdraiati sulla schiena con i piedi piatti a terra o appoggiati su una panca con le ginocchia flesse a 90 gradi. Se usi una panca, tieni i piedi distanti 7-10 cm con le punte rivolte verso l''interno. Posiziona le mani leggermente ai lati della testa, gomiti chiusi. Suggerimento: non intrecciare le dita dietro la nuca. Spingendo la parte bassa della schiena contro il pavimento per isolare gli addominali, inizia a sollevare le spalle. Continua a spingere con la parte bassa della schiena mentre contrai gli addominali ed espiri. Le spalle devono staccarsi da terra solo di circa 10 cm, mantenendo la zona lombare a contatto col suolo. Nella parte alta, contrai intensamente gli addominali per un secondo. Suggerimento: concentrati su un movimento lento e controllato, evitando di barare con lo slancio. Dopo la contrazione, torna lentamente alla posizione di partenza inspirando. Ripeti per il numero di ripetizioni consigliato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/1.jpg'], 
  NOW()
),
(
  '2e920773-b1b7-48da-b9da-f5c85a453d9e', 
  'Cuban Press', 
  'Cuban Press', 
  'Take a dumbbell in each hand with a pronated grip in a standing position. Raise your upper arms so that they are parallel to the floor, allowing your lower arms to hang in the "scarecrow" position. This will be your starting position.
To initiate the movement, externally rotate the shoulders to move the upper arm 180 degrees. Keep the upper arms in place, rotating the upper arms until the wrists are directly above the elbows, the forearms perpendicular to the floor.
Now press the dumbbells by extending at the elbows, straightening your arms overhead.
Return to the starting position as you breathe in by reversing the steps.
Repeat for the recommended amount of repetitions.', 
  'In piedi, afferra un manubrio per mano con una presa prona. Solleva la parte superiore delle braccia finché sono parallele al pavimento, lasciando gli avambracci penzolare nella posizione "spaventapasseri"; questa è la posizione di partenza. Per iniziare il movimento, ruota esternamente le spalle per muovere la parte superiore del braccio di 180 gradi. Mantieni le braccia in posizione, ruotandole finché i polsi si trovano direttamente sopra i gomiti e gli avambracci sono perpendicolari al suolo. Ora distendi i gomiti spingendo i manubri verso l''alto, raddrizzando le braccia. Inspira e torna alla posizione di partenza invertendo i passaggi. Ripeti per il numero di ripetizioni consigliato.', 
  'shoulders', 
  'traps', 
  'dumbbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cuban_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cuban_Press/1.jpg'], 
  NOW()
),
(
  '0880f79c-b93e-4353-b2c9-d241bdb285e0', 
  'Dancer''s Stretch', 
  'Dancer''s Stretch', 
  'Sit up on the floor.
Cross your right leg over your left, keeping the knee bent. Your left leg is straight and down on the floor.
Place your left arm on your right leg and your right hand on the floor.
Rotate your upper body to the right, and hold for 10-20 seconds. Switch sides.', 
  'Siediti a terra. Incrocia la gamba destra sopra la sinistra, mantenendo il ginocchio piegato. La gamba sinistra deve essere tesa e appoggiata a terra. Posiziona il braccio sinistro sulla gamba destra e la mano destra a terra. Ruota la parte superiore del corpo verso destra e mantieni la posizione per 10-20 secondi. Cambia lato.', 
  'lower back', 
  'abductors', 
  NULL, 
  'beginner', 
  NULL, 
  'static', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dancers_Stretch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dancers_Stretch/1.jpg'], 
  NOW()
),
(
  '2c011aa4-f717-4b22-b8af-fec977785988', 
  'Dead Bug', 
  'Dead Bug', 
  'Begin lying on your back with your hands extended above you toward the ceiling.
Bring your feet, knees, and hips up to 90 degrees.
Exhale hard to bring your ribcage down and flatten your back onto the floor, rotating your pelvis up and squeezing your glutes. Hold this position throughout the movement. This will be your starting position.
Initiate the exercise by extending one leg, straightening the knee and hip to bring the leg just above the ground.
Maintain the position of your lumbar and pelvis as you perform the movement, as your back is going to want to arch.
Stay tight and return the working leg to the starting position.
Repeat on the opposite side, alternating until the set is complete.', 
  'Sdraiati sulla schiena con le braccia distese verso il soffitto. Porta piedi, ginocchia e anche a 90 gradi. Espira con forza per abbassare la gabbia toracica e appiattire la schiena contro il pavimento, ruotando il bacino verso l''alto e contraendo i glutei. Mantieni questa posizione durante tutto il movimento: questa è la posizione di partenza. Inizia l''esercizio estendendo una gamba, distendendo ginocchio e anca fino a portare la gamba appena sopra il pavimento. Mantieni la posizione di zona lombare e bacino durante il movimento, evitando che la schiena si inarchi. Rimani in tensione e riporta la gamba nella posizione iniziale. Ripeti con il lato opposto, alternando fino al completamento della serie.', 
  'abdominals', 
  NULL, 
  'body only', 
  'beginner', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dead_Bug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dead_Bug/1.jpg'], 
  NOW()
),
(
  'a3553eeb-6fff-48b2-b944-e3aa572a120d', 
  'Deadlift with Bands', 
  'Deadlift con bande elastiche', 
  'To deadlift with short bands, simply loop them over the bar before you start, and step into them to set up. For long bands, they will need to be anchored to a secure base, such as heavy dumbbells or a rack.
With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.
Lower the bar by bending at the hips and guiding it to the floor.', 
  'Per lo stacco con bande corte, falle semplicemente passare attorno al bilanciere prima di iniziare e posizionaci i piedi all''interno. Per le bande lunghe, è necessario ancorarle a una base sicura, come manubri pesanti o un rack. Con i piedi e la presa ben saldi, fai un respiro profondo, abbassa le anche e piega le ginocchia finché gli stinchi non toccano il bilanciere. Guarda avanti, tieni il petto in fuori, la schiena inarcata e spingi sui talloni per sollevare il carico. Dopo che il bilanciere ha superato le ginocchia, tira energicamente indietro il bilanciere, stringendo le scapole mentre spingi le anche in avanti contro la sbarra. Abbassa il bilanciere piegandoti dalle anche e guidandolo verso il pavimento.', 
  'lower back', 
  'forearms', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Deadlift_with_Bands/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Deadlift_with_Bands/1.jpg'], 
  NOW()
),
(
  'b8d5b5bb-a22e-4aaf-8c1a-0d2247454232', 
  'Deadlift with Chains', 
  'Deadlift con catene', 
  'You can attach the chains to the sleeves of the bar, or just drape the middle over the bar so there is a greater weight increase as you lift.
Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets. With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar.
Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.
Lower the bar by bending at the hips and guiding it to the floor.', 
  'Puoi agganciare le catene alle estremità del bilanciere o semplicemente farle passare sopra la barra, in modo che il peso aumenti man mano che sollevi. Avvicinati al bilanciere in modo che sia centrato rispetto ai piedi. I piedi dovrebbero essere larghi quanto le anche. Piegati dalle anche per afferrare il bilanciere alla larghezza delle spalle, permettendo alle scapole di protarsi. Solitamente si utilizza una presa prona o una presa mista per le serie più pesanti. Con i piedi e la presa ben saldi, fai un respiro profondo, abbassa le anche e piega le ginocchia finché gli stinchi non toccano il bilanciere. Guarda avanti, tieni il petto in fuori, la schiena inarcata e spingi sui talloni per sollevare il carico. Dopo che il bilanciere ha superato le ginocchia, tira energicamente indietro, stringendo le scapole mentre spingi le anche in avanti contro la sbarra. Abbassa il bilanciere piegandoti dalle anche e guidandolo verso il pavimento.', 
  'lower back', 
  'forearms', 
  'barbell', 
  'expert', 
  'compound', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Deadlift_with_Chains/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Deadlift_with_Chains/1.jpg'], 
  NOW()
),
(
  'e6cdd44d-607c-42c1-a52b-4ad3fd9c87f8', 
  'Decline Barbell Bench Press', 
  'Distensioni su panca declinata con bilanciere', 
  'Secure your legs at the end of the decline bench and slowly lay down on the bench.
Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack.
As you breathe in, come down slowly until you feel the bar on your lower chest.
After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your chest muscles. Lock your arms and squeeze your chest in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up).
Repeat the movement for the prescribed amount of repetitions.
When you are done, place the bar back in the rack.', 
  'Fissa le gambe all''estremità della panca declinata e sdraiati lentamente. Utilizzando una presa di larghezza media (che crei un angolo di 90 gradi tra avambracci e braccia nel punto centrale del movimento), solleva il bilanciere dal rack e tienilo dritto sopra di te con le braccia tese, perpendicolari al pavimento. Questa è la posizione di partenza. Suggerimento: per proteggere la cuffia dei rotatori, fatti aiutare da uno spotter per staccare il bilanciere. Inspira e scendi lentamente fino a sentire il bilanciere sul petto basso. Dopo una pausa di un secondo, riporta il bilanciere alla posizione iniziale espirando e spingendo con i muscoli pettorali. Distendi le braccia, contrai il petto, mantieni la posizione per un secondo e riparti lentamente. Suggerimento: la fase di discesa dovrebbe durare almeno il doppio di quella di salita. Ripeti per il numero di ripetizioni prescritto. Al termine, riponi il bilanciere sul rack.', 
  'chest', 
  'shoulders', 
  'barbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Barbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Barbell_Bench_Press/1.jpg'], 
  NOW()
),
(
  '50479809-385a-4cb3-af0a-27b2dcb7f135', 
  'Decline Close-Grip Bench To Skull Crusher', 
  'Decline Close-Grip Bench to Skull Crusher', 
  'Secure your legs at the end of the decline bench and slowly lay down on the bench.
Using a close grip (a grip that is slightly less than shoulder width), lift the bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack.
Now lower the bar down to your lower chest as you breathe in. Keep the elbows in as you perform this movement.
Using the triceps to push the bar back up, press it back to the starting position as you exhale.
As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement.
Lift the bar back to the starting position by contracting the triceps and exhaling.
Repeat steps 3-6 until the recommended amount of repetitions is performed.', 
  'Fissa le gambe all''estremità della panca declinata e sdraiati lentamente. Utilizzando una presa stretta (leggermente inferiore alla larghezza delle spalle), solleva il bilanciere dal rack e tienilo dritto sopra di te con le braccia tese e i gomiti chiusi, perpendicolari al pavimento. Questa è la posizione di partenza. Suggerimento: fatti aiutare da uno spotter. Inspira e abbassa il bilanciere verso il petto basso, tenendo i gomiti stretti. Espira e spingi il bilanciere verso l''alto usando i tricipiti, tornando alla posizione iniziale. Mantenendo la parte superiore delle braccia ferma, inspira e abbassa lentamente il bilanciere muovendo solo gli avambracci in un arco semicircolare finché la sbarra non tocca leggermente la fronte. Espira e contrai i tricipiti per riportare il bilanciere alla posizione iniziale. Ripeti i passaggi 3-6 per le ripetizioni raccomandate.', 
  'triceps', 
  'chest', 
  'barbell', 
  'intermediate', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Close-Grip_Bench_To_Skull_Crusher/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Close-Grip_Bench_To_Skull_Crusher/1.jpg'], 
  NOW()
),
(
  '26a5b5a3-e94e-4be3-8f20-1b89158bc15f', 
  'Decline Crunch', 
  'Crunch su panca declinata', 
  'Secure your legs at the end of the decline bench and lie down.
Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don''t lock your fingers behind your head.
While pushing the small of your back down in the bench to better isolate your abdominal muscles, begin to roll your shoulders off it.
Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the bench only about four inches, and your lower back should remain on the bench. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don''t cheat yourself by using momentum.
After the one second contraction, begin to come down slowly again to the starting position as you inhale.
Repeat for the recommended amount of repetitions.', 
  'Fissa le gambe all''estremità della panca declinata e sdraiati. Posiziona le mani leggermente ai lati della testa tenendo i gomiti chiusi. Suggerimento: non incrociare le dita dietro la nuca. Spingendo la zona lombare contro la panca per isolare meglio gli addominali, inizia a sollevare le spalle. Continua a spingere forte con la bassa schiena mentre contrai gli addominali ed espiri. Le spalle dovrebbero sollevarsi dalla panca solo di circa 10 centimetri, mantenendo la zona lombare aderente alla panca. In cima al movimento, contrai intensamente gli addominali per un secondo. Suggerimento: concentrati su un movimento lento e controllato, evita di usare lo slancio. Dopo la contrazione, inspira e torna lentamente alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'abdominals', 
  NULL, 
  'body only', 
  'intermediate', 
  'isolation', 
  'pull', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Crunch/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Crunch/1.jpg'], 
  NOW()
),
(
  '51d775bb-362f-4d55-97f6-4b9e6b5f3970', 
  'Decline Dumbbell Bench Press', 
  'Distensioni su panca declinata con manubri', 
  'Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.
Once you are laying down, move the dumbbells in front of you at shoulder width.
Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position.
Bring down the weights slowly to your side as you breathe out. Keep full control of the dumbbells at all times. Tip: Throughout the motion, the forearms should always be perpendicular to the floor.
As you breathe out, push the dumbbells up using your pectoral muscles. Lock your arms in the contracted position, squeeze your chest, hold for a second and then start coming down slowly. Tip: It should take at least twice as long to go down than to come up..
Repeat the movement for the prescribed amount of repetitions of your training program.', 
  'Fissa le gambe all''estremità della panca declinata e sdraiati con un manubrio in ogni mano appoggiato sulle cosce. I palmi sono rivolti l''uno verso l''altro. Una volta sdraiato, porta i manubri davanti a te alla larghezza delle spalle. Ruota i polsi in avanti in modo che i palmi siano rivolti lontano da te. Questa è la posizione di partenza. Espira e abbassa lentamente i pesi ai lati, mantenendo il pieno controllo. Suggerimento: gli avambracci devono essere sempre perpendicolari al pavimento. Espira e spingi i manubri verso l''alto usando i muscoli pettorali. Distendi le braccia, contrai il petto, mantieni la posizione per un secondo e riparti lentamente. Suggerimento: la fase di discesa dovrebbe durare almeno il doppio di quella di salita. Ripeti per il numero di ripetizioni prescritto.', 
  'chest', 
  'shoulders', 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/1.jpg'], 
  NOW()
),
(
  '3141769c-0afb-4ed4-9dc6-eeead5e1bc44', 
  'Decline Dumbbell Flyes', 
  'Croci su panca declinata con manubri', 
  'Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.
Once you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position.
With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint.
Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights.
Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions.', 
  'Fissa le gambe all''estremità della panca declinata e sdraiati con un manubrio in ogni mano appoggiato sulle cosce. Una volta sdraiato, porta i manubri davanti a te alla larghezza delle spalle, con i palmi rivolti l''uno verso l''altro, braccia tese e perpendicolari al pavimento. Questa è la posizione di partenza. Con i gomiti leggermente piegati per evitare stress al tendine del bicipite, abbassa le braccia lateralmente con un ampio arco finché non senti lo stretching sul petto. Inspira durante questa fase. Suggerimento: le braccia devono rimanere ferme, il movimento deve avvenire solo nell''articolazione della spalla. Espira e torna alla posizione iniziale contraendo i pettorali. Suggerimento: segui lo stesso arco di movimento utilizzato per scendere. Mantieni la contrazione per un secondo in cima e ripeti per le ripetizioni prescritte.', 
  'chest', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'compound', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/1.jpg'], 
  NOW()
),
(
  '3b8ad245-89bc-4d46-ac08-2769068fc3de', 
  'Decline Dumbbell Triceps Extension', 
  'Estensioni tricipiti su panca declinata con manubri', 
  'Secure your legs at the end of the decline bench and lie down with a dumbbell on each hand on top of your thighs. The palms of your hand will be facing each other.
Once you are laying down, move the dumbbells in front of you at shoulder width. The palms of the hands should be facing each other and the arms should be perpendicular to the floor and fully extended. This will be your starting position.
As you breathe in and you keep the upper arms stationary (and elbows in), bring the dumbbells down slowly by moving your forearms in a semicircular motion towards you until your thumbs are next to your ears. Breathe in as you perform this portion of the movement.
Lift the dumbbells back to the starting position by contracting the triceps and exhaling.
Repeat for the recommended amount of repetitions.', 
  'Fissa le gambe all''estremità della panca declinata e sdraiati con i manubri sulle cosce. Porta i manubri davanti a te alla larghezza delle spalle, con palmi rivolti l''uno verso l''altro, braccia tese e perpendicolari al pavimento. Questa è la posizione di partenza. Mantenendo la parte superiore delle braccia ferma e i gomiti stretti, inspira e abbassa lentamente i manubri muovendo gli avambracci in un arco semicircolare finché i pollici non sono vicini alle orecchie. Espira e contrai i tricipiti per sollevare i manubri e tornare alla posizione iniziale. Ripeti per il numero di ripetizioni raccomandato.', 
  'triceps', 
  NULL, 
  'dumbbell', 
  'beginner', 
  'isolation', 
  'push', 
  ARRAY['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Triceps_Extension/1.jpg'], 
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