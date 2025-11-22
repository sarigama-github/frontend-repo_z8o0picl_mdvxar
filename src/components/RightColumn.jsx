import React from 'react'
import { SlidersHorizontal, Activity, Save } from 'lucide-react'

const SliderPill = ({ label, value }) => (
  <div className="bg-[#0b1525]/70 border border-blue-500/15 rounded-xl p-3">
    <div className="flex items-center justify-between text-sm text-blue-100/90">
      <span>{label}</span>
      <span className="text-cyan-300 font-medium">{value}</span>
    </div>
    <div className="mt-2 h-2 rounded-full bg-blue-500/10 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{width: value === 'High' ? '80%' : value === 'Medium' ? '60%' : '40%'}} />
    </div>
  </div>
)

export default function RightColumn() {
  return (
    <aside className="w-80 border-l border-blue-500/10 bg-[linear-gradient(180deg,rgba(6,14,24,0.75),rgba(6,14,24,0.5))] p-4 flex flex-col gap-4">
      <div className="bg-[#0b1422]/80 border border-blue-500/15 rounded-2xl p-4">
        <div className="flex items-center gap-2 text-blue-100 font-semibold mb-2">
          <SlidersHorizontal className="w-4 h-4 text-cyan-300" />
          Your Decision Profile
        </div>
        <div className="space-y-3">
          <SliderPill label="Price Sensitivity" value="High" />
          <SliderPill label="Performance Priority" value="High" />
          <SliderPill label="Risk Aversion" value="Medium" />
          <div className="bg-[#0b1525]/70 border border-blue-500/15 rounded-xl p-3 text-sm text-blue-300/80">
            Patience Level: Prefers 3–5 options
          </div>
        </div>
        <div className="text-[11px] text-blue-300/60 mt-3">AAWA adapts this profile over time based on your choices.</div>
      </div>

      <div className="bg-[#0b1422]/80 border border-blue-500/15 rounded-2xl p-4">
        <div className="text-blue-100 font-semibold mb-2">Agent Controls</div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-blue-300/80">Autonomous mode</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">ON</span>
          </div>
          <div>
            <div className="text-blue-300/80 mb-1">Decision style</div>
            <div className="px-3 py-2 rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-100">Performance-first</div>
          </div>
          <button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white text-sm shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            <Save className="w-4 h-4" />
            Save as routine
          </button>
        </div>
      </div>

      <div className="bg-[#0b1422]/80 border border-blue-500/15 rounded-2xl p-4">
        <div className="flex items-center gap-2 text-blue-100 font-semibold mb-2">
          <Activity className="w-4 h-4 text-cyan-300" />
          Activity Log / Audit
        </div>
        <div className="space-y-2 text-xs text-blue-300/80">
          <div>Visited Flipkart at 12:31</div>
          <div>Visited Amazon at 12:32</div>
          <div>Found 27 products, shortlisted 5</div>
          <div>Ranked by profile: Performance-first</div>
        </div>
      </div>
    </aside>
  )
}
