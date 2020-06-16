import styled from "styled-components";

const Button = styled.button`
  font-family: "IBM Plex Mono", monospace;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;
  font-size: 14px;
  line-height: 24px;
  height: 2.5rem;
  min-width: 2.5rem;
`;

const PrimaryButton = styled(Button)`
  background-color: #202E78;
  color: white;
`;

export default PrimaryButton;