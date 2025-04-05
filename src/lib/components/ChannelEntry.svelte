<script>
  import ChannelName from "./ChannelName.svelte";
  import NotificationHalfBubble from "./NotificationHalfBubble.svelte";

  const { name, notification } = $props();
</script>

<!-- <div class="flex relative items-center mx-3 px-2 py-1 bg-white/10"> -->
<div class="flex w-full items-center relative">
  <button
    class="flex flex-1 rounded-md items-center mx-3 px-2 py-1.5 hover:bg-white/10"
  >
    <ChannelName {name} disabled={!notification} />
  </button>
  <NotificationHalfBubble {notification} />
</div>
