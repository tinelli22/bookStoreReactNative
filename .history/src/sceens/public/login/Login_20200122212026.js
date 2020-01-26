import React, { useEffect } from 'react'
import { View, Text,  } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Button, Form, Icon } from 'native-base'
import { InputDefault } from '../../../components/Inputs'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'
import { loginWithEmailAndPassword, isUserLogged } from '../../../services/account'
import { messageWarning } from '../../../components/ToastMessage'
import { load } from '../../../services/users'
import { loadUser } from '../../../store/actions/user'


function Login({ navigation: { navigate }, handleSubmit, valid, reset, onLoadUser }) {

    useEffect(() => {
        isUserLogged(user => {
            if(user) {
                callLoad(user)
            }
        })
    }, [])

    const callLoad = user => {
        load(user.uid).then(({ docs  }) => {
             docs.forEach(d => onLoadUser(d.data()))
             navigate('Private')
        }).catch(err => console.error(err))
    }

    const login = values => {
        loginWithEmailAndPassword(values.email, values.password)
        .then(resp => {
           const { user } = resp
           callLoad(user)
        })
        .catch(err => console.error(err))
    }

    return(
        <Layout>
            <Form style={styles.container}>
                <Field name={'email'} label={'Digite o email'} type={'email-address'} component={InputDefault} />
                <Field name={'password'} label={'Digite a senha'} secure={true} component={InputDefault} />
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
       onLoadUser: user => dispatch(loadUser(user)),
    }
}

export default connect(null, mapDispatchToProps)(Login)