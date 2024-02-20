import "../App.css";
import "./Header.css";
import logo from "../../images/wtwr°.svg";
import avatar from "../../images/Avatar.svg";
const Header = ({ onAddModalClick, currentLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page__header header">
      <div className="header__logo">
        <img src={logo} className="header__logo-image" alt="logo"></img>
        <p className="header__date">
          {currentDate}, {currentLocation}
        </p>
      </div>
      <div className="header__avatar">
        <button
          className="header__add-clothes-button"
          onClick={onAddModalClick}
        >
          + Add Clothes
        </button>
        <p className="header__name">Chris Cooper</p>
        <img src={avatar} className="header__avatar-image" alt="Avatar"></img>
      </div>
    </div>
  );
};

export default Header;
