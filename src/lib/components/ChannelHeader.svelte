<script>
  import ChannelName from "./ChannelName.svelte";

  const { Icon, name } = $props();
</script>

<div class="flex items-center h-[40px] border-b border-border px-4 py-3">
  <ChannelName {Icon} {name} disabled={true} />
</div>
