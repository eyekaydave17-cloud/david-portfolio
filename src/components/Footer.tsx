
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              David<span>.</span>
            </a>

            <p>
              Software Developer, Web Enthusiast and Medical
              Laboratory Science professional-in-training,
              passionate about technology and innovation.
            </p>

            <span className="footer-tagline">
              Learn. Build. Grow.
            </span>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            {quickLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="footer-connect">
            <h3>Connect With Me</h3>

            <div className="footer-socials">
              <a
                href="https://github.com/eyekaydave17-cloud"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={21} />
              </a>

              <a
  href="https://www.linkedin.com/in/david-chinomso-ikechukwu-b36bb5379?utm_source=share_via&utm_content=profile&utm_medium=member_android/"
  target="_blank"
  rel="noopener noreferrer"
>
                <FaLinkedin size={21} />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebook size={21} />
              </a>

              <a
                href="mailto:eyekaydave17@gmail.com"
                aria-label="Email"
              >
                <Mail size={21} />
              </a>
            </div>

            <p>Let's create something meaningful together.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} David Chinomso Ikechukwu.
            All Rights Reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to Top <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
