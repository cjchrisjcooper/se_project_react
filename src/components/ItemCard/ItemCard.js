import "./card.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";
const ItemCard = ({ item, onSelectCard, isLoggedIn, handleCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isCardLiked, setisCardLiked] = useState(
    item.likes.some((id) => id === currentUser._id)
  );

  const itemLikeButtonClassName = isCardLiked
    ? "item-card__like-button"
    : "item-card__like-button_active";
  const handleLike = () => {
    handleCardLike(item._id, isCardLiked);
    setisCardLiked(!isCardLiked);
    console.log(isCardLiked);
  };
  console.log(isCardLiked);
  return (
    <div className="item-card">
      <img
        src={item.imageUrl}
        className="item-card__image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      ></img>
      <div className="item-card__text-wrapper">
        <p className="item-card__text">{item.name}</p>
        <button
          className={
            isLoggedIn ? itemLikeButtonClassName : "item-card__no-display"
          }
          onClick={handleLike}
        ></button>
      </div>
    </div>
  );
};

export default ItemCard;
