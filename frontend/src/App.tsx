import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import CrimeMap from './components/crimeMap'
import LandingPage from './pages/LandingPage'
import Mission from './pages/Mission'
import Maps from './pages/Maps'
import CrimeGeoGuesser from './pages/CrimeGeoGuesser'
import Leaderboard from './pages/Leaderboard'
import GeoLandingPage from './pages/GeoLandingPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/mission" element={<Mission />}/>
        <Route path="/maps" element={<Maps />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/geolandingpage" element={<GeoLandingPage />} />
        <Route path="/crime_guesser" element={<CrimeGeoGuesser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
