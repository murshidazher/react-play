import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, typeScale } from "../utils";

export const BUTTON_MODIFIERS = {
  small: () => `
    border-radius: 4px;
    height: 2.5rem;
    padding: 8px 12px;
    font-size: ${typeScale.helperText};
  `,
  large: () => `
    height: 3.8rem;
    padding: 8px 16px;
    font-size: ${typeScale.header5};
  `,
  warning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${defaultTheme.status.warningColor};
  `
};

export const Button = styled.button`
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;
  font-size: ${typeScale.paragraph};
  height: 3rem;
  min-width: 3rem;
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 1.5px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 2px solid ${defaultTheme.primaryColor};

  &:hover {
    border-color:${defaultTheme.primaryHoverColor};
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    background: none;
    border-color: ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};

  &:hover {
    background: none;
    color: ${defaultTheme.primaryHoverColor};
  }

  &:active {
    background-color: none;
    border-color: none;
    color: ${defaultTheme.primaryActiveColor};
  }

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
