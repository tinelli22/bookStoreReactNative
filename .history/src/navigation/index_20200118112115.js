import React from 'react'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'

import Public from './public/public'

const Navigator = createSwitchNavigator({
    Public,
    'Account': { screen: Books },
}, {
    initialRouteName: 'Public'
})

export default createAppContainer(Navigator)