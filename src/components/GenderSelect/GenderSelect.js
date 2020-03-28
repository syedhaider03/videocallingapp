import React from 'react';
import { StyleSheet, View, Text,TouchableWithoutFeedback } from 'react-native';
import { normalize, fonts, colors } from '../../utils/contants';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const GenderSelect = (props) => {
    return (
        <View style={[styles.container, props.width ? { width: props.width } : null, props.height ? { height: props.height } : null]}>
            <Text style={styles.textStyle}>{props.name}</Text>
            <View style={styles.innerContainer}>
                <TouchableWithoutFeedback onPress={()=>props.onPress(1)}>
                    <View style={[styles.radioContainer,{marginRight:50}]}>
                        <View onPress={()=>props.onPress(1)}  style={styles.radioToggle}>
                            {props.toggleSelect === 1 ? <View style={styles.innerViewOrange}></View> : null}
                        </View>
                        <Text style={[styles.textStyle, { fontSize: normalize(13) }]}>Male</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>props.onPress(2)}>
                    <View style={styles.radioContainer}>
                        <View  style={styles.radioToggle}>
                            {props.toggleSelect === 2 ? <View style={styles.innerViewOrange}></View> : null}
                        </View>
                        <Text style={[styles.textStyle, { fontSize: normalize(13) }]}>Female</Text>
                    </View>
                </TouchableWithoutFeedback>
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
        paddingVertical: 8
    },
    imageStyle: {
        width: widthPercentageToDP(5),
        height: widthPercentageToDP(5)
    },
    textStyle: {
        fontFamily: fonts.reg,
        fontSize: normalize('13'),
        // marginBottom: 3,
        // textTransform:'capitalize'
    },
    radioToggle: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        marginRight: 5,
        borderColor: colors.orange,
        padding: 1,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1
    },
    innerViewOrange: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.orange
    },
    radioContainer: {
        flexDirection: 'row',
    }
})

export default GenderSelect;
