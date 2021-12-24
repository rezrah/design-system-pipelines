import React from 'react';
import { View } from 'react-native';
import { Fab } from './Fab';
export default {
    title: 'UI Elements/Fab',
    component: Fab,
    args: {
        icon: 'pencil',
    },
};
const Template = (args) => (React.createElement(View, null,
    React.createElement(Fab, Object.assign({}, args, { icon: args.icon }))));
export const Default = Template.bind({});
//# sourceMappingURL=Fab.stories.js.map