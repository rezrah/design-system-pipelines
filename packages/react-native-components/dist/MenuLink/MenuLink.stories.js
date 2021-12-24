import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { MenuLink } from './MenuLink';
export default {
    title: 'UI Elements/MenuLink',
    component: MenuLink,
    args: {
        label: "Menu link with an icon that's really really long, but isn't truncated",
        onPress: action('Pressed'),
        icon: 'coffee',
    },
};
const Template = (args) => (React.createElement(View, null,
    React.createElement(MenuLink, Object.assign({}, args, { label: args.label, onPress: args.onPress }))));
export const Default = Template.bind({});
//# sourceMappingURL=MenuLink.stories.js.map