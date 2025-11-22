import React from 'react'
import { Home, ListChecks, Bell, Workflow, User, Clock } from 'lucide-react'

const NavItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors select-none ${active ? 'bg-blue-500/15 text-blue-300' : 'text-blue-200/70 hover:bg-blue-500/10 hover:text-blue-200'}`}>
    <Icon className={`w-4 h-4 ${active ? 'text-blue-300' : 'text-blue-200/80'}`} />
    <span className="text-sm font-medium">{label}</span>
  </div>
)

const RecentItem = ({ label }) => (
  <div className="flex items-center gap-2 text-blue-200/70 text-xs px-2 py-1.5 rounded-lg hover:bg-blue-500/10 cursor-pointer">
    <Clock className="w-3.5 h-3.5 text-blue-300/90" />
    <span className="truncate">{label}</span>
  </div>
)

export default function Sidebar() {
  return (
    <aside className="h-full w-64 bg-[linear-gradient(180deg,rgba(6,14,24,0.9),rgba(6,14,24,0.6))] border-r border-blue-500/10 p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2 px-2 pt-2 pb-3">
        <div className="relative">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(56,189,248,0.45)]" />
          <div className="absolute inset-0 rounded-xl ring-1 ring-cyan-300/30" />
        </div>
        <div>
          <div className="text-blue-100 font-semibold leading-tight">AAWA</div>
          <div className="text-[10px] text-blue-300/60">Adaptive Autonomous Web Agent</div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={ListChecks} label="Tasks" />
        <NavItem icon={Bell} label="Price Alerts" />
        <NavItem icon={Workflow} label="Routines" />
        <NavItem icon={User} label="Profile" />
      </nav>

      <div className="mt-2 pt-3 border-t border-blue-500/10">
        <div className="text-[11px] uppercase tracking-wide text-blue-300/60 px-1 mb-2">Recent Tasks</div>
        <div className="flex flex-col gap-1.5">
          <RecentItem label="Best phone under ₹20K" />
          <RecentItem label="Chennai → Delhi flights" />
          <RecentItem label="Veg restaurants in T Nagar" />
          <RecentItem label="Track price: AirPods Pro 2" />
          <RecentItem label={'Best 27" monitor for coding'} />
        </div>
      </div>

      <div className="mt-auto text-[10px] text-blue-300/50 px-2">
        © {new Date().getFullYear()} AAWA
      </div>
    </aside>
  )
}
