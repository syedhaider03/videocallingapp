import React from 'react';
import { View, Image, Text } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH, RF, plate, HP, fonts } from '../../utils/contants';
import * as Animatable from 'react-native-animatable';

const Loader = (props) => {
    return (
        <View style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0, 0.1)',
            ...props.style
        }}>
            <Animatable.Image animation={"pulse"} useNativeDriver iterationCount="infinite" source={plate} style={{
                width: RF(30) * 1.24,
                height: RF(30),
                position: "absolute",
                // top:HP(40)
            }} />
            {/* <Text style={{
                fontFamily:fonts.bold,
                fontSize:RF(18),
                color:colors.grad1
            }}>Loading...</Text> */}
            <MaterialIndicator
                animationDuration={4000}
                color={colors.orange}
                size={RF(75)}
                trackWidth={2.3}
            />

        </View>
    );
}

export default Loader;
