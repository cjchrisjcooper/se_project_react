import "../Main/Main.css";

const weatherOptions = [
  {
    url: require("../../Images/day/Sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../Images/day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../../Images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../../Images/day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../Images/day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../Images/night/cloudy-night.svg").default,
    day: false,
    type: "cloudy-night",
  },
  {
    url: require("../../Images/night/fog-night.svg").default,
    day: false,
    type: "fog-night",
  },
  {
    url: require("../../Images/night/night.svg").default,
    day: false,
    type: "night",
  },
  {
    url: require("../../Images/night/rainy-night.svg").default,
    day: false,
    type: "rainy-night",
  },
  {
    url: require("../../Images/night/snow-night.svg").default,
    day: false,
    type: "snow-night",
  },
  {
    url: require("../../Images/night/storm-night.svg").default,
    day: false,
    type: "storm-night",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    if (i.day === day && i.type === type) {
      return i;
    }
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section id="weather" className="main__weather">
      <p className="main-weather-info">{weatherTemp}F°</p>
      <img src={imageSrcUrl} className="main-weather-image"></img>
    </section>
  );
};

export default WeatherCard;
