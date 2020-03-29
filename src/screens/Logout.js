import React from 'react';
import firebase from '../database/firebase';

const signOut = () => {
    return (
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        })
            .catch(error => this.setState({ errorMessage: error.message }))
    )
}

export default signOut;