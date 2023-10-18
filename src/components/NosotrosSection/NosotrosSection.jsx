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
          <p>
            Somos el Templo Bebidas,
            <br /> una de las distribuidoras mayorista más grande de Buenos
            Aires. <br />
            Realizamos envios a todo el país. Hacemos ventas al por mayor y por
            menor.
          </p>
          <p className={NosotrosStyles.infoP}><IconPin height={"20px"} width={"20px"}/>  Griveo 3353</p>
          <p className={NosotrosStyles.infoP}><IconTelephone/> 1167203131</p>
          <p className={NosotrosStyles.infoP}><IconMail/> eltemplodevoto@gmail.com</p>
        </div>
        <div className={NosotrosStyles.map}>
          <UbiMap />
        </div>
      </section>
    </>
  );
};

export default NosotrosSection;
