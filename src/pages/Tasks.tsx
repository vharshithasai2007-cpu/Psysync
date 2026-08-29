import { useState } from "react";
import {
  Check,
  Plus,
  Clock3,
  Flag,
  CalendarDays,
} from "lucide-react";

type Task = {
  id: number;
  title: string;
  time: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Complete assignment",
    time: "10:00 AM",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    title: "Study Java",
    time: "1:00 PM",
    priority: "High",
    completed: true,
  },
  {
    id: 3,
    title: "Exercise",
    time: "5:30 PM",
    priority: "Medium",
    completed: true,
  },
  {
    id: 4,
    title: "Read for 20 minutes",
    time: "8:00 PM",
    priority: "Low",
    completed: false,
  },
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="tasks-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR DAY</p>
          <h1>Tasks & Schedule</h1>
          <p>Stay organized while keeping your workload manageable.</p>
        </div>

        <button className="primary-action" type="button">
          <Plus size={18} />
          Add Task
        </button>
      </div>

      <div className="task-summary">
        <div>
          <CalendarDays size={20} />
          <span>Today</span>
        </div>

        <strong>
          {completedCount} of {tasks.length} completed
        </strong>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div
            className={`task-item ${
              task.completed ? "task-completed" : ""
            }`}
            key={task.id}
          >
            <button
              className={`task-check ${
                task.completed ? "checked" : ""
              }`}
              type="button"
              onClick={() => toggleTask(task.id)}
              aria-label={`Mark ${task.title} as ${
                task.completed ? "incomplete" : "complete"
              }`}
            >
              {task.completed && <Check size={16} />}
            </button>

            <div className="task-info">
              <h3>{task.title}</h3>

              <div className="task-meta">
                <span>
                  <Clock3 size={14} />
                  {task.time}
                </span>

                <span>
                  <Flag size={14} />
                  {task.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="schedule-card">
        <div>
          <h2>Today's focus</h2>
          <p>
            You have a balanced workload today. Finish your remaining
            task when your energy is highest.
          </p>
        </div>

        <div className="focus-progress">
          <div className="focus-progress-bar">
            <span
              style={{
                width: `${(completedCount / tasks.length) * 100}%`,
              }}
            />
          </div>

          <span>
            {Math.round((completedCount / tasks.length) * 100)}%
          </span>
        </div>
      </section>
    </main>
  );
}

export default Tasks;