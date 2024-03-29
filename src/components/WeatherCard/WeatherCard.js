import "../Main/Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useMemo, useContext } from "react";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherUnit = currentTemperatureUnit === "F" ? "F" : "C";
  const weatherOption = weatherOptions.find((item) => {
    if (item.day === day && item.type === type) {
      return item;
    }
  });

  const imagesrcUrl = weatherOption.url || "";
  return (
    <section id="weather" className="main__weather">
      <p className="main-weather-info">
        {weatherTemp}°{weatherUnit}
      </p>
      <img src={imagesrcUrl} className="main-weather-image" alt={type}></img>
    </section>
  );
};

export default WeatherCard;
