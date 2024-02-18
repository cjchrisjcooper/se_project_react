import "../Main/Main.css";

import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imagesrc = weatherOptions.filter((i) => {
    if (i.day === day && i.type === type) {
      return i;
    }
  });

  const imagesrcUrl = imagesrc[0].url || "";
  return (
    <section id="weather" className="main__weather">
      <p className="main-weather-info">{weatherTemp}F°</p>
      <img src={imagesrcUrl} className="main-weather-image"></img>
    </section>
  );
};

export default WeatherCard;
