import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

//important use firebase 5.0.3
// reduxThunk is middleware so we need applyMiddleware
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCo3PsyHVxoj12cWyncNn0FRS80tocnaIc',
      authDomain: 'employeesmanager-338ed.firebaseapp.com',
      databaseURL: 'https://employeesmanager-338ed.firebaseio.com',
      projectId: 'employeesmanager-338ed',
      storageBucket: 'employeesmanager-338ed.appspot.com',
      messagingSenderId: '681463417485'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
