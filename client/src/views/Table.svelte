<script>
  export let contacts = [];
  export let titles = [];
</script>

<div class="container mx-auto p-4">
  <!-- Contact list -->
  <table class="w-full">
    <!-- Header from our table -->
    <thead>
      <tr class="text-center">
        {#each titles as title}
          <th class="p-4"> {title} </th>
        {/each}
      </tr>
    </thead>
    <!-- This is the table body -->
    <tbody>
      {#each contacts as contact}
        <tr class="text-center border-solid border-b">
          <!-- Name -->
          <td class="p-4">
            {contact.name}
          </td>
          <!-- Lastname -->
          <td>
            {contact.lastname}
          </td>
          <!-- Mail -->
          <td>
            {contact.mail}
          </td>
          <!-- Phone -->
          <td>
            {contact.phone}
          </td>
          <!-- Actions -->
          <td>
            <button class="px-2 py-1 border-2 rounded-md bg-cyan-500 hover:bg-cyan-600">
              <i class="bi bi-pencil-square text-white"></i>
            </button>
            <button class="px-2 py-1 border-2 rounded-md bg-red-600 hover:bg-red-700 text-white">
              <i class="bi bi-trash3-fill text-white"></i>
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<!--

  <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          {#each titles as title}
            <th
              class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
              >{title}</th>
          {/each}
        </tr>
      </thead>
      <tbody class="bg-white">
        {#each contacts as contact}
          <tr>
            <td class="py-4 px-6 border-b border-gray-200">{contact.name}</td>
            <td class="py-4 px-6 border-b border-gray-200 truncate"
              >{contact.mail}</td
            >
            <td class="py-4 px-6 border-b border-gray-200">{contact.phone}</td>
            <td class="py-4 px-6 border-b border-gray-200"></td>
            <td class="py-4 px-6 border-b border-gray-200"></td>
            <td class="py-4 px-6 border-b border-gray-200">
              <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs"
                >Active</span
              >
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
-->
