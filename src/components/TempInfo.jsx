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

function TempInfo({ tempInfo, timeInfo }) {
  console.log(tempInfo);
  console.log(timeInfo);
  return (
    <InfoArr>
      <StyledTempInfo>
        <div>time</div>
        <div>temp</div>
      </StyledTempInfo>
      <StyledTempInfo>
        <div>time</div>
        <div>temp</div>
      </StyledTempInfo>
    </InfoArr>
  );
}

export default TempInfo;
