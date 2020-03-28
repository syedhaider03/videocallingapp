import React from 'react';
import { View,StatusBar } from 'react-native';
import { STATUSBAR_HEIGHT, colors } from '../../utils/contants';

const StatusBarComponent = (props) => {
    return (
         <View style={[{ height: STATUSBAR_HEIGHT,backgroundColor:colors.graphite} ]}> 
          <StatusBar backgroundColor={colors.graphite} barStyle="light-content"/>
         </View>
    );
}

export default StatusBarComponent;