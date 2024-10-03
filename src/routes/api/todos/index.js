import { supabase } from "$lib/supabase";

// GET /api/todos: Fetch all todos
export const GET = async () => {
    const {data, error} = await supabase.from('todos').select('*');
    if (error) return { status: 500, body: {error: error.message}};
    return { status: 200, body: data};
}

export const POST = async ({request}) =>{
    const { task } = await request.json();
    const { data, error } = await supabase.from('todos').insert([{task}]);
    if (error) return {status: 500, body:{error: error.message}};
    return {status: 201, body: data[0]};
}

