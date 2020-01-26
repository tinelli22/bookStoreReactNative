import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Home from '../../sceens/private/home/Home'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'




export default createMaterialTopTabNavigator({
    'home': {
        navigationOptions: {
            tabBarLabel: 'Home',
        },
        screen: Home
    },
    
}, {
    initialRouteName: 'home',
    tabBarComponent: () => (
        <View style={{backgroundColor: '#00d627', flexDirection: 'row'}}>
            <Icon name={'bars'} />
        </View>
    ),
    tabBarOptions: {
        style: {
            backgroundColor: '#00d627',
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        },
        showIcon: true,
    }
})