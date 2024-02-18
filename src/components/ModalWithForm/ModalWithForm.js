import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "add Garment",
  title = "Add Garment",
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal-content">
        <button
          type="button"
          onClick={onClose}
          className="modal-content__close-button"
        ></button>
        <h3>{title}</h3>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
