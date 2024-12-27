import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import NotePage from "./Pages/NotePage";

// toast messages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ToastContainer position="bottom-center" autoClose={1500} />
        <div className="w-screen min-h-screen grid place-content-center">
          {isLoading && <div className="w-screen h-screen flex items-center justify-center absolute z-50 loader-screen"><Loader /></div>}
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard setIsLoading={setIsLoading} isLoading={isLoading} />} />
              <Route path="/notepage" element={<NotePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </Router>
        </div>
    </ThemeProvider>
  );
}

export default App;
