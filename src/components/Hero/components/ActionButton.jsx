import ButtonStyles from "../styles/actionButton.module.css"
import { Link } from 'react-router-dom';
const ActionButton = () => {
  const phoneNumber = +5491134281555 ;
  const message = "Hola, me gustaria consultar lista de precios actualizada"
  return (
    <Link target="_blank" to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}  >
    <button type="button" title="Pedir Lista" className={ButtonStyles.buttonElement}>
        <p>LISTA DE PRECIOS</p>
    </button>
    </Link>
    
    )
};

export default ActionButton;
