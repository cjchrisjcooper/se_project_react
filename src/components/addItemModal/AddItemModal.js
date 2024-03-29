import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setWeather("");
      setUrl("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleFormSubmit}
      buttonText="add Garmet"
      title="Add Garment"
    >
      <label htmlFor="name" className="modal_label-text">
        Name
        <input
          type="text"
          id="name"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="name"
          className="modal__input"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="link" className="modal_label-text">
        Image
        <input
          type="url"
          name="link"
          id="link"
          minLength="1"
          maxLength="250"
          placeholder="Image-URL"
          className="modal__input"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-button-text" htmlFor="hot">
            Hot
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-button-text" htmlFor="warm">
            warm
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            onChange={handleWeatherChange}
          />
          <label className="modal__radio-button-text" htmlFor="cold">
            cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
