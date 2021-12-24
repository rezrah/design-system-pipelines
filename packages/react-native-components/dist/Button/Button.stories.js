import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
export default {
    title: 'UI Elements/Button',
    component: Button,
    args: {
        variant: 'primary',
        size: 'default',
        label: 'Button',
        iconStart: '',
        onPress: action('Pressed'),
    },
};
const Template = (args) => (React.createElement(View, null,
    React.createElement(Button, Object.assign({ label: args.label, onPress: args.onPress }, args))));
export const Default = Template.bind({});
//# sourceMappingURL=Button.stories.js.map