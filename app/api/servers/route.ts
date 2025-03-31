import { v4 as uuidv4 } from "uuid";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";

export const POST = async (req: Request) => {
  try {
    const { name, imageUrl } = await req.json();
    let start = Date.now();
    const profile = await currentProfile();
    console.log(`[server-route:currentProfile]: ${Date.now() - start}ms`);

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    start = Date.now();
    const server = await db.server.create({
      data: {
        name,
        imageUrl,
        inviteCode: uuidv4(),
        profileId: profile.id,
        channels: {
          create: [
            {
              name: "general",
              profileId: profile.id,
            },
          ],
        },
        members: {
          create: [
            {
              profileId: profile.id,
              role: MemberRole.ADMIN,
            },
          ],
        },
      },
    });
    console.log(`[server-route:serverCreate]: ${Date.now() - start}ms`);
    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
