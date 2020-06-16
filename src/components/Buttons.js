import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../utils";

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
  warning: ({ props }) => `
    background: none;
    color: ${props.status.warningColor};
    
    &:hover, &:focus {
      background-color: ${props.status.warningColorHover};
      outline: 3px solid ${props.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ props }) => `
    background-color: ${props.status.warningColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonWarning: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
  `,
  error: ({ props }) => `
    background: none;
    color: ${props.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.status.errorColorHover};
      outline: 3px solid ${props.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ props }) => `
    background-color: ${props.status.errorColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonError: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
  `,
  success: ({ props }) => `
    background: none;
    color: ${props.status.successColor};
    &:hover, &:focus {
      background-color: ${props.status.successColorHover};
      outline: 3px solid ${props.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ props }) => `
    background-color: ${props.status.successColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonSuccess: ({ props }) => `
    border: 2px solid ${props.status.warningColor};
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
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 1.5px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};

  &:hover {
    border-color:${props => props.theme.primaryHoverColor};
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:disabled {
    background: none;
    border-color: ${props => props.theme.disabled};
    color: ${props => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${props => props.theme.primaryColor};

  &:hover {
    background: none;
    color: ${props => props.theme.primaryHoverColor};
  }

  &:active {
    background-color: none;
    border-color: none;
    color: ${props => props.theme.primaryActiveColor};
  }

  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
