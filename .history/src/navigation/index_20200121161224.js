import React from 'react'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'

import Public from './public/public'
import Account from './public/account'
import Private from './private/private'

const Navigator = createSwitchNavigator({
    Public,
    'Account': { screen: Account },
    Private,

}, {
    initialRouteName: 'Public'
})

export default createAppContainer(Navigator)