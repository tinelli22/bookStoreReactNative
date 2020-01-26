import React from 'react'
import { createAppContainer, createSwitchNavigator, createNavigationContainer } from 'react-navigation'
import Public from './public'

const Navigator = createSwitchNavigator({
    Public,
}, {
    initialRouteName: 'Public'
})

export default createAppContainer(createNavigationContainer(Navigator))