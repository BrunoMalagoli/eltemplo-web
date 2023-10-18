import IconWhatsapp from "./components/WhatsappIcon"
import ContactoStyles from "./styles/index.module.css"
import IconMail from "./components/IconMail"
import { Element } from "react-scroll"
const Contacto = () =>{
    const mailtoHref =
    "mailto:eltemplodevoto@gmail.com?subject=Queremos Contactar!&body=Description";
    return(
        <Element name="contacto">
        <section id={ContactoStyles.contactWrapper}>
            <div className={ContactoStyles.contactItem}>
                <IconWhatsapp heigth={"170px"} width={"170px"}/>
                <button className={ContactoStyles.contactButtons}>Contactanos por Whatsapp</button>
            </div>
            <div className={ContactoStyles.contactItem}>
                <IconMail heigth={"200px"} width={"200px"}/>
                <button onClick={() => window.open(mailtoHref)} className={ContactoStyles.contactButtons}>Contactanos por Mail </button>
            </div>
        </section>
        </Element>
    )

}

export default Contacto