import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text, TextInput, AsyncStorage, Alert, TouchableOpacity } from 'react-native';
import { colors, WP, HP, RF, fonts, map, logout, home, loc, setting, shop, weather, fav, profile, warning, senior, groupAdd } from '../utils/contants';
import { DrawerBody, Loader } from '../components';
// import { doLogout } from '../../network/network';
import firebase from '../database/firebase';

class SideMenu extends Component {
    constructor() {
        super()
        this.state = {
            token: '',
            loader: false,
        }
    }


    componentWillMount() {
        console.warn(firebase.auth())
        // AsyncStorage.getItem('user')
        //     .then(res => {
        //         console.warn('Sidemenu token ', res)
        //         this.setState({ token: JSON.parse(res).access_token })
        //     })
    }

    showAlert = () => {
        Alert.alert(
            'Logout',
            `Are you sure you want to logout ?`,
            [{
                text: 'No', onPress: () => { }
            },
            {
                text: 'Yes',
                onPress: this.logout,
                // onPress:()=>this.props.navigation.navigate('Login'),
                style: 'cancel'
            }],
            { cancelable: false },
        );
    };

    logout = () => {
        // this.props.navigation.navigate('Login')
        this.setState({ loader: true })
        firebase
            .auth()
            .signOut()
            .then(res => {
                this.setState({ loader: false })
                console.warn(res)
                this.props.navigation.navigate('Login')
            })
            .catch(err => {
                this.setState({ loader: false })
                console.warn('Error from logout ', err.response.data)
                // this.props.navigation.navigate('Login')
            })
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.titleText}>Video Calling App</Text>
                    <Image source={groupAdd} style={styles.headImg} />
                </View>
                <View style={styles.drawerBody}>
                    <DrawerBody
                        image={home} text={"Home"}
                        onPress={() => this.props.navigation.navigate('Home')}
                        imageStyle={{ width: RF(30), height: RF(30), bottom: 2 }}
                    />

                    {/* <DrawerBody
                        image={loc} text={"My Directions"}
                        onPress={() => this.props.navigation.navigate('MyDirections')}
                        imageStyle={{ width: RF(23), height: RF(25), bottom: 2 }}
                    /> */}
                    {/* <DrawerBody
                        image={fav} text={"Favorites"}
                        onPress={() => this.props.navigation.navigate('Favorites')}
                        imageStyle={{ width: RF(25), height: RF(25), bottom: 2 }}
                    /> */}
                    {/* <DrawerBody
                        image={senior} text={"For seniors"}
                        onPress={() => this.props.navigation.navigate('ForSeniors')}
                        imageStyle={{ width: RF(25), height: RF(25), bottom: 2 }}
                    />
                    <DrawerBody
                        image={weather} text={"Weather"}
                        onPress={() => this.props.navigation.navigate('Weather')}
                        imageStyle={{ width: RF(25), height: RF(25), bottom: 2 }}
                    />
                    <DrawerBody
                        image={shop} text={"Add a business"}
                        onPress={() => this.props.navigation.navigate('Business')}
                        imageStyle={{ width: RF(25), height: RF(25), bottom: 2 }}
                    />
                    <DrawerBody
                        image={profile} text={"Profile"}
                        onPress={() => this.props.navigation.navigate('MyProfile')}
                        imageStyle={{ width: RF(30), height: RF(30), bottom: 2 }}
                    />
                    <DrawerBody
                        image={warning} text={"Report an issue"}
                        onPress={() => this.props.navigation.navigate('ReportIssue')}
                        imageStyle={{ width: RF(25), height: RF(25), bottom: 2 }}
                    /> */}
                    {/* <DrawerBody
                        image={setting} text={"Settings"}
                        // onPress={() => this.props.navigation.navigate('OffersAndPromotions')}
                        imageStyle={{ width: RF(25), height: RF(25), bottom: 2 }}
                    /> */}

                    <DrawerBody
                        image={logout} text={"Logout"}
                        onPress={this.showAlert}
                        imageStyle={{ width: RF(25), height: RF(25), bottom: 2 }}
                    />
                </View>
                {this.state.loader && <Loader />}
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        shadowOpacity: 0.8,
        shadowColor: "darkgrey"
    },
    head: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerBody: {
        flex: 0.13,
        marginTop: HP(4),
        // backgroundColor:"",
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: WP(25),
        height: WP(25),
        borderRadius: WP(12.5),
        backgroundColor: '#fff',
        borderColor: colors.yellow,
        borderWidth: 3,
        marginLeft: WP(4)
    },
    cameraImg: {
        width: RF(16) * 1.243,
        height: RF(16),
        // position:'absolute'
        // alignSelf:'flex-start'
    },
    editImg: {
        width: RF(15),
        height: RF(15),
        // position:'absolute'
        // alignSelf:'flex-start'
    },
    imgView: {
        flexDirection: 'row',
        marginBottom: HP(1)
    },
    textInput: {
        width: WP(50),
        height: HP(5),
        // backgroundColor:'red',
        color: "#fff",
        fontFamily: fonts.med,
        textAlign: 'center',
        fontSize: RF(17),
        marginTop: HP(1)
    },
    editImgView: {
        alignSelf: 'center',
        marginRight: -WP(20),
        marginBottom: -HP(2.5),
        zIndex: 9999
    },
    headImg: {
        width: WP(20),
        height: WP(20),
        resizeMode: "contain"
    },
    titleText: {
        fontFamily: fonts.bold,
        fontSize: RF(20),
        marginBottom: HP(3)
    }

})
export default SideMenu;