import clsx from "clsx";
import { useContext } from "react";
import { Context } from "../context/Context";
import * as React from "react";
import Button from "@mui/material/Button";
//el weatherForm es el componente que muestra el formulario para buscar el clima
const WeatherForm = () => {
  const { getWeather, state } = useContext(Context);
  return (
    <div
      className={clsx(
        state.dayHour >= 6 && state.dayHour <= 18 && "card-form",
        state.dayHour >= 19 && "card-form-night",
        state.dayHour >= 1 && state.dayHour <= 5 && "card-form-night",
        typeof state.dayHour !== "number" && "card-form",
      )}
    >
      <form onSubmit={getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            autoFocus
            className="form-control"
            placeholder="Ingrese la ciudad"
          />
        </div>
        <Button className="btn-submit" type="submit" variant="contained">
          Buscar
        </Button>
      </form>
    </div>
  );
};

export default WeatherForm;
