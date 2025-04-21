<script>
  import MemberEntry from "$lib/ui/user/MemberEntry.svelte";
  import ScrollArea from "$lib/ui/common/ScrollArea.svelte";

  const { memberCategories } = $props();
</script>

{#snippet category(name, count)}
  <div
    class="flex mb-2 font-semibold no-interact text-disabled-text text-sm/sm gap-0.5"
  >
    <span class="truncate">{name}</span>
    <span class="whitespace-nowrap">—</span>
    <span class="whitespace-nowrap">{count}</span>
  </div>
{/snippet}

<ScrollArea
  class="flex flex-col w-[194px] p-3 bg-background border-l border-border gap-4"
>
  {#each memberCategories as memberCategory}
    <div class="flex flex-col">
      {@render category(memberCategory.name, memberCategory.members.length)}
      {#each memberCategory.members as member}
        <MemberEntry {...member} />
      {/each}
    </div>
  {/each}
</ScrollArea>
