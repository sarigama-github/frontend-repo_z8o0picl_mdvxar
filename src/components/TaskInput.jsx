import React from 'react'
import { Sparkles, Send } from 'lucide-react'

const QuickChip = ({ label }) => (
  <button className="px-3 py-1.5 text-xs rounded-full bg-blue-500/10 text-blue-200/80 hover:bg-blue-500/20 hover:text-blue-100 border border-blue-500/20 transition">
    {label}
  </button>
)

export default function TaskInput() {
  return (
    <div className="px-6 py-5">
      <div className="max-w-3xl">
        <div className="relative">
          <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-[#0b1525]/80 shadow-[0_0_40px_rgba(56,189,248,0.08)] p-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-500/10">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-[11px] text-blue-200/80">AAWA</span>
            </div>
            <input
              className="flex-1 bg-transparent outline-none text-blue-100 placeholder:text-blue-300/40 text-sm"
              placeholder="Tell AAWA what to do on the internet… (e.g., ‘Find me the best phone under ₹20,000 for gaming.’)"
            />
            <button className="inline-flex items-center gap-2 bg-gradient-to-tr from-cyan-500 to-blue-600 text-white text-sm px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:brightness-110 transition">
              <span>Run</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="text-[11px] text-blue-300/70 px-2 py-1 rounded-lg border border-blue-500/20 bg-blue-500/10">Live agent visualization ON</div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <QuickChip label="Find a phone" />
          <QuickChip label="Find flights" />
          <QuickChip label="Find restaurants" />
          <QuickChip label="Track a product price" />
          <QuickChip label="Run my daily routine" />
        </div>
      </div>
    </div>
  )
}
