import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Button from "../ui/Button";

const StyledSearch = styled.div`
  display: flex;
  gap: 8px;
`;

function Search({ inputValue, handleInputChange }) {
  return (
    <StyledSearch>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Find your city"
      />

      <Button>
        <FaSearch />
      </Button>
    </StyledSearch>
  );
}

export default Search;
