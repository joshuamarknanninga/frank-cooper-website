import { useErrorBoundary } from 'react-error-boundary'

export default function ErrorBoundary({ children }) {
  const { resetBoundary } = useErrorBoundary()

  return (
    <div role="alert">
      {children}
      <button 
        onClick={resetBoundary}
        style={{ marginTop: '1rem' }}
      >
        Try Again
      </button>
    </div>
  )
}