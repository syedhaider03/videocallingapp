import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { HP, fonts, RF, WP } from '../../utils/contants';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#e6e8e9' }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#e6e8e9' }]} />
);

const ThirdRoute = () => (
    <View style={[styles.scene, {backgroundColor: '#e6e8e9' }]} />
);

const initialLayout = {
    width: Dimensions.get('window').width,
    backgroundColor: "#fff"
};

export default TabViewExample = (props) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Restaurant Info' },
        { key: 'second', title: 'Timings' },
        { key: 'third', title: 'Menu' },

    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute
    });

    return (
        <TabView
            lazy
            navigationState={{ index, routes }}
            style={{
                borderWidth:0.6,
                borderColor:"darkgrey",
                backgroundColor: "#fff",
                marginTop: HP(1),
                shadowOffset: {
                    width: 1,
                    height: 1
                },
            }}
            sceneContainerStyle={{
                // color: "#fff",


            }}
            renderScene={renderScene}
            renderTabBar={(props) =>
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: 'red' }}
                    style={{
                        backgroundColor: 'white', shadowOpacity: 1,
                        shadowColor: "darkgrey",
                        width:"auto",
                        height:HP(7),
                        justifyContent:'center'
                    }}
                    // renderIndicator={()=><View style={{width:}}></View>}
                    renderLabel={({ route, focused, color }) => (
                        <Text style={{ color: "#000", fontSize: RF(16) ,fontFamily:fonts.reg}}>
                            {route.title}
                        </Text>
                    )}
                />}

            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});