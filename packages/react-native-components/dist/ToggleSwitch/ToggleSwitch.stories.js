import React, { useState } from 'react';
import { View } from 'react-native';
import { ToggleSwitch } from './ToggleSwitch';
export default {
    title: 'UI Elements/ToggleSwitch',
    component: ToggleSwitch,
    argTypes: {
        isChecked: {
            control: { disable: true },
        },
    },
};
const Template = (args) => {
    const [checked, setChecked] = useState(true);
    return (React.createElement(View, null,
        React.createElement(ToggleSwitch, Object.assign({}, args, { isChecked: checked, onToggle: () => setChecked(!checked) }))));
};
export const Default = Template.bind({});
//# sourceMappingURL=ToggleSwitch.stories.js.map