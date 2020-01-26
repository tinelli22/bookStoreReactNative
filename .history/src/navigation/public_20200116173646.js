import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Books from '../sceens/public/books/Books'

const Tab = createMaterialTopTabNavigator()

export default function() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Books" component={Books} />
        </Tab.Navigator>
    )
}