import { useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import emailjs from "emailjs-com";
import "./contactForm.css";

export const ContactForm = () => {
  const form = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      await Swal.fire({
        icon: "error",
        title: "Campos vacíos",
        text: "Por favor, completa todos los campos del formulario.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      await Swal.fire({
        icon: "error",
        title: "Email no valido",
        text: "Por favor, ingresa un email valido.",
      });
      return;
    }

    try {
      emailjs.sendForm(
        "service_5j3az7j",
        "template_mu6tyns",
        form.current,
        "dYHqmpMq_7MR0wfEq"
      );
      e.target.reset();
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setErrors({});

      await Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "El formulario se ha enviado correctamente.",
      });
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
      });
    }
  };
  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input
            name="firstname"
            type="text"
            placeholder="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            name="lastname"
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          name="email"
          type="text"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          type="text"
          name="message"
          rows={7}
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};
