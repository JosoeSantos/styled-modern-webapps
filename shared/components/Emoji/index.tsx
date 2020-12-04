import React, { FunctionComponent } from "react";
import {StyledEmojiProps, StyledEmoji} from './styles';

const Emoji: FunctionComponent<StyledEmojiProps> = (props) => {
  const { children, ...otherProps } = props;
  return <StyledEmoji {...otherProps}>{children}</StyledEmoji>;
};

export default Emoji;
