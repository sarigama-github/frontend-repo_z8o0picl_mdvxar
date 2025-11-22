import React from 'react'

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-blue-500/10 bg-[linear-gradient(180deg,rgba(10,18,30,0.7),rgba(10,18,30,0.4))] backdrop-blur supports-[backdrop-filter]:bg-[#0a121e66]">
      <div className="text-blue-100 text-lg font-medium">Good afternoon, Muruganandam 👋</div>
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        <div className="text-xs text-blue-300/70">Live agent visualization ON</div>
      </div>
    </div>
  )
}
