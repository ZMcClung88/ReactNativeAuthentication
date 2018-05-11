import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAL83QDAkmqUdGWh-K3QkRiMeCXIGRj9pU',
      authDomain: 'authentication-40aae.firebaseapp.com',
      databaseURL: 'https://authentication-40aae.firebaseio.com',
      projectId: 'authentication-40aae',
      storageBucket: 'authentication-40aae.appspot.com',
      messagingSenderId: '888052558192'
    });

    // need to read more into this...
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
