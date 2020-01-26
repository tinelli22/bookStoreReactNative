import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../../sceens/private/home/Home'
import MenuContent from '../../components/MenuContent'
import Info from '../../sceens/private/infoUser/Info'

export default createDrawerNavigator({

    Home: {
        name: 'Home',
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    Drawer: {
        name: 'Drawer',
        screen: Info,
        navigationOptions: {
            title: 'Informações',
        }
    }
}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: MenuContent,
})