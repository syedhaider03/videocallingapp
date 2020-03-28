import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from './bodyStyle';
import { SCREEN_WIDTH } from '../../utils/contants';

const DrawerBody = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}
            style={Styles.btnStyle}>
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
                <View style={{ width: 40 }}>
                    <Image source={props.image}
                        style={[Styles.imageStyle, props.imageStyle]} />
                </View>
                <View style={{ width: SCREEN_WIDTH/2.3 }} >
                    <Text style={Styles.textStyle}> {props.text} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default DrawerBody