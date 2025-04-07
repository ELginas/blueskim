<script>
  const { class: klass = "", state, message } = $props();
</script>

<div class={["flex items-center gap-1", klass]}>
  <div
    class={[
      "size-[10px] flex-none rounded-full",
      state === "live" && "bg-green",
      state === "offline" && "bg-red",
    ]}
  ></div>
  <span class="text-white text-sm/sm no-interact truncate">{message}</span>
</div>
