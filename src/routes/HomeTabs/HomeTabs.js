import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { fonts, WP, RF, HP } from '../../utils/contants';
import { ListView, MapView, NearbyRestaurants } from '../../screens';

const TabScreen = createMaterialTopTabNavigator(
    {
        "List View": ListView,
        "Map View": MapView,
        "Nearby Restaurants": NearbyRestaurants
    },
    {
        lazy: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: "top",
        sceneContainerStyle: {
            backgroundColor: "#fcfcfc"
        },
        tabBarOptions: {
            upperCaseLabel: true,
            activeTintColor: "#343e48",
            allowFontScaling: true,
            inactiveTintColor: "#343e48",
            // renderIndicator: (param) => {
            //     console.log(param)
            //     return <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            //         <LinearGradient
            //             style={{ height: 5, width: WP(20), borderRadius: 5 }}
            //             start={{ x: 0, y: 0 }}
            //             end={{ x: 1, y: 0 }}
            //             colors={[colors.grad1, colors.grad2]}
            //         />
            //     </View>
            // },
            contentContainerStyle: {
                shadowColor: "darkgrey",
                shadowOpacity: 0.7,
                backgroundColor: "#fff",
                marginTop: HP(1),
                shadowOffset: {
                    width: 1,
                    height: 1
                },
                paddingRight: WP(5)
            },
            style: {
                // paddingVertical: 10,
                backgroundColor: ' #fff',

                // borderBottomWidth: 5,
                // borderBottomColor: '#afbdc3',
            },
            labelStyle: {
                fontSize: RF(16),
                fontFamily: fonts.reg,
                textTransform: "capitalize",
                color: '#343e48'
            },
            tabStyle: {
                // borderRightWidth: 0.20,
                // minWidth:WP(5),
                width: "auto",
                marginLeft: WP(2),
                // borderRightColor: '#D4D4D4',
                height: 50,
            },
            indicatorStyle: {
                height: 4,
                backgroundColor: "#F1524D",
                borderRadius: 5,
                // position:"absolute",
                marginBottom: -4,
                zIndex: 9999
                // alignSelf: "center"
                // borderRightColor:'white',
                // borderRightWidth:0.2,
                // borderLeftColor:'white',
                // borderLeftWidth:0.2
            },
        },
    }
);

const TabContainer = createAppContainer(TabScreen);

export default TabContainer
