import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fonts, RF, colors, WP } from '../../utils/contants';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Button = (props) => {
    return (
        <TouchableOpacity style={props.btnStyle} disabled={props.disabled} onPress={props.onPress}>
            <Animatable.View useNativeDriver duration={1000} animation={props.animation || "slideInRight"}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.grad1, colors.grad2]} style={[style.container,
                {
                    width: props.width,
                    // backgroundColor: props.color
                },
                props.height ? { height: props.height } : null,

                ]}>
                    <Text style={[style.textStyle, props.textStyle]}>{props.name}</Text>
                </LinearGradient>
            </Animatable.View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        height: heightPercentageToDP('6'),
        borderRadius: WP(8),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: RF('15'),
        fontFamily: fonts.med,
        color: 'white',
        textTransform: 'uppercase'
    }
})


export default Button;