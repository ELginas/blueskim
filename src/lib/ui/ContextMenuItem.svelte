<script>
  import { ContextMenu } from "bits-ui";

  const { disabled = false, class: klass, children } = $props();
</script>

<ContextMenu.Item
  class={[
    "relative flex items-center select-none rounded-sm px-2 py-1.5 text-sm  text-medium",
    disabled ? "text-gray-300" : "text-white-400",
    !disabled && ["cursor-pointer", "hover:bg-gray-100/20"],
    klass,
  ]}
  {disabled}>{@render children?.()}</ContextMenu.Item
>
