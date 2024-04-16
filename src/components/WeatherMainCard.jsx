import styled from "styled-components";
import { FaCloudSun } from "react-icons/fa";

const Container = styled.main`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: center;
  background-color: rgb(0, 0, 255, 0.3);
  width: 60%;
`;

const InfoContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

function WeatherMainCard() {
  return (
    <Container>
      <FaCloudSun />
      <InfoContainer>
        <p>When</p>
        <p>City</p>
        <p>Temperature: XXX</p>
        <p>Weather</p>
      </InfoContainer>
    </Container>
  );
}

export default WeatherMainCard;
