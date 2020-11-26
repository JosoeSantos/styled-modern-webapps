import styled from "styled-components";

export const Container = styled.div`
  --height: 43vw;
  background-color: var(--background-color);
  height: var(--height);
  width: calc(calc(var(--height) / 3) * 4);
  justify-self: center;
  align-self: center;
  box-shadow: 5px 5px 15px 5px #0000004d;
  border-radius: 5px;
  overflow: hidden;
`;

export const Slide = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
