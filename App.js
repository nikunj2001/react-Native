import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import About from './components/About';
import Home from './components/Home';
import * as Font from 'expo-font';
import Navigator from "./routes/HomeStack";
import ReviewDetaisl from './components/ReviewDetaisl';
import AppLoading from 'expo-app-loading';
const getFonts= ()=> Font.loadAsync ({
      "noto-regular":require("./assets/fonts/NotoSans-Regular.ttf"),
      "noto-bold":require("./assets/fonts/NotoSans-Bold.ttf"),
    });




const  App =()=> {
   const [fontsLoaded,setFontsLoaded]=useState(true);
   if(fontsLoaded ){
return (
    <View style={styles.container}>
       <Navigator/>
       <ReviewDetaisl/>
    </View>
  );
   }  else{
     return(
      <AppLoading startAsync={getFonts} 
      onFinish={()=>setFontsLoaded(true)}
      />
     )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
export default App;