// Modules //
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Layouts //
import MainLayout from "./layouts/MainLayout";

// Routes //
import Home from "./components/home/Home.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        
          {/* Landing Page */}
          <Route path={"/"} element={<Navigate to="home" replace />} />
          <Route path={"home"} element={<Home />} />

          {/* Secondary Pages */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
