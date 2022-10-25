import clsx from "clsx";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../CSS/index.css";

const WeatherInfo = () => {
  const { state } = useContext(Context);
  console.log(state.dayHour);
  return (
    <div
      className={clsx(
        state.dayHour >= 6 && state.dayHour <= 18 && "card-container",
        state.dayHour >= 19 && "card-container-niht",
        typeof state.dayHour !== "number" && "card-container",
      )}
    >
      <div className="card-head">
        <h1>
          {state.temp}
          <span>°C</span>{" "}
        </h1>
      </div>
      <p>{state.city}</p>
      <p>País: {state.country}</p>
      <p>Descripción: {state.description}</p>
      <p>Humedad: {state.humidity}</p>
      hora: {state.hour}
      <p>Viento: {state.wind}</p>
    </div>
  );
};

export default WeatherInfo;
