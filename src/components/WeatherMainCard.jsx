import styled from "styled-components";

const StyledWeatherMainCard = styled.main`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function WeatherMainCard() {
  return <StyledWeatherMainCard>Nesto</StyledWeatherMainCard>;
}

export default WeatherMainCard;
