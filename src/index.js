import React from 'react';
import ReactDOM from 'react-dom';
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/Buttons.js";

const App = () => <PrimaryButton>Hello World</PrimaryButton>;

ReactDOM.render(<App />, document.querySelector('#root'));