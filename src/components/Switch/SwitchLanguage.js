import React from 'react'
import { View, Switch, StyleSheet, Text } from 'react-native'
import { HP, fonts, WP, RF, colors } from '../../utils/contants'

const SwitchLanguage = (props) => {
   return (
      <View style={styles.container}>
         <View style={styles.menuBodyContainer}>
            <Text style={styles.menuItemLeft}>{props.textLeft}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Switch
                  onValueChange={props.toggleSwitch}
                  trackColor={{ true: colors.btnGreen }}
                  value={props.switchValue} />
            </View>
         </View>

      </View>
   )
}



const styles = StyleSheet.create({
   menuBodyContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: HP('8'),
      borderTopWidth: 0.6,
      borderTopColor: "#efeaea",
      paddingRight: 10,
      width:WP(91)
   },
   container: {
      // flex: 1,
   },
   menuItemLeft: {
      color: 'darkgrey',
      fontSize: RF(16),
      fontFamily: fonts.med

   },
   menuItemRight: {
      color: '#8d8d8d',
      marginRight: WP('3'),
      fontSize: 16,
      fontFamily: fonts.reg,

   },
   imageStyle: {
      margin: 0,
      marginRight: WP('5'),
      // marginLeft:widthPercentageToDP('-40'),
      width: WP('2.5'),
      height: HP('2.5')
   }
})

export default SwitchLanguage;