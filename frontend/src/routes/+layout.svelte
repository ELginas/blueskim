<script>
  import "../app.css";
  import "@fontsource-variable/ibm-plex-sans";
  import { Tooltip } from "bits-ui";
  import { getContext, setContext } from "svelte";

  let { children } = $props();

  $effect(() => {
    // Specifically images in Firefox
    window.ondragstart = function () {
      return false;
    };
  });

  let isContextMenuOpen = $state({
    value: false,
  });
  setContext("isContextMenuOpen", isContextMenuOpen);
</script>

<Tooltip.Provider>
  {@render children()}
</Tooltip.Provider>
{#if isContextMenuOpen.value}
  <div class="left-0 top-0 absolute w-full h-full"></div>
{/if}
