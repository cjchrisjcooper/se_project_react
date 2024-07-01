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
      />
    </div>
  );
};

export default Profile;
