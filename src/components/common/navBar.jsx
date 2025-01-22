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
							<li
								className={
									active === "achievements"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/achievements">Achievements</Link>
							</li>
							<li
								className={
									active === "resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="https://drive.google.com/file/d/1Dvt8GHBCZoev7cbKlI6UFeKH9oAb0L-C/view" target="_blank">Resume</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;