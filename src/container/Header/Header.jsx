import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
// import { DarkMode } from '../../components'
import "./Header.scss";

const Header = () => {
  return (
      <div id="home" className="app__header app__flex">
          <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__header-info"
          >
              <div className="app__header-welcome">
                  {/* <DarkMode /> */}
                  <h3>Hello, World! My name is</h3>
                  <h1 className="head-text">
                      Hyosun Lee, <br /> a <span>Full Stack Developer</span>
                  </h1>
                  <p className="p-text">
                      {/* I am originally from South Korea, based in Bedford. I believe programming is all
                      about communication. I am enthusiastic about what I do and
                      what I learn, also get energised by bringing
                      ideas into action. My ultimate ambition is to be a
                      software engineer where I am constantly challenging myself
                      to reach new heights. */}
                      Originally from South Korea, currently based in Bedford. I
                      believe programming is all about communication. I am
                      enthusiastic about what I do and what I learn, and also
                      get energised by bringing ideas into action.
                  </p>
              </div>
          </motion.div>

          <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__header-img"
          >
              <img
                  src={images.hyosunXmas}
                  alt="profile_bg"
                  className="hyosun-img"
              />
          </motion.div>
      </div>
  );
}

export default AppWrap(Header, 'home')