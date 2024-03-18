import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../sidebar/SideBar";
import "./Profile.css";

const Profile = ({
  cards,
  currentWeather,
  onCardClick,
  onCardDelete,
  onAddNewCardClick,
}) => {
  return (
    <div className="Profile">
      <SideBar />
      <ClothesSection
        cards={cards}
        onCardDelete={onCardDelete}
        onCardClick={onCardClick}
        onAddNewCardClick={onAddNewCardClick}
      />
    </div>
  );
};

export default Profile;
