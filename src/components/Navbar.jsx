import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Navbar(props) {
	return (
		<div>
			<i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
			<header id="header" class="d-flex flex-column justify-content-center">

				<nav id="navbar" class="navbar nav-menu">
					<ul>
						<li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
						<li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
						<li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
					</ul>
				</nav>
			</header>
		
			<main id="main">
				<section id="hero" class="d-flex flex-column justify-content-center">
					<div class="container" data-aos="zoom-in" data-aos-delay="100">
						<h1>Prathiba Ramesh</h1>
						<p>MSCS - San Francisco State University, Class of 2024 | Ex-TCS </p>
						<div class="social-links">
							<a href="https://www.linkedin.com/in/prathiba-r-b19491157/" class="LinkedIn"><i class="bx bxl-linkedin"></i></a>
							<a href="https://github.com/PrathibaRamesh" class="GitHub"><i class="bx bxl-github"></i></a>
						</div>
						<br />
					</div>
				</section>
				<section id="about" class="about">
					<div class="container" data-aos="fade-up">

						<br />

						<div class="row">
							<div class="col-lg-4">
								<img src="assets/img/profile-img.jpg" class="img-fluid" alt="" />
							</div>
							<div class="col-lg-8 pt-4 pt-lg-0 content">
								<h3>Aspiring Software Engineer / Web Developer</h3>
								<br />
								<div class="row">
									<div class="col-lg-6">
										<ul>
											<li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Milpitas, CA 95035</span></li>
										</ul>
									</div>
									<div class="col-lg-6">
										<ul>
											<li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master of Science - Computer Science</span></li>
											<li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>prathibaramesh2120@gmail.com</span></li>
										</ul>
									</div>
								</div>
								<p>
									I always seek perfection in what I do, be it my personal or official work. Throughout my career, I have excelled in both technical & business aspects, also have satisfied all the customer requirements. I am more eager in learning on-trend technologies and putting them into implementations. I love to give the best optimal user experience and build responsive design principles that will ease the operations in any device. I always like to automate things, as that help us reduce repetitiveness. Since, I have worked in multiple retail products, I have good understanding in various operations such as supply chain management, Inventory management, staffing and merchandising.
								</p>
							</div>
						</div>

					</div>
				</section>
				<section id="skills" class="skills section-bg">
					<div class="container" data-aos="fade-up">

						<div class="section-title">
							<h2>Skills</h2>
							<p>My specialties include quick learning of new skills and programming languages, problem solving, website optimization and performance improvement. I am familiar with a variety of programming languages & tech frameworks such as below.</p>
						</div>

						<div class="row skills-content">

							<div class="col-lg-6">

								<div class="progress">
									<span class="skill">C# programming / .NET Framework <i class="val">60%</i></span>
									<div class="progress-bar-wrap">
										<ProgressBar now="60" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">ReactJS <i class="val">70%</i></span>
									<div class="progress-bar-wrap">
										<ProgressBar now="70" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">JavaScript <i class="val">60%</i></span>
									<div class="progress-bar-wrap">
										<ProgressBar now="60" />
									</div>
								</div>

							</div>

							<div class="col-lg-6">

								<div class="progress">
									<span class="skill">MySQL <i class="val">60%</i></span>
									<div class="progress-bar-wrap">
										<ProgressBar now="60" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">GitHub <i class="val">80%</i></span>
									<div class="progress-bar-wrap">
										<ProgressBar now="80" />
									</div>
								</div>

								<div class="progress">
									<span class="skill">Agile Methodologies <i class="val">80%</i></span>
									<div class="progress-bar-wrap">
										<ProgressBar now="80" />
									</div>
								</div>

							</div>

						</div>

					</div>
				</section>
				<section id="resume" class="resume">
					<div class="container" data-aos="fade-up">

						<div class="section-title">
							<h2>Resume</h2>
						</div>

						<div class="row">
							<div class="col-lg-6">
								<h3 class="resume-title">Summary</h3>
								<div class="resume-item pb-0">
									<h4>Prathiba Ramesh</h4>
									<p><em>Innovative and deadline-driven Software Engineer with 3+ years of experience developing and deploying web and windows based applications for retail businesses. Currently pursuing my Master's Degree to upgrade my programming skills and put in my knowledge to work for social and economical growing projects.</em></p>
									<ul>
										<li>1821 S Milpitas Blvd, Milpitas, CA 95035, USA</li>
										<li>+1 (408) 218-8018</li>
										<li>alice.barkley@example.com</li>
									</ul>
								</div>

								<h3 class="resume-title">Education</h3>
								<div class="resume-item">
									<h4>Master of Science, Computer Science</h4>
									<h5>Jan 2022 - Current &nbsp; &nbsp; &nbsp; GPA: 3.76/4</h5>
									<p><em>San Fransisco State University, CA</em></p>
									<p>Analysis of Algorithm, Software Engineering, Database Management Systems, Data Privacy, Human-Computer Interaction, Data visualization techniques</p>
								</div>
								<div class="resume-item">
									<h4>Bachelor of Engineering, Electronics & Instrumentation</h4>
									<h5>2013 - 2017 &nbsp; &nbsp; &nbsp; GPA: 3.43/4</h5>
									<p><em>Anna University, India</em></p>
									<p>Computer Programming and Architecture, Object Oriented Programming, Embedded Systems, Process Control </p>
								</div>
								<h3 class="resume-title">Core Competencies</h3>
								<div class="resume-item">
									<h4>Technologies & Frameworks</h4>
									<p><em>Javascript, .Net Framework, C#, Typescript, C++, MVC, Node.js, React.js, Web Services, Windows Services, REST API, jQuery, JSON, OAuth, Unity</em></p>
								</div>
								<div class="resume-item">
									<h4>Database</h4>
									<p><em>SQL Server, MySQL, MongoDB, SQLite</em></p>
								</div>
								<div class="resume-item">
									<h4>Software Tools</h4>
									<p><em>Git, Docker, MS Visual Studio, Jupyter Notebook, Jira, Azure DevOps, Google Cloud, SVN, MS Excel, MS Word</em></p>
								</div>
								<h3 class="resume-title">Projects</h3>
								<div class="resume-item">
									<h4>Online Food Monitoring App (iPlate) </h4>
									<p><em>Node.js, Express.js, React, MongoDB </em>| <a href="https://github.com/PrathibaRamesh/iPlate-Health-App/tree/main/iPlate_Application">GitHub</a></p>
									<ul>
										<li>	Served as a project team leader and developed a Web application used to monitor everyday food intake and track calories, suggest healthy eating.</li>
										<li>	Used the ReactJS for frontend development with ChartJS to visualize data in the form of a pie chart and used NodeJS for backend implementation to consume data using RESTful API call.</li>
										<li>	Used MongoDB database and Incorporated Bootstrap for better UI/UX responsive design</li>
										<li>	Deployment done on the open source google cloud platform.</li>
									</ul>
								</div>
								<div class="resume-item">
									<h4>SEAONC VR Engine </h4>
									<p><em>Unity, C# programming</em> | <a href="https://www.seaonc.org/news/609682/SEAONC-Post-Newsletter---California-Office-of-Emergency-Services.htm">Project Proposal Ref</a></p>
									<ul>
										<li>	Currently working on a VR project which will be used by Structural Engineers as a Training Environment for Post-Hazard Assessment.</li>
										<li>	Using C# scripts to make the movement of characters in the game visualization using Unity assets.</li>
									</ul>
								</div>
								<div class="resume-item">
									<h4>CSU Student Help Portal (CSUHelp) </h4>
									<p><em>Node.js, Express.js, React, MySQL, OpenAI</em> | <a href="https://github.com/PrathibaRamesh/CSC890-03-Fa22-Team02">GitHub</a></p>
									<ul>
										<li>	A web application which supports CSU students to get help online regarding their academic schedule, deadline and graduation requirements.</li>
										<li>	An AI powered chat bot is developed to clarify student queries in any language of their choice.</li>
										<li>	A GPT-3 model (developed by OpenAI) is used as our API to generate answers (completions) based on the question provided (prompt)</li>
										<li>	Used React for building frontend application and Node.js as backend scripting language to build the application.</li>
										<li>	DBMS used is MySQL and the application is hosted in Google cloud platform.   </li>

									</ul>
								</div>
							</div>
							<div class="col-lg-6">
								<h3 class="resume-title">Professional Experience</h3>
								<div class="resume-item">
									<h4>Graduate Teaching Assistant</h4>
									<h5>Aug 2022 - Present</h5>
									<p><em>San Francisco State University, CA </em></p>
									<ul>
										<li>Working as a TA for the following courses Software Engineering, DBMS, Web Development, Human-Computer Interaction.</li>
										<li>As part of this role, I support students with teaching and conducting office hours to clarify doubts regarding subject topics, help the instructor to organize lecture notes and grade the student assignment/projects.</li>
									</ul>
								</div>
								<div class="resume-item">
									<h4>Research Assistant</h4>
									<h5>Jan 2022 - August 2022</h5>
									<p><em>San Francisco State University, CA </em></p>
									<ul>
										<li>Developed a web app called the HVFQI for The Smith Kettlewell Eye Research Institute, which is an online clinical diagnostic tool designed to gather participant responses to over 50 questions and follow-up questions as part of pediatric clinical screening for visual impairment.</li>
										<li>Implemented a Docker Platform for developers to deploy their code and debug.</li>
										<li>Unit test case writing using Jest is done</li>
									</ul>
								</div>
								<div class="resume-item">
									<h4>Software Developer</h4>
									<h5>Oct 2017 - Nov 2021</h5>
									<p><em>Tata Consultancy Services, India </em></p>
									<ul>
										<li>Designed UI/UX for various retail-based Web and Windows application in ALDI SUED using .Net Framwork and DevExpress. </li>
										<li>Validated and developed SQL migration scripts for Store Inventory Management application. </li>
										<li>Handled minor to critical bugs and incidents on regular basis without SLA breach and response with accurate fix is provided. </li>
										<li>Engaged in end-to-end software development lifecycle starting from planning, analysis phase to implementation, Quality assurance, testing and deployment phase. </li>
										<li>Served as scrum master of the team for 1.5 years using Agile methodology and scrum practices. </li>
										<li>Migrated various Classic ASP applications to ASP.Net MVC framework & Angular.js.   </li>
										<li>Implemented new C# class libraries for data access layers and integrated with SB scripts using ADO.Net. </li>
										<li>Improved the safety integrity level of the application by imposing Data Privacy modules using OAuth authentication protocol</li>
									</ul>
								</div>
								<h3 class="resume-title">Awards & Achievements</h3>
								<div class="resume-item">
									<ul>
										<li>	Received Start Performer of the year Award and Award for Service & Commitment from TCS in 2020</li>
										<li>	On spot award and Best team award from TCS in 2021</li>
										<li>	Elected as an office Bearer- Treasurer for Department of Electronics and Instrumentation during Undergrad</li>
										<li>	Member of Rotaract Club SRM and Youth Red cross in the year 2015</li>
										<li>	Part of various Student organizations and organized both technical and non-technical events.     </li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</section>
			</main>
		</div>
	);
}

export default Navbar;