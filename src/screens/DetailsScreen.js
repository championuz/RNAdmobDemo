import React from 'react'
import { Text, View, Button } from 'react-native'

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
