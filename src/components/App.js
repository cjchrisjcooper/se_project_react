import "./App.css";
import "./ModalWithForm/ModalWithForm.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { currentTemperatureUnitContext } from "./context/CurrentTemperatureUnitContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemModal from "./addItemModal/AddItemModal";
import Profile from "./profile/Profile.js";
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
  const [clothingItems, setClothingItems] = useState([]);
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

  const handleDeleteCard = () => {
    //Make some API call that deletes the card from the server

    //set the select card to an empty object
    setSelectedCard({});

    //filter through the clothing items using the filter() method

    //close the modal
    handleCloseModal();
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = (item) => {
    //call the api methods that you need to add an item
    console.log(item);
    setClothingItems([clothingItems, ...clothingItems]);
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
        <currentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onAddModalClick={handleCreateModal}
            currentLocation={currentLocation}
          />
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  currentWeather={temp}
                  onSelectCard={handleSelectedCard}
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <Main currentWeather={temp} onSelectCard={handleSelectedCard} />
              }
            ></Route>
          </Routes>
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectCard}
              onClose={handleCloseModal}
              handleDeleteCard={handleDeleteCard}
            />
          )}
          <Footer />
        </currentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}

export default App;
