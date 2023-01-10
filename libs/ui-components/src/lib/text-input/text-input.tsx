import React, {ForwardedRef} from 'react';

import {Keyboard, StyleSheet, TextInput as NativeTextInput} from 'react-native';
import HighContrastBorder from "../utils/high-contrast-border";

type TextInputProps = React.ComponentPropsWithRef<typeof NativeTextInput>;

export const TextInput = React.forwardRef((
  {
    style,
    placeholder,
    placeholderTextColor = '#8b9cb5',
    onChangeText
  }: TextInputProps,
  ref: ForwardedRef<NativeTextInput>) => {

  return (
    <HighContrastBorder style={style}>
      <NativeTextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType="default"
        ref={ref}
        onChangeText={onChangeText}
        onSubmitEditing={Keyboard.dismiss}
        blurOnSubmit={false}
        secureTextEntry={true}
        underlineColorAndroid="#f000"
        returnKeyType="next"
      />
    </HighContrastBorder>
  );
});

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: '100%',
    borderWidth: 1
  }
})

export default TextInput;
