import React from 'react'
import { globalStyles } from '../styles/Global';
import {Text,View,StyleSheet} from "react-native";
const Home = () => {
    return (
        <View style={[globalStyles.container]} >
            <Text style={[globalStyles.titleText]} >Home Page</Text>
        </View>
    )
}

export default Home
