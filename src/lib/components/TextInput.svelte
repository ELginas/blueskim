<script>
  import IconAddCircle from "$lib/icons/IconAddCircle.svelte";
  import IconEmoji from "$lib/icons/IconEmoji.svelte";
  import ChannelName from "./ChannelName.svelte";
</script>

<div class="flex border-t border-border p-3 items-center gap-3">
  <IconAddCircle color="var(--color-neutral)" />
  <div class="inline-flex gap-2 flex-1 items-center">
    <span class="text-base/base text-disabled-text">Message</span>
    <ChannelName name="server-one" disabled={true} />
  </div>
  <IconEmoji color="var(--color-neutral)" />
</div>
