import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SCREEN_WIDTH } from "../../utils/contants";
import { Dashboard, Logout, AddUser, Chat  } from "../../screens";
import { Header } from '../../components';
import SideMenu from "../../screens/SideMenu";
// import { HomeHeader, Header } from "../../components";

export const appStack = createStackNavigator({
    Dashboard: {
        navigationOptions: () => ({
            headerTitle: "Dashboard",
        }),
    },
    AddUser: {
        screen: AddUser,
        navigationOptions: () => ({
            headerTitle: "Add User",
        })
    },
    Chat: {
        screen:Chat,
        navigationOptions: () => ({
            headerTitle: "Chat",
        })
    }
}, {
        drawerType: 'slide',
        // overlayColor: 'rgba(0,0,0, 0.5)'
        overlayColor: 'transparent'
    }
)
export default AppDrawerContainer = createAppContainer(AppDrawer)