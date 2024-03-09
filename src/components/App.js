import "./App.css";
import "./ModalWithForm/ModalWithForm.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { currentTemperatureUnitContext } from "./context/CurrentTemperatureUnitContext";
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
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getWeatherForcast()
      .then((data) => {
        const currentTemp = parseWeatherData(data);
        const currentLocation = parseLocationData(data);
        console.log(currentTemp);
        setTemp(currentTemp);
        setCurrentLocation(currentLocation);
      })
      .catch((res) => {
        console.log(`There is an error in the program: ${res}`);
      });
  }, []);
  return (
    <div className="page">
      <div className="page__content">
        <currentTemperatureUnitContext.provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onAddModalClick={handleCreateModal}
            currentLocation={currentLocation}
          />
          <Main currentWeather={temp} onSelectCard={handleSelectedCard} />
          <Footer />
          {activeModal === "create" && (
            <ModalWithForm onClose={handleCloseModal}>
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
                  <label className="modal__radio-button-text" htmlFor="hot">
                    Hot
                  </label>
                </div>
                <div>
                  <input type="radio" id="warm" value="warm" name="weather" />
                  <label className="modal__radio-button-text" htmlFor="warm">
                    warm
                  </label>
                </div>
                <div>
                  <input type="radio" id="cold" value="cold" name="weather" />
                  <label className="modal__radio-button-text" htmlFor="cold">
                    cold
                  </label>
                </div>
              </div>
            </ModalWithForm>
          )}
          {activeModal === "preview" && (
            <ItemModal selectedCard={selectCard} onClose={handleCloseModal} />
          )}
        </currentTemperatureUnitContext.provider>
      </div>
    </div>
  );
}

export default App;
