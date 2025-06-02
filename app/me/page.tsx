import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/user';
import CredentialFields from '@/components/CredentialFields';

function LoadingSkeleton() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-900 rounded-lg p-8 shadow-lg animate-pulse">
      <div className="h-8 w-1/3 bg-gray-700 rounded mb-6" />
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-700" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-gray-700 rounded" />
          <div className="h-3 w-20 bg-gray-800 rounded" />
        </div>
      </div>
      <div className="h-5 w-1/4 bg-gray-700 rounded mb-4" />
      <div className="space-y-2">
        <div className="h-4 w-1/2 bg-gray-800 rounded" />
        <div className="h-4 w-1/2 bg-gray-800 rounded" />
        <div className="h-4 w-1/2 bg-gray-800 rounded" />
      </div>
    </div>
  );
}

export default async function MePage() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  // Use user.externalId if available, otherwise fallback to user.id
  let localUser = await getUser(user.id);

  // Wait for channelId to be set by webhook (polling, max 10s)
  let attempts = 0;
  while (localUser && !localUser.channelId && attempts < 20) {
    await new Promise((res) => setTimeout(res, 500));
    localUser = await getUser(user.externalId || user.id);
    attempts++;
  }

  if (!localUser) {
    return <LoadingSkeleton></LoadingSkeleton>;
  }

  let channel: any = undefined;
  if (localUser.channelId) {
    const channelRes = await fetch(`http://localhost:8080/channels/${localUser.channelId}`);
    if (channelRes.ok) {
      channel = await channelRes.json();
    }
  }

  return (
    <div className="max-w-4xl w-full mx-auto mt-10 bg-gray-900 rounded-lg p-8 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <img src={user.imageUrl} alt="avatar" className="w-16 h-16 rounded-full border-2 border-purple-500" />
          <div>
            <div className="font-semibold">
              {user.username ||
                (typeof user.primaryEmailAddress === 'string'
                  ? user.primaryEmailAddress
                  : user.primaryEmailAddress?.emailAddress) ||
                'Unknown'}
            </div>
            <div className="text-sm text-gray-400">Role: {localUser?.role || 'user'}</div>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Streaming Info</h2>
      {channel ? <CredentialFields channel={channel} /> : <LoadingSkeleton />}
    </div>
  );
}
