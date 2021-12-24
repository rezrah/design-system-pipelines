import React from 'react';
import { action } from '@storybook/addon-actions';
import { NotificationCard } from './NotificationCard';
export default {
    title: 'UI Elements/NotificationCard',
    component: NotificationCard,
    args: {
        message: 'This is a message',
        notification: 'This is a notification',
    },
};
const Template = (args) => (React.createElement(NotificationCard, Object.assign({}, args, { message: args.message, notification: args.notification, onPress: action('Pressed') })));
export const Default = Template.bind({});
//# sourceMappingURL=NotificationCard.stories.js.map