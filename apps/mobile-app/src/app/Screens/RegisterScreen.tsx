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
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const addressInputRef: RefObject<NativeTextInput> = createRef();

  return (
    <View style={{flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>

        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Image/home-screen.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>

        <KeyboardAvoidingView enabled>
          <TextInput
            style={styles.SectionStyle}
            onChangeText={(UserName) => setUserName(UserName)}
            placeholder="Enter Name"
          />

          <TextInput
            style={styles.SectionStyle}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            placeholder="Enter Email"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.SectionStyle}
            onChangeText={(UserPassword) =>
              setUserPassword(UserPassword)
            }
            placeholder="Enter Password"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.SectionStyle}
            onChangeText={(UserAge) => setUserAge(UserAge)}
            placeholder="Enter Age"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.SectionStyle}
            placeholder="Enter Address"
            autoCapitalize="sentences"
            ref={addressInputRef}
          />

          {errortext !== '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}

          <Button
            style={styles.SectionStyle}
            text={'REGISTER'}
            onPress={() => navigation.replace('App')}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
