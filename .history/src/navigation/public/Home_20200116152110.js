import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation'
import BooksPage from '../../pages/public/books/BooksPage';

const Tab = createMaterialTopTabNavigator();

function Public() {
  return (
    <Tab.Navigator initialRouteName={'Books'} tabBarOptions={{
        activeTintColor: '#00bd78',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#00a368',
        }
    }}>
      <Tab.Screen name="Books" component={BooksPage} options={{ tabBarLabel: 'Livros' }} />
    </Tab.Navigator>
  );
}

export default createAppContainer(
    createSwitchNavigator({
        public: Public
    },{
        initialRouteName: 'public'
    })
)