import "../ModalWithForm/ModalWithForm.css";
import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = isOwn
    ? "modal-content__delete-section"
    : "item__delete-button_hidden";

  return (
    <div className={`modal`}>
      <div className="modal-content">
        <button
          type="button"
          onClick={onClose}
          className="modal-content__close-button"
        ></button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal-content__image"
        />
        <div className="modal-content__captions">
          <div className="modal-content__description">
            <p>{selectedCard.name}</p>
            <p>Weather: {selectedCard.weather}</p>
          </div>
          <div className={isOwn}>
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
