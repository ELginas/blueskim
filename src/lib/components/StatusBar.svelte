<script>
  import IconLoading from "$lib/icons/IconLoading.svelte";
  import LiveStatus from "./LiveStatus.svelte";
</script>

<div class="p-1 flex border-t border-border items-center gap-1">
  <IconLoading color="white" />
  <span class="text-white text-sm/sm select-none drag-none"
    ><span class="font-bold">Simon</span> is typing...</span
  >
  <div class="flex-1"></div>
  <LiveStatus state="offline" message="Websockets server is offline" />
</div>
