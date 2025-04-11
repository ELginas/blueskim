<script>
  import IconConversation from "$lib/icons/IconConversation.svelte";
  import ChannelHeader from "$lib/ui/channel/ChannelHeader.svelte";
  import MemberSidebar from "$lib/ui/user/MemberSidebar.svelte";
  import StatusBar from "$lib/ui/main-content/StatusBar.svelte";
  import TextInput from "$lib/ui/common/TextInput.svelte";

  const channel = {
    name: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl_even_longer_even_longer_even_longer_even_longer_even_longer_even_longer_even_longer",
    Icon: IconConversation,
  };

  const statusBar = {
    username: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
    status: {
      state: "offline",
      message: "Server is offline",
    },
  };
</script>

<div class="flex flex-col flex-1 bg-background overflow-hidden">
  <ChannelHeader {...channel} />
  <div class="flex flex-1 overflow-hidden">
    <div class="flex flex-col flex-1 overflow-hidden">
      <div class="flex-1"></div>
      <TextInput {...channel} />
      <StatusBar {...statusBar} />
    </div>
    <MemberSidebar />
  </div>
</div>
