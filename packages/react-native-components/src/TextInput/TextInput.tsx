import React, { useState, useLayoutEffect, useRef, ReactElement } from 'react';
import {
  View,
  TextInput as Input,
  Pressable,
  StyleSheet,
  KeyboardType,
  Platform,
} from 'react-native';

import {
  tokenColorBorderDefault,
  tokenColorBorderError,
  tokenColorBorderDisabled,
  tokenColorSurfaceDefault,
  tokenColorSurfaceDisabled,
  tokenColorTextSecondary,
  tokenColorTextError,
  tokenColorTextDisabled,
} from '@cat-home-experts/design-tokens/dist/colours/system/light/js/system';

import { tokenColorBrandPrimaryDefault } from '@cat-home-experts/design-tokens/dist/colours/brand/light/js/brand';

import { Typography } from '../Typography';
import { Icon } from '../Icon';

export type TextInputProps = {
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

const rootTestId = 'toolshed-native-fab';

const testIds = {
  ROOT: rootTestId,
  INPUT: `${rootTestId}-input`,
  ERROR: `${rootTestId}-error`,
  SENSITIVE: `${rootTestId}-sensitive`,
  ICON: `${rootTestId}-icon`,
};

TextInput.testIds = testIds;

export function TextInput({
  label,
  value = '',
  onChange,
  placeholder,
  error,
  isDisabled = false,
  isSensitive = false,
  keyboardType = 'default',
  maxLength = 255,
  testID = testIds.ROOT,
}: TextInputProps): ReactElement {
  const ref = useRef(null);

  const [isFocused, setFocus] = useState<boolean>(false);

  const [inputHidden, setInputVisibility] = useState<boolean>(isSensitive);
  const [inputValue, setInput] = useState<string>(value);

  const setIsBlurred = () => setFocus(false);
  const setIsFocused = () => setFocus(true);

  const toggleInputHidden = () => setInputVisibility(!inputHidden);

  const onChangeFn = (text: string): void => {
    if (isDisabled) {
      return;
    }

    setInput(text);
    onChange(text);
  };

  const hasError = error && error.length > 0;
  const isActive = (inputValue.length > 0 || isFocused) && !isDisabled;

  // if we're on web, disable outlines for this component only
  useLayoutEffect(() => {
    if (Platform.OS === 'web') {
      const { classList } = (ref?.current as unknown) as {
        classList: DOMTokenList;
      };

      const style = document.createElement('style');

      style.textContent = `.${classList.value.replace(
        /\s/g,
        '.',
      )} { outline: none!important; }`;

      document.head.append(style);
    }
  }, []);

  return (
    <View>
      <View
        testID={testID}
        style={[
          styles.container,
          isFocused && !isDisabled ? styles.containerFocused : {},
          hasError && !isDisabled ? styles.containerError : {},
          isDisabled ? styles.containerDisabled : {},
        ]}
      >
        {isActive && (
          <Typography use="bodyTiny" style={styles.label}>
            {label}
          </Typography>
        )}
        <View
          style={[
            styles.border,
            isFocused && !isDisabled ? styles.borderFocused : {},
            hasError && !isDisabled ? styles.borderError : {},
          ]}
        />
        <Input
          maxLength={maxLength}
          keyboardType={keyboardType}
          editable={!isDisabled}
          secureTextEntry={inputHidden}
          accessibilityState={isDisabled ? { disabled: true } : undefined}
          onChangeText={onChangeFn}
          onBlur={setIsBlurred}
          onFocus={setIsFocused}
          placeholder={placeholder}
          testID={testIds.INPUT}
          ref={ref}
          value={inputValue}
          style={[
            styles.input,
            isActive && styles.inputNotEmpty,
            isDisabled && styles.inputDisabled,
          ]}
        />
        {isSensitive && (
          <Pressable
            testID={testIds.SENSITIVE}
            onPress={toggleInputHidden}
            style={[styles.sensitive]}
          >
            <Icon
              testID={testIds.ICON}
              name={inputHidden ? 'eye-closed' : 'eye'}
            />
          </Pressable>
        )}
      </View>
      {error && (
        <Typography
          testId={testIds.ERROR}
          use="bodyTiny"
          style={styles.errorMessage}
        >
          {error}
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokenColorSurfaceDefault,
    borderColor: tokenColorBorderDefault,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    height: 50,
    position: 'relative',
  },
  containerFocused: {
    borderWidth: 2,
  },
  containerError: {
    borderColor: tokenColorBorderError,
  },
  containerDisabled: {
    backgroundColor: tokenColorSurfaceDisabled,
    borderColor: tokenColorBorderDisabled,
  },
  border: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 0,
    left: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  borderFocused: {
    backgroundColor: tokenColorBrandPrimaryDefault,
    top: -2,
    bottom: -2,
    left: -2,
    width: 4,
  },
  borderError: {
    backgroundColor: tokenColorBorderError,
  },
  label: {
    color: tokenColorTextSecondary,
    position: 'absolute',
    top: 4,
    left: 13,
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  inputNotEmpty: {
    paddingLeft: 13,
    paddingTop: 20,
    paddingBottom: 10,
  },
  inputDisabled: {
    color: tokenColorTextDisabled,
  },
  sensitive: {
    right: 13,
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: tokenColorTextError,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
