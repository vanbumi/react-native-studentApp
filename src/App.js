import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCfgW_wR169tBGSdzRm0dW4mNQtk5RTmeg',
      authDomain: 'studentapp-5d7fd.firebaseapp.com',
      databaseURL: 'https://studentapp-5d7fd.firebaseio.com',
      projectId: 'studentapp-5d7fd',
      storageBucket: 'studentapp-5d7fd.appspot.com',
      messagingSenderId: '470743847799'
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