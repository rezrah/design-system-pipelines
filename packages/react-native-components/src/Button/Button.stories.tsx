import React from 'react';
import { View } from 'react-native';

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default {
  title: 'UI Elements/Button',
  component: Button,
  args: {
    variant: 'primary',
    size: 'default',
    label: 'Button',
    iconStart: '',
    onPress: action('Pressed'),
  },
} as Meta;

const Template: Story = (args) => (
  <View>
    <Button label={args.label} onPress={args.onPress} {...args} />
  </View>
);

export const Default = Template.bind({});
