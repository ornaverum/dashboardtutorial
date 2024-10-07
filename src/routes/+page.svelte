<script>

  export let data;
  console.log(data);
</script>

<ul>
  {#each data.todos as todo}
    <li>{todo.task} <input type='checkbox' checked={todo.completed}/></li>
  {/each}
</ul>