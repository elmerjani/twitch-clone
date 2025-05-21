import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const userId = form.get("userId") as string;
  const channelName = form.get("channelName") as string;
  const category = form.get("category") as string;

  if (!userId || !channelName || !category) {
    return NextResponse.json(
      { error: "Missing userId, channelName, or category" },
      { status: 400 },
    );
  }

  // Send POST request to backend
  const backendRes = await fetch("http://localhost:8080/channels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      name: channelName,
      category,
    }),
  });

  if (backendRes.status === 201) {
    // Channel created, redirect to /me
    return NextResponse.redirect("/me");
  }

  // Error handling
  const error = await backendRes.text();
  return NextResponse.json({ error }, { status: backendRes.status });
}
