import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Todo from './src/Components/Todo';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222e50',
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: 'blue',
  },
});
