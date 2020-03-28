import React, { Component } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { fonts, normalizeRF, colors } from '../../utils/contants';

const ContainerCommon = (props) => {
    return (
        <View style={[styles.mainContainer,{width:props.width,height:props.height},props.style]}>
            {
                props.children?
                    props.children 
                    :
                    <View style={[{flex:1,justifyContent:'center'},props.textView]}>
                        <Text style={styles.headingText}>{props.heading}</Text>
                        <Text style={styles.bodyText}>{props.body}</Text>
                    </View>
            }
        </View>
    );
}

const styles=StyleSheet.create({
    mainContainer:{
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2,
        borderRadius: 3,
        shadowRadius: 3,
        elevation: 5,
        justifyContent:'center',
        paddingLeft:40,
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center'
    },
    headingText:{
        fontFamily:fonts.med,
        fontSize:normalizeRF(18),

    },
    bodyText:{
        fontFamily:fonts.med,
        fontSize:normalizeRF(16),
        color:'#b6bfc2',
        top:2
    }
})
export default ContainerCommon;