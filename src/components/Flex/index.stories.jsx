import React from 'react';

import Index from './index';

export default {
  title: 'Flex',
  component: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Index {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
