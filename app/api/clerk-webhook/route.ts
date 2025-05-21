import { NextRequest, NextResponse } from "next/server";
import { createUser, setUserHasChannel } from "@/lib/user";
import { createClerkClient } from "@clerk/backend";

export async function POST(req: NextRequest) {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  });
  const body = await req.json();
  if (body.type === "user.created") {
    const clerkUserId = body.data.id;
    const dbUser = await createUser({ role: "admin" });
    clerkClient.users.updateUser(clerkUserId, {externalId:dbUser.id});
    // Optionally, update Clerk externalId here
    // Ask user for channel name and category (placeholder categories)
    // This should be done in the onboarding UI, not here
  }
  if (body.type === "channel.create") {
    // When a channel is created for a user, set has_channel to true
    const { userId } = body.data;
    await setUserHasChannel(userId);
  }
  return NextResponse.json({ ok: true });
}
