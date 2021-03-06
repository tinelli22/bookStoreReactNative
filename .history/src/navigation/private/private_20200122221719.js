import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Home from '../../sceens/private/home/Home'
import { Icon } from 'native-base'



export default createMaterialTopTabNavigator({
    'home': {
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: <Icon name={'bars'} type={'FontAwesome'} color={'#fff'} />
        },
        screen: Home
    },
    
}, {
    initialRouteName: 'home',
    tabBarOptions: {
        style: {
            backgroundColor: '#00d627',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: "center",
        },
        activeTintColor: '#fff',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        },
        showIcon: true,
    }
})