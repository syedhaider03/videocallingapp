import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SCREEN_WIDTH } from "../../utils/contants";
import { HomeHeader, Header } from "../../components";
import BottomTabs from '../BottomHomeTabs/BottomHomeTabs';
import { RestaurantDetails, Menu, TableBookingRequest, Payment, ReservationDetails, SideMenu, CompletedReservationDetails, Settings, TermsAndConditions, FAQs, ContactUs, MyWallet } from "../../screens";
import MyInvoicesTabs from '../../routes/MyInvoicesTabs/MyInvoicesTabs';

export const appStack = createStackNavigator({

    Home: {
        screen: BottomTabs,
        navigationOptions: () => ({
            headerTitle: "my profile",
            header: null,
            // header: props => <HomeHeader {...props} filteredPress={false} />,
            // headerStyle: {
            //     backgroundColor: "#fff"
            // },
        })
    },
    RestaurantDetails: {
        screen: RestaurantDetails,
        navigationOptions: () => ({
            header: null,
        })
    },

    TableBookingRequest: {
        screen: TableBookingRequest,
        navigationOptions: () => ({
            header: (props) => <Header isBack {...props} />,
            headerTitle: "Table Booking Request",

        })
    },
    Payment: {
        screen: Payment,
        navigationOptions: () => ({
            header: (props) => <Header isBack {...props} />,
            headerTitle: "Payment",

        })
    },
    ReservationDetails: {
        screen: ReservationDetails,
        navigationOptions: () => ({
            header: (props) => <Header isBack {...props} />,
            headerTitle: "Reservation Details",

        })
    },
    Menu: {
        screen: Menu,
        navigationOptions: () => ({
            header: null
        })
    },
    MyInvoices: {
        screen: MyInvoicesTabs,
        navigationOptions: () => ({
            header: (props) => <Header color={"#f9f9f9"} noShadow {...props} />,
            headerTitle: "My Invoices",
        })
    },
    CompletedReservationDetails: {
        screen: CompletedReservationDetails,
        navigationOptions: () => ({
            header: (props) => <Header isBack {...props} />,
            headerTitle: "Reservation Details",
        })
    },
    Settings: {
        screen: Settings,
        navigationOptions: () => ({
            header: (props) => <Header {...props} />,
            headerTitle: "Settings",
        })
    },
    TermsAndConditions: {
        screen: TermsAndConditions,
        navigationOptions: () => ({
            header: (props) => <Header isBack {...props} />,
            headerTitle: "Terms And Conditions",
        })
    },
    Faqs: {
        screen: FAQs,
        navigationOptions: () => ({
            header: (props) => <Header isBack {...props} />,
            headerTitle: "Terms And Conditions",
        })
    },
    ContactUs: {
        screen: ContactUs,
        navigationOptions: () => ({
            header: (props) => <Header {...props} />,
            headerTitle: "Contact Us",
        })
    },
    MyWallet: {
        screen: MyWallet,
        navigationOptions: () => ({
            header: (props) => <Header {...props} />,
            headerTitle: "My Wallet",
        })
    },
    // navigationOptions: () => ({
    //     headerTitle: "my profile",
    //     header: props => <HomeHeader {...props} filteredPress noTransform />
    // })
}, {
    defaultNavigationOptions: {
        // header: null,

    },

})


export const AppDrawer = createDrawerNavigator({
    Home: appStack,
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