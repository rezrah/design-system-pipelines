import React from 'react';
import { View } from 'react-native';

import { Story, Meta } from '@storybook/react';

import { Fab } from './Fab';

export default {
  title: 'UI Elements/Fab',
  component: Fab,
  args: {
    icon: 'pencil',
  },
} as Meta;

const Template: Story = (args) => (
  <View>
    <Fab {...args} icon={args.icon} />
  </View>
);

export const Default = Template.bind({});
