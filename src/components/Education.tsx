
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  BriefcaseBusiness,
} from "lucide-react";
import "./Education.css";

const educationItems = [
  {
    icon: <GraduationCap size={25} />,
    date: "Undergraduate Education",
    title: "Bachelor of Medical Laboratory Science (B.MLS)",
    institution: "Abia State University (ABSU)",
    description:
      "Academic training in medical laboratory science, clinical laboratory investigations, diagnostic procedures and the scientific principles behind disease detection.",
    status: "Academic Background",
  },
  {
    icon: <BookOpen size={25} />,
    date: "Professional Development",
    title: "Artificial Intelligence & Machine Learning",
    institution: "TechCrush",
    description:
      "Practical learning and project experience in Python, data preprocessing, predictive modelling and machine learning algorithms.",
    status: "Professional Training",
  },
  {
    icon: <Award size={25} />,
    date: "Continuous Learning",
    title: "Data Analytics & Data Science",
    institution: "TechCrush",
    description:
      "Developing skills in data analysis, visualization, statistical thinking and extracting meaningful insights from datasets.",
    status: "Ongoing Development",
  },
  {
    icon: <BriefcaseBusiness size={25} />,
    date: "Technology & Education",
    title: "Software Development and Technology Education",
    institution: "Personal Projects & TechField Academy",
    description:
      "Building practical software projects and supporting technology education through learning, collaboration and teaching.",
    status: "Practical Experience",
  },
];

const Education = () => {
  return (
    <section
      className="education section-padding"
      id="education"
    >
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>My academic journey</span>
          <h2>Education & <span>Experience</span></h2>
          <p>
            My academic foundation, technical training and
            continuous professional development.
          </p>
        </motion.div>

        <div className="education-timeline">
          {educationItems.map((item, index) => (
            <motion.div
              className="education-item"
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="education-icon">
                {item.icon}
              </div>

              <div className="education-card">
                <span className="education-date">
                  {item.date}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.institution}</h4>

                <p>{item.description}</p>

                <span className="education-status">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
