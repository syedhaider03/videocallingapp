import React, { Component } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View, Alert, StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const CustomModal = (props) => {
    return (
        <View >
            <Modal
                animationType={props.animationType || "fade"}
                transparent={props.transparent || true}
                visible={props.modalVisible}
                onRequestClose={props.onRequestClose}>
                <TouchableWithoutFeedback onPress={props.onRequestClose}>
                    <View style={styles.backdropStyle}>
                        <View
                            onStartShouldSetResponder={() => true}
                            style={props.modalStyle || { ...styles.modalStyle, ...props.appendAdditionalStyling }}>
                            {props.children}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>


        </View>
    );
}


const styles = StyleSheet.create({
    backdropStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.82)'
    },

    modalStyle: {
        width: widthPercentageToDP('93.5'),
        height: heightPercentageToDP('60'),
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 5,
        borderColor: '#ccc',
        // borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        elevation: 20,
        // position:'absolute'
        // padding: 10,
    }

})
export default CustomModal;