import React from 'react'
import { Text, Button, View } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text style={{textAlign: 'center'}}>HomeScreen</Text>
    <Button
      onPress={()=>navigation.navigate("Details")}
      title="Go to Details Screen"
    />
    </View>
  )
}

export default HomeScreen;
