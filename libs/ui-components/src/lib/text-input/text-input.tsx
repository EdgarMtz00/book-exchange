import React from 'react';

import {Keyboard, StyleSheet, TextInput as NativeTextInput, View,} from 'react-native';

type TextInputProps = React.ComponentPropsWithRef<typeof NativeTextInput> & {
  width?: string
};

export function TextInput(
  {
    placeholder,
    placeholderTextColor = '#8b9cb5',
    ref,
    onChangeText,
    width = '100%'
  }: TextInputProps) {

  const viewStyle = {
    width
  }
  return (
    <View style={[styles.shadow, viewStyle]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    backgroundColor: 'rgb(255,255,255)'
  },
  shadow: {
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 0, //IOS
    elevation: 4, // Android
  }
})

export default TextInput;
