import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { RF, fonts, WP, HP } from '../../utils/contants';

const PaymentInput = (props) => {
    return (
        <View style={[styles.container, props.width ? { width: props.width } : null, props.height ? { height: props.height } : null]}>
            <TextInput
                placeholder={props.inputPlaceHolder}
                style={[styles.inputStyle, props.style]}
                value={props.value}
                secureTextEntry={props.secure}
                returnKeyType={!!props.returnKeyType ? props.returnKeyType : 'default'}
                keyboardType={!!props.keyboardType ? props.keyboardType : 'default'}
                // onChangeText={(text) => props.onChange(text, props.inputName)}
                placeholderTextColor={props.placeholderTextColor}
                autoCorrect={props.autoCorrect || false}
                editable={props.editable}
                maxLength={props.maxLength}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: WP('88'),
        height: HP(8),
        flexDirection: 'row',
        borderBottomWidth: 0.25,
        borderBottomColor: 'darkgrey',
        borderRadius: 8,
        shadowColor:'#f3f3f3',
        shadowOpacity:0.3,
        backgroundColor:'white'
    },
    inputStyle: {
        flex: 1,
        fontSize: RF('16'),
        fontFamily: fonts.med,
        marginLeft: 12,
        marginTop:HP(2)
    },
    imageStyle: {
        alignSelf: 'center',
        marginBottom:HP(0.6)
    },
})

export default PaymentInput;