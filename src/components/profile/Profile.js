import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../sidebar/SideBar";
import "./Profile.css";

const Profile = ({ currentWeather, onSelectCard }) => {
  return (
    <div className="Profile">
      <SideBar />
      <ClothesSection
        currentWeather={currentWeather}
        OnSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;
