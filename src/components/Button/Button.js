import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fonts, RF, HP } from '../../utils/contants';

const Button = (props) => {
    return (
        <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[style.container,
        {
            width: props.width,
            backgroundColor: props.color || "grey"
        },
        props.height ? { height: props.height } : null,
        props.btnStyle

        ]}
        >
            <Text style={[style.textStyle, props.textStyle]}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        height: HP('6'),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"grey"
    },
    textStyle: {
        fontSize: RF('17'),
        fontFamily: fonts.med,
        color: '#fff',
        textTransform: 'capitalize'
    }
})


export default Button;