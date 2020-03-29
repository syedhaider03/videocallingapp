import { Dimensions, PixelRatio, Platform, StyleSheet, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { RFValue } from "react-native-responsive-fontsize";
import { isIphoneX } from 'react-native-iphone-x-helper';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
export const headerHeight = Platform.OS === 'ios' ? 60 : 40;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const IS_IOS = Platform.OS === 'ios';
export const isX = isIphoneX;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
export const fonts = {
  bold: "Roboto-Bold",
  bolder: "Roboto-Black",
  med: "Roboto-Medium",
  reg: "Roboto-Regular",
  light: 'Roboto-Light'
}
export const colors = {
  orange: '#ff4b00',
  black: '#3c4245',
  graphite: '#202020',
  grey: '#919fa4',
  bg: '#f1f1f1',
  cardColor: '#ffffff',
  green: '#09a601',
  red: '#ff0000',
  darkgrey: '#d9d9d9',
  greyText: '#a7aeb5',
  darkgrey2: "#393e41",
  darkgrey3: "#575d63",
  searchBar: '#f1f1f1',
  grayishText: "#383838",
  border: "#c1cbda",
  sidemenu: "#fafafa",
  btnGreen: "#38b069",
  grad2: "#ef4269",
  grad1: "#f66b25",
  gradOrange: "#f47347",
  currGrey: "#929ba3",
  backGrey: '#e6e8e9'
}

export function RF(size) {
  return isIphoneX() ? RFValue(size) - 2 : RFValue(size);
}

export function WP(size) {
  return widthPercentageToDP(size)
}

export function HP(size) {
  return heightPercentageToDP(size)
}


export function CFL(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function floatPad(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}


export const micOff=require('../assets/images/off.png');
export const groupAdd=require('../assets/images/add-group.png');
export const cameraSwitch=require('../assets/images/camera.png');
export const mic=require('../assets/images/microphone.png');
export const plus=require('../assets/images/plus.png');
export const videoCall=require('../assets/images/video-call.png');
export const video=require('../assets/images/video.png');
export const muteSpeaker=require('../assets/images/mute.png');
export const speaker=require('../assets/images/speaker.png');
export const msg=require('../assets/images/msg.png');
export const msg2=require('../assets/images/msg2.png');
export const menu=require('../assets/images/menublack.png');
export const arrowshadow=require('../assets/images/arrowshadow.png');
export const home = require('../assets/images/home.png')
export const logout = require('../assets/images/logout.png')
export const profile = require('../assets/images/user.png')
export const search = require('../assets/images/search.png')

export const chat=require('../assets/images/message.png');
// export const =require('../assets/images/.png');
// export const =require('../assets/images/.png');
// export const =require('../assets/images/.png');
// export const =require('../assets/images/.png');
// export const =require('../assets/images/.png');
// export const =require('../assets/images/.png');










