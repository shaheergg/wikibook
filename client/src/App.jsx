import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import { Public } from "./routes/Public";
import { Private } from "./routes/Private";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
          </Route>
          <Route path="/" element={<Private />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </RootLayout>
    </div>
  );
}

export default App;
