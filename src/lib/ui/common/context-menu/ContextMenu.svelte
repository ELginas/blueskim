<script>
  import { ContextMenu } from "bits-ui";
  import { getContext } from "svelte";

  const { child, content, onOpenChange } = $props();

  let isContextMenuOpen = getContext("isContextMenuOpen");
</script>

<ContextMenu.Root
  onOpenChange={(open) => {
    isContextMenuOpen.value = open;
    onOpenChange(open);
  }}
>
  <ContextMenu.Trigger {child}></ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content
      class="bg-background border border-border p-2 rounded-md"
      interactOutsideBehavior="close"
    >
      {@render content?.()}
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu.Root>
