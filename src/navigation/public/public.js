import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Books from '../../sceens/public/books/Books'
import Login from '../../sceens/public/login/Login'



export default createMaterialTopTabNavigator({
    'Books': {
        navigationOptions: {
            tabBarLabel: 'Livros'
        },
        screen: Books
    },
    'Login': {
        navigationOptions: {
            tabBarLabel: 'Conta'
        },
        screen: Login
    },
    
}, {
    initialRouteName: 'Books',
    tabBarOptions: {
        style: {
            backgroundColor: '#123456',
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        }
    }
})