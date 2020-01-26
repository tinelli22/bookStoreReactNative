import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BooksPage from '../../pages/public/books/BooksPage';

const Tab = createMaterialTopTabNavigator();

function Public() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Books" component={BooksPage} />
    </Tab.Navigator>
  );
}