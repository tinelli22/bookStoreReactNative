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
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: '#123456',
            },
            headerTitleStyle: {
                color: '#fff',
                fontWeight: 'bold',
            },
            headerRight: () => (<Text style={{ color: '#fff', marginRight: 10,}}
            onPress={() => navigation.navigate('Public')}>Voltar</Text>)
        }
    }
})