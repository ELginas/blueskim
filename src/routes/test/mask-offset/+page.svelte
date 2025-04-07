<script>
  import MaskedOverlay from "$lib/components/MaskedImage.svelte";
  import NotificationBadge from "$lib/components/NotificationBadge.svelte";

  const offsetWidth = 2;
  let baseSize = $state(42);
  let width = $state(0);
  let height = $state(0);

  let visible = $state(false);
  let count = $state(92);
</script>

{#snippet badge()}
  <NotificationBadge
    bind:clientWidth={width}
    bind:clientHeight={height}
    {count}
  />
{/snippet}

<div
  class="bg-background h-full flex flex-col gap-2 p-2 items-center justify-center"
>
  <MaskedOverlay
    class="size-[42px]"
    {offsetWidth}
    {baseSize}
    {width}
    {height}
    badge={visible ? badge : undefined}
  ></MaskedOverlay>
  <div class="flex gap-1">
    <input
      class="bg-background border border-border text-white text-base/base font-semibold px-2 py-1 rounded-md focus:outline outline-white"
      type="text"
      bind:value={count}
    />
    <button
      class="px-2 py-1 text-white font-semibold text-base/base bg-background border border-border rounded-md"
      onclick={() => {
        visible = !visible;
        if (!visible) {
          width = 0;
          height = 0;
        }
      }}>{visible ? "Hide" : "Show"}</button
    >
  </div>
</div>
