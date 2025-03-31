"use client";

import { SignedIn, UserButton as ClerkUserButton } from "@clerk/nextjs";

export const UserButton = () => (
  <SignedIn>
    <ClerkUserButton
      appearance={{
        elements: {
          avatarBox: "h-[32px]! w-[32px]!",
        },
      }}
    />
  </SignedIn>
);
