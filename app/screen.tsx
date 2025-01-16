import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar'; 
import { useRouter } from "expo-router";
import Animated, { FadeInRight } from "react-native-reanimated";

const Screen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" /> 
      <Image source={require('@/assets/images/sc.png')} style={{ width: '100%', height: '550', marginBottom: 20, marginTop: -50  }} />
      <View>
        <Text style={styles.Text1}>PERFECT BODY</Text>
        <Text style={styles.Text2}>DOING <Text style={styles.Text3}>CROSSFIT</Text> </Text>
        <Text style={styles.Text4}>EXERCISES</Text>
    </View>

    <View style={styles.bottom}>
        <TouchableOpacity  onPress={() => router.push("/login")}>
            <Text style={styles.button}>Skip</Text>    
        </TouchableOpacity>

        <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/screen2')}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>

    </View>

    

      
    </View>
  );

};
export default Screen;

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},

Text1:{
fontSize: 48,
fontWeight:'700',
textAlign:'center',
fontFamily: 'Bebas Neue',
},

Text2:{
fontSize: 48,
fontWeight: '700',
textAlign: 'center',
color: '#00000',
fontFamily: 'Bebas Neue',
},

Text3:{
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
    color: '#B0C929',
    fontFamily: 'Bebas Neue',
    },

Text4:{
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
    color: '#00000',
    fontFamily: 'Bebas Neue',
    },
        
button:{
    fontFamily:'Montserrat',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    },


bottom:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
},

dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    },


dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
     marginHorizontal: 5,
    },

activeDot: {
    backgroundColor: 'green',
    },
});
