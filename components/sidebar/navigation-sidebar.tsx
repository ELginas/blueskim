import { ModeToggle } from "@/components/mode-toggle";
import { NavigationAction } from "@/components/sidebar/navigation-action";
import { NavigationServer } from "@/components/sidebar/navigation-server";
import { UserButton } from "@/components/sidebar/user-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const NavigationSidebar = async () => {
  let start = Date.now();
  const profile = await currentProfile();
  console.log(`[navigation-sidebar:currentProfile]: ${Date.now() - start}ms`);
  if (!profile) {
    return redirect("/");
  }

  start = Date.now();
  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  console.log(`[navigation-sidebar:findMany]: ${Date.now() - start}ms`);

  return (
    <div className="w-[72px] flex flex-col items-center bg-sidebar py-3 gap-4">
      <NavigationAction />
      <Separator className="w-10 mx-auto h-[2px]" />
      <ScrollArea className="flex-1 w-full ">
        <div className="flex flex-col gap-2">
          {servers.map((server) => (
            <NavigationServer key={server.id} server={server} />
          ))}
        </div>
      </ScrollArea>
      <ModeToggle />
      <UserButton />
    </div>
  );
};
