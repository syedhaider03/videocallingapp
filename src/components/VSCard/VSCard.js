import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts, normalizeRF, colors, truck3, homeMoving, trucktp } from '../../utils/contants';

const VSCard = (props) => {
    return (
        <View style={props.style||[styles.mainContainer,props.appendStyle]}>
            <View style={styles.headingTextView}>
                <Text style={styles.headingText}>Vehicle Type</Text>
                <Text style={styles.headingText}>Shipment Type</Text>
            </View>
            <View style={styles.bodyView}>
                <View style={styles.innerViewImageText}>
                    <Image
                        source={props.img1 || truck3}
                        style={props.img1Style || styles.truckImg}
                    />
                    <Text style={styles.textStyle}>Truck</Text>

                </View>
                <View style={styles.seprator} />
                <View style={styles.innerViewImageText}>
                    <Image
                        source={props.img2 || homeMoving}
                        style={props.img1Style || styles.truck2Img}
                    />
                    <Text style={styles.textStyle}>Home Moving</Text>

                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        width: wp(93),
        height: hp(22),
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0.2,
            height: 0.2
        },
        justifyContent: 'space-evenly'
    },
    headingTextView: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    headingText: {
        fontFamily: fonts.med,
        fontSize: normalizeRF(16),
        textTransform: 'capitalize',
    },
    bodyView: {
        // flex: 0.6,
        width: wp(80),
        height: hp(13),
        borderColor: colors.darkgrey,
        borderStyle: 'dashed',
        borderWidth: 2.5,
        borderRadius: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    innerViewImageText: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    truckImg: {
        width: wp(9) * 1.469,
        height: wp(9),
    },
    truck2Img: {
        width: wp(9) * 1.220,
        height: wp(9),
    },
    textStyle: {
        fontSize: normalizeRF(16),
        fontFamily: fonts.med,
        color: '#6a7c83',
        marginTop:5
    },
    seprator: {
        borderRightWidth: 0.3,
        borderColor: '#6a7c83',
        height: hp(6),
        width: 2,
        opacity: 0.5
    }
})
export default VSCard;