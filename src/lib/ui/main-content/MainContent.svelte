<script>
  import IconConversation from "$lib/icons/IconConversation.svelte";
  import ChannelHeader from "$lib/ui/channel/ChannelHeader.svelte";
  import MemberSidebar from "$lib/ui/user/MemberSidebar.svelte";
  import StatusBar from "$lib/ui/main-content/StatusBar.svelte";
  import TextInput from "$lib/ui/main-content/TextInput.svelte";
  import Message from "$lib/ui/message/Message.svelte";
  import ScrollArea from "../common/ScrollArea.svelte";

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
      <div class="flex-1 flex flex-col-reverse overflow-hidden">
        <ScrollArea class="flex-col py-4">
          {#each [...Array(71)] as _}
            <Message
              username="Mr. Alex"
              timestamp={new Date(Date.now())}
              isSmall={false}
              content={{
                message: "Hhelloo!!",
                attachments: [
                  {
                    filename: "image.png",
                    type: "image/png",
                    size: 42096,
                    url: "/test_64x64.png",
                    width: 64,
                    height: 64,
                  },
                ],
              }}
            />
            <Message
              username="Mr. Alex"
              timestamp={new Date(Date.now())}
              isSmall={true}
              content={{
                message: "Hhelloo!!",
              }}
            />
            <Message
              username="Mr. Alex"
              timestamp={new Date(Date.now())}
              isSmall={true}
              content={{
                message: "Hhelloo!!",
              }}
            />
            <Message
              username="Mr. Alex"
              timestamp={new Date(Date.now())}
              isSmall={false}
              content={{
                message: "Hhelloo!!",
              }}
            />
            <Message
              username="Mr. Alex"
              timestamp={new Date(Date.now())}
              isSmall={true}
              content={{
                message: "Hhelloo!!",
              }}
            />
            <Message
              username="Mr. Alex"
              timestamp={new Date(Date.now())}
              isSmall={true}
              content={{
                message: "Hhelloo!!",
              }}
            />
            <Message
              username="ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl"
              timestamp={new Date(Date.now())}
              isSmall={false}
              content={{
                message:
                  "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
              }}
            />
          {/each}
        </ScrollArea>
      </div>
      <TextInput {...channel} />
      <StatusBar {...statusBar} />
    </div>
    <MemberSidebar />
  </div>
</div>
