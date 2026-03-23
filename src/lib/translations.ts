export const EXERCISE_TRANSLATIONS = {
  muscle_groups: {
    'abdominals': 'Addominali',
    'abductors': 'Abduttori',
    'adductors': 'Adduttori',
    'biceps': 'Bicipiti',
    'calves': 'Polpacci',
    'chest': 'Petto',
    'forearms': 'Avambracci',
    'glutes': 'Glutei',
    'hamstrings': 'Femorali',
    'lats': 'Dorsali',
    'lower back': 'Lombari',
    'middle back': 'Dorso (centrale)',
    'neck': 'Collo',
    'quadriceps': 'Quadricipiti',
    'shoulders': 'Spalle',
    'traps': 'Trapezi',
    'triceps': 'Tricipiti'
  },
  equipment: {
    'bands': 'Elastici',
    'barbell': 'Bilanciere',
    'body only': 'Corpo libero',
    'cable': 'Cavo',
    'dumbbell': 'Manubrio',
    'e-z curl bar': 'Bilanciere EZ',
    'exercise ball': 'Palla medica/Fitball',
    'foam roll': 'Foam Roller',
    'kettlebells': 'Kettlebell',
    'machine': 'Macchinario',
    'medicine ball': 'Palla medica',
    'other': 'Altro'
  },
  difficulty_level: {
    'beginner': 'Principiante',
    'intermediate': 'Intermedio',
    'expert': 'Esperto'
  },
  mechanic: {
    'compound': 'Composto',
    'isolation': 'Isolamento'
  },
  force: {
    'pull': 'Tirata',
    'push': 'Spinta',
    'static': 'Statico'
  },
  category: {
    'cardio': 'Cardio',
    'olympic weightlifting': 'Pesistica Olimpica',
    'plyometrics': 'Pliometria',
    'powerlifting': 'Powerlifting',
    'strength': 'Forza',
    'stretching': 'Stretching',
    'strongman': 'Strongman'
  }
};

export const translateExerciseTerm = (category: keyof typeof EXERCISE_TRANSLATIONS, term: string | null): string => {
  if (!term) return '';
  const normalizedTerm = term.toLowerCase();
  return EXERCISE_TRANSLATIONS[category][normalizedTerm as keyof (typeof EXERCISE_TRANSLATIONS)[typeof category]] || term;
};
