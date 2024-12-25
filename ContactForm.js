import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Valida los campos antes de enviar el formulario
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "El nombre es obligatorio";
    if (!formData.email) errors.email = "El correo electrónico es obligatorio";
    if (!formData.message) errors.message = "El mensaje es obligatorio";
    return errors;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    // Si no hay errores, enviar los datos
    if (Object.keys(errors).length === 0) {
      console.log('Formulario enviado:', formData);
      // Aquí puedes agregar el código para procesar o enviar los datos a un servidor
    }
  };

  return (
    <div>
      <h2>Contacto</h2>
      <h3>Déjanos tus datos para que podamos contactarte</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Escribe tu correo electrónico"
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
          />
          {formErrors.message && <span className="error">{formErrors.message}</span>}
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
