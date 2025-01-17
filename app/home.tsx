import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar'; 
import { useRouter } from "expo-router";
import Animated, { FadeInRight } from "react-native-reanimated";
import Searchbar from "@/components/search"
import { SearchBar } from "react-native-screens";

const Screen = () => {
  const router = useRouter();

  return (
<View>
<StatusBar style="light" />
    <View style={{width: '100%', height:339, position: 'relative'}}>
        <View style={{width: '100%', height: 257,   position: 'absolute', backgroundColor: '#B0C929', borderRadius: 30,}}></View>
        <View>
        <View style={styles.top}>
        <Image source={require("@/assets/images/profile.jpg")} style={{width: 80, height: 80, left: 20,  top: 40, position: 'absolute', borderRadius: 9999, }}/>
        <Image source={require("@/assets/images/noti.png")} style={{width: 35, height: 35, left:430,   top: 60, position: 'absolute', }}/>
        
    </View>
    <View>
      <Searchbar/>
    </View>
        </View>
        
    </View>

</View>
  );
};

export default Screen;

const styles = StyleSheet.create({
top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    
}

});