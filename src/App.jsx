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

  const handleInputChange = (e) => setInputValue(e.target.value);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  return (
    <Container>
      <Search inputValue={inputValue} handleInputChange={handleInputChange} />
      <WeatherMainCard />
      <DayCardsContainer>
        <WeatherDayCard />
        <WeatherDayCard />
        <WeatherDayCard />
      </DayCardsContainer>
    </Container>
  );
}

export default App;
