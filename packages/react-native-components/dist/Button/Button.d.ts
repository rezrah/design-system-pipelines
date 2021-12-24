import { ReactElement } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { IconsId } from '@cat-home-experts/iconography/dist/icons';
export declare type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'inverse';
export declare type ButtonSizes = 'default' | 'small';
export declare type ButtonProps = {
    /**
     * The style of the button
     */
    variant?: ButtonVariants;
    /**
     * The sizes of the button
     */
    size?: ButtonSizes;
    /**
     * The text to be shown inside the button
     */
    label: string;
    /**
     * Icon on the left of the label
     */
    iconStart?: IconsId;
    /**
     * Text to display for blindness accessibility features.
     */
    accessibilityLabel?: string;
    /**
     * Disable button
     */
    isDisabled?: boolean;
    /**
     * Processing state
     */
    isLoading?: boolean;
    /**
     * Stretch full width
     */
    block?: boolean;
    /**
     * Press handler fn
     */
    onPress: () => void;
    /**
     * Called immediately when a touch is engaged, before onPressOut and onPress.
     */
    onPressIn?: () => void;
    /**
     * Called when a touch is released.
     */
    onPressOut?: () => void;
    /**
     * Style overrides
     */
    style?: ViewStyle;
    /**
     * Assign a testid to the button root
     */
    testID?: string;
};
export declare const buttonVariantStates: {
    primary: {
        idle: string;
        pressed: string;
        loading: string;
        borderColor: null;
    };
    secondary: {
        idle: string;
        pressed: string;
        loading: string;
        borderColor: null;
    };
    tertiary: {
        idle: null;
        pressed: string;
        loading: string;
        borderColor: string;
    };
    inverse: {
        idle: string;
        pressed: string;
        loading: string;
        borderColor: null;
    };
    disabled: string;
    disabledBorder: string;
};
export declare function Button({ variant, size, label, iconStart, onPress, isDisabled, isLoading, block, style, accessibilityLabel, testID, onPressIn, onPressOut, }: ButtonProps): ReactElement;
export declare namespace Button {
    var testIds: {
        ROOT: string;
        INNER: string;
        LOADER: string;
        ICON: string;
    };
}
interface ButtonStyles {
    block: ViewStyle;
    container: ViewStyle;
    buttonBox: TextStyle;
    fakeIconStart: ViewStyle;
}
export declare const styles: ButtonStyles;
export {};
