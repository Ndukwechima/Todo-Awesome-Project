import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import uuid from 'uuid';

export default class FlatListExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => (
            <View style={styles.renderItemView}>
              <Text style={styles.todoItemText}>{item}</Text>
              <TouchableOpacity
                onPress={e => {
                  this.props.handleDeleteOneItem(item);
                }}>
                <Text style={{fontWeight: '900', color: 'red'}}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => uuid()}
        />
        <TouchableHighlight
          style={styles.removeButton}
          onPress={this.props.handleDeleteAll}>
          <Text style={styles.buttonText}> Clear Task</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'silver',
    //   marginTop: 30,
    padding: 10,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 0.5,
    flex: 8,
  },
  todoText: {
    color: '#222e50',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 14,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#222e50',
  },
  removeButton: {
    backgroundColor: '#222e50',
    width: '100%',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  renderItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#222e50',
    padding: 10,
    marginTop: 10,
  },
  todoItemText: {
    color: '#222e50',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  deleteItemText: {
    fontWeight: '900',
    color: 'red',
    fontSize: 19,
  },
  buttonText: {
    color: 'white',
  },
});
