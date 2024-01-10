import "./contactInfoCard.css";

export const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">{iconUrl}</div>

      <p>{text}</p>
    </div>
  );
};
