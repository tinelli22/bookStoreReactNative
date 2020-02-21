import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'native-base'
import { logoutUserAction } from '../../../store/actions/user'
import { logout } from '../../../services/account'

function Logout({ navigation: { navigate }, onLogoutUser } ) {

    const toLogout = () => {
        logout().then(_ => {
            onLogoutUser()
            navigate('Public')
        })
    }

    return(
        <View>
            <Button block info onPress={() => toLogout()}>
                <Text>Fazer logoff</Text>
            </Button>
        </View>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogoutUser: () => logoutUserAction
    }
}

export default connect(null, mapDispatchToProps)(Logout)