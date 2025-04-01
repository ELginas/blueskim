<script>
  import Tooltip from "./Tooltip.svelte";
  const { active, notification, name } = $props();
</script>

<!-- TODO: keep tooltip open if alr open -->
<div class="flex w-full items-center relative">
  <Tooltip
    class={[
      "peer w-[48px] h-[48px] bg-white mx-3 hover:rounded-[12px] transition-all",
      active ? "rounded-[12px]" : "rounded-[24px]",
    ]}
    side="right"
    align="center"
  >
    {#snippet content()}
      {name}
    {/snippet}
  </Tooltip>
  <div
    class={[
      "absolute w-[4px] h-0 bg-white rounded-r-full transition-all",
      notification && "h-[8px]",
      !active && "peer-hover:h-[24px]",
      active && "h-[32px]",
    ]}
  ></div>
</div>
