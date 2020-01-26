import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import SignUp from '../../sceens/public/signup/SignUp'

export default createStackNavigator({
    'SignUp': {
        navigationOptions: {
           headerTitle: 'Criar Conta'
        },
        screen: SignUp
    },
}, {
    initialRouteName: 'SignUp',
    defaultNavigationOptions: {
        headerBackground: '#00d627'
    }
})