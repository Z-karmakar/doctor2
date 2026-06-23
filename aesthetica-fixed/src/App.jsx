import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ClinicsPage from './pages/ClinicsPage'
import FacilitiesPage from './pages/FacilitiesPage'
import LocationPage from './pages/LocationPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/clinics" replace />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/specialists" element={<Navigate to="/clinics" replace />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="*" element={<Navigate to="/clinics" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
