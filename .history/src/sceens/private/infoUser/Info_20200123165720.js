import React from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'


function Info({ }) {


    return(
        <Layout>

        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

const mapStateToProps = ({ user: { user }}, ownProps) => {
    return {
        user: user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)