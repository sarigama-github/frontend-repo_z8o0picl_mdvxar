import React from 'react'
import Spline from '@splinetool/react-spline'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import TaskInput from './components/TaskInput'
import LiveAgentPanel from './components/LiveAgentPanel'
import RightColumn from './components/RightColumn'

function App() {
  return (
    <div className="min-h-screen bg-[#070e18] text-blue-100">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_30%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(600px_300px_at_70%_90%,rgba(59,130,246,0.12),transparent)]" />
      </div>

      <div className="relative grid grid-cols-[16rem_1fr_20rem] min-h-screen">
        <Sidebar />

        <main className="flex flex-col">
          <Topbar />
          <TaskInput />
          <LiveAgentPanel />
        </main>

        <RightColumn />
      </div>
    </div>
  )
}

export default App
