import styled from "styled-components";
import { LiveEditor, LivePreview } from "react-live";

export const StyledEditor = styled(LiveEditor)`
  background: #282a36;
  caret-color: red;
`;

export const EditorContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 400px);
`;

export const StyledPreview = styled(LivePreview)`
  padding: 10px;
`;
