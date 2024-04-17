import styled from "styled-components";
import backgroundImage from "./data/img/clouds.jpg";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import WeatherMainCard from "./components/WeatherMainCard";
import WeatherDayCard from "./components/WeatherDayCard";

const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Keep the background fixed */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  align-items: center;
`;

const DayCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 46px;
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [tempInfo, setTempInfo] = useState([]);
  const [timeInfo, setTimeInfo] = useState([]);

  const apiAdress = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m&forecast_days=3`;

  const handleInputChange = (e) => setInputValue(e.target.value);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(apiAdress);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setWeatherData(data);
        // Move setting tempInfo and timeInfo here
        setTempInfo(data.hourly.temperature_2m);
        setTimeInfo(data.hourly.time);
      } catch (error) {
        console.error("Error fetching weather forecast:", error.message);
        setError("Failed to fetch weather forecast data");
      }
    };

    if (lat !== "" && lng !== "") {
      fetchWeather();
    }

    return () => {};
  }, [lat, lng, apiAdress]);

  /* console.log(weatherData.hourly.temperature_2m);
  console.log(weatherData.hourly.time); */

  return (
    <Container>
      <Search inputValue={inputValue} handleInputChange={handleInputChange} />
      <WeatherMainCard tempInfo={tempInfo} timeInfo={timeInfo} />
      <DayCardsContainer>
        <WeatherDayCard />
        <WeatherDayCard />
        <WeatherDayCard />
      </DayCardsContainer>
    </Container>
  );
}

export default App;
