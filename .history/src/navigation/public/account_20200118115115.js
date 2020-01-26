import React from 'react'
import { Text, } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import SignUp from '../../sceens/public/signup/SignUp'
import { Icon, Button } from 'native-base'

export default createStackNavigator({
    'SignUp': {
        navigationOptions: {
           headerTitle: 'Criar Conta'
        },
        screen: SignUp
    },
}, {
    initialRouteName: 'SignUp',
    defaultNavigationOptions: ({ navigation: { navigate } }) => {
        return {
            headerStyle: {
                backgroundColor: '#00d627',
            },
            headerTitleStyle: {
                color: '#fff',
                fontWeight: 'bold',
            },
            headerRight: () => (<Button info small bordered><Text>Voltar</Text></Button>)
        }
    }
})