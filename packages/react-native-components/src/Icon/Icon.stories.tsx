import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Story, Meta } from '@storybook/react';

import iconTypes from '@cat-home-experts/iconography/dist/icons.json';

import { Icon } from './Icon';

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30,
  },
});

export default {
  title: 'UI Elements/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: { disable: true },
    },
  },
  args: {
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
            width: 128,
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <Icon {...args} name={iconName} size={args.size} />
        </View>
      ),
    )}
  </View>
);

export const Default = Template.bind({});
