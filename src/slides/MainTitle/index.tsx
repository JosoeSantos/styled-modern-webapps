import React from "react";
import { TitleContainer, Credits, Title, Style } from "./styles";

const MainTitle = () => {
  return (
    <TitleContainer>
      <Title>Aplicações estilosas 💅</Title>
      <Credits>
        Made with <Style>style</Style> 💅 by
        <a href="https://github.com/arthurgmalheiros">Arthur</a> and
        <a href="https://github.com/JosoeSantos">Josoé</a>
      </Credits>
    </TitleContainer>
  );
};

export default MainTitle;
