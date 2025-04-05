<script>
  import ChannelHeader from "./ChannelHeader.svelte";
  import MemberSidebar from "./MemberSidebar.svelte";
  import StatusBar from "./StatusBar.svelte";
  import TextInput from "./TextInput.svelte";
</script>

<div class="flex flex-col flex-1 bg-background">
  <ChannelHeader name="server-one" />
  <div class="flex flex-1 overflow-hidden">
    <div class="flex flex-col flex-1">
      <div class="flex-1"></div>
      <TextInput />
      <StatusBar />
    </div>
    <MemberSidebar />
  </div>
</div>
