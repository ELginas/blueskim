<script>
  let { label, value = $bindable() } = $props();
</script>

<label for="">{label}</label>
<input type="number" bind:value />
