import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Typography } from './Typography';
const types = [
    'headingXXL',
    'headingXL',
    'headingL',
    'headingM',
    'headingS',
    'headingXS',
    'headingNav',
    'bodyRegular',
    'bodySmall',
];
export default {
    title: 'UI Elements/Typography',
    component: Typography,
    argTypes: {
        use: {
            control: { disable: true },
        },
        desktopUse: {
            control: { disable: true },
        },
    },
    args: {
        ellipsizeMode: 'tail',
    },
};
const Template = (args) => {
    const { width } = useWindowDimensions();
    return (React.createElement(View, null,
        React.createElement(Typography, { use: "headingXXL", desktopUse: "headingS" },
            "Desktop override on width: ",
            width),
        React.createElement(Typography, { use: "headingXXL", isBranded: true }, "Optional Branded Heading"),
        React.createElement(Typography, { use: "bodyRegular", isBrandedSecondary: true }, "Optional Branded Secondary body"),
        React.createElement(Typography, { isMuted: true, use: "bodyRegular" }, "Optional muted body"),
        React.createElement(Typography, { use: "bodyRegular", isEmphasized: true }, "Emphasized body Regular"),
        types.map((type) => {
            return (React.createElement(Typography, Object.assign({}, args, { key: type, use: type }), type));
        })));
};
export const Default = Template.bind({});
//# sourceMappingURL=Typography.stories.js.map