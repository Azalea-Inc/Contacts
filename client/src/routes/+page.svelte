<script>
  import Contact from "../views/Contact.svelte";

  let contacts = [
    { name: "Joan", lastname: "Coronado" },
    { name: "Gilberto", lastname: "Garza" },
    { name: "Fidel", lastname: "Araguz" },
    { name: "Juan", lastname: "Perez" },
  ];
</script>

<h1>Lista de contactos</h1>

{#each contacts as contact}
  <Contact data={contact}>
    <p>Mas Info</p>
  </Contact>
{/each}
