import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'

function ErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false)
  return (
    <React.Suspense fallback={fallback}>
      {!hasError ? (
        <Catch onError={() => setHasError(true)}>
          {children}
        </Catch>
      ) : (
        fallback
      )}
    </React.Suspense>
  )
}

class Catch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {
    if (this.props.onError) this.props.onError()
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default function VisualBackground() {
  const fallback = (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_30%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(600px_300px_at_70%_90%,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute inset-0 opacity-60 animate-pulse bg-[radial-gradient(500px_220px_at_20%_20%,rgba(56,189,248,0.10),transparent),radial-gradient(500px_220px_at_80%_80%,rgba(96,165,250,0.10),transparent)]" />
    </div>
  )

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-40">
        <ErrorBoundary fallback={fallback}>
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </ErrorBoundary>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_30%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(600px_300px_at_70%_90%,rgba(59,130,246,0.12),transparent)]" />
    </div>
  )
}
