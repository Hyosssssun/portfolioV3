import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { HiOutlineChevronRight } from "react-icons/hi";

import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => setAbouts(data));
    }, []);

    return (
        <>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__about-me"
            >
                <h2 className="head-text">
                    About <span>Me</span>
                </h2>
                <p>
                    When I turned 30, I wanted to try something new. So I
                    started teaching myself how to code, I enjoyed it so much
                    and that was the time that I fell in love with coding. Then
                    I started learning JavaScript and it made me think about
                    changing my career as a software engineer.
                </p>
                <p>
                    November 2021, I started this life changing 16 weeks
                    Full-Stack Software Development Bootcamp with School Of
                    Code. It has been such an amazing experience and I learned
                    so many things including how to build, test, and deploy
                    full-stack applications. Also I managed to learn how to work
                    remotely and effectively within a team as the course was
                    100% remote. A lot of emphasis was put on learning Agile
                    Principles which really paid off during the 1 week project,
                    and the final 4 weeks project. All of the learning and
                    building during the course was done using Pair-Programming
                    and Git.
                </p>
            </motion.div>

            <div className="app__about-skills">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "rgba(0, 0,0,0.1) 0 0 25px",
                        }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className="app__about-skills-item"
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
            <div className="app__about-more">
                <p>
                    For further information regarding my skills and experience,
                    <br className="br" /> click the cute little mini Hyosun
                    avatar to download my full resume.
                </p>
                <HiOutlineChevronRight className="arrow" />
                <div className="getCV">
                    <a href="../../assets/WorkWithHyosun.pdf" target="_blank">
                        <img src={images.hyosun} alt="cv" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg"
);
