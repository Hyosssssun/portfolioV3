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
            <div className="app__about-introduction">
                <h2 className="head-text">
                    My <span>Skills</span>
                </h2>
                <div className="p-text">
                    <p>Welcome to Hyosun world!</p>
                    <p>
                        I am a ambitious full stack developer who just started
                        the first step into the IT field after finishing 16
                        weeks bootcamp at the School of Code!
                    </p>
                    <p>
                        I studied Japanese at university, worked in Japan for 3 years. and I came to the UK with working holiday visa. It has been already 4 years in the UK, I am enjoying my life here! 
                    </p>
                </div>
            </div>

            <div className="app__profiles">
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
                <button></button>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, "app__about"),
    "about",
    "app__whitebg"
);
