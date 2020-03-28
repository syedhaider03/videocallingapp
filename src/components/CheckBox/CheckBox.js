import React from 'react';
import { View, StyleSheet, TouchableOpacity,Image,Text } from 'react-native';
import { normalize, fonts } from '../../utils/contants';

const CheckBox = (props) => (
    <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={props.checkBoxHandler} style={styles.container}>
            {   props.checkBoxSelected?
                    <Image source={require('../../assets/tick.png')} style={styles.ImageStyle}></Image>
                    : null
            }
        </TouchableOpacity>
        <Text style={styles.textStyle}>{props.text}</Text>

    </View>

)

const styles = StyleSheet.create({
    container: {
        height: 20,
        borderColor: "#BEBEBE",
        borderWidth: 1,
        width: 20,
        borderRadius:5,
        marginRight:10,
        paddingLeft:7
    },
    ImageStyle:{
        width: 15,
        height:12,
        alignSelf:'center'
    },
    textStyle:{
        fontSize:normalize(15),
        fontFamily:fonts.reg,

    }
})

export default CheckBox;