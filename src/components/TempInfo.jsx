import { useState } from "react";
import styled from "styled-components";

const InfoArr = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow: scroll;
`;

const StyledTempInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function TempInfo({ weatherData }) {
  console.log(weatherData);

  return (
    <InfoArr>
      <StyledTempInfo>
        <div>time</div>
        <div>temp</div>
      </StyledTempInfo>
    </InfoArr>
  );
}

export default TempInfo;
