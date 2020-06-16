// configure the decorators here - what we use with addons
import { addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  // beackground based on theme
  backgrounds: [
    { name: "Default theme", value: "#ffffff", default: true },
    { name: "Dark theme", value: "#050449" }
  ]
});

addDecorator(withKnobs);
addDecorator(withContexts(contexts));