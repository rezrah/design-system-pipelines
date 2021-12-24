import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Story, Meta } from '@storybook/react';

import iconTypes from '@cat-home-experts/iconography/dist/icons.json';

import { IconLabel } from './IconLabel';

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30,
  },
});

export default {
  title: 'UI Elements/IconLabel',
  component: IconLabel,
  argTypes: {
    icon: {
      control: { disable: true },
    },
    label: {
      control: { disable: true },
    },
  },
  args: {
    isEmphasized: false,
    size: 36,
  },
} as Meta;

const Template: Story = (args) => (
  <View style={styles.iconContainer}>
    {(Object.keys(iconTypes) as Array<keyof typeof iconTypes>).map(
      (iconName) => (
        <View
          key={iconName}
          style={{
            marginBottom: 40,
            marginHorizontal: 5,
          }}
        >
          <IconLabel {...args} label={iconName} icon={iconName} />
        </View>
      ),
    )}
  </View>
);

export const Default = Template.bind({});
