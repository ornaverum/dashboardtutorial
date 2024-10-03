import { supabase } from "$lib/supabase";

export const PATCH = async ({params, request})=>{
    const { completed} = await request.json();
    const {data, error} = await supabase.from('todos').update( {completed} ).eq('id', params.id);
    if (error) return {status: 500, body: {error: error.message}};
    return {status:200, body: data[0]};
}

export const DELETE = async ({params})=>{
    const {data, error} = await supabase.from('todos').delete().eq('id', params.id);
    if (error) return {status: 500, body: {error: error.message}};
    return {status: 200, body: data[0]};
}

