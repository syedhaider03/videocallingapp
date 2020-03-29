import React, { Component } from 'react';
import { View,FlatList,Text} from 'react-native';
// import chatData from '../../mock/chatdata';

class Messages extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    _renderItem = (chat) => {
        return <ChatCard
            image={chat.image}
            title={chat.name}
            body={chat.body}
            date={chat.date}
            onPress={() => this.props.navigation.navigate('Chat',{
                data:chat
              })}
            />

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state.data}
                    renderItem={({ item }) => this._renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#ececec' }}></View>}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

export default Messages;