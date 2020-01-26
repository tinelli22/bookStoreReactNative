import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Home from '../../sceens/private/home/Home'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'
import TabBar from '../../components/TabBar'
import Book from '../../sceens/private/book/Book'



export default createMaterialTopTabNavigator({
    Book: {
        name: 'Book',
        screen: Book,
        navigationOptions: {
            tabBarLabel: 'Livro',
        }
    },
    
}, {
    initialRouteName: 'Book',
    
    tabBarOptions: {
        style: {
            backgroundColor: '#123456',
            
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        },
    }
})