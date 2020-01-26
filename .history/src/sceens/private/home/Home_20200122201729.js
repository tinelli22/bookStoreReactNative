import React from 'react'
import { Text } from 'react-native'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'

function Home({ user }) {
    
    console.log(user)
    return (
        <Layout>
            <Text>{user.email}</Text>
        </Layout>
    )
}

const mapStateToProps = ({ user: { user } }, ownProps) => {
    
    return {
        user: user,
    }
}

export default connect(mapStateToProps, null)(Home)