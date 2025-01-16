import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/constants/firebase"; 

const Screen = () => {
  const router = useRouter();

  // State for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login function
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      // Navigate to the home screen
      router.push("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <View>
      <StatusBar style="dark" />
      <Text style={styles.title}>WELCOME TO PRO FITNESS!</Text>
      <Image
        source={require("@/assets/images/IMG Layout-2.png")}
        style={{ width: "100%", height: 550, marginTop: -30 }}
      />

      <View>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail} // Update email state
        />
        <TextInput
          style={styles.input1}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword} // Update password state
        />
        <Text style={styles.lost}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.signup}>Or Login With</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 0 }}>
        <Image source={require("@/assets/images/gg.png")} style={styles.google} />
        <Image source={require("@/assets/images/apple.png")} style={styles.apple} />
      </View>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  title: {
    color: "#191919",
    fontSize: 35,
    top: 80,
    textAlign: "center",
    fontFamily: "Bebas Neue",
    fontWeight: "700",
  },
  input: {
    width: 460,
    height: 70,
    left: 12,
    top: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(105, 105, 105, 0.25)",
  },
  input1: {
    width: 460,
    height: 70,
    left: 12,
    top: 35,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(105, 105, 105, 0.25)",
  },
  button: {
    top: 70,
    width: 300,
    height: 70,
    left: 90,
    borderRadius: 20,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
  },
  lost: {
    top: 50,
    textAlign: "right",
    fontSize: 17,
    right: 20,
  },
  signup: {
    textAlign: "center",
    top: 90,
    fontSize: 22,
    fontFamily: "Bebas Neue",
    color: "#B0C929",
  },
  google: {
    height: 70,
    width: 57,
    top: 110,
    alignSelf: "center",
    marginHorizontal: 10,
    resizeMode: "cover",
  },
  apple: {
    height: 60,
    width: 60,
    top: 110,
    alignSelf: "center",
    marginHorizontal: 10,
    resizeMode: "cover",
  },
});
