<script>
  import ScrollArea from "$lib/components/common/ScrollArea.svelte";
  import { clampSize, directionPos } from "$lib/world";

  const { direction, target } = $props();

  let screenSize = $state({ width: 0, height: 0 });
  let size = $state({ width: 0, height: 0 });
  let maxHeight = $derived(screenSize.height - 20);

  let popover = $derived.by(() => {
    const x = clampSize(
      directionPos(target.x, size.width, direction.x),
      size.width,
      [0, screenSize.width]
    );
    const y = clampSize(
      directionPos(target.y, size.height, direction.y),
      size.height,
      [0, screenSize.height]
    );
    return { x, y };
  });
</script>

<svelte:window
  bind:innerWidth={screenSize.width}
  bind:innerHeight={screenSize.height}
/>

<ScrollArea
  bind:offsetWidth={size.width}
  bind:offsetHeight={size.height}
  class="absolute w-[210px] bg-background p-2 border-12 border-border rounded-md flex flex-col"
  style="left: {popover.x}px; top: {popover.y}px; max-height: {maxHeight}px;"
>
  {#each [...Array(3)] as _}
    <span class="text-white text-base/base font-semibold py-1">Hello! 👋</span>
  {/each}
</ScrollArea>
