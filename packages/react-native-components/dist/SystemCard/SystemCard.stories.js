import React from 'react';
import { action } from '@storybook/addon-actions';
import { SystemCard } from './SystemCard';
export default {
    title: 'UI Elements/SystemCard',
    component: SystemCard,
    args: {
        title: 'CTA title',
        description: 'Your expired PLI status is visible to customers',
        type: 'info',
        onPress: action('pressed'),
    },
};
const Template = (args) => (React.createElement(SystemCard, Object.assign({}, args, { title: args.title, description: args.description })));
export const Default = Template.bind({});
//# sourceMappingURL=SystemCard.stories.js.map