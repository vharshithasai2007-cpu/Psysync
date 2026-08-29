import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Briefcase,
  Heart,
  UserRound,
  Sun,
  CloudSun,
  Moon,
  Dumbbell,
  Users,
  Check,
} from "lucide-react";

type Option = {
  label: string;
  icon: React.ReactNode;
};

const goals: Option[] = [
  { label: "Study & Productivity", icon: <BookOpen size={20} /> },
  { label: "Work", icon: <Briefcase size={20} /> },
  { label: "Personal Growth", icon: <UserRound size={20} /> },
  { label: "Health & Wellness", icon: <Heart size={20} /> },
];

const energyLevels = ["Low", "Moderate", "High"];

const productiveTimes: Option[] = [
  { label: "Morning", icon: <Sun size={20} /> },
  { label: "Afternoon", icon: <CloudSun size={20} /> },
  { label: "Evening", icon: <Moon size={20} /> },
];

const activities: Option[] = [
  { label: "Study", icon: <BookOpen size={18} /> },
  { label: "Work", icon: <Briefcase size={18} /> },
  { label: "Exercise", icon: <Dumbbell size={18} /> },
  { label: "Reading", icon: <BookOpen size={18} /> },
  { label: "Social", icon: <Users size={18} /> },
];

function Onboarding() {
  const navigate = useNavigate();

  const [goal, setGoal] = useState("");
  const [energy, setEnergy] = useState("");
  const [productiveTime, setProductiveTime] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const toggleActivity = (activity: string) => {
    setSelectedActivities((current) =>
      current.includes(activity)
        ? current.filter((item) => item !== activity)
        : [...current, activity]
    );
  };

  const handleFinish = () => {
    navigate("/dashboard");
  };

  return (
    <main className="onboarding-page">
      <div className="onboarding-card">

        <div className="onboarding-top">
          <div>
            <span className="onboarding-brand">PsySync</span>
            <p className="step-text">Step 1 of 4</p>
          </div>

          <div className="progress-track">
            <div className="progress-fill" />
          </div>
        </div>

        <div className="onboarding-header">
          <h1>Let's get to know you</h1>
          <p>
            Help PsySync understand your routine so we can create a more
            personalized experience.
          </p>
        </div>

        <section className="onboarding-section">
          <h2>What's your main goal?</h2>

          <div className="option-grid">
            {goals.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`option-card ${
                  goal === item.label ? "selected" : ""
                }`}
                onClick={() => setGoal(item.label)}
              >
                {item.icon}
                <span>{item.label}</span>

                {goal === item.label && (
                  <Check className="check-icon" size={18} />
                )}
              </button>
            ))}
          </div>
        </section>

        <section className="onboarding-section">
          <h2>How's your energy usually?</h2>

          <div className="three-options">
            {energyLevels.map((level) => (
              <button
                key={level}
                type="button"
                className={`small-option ${
                  energy === level ? "selected" : ""
                }`}
                onClick={() => setEnergy(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </section>

        <section className="onboarding-section">
          <h2>When are you most productive?</h2>

          <div className="three-options">
            {productiveTimes.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`time-option ${
                  productiveTime === item.label ? "selected" : ""
                }`}
                onClick={() => setProductiveTime(item.label)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </section>

        <section className="onboarding-section">
          <h2>What do you usually do?</h2>

          <div className="activity-grid">
            {activities.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`activity-option ${
                  selectedActivities.includes(item.label) ? "selected" : ""
                }`}
                onClick={() => toggleActivity(item.label)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </section>

        <button
          type="button"
          className="finish-button"
          onClick={handleFinish}
        >
          Finish setup
        </button>

      </div>
    </main>
  );
}

export default Onboarding;