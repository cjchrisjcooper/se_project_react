import "./App.css";
import "./ModalWithForm/ModalWithForm.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal/ItemModal";
import {
  getWeatherForcast,
  parseWeatherData,
  parseLocationData,
} from "../utils/WeatherApi";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseCreateModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  useEffect(() => {
    getWeatherForcast().then((data) => {
      const currentTemp = parseWeatherData(data);
      const currentLocation = parseLocationData(data);
      console.log(currentTemp);
      setTemp(currentTemp);
      setCurrentLocation(currentLocation);
    });
  }, []);
  return (
    <div className="page">
      <div className="page__content">
        <Header
          onAddModalClick={handleCreateModal}
          currentLocation={currentLocation}
        />
        <Main currentWeather={temp} onSelectCard={handleSelectedCard} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm onClose={handleCloseCreateModal}>
            <label htmlFor="name">
              <p className="modal_label-text">Name</p>
              <input
                type="text"
                id="name"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="name"
                className="modal__input"
              />
            </label>
            <label htmlFor="link">
              <p className="modal_label-text">Image</p>
              <input
                type="url"
                name="link"
                id="link"
                minLength="1"
                maxLength="30"
                placeholder="Image-URL"
                className="modal__input"
              />
            </label>
            <p>Select the weather type:</p>
            <div>
              <div>
                <input type="radio" id="hot" value="hot" name="weather" />
                <label className="modal__radio-button-text">Hot</label>
              </div>
              <div>
                <input type="radio" id="warm" value="warm" name="weather" />
                <label>warm</label>
              </div>
              <div>
                <input type="radio" id="cold" value="cold" name="weather" />
                <label>cold</label>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectCard}
            onClose={handleCloseCreateModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
