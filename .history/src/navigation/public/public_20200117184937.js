import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Books from '../../sceens/public/books/Books'
import SignUp from '../../sceens/public/signup/SignUp'
import Account from './account'

export default createMaterialTopTabNavigator({
    'Books': {
        navigationOptions: {
            tabBarLabel: 'Livros'
        },
        screen: Books
    },
    'SignUp': {
        navigationOptions: {
            tabBarLabel: 'Conta'
        },
        screen: SignUp
    },
    
}, {
    initialRouteName: 'Books',
    tabBarOptions: {
        style: {
            backgroundColor: '#00d627',
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 20,
        }
    }
})