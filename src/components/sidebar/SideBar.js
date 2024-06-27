import "./SideBar.css";
import "../Header/Header.css";
//import avatar from "../../images/Avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
const SideBar = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sideBar">
      <img
        src={currentUser.avatar}
        className="header__avatar-image sidebar__avatar-image"
        alt="Avatar"
      ></img>
      <p className="header__name">{currentUser.name}</p>
    </div>
  );
};

export default SideBar;
