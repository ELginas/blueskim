<script>
  import IconChevron from "$lib/icons/IconChevron.svelte";

  const { name } = $props();
</script>

<button
  class="flex items-center h-[40px] border-b border-border px-4 py-3 hover:bg-white/10"
>
  <!-- TODO: if overflowing hover shows expanded -->
  <span class="inline-block text-base/base font-semibold text-white truncate"
    >{name}</span
  >
  <div class="flex-1 min-w-1"></div>
  <IconChevron class="flex-none text-white size-3 rotate-90" />
</button>
