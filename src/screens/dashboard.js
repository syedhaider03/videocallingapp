import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import { RF, fonts, HP } from '../utils/contants';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      uid: '',
      display:"",
      email:""
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  componentDidMount() {
    console.warn(firebase.auth())
    this.setState({
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      email:firebase.auth().currentUser.email
    })
  }
  render() {
    if(this.state.email=="haiderpro96@hotmail.com"){
      return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Welcome Admin {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
      )
    }
    else{
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop:HP(5),
    // padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: RF(30),
    fontFamily:fonts.bold,
  }
});