import { ModeToggle } from "@/components/mode-toggle";
import { NavigationAction } from "@/components/sidebar/navigation-action";
import { NavigationServer } from "@/components/sidebar/navigation-server";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const NavigationSidebar = async () => {
  const profile = await currentProfile();
  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

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
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-[32px]! w-[32px]!",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};
