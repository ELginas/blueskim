<script>
  const { name, disabled } = $props();
</script>

<span class="inline-flex items-center gap-2 select-none drag-none">
  <div class={["size-4", disabled ? "bg-disabled" : "bg-white"]}></div>
  <span
    class={["text-base/base", disabled ? "text-disabled-text" : "text-white"]}
    >{name}</span
  >
</span>
