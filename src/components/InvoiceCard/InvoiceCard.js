import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { WP, HP, RF, fonts, colors, cake, cal, group, floatPad, isX } from '../../utils/contants';
import Button from '../Button/Button';
import * as Animatable from 'react-native-animatable';

const InvoiceCard = (props) => {
    return (
        <Animatable.View useNativeDriver animation={"flipInX"} style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.dtText}>Invoice# {props.invoiceId}</Text>
                <Text style={styles.dtText}>Date & Time: {props.time}</Text>
            </View>
            <View style={styles.bodyView}>
                <View style={styles.leftView}>
                    <Text style={[styles.dtText, { fontSize: RF(15) }]}>Order# {props.orderId}</Text>
                    <Text style={styles.heading}>{props.name || "Al Hadheera"}</Text>

                    <View style={styles.commongContainer}>
                        <Image source={cake} style={styles.thumb} />
                        <Text style={styles.commonText}>{props.eventType || "Birthday Party"}</Text>
                    </View>
                    <View style={styles.commongContainer}>
                        <Image source={cal} style={styles.thumb} />
                        <Text numberOfLines={1} style={styles.commonText}>{props.date || "16 December 2019, 06:00PM"}</Text>
                    </View>
                    <View style={styles.headingOrderView}>
                        <View style={styles.commongContainer}>
                            <Image source={group} style={styles.thumb} />
                            <Text style={styles.commonText}>{props.person} Person</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rightView}>
                    <Text style={styles.amountDueText}>{props.paid ? "Amount Paid" : "Amount due on you"}</Text>
                    <Text style={styles.amountText}>AED {floatPad(props.amount)}</Text>
                </View>
            </View>
            <Button
                width={WP('70')}
                height={isX()? HP(5) :HP(6)}
                name={props.paid ? "view invoice" : "Pay now"}
                textStyle={{
                    fontSize: RF(17),
                }}
                animation={"bounceIn"}
                btnStyle={{ marginTop: HP(2), alignSelf: 'center' }}
                onPress={props.onPress}
            />
        </Animatable.View >
    );
}
const styles = StyleSheet.create({
    container: {
        width: WP(95),
        height: isX()?HP(32) :HP(34),
        backgroundColor: "#fff",
        shadowColor: "darkgrey",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.5,
        alignSelf: 'center',
        borderRadius: WP(1.8),
        paddingBottom: HP(2.2)
        // alignItems:'center'
    },
    topView: {
        flexDirection: "row",
        height: HP(6),
        width: WP(85),
        borderBottomWidth: 0.2,
        borderBottomColor: "grey",
        paddingLeft: WP(2),
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: 'center'
    },
    dtText: {
        fontSize: RF(14),
        fontFamily: fonts.reg,
        color: colors.grey
    },
    bodyView: {
        flexDirection: "row",
        flex: 1,
        width: WP(85),
        alignSelf: 'center'
        // backgroundColor:'red'
    },
    leftView: {
        flex: 0.70,
        marginLeft: WP(1.5),
        paddingTop: HP(1.3)
        // backgroundColor: 'yellow'
    },
    rightView: {
        flex: 0.4,
        justifyContent: "center",
        position: "absolute",
        right: 0,
        top: HP(5)
        // backgroundColor: "pink"
    },
    commongContainer: {
        flexDirection: "row",
        marginTop: HP(0.8),
        alignItems: 'center'
    },
    thumb: {
        width: WP(4),
        height: WP(4)
    },
    commonText: {
        fontSize: RF(15),
        fontFamily: fonts.med,
        color: "darkgrey",
        marginLeft: WP(1.8),
    },
    heading: {
        fontSize: RF(17),
        textTransform: 'capitalize',
        fontFamily: fonts.med,
        marginTop: HP(0.7),
        marginBottom: HP(0.5)
    },
    amountDueText: {
        fontSize: RF(17),
        fontFamily: fonts.reg,
        // width:WP(40)
        // marginLeft: WP(1.8),
    },
    amountText: {
        fontSize: RF(17),
        fontFamily: fonts.bold,
        textAlign: "right",
        color: colors.gradOrange,
        marginTop: 1.5

    }
})
export default InvoiceCard;