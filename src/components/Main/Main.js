import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import "./card-section.css";
import "./card-items.css";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ currentWeather, onSelectCard, cards }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const tempUnit = currentWeather?.temperature?.[currentTemperatureUnit] || 125;
  const weatherType = useMemo(() => {
    if (tempUnit >= 86) {
      return "hot";
    } else if (tempUnit < 86 && tempUnit >= 66) {
      return "warm";
    } else if (tempUnit < 66) {
      return "cold";
    }
  }, [tempUnit]);

  const weatherUnit = currentTemperatureUnit === "F" ? "F" : "C";

  const filteredCards = cards.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
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
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
