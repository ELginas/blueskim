<script>
  import ScrollArea from "$lib/components/common/ScrollArea.svelte";
  import { contextMenu } from "$lib/useContextMenu";

  let directionX = 0;
  let directionY = -1;

  let targetX = $state(121);
  let targetY = $state(121);

  let screenHeight = $state();
  let screenWidth = $state();
  let maxHeight = $derived(screenHeight - 20);

  // Must be reactive because max-height style change happen after $derived.by for both popovers
  // causing offsetHeight (for instance) to be not yet updated
  let offsetWidth = $state();
  let offsetHeight = $state();

  // Quite cool is that recalculations happen very rerely and quite efficiently
  let popoverX = $derived.by(() => {
    const initialX = targetX - (offsetWidth * (1 - directionX)) / 2;
    // Technically could make it shorter with clamp() but whatever in this case :D
    if (initialX <= 0) {
      return 0;
    }
    const rightEdge = initialX + offsetWidth;
    if (rightEdge >= screenWidth) {
      return screenWidth - offsetWidth;
    }
    return initialX;
  });
  let popoverY = $derived.by(() => {
    const initialY = targetY - (offsetHeight * (1 - directionY)) / 2;
    if (initialY <= 0) {
      return 0;
    }
    const bottomEdge = initialY + offsetHeight;
    if (bottomEdge >= screenHeight) {
      return screenHeight - offsetHeight;
    }
    return initialY;
  });
</script>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

{#snippet popover()}
  <ScrollArea
    bind:offsetWidth
    bind:offsetHeight
    class="absolute w-[210px] bg-background p-2 border-12 border-border rounded-md flex flex-col"
    style="left: {popoverX}px; top: {popoverY}px; max-height: {maxHeight}px;"
  >
    {#each [...Array(21)] as _}
      <span class="text-white text-base/base font-semibold py-1">Hello! 👋</span
      >
    {/each}
  </ScrollArea>
{/snippet}

{@render popover()}
<div
  class="h-full bg-background"
  use:contextMenu={(x, y) => {
    targetX = x;
    targetY = y;
  }}
></div>
