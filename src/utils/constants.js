import Api from "../utils/api";

export const defaultClothingItems = [
  {
    _id: 1,
    name: "Boot",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png?etag=0953a2ea59f1c6ebc832fabacdc9c70e",
  },
  {
    _id: 2,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 3,
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
  {
    _id: 4,
    name: "Dress",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png?etag=1f9cd32a311ab139cab43494883720bf",
  },
  {
    _id: 5,
    name: "Hoodie",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 6,
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 7,
    name: "Jeans",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png?etag=58345e8bef1ce5f95ac882e71d309e6c",
  },
  {
    _id: 8,
    name: "Loafers",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Loafers.png?etag=dc2d6e1ca7b297597406e35c40aef030",
  },
  {
    _id: 9,
    name: "Sandals",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png?etag=9bea85a77c0306586d2b71a33b626d41",
  },
  {
    _id: 10,
    name: "Scarf",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Scarf.png?etag=74efbee93810c926b5507e862c6cb76c",
  },
  {
    _id: 11,
    name: "Shorts",
    weather: "Hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png?etag=d728c496643f610de8d8fea92dd915ba",
  },
  {
    _id: 12,
    name: "Skirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png?etag=27a6bea7e1b63218820d615876fa31d1",
  },
  {
    _id: 13,
    name: "Sneakers",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 14,
    name: "Sunglasses",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sunglasses.png?etag=a1bced9e331d36cb278c45df51150432",
  },
  {
    _id: 15,
    name: "Sweatshirt",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png?etag=008a9674757bea2e0bdb31242e364be0",
  },
  {
    _id: 16,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
];

export const api = new Api("http://localhost:3001");

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
