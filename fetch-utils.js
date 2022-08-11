const SUPABASE_URL = 'https://qydsigowszhtfxgqasyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHNpZ293c3podGZ4Z3Fhc3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAwMDEyMzIsImV4cCI6MTk3NTU3NzIzMn0.NkXzWeFd8EUOb7YsydiXALdYvDucbOZacLx_gg-KPZ8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(poll) {
    const response = await client.from('polls').insert(poll);
    return response;
}

export async function getPoll() {
    const response = await client.from('polls').select('*');
    return response;
}