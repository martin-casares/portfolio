import "./skillCard.css";

export const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img alt="title" src={iconUrl} />
      </div>

      <span>{title}</span>
    </div>
  );
};
