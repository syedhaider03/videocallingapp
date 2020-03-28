import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { HP, WP, isX, cake, cal, arrowRgrey, group, banner, crossgradient, staryellow, stargrey, RF, fonts, colors } from '../../utils/contants';
import Stars from 'react-native-stars';

const ConfirmedRejectedCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.leftView}>
                <Image source={props.image} style={styles.imageLeft} />
                <Stars
                    default={props.rating}
                    disabled
                    spacing={1}
                    count={5}
                    // update={(val) => { this.setState({ starRating: val }) }}
                    starSize={RF(11)}
                    fullStar={staryellow}
                    emptyStar={stargrey}
                />
            </View>
            <View style={styles.midView}>
                <View style={styles.headingOrderView}>
                    <Text style={styles.heading}>{props.name}</Text>
                </View>
                <View style={styles.commongContainer}>
                    <Image source={cake} style={styles.thumb} />
                    <Text style={styles.commonText}>Birthday Party</Text>
                </View>
                <View style={styles.commongContainer}>
                    <Image source={cal} style={styles.thumb} />
                    <Text numberOfLines={1} style={styles.commonText}>{props.date}</Text>
                </View>
                <View style={styles.headingOrderView}>
                    <View style={styles.commongContainer}>
                        <Image source={group} style={styles.thumb} />
                        <Text style={styles.commonText}>{props.person} Person</Text>
                    </View>

                    {/* <Text style={[styles.commonText, styles.textAdd]}>AED {props.price}.00</Text> */}
                </View>
            </View>
            <View style={styles.rightView}>
                <Text numberOfLines={1} style={styles.commonText}>Order# {props.id}</Text>
                <View style={styles.cancelledView}>
                    <Image source={arrowRgrey} style={styles.crossImg} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: WP(95),
        height: isX() ? HP(15) : HP(17),
        backgroundColor: "#fff",
        shadowColor: "darkgrey",
        shadowOpacity: 0.5,
        borderRadius: WP(2.5),
        shadowOffset: {
            width: 1,
            height: 1
        },
        alignSelf: 'center',
        marginTop: HP(1.5),
        flexDirection: 'row',
        paddingLeft: WP(2),
        paddingRight: WP(4),
        paddingVertical: HP(2)
    },
    leftView: {
        flex: 0.22,
        // justifyContent: 'center',
        paddingTop: HP(1.4)
    },
    imageLeft: {
        width: WP(16),
        height: WP(15),
        borderRadius: WP(2.2),
        resizeMode: "cover",
        alignSelf: "center",
        marginBottom: HP(0.7),
        marginTop: -HP(1)
    },
    midView: {
        flex: 0.50,
        paddingLeft: WP(1.5),
        // justifyContent: "center"
    },
    rightView: {
        flex: 0.3,
        // backgroundColor: "yellow",
        justifyContent: 'flex-start',
        // alignItems: 'center',
        // paddingTop: 16
        // alignSelf: 'flex-end'
    },
    heading: {
        fontSize: RF(17),
        textTransform: 'capitalize',
        fontFamily: fonts.med
    },
    commongContainer: {
        flexDirection: "row",
        marginTop: HP(0.8),
        alignItems: 'center',
    },
    thumb: {
        width: WP(3.8),
        height: WP(3.8)
    },
    commonText: {
        fontSize: RF(14),
        fontFamily: fonts.med,
        color: "darkgrey",
        marginLeft: WP(1.8),
    },
    headingOrderView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    textAdd: {
        marginBottom: -HP(1),
        fontFamily: fonts.bold,
        fontSize: RF(16)
    },
    crossImg: {
        width: WP(3),
        height: WP(4),
        // marginBottom: HP(0.6),
        marginTop: HP(1),
        alignSelf: 'flex-end'
    },
    cancelledView: {
        alignItems: 'center',
        marginTop: HP(2)
    },
    bottomMenuText: {
        color: colors.gradOrange,
        width: WP(60),
        marginTop: HP(0.6),
        textDecorationLine: 'underline'

        // backgroundColor:'red'
    }
})
export default ConfirmedRejectedCard;