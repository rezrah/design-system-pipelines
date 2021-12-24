import React from 'react';

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { StatisticCard } from './StatisticCard';

export default {
  title: 'UI Elements/StatisticCard',
  component: StatisticCard,
  args: {
    heading: 'Heading',
    subtitle: 'Subtitle',
    description: 'Description',
    buttonIcon: 'phone-fill',
    buttonLabel: 'Button',
    buttonOnPress: action('pressed'),
    buttonVariant: 'tertiary',
  },
} as Meta;

const Template: Story = (args) => {
  const additionalStatistics = [
    { label: 'Messages', value: 20 },
    { label: 'Reviews', value: 54 },
    { label: 'Tacos', value: 127 },
    { label: 'Empanadas', value: 12 },
  ];

  return (
    <StatisticCard
      {...args}
      heading={args.heading}
      additionalStatistics={additionalStatistics}
    />
  );
};

export const Default = Template.bind({});
