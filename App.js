import React, { Component } from 'react';
import SwitchStack from './src/routes';
import { SafeAreaView } from 'react-navigation';
import AddUser from './src/screens/addUser';

class App extends Component {
  state = {  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <SwitchStack/>
        {/* <AddUser /> */}
      </SafeAreaView>
    );
  }
}

export default App;