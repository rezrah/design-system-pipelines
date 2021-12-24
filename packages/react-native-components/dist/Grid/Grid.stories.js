import React from 'react';
import { View, StyleSheet } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Column, Row } from './Grid';
import { Typography } from '../Typography';
import { NotificationCard } from '../NotificationCard';
import { StatisticCard } from '../StatisticCard';
export default {
    title: 'Layout/Grid',
    component: Row,
};
export const FullWidth = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 4, style: styles.pinkBackground },
                React.createElement(Typography, null, "100")))));
};
export const WebLayout = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 0, spanDesktop: 3, style: styles.pinkBackground },
                React.createElement(Typography, null, "menu")),
            React.createElement(Column, { span: 4, spanDesktop: 9 },
                React.createElement(Row, null,
                    React.createElement(Column, { span: 4 },
                        React.createElement(NotificationCard, { message: "You have", notification: "14 new messages", onPress: action('Pressed'), hasUnreadNotifications: true }))),
                React.createElement(Row, null,
                    React.createElement(Column, { span: 4, spanDesktop: 4 },
                        React.createElement(StatisticCard, { style: styles.spacing, heading: "Reviews score", value: 444, buttonLabel: "Start collecting reviews", buttonIcon: "phone-fill", buttonVariant: "secondary", buttonOnPress: action('Pressed') })),
                    React.createElement(Column, { span: 4, spanDesktop: 4 },
                        React.createElement(StatisticCard, { style: styles.spacing, heading: "Reviews score", buttonLabel: "Start collecting reviews", buttonIcon: "phone-fill", buttonVariant: "secondary", buttonOnPress: action('Pressed') })),
                    React.createElement(Column, { span: 4, spanDesktop: 4 },
                        React.createElement(StatisticCard, { style: styles.spacing, heading: "Reviews score", buttonLabel: "Start collecting reviews", buttonIcon: "phone-fill", buttonVariant: "secondary", buttonOnPress: action('Pressed') })))))));
};
export const HalfWidth = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 2, style: styles.pinkBackground },
                React.createElement(Typography, null, "50")),
            React.createElement(Column, { span: 2, style: styles.pinkBackground },
                React.createElement(Typography, null, "50")))));
};
export const ThirdWidth = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "33")),
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "33")),
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "33")))));
};
export const QuarterWidth = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "25")),
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "25")),
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "25")),
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "25")))));
};
export const OddWidth = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "25")),
            React.createElement(Column, { span: 2, style: styles.pinkBackground },
                React.createElement(Typography, null, "50")),
            React.createElement(Column, { span: 1, style: styles.pinkBackground },
                React.createElement(Typography, null, "25")))));
};
export const HalfEmpty = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 2, style: styles.pinkBackground },
                React.createElement(Typography, null, "50")))));
};
export const WebWidths = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 1, spanDesktop: 6, style: styles.pinkBackground },
                React.createElement(Typography, null, "50 on web, 25 on mobile")))));
};
export const InvisibleMobileColumn = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 0, spanDesktop: 6, style: styles.pinkBackground },
                React.createElement(Typography, null, "50 on web, invisible on mobile")))));
};
export const InvisibleDesktopColumn = () => {
    return (React.createElement(View, null,
        React.createElement(Row, null,
            React.createElement(Column, { span: 2, spanDesktop: 0, style: styles.pinkBackground },
                React.createElement(Typography, null, "Invisible on web, 50 on mobile")))));
};
const styles = StyleSheet.create({
    pinkBackground: {
        backgroundColor: 'pink',
    },
    spacing: {
        marginVertical: 16,
    },
});
//# sourceMappingURL=Grid.stories.js.map