import "./styles.scss";

import { navLinks } from "../../routes";
import ceramicssy_icon from "../../media/images/icons/ceramicssy_icon.png";

const Navigation = () => {
  return (
    <div className="navbar--desktop">
      <nav>
        <ul>
          {navLinks.map((ele, i) => {
            return (
              <li key={i}>
                <a href={ele.link}>{ele.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <img
        className="navbar--icon"
        src={ceramicssy_icon}
        alt="Ceramicssy icon"
      />
    </div>
  );
};

export default Navigation;
