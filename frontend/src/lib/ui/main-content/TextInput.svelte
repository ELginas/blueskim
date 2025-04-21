<script>
  import i18n from "$lib/i18n";
  import IconAddCircle from "$lib/icons/IconAddCircle.svelte";
  import IconEmoji from "$lib/icons/IconEmoji.svelte";
  import ChannelName from "$lib/ui/channel/ChannelName.svelte";

  const { Icon, name } = $props();

  let value = $state("");
</script>

<div class="flex border-t border-border p-3 items-center gap-3 overflow-hidden">
  <IconAddCircle class="flex-none size-4 text-neutral" />
  <div class="flex flex-1 overflow-hidden items-center h-full relative">
    {#if !value}
      <div class="inline-flex gap-2 items-center absolute w-full">
        <span class="text-base/base text-disabled-text no-interact"
          >{i18n.message}</span
        >
        <ChannelName {Icon} {name} disabled={true} />
      </div>
    {/if}
    <input
      type="text"
      class="flex-1 text-white font-base/base absolute h-full w-full"
      bind:value
    />
  </div>
  <IconEmoji class="flex-none size-4 text-neutral" />
</div>
