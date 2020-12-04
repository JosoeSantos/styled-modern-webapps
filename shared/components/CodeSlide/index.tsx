import React, { FunctionComponent } from "react";
import LiveEdit from "../LiveEdit";
import ContentSlide from '../ContentSlide';

interface CodeSlideProps {
  code: string,
  title: string
}

const CodeSlide: FunctionComponent<CodeSlideProps> = (props) => {
  return (
    <ContentSlide title={props.title}>
      <LiveEdit code={props.code}/>
    </ContentSlide>
  );
};

export default CodeSlide;
