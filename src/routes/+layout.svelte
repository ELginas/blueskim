<script>
  import "../app.css";
  import "@fontsource-variable/ibm-plex-sans";
  import { Tooltip } from "bits-ui";

  let { children } = $props();

  $effect(() => {
    // Specifically images in Firefox
    window.ondragstart = function () {
      return false;
    };
  });
</script>

<Tooltip.Provider>
  {@render children()}
</Tooltip.Provider>
