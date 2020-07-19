# [react-play-styled](https://github.com/murshidazher/react-play-styled) [![npm](https://img.shields.io/npm/v/react-play-styled.svg?label=&color=0080FF)](https://github.com/murshidazher/react-play-styled/releases/tag/v1.0.5)

[![npm](https://img.shields.io/npm/v/react-play-styled.svg?style=flat-square)](https://www.npmjs.com/package/react-play-styled)
[![npm](https://img.shields.io/npm/dt/react-play-styled.svg?style=flat-square)](https://www.npmjs.com/package/react-play-styled)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://github.com/murshidazher/react-play-styled)

> A minimalistic react components library made with [styled-components](https://styled-components.com).

- **UI Component Library**— demonstrate [styled-components](https://styled-components.com) with [storybook](https://storybook.js.org/) and to build a CSS UI design system documentation.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Installing / Getting started](#installing--getting-started)
  - [Initial Configuration](#initial-configuration)
- [Developing](#developing)
- [Usage](#usage)
- [Components](#components)
- [Links](#links)
- [License](#license)
  
## Installing / Getting started

A quick introduction of the minimal setup you need to get a up & running.

```sh
$ npm i react-play-styled -S
```

or

```sh
$ yarn add react-play-styled
```

### Initial Configuration

> Note: every component has a peer dependencies. To use these components you also need to install these peer dependencies.

```sh
$ npm i styled-components@4.1.2 actions@1.3.0
react-spring@8.0.27 polished@3.4.4
styled-components-modifiers@1.2.5
```

## Developing

Play around with the project and view the documentation using:

```sh
$ npm run storybook
```

## Usage

To see which components are available take a look at the [components section](#components).

```jsx
// whatever components you need to import
import { Button } from 'react-play-styled';

export const myComponent = (props) => (
  <Button>Hello, World!</Button>
);
```

## Components

* Buttons Component
* Modals Component
* TextFields Component

## Links

A list of tools used to develop this project

- [react](https://reactjs.org/) - a `js` library for creating interactive UIs.
- [styled-components](https://www.styled-components.com/) - for `css-in-js` without worrying about specificity.
- [polished](https://polished.js.org/) - for `css` normalization.
- [styled-components-modifiers](https://github.com/Decisiv/styled-components-modifiers) - allows to pass `props` to `styled-components`.
- [react-spring](https://www.react-spring.io/) - for micro-interaction `css` animations using `js`.
- [storybook](https://storybook.js.org/docs/guides/quick-start-guide/) - used for document the code and components.

## License

[MIT](https://github.com/murshidazher/react-play-styled/blob/master/LICENSE) © Murshid Azher