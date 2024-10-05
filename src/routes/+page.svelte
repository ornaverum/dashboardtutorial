<script>
  export let data;
</script>

<ul>
  {#each data.todos as todo}
    <li>{todo.task}</li>
  {/each}
</ul>