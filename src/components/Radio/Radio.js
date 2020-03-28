import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors, fonts, HP, WP, RF } from '../../utils/contants';
import LinearGradient from 'react-native-linear-gradient';

const Radio = (props) => (
    <TouchableOpacity onPress={() => props.onPress(props.index)}>
        <View style={{
            flexDirection: 'row', marginTop: props.marginTop || HP(2), alignItems: 'center'
        }}>
            {props.selected ?
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[colors.grad1, colors.grad2]}
                    style={[styles.container, props.radioStyle]}>
                    {props.selected ?
                        <View style={styles.dotView}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[colors.grad1, colors.grad2]}
                                style={styles.dotContainer}
                            />
                        </View>
                        : null
                    }
                </LinearGradient>
                :
                <View style={[styles.container, props.radioStyle, { borderWidth: 1.5 }]}>
                </View>
            }
            {props.image ?
                <View style={styles.imageTextView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.textStyle, props.fontSize ? { fontSize: props.fontSize } : null, props.textStyle]}>{props.text}</Text>
                        <Text style={styles.detailsText}>{props.details}</Text>
                    </View>
                    <Image source={props.image} style={props.imageStyle} />
                </View>
                :
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.textStyle, props.fontSize ? { fontSize: props.fontSize } : null, props.textStyle]}>{props.text}</Text>
                    <Text style={styles.detailsText}>{props.details}</Text>
                </View>
            }
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        height: 20,
        borderColor: "#000",
        width: 20,
        borderRadius: 20 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    dotContainer: {
        height: 8,
        borderColor: "#fff",
        // borderWidth: 5,
        width: 8,
        borderRadius: 8 / 2,
        backgroundColor: "#000",
    },
    textStyle: {
        fontSize: RF(16),
        fontFamily: fonts.light,
        color: "#000",
        marginLeft: WP(3),
        bottom:-0.7
        // marginTop: 2,
    },
    dotView: {
        height: 15,
        // borderColor: "#fff",
        // borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 15,
        borderRadius: 15 / 2,
        backgroundColor: '#fff'
    },
    detailsText: {
        fontFamily: fonts.light,
        fontSize: RF(15),
        marginLeft: WP(1)
    },
    imageTextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1,
    }
})

export default Radio;