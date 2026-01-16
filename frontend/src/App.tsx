import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Destinations } from "@/pages/Destinations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/destinations" replace />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
