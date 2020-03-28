import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-input';

import Styles from './phoneStyle';
import { RF, down, fonts, WP } from '../../utils/contants';
import i18n from '../../translation/i18n';

const PhoneInputField = (props) => {
    return (
        <View style={[Styles.inputView, props.style]}>
            <Text style={Styles.textName}>Phone number</Text>
            <View style={Styles.innerContainer}>
                <PhoneInput
                    ref={(ref) => props.setRef(ref)}
                    style={Styles.phoneInputStyle}
                    onSelectCountry={(iso) => props.onSelectCountry(iso)}
                    initialCountry={'ae'}
                    countriesList={require('./countries.json')}
                    selectCountry={() => props.selectCountry}
                >
                    <Text style={Styles.textStyle}> {props.code} </Text>
                    <Image source={down} style={Styles.imageStyle} />
                </PhoneInput>
                <TextInput
                    placeholder={'234 567-5910'}
                    style={{
                        textAlign: i18n.start,
                        flex: 1,
                        fontSize: RF('17'),
                        fontFamily: fonts.light,
                        marginLeft: 55,
                    }}
                    keyboardType={'number-pad'}
                    onChangeText={(value) => props.onValueChange(value)}
                    maxLength={10}
                    returnKeyType={props.returnKey || 'default'}
                    value={props.value}
                />
            </View >
        </View>
    )
}
export default PhoneInputField

