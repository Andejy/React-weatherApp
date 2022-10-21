import { style } from "@mui/system";
import { createContext, useState } from "react";
import { wetherKey } from "../JS/Keya";

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
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${wetherKey}&units=metric&lang=sp`;
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();
    const dayHour = new Date(data.dt * 1000).getHours();

    let dateSpanish = new Date(data.dt * 1000).toLocaleString("es-ES", {
      timeStyle: "short",
      dateStyle: "short",
    });

    console.log(dayHour);

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
  };

  //pasar el state y la funcion getWeather al provider
  return <Context.Provider value={{ getWeather, state }}>{props.children}</Context.Provider>;
};
