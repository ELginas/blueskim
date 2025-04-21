<script>
  const containerWidth = 800;
  const containerHeight = 600;

  let x = $state(150);
  let y = $state(150);
  let offsetWidth = $state(64);
  let offsetHeight = $state(64);

  let remainingX = $derived(containerWidth - x - offsetWidth);
  let remainingY = $derived(containerHeight - y - offsetHeight);
</script>

{#snippet hline(x, y, width)}
  <div
    class="absolute flex items-center gap-1 -translate-y-1/2"
    style="left:{x}px;top:{y}px;width:{width}px;"
  >
    <div class="bg-blue h-[1px] flex-1"></div>
    <span class="text-white font-semibold text-sm/sm">{width}</span>
    <div class="bg-blue h-[1px] flex-1"></div>
  </div>
{/snippet}

{#snippet vline(x, y, height)}
  <div
    class="absolute flex flex-col items-center gap-[1px] -translate-x-1/2"
    style="left:{x}px;top:{y}px;height:{height}px;"
  >
    <div class="bg-blue w-[1px] flex-1"></div>
    <span class="text-white font-semibold text-sm/sm">{height}</span>
    <div class="bg-blue w-[1px] flex-1"></div>
  </div>
{/snippet}

<div
  class="h-full bg-background flex flex-col items-center justify-center gap-2"
>
  <span class="font-semibold text-white text-xl"
    >✨ So this is the playground ✨</span
  >
  <div class="flex gap-2">
    <div
      class="relative w-[800px] h-[600px] border border-border rounded-md overflow-hidden"
    >
      <div
        class="absolute border border-blue flex flex-col items-center justify-center"
        style="left:{x}px;top:{y}px;width:{offsetWidth}px;height:{offsetHeight}px"
      >
        <span class="text-white text-base/base"
          >{offsetWidth}x{offsetHeight}</span
        >
      </div>
      {@render hline(0, y + offsetHeight / 2, x)}
      {@render hline(x + offsetWidth, y + offsetHeight / 2, remainingX)}
      {@render vline(x + offsetWidth / 2, 0, y)}
      {@render vline(x + offsetWidth / 2, y + offsetHeight, remainingY)}
    </div>
    <div class="border border-border rounded-md p-2">
      <span class="text-white">Width:</span>
      <div class="flex gap-2">
        <input
          class="input"
          type="range"
          max={containerWidth}
          bind:value={offsetWidth}
        />
        <input class="input w-18" type="number" bind:value={offsetWidth} />
      </div>
      <span class="text-white">Height:</span>
      <div class="flex gap-2">
        <input
          class="input"
          type="range"
          max={containerHeight}
          bind:value={offsetHeight}
        />
        <input class="input w-18" type="number" bind:value={offsetHeight} />
      </div>
      <span class="text-white">X:</span>
      <div class="flex gap-2">
        <input class="input" type="range" max={containerWidth} bind:value={x} />
        <input class="input w-18" type="number" bind:value={x} />
      </div>
      <span class="text-white">Y:</span>
      <div class="flex gap-2">
        <input
          class="input"
          type="range"
          max={containerHeight}
          bind:value={y}
        />
        <input class="input w-18" type="number" bind:value={y} />
      </div>
    </div>
  </div>
</div>
