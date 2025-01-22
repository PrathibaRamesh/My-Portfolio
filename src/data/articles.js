import React from "react";

function article_1() {
    return {
        date: "February 2024 - Present",
        title: "Cardinality.ai",
        subtitle: "Software Engineer II",
        icon: "././cardinality_ai_logo.jfif",
        description:
            "Developed custom components using Form.io and JavaScript to enhance application functionality and user interaction. Designed RESTful APIs with Node.js, tested with Postman, and optimized PostgreSQL views for efficient data handling. Built dynamic, responsive frontends with Angular, managing end-to-end development and code optimization. Collaborated with cross-functional teams to deliver scalable, high-performance software solutions.",
        keywords: [
            "Cardinality.ai",
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
                            <li>Engineered custom components using Form.io and JavaScript, enhancing the application's capabilities and user interaction.</li>
                            <li>Designed and implemented RESTful APIs using Node.js, facilitating efficient data exchange between the frontend and backend systems. Utilized Postman for API testing and validation.</li>
                            <li>Created and optimized PostgreSQL views and functions to streamline data retrieval and processing, ensuring data integrity and performance.</li>
                            <li>Led the development of a responsive and dynamic frontend using Angular, incorporating complex forms and interactive elements. Managed the entire development lifecycle, including code reviews, testing, and deployment.</li>
                            <li>Collaborated with cross-functional teams, including UX/UI designers, QA testers, and project managers, to deliver high-quality software solutions within project timelines.</li>
                            <li>Conducted performance tuning and optimization of both frontend and backend code to improve system responsiveness and scalability. Diagnosed and resolved technical issues, ensuring system stability and reliability through rigorous testing and debugging.</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        ),
    };
}

function article_2() {
    return {
        date: "July 2023 - Dec 2023",
        title: "KQED",
        subtitle: "Software Engineer Intern",
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

function article_3() {
    return {
        date: "Oct 2017 - Nov 2021",
        title: "Tata Consultancy Services",
        subtitle: "Software Engineer",
        description:
            "Led the transformation of Classic ASP applications to ASP.Net MVC, revitalized Windows application UI/UX using DevExpress, and ensured data privacy and efficient SDLC, while also demonstrating expertise in CI/CD, bug resolution, and Scrum methodology. Designed web applications, ensured code quality with unit testing, and introduced C# class libraries to enhance data access layers and data processing capabilities.",
        style: ``,
        keywords: [
            "Tata Consultancy Services",
        ],
        body: (
            <React.Fragment>
                <ul>
                    <li>Engineered and optimized front-end components with ReactJS and Javascript, employing state management libraries such as Redux to ensure efficient data flow and predictable application state.</li>
                    <li>Integrated RESTful APIs into React components using Axios, improving data retrieval efficiency and reducing page load by 20%.</li>
                    <li>Utilized React Hooks to manage component state and lifecycle events, enhancing the overall maintainability and readability of the codebase.</li>
                    <li>Implemented server-side logic and APIs using NodeJS, leading to a 30% reduction in response time and enhancing scalability for a user base that grew by 50%.</li>
                    <li>Implemented component-level testing using Jest and React Testing Library, leading to a 30% reduction in the number of post- release bugs related to front-end components. Implemented SaaS solutions to streamline workflow processes, enhancing system efficiency and ensuring seamless user experiences.</li>
                    <li>Successfully migrated 10+ Classic ASP applications to ASP.Net MVC and AngularJS, reducing response times by 20% and enhancing overall system efficiency.</li>
                    <li>Established and deployed accurate CI/CD pipelines within Azure DevOps, which significantly enhanced the efficiency and agility of the software, reducing deployment time by 40% with clean code.</li>
                    <li>Drove innovation by introducing new C# class libraries, utilizing ADO.Net to reinforce data access layers, and integrated Entity Framework for efficient data retrieval and manipulation.</li>
                    <li>Crafted and executed SQL migration scripts for the Store Inventory Management application, optimizing database queries and reducing query execution time by 30%.</li>
                    <li>Played a key role in the entire Software Development Lifecycle (SDLC), actively participating in Agile methodologies.</li>
                    <li>Leveraged Git version control to streamline collaboration, manage codebase efficiently, and ensure seamless code integration.</li>
                    <li>Conceptualized, designed, and brought to life a diverse array of web-based applications for the esteemed JCPenney by seamlessly blending front-end technologies such as HTML, CSS and Bootstrap with accurate back-end API interactions.</li>
                </ul>
            </React.Fragment>
        ),
    };
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;