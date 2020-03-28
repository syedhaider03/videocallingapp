import React from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors, bgBlack } from '../../utils/contants';

const Background = (props) => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                resizeMode="stretch"
                source={bgBlack}
                style={[styles.bgImageStyle, props.style]}
            />
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.bg,
    },
    bgImageStyle: {
        height: hp(28),
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default Background;