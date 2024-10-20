import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen flex justify-center items-center">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
