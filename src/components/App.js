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
import Api from "../utils/api.js";
function App() {
  const api = new Api("http://localhost:3001");
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

  const handleDeleteCard = (card) => {
    //Make some API call that deletes the card from the server
    api.DeleteClothingItem(card._id).then(() => {
      setClothingItems((cards) => cards.filter((x) => x._id !== card._id));
    });
    //close the modal
    handleCloseModal();
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = (item) => {
    //call the api methods that you need to add an item
    api.addNewClothingItems(item).then((newClothingItem) => {
      console.log(newClothingItem);
      setClothingItems([newClothingItem, ...clothingItems]);
    });
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

  //the app component will get all the clothing items in the mock server
  // and save them in the state variable "clothingItems"
  useEffect(() => {
    api
      .getClothingItems()
      .then((items) => {
        setClothingItems(items);
        console.log(clothingItems);
      })
      .catch((err) => console.log(err));
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
                  cards={clothingItems}
                  currentWeather={temp}
                  onCardClick={handleSelectedCard}
                  onAddNewCardClick={() => {
                    setActiveModal("create");
                  }}
                  onCardDelete={handleDeleteCard}
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <Main
                  cards={clothingItems}
                  currentWeather={temp}
                  onSelectCard={handleSelectedCard}
                />
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
