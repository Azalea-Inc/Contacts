<script>
  import Counter from "../../views/Counter.svelte";

  let contadores = [
    { title: "Titulo1" },
    { title: "Titulo2" },
    { title: "Titulo3" },
    { title: "Titulo4" },
  ];
</script>

<h1>Contacts</h1>

{#each contadores as contador}
  <Counter title={contador.title}></Counter>
{/each}

<style>
  h1 {
    color: #ff0000;
  }
</style>
