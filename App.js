import React, { Component } from 'react';
import SwitchStack from './src/routes';
import { SafeAreaView } from 'react-navigation';

class App extends Component {
  state = {  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <SwitchStack/>
      </SafeAreaView>
    );
  }
}

export default App;