import { supabase } from "$lib/supabaseClient";
import { v4 as uuidv4 } from 'uuid';



type Todo = {
    id: number;
    task: string;
    completed: boolean;
    dateDue: Date;
    dateStart: Date;
  };
  
export async function insert(todo: Todo) {
    const uuid = uuidv4();
    todo = { ...todo, id: uuid, dateDue: new Date(), dateStart: new Date() };
    console.log(todo);
    const { error } = await supabase
    .from('todos')
    .insert(todo);
    if (error) {
        console.log(error);
    }
  }
  