import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import { colors, WP, HP, fonts, RF } from '../../utils/contants';

const ContactInput = (props) => {
    return (
        <View style={[styles.container, props.width ? { width: props.width } : null, props.height ? { height: props.height } : null,props.containerStyle]}>
            <Image source={props.image} style={[styles.imageStyle, props.imageStyle]} />
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
                multiline={props.multiline}
                textAlignVertical={'top'}
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
        borderBottomColor: colors.grey,
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    inputStyle: {
        flex: 1,
        fontSize: RF('18'),
        fontFamily: fonts.med,
        marginLeft: 12
    },
    imageStyle: {
        alignSelf: 'center',
        marginBottom: HP(0.6)
    },
})

export default ContactInput;