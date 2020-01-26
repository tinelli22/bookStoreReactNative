import React from 'react'
import { Text } from 'react-native'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import MenuContent from '../../../components/MenuContent'

function Home({ user, navigation: { navigationOptions } }) {
    navigationOptions = {
        title: 'Inicio',
    }

    return (
        <MenuContent>
            <Layout>
                <Text>{user.email}</Text>
            </Layout>
        </MenuContent>
    )
}

const mapStateToProps = ({ user: { user } }, ownProps) => {
    
    return {
        user: user,
    }
}

export default connect(mapStateToProps, null)(Home)