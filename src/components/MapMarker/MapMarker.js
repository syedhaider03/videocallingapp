import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { HP, WP, fonts, RF, colors, markerarrow } from '../../utils/contants';
import LinearGradient from 'react-native-linear-gradient';

const MapMarker = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalDetails}>
                <Text style={styles.title}>{props.shopName}</Text>
            </View>
            <View>
                <LinearGradient
                    style={[styles.markerView]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[colors.grad1, colors.grad2]}
                >
                    <View style={styles.innerView}>
                        <Text style={[styles.km]}>{props.distance}</Text>
                        <Text style={[styles.kmText]}>KM</Text>
                    </View>
                </LinearGradient>
                <Image source={markerarrow} style={styles.bottomArrow}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: HP(25),
        width: WP(70),
        alignItems: 'center'
        // backgroundColor:'red'
    },
    modalDetails: {
        height: HP(5),
        width: WP(40),
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowOpacity: 0.6,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "grey",
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: fonts.med,
        fontSize: RF(14),
        textTransform: "capitalize"
    },
    time: {
        fontFamily: fonts.bold,
        fontSize: RF(13),
        color: "#818181",
    },
    status: {
        fontFamily: fonts.bold,
        fontSize: RF(13),
        textTransform: "capitalize",
    },
    markerView: {
        width: WP(11),
        height: WP(11),
        borderRadius: WP(6),
        // borderWidth: 3,
        alignSelf: 'center',
        marginTop: 15,
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        alignSelf: 'center',
        transform: [
            { rotate: '180deg' }
        ],
        marginTop: -3,
        shadowColor: "grey",
        shadowOpacity: 0.6
    },
    km: {
        fontFamily: fonts.reg,
        fontSize: RF(11),
        alignSelf: 'center'
    },
    kmText: {
        fontFamily: fonts.reg,
        fontSize: RF(11),
        alignSelf: 'center'
    },
    innerView: {
        width: WP(9),
        height: WP(9),
        borderRadius: WP(4.5),
        backgroundColor: '#fff',
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomArrow:{
        width:WP(4.6),
        height:WP(4.5),
        alignSelf:'center',
        top:-9
    }
})
export default MapMarker;