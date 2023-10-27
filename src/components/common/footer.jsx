import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-info">
                    <p>&copy; Prathiba Ramesh, {new Date().getFullYear()}</p>
                </div>
                <div className="footer-links">
                    <ul className="footer-nav-link-list">
                        <li className="footer-nav-link-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
	);
};

export default Footer;