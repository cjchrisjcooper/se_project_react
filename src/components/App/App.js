import "./App.css";
import "../ModalWithForm/ModalWithForm.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItemModal from "../addItemModal/AddItemModal.js";
import Profile from "../profile/Profile.js";
import {
  getWeatherForcast,
  parseWeatherData,
  parseLocationData,
} from "../../utils/WeatherApi.js";
import { api } from "../../utils/constants.js";
// import Api from "../../utils/api.js";
// const api = new Api("http://localhost:3001");
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

  const handleDeleteCard = (card) => {
    //Make some API call that deletes the card from the server
    api
      .deleteClothingItem(card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((x) => x._id !== card._id));
      })
      .catch((res) => {
        console.log(`There is an error in the program: ${res}`);
      });
    //close the modal
    handleCloseModal();
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    //call the api methods that you need to add an item
    api
      .addNewClothingItems({ name, imageUrl, weather })
      .then((newClothingItem) => {
        console.log(newClothingItem);
        setClothingItems([newClothingItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((res) => {
        console.log(`There is an error in the program: ${res}`);
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
      .catch((res) => console.log(`There is an error in the program: ${res}`));
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <CurrentTemperatureUnitContext.Provider
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
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}

export default App;
