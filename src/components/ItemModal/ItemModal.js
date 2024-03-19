import "../ModalWithForm/ModalWithForm.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  return (
    <div className={`modal`}>
      <div className="modal-content">
        <button
          type="button"
          onClick={onClose}
          className="modal-content__close-button"
        ></button>
        <img src={selectedCard.imageUrl} alt={selectedCard.name} />
        <div className="modal-content__captions">
          <div className="modal-content__description">
            <p>{selectedCard.name}</p>
            <p>Weather: {selectedCard.weather}</p>
          </div>
          <div className="modal-content__delete-section">
            <button
              className="modal-content__delete-button"
              onClick={() => {
                handleDeleteCard(selectedCard);
              }}
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
