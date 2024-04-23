<script>
  export let data = {
    name: "Name",
    lastname: "Lastname",
  };
</script>

<div class="contact-card">
  <h3>{data.name}</h3>
  <span>{data.lastname}</span>

  <slot />
</div>

<style>
  .contact-card {
    border: 1px solid black;
    padding: 0.5rem;
    margin-bottom: 10px;
    border-radius: 0.5rem;
  }
</style>
