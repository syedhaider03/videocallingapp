import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import firebase from '../database/firebase'
import { Loader } from '../components';
import { IS_IOS } from '../utils/contants';

class check extends Component {
    state = {
        loader: false
    }
    componentDidMount() {
        this.setState({ loader: true })
        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
            this.setState({ loader: false })
            this.props.navigation.navigate(user ? 'Dashboard' : 'Login')
        })
        // console.warn(firebase.auth()._user.uid)
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* {IS_IOS ? */}
                { this.state.loader && <Loader />}                   
                    {/* // : */}
                    {/* // <ImageBackground style={{flex:1}} source={require('../assets/splash.png')} /> */}
                {/* } */}
            </View>
        );
    }
}

export default check;
