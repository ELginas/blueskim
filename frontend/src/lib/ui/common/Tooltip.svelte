<script>
  import { Tooltip } from "bits-ui";
  import { fade } from "svelte/transition";
  let { side, align, child, content, open = $bindable() } = $props();
</script>

<Tooltip.Root delayDuration={0} disableHoverableContent={true} bind:open>
  <Tooltip.Trigger {child} />
  <Tooltip.Portal>
    <Tooltip.Content forceMount sideOffset={8} {side} {align}>
      {#snippet child({ wrapperProps, props, open })}
        {#if open}
          <div {...wrapperProps}>
            <div
              class="bg-background border border-border rounded-md p-2 flex"
              transition:fade={{ duration: 100 }}
              {...props}
            >
              {@render content?.()}
            </div>
          </div>
        {/if}
      {/snippet}
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>
