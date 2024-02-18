import "../ModalWithForm/ModalWithForm.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal-content">
        <button
          type="button"
          onClick={onClose}
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
