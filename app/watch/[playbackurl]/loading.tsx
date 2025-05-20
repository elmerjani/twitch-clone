export default function WatchSkeleton() {
  return (
    <main className="flex flex-col md:flex-row gap-6 p-4 max-w-6xl mx-auto animate-pulse">
      {/* Video Skeleton */}
      <section className="flex-1">
        <div className="w-full aspect-video bg-gray-800 rounded-xl mb-4" />
        <div className="h-8 w-2/3 bg-gray-700 rounded mb-2" />
        <div className="flex items-center gap-4 mb-4">
          <div>
            <div className="h-5 w-32 bg-gray-700 rounded mb-1" />
            <div className="h-4 w-24 bg-purple-900 rounded" />
          </div>
          <div className="ml-4 h-8 w-24 bg-purple-800 rounded-full" />
        </div>
        <div className="h-4 w-1/2 bg-gray-700 rounded mb-6" />
      </section>
      {/* Chat Skeleton */}
      <aside className="w-full md:w-80 bg-[#18181b] rounded-xl flex flex-col max-h-[600px]">
        <div className="p-4 border-b border-gray-700 text-lg font-bold bg-gray-800 h-12" />
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-700 rounded" />
          ))}
        </div>
        <div className="flex gap-2 p-4 border-t border-gray-700">
          <div className="flex-1 h-8 bg-gray-800 rounded-lg" />
          <div className="h-8 w-16 bg-purple-800 rounded-lg" />
        </div>
      </aside>
    </main>
  );
}
