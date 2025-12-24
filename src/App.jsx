import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage'
import AdminPanel from './components/AdminPanel'
import UploadGpx from './components/UploadGpx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/uploadGpx" element={<UploadGpx />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App