import React from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

function Info({ user, }) {


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

Info = reduxForm({ form: 'info', })(Info)

export default connect(mapStateToProps, mapDispatchToProps)(Info)