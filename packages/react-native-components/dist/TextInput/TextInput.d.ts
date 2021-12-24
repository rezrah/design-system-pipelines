import { ReactElement } from 'react';
import { KeyboardType } from 'react-native';
export declare type TextInputProps = {
    /**
     * Label text to render above input
     */
    label: string;
    /**
     * Value text to render inside input
     */
    value?: string;
    /**
     * Change hanlder fn
     */
    onChange: (text: string) => void;
    /**
     * Placeholder text to render when element is empty
     */
    placeholder?: string;
    /**
     * Error text to render when element is in erroneous state
     */
    error?: string;
    /**
     * Disable TextInput
     */
    isDisabled?: boolean;
    /**
     * Whether to occlude input or not
     */
    isSensitive?: boolean;
    /**
     * Keyboard type e.g. number-pad, email-address etc.
     */
    keyboardType?: KeyboardType;
    /**
     * Max no. of characters the input will accept
     */
    maxLength?: number;
    /**
     * Optional custom testId
     */
    testID?: string;
};
export declare function TextInput({ label, value, onChange, placeholder, error, isDisabled, isSensitive, keyboardType, maxLength, testID, }: TextInputProps): ReactElement;
export declare namespace TextInput {
    var testIds: {
        ROOT: string;
        INPUT: string;
        ERROR: string;
        SENSITIVE: string;
        ICON: string;
    };
}
