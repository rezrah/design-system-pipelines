import React from 'react';
import { View, StyleSheet } from 'react-native';
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
};
const Template = (args) => (React.createElement(View, { style: styles.iconContainer }, Object.keys(iconTypes).map((iconName) => (React.createElement(View, { key: iconName, style: {
        width: 128,
        alignItems: 'center',
        marginBottom: 40,
    } },
    React.createElement(Icon, Object.assign({}, args, { name: iconName, size: args.size })))))));
export const Default = Template.bind({});
//# sourceMappingURL=Icon.stories.js.map