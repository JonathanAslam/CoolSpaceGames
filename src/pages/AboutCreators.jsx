import React from "react";
import "../App.css"; // Ensure this imports the styles for flex-container and flex-item
import { BsLinkedin } from "react-icons/bs";

const AboutCreators = () => {
    const creators = [
        {
            name: "Jonathan Aslam",
            role: "Game Engineer, Web Developer",
            bio: "Passionate about building user-friendly interfaces and crafting seamless user experiences.",
            link: "https://www.linkedin.com/in/jonathanaslam/",
        },
        {
            name: "Dane Camacho",
            role: "Game Engieneer",
            bio: "Specializes in building robust and scalable server-side applications.",
            link: "https://www.linkedin.com/in/danejcamacho/",
        },
        {
            name: "Jacob Corletto ",
            role: "Web Developer",
            bio: "Focused on designing intuitive and visually appealing digital products.",
            link: "https://www.linkedin.com/in/jacob-corletto/",
        },
    ];

    return (
        <div className="padding">
            <h1 className="text-primary center-align">About The Devs</h1>
            <div className="grid flex-container">
                {creators.map((creator, index) => (
                    <article key={index} className="padding grey6 white-text flex-item">
                        <div className="padding grey-6">
                            <h5>{creator.name}</h5>
                            <h6 className="primary" style={{ right: '5px' }}>{creator.role}</h6> {/* Use the primary class */}
                            <p>{creator.bio}</p>
                            {/* LinkedIn Icon with hyperlink */}
                            <a
                                href={creator.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    marginTop: "10px",
                                    color: "white", // Adjust color to match your theme
                                    fontSize: "20px", // Adjust icon size
                                    borderRadius: "0", // Ensure no border radius
                                }}
                            >
                                <BsLinkedin />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default AboutCreators;