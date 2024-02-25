import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							{/*<li*/}
							{/*	className={*/}
							{/*		active === "about"*/}
							{/*			? "nav-item active"*/}
							{/*			: "nav-item"*/}
							{/*	}*/}
							{/*>*/}
							{/*	<Link to="/about">About</Link>*/}
							{/*</li>*/}
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Work Experience</Link>
							</li>
							{/*<li*/}
							{/*	className={*/}
							{/*		active === "contact"*/}
							{/*			? "nav-item active"*/}
							{/*			: "nav-item"*/}
							{/*	}*/}
							{/*>*/}
							{/*	<Link to="/contact">Achievements</Link>*/}
							{/*</li>*/}
							<li
								className={
									active === "resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="https://drive.google.com/file/d/1ZvP40GosxCDeA6UALooO8dP1mgtzdTYV/view?usp=drive_link" target="_blank">Resume</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;