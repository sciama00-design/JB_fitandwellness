import fs from 'fs';

const ORIGINAL_POPULATE_FILE = 'populate_exercise_library.sql';

function parseIDs() {
  const content = fs.readFileSync(ORIGINAL_POPULATE_FILE, 'utf8');
  const idMap = new Map();
  
  // Robust regex for ( 'UUID', 'Name'
  // Matches ( [optional whitespace] 'UUID' , [optional whitespace] 'Name' ,
  const regex = /\(\s*'([a-f0-9-]{36})',\s*'((?:''|.)*?)',/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const name = match[2].replace(/''/g, "'");
    idMap.set(name, id);
  }
  
  console.log(`Found ${idMap.size} IDs.`);
  console.log('Sample:', Array.from(idMap.entries()).slice(0, 5));
}

parseIDs();
