<script>
  import UserStatus from "$lib/ui/user/UserStatus.svelte";

  const { username, isApp, status } = $props();
</script>

<button class="flex gap-2 p-1.5 items-center rounded-md hover:bg-white/10">
  <div class="flex-none size-[28px] bg-disabled rounded-full"></div>
  <div class="flex flex-col gap-1 overflow-hidden">
    <div class="flex items-center gap-1 overflow-hidden">
      <span class="text-white text-base/base truncate">{username}</span>
      {#if isApp}
        <div class="flex px-1 py-0.5 rounded-sm bg-blue">
          <span class="text-xs/xs text-white font-bold">APP</span>
        </div>
      {/if}
    </div>
    {#if status}
      <UserStatus {status} />
    {/if}
  </div>
</button>
