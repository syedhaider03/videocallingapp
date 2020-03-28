import React from 'react';
import { View, Image } from 'react-native';
import Styles from './drawerStyle';
import { logo } from '../../utils/contants';

const DrawerHeader = (props) => {
    return(
        <View style={Styles.imageView}>
            <Image source={logo} style={Styles.logo} />
    </View>
    )
}
export default DrawerHeader