
import { createClient } from '@supabase/supabase-js';

// Hardcoding for diagnostic purposes - normally would use env vars
const supabaseUrl = 'https://pgwfaiwvtwwuebisatqp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnd2ZhaXd2dHd3dWViaXNhdHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDM0MjMsImV4cCI6MjA4OTU3OTQyM30.1C2-LoduevSK2z0loZXt9afUvHuDF8lUQ83n3grDAko';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testUpdate() {
  const exerciseId = '06772076-8d53-495d-a8f3-823b417f6126';
  const testVideoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  
  console.log(`Attempting to update exercise ${exerciseId}...`);
  
  const { data, error, status, statusText } = await supabase
    .from('exercise_library')
    .update({ 
      video_urls: [testVideoUrl],
      video_url: testVideoUrl // Syncing legacy field too
    })
    .eq('id', exerciseId)
    .select();

  if (error) {
    console.error('Update failed!', error);
    console.log('Status:', status, statusText);
  } else {
    console.log('Update success!');
    console.log('Status:', status, statusText);
    console.log('Updated data:', data);
  }
}

testUpdate();
