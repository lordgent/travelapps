import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/root';
import {StackNavigationProp} from '@react-navigation/stack';

type splashScreenProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<splashScreenProp>();

  return (
    <ImageBackground
      style={Styles.background}
      source={require('../../assets/images/splash.png')}>
      <View style={Styles.containerHeader}>
        <Text style={Styles.TextTitle}>Where Do you want to go?</Text>
      </View>
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.ButtonStart}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={Styles.TextStart}>{'Get Started >'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const Styles = StyleSheet.create({
  TextStart: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 19,
  },
  ButtonStart: {
    backgroundColor: '#FF9900',
    width: 180,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    position: 'absolute',
    bottom: 40,
  },
  container: {
    flex: 1,
    paddingTop: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    paddingTop: '20%',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  TextTitle: {
    fontSize: 52,
    margin: 'auto',
    color: 'gray',
    textAlign: 'center',
    textShadowRadius: 1,
    fontWeight: 'bold',
  },
});
