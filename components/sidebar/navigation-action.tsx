"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useModal } from "@/hooks/use-modal-store";
import { Plus } from "lucide-react";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <Tooltip>
      <TooltipTrigger className="group" onClick={() => onOpen("createServer")}>
        <div className="w-[48px] h-[48px] rounded-[24px] flex flex-col items-center justify-center group-hover:rounded-[12px] group-hover:bg-emerald-500 bg-neutral-700 transition-all">
          <Plus className="w-6 h-6 text-green-500 group-hover:text-white transition" />
        </div>
      </TooltipTrigger>
      <TooltipContent side="right" align="center" className="font-medium">
        Create a server
      </TooltipContent>
    </Tooltip>
  );
};
