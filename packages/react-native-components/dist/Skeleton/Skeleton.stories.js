import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Skeleton } from './Skeleton';
const styles = StyleSheet.create({
    skeletonContainer: {
        height: '100%',
        width: '100%',
    },
});
export default {
    title: 'UI Elements/Skeleton',
    component: Skeleton,
    args: {
        height: 200,
        width: 200,
    },
};
const Template = (args) => (React.createElement(View, { style: styles.skeletonContainer },
    React.createElement(Skeleton, Object.assign({}, args))));
export const Default = Template.bind({});
export const Loader = () => {
    const [loading, setLoadingState] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoadingState(false), 1500);
    }, []);
    return (React.createElement(View, { style: styles.skeletonContainer }, loading ? React.createElement(Skeleton, { height: 200, width: 200 }) : React.createElement(Text, null, "LOADED")));
};
//# sourceMappingURL=Skeleton.stories.js.map