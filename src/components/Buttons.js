import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

export const Button = styled.button`
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;
  font-size: ${typeScale.paragraph};
  line-height: 24px;
  height: 2.5rem;
  min-width: 2.5rem;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 2px solid ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
`;
