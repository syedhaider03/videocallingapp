import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { fonts, RF, colors, WP } from '../../utils/contants';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const ButtonLB = (props) => {
    return (
        <TouchableOpacity
            style={props.btnStyle}
            disabled={props.disabled}
            onPress={props.onPress}
        >
            <Animatable.View
                style={props.mainContainer}
                useNativeDriver
                duration={1000}
                animation={"bounceIn"}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[colors.grad1, colors.grad2]}
                    style={[style.container,
                    { width: props.width },
                    props.container,
                    props.height ? { height: props.height } : null,
                    ]}>
                    {props.selected == props.index ?
                        <Text style={[style.textStyle, props.textStyle, { color: "#fff" }]}>{props.name}</Text>
                        :
                        <View style={{
                            width: props.width - 4,
                            height: props.height - 3,
                            backgroundColor: '#fff',
                            borderRadius: WP(1.7),
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <Text style={[style.textStyle, props.textStyle]}>{props.name}</Text>
                        </View>
                    }
                </LinearGradient>
            </Animatable.View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        height: heightPercentageToDP('6'),
        borderRadius: WP(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: RF('15'),
        fontFamily: fonts.med,
        color: '#F1524D',
        textTransform: 'capitalize'
    }
})


export default ButtonLB;