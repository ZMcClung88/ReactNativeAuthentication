import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseConfig from './config/firebaseConfig';

class App extends Component {
  constructor() {
    super();
    const config = firebaseConfig; // my firebase credentials object
    firebase.initializeApp(config);
    console.log('here', config);
  }

  state = { loggedIn: null };

  componentWillMount() {
    // need to read more into this...
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.viewStyle}>
            <Button>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 10,
    flexDirection: 'row'
  }
};

export default App;
