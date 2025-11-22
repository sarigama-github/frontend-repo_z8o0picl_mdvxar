import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import TaskInput from './components/TaskInput'
import LiveAgentPanel from './components/LiveAgentPanel'
import RightColumn from './components/RightColumn'
import VisualBackground from './components/VisualBackground'

function App() {
  return (
    <div className="min-h-screen bg-[#070e18] text-blue-100">
      <VisualBackground />

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
