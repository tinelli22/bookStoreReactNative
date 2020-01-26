import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Home from '../../sceens/private/home/Home'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'
import TabBar from '../../components/TabBar'



export default createMaterialTopTabNavigator({
    'home': {
        navigationOptions: {
            tabBarLabel: 'Home',
            title: 'Home',
            tabBarIcon: <Icon type={'FontAwesome'} name={'bars'} />
        },
        screen: Home
    },
    
}, {
    initialRouteName: 'home',
    
    tabBarOptions: {
        style: {
            backgroundColor: '#00d627',
            flexDirection: 'column',
            alignItems: 'baseline',
            justifyContent: 'flex-start',
            
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        },
        showIcon: true,
    }
})