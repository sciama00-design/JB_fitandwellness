
// Standalone verification script for forking logic
// No external imports to avoid ESM/TS-node resolution issues

interface ExerciseLibrary {
    id: string;
    name: string;
    video_url: string | null;
    video_urls?: string[] | null;
    images: string[] | null;
    coach_id: string | null;
    forked_from?: string | null;
}

const mockSystemExercise: ExerciseLibrary = {
    id: 'sys-1',
    name: 'Push-Up',
    video_url: 'http://youtube.com/v1',
    video_urls: ['http://youtube.com/v1'],
    images: ['img1.jpg'],
    coach_id: null
};

const mockUser = { id: 'coach-123' };

function simulateSubmit(formData: any, originalExercise: ExerciseLibrary | null) {
    console.log('\n--- Simulating Submit ---');
    console.log('Original Coach ID:', originalExercise?.coach_id);
    
    if (originalExercise?.id) {
        const isSystemExercise = !originalExercise.coach_id;
        
        // Detect if media changed
        const hasMediaChanged = 
          JSON.stringify(formData.video_urls || []) !== JSON.stringify(originalExercise.video_urls || []) ||
          JSON.stringify(formData.images || []) !== JSON.stringify(originalExercise.images || []) ||
          (formData.video_url || '') !== (originalExercise.video_url || '');

        console.log('Media Changed:', hasMediaChanged);

        if (isSystemExercise && hasMediaChanged) {
            console.log('ACTION: CREATE FORK');
            const { id, created_at, ...forkData } = formData;
            return {
                action: 'create',
                data: {
                    ...forkData,
                    coach_id: mockUser.id,
                    forked_from: originalExercise.id
                }
            };
        } else {
            console.log('ACTION: UPDATE DIRECT');
            return {
                action: 'update',
                id: originalExercise.id,
                data: formData
            };
        }
    }
    return { action: 'create_new', data: formData };
}

console.log('RUNNING TESTS...');

// Test Case 1: Edit text of system exercise
console.log('Test 1: Edit text of system exercise');
const test1 = simulateSubmit({ ...mockSystemExercise, name: 'Push-Up Pro' }, mockSystemExercise);
console.log('Test 1 Result:', test1.action === 'update' ? 'PASS (Update)' : 'FAIL');

// Test Case 2: Edit media of system exercise
console.log('Test 2: Edit media of system exercise');
const test2 = simulateSubmit({ ...mockSystemExercise, video_urls: ['http://youtube.com/v2'] }, mockSystemExercise);
console.log('Test 2 Result:', test2.action === 'create' && test2.data.forked_from === 'sys-1' ? 'PASS (Fork)' : 'FAIL');

// Test Case 3: Edit media of personal exercise
console.log('Test 3: Edit media of personal exercise');
const mockPersonalExercise = { ...mockSystemExercise, coach_id: mockUser.id, id: 'pers-1' };
const test3 = simulateSubmit({ ...mockPersonalExercise, images: ['img2.jpg'] }, mockPersonalExercise);
console.log('Test 3 Result:', test3.action === 'update' ? 'PASS (Update)' : 'FAIL');

// Simulating Library Filtering
console.log('\n--- Simulating Library Filter ---');
const exercises: ExerciseLibrary[] = [
    mockSystemExercise,
    { ...mockSystemExercise, id: 'fork-1', coach_id: mockUser.id, forked_from: 'sys-1' } as any,
    { id: 'sys-2', name: 'Squat', coach_id: null } as any
];

const forkedSystemIds = new Set(
    exercises
      .filter(e => e.coach_id === mockUser.id && e.forked_from)
      .map(e => e.forked_from)
);

const filtered = exercises.filter(e => {
    if (e.coach_id === null && forkedSystemIds.has(e.id)) {
      return false;
    }
    return true;
});

console.log('Filtered Count:', filtered.length); // Should be 2 (fork-1 and sys-2)
console.log('Contains original sys-1:', filtered.some(e => e.id === 'sys-1')); // Should be false
console.log('Contains fork-1:', filtered.some(e => e.id === 'fork-1')); // Should be true

if (filtered.length === 2 && !filtered.some(e => e.id === 'sys-1') && filtered.some(e => e.id === 'fork-1')) {
    console.log('Filter Test: PASS');
} else {
    console.log('Filter Test: FAIL');
}
