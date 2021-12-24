import React from 'react';
import { View } from 'react-native';

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TextLink } from './TextLink';

export default {
  title: 'UI Elements/TextLink',
  component: TextLink,
  args: {
    label: "Text link that's really really really just incredibly long",
    onPress: action('pressed'),
  },
} as Meta;

const Template: Story = (args) => (
  <View>
    <TextLink {...args} label={args.label} onPress={args.onPress} />
  </View>
);

export const Default = Template.bind({});
