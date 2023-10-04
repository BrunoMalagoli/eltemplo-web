import NavStyles from "../styles/index.module.css";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const ResponsiveNav = ({ isOpen, isMobile }) => {
  return (
    <div
      className={`${
        isOpen && isMobile
          ? NavStyles.nav_links_container
          : NavStyles.nav_links_container_desk
      }`}
    >
      <ul
        className={`${
          isOpen && isMobile ? NavStyles.nav_links : NavStyles.nav_links_desk
        }`}
      >
        <Fade delay={600}>
          <li>
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              duration={200}
              activeClass={NavStyles.active_li}
            >
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={200}
              activeClass={NavStyles.active_li}
            >
              <a>Nosotros</a>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={200}
              activeClass={NavStyles.active_li}
            >
              <a>Contacto</a>
            </Link>
          </li>
        </Fade>
      </ul>
    </div>
  );
};

export default ResponsiveNav;
