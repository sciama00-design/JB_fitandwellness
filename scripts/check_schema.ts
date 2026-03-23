
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
  console.log('Checking exercise_library schema...');
  
  // Try to select a single record and check its keys
  const { data, error } = await supabase
    .from('exercise_library')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  if (data && data.length > 0) {
    console.log('Columns found in exercise_library:', Object.keys(data[0]));
    if ('video_urls' in data[0]) {
      console.log('video_urls column exists. Type of value:', typeof data[0].video_urls, data[0].video_urls);
    } else {
      console.log('video_urls column is MISSING!');
    }
  } else {
    console.log('No records found in exercise_library to check schema.');
  }
}

checkSchema();
