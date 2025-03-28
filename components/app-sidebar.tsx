"use client";

import * as React from "react";
import { ChevronUp, Plus, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Menu items.
const items = [
  {
    title: "Ratty Corner",
    url: "#",
    channels: [
      {
        title: "#general",
        notifications: 12,
      },
      {
        title: "#the-other-general",
        notifications: 2,
      },
    ],
    notifications: 9920,
  },
  {
    title: "Game Hub",
    url: "#",
    channels: [
      {
        title: "Channel A",
        notifications: 27,
      },
    ],
    notifications: 9920,
  },
  {
    title: "Administration Server",
    url: "#",
    channels: [
      {
        title: "Channel A",
        notifications: 27,
      },
    ],
    notifications: 9920,
  },
  {
    title: "Godot Server",
    url: "#",
    channels: [
      {
        title: "Channel A",
        notifications: 27,
      },
    ],
    notifications: 9920,
  },
  {
    title: "Godot Wild Jam",
    url: "#",
    channels: [
      {
        title: "Channel A",
        notifications: 27,
      },
    ],
    notifications: 9920,
  },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = React.useState<string>("Ratty Corner");

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <div className="flex items-center font-bold">
            <span className="flex-1 group-data-[collapsible=icon]:hidden">
              Discord
            </span>
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Servers</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible
                  open={activeItem === item.title}
                  onOpenChange={() => setActiveItem(item.title)}
                  className="group/collapsible"
                  key={item.title}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        asChild
                        isActive={item.title === activeItem}
                        variant={"outline"}
                        className="p-0"
                      >
                        <Link href={item.url}>
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.channels.map((channel) => (
                          <SidebarMenuSubItem key={channel.title}>
                            <SidebarMenuSubButton>
                              {/* <Link href={item.url}> */}
                              <span>{channel.title}</span>
                              {/* </Link> */}
                              <SidebarMenuBadge>
                                {channel.notifications != 0 &&
                                  channel.notifications}
                              </SidebarMenuBadge>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                    <SidebarMenuBadge>
                      {item.notifications != 0 && item.notifications}
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
