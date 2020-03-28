import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const TextArea = (props) => (
    <View style={props.containerStyle||[styles.container,props.style]}>
        <TextInput
            placeholder={props.inputPlaceHolder}
            // onChangeText={() => alert(props.placeholder + 'clicked')}
            // returnKeyType={"next"}
            editable={props.editable}
            ref={props.ref}
            onFocus={props.onFocus}
            style={[styles.inputStyle,props.inputStyle]}
            value={props.value}
            secureTextEntry={props.secure}
            // style={[InputStyle.InputField, props.inputStyle]}
            returnKeyType={!!props.returnKeyType ? props.returnKeyType : 'default'}
            keyboardType={!!props.keyboardType ? props.keyboardType : 'default'}
            // onChangeText={(text) => props.onChange(text, props.inputName)}
            placeholderTextColor={props.placeholderTextColor }
            autoCorrect={props.autoCorrect || true}
            multiline
            textAlignVertical={'top'}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: heightPercentageToDP('15%'),
        // margin: 20,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
    },

    inputStyle: {
        fontSize: 16,
        marginLeft:10,
        flex: 1,
    }
})

export default TextArea;