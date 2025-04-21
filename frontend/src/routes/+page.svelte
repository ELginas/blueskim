<script>
  import IconConversation from "$lib/icons/IconConversation.svelte";
  import MainContent from "$lib/ui/main-content/MainContent.svelte";
  import NavSidebar from "$lib/ui/server/NavSidebar.svelte";
  import ServerSidebar from "$lib/ui/server/ServerSidebar.svelte";
  import { findKey } from "$lib/utils";

  const servers = [
    ...[...Array(4).keys()].map((i) => ({
      name: "Example name",
      id: i,
      pings: i,
    })),
    {
      name: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
      id: 255,
      pings: 25,
    },
    {
      id: 25,
      notification: true,
    },
  ];
  const channels = [
    ...[...Array(70).keys()]
      .map((i) => [
        {
          id: i * 5,
          name: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl_even_longer_even_longer_even_longer_even_longer_even_longer_even_longer_even_longer",
          Icon: IconConversation,
          notification: true,
          pings: 0,
        },
        {
          id: i * 5 + 1,
          name: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl-one-overly-very-very-very-long",
          Icon: IconConversation,
          notification: true,
          pings: 95293,
        },
        {
          id: i * 5 + 2,
          name: "server-one",
          Icon: IconConversation,
          notification: false,
          pings: 0,
        },
        {
          id: i * 5 + 3,
          name: "server-one",
          Icon: IconConversation,
          notification: true,
          pings: 0,
        },
        {
          id: i * 5 + 4,
          name: "server-one",
          Icon: IconConversation,
          notification: true,
          pings: 1,
        },
      ])
      .flat(),
  ];
  const messages = [
    ...[...Array(71).keys()]
      .map((i) => [
        {
          id: i * 7,
          username: "Mr. Alex",
          timestamp: new Date(Date.now()),
          isSmall: false,
          content: {
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
          },
        },
        {
          id: i * 7 + 1,
          username: "Mr. Alex",
          timestamp: new Date(Date.now()),
          isSmall: true,
          content: {
            message: "Hhelloo!!",
          },
        },
        {
          id: i * 7 + 2,
          username: "Mr. Alex",
          timestamp: new Date(Date.now()),
          isSmall: true,
          content: {
            message: "Hhelloo!!",
          },
        },
        {
          id: i * 7 + 3,
          username: "Mr. Alex",
          timestamp: new Date(Date.now()),
          isSmall: false,
          content: {
            message: "Hhelloo!!",
          },
        },
        {
          id: i * 7 + 4,
          username: "Mr. Alex",
          timestamp: new Date(Date.now()),
          isSmall: true,
          content: {
            message: "Hhelloo!!",
          },
        },
        {
          id: i * 7 + 5,
          username: "Mr. Alex",
          timestamp: new Date(Date.now()),
          isSmall: true,
          content: {
            message: "Hhelloo!!",
          },
        },
        {
          id: i * 7 + 6,
          username: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
          timestamp: new Date(Date.now()),
          isSmall: false,
          content: {
            message:
              "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
          },
        },
      ])
      .flat(),
  ];
  const statusBar = {
    username: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
    status: {
      state: "offline",
      message: "Server is offline",
    },
  };
  const memberCategories = [
    ...[...Array(10)].map(() => ({
      name: "ąĄčęėįšų„rasmjgllll｜∫rasmjglrasmjglrasmjglrasmjgl",
      members: [
        {
          username: "Carl-bo",
          isApp: true,
          status: {
            type: "playing",
            game: "something",
          },
        },
        {
          username: "ąčęėįšų„“lseennnn 20024",
          isApp: false,
        },
        {
          username: "ąčęėįšų„“lseennnn 20024",
          isApp: false,
        },
        {
          username: "Markus Karllllseennnn 20024 Helper",
          isApp: true,
        },
        {
          username: "ąčęėįšų„jgllllseennnn 20024 Helper",
          isApp: true,
          status: {
            type: "playing",
            game: "ąĄčęėįšų„rasmjgllll｜∫ 2026 - Future",
          },
        },
      ],
    })),
  ];
  const activeServerId = 255;
  const activeChannelId = 0;

  const activeServerName = $derived(
    findKey(servers, "id", activeServerId).name
  );
  const activeChannel = $derived(findKey(channels, "id", activeChannelId));
</script>

<div class="flex h-full">
  <NavSidebar {servers} {activeServerId} />
  <ServerSidebar name={activeServerName} {channels} />
  <MainContent
    channel={activeChannel}
    {statusBar}
    {messages}
    {memberCategories}
  />
</div>
