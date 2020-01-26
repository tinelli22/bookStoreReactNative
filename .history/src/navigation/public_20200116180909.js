import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Books from '../sceens/public/books/Books'

const Tab = createMaterialTopTabNavigator()

export default function Public() {
    return(
        <Tab.Navigator initialRouteName={'Books'}>
            <Tab.Screen name="Books" component={Books} />
        </Tab.Navigator>
    )
}