<script>
  import ChannelName from "./ChannelName.svelte";
  import NotificationBadge from "./NotificationBadge.svelte";
  import NotificationHalfBubble from "./NotificationHalfBubble.svelte";

  const { name, notification, pings } = $props();
</script>

<!-- <div class="flex relative items-center mx-3 px-2 py-1 bg-white/10"> -->
<div class="flex w-full items-center relative">
  <button
    class="flex flex-1 rounded-md items-center mx-3 px-2 py-1.5 hover:bg-white/10 overflow-hidden"
  >
    <ChannelName {name} disabled={!notification} />
    <div class="flex-1 min-w-1"></div>
    {#if pings > 0}
      <NotificationBadge count={pings} />
    {/if}
  </button>
  <NotificationHalfBubble {notification} />
</div>
