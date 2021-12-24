import React from 'react';
import { View } from 'react-native';

import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

import { MenuLink } from './MenuLink';

export default {
  title: 'UI Elements/MenuLink',
  component: MenuLink,
  args: {
    label:
      "Menu link with an icon that's really really long, but isn't truncated",
    onPress: action('Pressed'),
    icon: 'coffee',
  },
} as Meta;

const Template: Story = (args) => (
  <View>
    <MenuLink {...args} label={args.label} onPress={args.onPress} />
  </View>
);

export const Default = Template.bind({});
