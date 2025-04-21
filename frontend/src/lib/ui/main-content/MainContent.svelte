<script>
  import ChannelHeader from "$lib/ui/channel/ChannelHeader.svelte";
  import MemberSidebar from "$lib/ui/user/MemberSidebar.svelte";
  import StatusBar from "$lib/ui/main-content/StatusBar.svelte";
  import TextInput from "$lib/ui/main-content/TextInput.svelte";
  import Message from "$lib/ui/message/Message.svelte";
  import ScrollArea from "$lib/ui/common/ScrollArea.svelte";

  const { channel, messages, statusBar, memberCategories } = $props();
</script>

<div class="flex flex-col flex-1 bg-background overflow-hidden">
  <ChannelHeader {...channel} />
  <div class="flex flex-1 overflow-hidden">
    <div class="flex flex-col flex-1 overflow-hidden">
      <div class="flex-1 flex flex-col-reverse overflow-hidden">
        <ScrollArea class="flex-col py-4">
          {#each messages as message}
            <Message {...message} />
          {/each}
        </ScrollArea>
      </div>
      <TextInput {...channel} />
      <StatusBar {...statusBar} />
    </div>
    <MemberSidebar {memberCategories} />
  </div>
</div>
