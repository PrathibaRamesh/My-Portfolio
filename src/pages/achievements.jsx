import React, { useState, useEffect } from "react";
import "./styles/achievements.css";
import NavBar from "../components/common/navBar";

import { Helmet } from "react-helmet";

import INFO from "../data/user";
import SEO from "../data/seo";
import Logo from "../components/common/logo";

import "./styles/contact.css";

const Achievements = () => {
    const cards = [
        {
            front: {
                title: "Star Performer of the Year",
                subtitle: "Tata Consultancy Services (2021)",
                icon: "🌟",
                colorClass: "color1",
            },
            back: {
                description: "Recognized as the Star Performer of the Year for consistently exceeding expectations in project delivery, demonstrating exceptional problem-solving skills, and making significant contributions to the project's success.",
            },
        },
        {
            front: {
                title: "On the Spot Award",
                subtitle: "Tata Consultancy Services (2020)",
                icon: "💡",
                colorClass: "color3",
            },
            back: {
                description: "Awarded for providing a critical and timely solution to a high-priority issue that positively impacted the project's outcome. This recognition highlights quick thinking, innovation, and the ability to perform under pressure.",
            },
        },
        {
            front: {
                title: "Best Team Award",
                subtitle: "Tata Consultancy Services (2021)",
                icon: "👥",
                colorClass: "color2",
            },
            back: {
                description: "Received the Best Team Award for exemplary collaboration, delivering high-quality results on complex projects, and fostering a culture of trust and support within the team.",
            },
        },


        {
            front: {
                title: "Winner at Student Project Showcase",
                subtitle: "Annual Research Competition - SFSU",
                icon: "🏆",
                colorClass: "color3",
            },
            back: {
                description: "Won second place at the Annual Project Showcase for presenting an innovative project on Virtual Reality Training for Post-Earthquake Structural Damage Assessment.",
            },
        },
        {
            front: {
                title: "Service & Commitment Award",
                subtitle: "Tata Consultancy Services (2020)",
                icon: "🛡️",
                colorClass: "color2",
            },
            back: {
                description: "Honored with the Service & Commitment Award for completing 3 years of outstanding service, demonstrating dedication to organizational values, ensuring client satisfaction, and maintaining excellence in all deliverables throughout the year.",
            },
        },
        {
            front: {
                title: "Student Office Bearer",
                subtitle: "Department of Engineering - Anna University",
                icon: "🎖️",
                colorClass: "color1",
            },
            back: {
                description: "Served as the Student Office Bearer, representing the university department in various academic and extracurricular activities. Played a vital role in organizing events, mentoring peers, and fostering a positive academic environment.",
            },
        },
    ];
    const [stayLogo, setStayLogo] = useState(false);
    const [logoSize, setLogoSize] = useState(80);
    const [oldLogoSize, setOldLogoSize] = useState(80);

    const logoStyle = {
        display: "flex",
        position: stayLogo ? "fixed" : "relative",
        top: stayLogo ? "3vh" : "auto",
        zIndex: 999,
        border: stayLogo ? "1px solid white" : "none",
        borderRadius: stayLogo ? "50%" : "none",
        boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let scroll = Math.round(window.pageYOffset, 2);

            let newLogoSize = 80 - (scroll * 4) / 10;

            if (newLogoSize < oldLogoSize) {
                if (newLogoSize > 40) {
                    setLogoSize(newLogoSize);
                    setOldLogoSize(newLogoSize);
                    setStayLogo(false);
                } else {
                    setStayLogo(true);
                }
            } else {
                setLogoSize(newLogoSize);
                setStayLogo(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [logoSize, oldLogoSize]);

    const currentSEO = SEO.find((item) => item.page === "contact");
    return (
        <React.Fragment>
            <Helmet>
                <title>{`Contact | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>
            <div className="achievements-page">
                <NavBar active="achievements" />
                <h1 className="achievements-title">Notable Accomplishments</h1>
                <div className="achievements-container">
                    {/*<div className="homepage-logo-container">*/}
                    {/*    <div style={logoStyle}>*/}
                    {/*        <Logo width={logoSize} link={false} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            <div className="card-inner">
                                <div className={`card-front ${card.front.colorClass}`}>
                                    <div className="card-icon">{card.front.icon}</div>
                                    <h2>{card.front.title}</h2>
                                    <p>{card.front.subtitle}</p>
                                </div>
                                <div className="card-back">
                                    <p>{card.back.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <br />
            </div>
        </React.Fragment>
    );
};

export default Achievements;
