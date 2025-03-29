"use client";

import * as React from "react";
import {
  ChevronUp,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  User2,
  UserPlus,
  Users,
} from "lucide-react";

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
  SidebarMenuSkeleton,
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
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ui/context-menu";
import useSWR from "swr";
import { toast } from "sonner";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function AppSidebar() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);
  const [activeItem, setActiveItem] = React.useState<string>("Game Hub");

  const isInvalid = isLoading || error;

  if (error) {
    toast(`Error: ${error.message}`);
  }

  const items = data;

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
            {isInvalid ? (
              <SidebarMenu>
                {Array.from({ length: 5 }).map((_, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuSkeleton />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : (
              <SidebarMenu>
                {items.map((item) => (
                  <Collapsible
                    open={activeItem === item.title}
                    onOpenChange={() => setActiveItem(item.title)}
                    className="group/collapsible"
                    key={item.title}
                  >
                    <SidebarMenuItem>
                      <ContextMenu>
                        <ContextMenuTrigger>
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

                          <SidebarMenuBadge>
                            {item.notifications != 0 && item.notifications}
                          </SidebarMenuBadge>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <ContextMenuLabel>My Account</ContextMenuLabel>
                          <ContextMenuSeparator />
                          <ContextMenuGroup>
                            <ContextMenuItem>
                              <User />
                              <span>Profile</span>
                              <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                              <CreditCard />
                              <span>Billing</span>
                              <ContextMenuShortcut>⌘B</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                              <Settings />
                              <span>Settings</span>
                              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>
                              <Keyboard />
                              <span>Keyboard shortcuts</span>
                              <ContextMenuShortcut>⌘K</ContextMenuShortcut>
                            </ContextMenuItem>
                          </ContextMenuGroup>
                          <ContextMenuSeparator />
                          <ContextMenuGroup>
                            <ContextMenuItem>
                              <Users />
                              <span>Team</span>
                            </ContextMenuItem>
                            <ContextMenuSub>
                              <ContextMenuSubTrigger>
                                <UserPlus />
                                <span>Invite users</span>
                              </ContextMenuSubTrigger>
                              <ContextMenuPortal>
                                <ContextMenuSubContent>
                                  <ContextMenuItem>
                                    <Mail />
                                    <span>Email</span>
                                  </ContextMenuItem>
                                  <ContextMenuItem>
                                    <MessageSquare />
                                    <span>Message</span>
                                  </ContextMenuItem>
                                  <ContextMenuSeparator />
                                  <ContextMenuItem>
                                    <PlusCircle />
                                    <span>More...</span>
                                  </ContextMenuItem>
                                </ContextMenuSubContent>
                              </ContextMenuPortal>
                            </ContextMenuSub>
                            <ContextMenuItem>
                              <Plus />
                              <span>New channel</span>
                              <ContextMenuShortcut>⌘+T</ContextMenuShortcut>
                            </ContextMenuItem>
                          </ContextMenuGroup>
                          <ContextMenuSeparator />
                          <ContextMenuItem>
                            <Github />
                            <span>GitHub</span>
                          </ContextMenuItem>
                          <ContextMenuItem>
                            <LifeBuoy />
                            <span>Support</span>
                          </ContextMenuItem>
                          <ContextMenuItem disabled>
                            <Cloud />
                            <span>API</span>
                          </ContextMenuItem>
                          <ContextMenuSeparator />
                          <ContextMenuItem>
                            <LogOut />
                            <span>Log out</span>
                            <ContextMenuShortcut>⇧⌘Q</ContextMenuShortcut>
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.channels.map((channel) => (
                            <SidebarMenuSubItem key={channel.title}>
                              <SidebarMenuSubButton>
                                <span>{channel.title}</span>
                                <SidebarMenuBadge>
                                  {channel.notifications != 0 &&
                                    channel.notifications}
                                </SidebarMenuBadge>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            )}
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
