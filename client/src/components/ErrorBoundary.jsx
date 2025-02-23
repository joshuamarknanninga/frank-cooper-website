// Correct import syntax
import { useErrorBoundary } from 'react-error-boundary';

export default function ErrorBoundary({ children }) {
  const { resetBoundary } = useErrorBoundary();
  
  return (
    <div role="alert">
      {children}
      <button onClick={resetBoundary}>
        Try Again
      </button>
    </div>
  );
}