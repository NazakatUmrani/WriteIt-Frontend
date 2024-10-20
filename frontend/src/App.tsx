import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen">
        <Dashboard/>
      </div>
    </ThemeProvider>
  )
}

export default App
