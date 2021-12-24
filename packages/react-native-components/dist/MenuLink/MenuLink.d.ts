import { ReactElement } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
export declare type Props = {
    /**
     * The text to be shown inside the MenuLink
     */
    label: string;
    /**
     * Optional icon at the start of the label
     */
    icon?: IconsId;
    /**
     * Choose to show/hide the navigation arrow at the end of the label
     */
    hasNavigationIcon?: boolean;
    /**
     * Text to display for blindness accessibility features.
     */
    accessibilityLabel?: string;
    /**
     * Disable MenuLink
     */
    isDisabled?: boolean;
    /**
     * Emphasize text in MenLink
     */
    isEmphasized?: boolean;
    /**
     * Press handler fn
     */
    onPress: () => void;
    /**
     * Style overrides
     */
    style?: ViewStyle;
    /**
     * Assign a testid to the MenuLink root
     */
    testID?: string;
    /**
     * Use ellipsis and trunctated text for longer labels
     */
    truncateText?: boolean;
    /**
     * Has a bottom border. default: enabled
     */
    hasBottomBorder?: boolean;
};
export declare function MenuLink({ label, testID, onPress, accessibilityLabel, icon, hasNavigationIcon, isDisabled, isEmphasized, truncateText, hasBottomBorder, }: Props): ReactElement;
export declare namespace MenuLink {
    var testIds: {
        ROOT: string;
        INNER: string;
        ICON: string;
        NAV_ICON: string;
    };
}
interface MenuLinkStyles {
    root: ViewStyle;
    iconEnd: ViewStyle;
    icon: ViewStyle;
    rootDisabled: ViewStyle;
    pressed: ViewStyle;
    hover: ViewStyle;
    label: TextStyle;
    innerContainer: ViewStyle;
    hasBottomBorder: ViewStyle;
}
export declare const styles: MenuLinkStyles;
export {};
