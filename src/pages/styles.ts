import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;

  background: rgb(104, 44, 254);
  background: linear-gradient(
    30deg,
    var(--primary-color) 0%,
    var(--secondary-color)
  );
`;
