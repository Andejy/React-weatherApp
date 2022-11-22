import { style } from "@mui/system";
import { createContext, useState } from "react";
import { wetherKey } from "../JS/Keya";
// el state es el estado inicial de la app y los datos de el clima
export const Context = createContext();
export const ContexProvider = (props) => {
  const [state, setState] = useState({
    temp: "",
    description: "",
    humidity: "",
    wind: "",
    city: "",
    country: "",
    hour: "",
    dayHour: "",
    error: null,
  });

  const getWeather = async (e) => {
    e.preventDefault();
    const cityValue = e.target.city.value;

    if (cityValue) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${wetherKey}&units=metric&lang=sp`;
      const apiResponse = await fetch(apiUrl);
      const data = await apiResponse.json();
      const dayHour = new Date(data.dt * 1000).getHours();

      let dateSpanish = new Date(data.dt * 1000).toLocaleString("es-ES", {
        timeStyle: "short",
        dateStyle: "short",
      });
      //el setState es el que cambia el estado de la app y los datos de el clima
      setState({
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        hour: dateSpanish,
        error: null,
        dayHour: dayHour,
      });
    } else {
      setState({
        error: "Por favor ingrese una ciudad",
      });
    }
  };

  //pasar el state y la funcion getWeather al provider
  return <Context.Provider value={{ getWeather, state }}>{props.children}</Context.Provider>;
};
