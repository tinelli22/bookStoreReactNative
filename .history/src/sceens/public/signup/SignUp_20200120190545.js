import React, { } from 'react'
import { View, Text, } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Form, Button, Toast } from 'native-base'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'
import { InputDefault, InputNumber } from '../../../components/Inputs'
import { addUser, createAccount } from '../../../services/account'
import { messageSuccess, messageError } from '../../../components/ToastMessage'


function SignUp({ valid, handleSubmit, reset, navigation: { navigate } }) {

    const save = values => {
        createAccount(values.email, values.password).then(resp => {
            const user = {
                ...values,
                uid: resp.user.uid
            }

            addUser(user).then(_ => {
                messageSuccess({text: 'Conta criada com sucesso. Efetue o login'})
                navigate('Public')
                reset()
            })
        }).catch(err => messageError({text: 'Email já em uso.'}))
    }

    return(
        <Layout>
            <Form>
                <Field name={'name'} label={'nome'}  component={InputDefault}  />
                <Field name={'email'} label={'email'} type={'email-address'} component={InputDefault}  />
                <Field name={'password'} label={'senha'} secure={true} component={InputDefault}  />
                
                <Button primary block disabled={!valid} onPress={handleSubmit(save)}>
                    <Text style={styles.text}>Cadastrar</Text>
                </Button>
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