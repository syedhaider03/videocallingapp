import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { colors, SCREEN_WIDTH, headerHeight, menu, fonts, RF, WP, arrowshadow } from '../../utils/contants';
import { DrawerActions } from 'react-navigation-drawer';
import { withNavigation } from 'react-navigation';

const Header = (props) => {
    let options = props.scene.descriptor.options
    return (
        <View style={[props.style, styles.Header,
        props.color ? { backgroundColor: props.color, shadowColor: props.color } : null,
        props.noShadow && {shadowOpacity:0}
       ]}>
            <TouchableOpacity onPress={
                props.isBack ?
                    () => props.navigation.pop()
                    :
                    () => props.navigation.dispatch(DrawerActions.openDrawer())
            }>
                <View style={styles.container}>
                    <Image source={props.isBack ? arrowshadow : menu} style={props.isBack ? styles.menu : {
                        width: RF(13) * 1.444,
                        height: RF(13)
                    }} />
                </View>
            </TouchableOpacity>
            <Text style={[
                styles.title,
                props.noTransform ? { textTransform: "none" } : null
            ]}>
                {options.headerTitle}
            </Text>
            <View style={styles.rightView}>
                {/* <TouchableOpacity style={[styles.container, { width: WP(10) }]} onPress={() => props.navigation.pop()} >
                    <Image source={props.backImg || options.headerTitle == "Home" ? null : back} style={styles.back} />
                </TouchableOpacity> */}
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#fff',
        width: SCREEN_WIDTH,
        height: headerHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 15,
        shadowColor: 'grey',
        shadowOpacity: 1,
        elevation: 1
    },
    menu: {
        width: RF(40),
        height: RF(40),
    },
    title: {
        fontSize: RF(18),
        fontFamily: fonts.med,
        textAlign: 'center',
        textTransform: 'capitalize',
        marginLeft:-WP(13)
        // color: colors.yellow
    },
    back: {
        width: RF(30) * 0.4237,
        height: RF(20),
        marginLeft: WP(4)
    },
    container: {
        height: headerHeight,
        justifyContent: 'center',
        width: WP(15),
        alignItems: 'center',
    },
    rightView: {
        flexDirection: 'row',
        height: headerHeight,
        // width: WP(15),
        alignItems: 'center',
        paddingRight: WP(2)
    }
})
export default Header;