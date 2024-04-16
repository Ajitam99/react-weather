import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  background-color: rgb(0, 0, 255, 0.3);
  justify-content: center;
`;

function WeatherDayCard({}) {
  return (
    <Container>
      <p>Day</p>
      <p>Icon</p>
      <p>Temp</p>
    </Container>
  );
}

export default WeatherDayCard;
