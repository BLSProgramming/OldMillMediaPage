import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import  { Home }   from './Pages/home'
import { History } from './Pages/history'
import { FAQ } from './Pages/faq'
import { Layout } from './Layout'
import { Team } from './Pages/team'
import { Photography } from './Pages/photography'
import { Videography } from './Pages/videography'
import { Audio } from './Pages/audio'


function App() {
return (
  <Router>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element = {<Home/>}/>
      <Route path="/history" element={<History />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/team" element={<Team />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/Videography" element={<Videography />} />
      </Route>
    </Routes>
  </Router>
)
}

export default App
