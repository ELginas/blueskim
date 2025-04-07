<script>
  const { Icon, name, disabled } = $props();
</script>

<span class="inline-flex overflow-hidden items-center gap-2 no-interact">
  <Icon
    class={["size-4 flex-none", disabled ? "text-disabled" : "text-white"]}
  />
  <span
    class={[
      "truncate text-base/base",
      disabled ? "text-disabled-text" : "text-white",
    ]}>{name}</span
  >
</span>
