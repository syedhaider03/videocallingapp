import React from 'react';
import { TextInput, StyleSheet, View, Text, Image } from 'react-native';
import { RF, fonts, WP, HP, colors, isX } from '../../utils/contants';

const Input = (props) => {
    return (
        <View style={[styles.container, props.width ? { width: props.width } : null, props.height ? { height: isX() ? props.height - HP(1.5) : props.height } : null]}>
            <Text style={styles.textName}>{props.name}</Text>
            <View style={styles.innerContainer}>
                <Image source={props.image} style={[styles.imageStyle, props.imageStyle]} />
                <TextInput
                    placeholder={props.inputPlaceHolder}
                    style={[styles.inputStyle, props.style]}
                    value={props.value}
                    secureTextEntry={props.secure}
                    returnKeyType={!!props.returnKeyType ? props.returnKeyType : 'default'}
                    keyboardType={!!props.keyboardType ? props.keyboardType : 'default'}
                    onChangeText={(text) => props.onChange(text, props.inputName)}
                    placeholderTextColor={props.placeholderTextColor}
                    autoCorrect={props.autoCorrect || false}
                    editable={props.editable}
                    maxLength={props.maxLength}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: WP('88'),
        height: isX() ? HP(9) : HP(10.1),
        marginBottom: HP(1.7)
    },
    innerContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: HP(0.8),
        flexDirection: 'row',
        borderWidth: 0.25,
        borderColor: colors.border,
        borderRadius: 8,
        shadowColor: '#f3f3f3',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0.5,
            // height:1
        },
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    inputStyle: {
        flex: 1,
        fontSize: RF('17'),
        fontFamily: fonts.light,
        color: "#575d63",
        marginLeft: WP(3)
    },
    imageStyle: {
        alignSelf: 'center',
        marginBottom: HP(0.6)
    },
    textName: {
        fontSize: RF('16'),
        fontFamily: fonts.reg,
        color: "#929ba3",
        textTransform: "uppercase",
        marginLeft: WP(1),
        marginBottom: HP(0.6)
    }
})

export default Input;