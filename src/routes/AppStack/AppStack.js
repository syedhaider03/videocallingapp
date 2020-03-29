import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SCREEN_WIDTH } from "../../utils/contants";
import { Dashboard, Logout } from "../../screens";
import {Header} from '../../components';
import SideMenu from "../../screens/SideMenu";
// import { HomeHeader, Header } from "../../components";

export const appStack = createStackNavigator({
    Dashboard: {
    screen:Dashboard,
    navigationOptions: () => ({
        headerTitle: "Dashboard",
    })
}

}, {
    defaultNavigationOptions: {
        header:(props)=> <Header {...props}/>,

    },

})


export const AppDrawer = createDrawerNavigator({
    Home: appStack,
    // Logout:Logout
}
    ,
    {
        contentComponent: props => <SideMenu {...props} />,
        drawerWidth: SCREEN_WIDTH * 0.68,
        drawerType: 'slide',
        // overlayColor: 'rgba(0,0,0, 0.5)'
        overlayColor: 'transparent'
    }
)
export default AppDrawerContainer = createAppContainer(AppDrawer)