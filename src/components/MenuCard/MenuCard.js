import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { WP, HP, RF, fonts, colors, border } from '../../utils/contants';
import * as Animatable from 'react-native-animatable';

const MenuCard = (props) => {
    return (
        <TouchableWithoutFeedback disabled={props.disabled} onPress={() => props.onPress(props.id,props.amount)}>
            <View style={styles.container}>
                <Image style={styles.image} source={props.image} />
                <View style={styles.mainView}>
                    <View style={styles.headingView}>
                        <Text style={styles.headingText}>{props.title}</Text>
                        <Text style={styles.amountText}>AED {props.amount}</Text>
                    </View>
                    <View>
                        <Text style={styles.bodyText} numberOfLines={2}>{props.description}</Text>
                    </View>
                </View>
                {props.selected["item" + props.id] ?
                    <Animatable.Image useNativeDriver animation={"bounceIn"} source={border} style={styles.selectedBorder} />
                    : null
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: WP(90),
        height: HP(11.8),
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent:'center',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowColor: "darkgrey",
        paddingHorizontal: WP(3.5),
        flexDirection: 'row',
        borderRadius: WP(3),
        alignSelf: 'center'
    },
    headingView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-between",
    },
    mainView: {
        flex: 1,
        // backgroundColor:"red",
        height: HP(8.5),
        paddingLeft: WP(3),
        paddingTop: HP(0.5),
        justifyContent: "space-between"
    },
    image: {
        width: WP(15),
        height: HP(8.5),
        resizeMode: "cover",
        borderRadius: WP(2)
    },
    headingText: {
        fontSize: RF(15),
        textTransform: "capitalize",
        fontFamily: fonts.med
    },
    amountText: {
        fontSize: RF(14),
        textTransform: "uppercase",
        fontFamily: fonts.med,
        color: colors.greyText
    },
    bodyText: {
        fontSize: RF(14),
        // textTransform:"uppercase",
        fontFamily: fonts.reg,
        color: colors.greyText
    },
    selectedBorder: {
        width: WP(5) * 1.418,
        height: WP(5),
        position: 'absolute',
        right: 0,
        top: 0
        // resizeMode:"contain"
    }
})
export default MenuCard;