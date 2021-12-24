import React from 'react';
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
};
const Template = (args) => {
    const additionalStatistics = [
        { label: 'Messages', value: 20 },
        { label: 'Reviews', value: 54 },
        { label: 'Tacos', value: 127 },
        { label: 'Empanadas', value: 12 },
    ];
    return (React.createElement(StatisticCard, Object.assign({}, args, { heading: args.heading, additionalStatistics: additionalStatistics })));
};
export const Default = Template.bind({});
//# sourceMappingURL=StatisticCard.stories.js.map