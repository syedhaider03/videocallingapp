import React from 'react';
import * as Animatable from 'react-native-animatable';
import { dinelogo, RF, HP } from '../../utils/contants';

const AppLogo = (props) => {
    return (
        <Animatable.Image
            animation={"bounceIn"}
            source={dinelogo}
            style={{
                width: RF(90) * 1.683,
                height: RF(90),
                marginBottom: HP(3),
                marginTop: props.margin||HP(8)
            }}
        />
    );
}

export default AppLogo;