import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [toggleOn, setToggleOn] = useState(false)
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    const query = '*[_type == "abouts"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
    .then((data)=> setAbouts(data))

    client.fetch(skillsQuery).then((data) => {
        setSkills(data);
    });
  }, [])

  return (
      <>
          <h2 className="head-text">
              My <span>Skills</span>
          </h2>

          <div className="app__profiles" onClick={() => setToggleOn(!toggleOn)}>
              {abouts.map((about, index) => (
                  <motion.div
                      whileInView={{ opacity: 1 }}
                      whileHover={{
                          scale: 1.1,
                          boxShadow: "rgba(0, 0,0,0.1) 0 0 25px",
                      }}
                      transition={{ duration: 0.5, type: "tween" }}
                      className="app__profile-item"
                      key={about.title + index}
                  >
                      <img src={urlFor(about.imgUrl)} alt={about.title} />

                      <h2 className="bold-text" style={{ marginTop: 20 }}>
                          {about.title}
                      </h2>
                      <p className="p-text" style={{ marginTop: 10 }}>
                          {about.description}
                      </p>
                  </motion.div>
              ))}
          </div>
          <div className="app__skills-container">
              <motion.div className="app__skills-list">
                  {skills?.map((skill) => (
                      <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-item app__flex"
                          key={skill.name}
                      >
                          <div
                              className="app__flex"
                              style={{ backgroundColor: skill.bgColor }}
                          >
                              <img src={urlFor(skill.icon)} alt={skill.name} />
                          </div>
                          <p className="p-text">{skill.name}</p>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </>
  );
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');