import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../sidebar/SideBar";
import "./Profile.css";

const Profile = ({
  cards,
  onCardClick,
  onCardDelete,
  onAddNewCardClick,
  onProfileEditModal,
  onLogOut,
  handleCardLike,
  isLoggedIn,
}) => {
  return (
    <div className="Profile">
      <SideBar
        onProfileEditClick={onProfileEditModal}
        onLogOutClick={onLogOut}
      />
      <ClothesSection
        cards={cards}
        onCardDelete={onCardDelete}
        onCardClick={onCardClick}
        onAddNewCardClick={onAddNewCardClick}
        isLoggedIn={isLoggedIn}
        handleCardLike={handleCardLike}
      />
    </div>
  );
};

export default Profile;
