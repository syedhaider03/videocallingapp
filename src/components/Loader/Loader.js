import React from 'react';
import { View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH, RF } from '../../utils/contants';

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
            <SkypeIndicator
                color={colors.red}
                size={RF(60)}
            />
        </View>
    );
}

export default Loader;
