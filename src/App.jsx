import { useState, useContext } from "react";
import clsx from "clsx";
import { Context } from "./context/Context";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const { state } = useContext(Context);
  console.log(state);

  return (
    <body
      className={clsx(
        state.temp > 15 && "summer",
        state.temp < 16 && state.temp >= 10 && "template",
        state.temp < 10 && "cold",
        typeof state.temp !== "number" && "summer",
      )}
    >
      <div>
        <div>
          <div className="col-md-4 mx-auto ">
            <WeatherInfo />
            <WeatherForm />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
