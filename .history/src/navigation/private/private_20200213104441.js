import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../../sceens/private/home/Home'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'
import TabBar from '../../components/TabBar'
import Book from '../../sceens/private/book/Book'



export default createStackNavigator({
    Book: {
        name: 'Book',
        screen: (props) => <Book {...props} isEdit={false} />,
        navigationOptions: {
            tabBarLabel: 'Livro',
        }
    },
    EditBook: {
        name: 'EditBook',
        screen: (props) => <Book {...props} isEdit={true} />,
        navigationOptions: {
            tabBarLabel: ' Editar Livro',
        }
    },
    
}, {
    initialRouteName: 'Book',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#123456'
        },
        headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
        }
    }
})