import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footerView}>
        <Text style={styles.textView}>copyright 2020 @LearnFactoryNG</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerView: {
    backgroundColor: 'black',
    flex: 1,
  },
  textView: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 12,
  },
});
