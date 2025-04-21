<script>
  const { notification = false, active = false } = $props();
</script>

<div
  class={[
    "absolute w-[4px] h-0 bg-white rounded-r-full transition-all",
    notification && "h-[8px]",
    !active && "peer-hover:h-[24px]",
    active && "h-[32px]",
  ]}
></div>
