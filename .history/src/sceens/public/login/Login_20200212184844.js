import React, { useEffect, useState } from 'react'
import { View, Text,  } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Button, Form, Icon } from 'native-base'
import { InputDefault, InputPassword } from '../../../components/Inputs'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'
import { loginWithEmailAndPassword, isUserLogged } from '../../../services/account'
import { messageWarning } from '../../../components/ToastMessage'
import { loadUserService } from '../../../services/users'
import { loadUserAction } from '../../../store/actions/user'


function Login({ navigation: { navigate }, handleSubmit, valid, reset, onLoadUser }) {

    const [showPassword, setShowPassword] = useState(true)

    

    const login = values => {
        loginWithEmailAndPassword(values.email, values.password)
        .then(resp => {
           loadUserService(resp.user.uid).then(resp => {
               onLoadUser(resp.data())
               reset()
               navigate('Private')
           })
        })
        .catch(err => console.error(err))
    }

    return(
        <Layout>
            <Form style={styles.container}>
                <Field name={'email'} label={'Digite o email'} type={'email-address'} component={InputDefault} />
                <Field name={'password'} label={'Senha'} secure={showPassword} onShow={setShowPassword} 
                component={InputPassword} />
                <Button block info disabled={!valid} onPress={handleSubmit(login)}>
                    <Text style={styles.label}>Entrar</Text>
                </Button>
            </Form>

            
            <Text style={styles.text} onPress={() => navigate('Account')} >Clique aqui para cadastrar.</Text>
        </Layout>
    )
}

Login = reduxForm({ form: 'login', validate, initialValues: { email: null, password: null }})(Login)

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onLoadUser: user => dispatch(loadUserAction(user)),
    }
}

export default connect(null, mapDispatchToProps)(Login)