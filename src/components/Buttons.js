import styled from "styled-components";

const primaryIndigo = "#202E78";

const Button = styled.button`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;
  font-size: 14px;
  line-height: 24px;
  height: 2.5rem;
  min-width: 2.5rem;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${primaryIndigo};
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${primaryIndigo};
  color: white;
`;

export const TertiaryButton = styled(Button)`
  background-color: ${primaryIndigo};
  color: white;
`;