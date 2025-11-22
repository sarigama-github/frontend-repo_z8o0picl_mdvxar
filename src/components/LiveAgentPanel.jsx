import React from 'react'
import { Braces, Route as RouteIcon, Globe, Filter, ScrollText, Database, Brain, BarChart3, ExternalLink, Image as ImageIcon, CheckCircle2, Clock, Loader2, Star, Sparkles } from 'lucide-react'

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

export default function LiveAgentPanel({ phase = 'idle', results = [] }) {
  const isSearching = phase === 'searching'
  const isRanking = phase === 'ranking'
  const isDone = phase === 'done'

  return (
    <div className="px-6 pb-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 flex flex-col gap-4">
          <Card title="Understanding your request" right={<span className="text-[11px] text-blue-300/70">{isDone ? 'Completed' : isSearching || isRanking ? 'Working…' : 'Standing by'}</span>}>
            <div className="rounded-xl border border-blue-500/15 bg-[#0a1629]/70 p-3 font-mono text-[12px] text-blue-200/90">
              {`{\n  intent: 'top_books',\n  topic: 'Your query',\n  limit: 5\n}`}
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-blue-500/10 overflow-hidden">
              <div className={`h-full ${isDone ? 'w-full' : isRanking ? 'w-4/5' : isSearching ? 'w-2/5' : 'w-0'} bg-gradient-to-r from-cyan-400 to-blue-600 transition-[width] duration-700`} />
            </div>
          </Card>

          <Card title="Plan">
            <div className="flex items-center gap-3">
              {[{icon: Globe, label: 'Search sources'}, {icon: ScrollText, label: 'Parse results'}, {icon: Brain, label: 'Rank'}, {icon: CheckCircle2, label: 'Choose'}].map((n, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${i===0 && isSearching || i===2 && isRanking ? 'border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_16px_rgba(34,211,238,0.35)]' : 'border-blue-500/20 bg-blue-500/5'}`}>
                  <n.icon className={`w-4 h-4 ${(i===0 && isSearching) || (i===2 && isRanking) ? 'text-cyan-300' : 'text-blue-300/70'}`} />
                  <span className={`text-xs ${(i===0 && isSearching) || (i===2 && isRanking) ? 'text-cyan-200' : 'text-blue-300/70'}`}>{n.label}</span>
                  {i < 3 && <span className="w-6 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />}
                </div>
              ))}
            </div>
          </Card>

          <Card title="Execution timeline">
            <div className="flex flex-col gap-3">
              <StepCard icon={Globe} status={isSearching ? 'Running' : isDone || isRanking ? 'Done' : 'Queued'} title="Searching the web" desc="Querying book APIs for relevant titles" />
              <StepCard icon={ScrollText} status={isRanking ? 'Running' : isDone ? 'Done' : 'Queued'} title="Parsing & normalizing" desc="Structuring data for ranking" />
              <StepCard icon={Brain} status={isDone ? 'Done' : isRanking ? 'Running' : 'Queued'} title="Ranking results" desc="Scoring by popularity & ratings" />
            </div>
          </Card>
        </div>

        <div className="col-span-5 flex flex-col gap-4">
          <Card title="Top books">
            {results?.length ? (
              <div className="divide-y divide-blue-500/10">
                {results.map((b, i) => (
                  <div key={b.id || i} className="flex items-start gap-3 py-3">
                    <div className="w-14 h-20 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center overflow-hidden">
                      {b.thumbnail ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={b.thumbnail} alt={b.title} className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-blue-300/70" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-100 font-medium">{b.title}</div>
                      <div className="text-[12px] text-blue-300/70">{(b.authors || []).join(', ')}</div>
                      <div className="text-[11px] text-blue-300/60 mt-0.5">{b.publishedDate}</div>
                      <div className="flex items-center gap-2 mt-1">
                        {b.averageRating ? (
                          <div className="flex items-center gap-0.5 text-yellow-300">
                            {[...Array(5)].map((_, si) => (
                              <Star key={si} className={`w-3.5 h-3.5 ${si < Math.round(b.averageRating) ? 'fill-yellow-300 text-yellow-300' : 'text-yellow-300/30'}`} />
                            ))}
                          </div>
                        ) : (
                          <span className="text-[11px] text-blue-300/60">No ratings</span>
                        )}
                        {b.infoLink && (
                          <a href={b.infoLink} target="_blank" rel="noreferrer" className="text-[11px] text-cyan-300 inline-flex items-center gap-1 hover:underline">
                            details <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="text-[11px] text-blue-300/60">#{i+1}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-blue-300/70">No results yet. Try a query like "deep learning" or use the chips above.</div>
            )}
          </Card>

          <Card title="How AAWA chose your results" right={<Sparkles className="w-4 h-4 text-cyan-300" />}>
            <div className="space-y-3">
              {[
                {l:'Relevance to topic',v:90,cap:'Matches your query keywords strongly.'},
                {l:'Popularity',v:80,cap:'Based on ratings and reviews.'},
                {l:'Recency',v:70,cap:'Considers recent editions and updates.'}
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
        </div>
      </div>
    </div>
  )
}
