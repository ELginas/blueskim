<script>
  import ChannelName from "./ChannelName.svelte";

  const { name } = $props();
</script>

<button
  class="flex items-center h-[40px] border-b border-border px-4 py-3 hover:bg-white/10"
>
  <ChannelName {name} disabled={true} />
</button>
