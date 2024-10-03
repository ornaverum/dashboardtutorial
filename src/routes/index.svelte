<script>
    import { onMount } from 'svelte';
    let todos = [];
    let newTask = '';
  
    // Fetch todos on load
    onMount(async () => {
      const res = await fetch('/api/todos');
      todos = await res.json();
    });
  
    // Add a new todo
    async function addTodo() {
      const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({ task: newTask }),
        headers: { 'Content-Type': 'application/json' }
      });
      const newTodo = await res.json();
      todos = [...todos, newTodo];
      newTask = '';
    }
  
    // Toggle completed status
    async function toggleCompleted(id, completed) {
      await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
        headers: { 'Content-Type': 'application/json' }
      });
      todos = todos.map(todo => todo.id === id ? { ...todo, completed } : todo);
    }
  
    // Delete a todo
    async function deleteTodo(id) {
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
      todos = todos.filter(todo => todo.id !== id);
    }
  </script>
  
  <h1>Todo List</h1>
  <input type="text" bind:value={newTask} placeholder="New Task" />
  <button on:click={addTodo}>Add</button>
  
  <ul>
    {#each todos as todo}
      <li>
        <input type="checkbox" checked={todo.completed} on:change={() => toggleCompleted(todo.id, !todo.completed)} />
        {todo.task}
        <button on:click={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    {/each}
  </ul>
  