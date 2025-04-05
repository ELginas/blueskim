<script>
  import MemberEntry from "./MemberEntry.svelte";
  import ScrollArea from "./ScrollArea.svelte";
</script>

<ScrollArea
  class="flex flex-col w-[194px] p-3 bg-background border-l border-border gap-4"
>
  {#each [...Array(10)] as i}
    <div class="flex flex-col">
      <span class="font-semibold text-sm/sm mb-2 text-disabled-text"
        >ALMIGHTY BOTS - 1</span
      >
      <MemberEntry />
      <MemberEntry />
      <MemberEntry />
      <MemberEntry />
      <MemberEntry />
    </div>
  {/each}
</ScrollArea>
