import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar'; 
import { useRouter } from "expo-router";
import Animated, { FadeInRight } from "react-native-reanimated";

const Screen = () => {
  const router = useRouter();

  return (
<View>
    <View style={{width: '100%', height:339, position: 'relative'}}>
        <View style={{width: '100%', height: 247,   position: 'absolute', backgroundColor: '#B0C929', borderRadius: 10,             }}></View>
        <View style={{width: 214.84, height: 214.84, left: 49.02, top: 12.51, position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.10)'}}>
        <View style={{width: 70.67, height: 44, position: 'relative'}}>
        <View style={{width: 20.86, height: 16.69, left: 0, top: 13.42, position: 'absolute', backgroundColor: 'white'}}></View>
        <Image source={require("@/assets/images/profile.jpg")} style={{width: 44, height: 44, left: 26.67, top: 0, position: 'absolute', borderRadius: 9999, }}/>
    </View>
        </View>
        <View style={{width: 214.84, height: 214.84, left: 0, top: 0, position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.10)'}}></View>
    </View>

</View>
  );
};

export default Screen;