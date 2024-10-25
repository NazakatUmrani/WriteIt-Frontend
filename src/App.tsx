import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen flex justify-center items-center min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Router>
        </div>
    </ThemeProvider>
  )
}

export default App
