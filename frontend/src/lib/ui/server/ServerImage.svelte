<script>
  import MaskedImage from "$lib/ui/server/MaskedImage.svelte";
  import NotificationBadge from "$lib/ui/common/NotificationBadge.svelte";

  let { id, class: klass = "", classImage = "", pings, domProps } = $props();

  const offsetWidth = 4;
  let baseSize = $state(42);
  let width = $state(0);
  let height = $state(0);

  $effect(() => {
    if (pings == 0) {
      width = 0;
      height = 0;
    }
  });
</script>

{#snippet badge()}
  <NotificationBadge
    bind:clientWidth={width}
    bind:clientHeight={height}
    count={pings}
  />
{/snippet}

<MaskedImage
  {id}
  class={["size-[42px]", klass]}
  {classImage}
  {offsetWidth}
  {baseSize}
  {width}
  {height}
  badge={pings > 0 ? badge : undefined}
  {domProps}
></MaskedImage>
