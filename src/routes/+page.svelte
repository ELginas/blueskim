<script>
  import NavSidebar from "$lib/components/NavSidebar.svelte";
  import { Tooltip } from "bits-ui";
</script>

<div class="flex h-full">
  <Tooltip.Provider>
    <NavSidebar />
  </Tooltip.Provider>
</div>
