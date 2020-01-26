import React from 'react'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'

import Public from './public/public'
import Account from './public/account'
import Private from './private/private'
import Drawer from './private/drawer'

const Navigator = createSwitchNavigator({
    Public,
    'Account': { screen: Account },
    //Private,
    Drawer,

}, {
    initialRouteName: 'Public'
})

export default createAppContainer(Navigator)