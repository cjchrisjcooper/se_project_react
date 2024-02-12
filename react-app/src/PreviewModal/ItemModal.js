import "../ModalWithForm/ModalWithForm.css";

const ItemModal = ({ selectedCard, handleOnModalClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal-content">
        <button
          type="button"
          onClick={handleOnModalClose}
          className="modal-content__close-button"
        ></button>
        <img src={selectedCard.link} />
        <p>{selectedCard.name}</p>
        <p>{selectedCard.weather}</p>
      </div>
    </div>
  );
};

export default ItemModal;
