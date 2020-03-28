import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { HP, WP, arrowRgrey, RF, colors, fonts } from '../../utils/contants';

const SettingCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container} disabled={props.disabled}>
            <View style={styles.subView}>
                <Text style={styles.titleText}>{props.title}</Text>
                {props.haveSwitch ?
                    <Switch
                        onValueChange={props.toggleSwitch}
                        trackColor={{ true: "black", false: "#787878" }}
                        thumbColor={props.thumbColor}
                        ios_backgroundColor={"#787878"}
                        value={props.switchValue} />
                    :
                    props.leftText ?
                        <Text style={[styles.titleText,{color:"grey"}]}>{props.leftText}</Text>
                        :
                        <Image source={arrowRgrey} style={styles.arrowImg} />
                }
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        width: WP(100),
        height: HP(9),
        paddingHorizontal: WP(3),

    },
    subView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: "darkgrey",
        paddingHorizontal: WP(2),
    },
    arrowImg: {
        width: RF(8),
        height: RF(13)
    },
    titleText: {
        fontFamily: fonts.med,
        fontSize: RF(18)
    }
})
export default SettingCard;