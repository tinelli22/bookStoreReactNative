import React, { } from 'react'
import { View, } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Form } from 'native-base'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

function SignUp({ }) {

    return(
        <Layout>
            <Form>
                
            </Form>
        </Layout>
    )
}

SignUp = reduxForm({ form: 'signup', })

const mapDispatchToProps = (dispatch, ownProps) => {
    
}

export default connect(null, mapDispatchToProps)(SignUp)