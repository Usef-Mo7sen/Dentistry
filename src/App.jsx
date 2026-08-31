import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ZirconiaBridgeDesignSetup from './pages/digital-dentistry/ZirconiaBridgeDesignSetup'
import SpecialtyPlaceholderPage from './pages/SpecialtyPlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={<Navigate to="/digital-dentistry/zirconia-bridge-design-setup" replace />}
          />
          <Route
            path="digital-dentistry/zirconia-bridge-design-setup"
            element={<ZirconiaBridgeDesignSetup />}
          />
          <Route
            path="endodontics"
            element={<SpecialtyPlaceholderPage title="علاج الجذور (Endodontics)" />}
          />
          <Route path="surgery" element={<SpecialtyPlaceholderPage title="جراحة الفم (Surgery)" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
