import "./styles.scss";
import { Link } from "react-router-dom";

import logo from "../../media/images/icons/ceramicssy_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--cols">
        <div>
          <img src={logo} alt="Ceramicssy logo" />
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul class="links">
            <li>
              {/* <Link to="/">Home</Link> */}
              <a href="/">Home</a>
            </li>
            <li>
              {/* <Link to="/about">About</Link> */}
              <a href="/about">About</a>
            </li>
            <li>
              {/* <Link to="/gallery">Gallery</Link> */}
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              {/* <Link to="/contact">Contact</Link> */}
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>More</h3>
          <h4>+355 69 000 0000&nbsp;&nbsp;|&nbsp;&nbsp;ceramicssy@gmail.com</h4>
          <div className="footer--enroll--link">
            {/* <Link to="/enroll">Enroll now&nbsp;&rarr;</Link> */}
            <a href="/enroll">Enroll now&nbsp;&rarr;</a>
          </div>
        </div>
      </div>
      <p className="credits">&copy;&nbsp;Megi Serjanaj, November 2022.</p>
    </div>
  );
};

export default Footer;
