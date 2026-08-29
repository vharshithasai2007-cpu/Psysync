import { Link, NavLink } from 'react-router-dom'
import {
  Bot,
  Brain,
  CalendarCheck,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  LogOut,
  UserRound,
} from 'lucide-react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/tasks', label: 'Tasks & Schedule', icon: CalendarCheck },
  { to: '/mood', label: 'Mood & Wellness', icon: HeartPulse },
  { to: '/assistant', label: 'AI Assistant', icon: Bot },
  { to: '/insights', label: 'Insights', icon: LineChart },
  { to: '/digital-twin', label: 'Digital Twin', icon: UserRound },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/dashboard" className="sidebar-brand">
        <Brain size={22} aria-hidden="true" />
        <span>PsySync</span>
      </Link>

      <nav className="sidebar-nav" aria-label="Main">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'sidebar-link active' : 'sidebar-link'
              }
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <Link to="/login" className="sidebar-link sidebar-logout">
        <LogOut size={18} aria-hidden="true" />
        <span>Logout</span>
      </Link>
    </aside>
  )
}

export default Sidebar
