import React from "react";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a
                href="https://www.linkedin.com/in/hyosun-lee/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a
                href="https://github.com/Hyosssssun"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div>
                    <BsGithub />
                </div>
            </a>
            <a
                href="mailto:hyosssssun@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div>
                    <BsEnvelopeFill />
                </div>
            </a>
        </div>
    );
};

export default SocialMedia;
