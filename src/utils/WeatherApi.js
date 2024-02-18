// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 34.59;
const longitude = -112.36;
const APIkey = "50883aae06f1987b1488510a61b7f19b";

export const getWeatherForcast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const mainWeather = data.main;
  const mainTempurature = mainWeather && mainWeather.temp;
  return Math.ceil(mainTempurature);
};

export const parseLocationData = (data) => {
  const mainWeather = data;
  const mainWeatherLocation = mainWeather && mainWeather.name;
  console.log(mainWeatherLocation);
  return mainWeatherLocation;
};
