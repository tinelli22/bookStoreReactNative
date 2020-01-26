import React, { } from 'react'
import { View, Text,  } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Button, Form, Icon } from 'native-base'
import { InputDefault } from '../../../components/Inputs'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'
import { loginWithEmailAndPassword } from '../../../services/account'


function Login({ navigation: { navigate }, handleSubmit, valid, reset, }) {

    const login = values => {
        loginWithEmailAndPassword(values.email, values.password).catch(err => console.log(err))
        .then(resp => {
            console.log(resp)
            navigate('Private')
        })
    }

    return(
        <Layout>
            <Form style={styles.container}>
                <Field name={'email'} label={'Digite o email'} component={InputDefault} />
                <Field name={'password'} label={'Digite a senha'} secure={true} component={InputDefault} />
                <Button block info disabled={!valid}>
                    <Text style={styles.label}>Entrar</Text>
                </Button>
            </Form>

            
            <Text style={styles.text} onPress={() => navigate('Account')} >Clique aqui para cadastrar.</Text>
        </Layout>
    )
}

Login = reduxForm({ form: 'login', validate, initialValues: {}})(Login)

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(Login)