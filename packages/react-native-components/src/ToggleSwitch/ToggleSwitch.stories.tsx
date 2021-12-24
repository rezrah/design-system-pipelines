import React, { useState } from 'react';
import { View } from 'react-native';

import { Story, Meta } from '@storybook/react';

import { ToggleSwitch } from './ToggleSwitch';

export default {
  title: 'UI Elements/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    isChecked: {
      control: { disable: true },
    },
  },
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(true);

  return (
    <View>
      <ToggleSwitch
        {...args}
        isChecked={checked}
        onToggle={() => setChecked(!checked)}
      />
    </View>
  );
};

export const Default = Template.bind({});
