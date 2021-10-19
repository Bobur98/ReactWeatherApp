import React from "react";
import styled from "styled-components";
import sunset from "../assets/icons/temp.svg";
import sunrise from "../assets/icons/temp.svg";
import humidity from "../assets/icons/humidity.svg";
import wind from "../assets/icons/wind.svg";
import pressure from "../assets/icons/pressure.svg";

import sunny from "../assets/icons/sunny.svg";
import night from "../assets/icons/night.svg";
import day from "../assets/icons/day.svg";
import cloudyNight from "../assets/icons/cloudy-night.svg";
import cloudy from "../assets/icons/cloudy.svg";
import perfectDay from "../assets/icons/perfect-day.svg";
import rain from "../assets/icons/rain.svg";
import rainNight from "../assets/icons/rain-night.svg";
import storm from "../assets/icons/storm.svg";

export const WeatherInfoIcons = {
  sunset: { sunset },
  sunrise: { sunrise },
  humidity: { humidity },
  wind: { wind },
  pressure: { pressure },
};

export const WeatherIcons = {
  "01d": `${sunny}`,
  "01n": `${night}`,
  "02d": `${day}`,
  "02n": `${cloudyNight}`,
  "03d": `${cloudy}`,
  "03n": `${cloudy}`,
  "04d": `${perfectDay}`,
  "04n": `${cloudyNight}`,
  "09d": `${rain}`,
  "09n": `${rainNight}`,
  "10d": `${rain}`,
  "10n": `${rainNight}`,
  "11d": `${storm}`,
  "11n": `${storm}`,
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styled.span`
  margin: 30px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;
const WeatherInfo = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value, img } = props;
  return (
    <InfoContainer>
      <InfoIcon src={img} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}:${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{" "}
          {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfo>Weather Info</WeatherInfo>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
          img={sunrise}
        />
        <WeatherInfoComponent
          name="humidity"
          value={weather?.main?.humidity}
          img={humidity}
        />
        <WeatherInfoComponent
          name="wind"
          value={weather?.wind?.speed}
          img={wind}
        />
        <WeatherInfoComponent
          name="pressure"
          value={weather?.main?.pressure}
          img={pressure}
        />
      </WeatherInfoContainer>
      {/* <WeatherCity /> */}
    </>
  );
};

export default WeatherComponent;
