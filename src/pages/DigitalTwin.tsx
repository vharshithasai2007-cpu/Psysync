import {
  UserRound,
  Brain,
  Target,
  Clock3,
  Heart,
  Pencil,
} from "lucide-react";

function DigitalTwin() {
  return (
    <main className="profile-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR PROFILE</p>
          <h1>Digital Twin</h1>
          <p>
            A simple view of your preferences, habits, and wellness patterns.
          </p>
        </div>

        <button className="primary-action" type="button">
          <Pencil size={17} />
          Edit Profile
        </button>
      </div>

      <section className="profile-hero">
        <div className="profile-avatar">
          <UserRound size={32} />
        </div>

        <div>
          <h2>Welcome to your PsySync profile</h2>
          <p>
            Your Digital Twin will gradually become more personalized as
            PsySync learns from your tasks, mood, energy, and routines.
          </p>
        </div>
      </section>

      <div className="profile-grid">
        <section className="profile-card">
          <div className="profile-card-title">
            <Target size={20} />
            <h2>My Goals</h2>
          </div>

          <div className="profile-tags">
            <span>Study & Productivity</span>
            <span>Personal Growth</span>
          </div>
        </section>

        <section className="profile-card">
          <div className="profile-card-title">
            <Clock3 size={20} />
            <h2>My Routine</h2>
          </div>

          <div className="profile-detail">
            <span>Most productive</span>
            <strong>Evening</strong>
          </div>

          <div className="profile-detail">
            <span>Typical energy</span>
            <strong>Moderate</strong>
          </div>
        </section>

        <section className="profile-card">
          <div className="profile-card-title">
            <Heart size={20} />
            <h2>Wellness Snapshot</h2>
          </div>

          <div className="profile-detail">
            <span>Average mood</span>
            <strong>Good 🙂</strong>
          </div>

          <div className="profile-detail">
            <span>Average energy</span>
            <strong>64%</strong>
          </div>

          <div className="profile-detail">
            <span>Focus level</span>
            <strong>78%</strong>
          </div>
        </section>

        <section className="profile-card">
          <div className="profile-card-title">
            <Brain size={20} />
            <h2>How PsySync Understands Me</h2>
          </div>

          <p className="profile-description">
            You tend to be more productive during the evening and benefit
            from breaking larger tasks into smaller steps. Your wellness
            check-ins help Lenna adapt recommendations to your current
            state.
          </p>

          <div className="profile-note">
            Digital Twin data will be connected to real user data in the
            backend phase.
          </div>
        </section>
      </div>
    </main>
  );
}

export default DigitalTwin;