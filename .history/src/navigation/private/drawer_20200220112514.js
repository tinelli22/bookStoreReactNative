import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from '../../sceens/private/home/Home'
import MenuContent from '../../components/MenuContent'
import Info from '../../sceens/private/infoUser/Info'
import MyBooks from '../../sceens/private/myBooks/MyBooks'
import Logout from '../../sceens/private/logout/Logout'

export default createDrawerNavigator({

    Home: {
        name: 'Home',
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    Info: {
        name: 'Info',
        screen: Info,
        navigationOptions: {
            title: 'Informações',
        }
    },
    MyBooks: {
        name: 'MyBooks',
        screen: MyBooks,
        navigationOptions: {
            title: 'Meus Livros',
        }
    },
    Exit: {
        name: 'Exit',
        navigationOptions: {
            title: 'Sair'
        },
        screen: Logout
    }
}, {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    contentComponent: MenuContent,
})