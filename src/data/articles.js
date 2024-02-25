import React from "react";

function article_1() {
    return {
        date: "July 2023 - Dec 2023",
        title: "KQED",
        description:
            "Led data transformation and automation efforts using MongoDB and Python, enhancing data efficiency, real-time synchronization, report generation in Tableau, and data security, resulting in improved performance, revenue growth, and increased data visualization engagement.",
        keywords: [
            "KQED",
        ],
        style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <div className="paragraph">
                        <ul>
                            <li>Spearheaded the strategic data modeling initiative, successfully migrating mission-critical business data from a legacy SQL-based CRM system to MongoDB, enhancing data efficiency and accessibility; reduced data retrieval time by 40% and improved overall system performance.</li>
                            <li>Innovatively devise and execute a dynamic data pipeline using Python by leveraging powerful libraries such as Pandas, NumPy, and DnsPython to enable smooth data synchronization between MongoDB, Tableau, and Google Sheets in real time.</li>
                            <li>Created a user-friendly, standalone Python application using Tkinter for automating report generation. It runs SQL queries based on report criteria and sends reports to stakeholders and pyInstaller for a user-friendly, executable solution.</li>
                            <li>Optimize weekly report updates by consolidating a total of 21 individual SQL scripts into a single and streamlined script and eliminate manual data entry by automating data population into Google Drive spreadsheets through the Google Console API. A scheduled task was created to execute this process on a weekly basis to enhance efficiency and accuracy.</li>
                            <li>Collaborate with the Freshworks team by employing the Freshworks CLI in conjunction with essential web technologies such as HTML and CSS to maintain a smooth retrieval and integration of data from RESTful APIs using Flask framework.</li>
                            <li>Spearheaded the creation of 20+ data-driven reports and dashboards in Tableau, leading to a 25% increase in data visualization engagement and contributing to a 10% growth in revenue through strategic insights.</li>
                            <li>Implemented encryption using Python's cryptography libraries, reducing the risk of data breaches by 40%, ensuring compliance with regulations, and earning customer trust through secure data storage and transmission.</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        ),
    };
}

function article_2() {
    return {
        date: "Oct 2017 - Nov 2021",
        title: "Tata Consultancy Services",
        description:
            "Led the transformation of Classic ASP applications to ASP.Net MVC, revitalized Windows application UI/UX using DevExpress, and ensured data privacy and efficient SDLC, while also demonstrating expertise in CI/CD, bug resolution, and Scrum methodology. Designed web applications, ensured code quality with unit testing, and introduced C# class libraries to enhance data access layers and data processing capabilities.",
        style: ``,
        keywords: [
            "Tata Consultancy Services",
        ],
        body: (
            <React.Fragment>
                <ul>
                    <li>Facilitated the migration of Classic ASP applications to the modern ASP.Net MVC framework and Angular.js to revitalize legacy systems within the JCPenney environment and upgraded legacy applications to the latest .Net Framework (4.8).</li>
                    <li>Spearheaded the design of user-friendly and intuitive UI/UX interfaces for Windows applications within the retail domain, focusing on ALDI SUeD by leveraging the powerful DevExpress framework to deliver exceptional user experiences.</li>
                    <li>Validated and thoroughly crafted SQL migration scripts for the Store Inventory Management application at ALDI SUD.</li>
                    <li>Safeguarded data privacy by skillfully implementing Data Privacy modules using the OAuth authentication protocol.</li>
                    <li>Established and deployed accurate Continuous Integration and Continuous Development (CI/CD) pipelines within Azure DevOps, which significantly enhanced the efficiency and agility of the software and deployment processes with clean code.</li>
                    <li>Demonstrated proficiency in identifying and resolving software bugs and incidents, ranging from minor to critical issues, consistently meeting SLAs and delivering accurate fixes.</li>
                    <li>Engaged in the complete Software Development Lifecycle (SDLC), from initial planning and analysis to design,  implementation, quality assurance, testing, and deployment. Acted as a backup Scrum Master for the team for 1.5 years, following Agile methodologies and Scrum practices to facilitate effective project management.</li>
                    <li>Conceptualized, designed, and brought to life a diverse array of web-based applications for the esteemed JCPenney by seamlessly blending front-end technologies such as HTML and CSS with accurate back-end API interactions.</li>
                    <li>Ensured code quality by crafting comprehensive unit test cases using Jest to foster a culture of software excellence.</li>
                    <li>Developed scheduled tasks and Windows services to orchestrate nightly script executions in live environments.</li>
                    <li>Drove innovation by introducing new C# class libraries to bolster the data access layers and integrate them with scripts through ADO.Net to ensure efficient data retrieval and manipulation. Managed data in various formats by working with the serialization and deserialization of XML and JSON data structures, enriching the versatility of data processing capabilities.</li>
                </ul>
            </React.Fragment>
        ),
    };
}

const myArticles = [article_1, article_2];

export default myArticles;