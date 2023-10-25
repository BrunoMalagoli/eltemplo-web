import IconWhatsapp from "./components/WhatsappIcon";
import ContactoStyles from "./styles/index.module.css";
import IconMail from "./components/IconMail";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
const Contacto = () => {
  const mailtoHref =
    "mailto:eltemplodevoto@gmail.com?subject=Queremos Contactar!&body=Description";
  const phoneNumber = +5491134281555;
  const message = "Hola, me gustaria hacer una consulta";
  return (
    <Element name="contacto">
      <section id={ContactoStyles.contactWrapper}>
        <div className={ContactoStyles.contactItem}>
          <IconWhatsapp heigth={"170px"} width={"170px"} />

          <Link
            className={ContactoStyles.link}
            target="_blank"
            to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
          >
            <button className={ContactoStyles.contactButtons}>
              Contactanos por Whatsapp
            </button>
          </Link>
        </div>
        <div className={ContactoStyles.contactItem}>
          <IconMail heigth={"200px"} width={"200px"} />
          <button
            onClick={() => window.open(mailtoHref)}
            className={ContactoStyles.contactButtons}
          >
            Contactanos por Mail{" "}
          </button>
        </div>
      </section>
    </Element>
  );
};

export default Contacto;
