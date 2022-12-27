import React, {useEffect, useState} from 'react'
import { Text, ActivityIndicator, Button, View } from 'react-native'

const LoadingScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
    navigation.replace("Home");
    }, 10000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
          <ActivityIndicator size="large" color="#ff0000" />
          <View style={{ marginTop: 10 }}>
            <Text style={{textAlign: 'center'}}>Loading Please wait...</Text>
          </View>
    </View>
  )
}

export default LoadingScreen;
