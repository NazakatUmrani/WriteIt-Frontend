import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
