import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import "./card-section.css";
import "./card-items.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({
  currentWeather,
  onSelectCard,
  cards,
  handleCardLike,
  isLoggedIn,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const tempUnit = currentWeather?.temperature?.[currentTemperatureUnit] || 90;
  const weatherTypeFarenh = () => {
    if (tempUnit >= 86) {
      return "hot";
    } else if (tempUnit < 86 && tempUnit >= 66) {
      return "warm";
    } else if (tempUnit < 66) {
      return "cold";
    }
  };

  const weatherTypeCelc = () => {
    if (tempUnit >= 30) {
      return "hot";
    } else if (tempUnit < 30 && tempUnit >= 15) {
      return "warm";
    } else if (tempUnit < 15) {
      return "cold";
    }
  };

  const weatherUnit = currentTemperatureUnit === "F" ? "F" : "C";

  const filteredCards = cards.filter((item) => {
    if (currentTemperatureUnit === "F") {
      return item.weather.toLowerCase() === weatherTypeFarenh();
    } else {
      return item.weather.toLowerCase() === weatherTypeCelc();
    }
  });

  return (
    <main className="page__main main">
      <WeatherCard day={true} type="fog" weatherTemp={tempUnit} />
      <section className="card-section" id="card-section">
        <p className="card-section__weather-title">
          Today is {tempUnit}°{weatherUnit} / You may want to wear:
        </p>
        <div className="card-section__card-items card-items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
                handleCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
