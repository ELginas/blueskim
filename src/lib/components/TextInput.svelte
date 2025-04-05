<script>
  import i18n from "$lib/i18n";
  import IconAddCircle from "$lib/icons/IconAddCircle.svelte";
  import IconEmoji from "$lib/icons/IconEmoji.svelte";
  import ChannelName from "./ChannelName.svelte";

  const { Icon, name } = $props();
</script>

<div class="flex border-t border-border p-3 items-center gap-3 overflow-hidden">
  <IconAddCircle class="flex-none size-4 text-neutral" />
  <div class="inline-flex gap-2 flex-1 items-center overflow-hidden">
    <span class="text-base/base text-disabled-text">{i18n.message}</span>
    <ChannelName {Icon} {name} disabled={true} />
  </div>
  <IconEmoji class="flex-none size-4 text-neutral" />
</div>
