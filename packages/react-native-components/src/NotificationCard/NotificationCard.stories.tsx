import React from 'react';

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { NotificationCard } from './NotificationCard';

export default {
  title: 'UI Elements/NotificationCard',
  component: NotificationCard,
  args: {
    message: 'This is a message',
    notification: 'This is a notification',
  },
} as Meta;

const Template: Story = (args) => (
  <NotificationCard
    {...args}
    message={args.message}
    notification={args.notification}
    onPress={action('Pressed')}
  />
);

export const Default = Template.bind({});
