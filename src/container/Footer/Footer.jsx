import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            {/* <img src={images.hyosunMemoji1Thumbsup} alt="hyosun-memoji" />
                <img src={images.hyosunMemoji1Love} alt="hyosun-memoji" />
                */}
            {/* <h2 className="head-text">Get in touch</h2> */}
            <div className="app__footer-main">
                <div className="app__footer-goodbye">
                    <a
                        href="Hyosun-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.1 }}
                            src={images.hyosunMemoji1Love}
                            alt="hyosun-memoji"
                        />
                    </a>
                    <p>
                        Thank you for visitting
                        <br />
                        <span>Hyosun World!</span>
                    </p>
                </div>
                <div className="app__footer-cards">
                    <a href="mailto:hyosssssun@gmail.com">
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "rgba(0, 0, 0, 0.3) 0 0 10px",
                            }}
                            className="app__footer-card"
                        >
                            <BsEnvelopeFill />
                        </motion.div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hyosun-lee/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "rgba(0, 0, 0, 0.3) 0 0 10px",
                            }}
                            className="app__footer-card"
                        >
                            <BsLinkedin />
                        </motion.div>
                    </a>
                    <a
                        href="https://github.com/Hyosssssun"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "rgba(0, 0, 0, 0.3) 0 0 10px",
                            }}
                            className="app__footer-card"
                        >
                            <BsGithub />
                        </motion.div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
);
