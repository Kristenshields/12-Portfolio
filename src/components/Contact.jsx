import '../styles/Contact.css';

export default function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form submitted! Backend functionality coming soon.");
    };
  
    return (
      <section id="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }

  