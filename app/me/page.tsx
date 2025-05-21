// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// export default async function MePage() {
//   const user = await getAuth();

//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-gray-900 rounded-lg p-8 shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">My Profile</h1>
//       <div className="mb-6">
//         <div className="flex items-center gap-4">
//           <img src={user.imageUrl} alt="avatar" className="w-16 h-16 rounded-full border-2 border-purple-500" />
//           <div>
//             <div className="font-semibold">{user.username || user.emailAddresses[0]?.emailAddress}</div>
//             <div className="text-sm text-gray-400">Role: {dbUser?.role || "user"}</div>
//           </div>
//         </div>
//       </div>
//       <h2 className="text-xl font-semibold mb-2">Streaming Info</h2>
//       {dbUser?.channel ? (
//         <div className="space-y-2">
//           <div><span className="font-medium">Ingest URL:</span> <span className="text-purple-400">{dbUser.channel.ingestUrl || <span className='text-gray-500'>Not set</span>}</span></div>
//           <div><span className="font-medium">Stream Key:</span> <span className="text-purple-400">{dbUser.channel.streamKey || <span className='text-gray-500'>Not set</span>}</span></div>
//           <div><span className="font-medium">Playback URL:</span> <span className="text-purple-400">{dbUser.channel.playbackUrl || <span className='text-gray-500'>Not set</span>}</span></div>
//         </div>
//       ) : (
//         <div className="text-gray-400">No channel found. Start streaming to create your channel!</div>
//       )}
//     </div>
//   );
// }
