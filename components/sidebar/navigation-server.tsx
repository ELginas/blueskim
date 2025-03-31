"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Server } from "@prisma/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

type Props = {
  server: Server;
};

export const NavigationServer = ({ server }: Props) => {
  const router = useRouter();
  const params = useParams();

  const active = params?.serverId === server.id;

  const onClick = () => {
    router.push(`/servers/${server.id}`);
  };

  return (
    <div className="flex items-center justify-center relative">
      <Tooltip>
        <TooltipTrigger
          className="peer relative group mx-3 h-[48px] w-[48px] rounded-[24px] hover:rounded-[16px] transition-all overflow-hidden"
          onClick={onClick}
        >
          {/* Can't optimize because UploadThing doesn't support fetching image with specific width AND height */}
          <Image fill src={server.imageUrl} alt="Channel" />
        </TooltipTrigger>
        <TooltipContent side="right" align="center" className="font-medium">
          {server.name}
        </TooltipContent>
      </Tooltip>
      <div
        className={cn(
          "absolute left-0 w-[3px] bg-white rounded-r-full transition-all h-[12px]",
          active && "h-[36px]",
          !active && "peer-hover:h-[24px]"
        )}
      ></div>
    </div>
  );
};
