import { StyleSheet } from 'react-native';
import {fonts, RF, colors} from '../../utils/contants';

export default StyleSheet.create({
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginLeft: 20, 
    },
    imageStyle: { 
        width: 20, 
        height: 20,
    },
    textStyle: { 
        fontFamily: fonts.reg,
        fontSize: RF(17),
        color:'#505961'
    }
})