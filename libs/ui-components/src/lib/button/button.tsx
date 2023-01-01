import React from 'react';

import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface ButtonProps {
  text: string,
  onPress?: (e: GestureResponderEvent) => void,
  buttonColor?: string,
  textColor?: string,
}

export function Button(props: ButtonProps) {
  const styles  = StyleSheet.create({
    buttonStyle: {
      backgroundColor: props.buttonColor ? props.buttonColor : '#F1CB5F',
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
      color: props.textColor ? props.textColor : '#000',
      paddingVertical: 10,
      fontSize: 16,
    }
  })

  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      activeOpacity={0.5}
      onPress={props.onPress}>
      <Text style={styles.buttonTextStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
