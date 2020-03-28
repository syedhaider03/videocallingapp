import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { colors, fonts, normalizeRF } from '../../utils/contants';
import PendingOrders from '../../screens/PendingOrders/PendingOrders';
import InProgressOrders from '../../screens/InProgressOrders/InProgressOrders';
import CompletedOrders from '../../screens/CompletedOrders/CompletedOrders';

TabScreen = createMaterialTopTabNavigator(
    {
        Pending:PendingOrders,
       "In Progress":InProgressOrders,
        Completed:CompletedOrders     
    },
    {
        lazy: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            upperCaseLabel: true,
            activeTintColor: colors.orange,
            inactiveTintColor: colors.grey,
            style: {
                paddingVertical: 10,
             
                backgroundColor: colors.bg,
                borderBottomWidth: 5,
                borderBottomColor: '#afbdc3',
                fontSize: normalizeRF(20),
            },
            labelStyle: {
                fontSize: normalizeRF(15.80),
                fontFamily: fonts.med,
            },
            tabStyle: {
                borderRightColor: '#D4D4D4',
                height: 40,
                borderRightWidth:0.4,
                borderRightColor:colors.grey,
            },
            indicatorStyle: {
                height: 5,
                backgroundColor: colors.orange,
                marginBottom:-5,
                borderRightColor:'white',
                borderRightWidth:0.2,
                borderLeftColor:'white',
                borderLeftWidth:0.2
            },
        },
    }
);

 TabContainer = createAppContainer(TabScreen);
 export default TabContainer
