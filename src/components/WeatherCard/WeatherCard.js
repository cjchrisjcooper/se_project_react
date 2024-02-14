import "../Main/Main.css";

const weatherOptions = [
  {
    url: require("../../images/day/Sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../../images/day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../images/day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/night/cloudy-night.svg").default,
    day: false,
    type: "cloudy-night",
  },
  {
    url: require("../../images/night/fog-night.svg").default,
    day: false,
    type: "fog-night",
  },
  {
    url: require("../../images/night/night.svg").default,
    day: false,
    type: "night",
  },
  {
    url: require("../../images/night/rainy-night.svg").default,
    day: false,
    type: "rainy-night",
  },
  {
    url: require("../../images/night/snow-night.svg").default,
    day: false,
    type: "snow-night",
  },
  {
    url: require("../../images/night/storm-night.svg").default,
    day: false,
    type: "storm-night",
  },
];

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
