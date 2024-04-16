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
  justify-content: center;
  width: 60%;
`;

const IconContainer = styled.div`
  flex-grow: 1;
  justify-content: center;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-grow: 1;
`;

function WeatherMainCard({}) {
  return (
    <Container>
      <IconContainer>
        <FaCloudSun />
      </IconContainer>
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
