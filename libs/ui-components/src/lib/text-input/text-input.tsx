import React, {ForwardedRef} from 'react';

import {Keyboard, StyleSheet, TextInput as NativeTextInput, Text, View} from 'react-native';
import HighContrastBorder from "../high-contrast-border/high-contrast-border";

type TextInputProps = React.ComponentPropsWithRef<typeof NativeTextInput> & {
  label?: string
};

export const TextInput = React.forwardRef((
  {
    style,
    placeholder,
    placeholderTextColor = '#8b9cb5',
    onChangeText,
    label = undefined
  }: TextInputProps,
  ref: ForwardedRef<NativeTextInput>) => {

  return (
    <View>
    {label !== undefined &&
      <Text style={styles.labelStyle}>
        {label}
      </Text>
    }
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
    </View>
  );
});

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    paddingLeft: 5
  },
  labelStyle: {
    position: 'absolute',
    left: '8%',
    fontSize:13
  }
})

export default TextInput;
