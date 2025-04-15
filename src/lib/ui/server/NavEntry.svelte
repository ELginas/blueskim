<script>
  import NotificationHalfBubble from "$lib/ui/common/NotificationHalfBubble.svelte";
  import ServerImage from "$lib/ui/server/ServerImage.svelte";
  import Tooltip from "../common/Tooltip.svelte";
  import ContextMenuItem from "../common/context-menu/ContextMenuItem.svelte";
  import IconId from "$lib/icons/IconId.svelte";
  import IconLeave from "$lib/icons/IconLeave.svelte";
  import ContextMenuSeparator from "../common/context-menu/ContextMenuSeparator.svelte";
  import IconTwoUsersAdd from "$lib/icons/IconTwoUsersAdd.svelte";
  import ContextMenuSubItem from "../common/context-menu/ContextMenuSubItem.svelte";
  import ContextMenu from "../common/context-menu/ContextMenu.svelte";
  const { id, active, notification, pings, name } = $props();

  let isTooltipOpen = $state(false);
</script>

<div class="flex w-full items-center relative">
  <Tooltip side="right" align="center" bind:open={isTooltipOpen}>
    {#snippet child({ props })}
      <div class="mx-3" {...props}>
        <ContextMenu
          onOpenChange={(open) => {
            if (open) {
              isTooltipOpen = false;
            }
          }}
        >
          {#snippet child({ props })}
            <ServerImage
              {id}
              {pings}
              class="peer size-[42px]"
              classImage={[
                "no-interact hover:rounded-[12px] transition-all",
                active ? "rounded-[12px]" : "rounded-[21px]",
              ]}
              domProps={props}
            />
          {/snippet}
          {#snippet content()}
            <ContextMenuItem text="Mark As Read" disabled={true} />
            <ContextMenuSeparator />
            <ContextMenuItem text="Invite People" Icon={IconTwoUsersAdd} />
            <ContextMenuSeparator />
            <ContextMenuSubItem text="Mute Server">
              <ContextMenuItem text="For 15 Minutes" />
              <ContextMenuItem text="For Eternity" />
            </ContextMenuSubItem>
            <ContextMenuItem text="A new item" />
            <ContextMenuItem text="A new item" />
            <ContextMenuItem
              text="Leave Server"
              variant="danger"
              Icon={IconLeave}
            />
            <ContextMenuSeparator />

            <ContextMenuItem text="Copy Server ID" Icon={IconId} />
          {/snippet}
        </ContextMenu>
      </div>
    {/snippet}
    {#snippet content()}
      <span class="text-white font-medium text-base/base">{name}</span>
    {/snippet}
  </Tooltip>
  <NotificationHalfBubble {notification} {active} />
</div>
