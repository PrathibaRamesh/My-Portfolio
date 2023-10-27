import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./kqed.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">KQED Public Media</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">July 2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="./sfstate.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">San Francisco State University</div>
							<div className="work-subtitle">
								Graduate Research Assistant
							</div>
							<div className="work-duration">Jan 2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./tcs.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Tata Consultancy Services</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Oct 2017 - Nov 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;