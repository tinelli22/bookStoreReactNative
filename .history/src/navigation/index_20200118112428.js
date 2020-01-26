import React from 'react'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'

import Public from './public/public'
import Account from './public/account'

const Navigator = createSwitchNavigator({
    Public,
    'Account': { screen: Account },
}, {
    initialRouteName: 'Public'
})

export default createAppContainer(Navigator)