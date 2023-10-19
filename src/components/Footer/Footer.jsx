import IconFacebook from "./components/IconFacebook";
import IconInstagram from "./components/IconInstagram";
import FooterStyles from "./styles/index.module.css";
import IconClockCircle from "../NosotrosSection/components/IconClock";
import IconPin from "./components/IconPin";
import IconTelephone from "../NosotrosSection/components/IconTelephone";
import IconMail from "../NosotrosSection/components/IconMail";

const Footer = () => {
  return (
    <footer id={FooterStyles.footerContainer}>
      <div id={FooterStyles.mediaContainer}>
        <h4>Seguinos</h4>
        <div>
            <IconInstagram height={"2rem"} width={"2rem"} />
            <IconFacebook height={"2rem"} width={"2rem"} />
        </div>
      </div>
      <div className={FooterStyles.infoWrapper}>
            <p className={FooterStyles.info}>
              <IconPin height={"20px"} width={"20px"} /> Griveo 3353, Devoto, CABA.
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
      <div className={FooterStyles.FooterLogo}>
        <img
          width={"150px"}
          height={"150px"}
          src="/eltemploLogo.jpg"
          alt="logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
