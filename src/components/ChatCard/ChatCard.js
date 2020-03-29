import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './CardStyle';

const ChatCard = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>

            <View style={styles.imgContainer}>
                <Image style={styles.image} source={props.image} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{props.title}</Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.bodyText}>
                    {props.body}
                </Text>
            </View>

            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{props.date}</Text>
            </View>

        </View>
    </TouchableOpacity>
)


export default ChatCard;