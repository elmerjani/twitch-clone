import { NextRequest, NextResponse } from "next/server";
import {
  createUser,
  updateUserChannelId,
  getUser,
  deleteUser,
} from "@/lib/user";

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (body.type === "user.created") {
    const id = body.data.id;
    const username = body.data.username;
    await createUser({ role: "user", id });
    const res = await fetch("http://localhost:8080/channels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id, name: username, category: "Gaming" }),
    });

    // Extract channelId from Location header
    const location = res.headers.get("Location");
    if (location) {
      const match = location.match(/\/channels\/(\d+)/);
      if (match) {
        const channelId = match[1];
        // Update the user in your DB with the new channelId
        await updateUserChannelId(id, channelId);
      }
    }
  } else if (body.type === "user.deleted") {
    const id = body.data.id;
    const user = await getUser(id);
    if (user?.channelId) {
      await fetch(`http://localhost:8080/channels/${user.channelId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    }
    await deleteUser(id);
  }

  return NextResponse.json({ ok: true });
}
