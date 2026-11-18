
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "TechField Academy",
    category: "EdTech Platform",
    description:
      "A technology education platform designed to empower learners with practical digital skills through structured courses, scholarship opportunities and online learning.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Paystack"],
    status: "In Development",
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "NYSC Connect",
    category: "Web Application",
    description:
      "A location-based platform designed to help Nigerian corps members discover accommodation, local services and useful settlement information in their service locations.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    status: "MVP Development",
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "Machine Learning Projects",
    category: "Artificial Intelligence",
    description:
      "A collection of practical machine learning experiments, including Titanic survival prediction, salary prediction and handwritten digit classification using the MNIST dataset.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    status: "Learning Projects",
    github: "https://github.com/eyekaydave17-cloud/backend-assignment-two.git",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section className="projects section-padding" id="projects">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>My recent work</span>
          <h2>Featured <span>Projects</span></h2>
          <p>
            Some of the projects I have built and worked on
            while developing my technical skills.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>
                <Code2 size={27} />
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub size={17} />
                    View Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
