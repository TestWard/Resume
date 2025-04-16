export default function TerminalHeader() {
  return (
    <div className="flex items-center bg-zinc-800 rounded-t-md border border-zinc-700 p-2">
      <div className="flex gap-2 mr-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 text-center text-sm text-zinc-400 font-mono">edward-basulto-sdet ~ zsh</div>
    </div>
  )
}
