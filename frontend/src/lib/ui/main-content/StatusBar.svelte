<script>
  import i18n from "$lib/i18n";
  import IconLoading from "$lib/icons/IconLoading.svelte";
  import LiveStatus from "$lib/ui/main-content/LiveStatus.svelte";

  const { username, status } = $props();
</script>

<div
  class="px-1 py-0.5 flex border-t border-border items-center gap-1 overflow-hidden"
>
  <IconLoading class="text-white w-[16px] h-[6px] flex-none" />
  <span class="text-white text-sm/sm no-interact truncate font-bold"
    >{username}</span
  >
  <span class="whitespace-nowrap text-white text-sm/sm no-interact"
    >{i18n.isTyping}...</span
  >
  <div class="flex-1 min-w-1"></div>
  {#if status}
    <LiveStatus class="flex-none" {...status} />
  {/if}
</div>
