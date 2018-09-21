import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

//important use firebase 5.0.2
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'ddAIzaSyCo3PsyHVxoj12cWyncNn0FRS80tocnaIc',
      authDomain: 'employeesmanager-338ed.firebaseapp.com',
      databaseURL: 'https://employeesmanager-338ed.firebaseio.com',
      projectId: 'employeesmanager-338ed',
      storageBucket: 'employeesmanager-338ed.appspot.com',
      messagingSenderId: '681463417485'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
