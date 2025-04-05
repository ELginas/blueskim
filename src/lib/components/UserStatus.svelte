<script>
  import i18n from "$lib/i18n";

  const { status } = $props();
</script>

<span class="text-disabled-text text-sm/sm truncate"
  >{#if status.type === "playing"}{i18n.playing}
    <span class="font-bold">{status.game}</span>{/if}</span
>
