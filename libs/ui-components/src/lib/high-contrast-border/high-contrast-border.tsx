import {StyleSheet, View} from "react-native";
import React from "react";

const highContrastBorder = (props: React.ComponentPropsWithRef<typeof View>) => {
  return (
    <View style={[highContrastBorderStyle.shadow, props.style]}>
      <View style={highContrastBorderStyle.container}>
        {props.children}
      </View>
    </View>
  );
}

const highContrastBorderStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(255,255,255)',
    position: 'absolute',
    top: -2,
    left: -2,
    zIndex: 5,
  },
  shadow: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgb(0,0,0)',
    backgroundColor: 'rgb(0,0,0)',
    position: 'relative',
  }
});

export default highContrastBorder;
