import "./SideBar.css";
import "../Header/Header.css";
import avatar from "../../images/Avatar.svg";
const SideBar = () => {
  return (
    <div className="sideBar">
      <img
        src={avatar}
        className="header__avatar-image sidebar__avatar-image"
        alt="Avatar"
      ></img>
      <p className="header__name">Chris Cooper</p>
    </div>
  );
};

export default SideBar;
