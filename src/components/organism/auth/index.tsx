import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Styles from './component';

const FormInput = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.Text}>EXPLORE</Text>
      <View>
        <Text>Email</Text>
        <TextInput />
        <View>
          <Text>Password</Text>
          <TextInput />
        </View>
        <TouchableOpacity>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormInput;
