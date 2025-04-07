<script>
  import NotificationBadge from "$lib/components/NotificationBadge.svelte";

  let {
    class: klass,
    offsetWidth,
    baseSize = $bindable(),
    width = $bindable(),
    height = $bindable(),
    badge,
  } = $props();
</script>

<div class={["relative", klass]} bind:clientWidth={baseSize}>
  <svg xmlns="http://www.w3.org/2000/svg" width={baseSize} height={baseSize}>
    <defs>
      <mask id="mask">
        <circle
          cx={baseSize / 2}
          cy={baseSize / 2}
          r={baseSize / 2}
          fill="white"
        />
        <rect
          x={baseSize - width}
          y={baseSize - height}
          rx={height / 2}
          ry={width / 2}
          {width}
          {height}
          fill="black"
          paint-order="stroke"
          stroke-width={offsetWidth * 2}
          stroke="black"
        />
      </mask>
    </defs>
    <image
      href="/test_64x64.png"
      x="0"
      y="0"
      height={baseSize}
      width={baseSize}
      mask="url(#mask)"
    />
  </svg>
  {#if badge}
    <div class="absolute bottom-0 right-0">
      {@render badge()}
    </div>
  {/if}
</div>
