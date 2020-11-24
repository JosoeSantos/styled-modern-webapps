import React from "react";
import { Header } from "@shared/components";
import { SlideContainer } from "@shared/components";

import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  
  background: rgb(104,44,254);
  background: linear-gradient(30deg, rgba(104,44,254,1) 0%, rgba(168,25,25,1) 100%);
`;

export default function Home() {
  return (
    <StyledPage>
      <SlideContainer>
        <Header />
        <h1>Hello World</h1>
      </SlideContainer>
    </StyledPage>
  );
}
