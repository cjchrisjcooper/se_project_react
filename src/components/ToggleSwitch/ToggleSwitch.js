import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    currentTemperatureUnitContext
  );

  console.log();

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          className="switch__box"
          onChange={handleToggleSwitchChange}
        ></input>
        <span
          className={
            currentTemperatureUnit === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" && "switch__active"
          } `}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" && "switch__active"
          } `}
        >
          C
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
