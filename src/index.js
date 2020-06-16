import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/Buttons";

const App = () => (
  <>
    <PrimaryButton disabled>Hello World</PrimaryButton>
    <SecondaryButton disabled>Hello World</SecondaryButton>
    <TertiaryButton disabled>Hello World</TertiaryButton>
    <GlobalStyle />
  </>
  );

ReactDOM.render(<App />, document.querySelector('#root'));