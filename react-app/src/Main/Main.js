import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import "./card-section.css";
import "./card-items.css";
import { defaultClothingItems } from "../utils/constants";
import { useMemo } from "react";

const Main = ({ currentWeather, onSelectCard }) => {
  const weatherType = useMemo(() => {
    if (currentWeather >= 86) {
      return "hot";
    } else if (currentWeather < 86 && currentWeather >= 66) {
      return "warm";
    } else if (currentWeather < 66) {
      return "cold";
    }
  }, [currentWeather]);

  console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="page__main main">
      <WeatherCard day={true} type="fog" weatherTemp={currentWeather} />
      <section className="card-section" id="card-section">
        <p className="card-section__weather-title">
          Today is {currentWeather}° F / You may want to wear:
        </p>
        <div className="card-section__card-items card-items">
          {filteredCards.map((item) => {
            return <ItemCard item={item} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
