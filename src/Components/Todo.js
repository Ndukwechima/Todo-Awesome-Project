import React from 'react';
import FlatListExample from './FlatListExample';
import Header from './Header';
import Footer from './Footer';
import AsyncStorage from '@react-native-community/async-storage';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default class Todo extends React.Component {
  state = {
    newTodo: '',
    todos: [],
    isAnimating: false,
  };
  addTodo = () => {
    this.setState(prevState => {
      if (!this.state.newTodo) {
        return;
      }
      return {
        todos: [...prevState.todos, this.state.newTodo],
        newTodo: '',
      };
    });
  };
  handleChangeText = newTodo => {
    this.setState({newTodo: newTodo});
  };
  handleDeleteAll = () => {
    this.setState({
      todos: [],
    });
  };
  handleDeleteOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todoItem => todoItem !== itemToBeRemoved),
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const jsonState = JSON.stringify(this.state.todos);
      //saving starts here
      AsyncStorage.setItem('todos', jsonState)
        .then(value => value)
        .catch(err => console.warn(err));
    }
  }
  componentDidMount() {
    //  setState here
    this.setState({
      isAnimating: true,
    });
    //setTimeout here
    setTimeout(() => {
      AsyncStorage.getItem('todos')
        .then(value => {
          if (value !== null) {
            let valueToArray = JSON.parse(value);
            this.setState({
              todos: valueToArray,
              isAnimating: false,
            });
          }
        })
        .catch(err => console.warn(err));
    }, 3000);
  }
  render() {
    return (
      <View style={styles.text}>
        <Header />
        <View style={styles.textAndButton}>
          <TextInput
            style={styles.textInput}
            value={this.state.newTodo}
            underlineColorAndroid="transparent"
            placeholder="New Todo"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.addTodo} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
        <FlatListExample
          data={this.state.todos}
          handleDeleteAll={this.handleDeleteAll}
          handleDeleteOneItem={this.handleDeleteOneItem}
          isAnimating={this.state.isAnimating}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  textAndButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInput: {
    margin: 10,
    width: '60%',
    height: 40,
    borderColor: '#222e50',
    borderWidth: 0.1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
  addButton: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '25%',
  },
});
