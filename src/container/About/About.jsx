import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

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
            <div>
                <h2 className="head-text">
                    My <span>Skills</span>
                </h2>
            </div>

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
            <div className="app__about-skills-more">
                <p>
                    For further information regarding my skills and experience,
                    <br />
                    click the 'Read more'
                    button below to download my full resume.
                </p>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "rgba(0, 0,0,0.1) 0 0 25px",
                    }}
                    transition={{ duration: 0.5, type: "tween" }}
                    className="getCV"
                >
                    <a href="../../assets/WorkWithHyosun.pdf" target='_blank'>Read More</a>
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg"
);
