import { ReactElement } from 'react';
import { ColorValue, TextStyle } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
declare type IconProps = {
    /**
     * Name of icon you wish to use. Eg. arrow-down
     */
    name: IconsId;
    /**
     * Assign the size of icon, default 24
     */
    size?: number;
    /**
     * Apply disabled state to the icon
     */
    isDisabled?: boolean;
    /**
     * Assign the color of icon, default black
     */
    color?: ColorValue;
    /**
     * Assign a testid to the Icon root
     */
    testID?: string;
    /**
     * Assign a testid to the Icon root
     */
    style?: TextStyle | TextStyle[];
};
export declare const BaseIcon: any;
export declare function Icon({ name, size, color, testID, isDisabled, style, }: IconProps): ReactElement;
export declare namespace Icon {
    var testIds: {
        ROOT: string;
    };
}
export {};
