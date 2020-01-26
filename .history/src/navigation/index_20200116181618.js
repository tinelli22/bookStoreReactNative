import React from 'react'
import { createAppContainer, createSwitchNavigator, createNavigationContainer } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native'
import Public from './public'

const Navigator = createSwitchNavigator({
    Public,
}, {
    initialRouteName: 'Public'
})

export default createAppContainer(NavigationContainer(Navigator))