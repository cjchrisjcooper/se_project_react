import "./App.css";
import "../ModalWithForm/ModalWithForm.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Routes, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import { register, authorize } from "../../utils/auth.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile.js";
import {
  getWeatherForcast,
  parseWeatherData,
  parseLocationData,
} from "../../utils/WeatherApi.js";
import { api } from "../../utils/constants.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import LogInModal from "../LoginModal/LoginModal.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
// import Api from "../../utils/api.js";
// const userApi = new Api("http://localhost:3001");

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //this is the current suer. needs to be set when the user registers and passed to the header.
  const [currentUser, setCurrentUser] = useState({});
  const jwt = localStorage.getItem("jwt");
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleRegisterModal = () => {
    setActiveModal("register");
  };
  const handlelogInModal = () => {
    setActiveModal("logIn");
  };

  const handleEditProfileModal = () => {
    setActiveModal("EditProfile");
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
      .deleteClothingItem(card._id, jwt)
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
      .addNewClothingItems({ name, imageUrl, weather }, jwt)
      .then((newClothingItem) => {
        console.log(newClothingItem);
        setClothingItems([newClothingItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((res) => {
        console.log(`There is an error in the program: ${res}`);
      });
  };

  const handleUserLogInSubmit = (email, password) => {
    if (!email || !password) {
      console.log("You need to fill out the email and password fields.");
      return;
    }
    //call the api methods that you need to add an item
    authorize(password, email).then((res) => {
      console.log(res);
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        handleCloseModal();

        api
          .getUserInfo(res.token)
          .then((user) => {
            setCurrentUser(user);
            setIsLoggedIn(true);
          })
          .catch((res) => {
            console.log(`There is an error in the program: ${res}`);
          });
      }
    });
    console.log("we did it. You logged in");
  };

  const handleFormRedirect = () => {
    if (activeModal === "register") {
      setActiveModal("logIn");
    } else {
      setActiveModal("register");
    }
  };

  const handleUserRegistrationSubmit = (name, password, email, avatar) => {
    register(name, password, email, avatar)
      .then((user) => {
        console.log(user);
        setIsLoggedIn(true);
        setCurrentUser({ name, password, email, avatar });
        handleUserLogInSubmit(email, password);
      })
      .catch((res) => {
        console.log(`There is an error in the program: ${res}`);
      });
  };

  const handleProfileEdit = ({ name, avatar }) => {
    console.log("Edit profile submit button works");

    api
      .updateUserProfile({ name, avatar }, jwt)
      .then((user) => {
        console.log(user);
        handleCloseModal();
        setCurrentUser({ name, avatar });
      })
      .catch((res) => {
        console.log(`There is an error in the program: ${res}`);
      });
  };

  const handlelogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handleCardLike = (id, isLiked) => {
    console.log({ id, isLiked });
    if (!isLiked) {
      return api
        .likeClothingIem(id, jwt)
        .then((updatedCard) => {
          console.log(updatedCard.data);
          setClothingItems((cards) =>
            cards.map((item) =>
              item._id === cards._id ? updatedCard.data : item
            )
          );
        })
        .catch((res) => {
          console.log(`There is an error in the program: ${res}`);
        });
    } else {
      return api
        .unlikeClothingIem(id, jwt)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) =>
              item._id === cards._id ? updatedCard.data : item
            )
          );
        })
        .catch((res) => {
          console.log(`There is an error in the program: ${res}`);
        });
    }
  };

  useEffect(() => {
    getWeatherForcast()
      .then((data) => {
        const currentTemp = parseWeatherData(data);
        const currentLocation = parseLocationData(data);
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
      })
      .catch((res) => console.log(`There is an error in the program: ${res}`));
  }, []);

  //this doesnt work for some reason
  useEffect(() => {
    if (!activeModal) return;
    const handleEscCloseModal = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
      document.addEventListener("keydown", handleEscCloseModal);
      return () => {
        document.removeEventListener("keydown", handleEscCloseModal);
      };
    };
  }, [activeModal]);

  //use effect to check if there is a jwt token
  useEffect(() => {
    if (jwt) {
      api
        .getUserInfo(jwt)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((res) => {
          console.log(`There is an error in the program: ${res}`);
        });
    }
    if (!jwt) {
      return;
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      cards={clothingItems}
                      currentWeather={temp}
                      onCardClick={handleSelectedCard}
                      onAddNewCardClick={() => {
                        setActiveModal("create");
                      }}
                      onCardDelete={handleDeleteCard}
                      onLogOut={handlelogOut}
                      onProfileEditModal={handleEditProfileModal}
                      isLoggedIn={isLoggedIn}
                      handleCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/"
                element={
                  <Main
                    cards={clothingItems}
                    currentWeather={temp}
                    onSelectCard={handleSelectedCard}
                    handleCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
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
                isOpen={activeModal === "register"}
                onAddUser={handleUserRegistrationSubmit}
                handleModalRedirect={handleFormRedirect}
              />
            )}
            {activeModal === "logIn" && (
              <LogInModal
                handleCloseModal={handleCloseModal}
                isOpen={activeModal === "logIn"}
                onLogInUser={handleUserLogInSubmit}
                handleModalRedirect={handleFormRedirect}
              />
            )}

            {activeModal === "EditProfile" && (
              <EditProfileModal
                handleCloseModal={handleCloseModal}
                isOpen={activeModal === "EditProfile"}
                onEditProfileSubmit={handleProfileEdit}
                handleModalRedirect={handleFormRedirect}
              />
            )}
            <Footer />
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
