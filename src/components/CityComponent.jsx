import React from "react";
import styled from "styled-components";

const ChooseCity = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
    color: white;
    background-color: black;
    cursor: pointer;
    &:hover {
      background-color: #999393;
      color: black;
    }
  }
`;

const HRline = styled.hr`
  height: 1px;
  width: 100%;
  color: #444141;
`;

const WeatherCity = (props) => {
  const { city, fetchWeather } = props;
  return (
    <>
      <HRline />
      <ChooseCity>Find Weather of your city</ChooseCity>
      <SearchBox onSubmit={fetchWeather}>
        <input placeholder="City" onChange={(e) => city(e.target.value)} />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default WeatherCity;
