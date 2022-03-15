import React, { useEffect } from 'react';
import {View,Image} from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        },3000)
    },[])
    return (
        <View style={{flex:1,backgroundColor:'#ffffff',justifyContent:'center'}}>
          <View style={{alignSelf:'center'}}>
            <Image source={require('../assets/splash.png')}></Image>
        </View>
        </View>
    );
}
export default SplashScreen;