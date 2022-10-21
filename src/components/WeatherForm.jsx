import { useContext } from "react";
import { Context } from "../context/Context";
import * as React from "react";
import Button from "@mui/material/Button";

const WeatherForm = () => {
  const { getWeather } = useContext(Context);
  return (
    <div className="card-form">
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
