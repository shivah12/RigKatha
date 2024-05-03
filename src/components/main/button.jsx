
import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #3f4243, #812fce8f, #2e1a4486);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: white 1px solid;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
