
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BrainCircuit,
  Microscope,
  Globe,
  BarChart3,
  Palette,
  ShieldCheck,
} from "lucide-react";
import "./Skills.css";

const skillGroups = [
  {
    title: "Programming & Development",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Learning" },
      { name: "HTML & CSS", level: "Intermediate" },
      { name: "Node.js", level: "Learning" },
    ],
  },
  {
    title: "Data & Artificial Intelligence",
    skills: [
      { name: "Data Analytics", level: "Learning" },
      { name: "Machine Learning", level: "Learning" },
      { name: "Data Visualization", level: "Learning" },
      { name: "SQL", level: "Learning" },
    ],
  },
];

const professionalSkills = [
  {
    icon: <Microscope size={25} />,
    title: "Medical Laboratory Science",
  },
  {
    icon: <Database size={25} />,
    title: "Data Analysis",
  },
  {
    icon: <BrainCircuit size={25} />,
    title: "Machine Learning",
  },
  {
    icon: <Globe size={25} />,
    title: "Web Development",
  },
  {
    icon: <BarChart3 size={25} />,
    title: "Data Visualization",
  },
  {
    icon: <Palette size={25} />,
    title: "Problem Solving",
  },
  {
    icon: <ShieldCheck size={25} />,
    title: "Research & Critical Thinking",
  },
  {
    icon: <Code2 size={25} />,
    title: "Software Development",
  },
];

const Skills = () => {
  return (
    <section className="skills section-padding" id="skills">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>What I bring to the table</span>
          <h2>My <span>Skills</span></h2>
          <p>
            Technologies, professional knowledge, and abilities
            I am developing and applying.
          </p>
        </motion.div>

        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{group.title}</h3>

              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-label">
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-progress" />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="professional-skills">
          <h3>Professional & Core Competencies</h3>

          <div className="professional-skills-grid">
            {professionalSkills.map((skill, index) => (
              <motion.div
                className="professional-skill-card"
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div>{skill.icon}</div>
                <h4>{skill.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
