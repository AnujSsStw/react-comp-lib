import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RickAndMorty from "./RickAndMorty";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "RickAndMorty",
  component: RickAndMorty,
} as ComponentMeta<typeof RickAndMorty>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RickAndMorty> = (args) => (
  <RickAndMorty />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
