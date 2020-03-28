import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { WP, HP, add, remove, fonts, RF, colors, CFL, floatPad } from '../../utils/contants';

const CartItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.countView}>
                <TouchableOpacity onPress={props.onPressSub}>
                        <Image style={styles.btnStyle} source={remove} />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{props.count}</Text>
                    <TouchableOpacity onPress={props.onPressAdd}>
                        <Image style={styles.btnStyle} source={add} />
                    </TouchableOpacity>
                </View>
                <Text numberOfLines={1} style={styles.nameText}>{CFL(`${props.name}`)}</Text>
            </View>
            <Text style={styles.amountText}>AED {floatPad(props.amount)}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: WP(85),
        height: HP(6),
        flexDirection: 'row',
        borderBottomWidth: 0.48,
        borderColor: "darkgrey",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    countView: {
        width: WP(16),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnStyle: {
        width: WP(4.5),
        height: WP(4.5)
    },
    countText: {
        fontSize: RF(17),
        fontFamily: fonts.med,
        textTransform: "capitalize"
    },
    nameText: {
        fontSize: RF(16),
        fontFamily: fonts.reg,
        // textTransform: "capitalize",
        marginLeft: WP(3),
        width: WP(40)
    },
    amountText: {
        fontFamily: fonts.med,
        fontSize: RF(15),
        color: colors.greyText
    }
})
export default CartItem;