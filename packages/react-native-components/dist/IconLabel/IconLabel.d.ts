import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
declare type IconLabelProps = {
    /**
     * Name of icon you wish to use. Eg. arrow-down
     */
    icon: IconsId;
    /**
     * Label text to render under icon
     */
    label: string;
    /**
     * Assign the size of icon, default 24
     */
    size?: number;
    /**
     * Apply disabled state to the icon
     */
    isDisabled?: boolean;
    /**
     * Apply emphasized state to the icon
     */
    isEmphasized?: boolean;
    /**
     * Force no of lines to be 1 and chop off overflowing text
     */
    truncate?: boolean;
    /**
     * Assign the color of icon, default black
     */
    color?: string;
    /**
     * Assign a testid to the IconLabel root
     */
    testID?: string;
    /**
     * Stylesheet object for the label container component
     */
    labelStyle?: ViewStyle;
    /**
     * Stylesheet object for the Icon component
     */
    iconStyle?: ViewStyle;
};
export declare function IconLabel({ icon, label, size, color, testID, isDisabled, isEmphasized, truncate, iconStyle, labelStyle, }: IconLabelProps): ReactElement;
export declare namespace IconLabel {
    var testIds: {
        ROOT: string;
    };
}
export {};
