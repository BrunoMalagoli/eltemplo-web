import IconFacebook from "./components/IconFacebook";
import IconInstagram from "./components/IconInstagram";
import FooterStyles from "./styles/index.module.css";
import IconClockCircle from "../NosotrosSection/components/IconClock";
import IconPin from "./components/IconPin";
import IconTelephone from "../NosotrosSection/components/IconTelephone";
import IconMail from "../NosotrosSection/components/IconMail";
import useOnResize from "../../hooks/useOnResize";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isSmall } = useOnResize();
  const phoneNumber = +541167203131;
  const message = "Hola, me gustaria tener mi pagina web";
  return (
    <>
      <footer id={FooterStyles.footerContainer}>
      <div className={FooterStyles.FooterLogo}>
          <img
            width={isSmall ? "100px" : "80px"}
            height={isSmall ? "100px" : "80px"}
            src="/eltemploLogo.jpg"
            alt="logo"
          />
        </div>
        <div id={FooterStyles.mediaContainer}>
          <h4>Seguinos</h4>
          <div>
            <a
              href="https://instagram.com/el.templo.distribuidora?igshid=MzRlODBiNWFlZA=="
              target="__blank"
            >
              <IconInstagram height={"2rem"} width={"2rem"} />
            </a>
            <a href="">
              <IconFacebook height={"2rem"} width={"2rem"} />
            </a>
          </div>
        </div>
        <div className={FooterStyles.infoWrapper}>
          <p className={FooterStyles.info}>
            <IconPin height={"20px"} width={"20px"} /> Griveo 3353, Devoto,
            CABA.
          </p>
          <p className={FooterStyles.info}>
            <IconTelephone height={"20px"} width={"20px"} /> 1167203131
          </p>
          <p className={FooterStyles.info}>
            <IconMail height={"20px"} width={"20px"} />
            eltemplodevoto@gmail.com
          </p>
          <p className={FooterStyles.info}>
            <IconClockCircle height={"20px"} width={"20px"} />
            LUNES a VIERNES 9HS a 17HS.
          </p>
        </div>

      </footer>
        <p id={FooterStyles.dev}>
      <Link 
            target="_blank"
            to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}>
          Desarrollado por Bruno Malagoli - Web Developer
      </Link>
        </p>
    </>
  );
};

export default Footer;
