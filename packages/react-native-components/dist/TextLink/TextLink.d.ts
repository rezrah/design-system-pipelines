import { ReactElement } from 'react';
import { ViewStyle, TextStyle, Insets } from 'react-native';
export declare type Props = {
    /**
     * The text to be shown inside the TextLink
     */
    label: string;
    /**
     * Text to display for blindness accessibility features.
     */
    accessibilityLabel?: string;
    /**
     * Disable TextLink
     */
    isDisabled?: boolean;
    /**
     * Inverse TextLink colour
     */
    isInverse?: boolean;
    /**
     * Press handler fn
     */
    onPress: () => void;
    /**
     * Style overrides
     */
    style?: TextStyle;
    /**
     * Assign a testid to the TextLink root
     */
    testID?: string;
    /**
     * Use ellipsis and trunctated text for longer labels
     */
    truncateText?: boolean;
    /**
     * Size of the text link in terms of Typography primitives
     */
    variant?: 'regular' | 'small';
    /**
     * Sets additional distance outside of element in which a press can be detected.
     */
    hitSlop?: Insets | number;
};
export declare function TextLink({ label, testID, onPress, accessibilityLabel, isDisabled, isInverse, truncateText, variant, hitSlop, style, }: Props): ReactElement;
export declare namespace TextLink {
    var testIds: {
        ROOT: string;
    };
}
interface TextLinkStyles {
    inverse: ViewStyle;
    hover: ViewStyle;
    pressed: ViewStyle;
    label: TextStyle;
}
export declare const styles: TextLinkStyles;
export {};
