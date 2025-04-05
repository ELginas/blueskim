<script>
  import IconChannel from "$lib/icons/IconChannel.svelte";
  import IconConversation from "$lib/icons/IconConversation.svelte";

  const { Icon = IconChannel, name, disabled } = $props();
</script>

<span
  class="inline-flex overflow-hidden items-center gap-2 select-none drag-none"
>
  <Icon
    class={["size-4 flex-none", disabled ? "text-disabled" : "text-white"]}
  />
  <span
    class={[
      "truncate text-base/base",
      disabled ? "text-disabled-text" : "text-white",
    ]}>{name}</span
  >
</span>
