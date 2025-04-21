<script>
  import ChannelName from "$lib/ui/channel/ChannelName.svelte";
  import NotificationBadge from "$lib/ui/common/NotificationBadge.svelte";
  import NotificationHalfBubble from "$lib/ui/common/NotificationHalfBubble.svelte";

  const { Icon, name, notification, pings } = $props();
</script>

<div class="flex w-full items-center relative">
  <button
    class="flex flex-1 rounded-md items-center mx-3 px-2 py-1.5 hover:bg-white/10 overflow-hidden"
  >
    <ChannelName {Icon} {name} disabled={!notification} />
    <div class="flex-1 min-w-1"></div>
    {#if pings > 0}
      <NotificationBadge count={pings} />
    {/if}
  </button>
  <NotificationHalfBubble {notification} />
</div>
