<script>
  import UserIcon from "$lib/ui/message/UserIcon.svelte";
  import Attachment from "$lib/ui/message/Attachment.svelte";
  import { longDateFormat, shortDateFormat } from "$lib/date";

  const { username, timestamp, isSmall, content } = $props();

  const longTimeStr = longDateFormat(timestamp);
  const shortTimeStr = shortDateFormat(timestamp);
</script>

<div
  class={[
    "px-3 py-0.5 hover:bg-white/10 flex gap-3 group",
    !isSmall && "mt-2",
    !isSmall && "pt-1",
  ]}
>
  {#if !isSmall}
    <UserIcon />
  {:else}
    <div class="w-[36px] flex-none flex justify-center items-center">
      <span class="text-sm/sm text-disabled-text invisible group-hover:visible"
        >{shortTimeStr}</span
      >
    </div>
  {/if}
  <div class="flex-1 flex flex-col overflow-hidden">
    {#if !isSmall}
      <div class="flex gap-2 items-center mb-1.5">
        <span
          class="text-base/base text-white hover:underline hover:cursor-pointer truncate"
          >{username}</span
        >
        <span class="whitespace-nowrap text-sm/sm text-disabled-text"
          >{longTimeStr}</span
        >
      </div>
    {/if}
    <div class="flex flex-col gap-1">
      {#if content?.message}
        <span class="text-base text-white">{content?.message}</span>
      {/if}
      {#each content?.attachments as attachment}
        <Attachment {...attachment} />
      {/each}
    </div>
  </div>
</div>
