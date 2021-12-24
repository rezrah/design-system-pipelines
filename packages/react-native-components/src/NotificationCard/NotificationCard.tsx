import React, { ReactElement } from 'react';
import { View, Pressable, ViewStyle, StyleSheet } from 'react-native';

import {
  tokenColorSurfaceLight,
  tokenColorSurfaceDefault,
  tokenColorSurfaceWarm,
  tokenColorSurfaceDisabled,
  tokenColorTextDisabled,
  tokenColorShadowDefault,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import {
  tokenColorBrandPrimaryDefault,
  tokenColorBrandSecondaryDefault,
} from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';

import { Icon } from '../Icon';
import { Typography } from '../Typography';

export type NotificationCardProps = {
  /**
   * Main default styled text
   */
  message: string;
  /**
   * Emphasized styled text
   */
  notification?: string;
  /**
   * Press handler fn
   */
  onPress: () => void;
  /**
   * Icon id - defaults to message bubble
   */
  icon?: IconsId;
  /**
   * Disable button
   */
  isDisabled?: boolean;
  /**
   * Whether to show the red dot i.e. indicate there are unread notifications
   */
  hasUnreadNotifications?: boolean;
  /**
   * Style overrides
   */
  style?: ViewStyle;
  /**
   * Assign a testid to the button root
   */
  testID?: string;
};

const rootTestId = 'toolshed-native-statistic-card';

const testIds = {
  ROOT: rootTestId,
  LOADING: `${rootTestId}-loading`,
  ICON: `${rootTestId}-icon`,
  NOTIFICATIONS: `${rootTestId}-notifications`,
  CHILDREN: `${rootTestId}-children`,
};

NotificationCard.testIds = testIds;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 36,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: tokenColorSurfaceDefault,
    borderColor: tokenColorSurfaceLight,
    borderStyle: 'solid',
    shadowColor: tokenColorShadowDefault,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 1,
  },
  icon: {
    color: tokenColorBrandPrimaryDefault,
    marginRight: 16,
  },
  hovered: {
    backgroundColor: tokenColorSurfaceWarm,
  },
  pressed: {
    backgroundColor: tokenColorSurfaceLight,
  },
  relative: {
    position: 'relative',
  },
  unread: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: tokenColorBrandSecondaryDefault,
    position: 'absolute',
    top: 1,
    right: 11,
    zIndex: 3,
    elevation: 3,
  },
  disabled: {
    backgroundColor: tokenColorSurfaceDisabled,
    borderColor: tokenColorSurfaceDisabled,
    borderWidth: 1,
    color: tokenColorTextDisabled,
  },
  children: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
});

export function NotificationCard({
  message,
  notification,
  onPress,
  icon = 'chat-centered-text',
  isDisabled = false,
  hasUnreadNotifications = false,
  testID = testIds.ROOT,
  style = {},
}: NotificationCardProps): ReactElement {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={isDisabled ? { disabled: true } : undefined}
    >
      {
        // hovered is missing from the type definition
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ({ pressed, hovered }) => (
          <View
            testID={testID}
            style={[
              styles.root,
              style,
              hovered && styles.hovered,
              pressed && styles.pressed,
              isDisabled && styles.disabled,
            ]}
          >
            <View style={[styles.relative]}>
              {hasUnreadNotifications && (
                <View testID={testIds.NOTIFICATIONS} style={[styles.unread]} />
              )}
              <Icon
                testID={testIds.ICON}
                name={icon}
                style={[styles.icon, isDisabled ? styles.disabled : {}]}
                size={40}
              />
            </View>
            <View testID={testIds.CHILDREN} style={[styles.children]}>
              <Typography use="bodyRegular" isDisabled={isDisabled}>
                {message}
                {notification && (
                  <Typography
                    isEmphasized
                    isDisabled={isDisabled}
                    style={{ color: tokenColorBrandSecondaryDefault }}
                  >
                    {' '}
                    {notification}
                  </Typography>
                )}
              </Typography>
            </View>
          </View>
        )
      }
    </Pressable>
  );
}
