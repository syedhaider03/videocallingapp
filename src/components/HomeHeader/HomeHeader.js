import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { WP, HP, menu, RF, logosm, search, fonts, filterdark, staryellow, stargrey, isX, arrowLeft, arrowRight, overlay, banner, } from '../../utils/contants';
import Radio from '../Radio/Radio';
import CheckBoxWithText from '../CheckBoxWithText/CheckBoxWithText';
import Stars from 'react-native-stars';
import Button from '../Button/Button';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper'
import { DrawerActions } from 'react-navigation-drawer';
import { withNavigation } from 'react-navigation';

class HomeHeader extends PureComponent {
    state = {
        isFilterVisible: false,
        carouselImages: [
            {
                image: banner,
                heading: "doors freestyle grill",
                body: "steakhouse, seafood, international, grill mediterranean, barbecue"
            },
            {
                image: require("../../Mock/res3.jpg"),
                heading: "macdonalds ",
                body: "The Clubhouse, The Chicken Mexicano, The Mushroom, Veggie Deluxe"
            },
            {
                image: require("../../Mock/res1.jpg"),
                heading: "barilla restaurant ",
                body: "steakhouse, seafood, international, grill mediterranean, barbecue"
            },



        ],
        selectedFilter:null,
        bookingSelected:false
    }
    toggleFilter = () => {
        this.setState(prev => ({
            isFilterVisible: !prev.isFilterVisible
        }))
    }

    toggleBooking=()=>{
        this.setState(prev=>({
            bookingSelected:!prev.bookingSelected
        }))
    }

    changeSelectedFilter=(index)=>{
        this.setState({
            selectedFilter:index
        })
    }
    render() {
        console.log(this.props)

        const { isFilterVisible: filteredPress } = this.state;
        // if (this.props.scene.route.index === 0) {
        return (
            <>
                <Animatable.View useNativeDriver animation={"pulse"} style={[styles.container, filteredPress && { height: isX() ? HP(57.5) : HP(60) }]}>
                    <View style={[styles.topView, filteredPress ? { marginTop: HP(2), flex: 0.3 } : null]}>
                        <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} style={styles.menuBtn}>
                            <Image style={[styles.menuImg, filteredPress && { marginTop: HP(1) }]} source={menu} />
                        </TouchableOpacity>
                        <View style={[styles.logoContainer, filteredPress && { height: HP(9), justifyContent: "flex-start" }]}>
                            <Image source={logosm} style={styles.logo} />
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        {!filteredPress ?
                            <View style={styles.inputView}>
                                <View style={styles.searchView}>
                                    <Image style={styles.searchImg} source={search} />
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={"Search for restaurants,dishes..."}
                                />
                            </View> : null}
                        {
                            !filteredPress ?
                                <TouchableOpacity onPress={this.toggleFilter} style={styles.filterContainer}>
                                    <Animatable.View
                                        useNativeDriver
                                        animation={"bounceIn"}
                                    >
                                        <Image style={styles.filterImg} source={filterdark} />
                                    </Animatable.View>
                                </TouchableOpacity>
                                :
                                <Animatable.View
                                    useNativeDriver
                                    animation={"flipInX"}
                                    style={[styles.filterContainer, filteredPress ? styles.filteredOpenView : null]}>
                                    {filteredPress &&
                                        <>
                                            <View style={styles.filteredInputContainer}>
                                                <View style={styles.searchView}>
                                                    <Image style={styles.searchImg} source={search} />
                                                </View>
                                                <TextInput
                                                    style={styles.textInputFilter}
                                                    placeholder={"Al Hadheera"}
                                                />
                                                <TouchableOpacity onPress={this.toggleFilter} style={styles.filterImgView}>
                                                    <Image style={styles.filterImg} source={filterdark} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.radioSelectView}>
                                                <Radio
                                                    text={"Search by Cuisine"}
                                                    index={1}
                                                    onPress={()=>this.changeSelectedFilter(1)}
                                                    selected={this.state.selectedFilter==1}
                                                />
                                                <Radio
                                                    text={"Search by Price"}
                                                    index={2}
                                                    onPress={()=>this.changeSelectedFilter(2)}
                                                    selected={this.state.selectedFilter==2}                                                />
                                                <Radio
                                                    text={"Search by Restaurant"}
                                                    onPress={()=>this.changeSelectedFilter(3)}
                                                    selected={this.state.selectedFilter==3}
                                                />
                                            </View>
                                            <CheckBoxWithText onPress={this.toggleBooking} selected={this.state.bookingSelected} title={"Available For Booking"} />
                                            <View style={styles.ratingView}>
                                                <Text style={styles.ratingText}>Select Rating</Text>
                                                <Stars
                                                    default={3}
                                                    // disabled
                                                    spacing={3}
                                                    count={5}
                                                    // update={(val) => { this.setState({ starRating: val }) }}
                                                    starSize={RF(20)}
                                                    fullStar={staryellow}
                                                    emptyStar={stargrey}
                                                />
                                            </View>
                                            <Button
                                                width={WP('70')}
                                                height={HP(6)}
                                                name={"search now"}
                                                textStyle={{
                                                    fontSize: RF(16),
                                                }}
                                                btnStyle={{ marginTop: HP(1) }}
                                                onPress={this.toggleFilter}
                                            />
                                        </>
                                    }
                                </Animatable.View>
                        }
                    </View>
                </Animatable.View>
                {/* <View style={styles.carouselHeader}>
                        <Swiper
                            style={styles.wrapper}
                            showsButtons={true}
                            // autoplay={true}
                            buttonWrapperStyle={{
                                // marginTop: -HP(1)
                            }}
                            prevButton={<Image style={styles.arrow} source={arrowLeft} />}
                            nextButton={<Image style={styles.arrow} source={arrowRight} />}
                            showsPagination={false}
                        >
                            {this.state.carouselImages.map(carousel => (
                                <View style={styles.slide}>
                                    <ImageBackground
                                        source={carousel.image}
                                        style={styles.image}
                                        resizeMode="cover"
                                    >
                                        <Image style={styles.overlay} source={overlay} />
                                        <Animatable.View
                                            animation={"bounceIn"}
                                            useNativeDriver
                                            style={styles.carouselImageDetails}
                                        >
                                            <View style={styles.textBodyView}>
                                                <Text style={styles.carouselHeading}>{carousel.heading}</Text>
                                                <Text numberOfLines={2} style={styles.carouselBodyText}>{carousel.body}</Text>
                                            </View>
                                        </Animatable.View>
                                    </ImageBackground>
                                </View>
                            ))
                            }
                        </Swiper >
                    </View> */}
            </>
        );
        // }
        // else {
        //     return (null)
        // }
    }
}


