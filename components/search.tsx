import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";



type props = {}

const SearchBar = (props: props) => {
    return (
        <View style={styles.container}>
            <View style={styles.SearchBar}>
            <Ionicons name='search-outline' size={24} style={styles.icon} />
            <TextInput placeholder="Search" placeholderTextColor={'#1f1e1e'} style={styles.searchText} autoCapitalize="none" />
            </View>
            
        </View>
            
    
    )
       
}

export default SearchBar

const styles = StyleSheet.create({

    container:{
        marginHorizontal:20,

    },

    SearchBar: {
        backgroundColor: '#dedede',
        marginTop: 170,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 30,
        flexDirection: 'row',
        gap : 8,

    },

    searchText: {
        fontSize: 18,
        flex: 1,
        color: '#000000'

    },

    icon:{
        top: 10,
        marginLeft: 10,

    },


  
})