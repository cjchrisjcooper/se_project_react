import "../App/App.css";
import "./Header.css";
import logo from "../../images/wtwr°.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
const Header = ({
  onAddModalClick,
  onRegisterModalClick,
  onLogInModalClick,
  currentLocation,
  currentlyLoggedIn,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page__header header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} className="header__logo-image" alt="logo"></img>
        </Link>

        <p className="header__date">
          {currentDate}, {currentLocation}
        </p>
      </div>

      <div className="header__avatar">
        <ToggleSwitch />
        <button
          className="header__add-clothes-button"
          onClick={onAddModalClick}
        >
          + Add Clothes
        </button>
        {currentlyLoggedIn === false && (
          <button
            className="header__add-clothes-button"
            onClick={onRegisterModalClick}
          >
            Sign Up
          </button>
        )}

        {currentlyLoggedIn === false && (
          <button
            className="header__add-clothes-button"
            onClick={onLogInModalClick}
          >
            Log In
          </button>
        )}
        <ProtectedRoute isLoggedIn={currentlyLoggedIn}>
          <Link to="/profile" className="header__link">
            <p className="header__name">Chris Cooper</p>
          </Link>
          <Link to="/profile" className="header__link">
            <img
              src={avatar}
              className="header__avatar-image"
              alt="Avatar"
            ></img>
          </Link>
        </ProtectedRoute>
      </div>
    </div>
  );
};

export default Header;
