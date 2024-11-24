import { Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <p id="footer-motto">
          Building the future for developers all over the world.
        </p>

        <h1 id="footer-heading">Request More Information</h1>

        <Button size="lg" id="contact-us-btn">Contact Us</Button>

        <div id="icon-container">
          <div className="social-icon">
            <a>
              <FaGithub />
            </a>
          </div>
          <div className="social-icon">
            <a>
              <SiGmail />
            </a>
          </div>
          <div className="social-icon">
            <a>
              <FaLinkedin />
            </a>
          </div>
        </div>

        <p>&copy; 2024 codeBounty | All Rights Reserved</p>

        <p>
          Built by Bryce Berczik, Zander Kubajak, Jarvis Young, and Justin Hebenstreit.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
