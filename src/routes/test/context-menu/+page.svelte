<script>
  import { contextMenu } from "$lib/useContextMenu";
  import Popover from "./Popover.svelte";

  let rect = $state({ x: 0, y: 0, width: 0, height: 0 });
  let target = $derived({
    x: rect.x + rect.width / 2,
    y: rect.y - 6,
  });
  let direction = $state({
    x: 0,
    y: -1,
  });

  // const openPopover = (node, directionName) => {
  //   const directionMappings = {
  //     right: {
  //       target: {
  //         x: node.offsetLeft + node.offsetWidth + 6,
  //         y: node.offsetTop,
  //       },
  //       direction: {
  //         x: 1,
  //         y: 1,
  //       },
  //     },
  //   };
  //   const mapping = directionMappings[directionName];
  //   direction = mapping.direction;
  //   target = mapping.target;
  //   // overflowing, switch side
  //   console.log(node, direction, directionMappings[directionName]);
  // };
</script>

<Popover {direction} {target} />
<div
  class="h-full bg-background flex flex-col items-center justify-center"
  use:contextMenu={(x, y) => {
    // target = {
    //   x,
    //   y,
    // };
    // direction = {
    //   x: 1,
    //   y: 1,
    // };
  }}
>
  <button
    class="no-interact btn"
    bind:offsetWidth={rect.width}
    bind:offsetHeight={rect.height}
    onclick={(e) => {
      rect.x = e.target.offsetLeft;
      rect.y = e.target.offsetTop;
      // openPopover(e.target, "right");
    }}>Click me</button
  >
</div>
