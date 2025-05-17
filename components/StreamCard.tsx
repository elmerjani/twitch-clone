export default function StreamCard({ stream }: { stream: any }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl text-white w-[280px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden">
      <div className="relative mb-3">
        <img
          src={stream.thumbnail}
          alt="Thumbnail"
          className="rounded-lg w-full h-40 object-cover group-hover:opacity-80 transition"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg" />
        <span className="absolute top-2 left-2 bg-purple-600 text-xs font-semibold px-2 py-1 rounded-full shadow-md">
          {stream.category}
        </span>
      </div>
      <h2 className="text-lg font-bold truncate mb-1 group-hover:text-purple-400 transition-colors">
        {stream.title}
      </h2>
      <h3 className="text-md font-medium text-gray-200 mb-1 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        {stream.channel}
      </h3>
    </div>
  );
}
