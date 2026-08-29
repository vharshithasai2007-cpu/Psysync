import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.tsx'

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
