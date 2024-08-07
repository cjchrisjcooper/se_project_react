// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
import { request, checkResponse } from "./auth";
const latitude = 34.59;
const longitude = -112.36;
const APIkey = "50883aae06f1987b1488510a61b7f19b";

export const getWeatherForcast = () => {
  const weatherApi = request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  );
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const mainWeather = data.main;
  const mainTempurature = mainWeather && mainWeather.temp;
  const weather = {
    temperature: {
      F: `${Math.round(mainTempurature)}`,
      C: `${Math.round(((mainTempurature - 32) * 5) / 9)}`,
    },
  };
  return weather;
};

export const parseLocationData = (data) => {
  const mainWeather = data;
  const mainWeatherLocation = mainWeather && mainWeather.name;
  return mainWeatherLocation;
};
