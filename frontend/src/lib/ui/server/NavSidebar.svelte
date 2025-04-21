<script>
  import NavEntry from "$lib/ui/server/NavEntry.svelte";
  import SidebarSeparator from "$lib/ui/server/SidebarSeparator.svelte";
  import NavButton from "$lib/ui/server/NavButton.svelte";
  import IconAdd from "$lib/icons/IconAdd.svelte";
  import IconCompass from "$lib/icons/IconCompass.svelte";

  const { servers, activeServerId } = $props();
</script>

<div class="flex flex-col py-3 bg-background gap-2 border-r border-border">
  {#each servers as server}
    <NavEntry {...server} active={activeServerId === server.id} />
  {/each}
  <SidebarSeparator />
  <NavButton Icon={IconAdd} />
  <NavButton Icon={IconCompass} />
</div>
