import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import SignUp from '../../sceens/public/signup/SignUp'
import { Icon, Button } from 'native-base'

export default ({ navigation: { navigate } }) => createStackNavigator({
    'SignUp': {
        navigationOptions: {
           headerTitle: 'Criar Conta'
        },
        screen: SignUp
    },
}, {
    initialRouteName: 'SignUp',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#00d627',
        },
        headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
        },
        headerRight: () => (<Button>Voltar</Button>)
    }
})