import React, {useState, useEffect} from 'react'
import { Text, View, Button } from 'react-native'
import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';


const Details = ({navigation}) => {


  return (
    <View>
    <Text style={{textAlign: 'center'}}>Details</Text>
    <Button
      onPress={()=>navigation.navigate("Home")}
      title="Go to Home Screen"
    />
    </View>
  )
}

export default Details;
