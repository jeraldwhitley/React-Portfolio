import { useState } from 'react';
import "./css/Contact.css"

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleBlur = (field) => {
    const fieldError = validate();
    setErrors({ ...errors, [field]: fieldError[field] });
  };

  return (
    <section className= "contact-section">
      <h2>Contact</h2>
      <h3>Hello! If you want to connect with me, please feel free to use the form below. Or you can use my email at <i>jlwj2468@gmail.com</i></h3>
      <form className= "contact-form">
        <input
          placeholder="Name"
          onBlur={() => handleBlur('name')}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <span>{errors.name}</span>}

        <input
          placeholder="Email"
          onBlur={() => handleBlur('email')}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}

        <textarea
          placeholder="Message"
          onBlur={() => handleBlur('message')}
          onChange={e => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <span>{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
