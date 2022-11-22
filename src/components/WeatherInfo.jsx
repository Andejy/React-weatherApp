import clsx from "clsx";
import { useContext } from "react";
import { Context } from "../context/Context";
import "../CSS/index.css";
// el weatherInfo es el componente que muestra los datos del clima

const WeatherInfo = () => {
  const { state } = useContext(Context);
  console.log(state.dayHour);
  return (
    <>
      <div
        className={clsx(
          state.dayHour >= 6 && state.dayHour <= 18 && "card-container",
          state.dayHour >= 19 && "card-container-niht",
          state.dayHour >= 1 && state.dayHour < 5 && "card-container-niht",
          typeof state.dayHour !== "number" && "card-container",
        )}
      >
        <div className="card-head">
          <h1>
            {state.temp}
            <span>°C</span>{" "}
          </h1>
          {state.error && (
            <div className="alert">
              <p>{state.error}</p>
            </div>
          )}
        </div>
        <p>{state.city}</p>
        <p>País: {state.country}</p>
        <p>Descripción: {state.description}</p>
        <p>Humedad: {state.humidity}</p>
        hora: {state.hour}
        <p>Viento: {state.wind}</p>
      </div>
    </>
  );
};

export default WeatherInfo;
