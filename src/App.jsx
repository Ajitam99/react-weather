import styled from "styled-components";
import backgroundImage from "./data/img/clouds.jpg";
import Search from "./components/Search";
import { useState } from "react";
import WeatherMainCard from "./components/WeatherMainCard";

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

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <Container>
      <Search inputValue={inputValue} handleInputChange={handleInputChange} />
      <WeatherMainCard />
    </Container>
  );
}

export default App;
