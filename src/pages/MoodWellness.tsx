import { useState } from "react";
import { Heart, Battery, Brain, CheckCircle2 } from "lucide-react";

const moods = [
  { label: "Great", emoji: "😄" },
  { label: "Good", emoji: "🙂" },
  { label: "Okay", emoji: "😐" },
  { label: "Low", emoji: "😔" },
  { label: "Stressed", emoji: "😫" },
];

function MoodWellness() {
  const [selectedMood, setSelectedMood] = useState("");
  const [energy, setEnergy] = useState(65);
  const [stress, setStress] = useState(30);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main className="wellness-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">DAILY CHECK-IN</p>
          <h1>Mood & Wellness</h1>
          <p>
            Take a moment to check in with yourself. Your wellbeing matters.
          </p>
        </div>
      </div>

      <div className="wellness-grid">
        <section className="wellness-card mood-card">
          <div className="section-icon">
            <Heart size={20} />
          </div>

          <h2>How are you feeling today?</h2>
          <p className="section-description">
            Choose the mood that best describes how you're feeling right now.
          </p>

          <div className="mood-options">
            {moods.map((mood) => (
              <button
                key={mood.label}
                type="button"
                className={`mood-option ${
                  selectedMood === mood.label ? "selected" : ""
                }`}
                onClick={() => setSelectedMood(mood.label)}
              >
                <span className="mood-emoji">{mood.emoji}</span>
                <span>{mood.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="wellness-card">
          <div className="wellness-title">
            <Battery size={20} />
            <h2>Energy level</h2>
            <strong>{energy}%</strong>
          </div>

          <p className="section-description">
            How much energy do you have right now?
          </p>

          <input
            className="wellness-slider"
            type="range"
            min="0"
            max="100"
            value={energy}
            onChange={(e) => setEnergy(Number(e.target.value))}
          />

          <div className="slider-labels">
            <span>Low</span>
            <span>High</span>
          </div>
        </section>

        <section className="wellness-card">
          <div className="wellness-title">
            <Brain size={20} />
            <h2>Stress level</h2>
            <strong>{stress}%</strong>
          </div>

          <p className="section-description">
            How stressed are you feeling?
          </p>

          <input
            className="wellness-slider"
            type="range"
            min="0"
            max="100"
            value={stress}
            onChange={(e) => setStress(Number(e.target.value))}
          />

          <div className="slider-labels">
            <span>Relaxed</span>
            <span>Very stressed</span>
          </div>
        </section>

        <section className="wellness-card journal-card">
          <h2>Anything on your mind?</h2>
          <p className="section-description">
            Add a short note about your day if you'd like.
          </p>

          <textarea
            placeholder="Write a few thoughts..."
            rows={5}
          />

          <button
            className="primary-action check-in-button"
            type="button"
            onClick={handleSubmit}
          >
            {submitted ? (
              <>
                <CheckCircle2 size={18} />
                Check-in saved
              </>
            ) : (
              "Submit check-in"
            )}
          </button>
        </section>
      </div>

      <section className="recent-mood">
        <div>
          <p className="eyebrow">YOUR RECENT MOOD</p>
          <h2>You're building awareness of your wellbeing.</h2>
        </div>

        <div className="recent-mood-values">
          <span>Mon 😊</span>
          <span>Tue 🙂</span>
          <span>Wed 🙂</span>
          <span>Thu 😐</span>
          <span>Today {selectedMood ? moods.find(
            (mood) => mood.label === selectedMood
          )?.emoji : "🙂"}</span>
        </div>
      </section>
    </main>
  );
}

export default MoodWellness;