import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email) newErrors.email = 'Email is required.';
    if (!form.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', form);
    }
  };

  return (
    <section className="container my-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name && 'is-invalid'}`}
            value={form.name}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            value={form.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`form-control ${errors.message && 'is-invalid'}`}
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.message}</div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

