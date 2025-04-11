<script>
  import { Tooltip } from "bits-ui";
  import { fly } from "svelte/transition";

  const {
    class: klass,
    side,
    align,
    content = null,
    trigger = null,
  } = $props();
</script>

<Tooltip.Root delayDuration={200} disableHoverableContent>
  <Tooltip.Trigger class={klass}>{@render trigger?.()}</Tooltip.Trigger>
  <Tooltip.Content forceMount {side} {align} sideOffset={8}>
    {#snippet child({ wrapperProps, props, open })}
      {#if open}
        <div {...wrapperProps}>
          <div {...props} transition:fly={{ duration: 100 }}>
            <Tooltip.Arrow />
            <div
              class="bg-background border-gray-200 border text-white p-2 text-xs font-medium rounded-md"
            >
              {@render content?.()}
            </div>
          </div>
        </div>
      {/if}
    {/snippet}
  </Tooltip.Content>
</Tooltip.Root>
