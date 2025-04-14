<script>
  import { ContextMenu } from "bits-ui";

  const { text, Icon = null, variant = "default", disabled = false } = $props();
</script>

<ContextMenu.Item
  class={[
    "select-none text-base/[16px] p-1 flex rounded-sm items-center gap-2",
    disabled && "text-disabled-text",
    !disabled && variant === "danger" && "text-red-text",
    !disabled && variant === "default" && "text-white",
    !disabled && ["cursor-pointer", "hover:bg-white/10"],
  ]}
  {disabled}
  >{text}{#if Icon}
    <Icon class="size-[16px] ml-auto" />
  {/if}
</ContextMenu.Item>
