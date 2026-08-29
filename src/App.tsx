import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Onboarding from './pages/Onboarding.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Tasks from './pages/Tasks.tsx'
import MoodWellness from './pages/MoodWellness.tsx'
import AIAssistant from './pages/AIAssistant.tsx'
import Insights from './pages/Insights.tsx'
import DigitalTwin from './pages/DigitalTwin.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/mood" element={<MoodWellness />} />
          <Route path="/assistant" element={<AIAssistant />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/digital-twin" element={<DigitalTwin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
