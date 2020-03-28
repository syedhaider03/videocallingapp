import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { normalize, fonts } from '../../utils/contants';


const ImagePickerContainer = (props) => {
    return (
        <View style={[styles.container, props.width ? { width: props.width } : null, props.height ? { height: props.height } : null]}>
            <Text style={styles.textStyle}>{props.name}</Text>
            <View style={[styles.innerContainer,props.style]}>
                {
                    props.children
                }
            </View>
        </View>
    );
}

export default ImagePickerContainer;



const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('85')
    },
    innerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
    },
    textStyle: {
        fontFamily: fonts.reg,
        fontSize: normalize('12'),
        width: widthPercentageToDP('90'),
        marginTop:19
    },
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
        marginBottom:10,
        marginRight:10
    }
})



