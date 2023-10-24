import { useState } from "react";
import OurWorkStyles from "./styles/index.module.css";


const OurWork = () => {
  const [isOpenVentas, setIsOpenVentas] = useState(false);
  const [isOpenProductos, setIsOpenProductos] = useState(false);
  const [isOpenEnvios, setIsOpenEnvios] = useState(false);
  return (
    <section id={OurWorkStyles.workSection}>
      <div
        onClick={() => setIsOpenVentas(!isOpenVentas)}
        className={OurWorkStyles.workElements}
      >
        COMO VENDEMOS
      </div>
      {isOpenVentas ? (
        <div className={OurWorkStyles.textContainer}>
          <h3>Ventas por Pallet</h3>
          <p>
            En El Templo Bebidas, ofrecemos un servicio excepcional de ventas
            mayoristas por pallet, diseñado para satisfacer las necesidades
            específicas de nuestros clientes. Le brindamos la flexibilidad de
            seleccionar diversos productos de nuestro catálogo para armar su
            pallet personalizado. Esta opción le permite adaptar su compra según
            sus preferencias y necesidades comerciales. Además, al optar por la
            compra por pallet, disfrutará de precios más económicos en
            comparación con las compras individuales. En El Templo Bebidas,
            priorizamos su satisfacción y su rentabilidad, por lo que estamos
            listos para ayudarle a encontrar la mejor solución de abastecimiento
            al por mayor.{" "}
          </p>
          <h3>Ventas por menor</h3>
          <p>
            Ofrecemos una amplia selección de bebidas alcohólicas, que incluyen
            vinos, espumantes, cervezas y licores importados. Puede comprar
            nuestros productos por botella o en caja, adaptándonos a sus
            preferencias. Los espumantes y vinos se venden por caja cerrada,
            garantizando su calidad. Experimente la comodidad de nuestra
            selección diversa y encuentre lo que busca en nuestro local.
          </p>
        </div>
      ) : (
        ""
      )}
      <div
        onClick={() => setIsOpenProductos(!isOpenProductos)}
        className={OurWorkStyles.workElements}
      >
        QUE VENDEMOS
      </div>
      {isOpenProductos ? (
        <div className={OurWorkStyles.textContainer}>
          <p>
            En El Templo Bebidas, nos enorgullece ofrecer una extensa variedad
            de bebidas que abarca todas las gamas de precio, desde las opciones
            más asequibles hasta las más exclusivas. Nuestro compromiso es
            satisfacer los gustos y necesidades de todos nuestros clientes.
          </p>
          <h3>Espumantes y Vinos Selectos</h3>
          <p>
            Disfrute de nuestra colección de espumantes y vinos selectos. Desde
            las burbujas frescas y chispeantes hasta los vinos tintos y blancos
            de calidad excepcional, ofrecemos una diversidad de opciones para
            los amantes del buen vino.
          </p>
          <h3>Explora nuestros productos importados</h3>
          <p>
            En nuestra sección de importados, te invitamos a un viaje alrededor
            del mundo a través de nuestras bebidas exclusivas. Descubre una gama
            de whiskys de renombre, licores con sabores exóticos, vodka de
            calidad y mucho más. Cada botella que ofrecemos en esta selección ha
            sido cuidadosamente seleccionada por su singularidad y calidad, lo
            que te permite disfrutar de experiencias únicas. Desde destilados
            refinados hasta licores aromáticos, nuestros productos importados
            son una puerta a la diversidad de sabores que el mundo tiene para
            ofrecer.{" "}
          </p>
        </div>
      ) : (
        ""
      )}
      <div
        onClick={() => setIsOpenEnvios(!isOpenEnvios)}
        className={OurWorkStyles.workElements}
      >
        ENVIOS
      </div>
      {isOpenEnvios ? (
        <div className={OurWorkStyles.textContainer}>
          <p>
            Entendemos la importancia de la comodidad
            cuando se trata de recibir tus productos. Por eso, ofrecemos un
            servicio de envíos a lo largo y ancho del país, diseñado para
            satisfacer tus necesidades y preferencias. Con la flexibilidad de
            elegir el transportista que mejor se adapte a ti, te aseguramos que
            tus productos llegarán de manera segura y puntual a la ubicación de
            tu elección.
          </p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default OurWork;
