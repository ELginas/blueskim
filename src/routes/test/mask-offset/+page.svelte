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
    <input class="input" type="number" bind:value={count} />
    <button class="btn" onclick={() => (visible = !visible)}
      >{visible ? "Hide" : "Show"}</button
    >
  </div>
</div>
