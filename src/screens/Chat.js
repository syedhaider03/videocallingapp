import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import firebaseSDK from '../database/firebase';

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!'
  });

  state = {
    messages: []
  };

  get user() {
    return {
    //   name: this.props.navigation.state.params.name,
    name:"Haider",
    //   email: this.props.navigation.state.params.email,
    email:"haiderpro96@Hotmail.com",
    //   avatar: this.props.navigation.state.params.avatar,
      id: firebaseSDK.auth().currentUser.uid,
      _id: firebaseSDK.auth().currentUser.uid
    };
  }

sendMsg=(messages=[])=>{
    firebaseSDK
    .database()
    .ref('chat/' + firebaseSDK.auth().currentUser.uid)
    .push({
        messages:messages
    })
    .then(res => {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
          }))
    })
    .catch(err => alert(err))
}

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.sendMsg(messages)}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    firebaseSDK.database()
    .ref('chat/' + firebaseSDK.auth().currentUser.uid)
    .on("value",message => {
        console.log(message.val())
        let messagesArr=[]
        message.forEach((child) => {
            messagesArr.push(child.val().messages[0]);
        });
        console.log(messagesArr)
        this.setState(previousState => ({
            messages: messagesArr
          }))
    // .then(
    // })
    // .catch(err => {
    //     console.log(err)
    //     this.setState({
    //         loader: false
    //     })
    })



    // firebaseSDK.database().ref("Chat").on(message =>
    //   this.setState(previousState => ({
    //     messages: GiftedChat.append(previousState.messages, message)
    //   })),
    // );
  }
  componentWillUnmount() {
    // firebaseSDK.refOff();
  }
}