import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
export declare type ToggleSwitchProps = {
    /**
     * isChecked flag
     */
    isChecked: boolean;
    /**
     * isDisabled flag
     */
    isDisabled?: boolean;
    /**
     * onToggle listener
     */
    onToggle: () => void;
    /**
     * Assign a testid to the ToggleSwitch root
     */
    testID?: string;
};
export declare function ToggleSwitch({ isChecked, isDisabled, onToggle, testID, }: ToggleSwitchProps): ReactElement;
export declare namespace ToggleSwitch {
    var testIds: {
        ROOT: string;
        TRACKBAR: string;
        THUMB: string;
        ICON: string;
    };
}
interface ToggleSwitchStyles {
    container: ViewStyle;
    trackBar: ViewStyle;
    thumb: ViewStyle;
    hovered: ViewStyle;
}
export declare const styles: ToggleSwitchStyles;
export {};
