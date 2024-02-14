import "../../App.css";
import "./Header.css";
const Header = ({ onAddModalClick }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="page__header header">
      <div className="header__logo">
        <img
          src={require("../../Images/wtwr°.svg").default}
          className="header__logo-image"
        ></img>
        <p className="header__date">{currentDate}, New York</p>
      </div>
      <div className="header__avatar">
        <button
          className="header__add-clothes-button"
          onClick={onAddModalClick}
        >
          + Add Clothes
        </button>
        <p className="header__name">Chris Cooper</p>
        <img
          src={require("../../Images/Avatar.svg").default}
          className="header__avatar-image"
        ></img>
      </div>
    </div>
  );
};

export default Header;
