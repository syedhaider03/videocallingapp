import React from 'react';
import { View, StyleSheet, Modal, Text, TextInput } from 'react-native';
import { HP, colors, WP, RF, fonts, staryellow, stargrey } from '../../utils/contants';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Button } from '..';
import Stars from 'react-native-stars';

const RateModal = (props) => {
    return (
        <Modal animationType={"fade"} transparent={true}
            visible={props.isModalVisible}
            onRequestClose={props.toggleModal}>
            <View style={styles.backDrop}>
                <View style={[styles.modalBody]}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.grad1, colors.grad2]}
                        style={styles.headingModalView}>
                        <Animatable.Text
                            animation={"bounceIn"}
                            style={styles.reserveText}>
                            rate and review
                        </Animatable.Text>
                    </LinearGradient>
                    <View style={[styles.modalBody, { paddingTop: HP(4), height: HP(20) }]}>
                        <Stars
                            default={0}
                            spacing={5}
                            count={5}
                            update={(val) => props.setUserRating(val) }
                            starSize={RF(35)}
                            fullStar={staryellow}
                            emptyStar={stargrey}
                        />
                        <View style={styles.commentView}>
                            <Text style={styles.commentsText}>comments</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder={"Please write here..."}
                                multiline
                                textAlignVertical={'top'}
                                maxLength={150}
                            />
                        </View>
                        <Button
                            width={WP('70')}
                            height={HP(6)}
                            name={"submit"}
                            animation={"bounceIn"}
                            textStyle={{
                                fontSize: RF(15),
                                fontFamily: fonts.med
                            }}
                            btnStyle={{ marginTop: HP(5), alignSelf: 'center' }}
                            onPress={props.onSubmit}
                        />
                    </View>

                </View>

            </View>
        </Modal>

    );
}
const styles = StyleSheet.create({
    backDrop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.50)',
        // zIndex:0,
    },
    modalBody: {
        height: HP(50),
        width: WP(93),
        backgroundColor: '#fff',
        borderRadius: WP(3),
        paddingBottom: HP(4),
        // zIndex: 99999999,
    },
    headingModalView: {
        // flex:1,
        height: HP(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: WP(3),
        borderTopRightRadius: WP(3)

    },
    bodyModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    reserveView: {
        width: WP(100),
        height: HP(7),
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainResView: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0
    },
    reserveText: {
        fontSize: RF(17),
        fontFamily: fonts.bold,
        color: "#fff",
        textTransform: "uppercase"
    },
    commentsText: {
        fontSize: RF(16),
        fontFamily: fonts.med,
        color: "darkgrey",
        textTransform: "uppercase"
    },
    commentView: {
        width: WP(80),
        height: HP(20),
        alignSelf: "center",
        paddingTop: HP(3)
    },
    textInput: {
        width: WP(80),
        height: HP(17),
        borderColor: "#e9ebed",
        borderWidth: 1,
        borderRadius: WP(2),
        marginTop: HP(0.5),
        fontFamily: fonts.reg,
        fontSize: RF(16),
        paddingHorizontal:WP(3),
        paddingTop:HP(2)
        // backgroundColor:'red'
    }
})
export default RateModal;