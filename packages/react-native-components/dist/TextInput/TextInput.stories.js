import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextInput } from './TextInput';
export default {
    title: 'UI Elements/TextInput',
    component: TextInput,
    args: {
        label: 'Default',
        placeholder: 'Default',
        onChange: action('changed'),
        value: 'Change me',
    },
};
const Template = (args) => (React.createElement(TextInput, Object.assign({}, args, { label: args.label, onChange: args.onChange })));
export const Default = Template.bind({});
//# sourceMappingURL=TextInput.stories.js.map