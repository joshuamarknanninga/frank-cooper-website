import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingFallback from './components/ui/LoadingFallback'
import Navigation from './components/layout/Navigation'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Sermons = lazy(() => import('./pages/Sermons'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sermons" element={<Sermons />} />
              <Route path="/events" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}