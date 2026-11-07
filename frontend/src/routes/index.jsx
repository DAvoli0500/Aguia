import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Sobre from '../pages/Sobre.jsx'
import Contato from '../pages/Contato.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
