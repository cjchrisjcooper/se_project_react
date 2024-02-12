import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "add Garment",
  title = "Add Garment",
  handleOnModalClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal-content">
        <button
          type="button"
          onClick={handleOnModalClose}
          className="modal-content__close-button"
        ></button>
        <h3>{title}</h3>
        <form className="modal__form">
          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
