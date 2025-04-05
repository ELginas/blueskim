<script>
  const { state, message } = $props();
</script>

<div class="flex items-center gap-1">
  <div
    class={[
      "size-[10px] rounded-full",
      state === "live" && "bg-green",
      state === "offline" && "bg-red",
    ]}
  ></div>
  <span class="text-white text-sm/sm select-none drag-none">{message}</span>
</div>
