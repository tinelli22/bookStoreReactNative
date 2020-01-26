import React, { } from 'react'
import { View, Text,  } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Button, Form, Icon } from 'native-base'
import { InputDefault } from '../../../components/Inputs'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { validate } from './Validation'


function Login({ navigation }) {

    return(
        <Layout>
            <Form style={styles.container}>
                <Field name={'email'} label={'Digite o email'} component={InputDefault} />
                <Field name={'password'} label={'Digite a senha'} secure={true} component={InputDefault} />
                <Button block info>
                    <Text style={styles.label}>Entrar</Text>
                </Button>
            </Form>

            
            <Text style={styles.text} onPress={() => navigation.navigate('Account')} >Clique aqui para cadastrar.</Text>
            <Text style={styles.text}>Clique aqui para recuperar conta.</Text>
        </Layout>
    )
}

Login = reduxForm({ form: 'login', validate})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(Login)