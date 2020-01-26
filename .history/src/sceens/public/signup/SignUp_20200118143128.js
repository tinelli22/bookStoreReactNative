import React, { } from 'react'
import { View, } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Form } from 'native-base'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'
import { InputDefault } from '../../../components/Inputs'

function SignUp({ }) {

    return(
        <Layout>
            <Form>
                <Field name={'name'} component={InputDefault} />
            </Form>
        </Layout>
    )
}

SignUp = reduxForm({ form: 'signup', validate})(SignUp)

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(SignUp)