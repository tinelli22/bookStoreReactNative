import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Books from '../sceens/public/books/Books'

export default createMaterialTopTabNavigator({
    Books,
}, {
    initialRouteName: 'Books',
    
})