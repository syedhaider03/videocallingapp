import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { normalize, fonts, profile } from '../../utils/contants';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import DatePickerSelect from 'react-native-datepicker';

const DatePicker = (props) => {
    return (
        <View style={[styles.container, props.width ? { width: props.width } : null, props.height ? { height: props.height } : null]}>
            <Text style={styles.textStyle}>{props.name}</Text>
            <View style={styles.innerContainer}>
                <Image source={props.image} style={[styles.imageStyle, props.imageStyle]} />
                <DatePickerSelect
                    mode="date"
                    format="YYYY"
                    date={props.date}
                    disabled={props.disabled}
                    placeholder={props.inputPlaceHolder}
                    // minDate={moment(moment()).subtract(100, 'years')}
                    maxDate={new Date()}
                    confirmBtnText={'confirm'}
                    cancelBtnText={'cancel'}
                    showIcon={false}
                    style={{
                        flex:1,
                        // backgroundColor:'white',
                        // color:'white'
                    }}
                    customStyles={{
                        dateInput: {
                            borderWidth: 0,
                            height: 55,
                            marginLeft: 5,
                            // backgroundColor:'white'
                        },
                        dateText: {
                            width: '100%',
                            fontSize: normalize(13),
                            alignItems: 'flex-start',
                            color: '#505050',
                            fontFamily:fonts.reg,
                            
                        },
                        placeholderText: {
                            width: '100%',
                            fontSize: normalize(13),
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            fontFamily:fonts.light,
                            
                            // color: '#505050',
                        }
                    }}
                    onDateChange={(date) => { props.setDate(date) }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('85')
    },
    innerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
        // paddingVertical: 5
    },
    imageStyle: {
        width: widthPercentageToDP(5),
        height: widthPercentageToDP(5),
        alignSelf: 'center'
    },
    textStyle: {
        fontFamily: fonts.reg,
        fontSize: normalize('12'),
        marginBottom: 3,
        // textTransform:'capitalize'
    }

})

export default DatePicker;