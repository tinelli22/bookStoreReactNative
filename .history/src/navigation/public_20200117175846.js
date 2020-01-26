import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Books from '../sceens/public/books/Books'

export default createMaterialTopTabNavigator({
    'Books': {
        navigationOptions: {
            tabBarLabel: 'Livros'
        },
        screen: Books
    },
}, {
    initialRouteName: 'Books',

})