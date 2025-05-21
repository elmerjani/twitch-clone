import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function MeSetupPage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  // Simple form for channel name and category
  return (
    <div className="max-w-md mx-auto mt-20 bg-gray-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Create Your Channel</h1>
      <form action="/me/setup/create" method="POST" className="space-y-4">
        <input type="hidden" name="userId" value={user.id} />
        <label className="block text-gray-300 font-medium">Channel Name</label>
        <input
          name="channelName"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your channel name"
        />
        <label className="block text-gray-300 font-medium">Category</label>
        <input
          name="category"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="e.g. Gaming, Music, Art"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg mt-4"
        >
          Create Channel
        </button>
      </form>
    </div>
  );
}
