<script>
  import NavEntry from "./NavEntry.svelte";
  import SidebarSeparator from "./SidebarSeparator.svelte";
  import NavButton from "./NavButton.svelte";
  import IconAdd from "$lib/icons/IconAdd.svelte";
  import IconCompass from "$lib/icons/IconCompass.svelte";
</script>

<div class="flex flex-col py-3 bg-background gap-2 border-r border-border">
  {#each [...Array(4).keys()] as i}
    <NavEntry name="Example name" id={i} pings={i} />
  {/each}
  <SidebarSeparator />
  <NavEntry active id={255} pings={25} />
  <NavEntry notification />
  <SidebarSeparator />
  <NavButton Icon={IconAdd} />
  <NavButton Icon={IconCompass} />
</div>
