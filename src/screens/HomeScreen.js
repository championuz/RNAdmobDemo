import React, {useEffect, useState} from 'react'
import { Text, Button, View } from 'react-native'

const HomeScreen = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
    <Text style={{textAlign: 'center'}}>HomeScreen</Text>
    <Button
    style={{marginBottom: 10}}
      onPress={()=>navigation.navigate("Details")}
      title="Go to Details Screen"
    />

<Button
      title="Display Rewarded Ads"
    />
    </View>
    </View>
  )
}

export default HomeScreen;
