import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { TextLink } from './TextLink';
export default {
    title: 'UI Elements/TextLink',
    component: TextLink,
    args: {
        label: "Text link that's really really really just incredibly long",
        onPress: action('pressed'),
    },
};
const Template = (args) => (React.createElement(View, null,
    React.createElement(TextLink, Object.assign({}, args, { label: args.label, onPress: args.onPress }))));
export const Default = Template.bind({});
//# sourceMappingURL=TextLink.stories.js.map