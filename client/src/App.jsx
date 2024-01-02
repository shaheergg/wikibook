import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <div>
      <RootLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </RootLayout>
    </div>
  );
}

export default App;
