import React from 'react'
import { Text } from 'react-native'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'

function Home({ user, navigation}) {
   

    return (
        <Layout>
            <Header navigation={navigation} />
            <Text>jjdaidijsdijsidi</Text>
        </Layout>
    )
}

const mapStateToProps = ({ user: { user } }, ownProps) => {
    
    return {
        user: user,
    }
}

export default connect(mapStateToProps, null)(Home)