import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
export declare type NotificationCardProps = {
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
export declare function NotificationCard({ message, notification, onPress, icon, isDisabled, hasUnreadNotifications, testID, style, }: NotificationCardProps): ReactElement;
export declare namespace NotificationCard {
    var testIds: {
        ROOT: string;
        LOADING: string;
        ICON: string;
        NOTIFICATIONS: string;
        CHILDREN: string;
    };
}
