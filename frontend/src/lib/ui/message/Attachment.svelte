<script>
  import ImageAttachment from "$lib/ui/message/ImageAttachment.svelte";

  const { type, ...rest } = $props();

  const isImage = $derived.by(() => type.startsWith("image/"));
</script>

{#if isImage}
  <ImageAttachment {...rest} />
{/if}
