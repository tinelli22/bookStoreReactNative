import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BooksPage from '../../pages/public/books/BooksPage';

const Tab = createMaterialTopTabNavigator();

export function Public() {
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