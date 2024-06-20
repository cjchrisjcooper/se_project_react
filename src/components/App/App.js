import "./App.css";
import "../ModalWithForm/ModalWithForm.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Routes, Route, Navigate } from "react-router-dom";
import AddItemModal from "../addItemModal/AddItemModal.js";

import Profile from "../profile/Profile.js";
import {
  getWeatherForcast,
  parseWeatherData,
  parseLocationData,
} from "../../utils/WeatherApi.js";
import { api } from "../../utils/constants.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import LogInModal from "../LoginModal/LoginModal.js";
// import Api from "../../utils/api.js";
// const api = new Api("http://localhost:3001");
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleRegisterModal = () => {
    setActiveModal("register");
  };
  const handlelogInModal = () => {
    setActiveModal("logIn");
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
        //close the modal
        handleCloseModal();
      })
      .catch((res) => {
        console.log(`There is an error in the program: ${res}`);
      });
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
  const handleUserRegistrationSubmit = () => {
    //call the api methods that you need to add an item
    console.log("we did it. You Registerd");
  };

  const handleUserLogInSubmit = () => {
    //call the api methods that you need to add an item
    console.log("we did it. You logged in");
  };

  const handleFormRedirect = () => {
    if (activeModal === "register") {
      setActiveModal("logIn");
    } else {
      setActiveModal("register");
    }
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
            onRegisterModalClick={handleRegisterModal}
            onLogInModalClick={handlelogInModal}
            currentLocation={currentLocation}
            currentlyLoggedIn={isLoggedIn}
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
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddUser={handleUserRegistrationSubmit}
              handleModalRedirect={handleFormRedirect}
            />
          )}
          {activeModal === "logIn" && (
            <LogInModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddUser={handleUserLogInSubmit}
              handleModalRedirect={handleFormRedirect}
            />
          )}
          <Footer />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}

export default App;
