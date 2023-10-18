import IconClockCircle from "./components/IconClock";
import IconMail from "./components/IconMail";
import IconPin from "./components/IconPin";
import IconTelephone from "./components/IconTelephone";
import UbiMap from "./components/Map";
import NosotrosStyles from "./styles/index.module.css";

const NosotrosSection = () => {
  return (
    <>
      <section id={NosotrosStyles.nosotrosWrapper}>
        <div className={NosotrosStyles.nosotrosInfo}>
          <p id={NosotrosStyles.about}>
            Somos el Templo,
            <br /> la distribuidora de bebidas con los mejores precios del
            mercado. <br />
            Realizamos envios a todo el país. Hacemos ventas al por mayor y por
            menor.
          </p>
          <div id={NosotrosStyles.infoPWrapper}>
            <p className={NosotrosStyles.infoP}>
              <IconPin height={"30px"} width={"30px"} /> Griveo 3353
            </p>
            <p className={NosotrosStyles.infoP}>
              <IconTelephone height={"30px"} width={"30px"} /> 1167203131
            </p>
            <p className={NosotrosStyles.infoP}>
              <IconMail height={"30px"} width={"30px"} />
              eltemplodevoto@gmail.com
            </p>
            <p className={NosotrosStyles.infoP}>
              <IconClockCircle height={"30px"} width={"30px"} />
              LUNES a VIERNES 9HS a 17HS.
            </p>
          </div>
        </div>
        <div className={NosotrosStyles.map}>
          <UbiMap />
        </div>
      </section>
    </>
  );
};

export default NosotrosSection;
