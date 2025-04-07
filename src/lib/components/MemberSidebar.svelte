<script>
  import MemberEntry from "./MemberEntry.svelte";
  import ScrollArea from "./ScrollArea.svelte";

  const user = {
    username: "Carl-bo",
    isApp: true,
    status: {
      type: "playing",
      game: "something",
    },
  };

  const user2 = {
    username: "ąčęėįšų„“lseennnn 20024",
    isApp: false,
  };

  const user3 = {
    username: "Markus Karllllseennnn 20024 Helper",
    isApp: true,
  };

  const user4 = {
    username: "ąčęėįšų„jgllllseennnn 20024 Helper",
    isApp: true,
    status: {
      type: "playing",
      game: "ąĄčęėįšų„rasmjgllll｜∫ 2026 - Future",
    },
  };

  const categoryData = {
    name: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
    count: 1,
  };
</script>

{#snippet category(name, count)}
  <div
    class="flex mb-2 font-semibold no-interact text-disabled-text text-sm/sm gap-0.5"
  >
    <!-- TODO: center em dash by taking away trailing right space from truncated text -->
    <span class="truncate">{name}</span>
    <span class="whitespace-nowrap">—</span>
    <span class="whitespace-nowrap">{count}</span>
  </div>
{/snippet}

<ScrollArea
  class="flex flex-col w-[194px] p-3 bg-background border-l border-border gap-4"
>
  {#each [...Array(10)] as i}
    <div class="flex flex-col">
      {@render category(categoryData.name, categoryData.count)}
      <MemberEntry {...user} />
      <MemberEntry {...user2} />
      <MemberEntry {...user2} />
      <MemberEntry {...user3} />
      <MemberEntry {...user4} />
    </div>
  {/each}
</ScrollArea>
