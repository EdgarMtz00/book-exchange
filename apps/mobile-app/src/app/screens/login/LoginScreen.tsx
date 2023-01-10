import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput as NativeTextInput,
  View
} from "react-native";
import React, {createRef, RefObject, useState} from "react";
import {Button, TextInput} from '@book-exchange/ui-components';

export default ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef: RefObject<NativeTextInput> = createRef();

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../images/home-screen.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>

            <TextInput
              style={styles.SectionStyle}
              onChangeText={(UserEmail) =>
                setUserEmail(UserEmail)
              }
              placeholder="Enter Email"
            />

            <TextInput
              style={styles.SectionStyle}
              placeholder="Enter Password"
              ref={passwordInputRef}
              secureTextEntry={true}
            />

            {errortext !== '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}

            <Button
              style={styles.SectionStyle}
              text={'LOGIN'}
              onPress={() => navigation.replace('App')}
            />
            <Button
              style={styles.SectionStyle}
              text={'New Here? Register!'}
              onPress={() => navigation.navigate('RegisterScreen')}
              buttonColor={'white'}
            />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  registerTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
