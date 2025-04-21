<script>
  import IconConversation from "$lib/icons/IconConversation.svelte";
  import ChannelEntry from "$lib/ui/channel/ChannelEntry.svelte";
  import ScrollArea from "$lib/ui/common/ScrollArea.svelte";
  import ServerHeader from "$lib/ui/server/ServerHeader.svelte";

  const { name } = $props();
</script>

<div
  class="flex flex-col bg-background w-[212px] border-r border-border overflow-hidden"
>
  <ServerHeader {name} />
  <ScrollArea class="flex flex-col flex-1 py-4">
    {#each [...Array(70)] as i}
      <ChannelEntry
        name="ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl-one-overly-very-very-very-long"
        Icon={IconConversation}
        notification={true}
        pings={0}
      />
      <ChannelEntry
        name="ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl-one-overly-very-very-very-long"
        Icon={IconConversation}
        notification={true}
        pings={95293}
      />
      <ChannelEntry
        name="server-one"
        Icon={IconConversation}
        notification={false}
        pings={0}
      />
      <ChannelEntry
        name="server-one"
        Icon={IconConversation}
        notification={true}
        pings={0}
      />
      <ChannelEntry
        name="server-one"
        Icon={IconConversation}
        notification={true}
        pings={1}
      />
    {/each}
  </ScrollArea>
</div>
