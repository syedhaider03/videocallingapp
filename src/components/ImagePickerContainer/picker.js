import React from 'react';
import { StyleSheet,TouchableOpacity,Image } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { add } from '../../utils/contants';


const Picker = (props) => {
    return (
                <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={styles.imagePickerContainer}>
                    <Image source={props.imageURI?{uri:props.imageURI}:add} style={props.imageURI?styles.imageStyleFull:styles.imageStyle}/>
                </TouchableOpacity>
    );
}

export default Picker;



const styles = StyleSheet.create({
    imageStyle:{
        width:15,
        height:15
    },
    imagePickerContainer:{
        width:widthPercentageToDP('12'),
        height:heightPercentageToDP('6'),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
        marginVertical:10,
        marginRight:10
    },
    imageStyleFull:{
        width:widthPercentageToDP('12'),
        height:heightPercentageToDP('6'),
        borderRadius:5,
    }
})



