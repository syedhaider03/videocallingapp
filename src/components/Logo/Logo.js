import React from 'react';
import { Image } from 'react-native';
import { logo } from '../../utils/contants';

const Logo = (props) => {
    return (
        <Image
            source={logo}
            style={[
                props.style,
                props.width ? {
                    width: props.width
                }
                    : null,
                props.height ? {
                    height: props.height
                }
                    : null
            ]}
        />
    );
}

export default Logo;