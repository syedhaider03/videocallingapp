import React from 'react';
import { StyleSheet, View,Image,Text } from 'react-native';
import SelectPicker from 'react-native-form-select-picker'; // Import the package
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { normalize, fonts } from '../../utils/contants';


const Picker = (props) => {
    return (
        <View style={[styles.container, props.width ? { width: props.width } : null, props.height ? { height: props.height } : null]}>
            <Text style={styles.textStyle}>{props.name}</Text>
            <View style={styles.innerContainer}>
                <Image source={props.image} style={[styles.imageStyle, props.imageStyle]} />
                <SelectPicker
                    onValueChange={(value) => { props.onValueChange(value) }}
                    showIOS
                    placeholder={props.placeholder}
                    style={styles.textStyle}
                    disabled={props.disabled}
                    placeholderStyle={{color:'darkgrey',fontFamily:fonts.light,fontSize:normalize(13)}}
                    selected={props.selected}>
                    {
                        props.pickerItems.map(item => <SelectPicker.Item label={item.label} value={item.value} />)
                    }
                </SelectPicker>
            </View>
        </View>

    );
}



const styles = StyleSheet.create({
    container: {
       width:widthPercentageToDP('85')
    },
    innerContainer: {
        flexDirection:'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
    },
    imageStyle: {
        width:widthPercentageToDP(5),
        height:widthPercentageToDP(5),
        alignSelf:'center'
    },
    textStyle:{
        fontFamily:fonts.reg,
        fontSize:normalize('12'),
        width:widthPercentageToDP('90')
    }
})

export default Picker;


