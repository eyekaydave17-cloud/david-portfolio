
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import "./Hero.css";

const Hero = () => {

const [imageLoaded, setImageLoaded] = useState(false);  
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">
            Hello, I'm
          </span>

          <h1>
            David Chinomso <span>Ikechukwu</span>
          </h1>

          <h2>
            Software Developer | Web Developer |
            Medical Laboratory Science Student
          </h2>

          <p>
            I am passionate about building technology-driven
            solutions that connect healthcare, data analysis,
            and software development. I enjoy learning,
            creating, and using technology to solve real-world
            problems.
          </p>

          <div className="hero-buttons">
  <a href="#projects" className="btn-primary">
    View My Projects
  </a>

  <a href="#contact" className="btn-secondary">
    Contact Me
  </a>

  <a
    href="/David-Chinomso-CV.pdf"
    download="David-Chinomso-CV.pdf"
    className="btn-secondary"
  >
    Download CV
  </a>
</div>

          <div className="hero-socials">
  <a
    href="https://github.com/eyekaydave17-cloud"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub size={22} />
  </a>

  <a
  href="https://www.linkedin.com/in/david-chinomso-ikechukwu-b36bb5379?utm_source=share_via&utm_content=profile&utm_medium=member_android/"
  target="_blank"
  rel="noopener noreferrer"
>
    <FaLinkedin size={22} />
  </a>
</div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="hero-image-circle">
  <motion.img
    src="https://res.cloudinary.com/tykvjzok/image/upload/v1795044652/styled-image_foojdd.png"
    alt="David Chinomso Ikechukwu"
    onLoad={() => setImageLoaded(true)}
    initial={{ opacity: 0 }}
    animate={{ opacity: imageLoaded ? 1 : 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  />
</div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-down">
        <ArrowDown size={22} />
      </a>
    </section>
  );
};

export default Hero;
