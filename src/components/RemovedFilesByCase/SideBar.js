import "./SideBar.css";
import "../Header/Header.css";
//import avatar from "../../images/Avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
const SideBar = ({ onProfileEditClick, onLogOutClick }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sideBar">
      <div className="sideBar__profile">
        <img
          src={currentUser.avatar}
          className="header__avatar-image sidebar__avatar-image"
          alt="Avatar"
        ></img>
        <p className="header__name">{currentUser.name}</p>
      </div>
      <div className="sideBar__edit-profile-section">
        <button className="sideBar__button" onClick={onProfileEditClick}>
          Change Profile data
        </button>
      </div>
      <div className="sideBar__log-out-section">
        <button className="sideBar__button" onClick={onLogOutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
