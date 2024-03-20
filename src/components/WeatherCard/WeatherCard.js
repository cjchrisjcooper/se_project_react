import "../Main/Main.css";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useMemo, useContext } from "react";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  const weatherUnit = currentTemperatureUnit === "F" ? "F" : "C";
  const imagesrc = weatherOptions.filter((i) => {
    if (i.day === day && i.type === type) {
      return i;
    }
  });

  const imagesrcUrl = imagesrc[0].url || "";
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
