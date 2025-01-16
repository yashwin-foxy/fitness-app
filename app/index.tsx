import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar'; 
import { useRouter } from "expo-router";
import Animated, { FadeInRight } from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" /> 
      <Image source={require('@/assets/images/IMG Layout.png')} style={{ width: '100%', height: '550', marginBottom: 40,  }} />
      <View style={styles.title}>
        <Text style={styles.proText}>PRO </Text>
        <Text style={styles.fitnessText}>FITNESS</Text>
    </View>
    <View>
      <Text style={styles.Text}>We train your body to be </Text>
      <Text style={styles.Text01}>great and fit.</Text>
    </View>
    

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/screen")}>
        <Animated.Text style={styles.btnText} entering={FadeInRight.delay(300).duration(500)}>LET'S START</Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: '700',
  },
  h2: {
    fontSize: 35,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 40,
  },
  btnText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    fontFamily:'bebas-neue'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    flexDirection: 'row',
  },  
  proText: {
    color: '#00000',
    fontSize: 48,
    fontWeight: '700',
  },
  fitnessText: {
    color: '#B0C929',
    fontSize: 48,
    fontWeight: '700',
  },

  Text: {
    fontSize: 22,
    fontWeight: '400',
    color: '#00000',
    marginTop: 15,
  },
  Text01: {
    fontSize: 22,
    fontWeight: '400',
    color: '#00000',
    textAlign: 'center',
  },
});
