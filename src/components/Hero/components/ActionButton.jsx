import ButtonStyles from "../styles/actionButton.module.css"

const ActionButton = () => {
  return (
    <button type="button" title="Pedir Lista" className={ButtonStyles.buttonElement}>
        <p>LISTA DE PRECIOS</p>
    </button>)
  ;
};

export default ActionButton;
