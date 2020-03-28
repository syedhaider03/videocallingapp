import { StyleSheet } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/contants';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
    imageView: { 
        // justifyContent: 'center', 
        alignItems: 'center'
    },
    logo: {
        height: widthPercentageToDP('60')/1.7066, 
        width: widthPercentageToDP('60'), 
        // marginTop: 15,
    }
})