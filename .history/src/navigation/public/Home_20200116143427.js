import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BooksPage from '../../pages/public/books/BooksPage';

const Tab = createMaterialTopTabNavigator();

export function Public() {
  return (
    <Tab.Navigator initialRouteName={'Books'} tabBarOptions={{

    }}>
      <Tab.Screen name="Books" component={BooksPage} />
    </Tab.Navigator>
  );
}