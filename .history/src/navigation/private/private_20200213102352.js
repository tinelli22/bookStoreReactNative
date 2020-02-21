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
        screen: () => <Book isEdit={true} />,
        navigationOptions: {
            tabBarLabel: 'Livro',
        }
    },
    EditBook: {
        name: 'EditBook',
        screen: () => <Book isEdit={false} />,
        navigationOptions: {
            tabBarLabel: ' Editar Livro',
        }
    },
    
}, {
    initialRouteName: 'Book',
    
    tabBarOptions: {
        style: {
            backgroundColor: '#123456',
            alignItems: 'baseline'
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        },
    }
})