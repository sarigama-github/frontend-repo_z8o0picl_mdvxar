import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import TaskInput from './components/TaskInput'
import LiveAgentPanel from './components/LiveAgentPanel'
import RightColumn from './components/RightColumn'
import VisualBackground from './components/VisualBackground'

function App() {
  const [phase, setPhase] = useState('idle') // idle | searching | ranking | done
  const [results, setResults] = useState([])

  const onSearch = async (q) => {
    setResults([])
    setPhase('searching')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/books?query=${encodeURIComponent(q)}`)
      const data = await res.json()
      // Simulate stages for visualization
      await new Promise(r => setTimeout(r, 600))
      setPhase('ranking')
      await new Promise(r => setTimeout(r, 700))
      setResults(data.results || [])
      setPhase('done')
    } catch (e) {
      console.error(e)
      setPhase('idle')
    }
  }

  return (
    <div className="min-h-screen bg-[#070e18] text-blue-100">
      <VisualBackground />

      <div className="relative grid grid-cols-[16rem_1fr_20rem] min-h-screen">
        <Sidebar />

        <main className="flex flex-col">
          <Topbar />
          <TaskInput onSearch={onSearch} />
          <LiveAgentPanel phase={phase} results={results} />
        </main>

        <RightColumn />
      </div>
    </div>
  )
}

export default App
