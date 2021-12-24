/* eslint-disable react/no-array-index-key */
import React, { ReactElement } from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

import {
  tokenColorSurfaceLight,
  tokenColorSurfaceDefault,
  tokenColorTextSecondary,
  tokenColorHeaderPrimary,
  tokenColorHeaderSecondary,
  tokenColorShadowDefault,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { IconsId } from '@cat-home-experts/iconography/dist/icons';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Button } from '../Button';

import { getWidth } from '../utils/dimensions';

import { MOBILE_LARGE_WIDTH_BREAKPOINT } from '../constants';

type Statistic = {
  label: string;
  value: number;
};

export type StatisticCardProps = {
  /**
   * The main heading for the card
   */
  heading: string;
  /**
   * Additional information
   */
  description?: string;
  /**
   * Overrides the value argument with a lock icon
   */
  isLocked?: boolean;
  /**
   * The primary statistic displayed by the card
   */
  value?: number;
  /**
   * Timestamp or flavour text related to the above value
   */
  subtitle?: string;
  /**
   * Some related statistics
   */
  additionalStatistics?: Statistic[];
  /**
   * Error message
   */
  hasError?: boolean;
  /**
   * CTA button text. Required in order to make the button appear
   */
  buttonLabel?: string;
  /**
   * CTA button handler. Required in order to make the button appear
   */
  buttonOnPress?: () => void;
  /**
   * An optional icon for the CTA. Requries an onPress handler
   */
  buttonIcon?: IconsId;
  /**
   * Variant of button to display
   */
  buttonVariant?: 'secondary' | 'tertiary';
  /**
   * Style overrides
   */
  style?: ViewStyle;
};

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

export function StatisticCard({
  isLocked = false,
  value,
  heading,
  description,
  subtitle,
  additionalStatistics,
  hasError = false,
  buttonLabel,
  buttonOnPress,
  buttonIcon,
  buttonVariant = 'tertiary',
  style,
}: StatisticCardProps): ReactElement {
  const DEVICE_DIMENSIONS_WIDTH = getWidth();

  const deviceType =
    DEVICE_DIMENSIONS_WIDTH < MOBILE_LARGE_WIDTH_BREAKPOINT
      ? 'mobile'
      : 'desktop';

  if (hasError) {
    return (
      <View testID={testIds.ROOT} style={[styles.root, style]}>
        <View testID={testIds.ERROR} style={styles.errorBox}>
          <Typography use="headingM" isMuted isCentred>
            We can&#39;t load your data right now
          </Typography>
          <Typography
            use="bodyRegular"
            isMuted
            isCentred
            style={styles.subtitle}
          >
            Please try again later
          </Typography>
        </View>
      </View>
    );
  }

  return (
    <View testID={testIds.ROOT} style={[styles.root, style]}>
      <View
        testID={testIds.STATISTIC}
        style={[
          styles.statistic,
          deviceType === 'desktop'
            ? styles.statisticDesktop
            : styles.statisticMobile,
        ]}
      >
        {isLocked ? (
          <Icon
            testID={testIds.LOCK}
            name="lock-key"
            color={tokenColorHeaderPrimary}
            size={40}
          />
        ) : (
          <Typography
            isCentred
            use="headingXL"
            style={{ color: tokenColorHeaderPrimary }}
          >
            {value || '-'}
          </Typography>
        )}
      </View>
      <View testID={testIds.HEADING} style={styles.heading}>
        <Typography
          isCentred
          use="headingM"
          style={{ color: tokenColorHeaderPrimary }}
        >
          {heading}
        </Typography>
      </View>
      {description && (
        <View testID={testIds.DESCRIPTION}>
          <Typography isCentred style={{ color: tokenColorTextSecondary }}>
            {description}
          </Typography>
        </View>
      )}
      {subtitle && (
        <View testID={testIds.SUBTITLE} style={styles.subtitle as ViewStyle}>
          <Typography
            isCentred
            use="bodySmall"
            style={{ color: tokenColorTextSecondary }}
          >
            {subtitle}
          </Typography>
        </View>
      )}
      {additionalStatistics && (
        <View testID={testIds.ADDITIONAL_STATS} style={styles.additionalStats}>
          {[...Array(Math.ceil(additionalStatistics.length / 2))]
            .map(() => additionalStatistics.splice(0, 2))
            .map(([colA, colB]: Statistic[], idx: number) => (
              <View
                key={`additional-statistic-${idx}`}
                testID={`${testIds.ADDITIONAL_STAT}-${idx}`}
                style={styles.statRow}
              >
                {colA && (
                  <View style={styles.statColumn}>
                    <Typography
                      use="headingL"
                      style={{ color: tokenColorHeaderPrimary }}
                    >
                      {colA.value}
                    </Typography>
                    <Typography use="headingXS">{colA.label}</Typography>
                  </View>
                )}
                {colB && (
                  <View style={styles.statColumn}>
                    <Typography
                      use="headingL"
                      style={{ color: tokenColorHeaderPrimary }}
                    >
                      {colB.value}
                    </Typography>
                    <Typography use="headingXS">{colB.label}</Typography>
                  </View>
                )}
              </View>
            ))}
        </View>
      )}
      {buttonLabel && buttonOnPress && (
        <View testID={testIds.CTA} style={styles.cta}>
          <Button
            variant={isLocked ? 'secondary' : buttonVariant}
            label={buttonLabel}
            onPress={buttonOnPress}
            iconStart={buttonIcon}
            size="small"
            block
            style={deviceType === 'desktop' ? styles.desktopButton : undefined}
          />
        </View>
      )}
    </View>
  );
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
