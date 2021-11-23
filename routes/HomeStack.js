import { createStackNavigator } from 'react-navigation-stack';
import {creatAppContainer} from "react-navigation"
import Home from '../components/Home';
import ReviewDetaisl from '../components/ReviewDetaisl';
const screens ={
    Home:{
        screen:Home
    },
    ReviewDetails:{
        screen:ReviewDetaisl
    }
}
const HomeStack = createStackNavigator(screens);


export default createStackNavigator(HomeStack);


