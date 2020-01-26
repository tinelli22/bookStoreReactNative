import React from 'react'
import { createSwitchNavigator, createNavigationContainer } from 'react-navigation'
import { createAppContainer } from '@react-navigation/native'
import Public from './public'

const Navigator = createSwitchNavigator({
    Public,
}, {
    initialRouteName: 'Public'
})

export default createAppContainer(Navigator)