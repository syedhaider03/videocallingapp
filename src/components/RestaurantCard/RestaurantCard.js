import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { WP, HP, fonts, RF, staryellow, stargrey, arrowRgrey, isX } from '../../utils/contants';
import Stars from 'react-native-stars';

const RestaurantCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <Image style={styles.imgThumb} source={props.image} />
                <View style={styles.mainView}>
                    <View style={styles.leftView}>
                        <View style={styles.headingView}>
                            <Text numberOfLines={1} style={styles.headingText}>{props.heading}</Text>
                            {props.distance && <Text numberOfLines={1} style={styles.distanceText}>{props.distance} KM</Text>}
                        </View>
                        <Text style={styles.addressText}>{props.address}</Text>
                        <View style={styles.starRatingView}>
                            <Stars
                                default={props.rating}
                                disabled
                                spacing={3}
                                count={5}
                                // update={(val) => { this.setState({ starRating: val }) }}
                                starSize={RF(15)}
                                fullStar={staryellow}
                                emptyStar={stargrey}
                            />
                            <Text style={styles.timeText}>{props.time}</Text>
                        </View>
                    </View>
                    <View style={styles.rightView}>
                        <Image style={styles.arrow} source={arrowRgrey} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: WP(92),
        height: isX() ? HP(11.3) : HP(13),
        shadowColor: "darkgrey",
        shadowOffset: {
            width: 1,
            height: 1
        },
        borderRadius: WP(3),
        flexDirection: 'row',
        backgroundColor: "#fff",
        marginBottom: HP(1.5),
        shadowOpacity: 0.3,
        paddingHorizontal: WP(3.5),
        alignItems: "center"
    },
    imgThumb: {
        width: WP(18),
        height: HP(9),
        resizeMode: "cover",
        borderRadius: WP(2)
    },
    mainView: {
        flex: 1,
        height: HP(9),
        // backgroundColor: "red",
        flexDirection: "row",
    },
    leftView: {
        flex: 0.9,
        height: HP(9),
        // backgroundColor: "yellow",
        paddingLeft: WP(3.5),
        justifyContent: 'space-between'
    },
    headingText: {
        fontFamily: fonts.med,
        fontSize: RF(18),
        color: "#343e48",
        textTransform: "capitalize"
    },
    addressText: {
        fontFamily: fonts.reg,
        fontSize: RF(16),
        color: "#bcc1c5",
        // textTransform: "capitalize"
    },
    starRatingView: {
        alignItems: "flex-start",
        marginLeft: -WP(1),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rightView: {
        flex: 0.1,
        // backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    arrow: {
        width: RF(10),
        height: RF(14)
    },
    timeText: {
        fontFamily: fonts.bold,
        fontSize: RF(15),
        color: "#bcc1c5",
        textTransform: "uppercase",
        bottom: -HP(0.6),
        right: -WP(2.6)
    },
    headingView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    distanceText: {
        fontFamily: fonts.med,
        fontSize: RF(15),
        color: "#f47347",
        textTransform: "uppercase",
        right: -WP(6),
        bottom: 2
    }
})
export default RestaurantCard;