import {StyleSheet} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { RF, fonts } from '../../utils/contants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        height: heightPercentageToDP('10'),

    },
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: widthPercentageToDP('14'),
        height: widthPercentageToDP('14'),
        borderRadius: widthPercentageToDP('14')/ 2

    },
    textContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    titleText: {
        color: '#d94548',
        fontSize: RF(15),
        fontFamily: fonts.reg,
        alignSelf:'flex-start',
        textTransform: 'capitalize'
    },
    bodyText: {
        color: '#6e6e6e',
        fontSize: RF(12),
        fontFamily: fonts.light,
        alignSelf:'flex-start',

    },
    dateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateText: {
        color: '#6e6e6e',
        fontSize: RF(10),
        fontFamily: fonts.light,
        marginBottom: heightPercentageToDP('1')
    }

})

export default styles;