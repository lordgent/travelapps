import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeadProfile = () => {
  return (
    <View style={Styles.container}>
      <View>
        <Ionicons name="analytics-outline" color="#636e72" size={35} />
      </View>
      <View style={Styles.column}>
        <View>
          <Text style={Styles.Text}>Lorjenr</Text>
        </View>
        <View style={Styles.circle}>
          <Text>{''}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeadProfile;

const Styles = StyleSheet.create({
  circle: {
    height: 45,
    width: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF9900',
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-between',
  },
  Text: {
    color: 'gray',
    fontSize: 21,
    marginRight: 8,
  },
});
