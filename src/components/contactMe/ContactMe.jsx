import "./contactMe.css";
import { ContactInfoCard } from "./contactInfoCard/ContactInfoCard";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { ContactForm } from "./contactForm/ContactForm";
import { FaLinkedin } from "react-icons/fa6";

export const ContactMe = () => {
  return (
    <div className="contact-container" id="contact">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <div>
            <ContactInfoCard
              iconUrl={<MdOutlineEmail size={30} />}
              text="casaresrm@gmail.com"
            />
            <ContactInfoCard
              iconUrl={<FaGithub size={30} />}
              text="https://github.com/martin-casares"
            />
          </div>
          <div>
            <ContactInfoCard
              iconUrl={<FaLinkedin size={30} />}
              text="https://linkedin.com/in/martin-casares"
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
