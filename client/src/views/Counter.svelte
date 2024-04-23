<script>
  let counter = 0;
  export let title = "";

  function add() {
    counter++;
  }
</script>

<h3>{title}</h3>
<p>Counter: {counter}</p>
<button on:click={add}>Add</button>
