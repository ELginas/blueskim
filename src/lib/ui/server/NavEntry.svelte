<script>
  import NotificationHalfBubble from "$lib/ui/common/NotificationHalfBubble.svelte";
  import ServerImage from "$lib/ui/server/ServerImage.svelte";
  const { id, active, notification, pings, name } = $props();
</script>

<!-- TODO: keep tooltip open if alr open, fix context and tooltip when exiting page focus, tooltip clashing with contextmenu -->
<div class="flex w-full items-center relative">
  <!-- <ContextMenu.Root>
    <ContextMenu.Trigger> -->
  <ServerImage
    {id}
    {pings}
    class="peer mx-3 size-[42px]"
    classImage={[
      "no-interact hover:rounded-[12px] transition-all",
      active ? "rounded-[12px]" : "rounded-[21px]",
    ]}
  />
  <!-- <Tooltip
    class={[
      "peer size-[42px] bg-white-50 mx-3 hover:rounded-[12px] transition-all",
      active ? "rounded-[12px]" : "rounded-[21px]",
    ]}
    side="right"
    align="center"
  >
    {#snippet content()}
      {name}
    {/snippet}
  </Tooltip> -->
  <!-- </ContextMenu.Trigger>
    <ContextMenu.Content
      class="z-10 bg-gray-900 rounded-md border-gray-300 border p-2"
    >
      <ContextMenuItem disabled>Mark As Read</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Invite People</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuSub>
        {#snippet trigger()}
          Mute Server
        {/snippet}
        {#snippet content()}
          <ContextMenuItem>For 30 Minutes</ContextMenuItem>
          <ContextMenuItem>For 1 Hour</ContextMenuItem>
        {/snippet}
      </ContextMenuSub>
      <ContextMenuItem>Notification Settings</ContextMenuItem>
      <ContextMenuItem>Hide Muted Servers</ContextMenuItem>
      <ContextMenuItem>Show All Channels</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Privacy Settings</ContextMenuItem>
      <ContextMenuItem>Edit Per-server Profile</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Leave Server</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Copy Server ID</ContextMenuItem>
    </ContextMenu.Content>
  </ContextMenu.Root> -->
  <NotificationHalfBubble {notification} {active} />
</div>
