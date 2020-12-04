import styled from "styled-components";

export interface StyledEmojiProps {
  rotate?: string;
}


export const StyledEmoji = styled.span`
  display: inline-block;
  transform-origin: center;

  transform: rotate(
    ${(props: StyledEmojiProps) => `${props.rotate || "0deg"}`}
  );
`;