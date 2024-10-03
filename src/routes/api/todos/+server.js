import { supabase } from "$lib/supabase";

// Example GET Request for /api/todos
export async function GET({ request }) {
    // Fetching data from Supabase (or any database)
    const { data, error } = await supabase.from('todos').select('*');
  
    // Error handling
    if (error) {
      return new Response(
        JSON.stringify({ error: 'Error fetching todos' }),
        { status: 500 }
      );
    }
  
    // Successful response with the list of todos
    return new Response(JSON.stringify(data), { status: 200 });
  }
  
  // Example POST Request for /api/todos
export async function POST({ request }) {
    // Extract the body of the POST request
    const { task } = await request.json();
  
    // Insert the new todo into the database
    const { data, error } = await supabase.from('todos').insert([{ task }]);
  
    // Error handling
    if (error) {
      return new Response(
        JSON.stringify({ error: 'Error creating a new todo' }),
        { status: 500 }
      );
    }
  
    // Successful response with the newly created todo item
    return new Response(JSON.stringify(data[0]), { status: 201 });
  }
  