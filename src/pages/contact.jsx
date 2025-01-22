import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

            <div className="page-content">
                <NavBar active="contact" />
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="title contact-title">
                            Awards & Publications
                        </div>

                        <div className="subtitle contact-subtitle">
                            <Card
                                body={
                                    <div className="works-body">
                                        <div className="awards">
                                            <img
                                                src="./awards.png"
                                                alt="facebook"
                                                className="work-image"
                                            />
                                            <div className="work-title">TCS Award 2020</div>
                                            <div className="work-subtitle">
                                                Star Performer of the Year
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                            <Card
                                body={
                                    <div className="works-body">
                                        <div className="awards">
                                            <img
                                                src="./ieee.png"
                                                alt="facebook"
                                                className="work-image"
                                            />
                                            <div className="work-title">IEEE VR 2024</div>
                                            <div className="work-subtitle">
                                                Peper published on VR-Engine: <br /> Training Post-Earthquake Damages in Building Structuren
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                            <Card
                                body={
                                    <div className="works-body">
                                        <div className="awards">
                                            <img
                                                src="./awards.png"
                                                alt="facebook"
                                                className="work-image"
                                            />
                                            <div className="work-title">TCS Award 2021</div>
                                            <div className="work-subtitle">
                                                Award for Service and Commitment
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;