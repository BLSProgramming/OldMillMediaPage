import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home } from './Pages/home'
import { History } from './Pages/history'
import { FAQ } from './Pages/faq'
import { Layout } from './Layout'
import { Team } from './Pages/team'
import { Photography } from './Pages/photography'
import { Videography } from './Pages/videography'
import { Audio } from './Pages/audioProduction'
import { PageWrapper } from './Components/PageWrapper'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/history" element={<PageWrapper><History /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/audioProduction" element={<PageWrapper><Audio /></PageWrapper>} />
          <Route path="/photography" element={<PageWrapper><Photography /></PageWrapper>} />
          <Route path="/videography" element={<PageWrapper><Videography /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
