import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import SignUp from '../../sceens/public/signup/SignUp'
import { Icon, Button } from 'native-base'

export default  createStackNavigator({
    'SignUp': {
        navigationOptions: {
           headerTitle: 'Criar Conta'
        },
        screen: SignUp
    },
}, {
    initialRouteName: 'SignUp',
    
})