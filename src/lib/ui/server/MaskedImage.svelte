<script>
  let {
    id,
    class: klass,
    classImage,
    offsetWidth,
    baseSize = $bindable(),
    width = $bindable(),
    height = $bindable(),
    badge,
  } = $props();
</script>

<div class={["relative", klass]} bind:clientWidth={baseSize}>
  <svg
    class="absolute"
    xmlns="http://www.w3.org/2000/svg"
    width={baseSize}
    height={baseSize}
  >
    <defs>
      <mask id="mask{id}">
        <rect x="0" y="0" height={baseSize} width={baseSize} fill="white" />
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
  </svg>
  <img
    class={classImage}
    style="mask: url(#mask{id});"
    src="/test_64x64.png"
    width={baseSize}
    height={baseSize}
    alt=""
  />
  {#if badge}
    <div class="absolute bottom-0 right-0">
      {@render badge()}
    </div>
  {/if}
</div>
