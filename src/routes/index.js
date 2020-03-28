import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppDrawerContainer from './AppStack/AppStack';
import Auth from './AuthStack/AuthStack';
import Check from '../helpers/Check';


const SwitchStack = createSwitchNavigator({
    Loader: Check,
    Auth: Auth,
    App: AppDrawerContainer,
})

export default createAppContainer(SwitchStack)