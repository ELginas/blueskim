<script>
  import ServerImage from "$lib/components/ServerImage.svelte";

  let count = $state(92);
  let visible = $state(false);
</script>

<div
  class="bg-background h-full flex flex-col gap-2 p-2 items-center justify-center"
>
  {#if visible}
    <ServerImage id="0" classImage="rounded-full" pings={count} />
    <ServerImage id="1" classImage="rounded-full" pings={count + 100} />
  {/if}
  <div class="flex gap-1">
    <input
      class="bg-background border border-border text-white text-base/base font-semibold px-2 py-1 rounded-md focus:outline outline-white"
      type="number"
      bind:value={count}
    />
    <button
      class="px-2 py-1 text-white font-semibold text-base/base bg-background border border-border rounded-md"
      onclick={() => (visible = !visible)}>{visible ? "Hide" : "Show"}</button
    >
  </div>
</div>
