import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/Buttons";

const App = () => (
  <>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Hello World</SecondaryButton>
    <TertiaryButton>Hello World</TertiaryButton>
    <GlobalStyle />
  </>
  );

ReactDOM.render(<App />, document.querySelector('#root'));