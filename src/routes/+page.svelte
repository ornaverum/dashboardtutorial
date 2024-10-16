<script>
import { supabase } from "$lib/supabaseClient";

  export let data;
  console.log(data);
  import {insert} from '$lib/patterns.ts';

  const insertTodo = async () => {
    const todo = {
      task: 'Buy Milk',
      completed: false,
    }
    await insert(todo);
  }

  const testTodo = async () => {
    const { data } = await supabase.from("todos").select();
    console.log(data);
  }
  
</script>

<main class='mx-auto p-20 bg-base-content'>
  <div >
    {#each data.todos as todo}
      <div class="card card-compact my-6 bg-neutral w-96 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{todo.task}</h2>
          <div class="card-actions">
            <input type='checkbox' checked={todo.completed}/>
            <button class="btn btn-accent justify-end" on:click={insertTodo}>Buy Now</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>