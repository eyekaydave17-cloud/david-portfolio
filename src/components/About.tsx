
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Activity,
  Database,
} from "lucide-react";
import "./About.css";

const About = () => {
  const interests = [
    {
      icon: <Code2 size={25} />,
      title: "Software Development",
      description:
        "Building responsive and practical digital solutions using modern web technologies.",
    },
    {
      icon: <Database size={25} />,
      title: "Data Analytics",
      description:
        "Exploring data, discovering patterns, and transforming information into insights.",
    },
    {
      icon: <BrainCircuit size={25} />,
      title: "Artificial Intelligence",
      description:
        "Exploring machine learning and intelligent systems to solve real-world problems.",
    },
    {
      icon: <Activity size={25} />,
      title: "Healthcare Technology",
      description:
        "Connecting medical laboratory science with technology to improve healthcare.",
    },
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>Get to know me</span>
          <h2>About <span>Me</span></h2>
          <p>A little introduction about my journey and interests.</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Healthcare Meets Technology</h3>

            <p>
              I am David Chinomso Ikechukwu, a Medical Laboratory
              Science student at Abia State University with a
              growing passion for software development, data
              analytics, and artificial intelligence.
            </p>

            <p>
              My journey combines the scientific foundation of
              medical laboratory science with the creativity
              and problem-solving possibilities of technology.
              I am particularly interested in how data and
              intelligent systems can contribute to better
              healthcare decisions and real-world solutions.
            </p>

            <p>
              I continuously explore new technologies, work
              on practical projects, and develop my technical
              skills with the goal of becoming a versatile
              technology professional.
            </p>

            <div className="about-highlight">
              <span>My philosophy:</span>
              Learn. Build. Grow.
            </div>
          </motion.div>

          <motion.div
            className="about-interests"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {interests.map((item) => (
              <motion.div
                className="interest-card"
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="interest-icon">
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
