
import { type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const subject = String(formData.get("subject"));
    const message = String(formData.get("message"));

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailtoLink =
      `mailto:eyekaydave17@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const contactDetails = [
    {
      icon: <Mail size={24} />,
      title: "Email Me",
      detail: "eyekaydave17@gmail.com",
      link: "mailto:eyekaydave17@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Me",
      detail: "+234 816 558 0623",
      link: "tel:+2348165580623",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      detail: "Chat with me",
      link: "https://wa.me/2348165580623",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      detail: "Nigeria",
      link: null,
    },
  ];

  return (
    <section className="contact section-padding" id="contact">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Let's connect</span>
          <h2>Contact <span>Me</span></h2>
          <p>
            Have a project, opportunity, or idea?
            I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's start a conversation</h3>

            <p className="contact-intro">
              Whether you're interested in working together,
              discussing technology, or exploring an opportunity,
              feel free to reach out.
            </p>

            <div className="contact-details">
              {contactDetails.map((item) => (
                <div className="contact-detail" key={item.title}>
                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>

                    {item.link ? (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("https")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.link.startsWith("https")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <span>{item.detail}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Send Me a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
