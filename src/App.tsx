import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import { LoaderProvider } from "./context/LoaderContext";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LoaderProvider>
        <div className="w-screen min-h-screen grid place-content-center">
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </Router>
        </div>
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default App;
