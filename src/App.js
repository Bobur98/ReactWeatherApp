import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";
import { useState } from "react";
import axios from "axios";
import LogoImg from "./assets/icons/perfect-day.svg";

const API_KEY = `b7099cae6d605532946c3e69ada3422f
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: "Montserrat", sans-serif;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
      `
    );
    setWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <WeatherLogo src={LogoImg} />
      )}
      <CityComponent city={setCity} fetchWeather={fetchWeather} />
    </Container>
  );
}

export default App;
