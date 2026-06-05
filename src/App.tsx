import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ElevateDanceAcademy from './pages/ElevateDanceAcademy'
import BlushAndBloom from './pages/BlushAndBloom'
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/elevate-dance-academy" element={<ElevateDanceAcademy />} />
        <Route path="/case-study/blush-and-bloom" element={<BlushAndBloom />} />
      </Routes>
    </Router>
  )
}

export default App
