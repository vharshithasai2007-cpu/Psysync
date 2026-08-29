import { Link } from 'react-router-dom'
import {
  Battery,
  CheckCircle2,
  Circle,
  Clock3,
  Flag,
  HeartPulse,
  MessageCircle,
  Plus,
  Smile,
  Sparkles,
  Target,
  ListChecks,
} from 'lucide-react'

const metrics = [
  { label: 'Mood', value: '😊 Good', icon: Smile },
  { label: 'Energy', value: '64%', icon: Battery },
  { label: 'Focus', value: '78%', icon: Target },
  { label: 'Tasks', value: '4/5 completed', icon: ListChecks },
]

const tasks = [
  {
    title: 'Complete assignment',
    time: '10:00 AM',
    priority: 'High',
    done: true,
  },
  {
    title: 'Study Java',
    time: '1:00 PM',
    priority: 'High',
    done: true,
  },
  {
    title: 'Exercise',
    time: '5:30 PM',
    priority: 'Medium',
    done: true,
  },
  {
    title: 'Read for 20 minutes',
    time: '8:00 PM',
    priority: 'Low',
    done: false,
  },
]

const wellness = [
  { label: 'Mood', value: 82 },
  { label: 'Energy', value: 64 },
  { label: 'Focus', value: 78 },
]

function Dashboard() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>Good evening 👋</h1>
        <p>Here's your wellness snapshot for today.</p>
      </header>

      <section className="metric-grid" aria-label="Today's metrics">
        {metrics.map((metric) => {
          const Icon = metric.icon

          return (
            <article key={metric.label} className="card metric-card">
              <div className="metric-icon">
                <Icon size={18} aria-hidden="true" />
              </div>
              <p className="metric-label">{metric.label}</p>
              <p className="metric-value">{metric.value}</p>
            </article>
          )
        })}
      </section>

      <div className="dashboard-grid">
        <section className="card tasks-card">
          <h2>Today's Tasks</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.title} className="task-item">
                {task.done ? (
                  <CheckCircle2 size={18} className="task-status done" aria-label="Completed" />
                ) : (
                  <Circle size={18} className="task-status" aria-label="Not completed" />
                )}
                <div className="task-copy">
                  <p className={task.done ? 'task-title done' : 'task-title'}>
                    {task.title}
                  </p>
                  <p className="task-meta">
                    <span>
                      <Clock3 size={14} aria-hidden="true" />
                      {task.time}
                    </span>
                    <span>
                      <Flag size={14} aria-hidden="true" />
                      {task.priority}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="card recommendation-card">
          <div className="recommendation-kicker">
            <Sparkles size={16} aria-hidden="true" />
            Lenna's Recommendation
          </div>
          <p>
            Your energy is slightly lower today. Try completing your most
            important task before moving to smaller activities.
          </p>
          <Link to="/assistant" className="btn-primary">
            <MessageCircle size={16} aria-hidden="true" />
            Talk to Lenna
          </Link>
        </section>
      </div>

      <section className="card wellness-card">
        <h2>Wellness Overview</h2>
        <div className="wellness-list">
          {wellness.map((item) => (
            <div key={item.label} className="wellness-row">
              <div className="wellness-label">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="progress-track" aria-hidden="true">
                <div
                  className="progress-fill"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card actions-card">
        <h2>Quick Actions</h2>
        <div className="action-row">
          <Link to="/mood" className="btn-secondary">
            <HeartPulse size={16} aria-hidden="true" />
            Check Mood
          </Link>
          <Link to="/tasks" className="btn-secondary">
            <Plus size={16} aria-hidden="true" />
            Add Task
          </Link>
          <Link to="/assistant" className="btn-secondary">
            <MessageCircle size={16} aria-hidden="true" />
            Talk to AI
          </Link>
        </div>
      </section>

      <style>{`
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1080px;
        }

        .dashboard-header h1 {
          margin: 0 0 6px;
          font-size: 1.85rem;
        }

        .dashboard-header p {
          color: var(--text);
        }

        .card {
          background: var(--sidebar-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        .card h2 {
          margin: 0 0 16px;
          font-size: 1.05rem;
          color: var(--text-h);
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .metric-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .metric-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: var(--accent-soft);
          color: var(--accent);
        }

        .metric-label {
          font-size: 0.85rem;
        }

        .metric-value {
          font-size: 1.15rem;
          font-weight: 650;
          color: var(--text-h);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 16px;
        }

        .task-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .task-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
        }

        .task-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .task-status {
          color: var(--text);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .task-status.done {
          color: #059669;
        }

        .task-title {
          font-weight: 600;
          color: var(--text-h);
        }

        .task-title.done {
          color: var(--text);
          text-decoration: line-through;
        }

        .task-meta {
          display: flex;
          gap: 14px;
          margin-top: 6px;
          font-size: 0.85rem;
        }

        .task-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .recommendation-card {
          background: linear-gradient(180deg, #eef2ff 0%, #ffffff 55%);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .recommendation-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--accent);
          font-weight: 700;
        }

        .recommendation-card p {
          color: var(--text-h);
          line-height: 1.6;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          padding: 10px 14px;
        }

        .btn-primary {
          background: var(--accent);
          color: #ffffff;
          width: fit-content;
        }

        .btn-secondary {
          background: var(--accent-soft);
          color: var(--accent);
        }

        .wellness-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .wellness-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 0.92rem;
          color: var(--text-h);
        }

        .progress-track {
          height: 10px;
          border-radius: 999px;
          background: #e5e7eb;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #818cf8, #4f46e5);
        }

        .action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        @media (max-width: 900px) {
          .metric-grid,
          .dashboard-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .metric-grid,
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}

export default Dashboard
