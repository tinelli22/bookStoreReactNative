import React, { } from 'react'
import { View, } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Form } from 'native-base'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'
import { InputDefault, InputNumber } from '../../../components/Inputs'


function SignUp({ valid, handleSubmit, reset,  }) {

    return(
        <Layout>
            <Form>
                <Field name={'name'} label={'nome'}  component={InputDefault}  />
                <Field name={'email'} label={'email'} type={'email-address'} component={InputDefault}  />
                <Field name={'password'} label={'senha'} secure={true} component={InputDefault}  />
                <Field name={'phone'} label={'celular'}  component={InputNumber}  />
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