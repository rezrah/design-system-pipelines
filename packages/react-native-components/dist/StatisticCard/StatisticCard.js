/* eslint-disable react/no-array-index-key */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { tokenColorSurfaceLight, tokenColorSurfaceDefault, tokenColorTextSecondary, tokenColorHeaderPrimary, tokenColorHeaderSecondary, tokenColorShadowDefault, } from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { getWidth } from '../utils/dimensions';
import { MOBILE_LARGE_WIDTH_BREAKPOINT } from '../constants';
const rootTestId = 'toolshed-native-statistic-card';
const testIds = {
    ROOT: rootTestId,
    ERROR: `${rootTestId}-error`,
    HEADING: `${rootTestId}-heading`,
    DESCRIPTION: `${rootTestId}-desc`,
    STATISTIC: `${rootTestId}-stat`,
    CTA: `${rootTestId}-cta`,
    ADDITIONAL_STATS: `${rootTestId}-additional-stats`,
    ADDITIONAL_STAT: `${rootTestId}-additional-stat`,
    LOCK: `${rootTestId}-lock`,
    SUBTITLE: `${rootTestId}-subtitle`,
    VALUE: `${rootTestId}-value`,
};
StatisticCard.testIds = testIds;
export function StatisticCard({ isLocked = false, value, heading, description, subtitle, additionalStatistics, hasError = false, buttonLabel, buttonOnPress, buttonIcon, buttonVariant = 'tertiary', style, }) {
    const DEVICE_DIMENSIONS_WIDTH = getWidth();
    const deviceType = DEVICE_DIMENSIONS_WIDTH < MOBILE_LARGE_WIDTH_BREAKPOINT
        ? 'mobile'
        : 'desktop';
    if (hasError) {
        return (React.createElement(View, { testID: testIds.ROOT, style: [styles.root, style] },
            React.createElement(View, { testID: testIds.ERROR, style: styles.errorBox },
                React.createElement(Typography, { use: "headingM", isMuted: true, isCentred: true }, "We can't load your data right now"),
                React.createElement(Typography, { use: "bodyRegular", isMuted: true, isCentred: true, style: styles.subtitle }, "Please try again later"))));
    }
    return (React.createElement(View, { testID: testIds.ROOT, style: [styles.root, style] },
        React.createElement(View, { testID: testIds.STATISTIC, style: [
                styles.statistic,
                deviceType === 'desktop'
                    ? styles.statisticDesktop
                    : styles.statisticMobile,
            ] }, isLocked ? (React.createElement(Icon, { testID: testIds.LOCK, name: "lock-key", color: tokenColorHeaderPrimary, size: 40 })) : (React.createElement(Typography, { isCentred: true, use: "headingXL", style: { color: tokenColorHeaderPrimary } }, value || '-'))),
        React.createElement(View, { testID: testIds.HEADING, style: styles.heading },
            React.createElement(Typography, { isCentred: true, use: "headingM", style: { color: tokenColorHeaderPrimary } }, heading)),
        description && (React.createElement(View, { testID: testIds.DESCRIPTION },
            React.createElement(Typography, { isCentred: true, style: { color: tokenColorTextSecondary } }, description))),
        subtitle && (React.createElement(View, { testID: testIds.SUBTITLE, style: styles.subtitle },
            React.createElement(Typography, { isCentred: true, use: "bodySmall", style: { color: tokenColorTextSecondary } }, subtitle))),
        additionalStatistics && (React.createElement(View, { testID: testIds.ADDITIONAL_STATS, style: styles.additionalStats }, [...Array(Math.ceil(additionalStatistics.length / 2))]
            .map(() => additionalStatistics.splice(0, 2))
            .map(([colA, colB], idx) => (React.createElement(View, { key: `additional-statistic-${idx}`, testID: `${testIds.ADDITIONAL_STAT}-${idx}`, style: styles.statRow },
            colA && (React.createElement(View, { style: styles.statColumn },
                React.createElement(Typography, { use: "headingL", style: { color: tokenColorHeaderPrimary } }, colA.value),
                React.createElement(Typography, { use: "headingXS" }, colA.label))),
            colB && (React.createElement(View, { style: styles.statColumn },
                React.createElement(Typography, { use: "headingL", style: { color: tokenColorHeaderPrimary } }, colB.value),
                React.createElement(Typography, { use: "headingXS" }, colB.label)))))))),
        buttonLabel && buttonOnPress && (React.createElement(View, { testID: testIds.CTA, style: styles.cta },
            React.createElement(Button, { variant: isLocked ? 'secondary' : buttonVariant, label: buttonLabel, onPress: buttonOnPress, iconStart: buttonIcon, size: "small", block: true, style: deviceType === 'desktop' ? styles.desktopButton : undefined })))));
}
const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: tokenColorSurfaceDefault,
        borderColor: tokenColorSurfaceLight,
        borderStyle: 'solid',
        shadowColor: tokenColorShadowDefault,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 1,
    },
    errorBox: {
        paddingHorizontal: 50,
    },
    statistic: {
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        backgroundColor: tokenColorSurfaceDefault,
        borderColor: tokenColorHeaderSecondary,
        borderWidth: 4,
    },
    statisticMobile: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    statisticDesktop: {
        width: 104,
        height: 104,
        borderRadius: 104,
    },
    heading: {
        marginTop: 8,
        marginBottom: 4,
    },
    subtitle: {
        marginTop: 8,
        marginBottom: 4,
    },
    cta: {
        marginTop: 12,
        marginBottom: 4,
        width: '100%',
    },
    additionalStats: {
        borderTopWidth: 1,
        borderTopColor: tokenColorSurfaceLight,
        borderStyle: 'solid',
        marginTop: 12,
        marginBottom: 4,
        paddingTop: 8,
        width: '100%',
    },
    statRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 4,
        width: '100%',
    },
    statColumn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    desktopButton: {
        width: 256,
        alignSelf: 'center',
    },
});
//# sourceMappingURL=StatisticCard.js.map