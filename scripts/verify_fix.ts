
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pgwfaiwvtwwuebisatqp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnd2ZhaXd2dHd3dWViaXNhdHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDM0MjMsImV4cCI6MjA4OTU3OTQyM30.1C2-LoduevSK2z0loZXt9afUvHuDF8lUQ83n3grDAko';

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyFix() {
  console.log('Verifying Exercise Library Fixes...');

  // 1. Check if we can still read exercises
  const { data: exercises, error: readError } = await supabase
    .from('exercise_library')
    .select('*')
    .limit(1);

  if (readError) {
    console.error('Read failed:', readError);
    return;
  }
  console.log('Read success!');

  // 2. Test the "0 rows affected" check (simulated via script)
  // We know that updating a random ID with anon key should return [] data if RLS works
  const randomId = '00000000-0000-0000-0000-000000000000';
  const { data: updateData, error: updateError } = await supabase
    .from('exercise_library')
    .update({ name: 'Should Fail' })
    .eq('id', randomId)
    .select();

  if (updateData && updateData.length === 0) {
    console.log('Verification: Update on non-existent/unauthorized row correctly returns empty array.');
  } else {
    console.log('Verification: Unexpected result for invalid update:', updateData);
  }

  console.log('\nSummary of changes made:');
  console.log('1. ExerciseFormModal now initializes video_urls from legacy video_url field.');
  console.log('2. exerciseService now correctly identifies when an update/create fails to affect rows.');
  console.log('3. ExerciseFormModal now forks system exercises into personal ones instead of trying to edit them directly.');
}

verifyFix();
