import "./contactForm.css";

export const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input name="firstname" type="text" placeholder="Nombre" />
          <input name="lastname" type="text" placeholder="Apellido" />
        </div>

        <input name="email" type="text" placeholder="Correo" />
        <textarea type="text" name="message" rows={7} placeholder="Mensaje" />
        <button>Enviar</button>
      </form>
    </div>
  );
};
