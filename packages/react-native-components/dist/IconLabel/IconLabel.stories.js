import React from 'react';
import { View, StyleSheet } from 'react-native';
import iconTypes from '@cat-home-experts/iconography/dist/icons.json';
import { IconLabel } from './IconLabel';
const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 30,
    },
});
export default {
    title: 'UI Elements/IconLabel',
    component: IconLabel,
    argTypes: {
        icon: {
            control: { disable: true },
        },
        label: {
            control: { disable: true },
        },
    },
    args: {
        isEmphasized: false,
        size: 36,
    },
};
const Template = (args) => (React.createElement(View, { style: styles.iconContainer }, Object.keys(iconTypes).map((iconName) => (React.createElement(View, { key: iconName, style: {
        marginBottom: 40,
        marginHorizontal: 5,
    } },
    React.createElement(IconLabel, Object.assign({}, args, { label: iconName, icon: iconName })))))));
export const Default = Template.bind({});
//# sourceMappingURL=IconLabel.stories.js.map