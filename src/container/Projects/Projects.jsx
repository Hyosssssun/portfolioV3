import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        My <span>Portfolio</span>
      </h2>

      <div className='app__project-filter'>
        {[
          "All",
          "Team",
          "Personal",
          "HTML / CSS",
          "Sass",
          "Tailwind",
          "JavaScript",
          "React",
          "React Native",
          "PWA",
          "Node JS",
          "PostgreSQL",
          "Express",
          "Auth0",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`app__project-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__project-portfolio'
      >
        {filterProject.map((project, index) => (
          <div className='app__project-item app__flex' key={index}>
            <div className='app__project-img app__flex'>
              <img src={urlFor(project.imgUrl)} alt={project.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChilderen: 0.5,
                }}
                className='app__project-hover app__flex'
              >
                <a href={project.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileTap={{ scale: 1.1 }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileTap={{ scale: 1.1 }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__project-content app__flex'>
              <h4 className='bold-text'>{project.title}</h4>
              <p className='p-text desc' style={{ marginTop: 10 }}>
                {project.description}
              </p>
              <div className='mobile-link'>
                <a href={project.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0.7, 1] }}
                    whileTap={{ scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                    className='p-text app__flex'
                  >
                    <AiFillEye />
                    Demo
                  </motion.div>
                </a>
                <a href={project.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0.7, 1] }}
                    whileTap={{ scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                    className='p-text app__flex'
                  >
                    <AiFillGithub />
                    Code
                  </motion.div>
                </a>
              </div>
              {/* <div className="app__project-tag app__flex">
                              <p className="p-text">{project.tags.join(", ")}</p>
                          </div> */}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__projects"),
  "projects",
  "app__primarybg"
);
