import {
  TrendingUp,
  Brain,
  Heart,
  Battery,
  Target,
  Lightbulb,
} from "lucide-react";

function Insights() {
  return (
    <main className="insights-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR PROGRESS</p>
          <h1>Productivity & Wellness Insights</h1>
          <p>
            Understand your patterns and discover what helps you perform
            at your best.
          </p>
        </div>
      </div>

      <div className="insight-metrics">
        <div className="insight-metric">
          <div className="insight-icon">
            <Target size={20} />
          </div>
          <div>
            <span>Productivity</span>
            <strong>78%</strong>
          </div>
          <small>↑ 8% this week</small>
        </div>

        <div className="insight-metric">
          <div className="insight-icon">
            <Heart size={20} />
          </div>
          <div>
            <span>Wellness</span>
            <strong>82%</strong>
          </div>
          <small>↑ 5% this week</small>
        </div>

        <div className="insight-metric">
          <div className="insight-icon">
            <Battery size={20} />
          </div>
          <div>
            <span>Avg. Energy</span>
            <strong>64%</strong>
          </div>
          <small>Stable</small>
        </div>
      </div>

      <div className="insights-grid">
        <section className="insight-card">
          <div className="card-heading">
            <div>
              <h2>Weekly productivity</h2>
              <p>Your productivity trend over the past week.</p>
            </div>

            <TrendingUp size={20} />
          </div>

          <div className="chart">
            <div className="chart-bar" style={{ height: "55%" }}>
              <span>Mon</span>
            </div>

            <div className="chart-bar" style={{ height: "70%" }}>
              <span>Tue</span>
            </div>

            <div className="chart-bar" style={{ height: "62%" }}>
              <span>Wed</span>
            </div>

            <div className="chart-bar" style={{ height: "80%" }}>
              <span>Thu</span>
            </div>

            <div className="chart-bar" style={{ height: "72%" }}>
              <span>Fri</span>
            </div>

            <div className="chart-bar" style={{ height: "90%" }}>
              <span>Sat</span>
            </div>

            <div className="chart-bar" style={{ height: "78%" }}>
              <span>Sun</span>
            </div>
          </div>
        </section>

        <section className="insight-card">
          <div className="card-heading">
            <div>
              <h2>Wellness patterns</h2>
              <p>How your daily signals are trending.</p>
            </div>

            <Brain size={20} />
          </div>

          <div className="pattern-item">
            <span>Mood</span>
            <div className="pattern-bar">
              <span style={{ width: "78%" }} />
            </div>
            <strong>78%</strong>
          </div>

          <div className="pattern-item">
            <span>Energy</span>
            <div className="pattern-bar">
              <span style={{ width: "64%" }} />
            </div>
            <strong>64%</strong>
          </div>

          <div className="pattern-item">
            <span>Focus</span>
            <div className="pattern-bar">
              <span style={{ width: "82%" }} />
            </div>
            <strong>82%</strong>
          </div>
        </section>

        <section className="recommendation-card">
          <div className="recommendation-icon">
            <Lightbulb size={22} />
          </div>

          <div>
            <p className="eyebrow">LENNA'S INSIGHT</p>
            <h2>Your focus is strongest in the evening.</h2>
            <p>
              Your recent activity suggests that you complete more tasks
              during your evening hours. Consider scheduling important
              work when your focus tends to be highest.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Insights;