const styles = StyleSheet.create({
    container: {
        width: WP(100),
        height: HP(13),
        // borderWidth:1,
        // paddingBottom:HP(1),
        paddingHorizontal: WP(3),
        backgroundColor: "#fff",
        shadowColor: "darkgrey",
        shadowOpacity: 1,
        elevation: 5
    },
    topView: {
        flex: 0.5,
        flexDirection: 'row',
    },
    menuImg: {
        width: RF(13) * 1.444,
        height: RF(13),
        marginTop: HP(2.1)
    },
    menuBtn: {
        flex: 0.1,
        // justifyContent: 'center',
        // backgroundColor:'red',
        alignItems: 'center',
    },
    logo: {
        width: isX() ? WP(9) * 1.041 : WP(8) * 1.041,
        height: isX() ? WP(9) : WP(8),
        alignSelf: 'center',
        marginLeft: -WP(8),
        // marginTop: HP(0.5)
    },
    logoContainer: {
        height: HP(6),
        justifyContent: 'center',
        flex: 0.9
    },
    bottomView: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: HP(1),
        justifyContent: "space-between"
        // backgroundColor: "red"
    },
    inputView: {
        flex: 0.85,
        backgroundColor: "#f2f2f2",
        height: HP(5),
        borderRadius: WP(2),
        flexDirection: 'row',
        marginLeft: WP(2),

    },
    searchView: {
        flex: 0.17,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchImg: {
        width: RF(16),
        height: RF(16)
    },
    textInput: {
        flex: 0.83,
        fontFamily: fonts.med,
        fontSize: RF(14),
        color: "#7c7c7c"
    },
    filterContainer: {
        flex: 0.115,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: HP(5),
        borderRadius: WP(2)
    },
    filterImg: {
        width: WP(5) * 0.692,
        height: WP(5)
    },
    filteredOpenView: {
        flex: 1,
        height: isX() ? HP(46.5) : HP(48),
        // marginTop: HP(50),
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        paddingHorizontal: WP(3),
        paddingTop: HP(0.5),
        marginVertical: HP(2),
        flexDirection: "column"
    },
    textInputFilter: {
        flex: 1,
        fontFamily: fonts.med,
        fontSize: RF(17),
        color: "#7c7c7c",
        // backgroundColor:"red"
    },
    filteredInputContainer: {
        width: WP(86),
        height: HP(5),
        flexDirection: 'row',
        borderBottomColor: "darkgrey",
        borderBottomWidth: 0.5
        // backgroundColor:"red"
    },
    filterImgView: {
        flex: 0.06,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioSelectView: {
        height: isX() ? HP(15) : HP(17),
        width: WP(86),
        borderBottomColor: "darkgrey",
        borderBottomWidth: 0.5,
        // backgroundColor:'red'
    },
    ratingView: {
        width: WP(80),
        height: HP(8),
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:"red"
    },
    ratingText: {
        fontSize: RF(16),
        fontFamily: fonts.light,
        color: "#000",
        marginLeft: WP(6),
        // marginTop: 2,
    },
    slide: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    image: {
        flex: 1,
        // width: WP(100),
        // height: HP(40),
        resizeMode: "cover"
    },
    carouselHeader: {
        height: isX() ? HP(23) : HP(25)
    },
    arrow: {
        width: RF(11),
        height: RF(19)
    },
    overlay: {
        flex: 1,
        opacity: 1
    },
    carouselImageDetails: {
        position: "absolute",
        height: isX() ? HP(23) : HP(25),
        width: WP(100),
        // backgroundColor:"red",
        // alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        paddingLeft: WP(8)
    },
    carouselHeading: {
        fontFamily: fonts.bold,
        fontSize: RF(19),
        textTransform: "capitalize",
        color: "#fff",
        marginBottom: HP(0.5)
    },
    carouselBodyText: {
        fontFamily: fonts.med,
        fontSize: RF(15),
        textTransform: "capitalize",
        // color: "#929ba3"
        color: "#bbc2c9"
    },
    textBodyView: {
        marginBottom: HP(2)
    },
})
export default withNavigation(HomeHeader);