import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { colors, IS_IOS } from '../utils/contants';
import { Loader } from '../components';
import AsyncStorage from '@react-native-community/async-storage';
// import SplashScreen from 'react-native-smart-splash-screen'
const { height } = Dimensions.get('screen');


export default class Check extends Component {
    constructor() {
        super();
        this.state = {
            isToken: ''
        }

    }
    componentDidMount() {
    // IS_IOS?
    //    null
    //      :  SplashScreen.close(
    //         {
    //         animationType: SplashScreen.animationType.scale,
    //     //     // duration: 850,
    //     //     // delay: 500,
    //      })
               // AsyncStorage.removeItem('user')
        AsyncStorage.getItem('appFirstTimeOpen')
            .then(res => {
                if (res == undefined) {
                    AsyncStorage.setItem('appFirstTimeOpen', 'true')
                    AsyncStorage.getItem('user')
                        .then(res => {
                            if (res == undefined) { }
                            else
                                AsyncStorage.removeItem('user')
                        })
                }
            })

        AsyncStorage.getItem("user")
            .then(res => {
                console.warn('Token ', res)
                if (res == null) {
                    this.setState({ isToken: false }, () => {
                        console.warn('Erorr', this.state.isToken)
                    })
                    this.props.navigation.navigate('Auth')
                }
                else {
                    this.setState({ isToken: true }, () => {
                        console.warn('Success ', this.state.isToken)
                    })
                    this.props.navigation.navigate('App')
                }
            })
    }
    render() {
        return (
            // <View style={{ justifyContent: 'center', alignItems: 'center', height: height / 1.2 }}>
                <Loader/>
            // </View>
        )
    }
}