import "./card.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="item-card">
      <img
        src={item.link}
        className="item-card__image"
        onClick={() => onSelectCard(item)}
      ></img>
      <p className="item-card__text">{item.name}</p>
    </div>
  );
};

export default ItemCard;
