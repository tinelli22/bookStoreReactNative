import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../../sceens/private/home/Home'
import MenuContent from '../../components/MenuContent'

export default createDrawerNavigator({

    Home: {
        name: 'Home',
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: MenuContent,
})