import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from './components/MainPage'
import AdminPanel from './components/AdminPanel'
import UploadGpx from './components/UploadGpx'

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/uploadGpx" element={<UploadGpx />} />
    </Routes>
  )
}

export default App