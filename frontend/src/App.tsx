import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Destinations } from "@/pages/Destinations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
