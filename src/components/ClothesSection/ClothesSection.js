import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard";
const ClothesSection = ({
  cards,
  onCardClick,
  onAddNewCardClick,
  handleCardLike,
  isLoggedIn,
}) => {
  return (
    <div className="clothesSection">
      <div className="clothesSection__add-clothes">
        <p className="clothesSection__text">Your Items</p>
        <button
          className="clothesSection__add-clothes-button"
          onClick={onAddNewCardClick}
        >
          + Add New
        </button>
      </div>
      <div className="clothesSection__cards">
        {cards.map((item) => {
          return (
            <ItemCard
              item={item}
              onSelectCard={onCardClick}
              key={item._id}
              handleCardLike={handleCardLike}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
