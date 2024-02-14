import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./components/PreviewModal/ItemModal";
import {
  GetWeatherForcast,
  parseWeatherData,
} from "./components/utils/WeatherApi";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
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
    GetWeatherForcast().then((data) => {
      const currentTemp = parseWeatherData(data);
      console.log(currentTemp);
      setTemp(currentTemp);
    });
  }, []);
  return (
    <div className="page">
      <div className="page__content">
        <Header onAddModalClick={handleCreateModal} />
        <Main currentWeather={temp} onSelectCard={handleSelectedCard} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm handleOnModalClose={handleCloseCreateModal}>
            <label>
              Name
              <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              />
            </label>
            <label>
              Image
              <input
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image-URL"
              />
            </label>
            <p>Select the weather type:</p>
            <div>
              <div>
                <input type="radio" id="hot" value="hot" />
                <label>Hot</label>
              </div>
              <div>
                <input type="radio" id="warm" value="warm" />
                <label>warm</label>
              </div>
              <div>
                <input type="radio" id="cold" value="cold" />
                <label>cold</label>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectCard}
            handleOnModalClose={handleCloseCreateModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
