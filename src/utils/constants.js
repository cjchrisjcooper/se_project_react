import Api from "../utils/api";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.cjchris-demo.jumpingcrab.com"
    : "http://localhost:3001";

export const api = new Api(BASE_URL);

export const apiKey =
  "0f397cbb2cad52ec44837e479545b0a786edcf7663b38c908962571fdaf7a944";

export const weatherOptions = [
  {
    url: require("../images/day/Sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../images/night/cloudy-night.svg").default,
    day: false,
    type: "cloudy-night",
  },
  {
    url: require("../images/night/fog-night.svg").default,
    day: false,
    type: "fog-night",
  },
  {
    url: require("../images/night/night.svg").default,
    day: false,
    type: "night",
  },
  {
    url: require("../images/night/rainy-night.svg").default,
    day: false,
    type: "rainy-night",
  },
  {
    url: require("../images/night/snow-night.svg").default,
    day: false,
    type: "snow-night",
  },
  {
    url: require("../images/night/storm-night.svg").default,
    day: false,
    type: "storm-night",
  },
];

export const currentWeather = "88";
