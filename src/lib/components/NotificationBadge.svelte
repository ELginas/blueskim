<script>
  let {
    count,
    clientWidth = $bindable(),
    clientHeight = $bindable(),
    _this = $bindable(),
  } = $props();
</script>

<div
  class="flex rounded-full bg-red px-1 py-0.5"
  bind:this={_this}
  bind:clientWidth
  bind:clientHeight
>
  <span class="text-center text-white font-bold text-sm/sm min-w-[10px]"
    >{count}</span
  >
</div>
