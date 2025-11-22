import React from 'react'
import { Braces, Route as RouteIcon, Globe, Filter, ScrollText, Database, Brain, BarChart3, ExternalLink, Image as ImageIcon, CheckCircle2, Clock, Loader2, Star } from 'lucide-react'

const Card = ({ title, children, right }) => (
  <div className="bg-[#0b1422]/80 border border-blue-500/15 rounded-2xl p-4 shadow-[0_0_30px_rgba(34,211,238,0.06)]">
    <div className="flex items-center justify-between mb-3">
      <div className="text-blue-100/90 text-sm font-semibold">{title}</div>
      {right}
    </div>
    {children}
  </div>
)

const StatusBadge = ({ status }) => {
  const map = {
    Queued: 'bg-blue-500/10 text-blue-200 border-blue-500/30',
    Running: 'bg-cyan-500/10 text-cyan-200 border-cyan-500/30',
    Done: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/30'
  }
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${map[status]}`}>{status}</span>
  )
}

const StepCard = ({ icon: Icon, title, desc, status, thumb }) => (
  <div className="rounded-xl border border-blue-500/15 p-3 bg-[#0c1728]/60">
    <div className="flex items-start gap-3">
      <div className="mt-0.5">
        <Icon className={`w-4 h-4 ${status === 'Running' ? 'text-cyan-300 animate-pulse' : 'text-blue-300/80'}`} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="text-sm text-blue-100/90 font-medium">{title}</div>
          <StatusBadge status={status} />
        </div>
        <div className="text-xs text-blue-300/70 mt-1">{desc}</div>
        {thumb && (
          <div className="mt-2 flex items-center gap-2">
            <div className="w-24 h-14 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[10px] text-blue-300/60">
              <ImageIcon className="w-4 h-4 mr-1" />
              Preview
            </div>
            <a href="#" className="text-[11px] text-cyan-300 inline-flex items-center gap-1 hover:underline">
              open <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
        {status === 'Running' && (
          <div className="mt-2 h-1.5 rounded-full bg-blue-500/10 overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-blue-600 animate-[progress_1.5s_ease_infinite]" />
          </div>
        )}
      </div>
    </div>
  </div>
)

export default function LiveAgentPanel() {
  return (
    <div className="px-6 pb-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 flex flex-col gap-4">
          <Card title="Understanding your request" right={<span className="text-[11px] text-blue-300/70">Confidence: <span className="text-cyan-300 font-medium">92%</span></span>}>
            <div className="rounded-xl border border-blue-500/15 bg-[#0a1629]/70 p-3 font-mono text-[12px] text-blue-200/90">
              {`{\n  category: 'phone',\n  budget_max: '₹20,000',\n  use_case: ['gaming', 'camera'],\n  brands: ['Samsung', 'Realme'],\n  must_have: ['5G']\n}`}
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-blue-500/10 overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-to-r from-cyan-400 to-blue-600" />
            </div>
          </Card>

          <Card title="Plan">
            <div className="flex items-center gap-3">
              {[{icon: Globe, label: 'Search sites'}, {icon: Filter, label: 'Apply filters'}, {icon: ScrollText, label: 'Extract'}, {icon: Database, label: 'Compare'}, {icon: Brain, label: 'Rank'}, {icon: CheckCircle2, label: 'Choose'}].map((n, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${i===2 ? 'border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_16px_rgba(34,211,238,0.35)]' : 'border-blue-500/20 bg-blue-500/5'}`}>
                  <n.icon className={`w-4 h-4 ${i===2 ? 'text-cyan-300' : 'text-blue-300/70'}`} />
                  <span className={`text-xs ${i===2 ? 'text-cyan-200' : 'text-blue-300/70'}`}>{n.label}</span>
                  {i < 5 && <span className="w-6 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />}
                </div>
              ))}
            </div>
          </Card>

          <Card title="Execution timeline">
            <div className="flex flex-col gap-3">
              <StepCard icon={Globe} status="Done" title="Opening Flipkart…" desc="Starting with Flipkart due to richer filters in electronics." thumb />
              <StepCard icon={Filter} status="Done" title="Applying filters" desc="price ≤ ₹20,000, rating ≥ 4.2, 5G only" />
              <StepCard icon={ScrollText} status="Running" title="Collecting products (27 found)" desc="Scrolling and capturing multi-page data." thumb />
              <StepCard icon={Globe} status="Queued" title="Opening Amazon…" desc="Repeating filters for broader coverage." thumb />
              <StepCard icon={ScrollText} status="Queued" title="Extracting specs" desc="RAM, storage, processor, battery, rating" />
              <StepCard icon={Database} status="Queued" title="Merging & cleaning" desc="Removing duplicates, normalizing fields" />
              <StepCard icon={Brain} status="Queued" title="Scoring with your profile" desc="Using rating ≥ 4.2 because you are risk-averse." />
            </div>
          </Card>
        </div>

        <div className="col-span-5 flex flex-col gap-4">
          <Card title="Extracted products">
            <div className="overflow-hidden rounded-xl border border-blue-500/15">
              <div className="grid grid-cols-8 text-[11px] text-blue-300/70 bg-blue-500/5">
                {['Product','Price','Rating','RAM','Storage','Battery','Source','Score'].map(h => (
                  <div key={h} className="px-3 py-2 border-b border-blue-500/10">{h}</div>
                ))}
              </div>
              <div className="divide-y divide-blue-500/10 text-[12px]">
                {[
                  {p:'Realme Narzo 70 Pro',pr:'₹18,999',r:'4.4',ram:'8GB',st:'128GB',b:'5000mAh',s:'Flipkart',sc:87},
                  {p:'Samsung Galaxy M34',pr:'₹19,499',r:'4.3',ram:'6GB',st:'128GB',b:'6000mAh',s:'Amazon',sc:84},
                  {p:'Redmi Note 12',pr:'₹17,999',r:'4.2',ram:'8GB',st:'256GB',b:'5000mAh',s:'Flipkart',sc:82}
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-8 bg-gradient-to-r from-transparent to-transparent hover:to-blue-500/5 transition">
                    <div className="px-3 py-2 text-blue-100/90">{row.p}</div>
                    <div className="px-3 py-2 text-blue-100/90">{row.pr}</div>
                    <div className="px-3 py-2 text-blue-100/90">{row.r}</div>
                    <div className="px-3 py-2 text-blue-100/90">{row.ram}</div>
                    <div className="px-3 py-2 text-blue-100/90">{row.st}</div>
                    <div className="px-3 py-2 text-blue-100/90">{row.b}</div>
                    <div className="px-3 py-2 text-blue-100/90">{row.s}</div>
                    <div className="px-3 py-2 text-cyan-300 font-medium">{row.sc}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card title="How AAWA chose your results">
            <div className="space-y-3">
              {[
                {l:'Price vs Budget',v:78,cap:'Weighted moderately due to some price sensitivity.'},
                {l:'Gaming performance',v:92,cap:'Weighted higher because you value performance.'},
                {l:'Camera quality',v:88,cap:'Prioritized for your content needs.'},
                {l:'Reliability',v:81,cap:'Based on ratings and reviews; risk-averse profile.'}
              ].map((b, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-sm text-blue-100/90 mb-1">
                    <span>{b.l}</span>
                    <span className="text-cyan-300 font-medium">{b.v}/100</span>
                  </div>
                  <div className="h-2 rounded-full bg-blue-500/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{width: `${b.v}%`}} />
                  </div>
                  <div className="text-[11px] text-blue-300/70 mt-1">{b.cap}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Top recommendation" right={<span className="text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 px-2 py-0.5 rounded-full">Best match for you</span>}>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-blue-300/80" />
              </div>
              <div className="flex-1">
                <div className="text-blue-100 font-semibold">Realme Narzo 70 Pro</div>
                <div className="text-blue-300/80 text-sm">8GB • 128GB • Dimensity 7050 • 5000mAh</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="text-cyan-300 font-semibold">₹18,999</div>
                  <div className="flex items-center gap-1 text-yellow-300">
                    {[...Array(5)].map((_,i)=>(<Star key={i} className={`w-4 h-4 ${i<4? 'fill-yellow-300 text-yellow-300':'text-yellow-300/30'}`} />))}
                  </div>
                </div>
                <div className="text-[12px] text-blue-300/70 mt-2">Chosen because you’re performance-focused and moderately price-sensitive. This offers the best gaming processor and camera within your budget.</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 text-xs rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-100 hover:bg-blue-500/20">View on Amazon</button>
                  <button className="px-3 py-1.5 text-xs rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-100 hover:bg-blue-500/20">View on Flipkart</button>
                  <button className="px-3 py-1.5 text-xs rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20">Track price</button>
                  <button className="px-3 py-1.5 text-xs rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-100 hover:bg-blue-500/20">Refine search</button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
