<script>
  let counter = 0;
  export let title = "";

  function add() {
    counter++;
  }
</script>

<div class="bg-green-300 mb-4 p-4 rounded-md">
  <h3>{title}</h3>
  <p>Counter: {counter}</p>
  <button on:click={add}>Add</button>
</div>

