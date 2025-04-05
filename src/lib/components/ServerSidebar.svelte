<script>
  import IconChevron from "$lib/icons/IconChevron.svelte";
  import ChannelEntry from "./ChannelEntry.svelte";
  import ScrollArea from "./ScrollArea.svelte";

  const { name } = $props();
</script>

<div
  class="flex flex-col bg-background w-[212px] border-r border-border overflow-hidden"
>
  <!-- TODO: if overflowing hover shows expanded -->
  <div class="flex items-center h-[40px] border-b border-border px-4 py-3">
    <span class="inline-block text-base/base font-semibold text-white truncate"
      >{name}</span
    >
    <div class="flex-1 min-w-1"></div>
    <IconChevron class="size-3 rotate-90" color="white" />
  </div>
  <ScrollArea class="flex flex-col flex-1 py-4">
    {#each [...Array(70)] as i}
      <ChannelEntry name="server-one" notification={true} />
      <ChannelEntry name="server-one" notification={false} />
      <ChannelEntry name="server-one" notification={true} />
    {/each}
  </ScrollArea>
</div>
