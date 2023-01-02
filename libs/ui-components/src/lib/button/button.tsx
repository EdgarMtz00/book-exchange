import React from 'react';

import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface ButtonProps {
  text: string,
  onPress?: (e: GestureResponderEvent) => void,
  buttonColor?: string,
  textColor?: string,
}

export function Button(
  {
    buttonColor = '#F1CB5F',
    textColor = '#000',
    text,
    onPress
  }: ButtonProps) {
  const styles  = StyleSheet.create({
    buttonStyle: {
      backgroundColor: buttonColor,
      borderWidth: 0,
      height: 40,
      alignItems: 'center',
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
      shadowColor: 'rgb(0,0,0)', // IOS
      shadowOffset: { height: 5, width: 5 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 0, //IOS
      elevation: 4, // Android
    },
    buttonTextStyle: {
      color: textColor,
      paddingVertical: 10,
      fontSize: 16,
    }
  })

  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
