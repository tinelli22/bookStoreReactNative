import React from 'react'
import { Text } from 'react-native'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'

function Home({ }) {
    return (
        <Layout>
            <Text>home screen</Text>
        </Layout>
    )
}

export default connect(null, null)(Home)