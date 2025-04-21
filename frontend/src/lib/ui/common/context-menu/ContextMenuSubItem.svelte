<script>
  import IconChevron from "$lib/icons/IconChevron.svelte";
  import { ContextMenu } from "bits-ui";

  const { text, variant = "default", disabled = false, children } = $props();
</script>

<ContextMenu.Sub>
  <ContextMenu.SubTrigger
    class={[
      "select-none text-base/[16px] p-1 flex rounded-sm items-center gap-2",
      disabled && "text-disabled-text",
      !disabled && variant === "danger" && "text-red-text",
      !disabled && variant === "default" && "text-white",
      !disabled && ["cursor-pointer", "hover:bg-white/10"],
    ]}
    {disabled}
    >{text}<IconChevron class="size-[16px] ml-auto" /></ContextMenu.SubTrigger
  >
  <ContextMenu.SubContent
    class="bg-background border border-border p-2 rounded-md"
    sideOffset={8}
    alignOffset={-2}
    align="start"
  >
    {@render children?.()}
  </ContextMenu.SubContent>
</ContextMenu.Sub>
