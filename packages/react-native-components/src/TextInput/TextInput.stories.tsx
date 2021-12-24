import React from 'react';

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TextInput } from './TextInput';

export default {
  title: 'UI Elements/TextInput',
  component: TextInput,
  args: {
    label: 'Default',
    placeholder: 'Default',
    onChange: action('changed'),
    value: 'Change me',
  },
} as Meta;

const Template: Story = (args) => (
  <TextInput {...args} label={args.label} onChange={args.onChange} />
);

export const Default = Template.bind({});
