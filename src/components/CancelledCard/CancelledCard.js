import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { HP, WP, isX, cake, cal, group, banner, crossgradient, staryellow, stargrey, RF, fonts } from '../../utils/contants';
import Stars from 'react-native-stars';

const CancelledCard = (props) => {
 

    return (
            <View style={styles.container}>
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
                        <Image source={crossgradient} style={styles.crossImg} />
                        <Text style={[styles.heading, { color: "#e35f55" }]}>Cancelled</Text>
                    </View>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: WP(95),
        height: isX() ? HP(13.8) : HP(16.5),
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
        paddingRight: WP(4)
    },
    leftView: {
        flex: 0.22,
        justifyContent: 'center',
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
        justifyContent: "center"
    },
    rightView: {
        flex: 0.3,
        // backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center'
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
        width: WP(7),
        height: WP(7),
        marginBottom: HP(0.6)
    },
    cancelledView: {
        alignItems: 'center',
        marginTop: HP(2)
    }
})
export default CancelledCard;