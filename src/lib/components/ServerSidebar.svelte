<script>
  import IconChevron from "$lib/icons/IconChevron.svelte";
  import ChannelEntry from "./ChannelEntry.svelte";
  import ScrollArea from "./ScrollArea.svelte";
  import ServerHeader from "./ServerHeader.svelte";

  const { name } = $props();
</script>

<div
  class="flex flex-col bg-background w-[212px] border-r border-border overflow-hidden"
>
  <ServerHeader {name} />
  <ScrollArea class="flex flex-col flex-1 py-4">
    {#each [...Array(70)] as i}
      <ChannelEntry
        name="server-one-overly-very-very-very-long"
        notification={true}
        pings={0}
      />
      <ChannelEntry
        name="server-one-overly-very-very-very-long"
        notification={true}
        pings={95293}
      />
      <ChannelEntry name="server-one" notification={false} pings={0} />
      <ChannelEntry name="server-one" notification={true} pings={0} />
      <ChannelEntry name="server-one" notification={true} pings={1} />
    {/each}
  </ScrollArea>
</div>
