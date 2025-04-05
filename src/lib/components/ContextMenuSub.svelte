<script>
  import { ContextMenu } from "bits-ui";

  const { disabled = false, class: klass, trigger, content } = $props();
</script>

<ContextMenu.Sub>
  <ContextMenu.SubTrigger
    class={[
      "relative flex items-center select-none rounded-sm px-2 py-1.5 text-sm  text-medium",
      disabled ? "text-gray-300" : "text-white-400",
      !disabled && ["cursor-pointer", "hover:bg-gray-100/20"],
      klass,
    ]}
    {disabled}>{@render trigger?.()}</ContextMenu.SubTrigger
  >
  <ContextMenu.SubContent
    class="z-10 bg-gray-900 rounded-md border-gray-300 border p-2"
    >{@render content?.()}</ContextMenu.SubContent
  ></ContextMenu.Sub
>
