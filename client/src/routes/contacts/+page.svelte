<script>
  import { onDestroy, onMount } from "svelte";
  import Table from "../../views/Table.svelte";

  import axios from "axios";

  let titles = [
    "Nombre",
    "Apellido",
    "Correo electronico",
    "Télefono",
    "Acciones",
  ];

  let contacts = [
    {
      name: "Joan",
      lastname: "Coronado",
      mail: "joancoronado@gmail.com",
      phone: "8687893945",
    },
    {
      name: "Fidel",
      lastname: "Araguz",
      mail: "fidelaraguz@gmail.com",
      phone: "8687895069",
    },
    {
      name: "Gilberto",
      lastname: "Garza",
      mail: "gilbertogarza@gmail.com",
      phone: "8687895004",
    },
  ];

  function getContacts() {
    axios
      .get("https://api.github.com/users")
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onMount(() => {
    getContacts();
  });

  onDestroy(() => {
    console.log("Destruyendo");
  });
</script>

<!-- Titles with buttons -->
<div class="container mx-auto p-4">
  <div class="flex justify-between my-5">
    <h3 class="text-3xl font-semibold">Contactos</h3>
    <button
      class="p-2 border-2 rounded-md border-sky-500 text-white bg-sky-500 hover:bg-sky-600"
    >
      Agregar contacto
    </button>
  </div>
</div>

<Table {contacts} {titles}></Table>
