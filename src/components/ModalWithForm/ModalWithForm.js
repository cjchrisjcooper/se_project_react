import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  modalFormRedirect,
  modalRedirectButtonText,
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
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__button-wrapper">
            <button type="submit" className="modal__button">
              {buttonText}
            </button>
            <button
              className={`${
                title === "Sign Up" || "Log in" ? "button_visible" : ""
              }`}
              onClick={modalFormRedirect}
            >
              {title === "Sign Up" || "Log in" ? modalRedirectButtonText : ""}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
