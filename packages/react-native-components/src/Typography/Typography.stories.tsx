import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import { Story, Meta } from '@storybook/react';

import { Typography, TypographyVariants } from './Typography';

const types = [
  'headingXXL',
  'headingXL',
  'headingL',
  'headingM',
  'headingS',
  'headingXS',
  'headingNav',
  'bodyRegular',
  'bodySmall',
];

export default {
  title: 'UI Elements/Typography',
  component: Typography,
  argTypes: {
    use: {
      control: { disable: true },
    },
    desktopUse: {
      control: { disable: true },
    },
  },
  args: {
    ellipsizeMode: 'tail',
  },
} as Meta;

const Template: Story = (args) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <Typography use="headingXXL" desktopUse="headingS">
        Desktop override on width: {width}
      </Typography>
      <Typography use="headingXXL" isBranded>
        Optional Branded Heading
      </Typography>
      <Typography use="bodyRegular" isBrandedSecondary>
        Optional Branded Secondary body
      </Typography>
      <Typography isMuted use="bodyRegular">
        Optional muted body
      </Typography>
      <Typography use="bodyRegular" isEmphasized>
        Emphasized body Regular
      </Typography>
      {types.map((type) => {
        return (
          <Typography {...args} key={type} use={type as TypographyVariants}>
            {type as TypographyVariants}
          </Typography>
        );
      })}
    </View>
  );
};

export const Default = Template.bind({});
