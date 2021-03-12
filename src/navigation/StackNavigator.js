import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Add from '../screens/Add'
import Details from '../screens/Details'

const Stack = createStackNavigator();

export default class HomeStackNavigator extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Anasayfa">
                <Stack.Screen name="Anasayfa" component={Home}/>
                <Stack.Screen name="Ekle" component={Add} />
                <Stack.Screen name="Detaylar" component={Details} />
            </Stack.Navigator>
        )
    }
}
