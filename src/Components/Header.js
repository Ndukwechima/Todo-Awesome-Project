import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerView}>
        <FontAwesome name="bars" size={25} color="white" />
        <Text style={styles.headerText}> Todo App </Text>
        <FontAwesome name="cog" size={25} color="white" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'space-around',
    backgroundColor: '#222e50',
    flex: 1,
    paddingTop: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: -8,
  },
});
