import { ScrollArea } from "@/components/ui/scroll-area";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChannelType } from "@prisma/client";
import { Hash, Mic, Video } from "lucide-react";
import { redirect } from "next/navigation";

type Props = {
  serverId: string;
};

const channelIcons = {
  TEXT: <Hash className="w-4 h-4" />,
  AUDIO: <Mic className="w-4 h-4" />,
  VIDEO: <Video className="w-4 h-4" />,
};

export const ServerSidebar = async ({ serverId }: Props) => {
  const profile = await currentProfile();
  if (!profile) {
    return redirect("/");
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        orderBy: [
          {
            channelType: "asc",
          },
          {
            createdAt: "asc",
          },
        ],
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  const role = server.members.find((member) => member.id === profile.id)?.role;

  return (
    <div className="w-[150px] flex flex-col bg-sidebar py-3 gap-4">
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col gap-2">
          <span className="uppercase text-xs font-bold text-white/80">
            channels
          </span>
          {server.channels.map((channel) => (
            <div className="px-3 py-2 flex items-center gap-1" key={channel.id}>
              {channelIcons[channel.channelType]}
              <span className="font-medium">{channel.name}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
