import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, IS_IOS, HP, WP, RF, colors, fonts, isX } from '../../utils/contants';

export default StyleSheet.create({
    inputView: {
        width: WP('88'),
        height: isX() ? HP(9) : HP(10.1),
        marginBottom:HP(1.7)
    },
    innerContainer:{
        flexDirection: 'row',
        flex: 1,
        // paddingVertical: HP(0.8),
        flexDirection: 'row',
        borderWidth: 0.25,
        borderColor: colors.border,
        borderRadius: 8,
        shadowColor: '#f3f3f3',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0.5,
            // height:1
        },
        paddingHorizontal: 8,
        backgroundColor: 'white'
    },
    textName: {
        fontSize: RF('16'),
        fontFamily: fonts.reg,
        color:"#929ba3",
        textTransform:"uppercase",
        marginLeft:WP(1),
        marginBottom:HP(0.6)
    },
    phoneInputStyle: {
        width: SCREEN_WIDTH / 7
    },
    textStyle: {
        // position: 'absolute', 
        fontSize: RF(17),
        fontFamily: fonts.reg,
        color:'darkgrey'
        // marginLeft: SCREEN_WIDTH / 9.5 
    },
    imageStyle: {
        width: 8,
        height: 8,
        marginRight: 15,
        marginLeft: 5
    }
})