import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
// import {isTemplateElement} from '@babel/types';
import uuid from 'uuid';
export default class List extends React.Component {
  render() {
    const Todos = [
      {name: 'Study', id: uuid()},
      {name: 'visit', id: uuid()},
      {name: 'Code', id: uuid()},
      {name: 'Walk', id: uuid()},
      {name: 'Bath the dog', id: uuid()},
      {name: 'Shopping', id: uuid()},
      {name: 'Clear workspace', id: uuid()},
      {name: 'sleep', id: uuid()},
      {name: 'Set the day plan', id: uuid()},
      {name: 'Eat', id: uuid()},
      {name: 'play soccer', id: uuid()},
      {name: 'Pray', id: uuid()},
      {name: 'watch netflix', id: uuid()},
      {name: 'meditation', id: uuid()},
      {name: 'Study', id: uuid()},
      {name: 'visit', id: uuid()},
      {name: 'Code', id: uuid()},
      {name: 'Walk', id: uuid()},
      {name: 'Bath the dog', id: uuid()},
      {name: 'Shopping', id: uuid()},
      {name: 'Clear workspace', id: uuid()},
      {name: 'sleep', id: uuid()},
      {name: 'Set the day plan', id: uuid()},
      {name: 'Eat', id: uuid()},
      {name: 'play soccer', id: uuid()},
      {name: 'Pray', id: uuid()},
      {name: 'watch netflix', id: uuid()},
      {name: 'meditation', id: uuid()},
      {name: 'Study', id: uuid()},
      {name: 'visit', id: uuid()},
      {name: 'Code', id: uuid()},
      {name: 'Walk', id: uuid()},
      {name: 'Bath the dog', id: uuid()},
      {name: 'Shopping', id: uuid()},
      {name: 'Clear workspace', id: uuid()},
      {name: 'sleep', id: uuid()},
      {name: 'Set the day plan', id: uuid()},
      {name: 'Eat', id: uuid()},
      {name: 'play soccer', id: uuid()},
      {name: 'Pray', id: uuid()},
      {name: 'watch netflix', id: uuid()},
      {name: 'meditation', id: uuid()},
    ];
    return (
      <ScrollView style={styles.container}>
        {Todos.map(todo => (
          <Text key={todo.id}>{todo.name}</Text>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17859b',
    marginTop: 30,
    padding: 10,
  },
  todoText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: '#222e50',
    padding: 10,
    marginTop: 10,
  },
});
