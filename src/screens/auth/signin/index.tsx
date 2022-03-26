import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../../../routes/root';
import {StackNavigationProp} from '@react-navigation/stack';

type SignInscreenProp = StackNavigationProp<RootStackParamList, 'Signin'>;

const SignInScreen = () => {
  const navigation = useNavigation<SignInscreenProp>();

  return (
    <ImageBackground
      source={require('../../../assets/images/splash.png')}
      style={Styles.background}>
      <View style={Styles.container}>
        <Text style={Styles.Text}>EXPLORE</Text>
        <View style={Styles.ContainerInput}>
          <Text style={Styles.TextInput}>Email</Text>
          <TextInput
            style={Styles.input}
            placeholder="ex: mail@.mail.com"
            placeholderTextColor="gray"
          />
          <View style={Styles.ContainerInput}>
            <Text style={Styles.TextInput}>Password</Text>
            <TextInput
              style={Styles.input}
              secureTextEntry={true}
              placeholder="ex: ******"
              placeholderTextColor="gray"
            />
          </View>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => navigation.navigate('Main')}>
            <Text style={Styles.TextBtn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignInScreen;

const Styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  ContainerInput: {
    marginBottom: 25,
  },
  btn: {
    backgroundColor: '#FF9900',
    width: 300,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.75)',
  },
  input: {
    borderColor: '#FF9900',
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 39,
    color: 'gray',
  },
  container: {
    width: '100%',
    paddingTop: '23%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 44,
    color: '#FF9900',
    textShadowColor: '#dfe6e9',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextInput: {
    color: '#FF9900',
    fontSize: 20,
  },
  TextBtn: {
    color: 'white',
    fontSize: 20,
  },
});
