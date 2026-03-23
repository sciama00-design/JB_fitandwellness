import fs from 'fs';

const SOURCE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';

async function analyzeCategoricalValues() {
  console.log('Fetching exercises...');
  const response = await fetch(SOURCE_URL);
  const exercises = await response.json();

  const stats = {
    muscle_group: new Set(),
    muscle_group_secondary: new Set(),
    equipment: new Set(),
    difficulty_level: new Set(),
    mechanic: new Set(),
    force: new Set(),
    category: new Set()
  };

  exercises.forEach(ex => {
    if (ex.primaryMuscles) ex.primaryMuscles.forEach(m => stats.muscle_group.add(m));
    if (ex.secondaryMuscles) ex.secondaryMuscles.forEach(m => stats.muscle_group_secondary.add(m));
    if (ex.equipment) stats.equipment.add(ex.equipment);
    if (ex.level) stats.difficulty_level.add(ex.level);
    if (ex.mechanic) stats.mechanic.add(ex.mechanic);
    if (ex.force) stats.force.add(ex.force);
    if (ex.category) stats.category.add(ex.category);
  });

  const report = {};
  for (const key in stats) {
    report[key] = Array.from(stats[key]).sort();
  }

  fs.writeFileSync('scripts/categorical_stats.json', JSON.stringify(report, null, 2));
  console.log('Stats saved to scripts/categorical_stats.json');
}

analyzeCategoricalValues();
