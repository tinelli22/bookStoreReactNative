import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import SignUp from '../../sceens/public/signup/SignUp'

export default createStackNavigator({
    'SignUp': {
        navigationOptions: {
            tabBarLabel: 'Criar Conta'
        },
        screen: SignUp
    },
}, {
    initialRouteName: 'SignUp'
})