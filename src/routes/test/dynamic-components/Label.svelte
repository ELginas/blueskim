<script>
  import { onMount } from "svelte";

  let { label = "demo" } = $props();

  onMount(() => {
    console.log(`mounted ${label}`);
  });
</script>

<label for="">{label}</label>
