<script>
  import ChannelEntry from "$lib/ui/channel/ChannelEntry.svelte";
  import ScrollArea from "$lib/ui/common/ScrollArea.svelte";
  import ServerHeader from "$lib/ui/server/ServerHeader.svelte";

  const { name, channels } = $props();
</script>

<div
  class="flex flex-col bg-background w-[212px] border-r border-border overflow-hidden"
>
  <ServerHeader {name} />
  <ScrollArea class="flex flex-col flex-1 py-4">
    {#each channels as channel}
      <ChannelEntry {...channel} />
    {/each}
  </ScrollArea>
</div>
