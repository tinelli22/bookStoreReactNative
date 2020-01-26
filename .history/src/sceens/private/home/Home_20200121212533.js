import React from 'react'
import { Text } from 'react-native'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'

function Home({ user }) {
    
    
    return (
        <Layout>
            <Text>home screen</Text>
        </Layout>
    )
}

const mapStateToProps = ({ user }, ownProps) => {
    return {
        user: user.user
    }
}

export default connect(mapStateToProps, null)(Home)