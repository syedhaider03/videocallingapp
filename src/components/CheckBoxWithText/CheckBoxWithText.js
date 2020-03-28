import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { HP, WP, RF, colors, fonts, check } from '../../utils/contants';
import * as Animatable from 'react-native-animatable';

const CheckBoxWithText = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={[styles.container]}>
                <View style={styles.boxView}>
                    {props.selected ?
                        <Animatable.Image
                            source={check}
                            useNativeDriver
                            animation={"bounceIn"}
                            style={styles.boxImg}
                        />
                        : null
                    }
                </View>
                <Text style={styles.textStyle}>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: HP(8),
        width: WP(86),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor:"darkgrey",
        borderBottomWidth:0.5
    },
    boxImg: {
        width: RF(16),
        height: RF(14),
        left: WP(1.3),
        bottom: WP(1)
    },
    textStyle: {
        fontFamily: fonts.light,
        fontSize: RF(16),
        textTransform: 'capitalize',
        color: "#000",
        marginLeft: WP(3)
    },
    boxView: {
        width: WP(5.5),
        height: WP(5.5),
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: WP(0.8),
        justifyContent: 'center',
        alignItems: "center",
        marginLeft:WP(1.5)
    }
})
export default CheckBoxWithText;