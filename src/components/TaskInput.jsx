import React, { useState } from 'react'
import { Sparkles, Send, Loader2 } from 'lucide-react'

const QuickChip = ({ label, onClick }) => (
  <button onClick={() => onClick?.(label)} className="px-3 py-1.5 text-xs rounded-full bg-blue-500/10 text-blue-200/80 hover:bg-blue-500/20 hover:text-blue-100 border border-blue-500/20 transition">
    {label}
  </button>
)

export default function TaskInput({ onSearch }) {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!value.trim()) return
    setLoading(true)
    try {
      await onSearch?.(value.trim())
    } finally {
      setLoading(false)
    }
  }

  const setSample = (text) => {
    setValue(text)
  }

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
              placeholder="Type a topic and get the top 5 books… (e.g., 'deep learning')"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              disabled={loading}
            />
            <button onClick={submit} disabled={loading} className="inline-flex items-center gap-2 bg-gradient-to-tr from-cyan-500 to-blue-600 text-white text-sm px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:brightness-110 transition disabled:opacity-60">
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /><span>Searching</span></>) : (<><span>Run</span></>)}
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="text-[11px] text-blue-300/70 px-2 py-1 rounded-lg border border-blue-500/20 bg-blue-500/10">Live agent visualization ON</div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {['deep learning','productivity','startups','psychology','investing'].map((l) => (
            <QuickChip key={l} label={l} onClick={setSample} />
          ))}
        </div>
      </div>
    </div>
  )
}
