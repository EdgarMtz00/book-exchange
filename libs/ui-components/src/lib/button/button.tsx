import React from 'react';

import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HighContrastBorder from "../utils/high-contrast-border";

export type ButtonProps = React.ComponentPropsWithRef<typeof View> & {
  text: string,
  onPress?: (e: GestureResponderEvent) => void,
  buttonColor?: string,
  textColor?: string,
  paddingVertical?: number,
}

export function Button(
  {
    style,
    buttonColor = '#F1CB5F',
    textColor = '#000',
    text,
    onPress,
    paddingVertical = 7
  }: ButtonProps) {

  const buttonColorStyle = {
    backgroundColor: buttonColor,
  }

  const textStyle = {
    color: textColor,
    paddingVertical
  }

  return (
    <HighContrastBorder style={style}>
        <TouchableOpacity
          style={[styles.buttonStyle, buttonColorStyle]}
          activeOpacity={0.5}
          onPress={onPress}>
          <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    </HighContrastBorder>
  );
}

const styles  = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    alignItems: 'center'
  }
})

export default Button;
