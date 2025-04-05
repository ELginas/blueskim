<script>
  import { ContextMenu } from "bits-ui";
  import NavEntry from "./NavEntry.svelte";
</script>

<div class="flex flex-col py-3 bg-background gap-2 border-r border-border">
  {#each [...Array(4)] as _}
    <NavEntry name="Example name" />
  {/each}
  <NavEntry active />
  <NavEntry notification />
</div>
