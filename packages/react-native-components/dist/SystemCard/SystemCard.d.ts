import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
export declare type SystemCardProps = {
    /**
     * Card type
     */
    type?: SystemCardVariant;
    /**
     * Card title
     */
    title: string;
    /**
     * Card Content
     */
    description: string;
    /**
     * isDisabled flag
     */
    isDisabled?: boolean;
    /**
     * flag allowing to hide the Arrow Icon
     */
    noArrow?: boolean;
    /**
     * When used inside a carousel, has a fixed width
     */
    isCompact?: boolean;
    /**
     * CTA handler.
     */
    onPress?: () => void;
    /**
     * Style overrides
     */
    style?: ViewStyle;
    /**
     * Assign a testid to the SystemCard root
     */
    testID?: string;
};
declare type SystemCardVariant = 'attention' | 'warning' | 'success' | 'info';
export declare const systemCardVariantStates: {
    attention: {
        hover: string;
        pressed: string;
        borderColor: string;
    };
    warning: {
        hover: string;
        pressed: string;
        borderColor: string;
    };
    success: {
        hover: string;
        pressed: string;
        borderColor: string;
    };
    info: {
        hover: string;
        pressed: string;
        borderColor: string;
    };
    disabled: string;
    disabledBorder: string;
};
export declare function SystemCard({ type, title, description, isDisabled, noArrow, isCompact, onPress, style, testID, }: SystemCardProps): ReactElement;
export declare namespace SystemCard {
    var testIds: {
        ROOT: string;
        TITLE: string;
        DESCRIPTION: string;
        ARROW: string;
    };
}
interface SystemCardStyles {
    root: ViewStyle;
    text: ViewStyle;
    title: ViewStyle;
    arrow: ViewStyle;
}
export declare const styles: SystemCardStyles;
export {};
