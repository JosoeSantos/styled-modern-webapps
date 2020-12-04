import React, { FunctionComponent, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { LiveProvider, LiveError } from "react-live";
import { EditorContainer, StyledEditor, StyledPreview } from "./styles";

const scope = { styled };

interface LiveEditProps {
  code: string;
}

const LiveEdit: FunctionComponent<LiveEditProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <LiveProvider code={props.code} scope={{ ...scope, css }} noInline={true}>
      <EditorContainer>
        <StyledEditor />
        <StyledPreview
          className="notranslate"
          key={mounted ? "preview-client" : "preview-ssr"}
        />
        <LiveError />
      </EditorContainer>
    </LiveProvider>
  );
};

export default LiveEdit;
