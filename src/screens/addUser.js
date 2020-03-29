import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';

import Input from '../components/Input/Input';
import { search, HP, WP, profile, colors } from '../utils/contants';
import firebaseSDK from '../database/firebase';
import { Button } from '../components';

class AddUser extends Component {

    state = {
        userData: []
    }

    componentDidMount() {
        firebaseSDK.database()
        .ref('users/')
        .on("value",user => {
            console.warn(user.val())
            let users=[]
            user.forEach((child) => {
                users.push(child.val());
            });
            console.log(users)
            this.setState(previousState => ({
                userData: users
              }))
        })

    }

    selectUser = (user) => {
        console.warn('Select user ', user)
    }

    renderItem = (item) => {
        console.warn({ item })
        return <View style={styles.userRow}>
            <View style={styles.imageTextView}>
                <Image source={profile} style={styles.userImage} />
                <Text> {item.displayName} </Text>
            </View>
            <TouchableOpacity onPress={() => this.selectUser(item)}
                style={styles.addUserBtn}>
                <Text> Add </Text>
            </TouchableOpacity>
        </View>
    }

    render() {
        return (
            // <ScrollView>
                <View style={styles.userView}>
                    <View>
                        <Input
                            image={search}
                            inputPlaceHolder={'Search'}
                            onChange={this.searchInput}
                            imageStyle={{ width: WP(8), height: HP(3.5) }}
                            container={{ borderRadius: 30 }}
                        />
                    </View>
                    <View style={styles.addUserView}>
                        <FlatList
                            data={this.state.userData}
                            extraData={this.state.userData}
                            renderItem={({ item, index }) => this.renderItem(item)}
                            keyExtractor={(index, item) => index.toString()}
                        />
                    </View>
                    <Button 
                        name={'Call'}
                        width={WP('30')}
                        btnStyle={{ marginTop: 10 }}
                    />
                </View>
            // </ScrollView>
        )
    }
}
export default AddUser

const styles = StyleSheet.create({
    userView: {
        alignItems: 'center'
    },
    addUserView: {
        borderWidth: 1,
        width: WP('90'),
        paddingVertical: 10
    },
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    imageTextView: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft: 5 
    },
    userImage: {
        width: WP(8),
        height: HP(3.5)
    },
    addUserBtn: {
        width: WP('20'),
        height: HP('5'),
        backgroundColor: colors.greyText,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10
    }
})