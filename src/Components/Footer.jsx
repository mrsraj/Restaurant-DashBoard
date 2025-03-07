import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer-title">Delicious Bites</h2>
                <p className="footer-tagline">Serving happiness on a plate since 1998.</p>

                <div className="social-icons">
                    <a href="#" className="social-link">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="social-link">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="social-link">
                        <FaTwitter size={20} />
                    </a>
                </div>

                <nav className="footer-nav">
                    <ul className="footer-menu">
                        <li><a href="#" className="footer-link">Home</a></li>
                        <li><a href="#" className="footer-link">Menu</a></li>
                        <li><a href="#" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">Contact</a></li>
                    </ul>
                </nav>

                <p className="footer-copyright">&copy; {new Date().getFullYear()} Delicious Bites. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;