import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("todos").select();
  return {
    todos: data ?? [],
  };
}