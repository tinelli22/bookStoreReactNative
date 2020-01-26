import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Books from '../../sceens/public/books/Books'
import Account from './account'

export default createMaterialTopTabNavigator({
    'Books': {
        navigationOptions: {
            tabBarLabel: 'Livros'
        },
        screen: Books
    },
    'account': Account
    
}, {
    initialRouteName: 'Books',
    tabBarOptions: {
        style: {
            backgroundColor: '#00d627',
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        }
    }
})