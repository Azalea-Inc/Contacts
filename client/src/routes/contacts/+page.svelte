<script>
  import Table from "../../views/Table.svelte";

  let titles = [
    'Nombre',
    'Apellido',
    'Correo electronico',
    'Numero',
    'Acciones'
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
</script>

<!-- Titles with buttons -->
<div class="w-9/12 mx-auto">
  <div class="flex justify-between my-5">
    <h3 class="text-3xl font-semibold">Contactos</h3>
    <a href="/contacts/new" class="p-2  border-2 rounded-md border-sky-500 text-white bg-sky-900">
      Agregar contacto
    </a>
  </div>
</div>

<Table {contacts} {titles}></Table>