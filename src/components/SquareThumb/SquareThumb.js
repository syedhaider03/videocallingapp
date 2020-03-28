import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { WP, HP, colors, fonts, RF } from '../../utils/contants';
import * as Animatable from 'react-native-animatable';

const SquareThumb = (props) => {
    return (
        <Animatable.View 
        useNativeDriver
        animation={"flipInY"}
        style={{
            width: props.width || WP(20),
            height: props.height || HP(4.5),
            borderRadius: 5,
            maxWidth: "auto",
            backgroundColor: colors.backGrey,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={[styles.textStyle, props.noTransform && { textTransform: 'none' }]}>{props.name}</Text>
        </Animatable.View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fonts.med,
        fontSize: RF(14),
        textTransform: "capitalize"
    }
})
export default SquareThumb;