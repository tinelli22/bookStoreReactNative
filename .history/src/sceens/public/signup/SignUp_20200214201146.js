import React, { useState } from 'react'
import { View, Text, } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Form, Button, Toast } from 'native-base'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'
import { InputDefault, InputPassword } from '../../../components/Inputs'
import { addUser, createAccount } from '../../../services/account'
import { messageToast } from '../../../components/ToastMessage'


function SignUp({ valid, handleSubmit, reset, navigation: { navigate } }) {

    const [showPassword, setShowPassword] = useState(true)
    
    const save = values => {
        createAccount(values.email, values.password).then(resp => {
            const user = {
                ...values,
                uid: resp.user.uid
            }

            addUser(user).then(_ => {
                messageToast('Conta criada com sucesso. Efetue o login')
                navigate('Public')
                reset()
            })
        }).catch(err => messageToast('Email já em uso', 'danger'))
    }

    return(
        <Layout>
            <Form>
                <Field name={'name'} label={'nome'}  component={InputDefault}  />
                <Field name={'email'} label={'email'} type={'email-address'} component={InputDefault}  />
                <Field name={'password'} label={'Senha'} secure={showPassword} onShow={setShowPassword} 
                component={InputPassword} />
                
                <Button primary full disabled={!valid} onPress={handleSubmit(save)}>
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